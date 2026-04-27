import { getGalleryData } from '@/lib/icloud'
import GalleryClient from '@/components/Gallery/GalleryClient'

export const metadata = { title: 'Fotogalerie · Malta 2026' }

function formatLastUpdated(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export default async function GaleriePage() {
  const { photos, lastUpdated } = await getGalleryData()

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2
          className="text-xl font-bold text-stone-800"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Fotogalerie
        </h2>
        {photos.length > 0 && (
          <span className="text-xs text-stone-400">{photos.length} fotek</span>
        )}
      </div>

      {lastUpdated && (
        <p className="text-xs text-stone-400 mb-4">
          Naposledy přidáno: {formatLastUpdated(lastUpdated)}
        </p>
      )}

      <GalleryClient photos={photos} />
    </div>
  )
}
