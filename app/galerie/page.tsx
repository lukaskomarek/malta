import { getPhotos } from '@/lib/icloud'
import GalleryClient from '@/components/Gallery/GalleryClient'

export const metadata = { title: 'Fotogalerie · Malta 2026' }

export default async function GaleriePage() {
  const photos = await getPhotos()

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
      <GalleryClient photos={photos} />
    </div>
  )
}
