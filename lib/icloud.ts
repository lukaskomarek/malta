import { unstable_cache } from 'next/cache'

const ALBUM_TOKEN = 'B1e53qWtHriv2h6'

type RawDerivative = {
  checksum: string
  fileSize: number
  width: number
  height: number
}

type RawPhoto = {
  photoGuid: string
  dateCreated: string
  batchDateCreated: string
  mediaAssetType: string
  derivatives: Record<string, RawDerivative>
}

type AssetItem = {
  url_location: string
  url_path: string
  scheme: string
}

export type Photo = {
  guid: string
  date: string  // ISO string, Date serializes to string through cache
  type: 'photo' | 'video'
  thumbUrl: string
  fullUrl: string
  width: number
  height: number
}

export type GalleryData = {
  photos: Photo[]
  lastUpdated: string | null  // ISO string — max batchDateCreated across all photos
}

async function fetchWebstream(): Promise<{ host: string; photos: RawPhoto[] }> {
  const initial = await fetch(
    `https://p01-sharedstreams.icloud.com/${ALBUM_TOKEN}/sharedstreams/webstream`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' },
      body: JSON.stringify({ streamCtag: null }),
    }
  )

  let host = 'p01-sharedstreams.icloud.com'

  if (initial.status === 330) {
    const redirect = await initial.json()
    host = redirect['X-Apple-MMe-Host'] as string

    const retried = await fetch(
      `https://${host}/${ALBUM_TOKEN}/sharedstreams/webstream`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' },
        body: JSON.stringify({ streamCtag: null }),
      }
    )
    const data = await retried.json()
    return { host, photos: data.photos ?? [] }
  }

  const data = await initial.json()
  return { host, photos: data.photos ?? [] }
}

async function fetchAssetUrls(host: string, photoGuids: string[]): Promise<Record<string, AssetItem>> {
  const BATCH = 25
  const allItems: Record<string, AssetItem> = {}

  for (let i = 0; i < photoGuids.length; i += BATCH) {
    const batch = photoGuids.slice(i, i + BATCH)
    const res = await fetch(
      `https://${host}/${ALBUM_TOKEN}/sharedstreams/webasseturls`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Origin': 'https://www.icloud.com' },
        body: JSON.stringify({ photoGuids: batch }),
      }
    )
    const data = await res.json()
    Object.assign(allItems, data.items ?? {})
  }

  return allItems
}

function buildUrl(item: AssetItem): string {
  return `https://${item.url_location}${item.url_path}`
}

function pickDerivative(derivatives: Record<string, RawDerivative>, minWidth: number): RawDerivative | undefined {
  const all = Object.values(derivatives).filter(d => d.width > 0 && d.height > 0)
  all.sort((a, b) => a.width - b.width)
  return all.find(d => d.width >= minWidth) ?? all[all.length - 1]
}

// For videos: the actual video file has by far the largest fileSize among derivatives.
// Remaining derivatives with dimensions are poster frames (JPEG thumbnails).
function pickVideoDerivative(derivatives: Record<string, RawDerivative>): RawDerivative | undefined {
  const all = Object.values(derivatives).filter(d => d.fileSize > 0)
  all.sort((a, b) => b.fileSize - a.fileSize)
  return all[0]
}

function pickPosterDerivative(derivatives: Record<string, RawDerivative>, minWidth: number): RawDerivative | undefined {
  const videoFile = pickVideoDerivative(derivatives)
  const all = Object.values(derivatives).filter(
    d => d.width > 0 && d.height > 0 && d.checksum !== videoFile?.checksum
  )
  all.sort((a, b) => a.width - b.width)
  return all.find(d => d.width >= minWidth) ?? all[all.length - 1]
}

export const getGalleryData = unstable_cache(
  async (): Promise<GalleryData> => {
    try {
      const { host, photos } = await fetchWebstream()
      if (!photos.length) return { photos: [], lastUpdated: null }

      // Keep everything — previously only videos were excluded, now we include them too
      const media = photos
      const mediaGuids = media.map(p => p.photoGuid)
      const items = await fetchAssetUrls(host, mediaGuids)

      // Latest batchDateCreated = when items were last added to the album
      const lastUpdated = media
        .map(p => p.batchDateCreated)
        .filter(Boolean)
        .sort()
        .at(-1) ?? null

      const mapped = media
        .map((photo): Photo | null => {
          const isVideo = photo.mediaAssetType === 'video'

          const thumb = isVideo
            ? pickPosterDerivative(photo.derivatives, 600)
            : pickDerivative(photo.derivatives, 600)
          const full = isVideo
            ? pickVideoDerivative(photo.derivatives)
            : pickDerivative(photo.derivatives, 2000)

          if (!thumb || !full) return null

          const thumbItem = items[thumb.checksum]
          const fullItem = items[full.checksum]
          if (!thumbItem || !fullItem) return null

          return {
            guid: photo.photoGuid,
            date: new Date(photo.dateCreated).toISOString(),
            type: isVideo ? 'video' : 'photo',
            thumbUrl: buildUrl(thumbItem),
            fullUrl: buildUrl(fullItem),
            width: full.width,
            height: full.height,
          }
        })
        .filter((p): p is Photo => p !== null)
        .sort((a, b) => b.date.localeCompare(a.date))

      return { photos: mapped, lastUpdated }
    } catch (err) {
      console.error('iCloud fetch failed:', err)
      return { photos: [], lastUpdated: null }
    }
  },
  ['icloud-photos-v8'],
  { revalidate: 3600 }
)
