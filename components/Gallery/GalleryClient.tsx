'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight, ChevronDown, Play } from 'lucide-react'
import type { Photo } from '@/lib/icloud'

const INITIAL_VISIBLE = 10

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

type Lightbox = { dayLabel: string; index: number }

type DaySectionProps = {
  group: DayGroup
  isLastDay: boolean
  onOpen: (dayLabel: string, index: number) => void
}

function DaySection({ group, isLastDay, onOpen }: DaySectionProps) {
  const [isOpen, setIsOpen] = useState(isLastDay)
  const [showAll, setShowAll] = useState(false)

  const visiblePhotos = isLastDay && !showAll
    ? group.photos.slice(0, INITIAL_VISIBLE)
    : group.photos
  const hiddenCount = group.photos.length - INITIAL_VISIBLE
  const hasMore = isLastDay && !showAll && hiddenCount > 0

  return (
    <section>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-full flex items-center justify-between py-2.5 text-left group"
      >
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
          {capitalize(group.label)}
        </h2>
        <span className="text-xs text-stone-400 flex items-center gap-1.5 group-hover:text-stone-600 transition-colors">
          {group.photos.length}{' '}
          {group.photos.length === 1 ? 'fotka' : group.photos.length < 5 ? 'fotky' : 'fotek'}
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 pb-4">
          {visiblePhotos.map((photo) => {
            const dayIdx = group.photos.indexOf(photo)
            return (
              <button
                key={photo.guid}
                onClick={() => onOpen(group.label, dayIdx)}
                className="relative w-full overflow-hidden rounded-sm bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B6CA8] group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.thumbUrl}
                  alt=""
                  className="w-full h-auto block transition-opacity duration-200 group-hover:opacity-90"
                  loading="lazy"
                  width={photo.width}
                  height={photo.height}
                />
                {photo.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 rounded-full p-3 group-hover:bg-black/70 transition-colors">
                      <Play size={24} className="text-white fill-white" />
                    </div>
                  </div>
                )}
              </button>
            )
          })}

          {hasMore && (
            <button
              onClick={() => setShowAll(true)}
              className="mt-2 w-full py-2.5 rounded-sm border border-stone-200 text-xs text-stone-500 hover:bg-stone-50 hover:text-stone-700 transition-colors"
            >
              Zobrazit více fotek ({hiddenCount})
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default function GalleryClient({ photos }: { photos: Photo[] }) {
  const groups = groupByDay(photos)
  const [lightbox, setLightbox] = useState<Lightbox | null>(null)

  const currentGroup = lightbox ? groups.find(g => g.label === lightbox.dayLabel) ?? null : null
  const currentPhoto = currentGroup ? currentGroup.photos[lightbox!.index] : null

  const close = useCallback(() => setLightbox(null), [])

  const prev = useCallback(() => {
    setLightbox(l => l && l.index > 0 ? { ...l, index: l.index - 1 } : l)
  }, [])

  const next = useCallback(() => {
    setLightbox(l => {
      if (!l) return l
      const group = groups.find(g => g.label === l.dayLabel)
      if (!group) return l
      return l.index < group.photos.length - 1 ? { ...l, index: l.index + 1 } : l
    })
  }, [groups])

  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, close, prev, next])

  if (!photos.length) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-stone-400">
        <span className="text-5xl mb-4">📷</span>
        <p className="text-sm">Zatím žádné fotky. Brzy přibydou!</p>
      </div>
    )
  }

  return (
    <>
      <div className="space-y-1">
        {groups.map((group, i) => (
          <DaySection
            key={group.label}
            group={group}
            isLastDay={i === 0}
            onOpen={(dayLabel, index) => setLightbox({ dayLabel, index })}
          />
        ))}
      </div>

      {currentPhoto && lightbox !== null && currentGroup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Zavřít"
          >
            <X size={24} />
          </button>

          {lightbox.index > 0 && (
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-3 text-white/70 hover:text-white p-3"
              aria-label="Předchozí"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {currentPhoto.type === 'video' ? (
            <video
              key={currentPhoto.guid}
              src={currentPhoto.fullUrl}
              controls
              autoPlay
              playsInline
              onClick={e => e.stopPropagation()}
              className="max-w-[calc(100vw-80px)] max-h-[calc(100vh-80px)] rounded shadow-2xl"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={currentPhoto.fullUrl}
              alt=""
              onClick={e => e.stopPropagation()}
              className="max-w-[calc(100vw-80px)] max-h-[calc(100vh-80px)] object-contain rounded shadow-2xl"
            />
          )}

          {lightbox.index < currentGroup.photos.length - 1 && (
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-3 text-white/70 hover:text-white p-3"
              aria-label="Následující"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
            {lightbox.index + 1} / {currentGroup.photos.length}
          </div>
        </div>
      )}
    </>
  )
}
