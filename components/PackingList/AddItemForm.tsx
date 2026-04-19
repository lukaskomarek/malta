'use client'

import { useState } from 'react'
import { Person, PERSON_CONFIG, CATEGORIES, ALL_PERSONS } from '@/types'

const PERSONS: Person[] = ALL_PERSONS

interface Props {
  categoryId: string
  onAdd: (label: string, note: string, assignedTo: Person[], category: string) => void
  onCancel: () => void
}

export default function AddItemForm({ categoryId, onAdd, onCancel }: Props) {
  const [label, setLabel] = useState('')
  const [note, setNote] = useState('')
  const [selected, setSelected] = useState<Person[]>(ALL_PERSONS)
  const [category, setCategory] = useState(categoryId)

  const toggle = (p: Person) => {
    setSelected((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!label.trim()) return
    onAdd(label.trim(), note.trim(), selected.length > 0 ? selected : ALL_PERSONS, category)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 p-3 bg-blue-50 rounded-xl border border-blue-100 space-y-2">
      <input
        autoFocus
        type="text"
        placeholder="Název položky *"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/30 bg-white"
      />
      <input
        type="text"
        placeholder="Poznámka (volitelné)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/30 bg-white"
      />
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-gray-500">Pro:</span>
        {PERSONS.map((p) => {
          const cfg = PERSON_CONFIG[p]
          const active = selected.includes(p)
          return (
            <button
              key={p}
              type="button"
              onClick={() => toggle(p)}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-all`}
              style={
                active
                  ? { backgroundColor: cfg.color, borderColor: cfg.color, color: '#fff' }
                  : { borderColor: '#d1d5db', color: '#6b7280' }
              }
            >
              {cfg.label}
            </button>
          )
        })}
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-1.5 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/30 bg-white"
      >
        {CATEGORIES.map((c) => (
          <option key={c.id} value={c.id}>
            {c.icon} {c.label}
          </option>
        ))}
      </select>
      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          disabled={!label.trim()}
          className="flex-1 py-1.5 text-sm font-medium text-white rounded-lg disabled:opacity-40 transition-opacity"
          style={{ backgroundColor: '#1B6CA8' }}
        >
          Přidat
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 text-sm text-gray-500 hover:text-gray-700 rounded-lg border border-gray-200 bg-white"
        >
          Zrušit
        </button>
      </div>
    </form>
  )
}
