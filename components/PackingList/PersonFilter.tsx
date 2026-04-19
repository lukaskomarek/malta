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
    <div className="flex gap-2 flex-wrap">
      {filters.map((f) => {
        const isActive = selected === f.value
        const color = f.value !== 'all' ? PERSON_CONFIG[f.value as Person].color : '#555'
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              isActive ? 'text-white shadow-sm' : 'bg-white text-gray-600 hover:border-gray-300'
            }`}
            style={
              isActive
                ? { backgroundColor: color, borderColor: color }
                : { borderColor: '#e5e7eb' }
            }
          >
            {f.label}
          </button>
        )
      })}
    </div>
  )
}
