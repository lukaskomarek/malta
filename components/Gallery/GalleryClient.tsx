'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Photo } from '@/lib/icloud'

type DayGroup = {
  label: string
  photos: Photo[]
}

function groupByDay(photos: Photo[]): DayGroup[] {
  const map = new Map<string, Photo[]>()

  for (const photo of photos) {
    const key = new Date(photo.date).toLocaleDateString('cs-CZ', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    })
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(photo)
  }

  return Array.from(map.entries()).map(([label, photos]) => ({ label, photos }))
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const open = useCallback((idx: number) => setLightboxIndex(idx), [])
  const close = useCallback(() => setLightboxIndex(null), [])
  const prev = useCallback(() => setLightboxIndex(i => (i !== null ? Math.max(0, i - 1) : null)), [])
  const next = useCallback(() => setLightboxIndex(i => (i !== null ? Math.min(photos.length - 1, i + 1) : null)), [photos.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex, close, prev, next])

  if (!photos.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-stone-400">
        <span className="text-5xl mb-4">📷</span>
        <p className="text-sm">Zatím žádné fotky. Brzy přibydou!</p>
      </div>
    )
  }

  const groups = groupByDay(photos)
  const currentPhoto = lightboxIndex !== null ? photos[lightboxIndex] : null

  return (
    <>
      <div className="space-y-6">
        {groups.map(group => (
          <section key={group.label}>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
              {capitalize(group.label)}
            </h2>
            <div className="columns-2 gap-1">
              {group.photos.map(photo => {
                const globalIdx = photos.indexOf(photo)
                return (
                  <div key={photo.guid} className="break-inside-avoid mb-1">
                    <button
                      onClick={() => open(globalIdx)}
                      className="w-full overflow-hidden rounded-sm bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6CA8]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.thumbUrl}
                        alt=""
                        className="w-full h-auto block transition-opacity duration-200 hover:opacity-90"
                        loading="lazy"
                        width={photo.width}
                        height={photo.height}
                      />
                    </button>
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>

      {currentPhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Zavřít"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          {lightboxIndex > 0 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-3 text-white/70 hover:text-white p-3"
              aria-label="Předchozí"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPhoto.fullUrl}
            alt=""
            onClick={e => e.stopPropagation()}
            className="max-w-[calc(100vw-80px)] max-h-[calc(100vh-80px)] object-contain rounded shadow-2xl"
          />

          {/* Next */}
          {lightboxIndex < photos.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-3 text-white/70 hover:text-white p-3"
              aria-label="Následující"
            >
              <ChevronRight size={32} />
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {lightboxIndex + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  )
}
