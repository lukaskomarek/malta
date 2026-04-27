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
  thumbUrl: string
  fullUrl: string
  width: number
  height: number
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

export const getPhotos = unstable_cache(
  async (): Promise<Photo[]> => {
    try {
      const { host, photos } = await fetchWebstream()
      if (!photos.length) return []

      const photoGuids = photos.map(p => p.photoGuid)
      const items = await fetchAssetUrls(host, photoGuids)

      return photos
        .map((photo): Photo | null => {
          const thumb = pickDerivative(photo.derivatives, 600)
          const full = pickDerivative(photo.derivatives, 2000)
          if (!thumb || !full) return null

          const thumbItem = items[thumb.checksum]
          const fullItem = items[full.checksum]
          if (!thumbItem || !fullItem) return null

          return {
            guid: photo.photoGuid,
            date: new Date(photo.dateCreated).toISOString(),
            thumbUrl: buildUrl(thumbItem),
            fullUrl: buildUrl(fullItem),
            width: full.width,
            height: full.height,
          }
        })
        .filter((p): p is Photo => p !== null)
        .sort((a, b) => b.date.localeCompare(a.date))
    } catch (err) {
      console.error('iCloud fetch failed:', err)
      return []
    }
  },
  ['icloud-photos-v3'],
  { revalidate: 3600 }
)
