'use client'

import { Person, PERSON_CONFIG } from '@/types'

interface Props {
  selected: Person | 'all'
  onChange: (person: Person | 'all') => void
}

const filters: { value: Person | 'all'; label: string }[] = [
  { value: 'all', label: 'Vše' },
  { value: 'lukas', label: 'Lukáš' },
  { value: 'petra', label: 'Petra' },
  { value: 'deti', label: 'Děti' },
]

export default function PersonFilter({ selected, onChange }: Props) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {filters.map((f) => {
        const isActive = selected === f.value
        const color = f.value !== 'all' ? PERSON_CONFIG[f.value as Person].color : '#1B6CA8'
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive
                ? 'text-white shadow-sm'
                : 'bg-white text-stone-500 border border-stone-200 hover:border-stone-300 hover:text-stone-700'
            }`}
            style={isActive ? { backgroundColor: color } : {}}
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
