'use client'

import { useState } from 'react'
import { Pencil, Trash2, Check } from 'lucide-react'
import { PackingItem as PackingItemType, Person } from '@/types'
import PersonAvatar from './PersonAvatar'

const ALL_PERSONS: Person[] = ['lukas', 'petra', 'deti']

interface Props {
  item: PackingItemType
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onTogglePerson: (id: string, person: Person) => void
  onEdit: (id: string, label: string, note: string) => void
}

export default function PackingItem({ item, onToggle, onDelete, onTogglePerson, onEdit }: Props) {
  const [hover, setHover] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editLabel, setEditLabel] = useState(item.label)
  const [editNote, setEditNote] = useState(item.note ?? '')

  const assignedPersons = item.assignedTo.includes('all') ? ALL_PERSONS : item.assignedTo as Person[]

  const handleSave = () => {
    if (!editLabel.trim()) return
    onEdit(item.id, editLabel.trim(), editNote.trim())
    setEditing(false)
  }

  const handleCancel = () => {
    setEditLabel(item.label)
    setEditNote(item.note ?? '')
    setEditing(false)
  }

  if (editing) {
    return (
      <div className="mx-1 my-1 px-3 py-2.5 rounded-xl bg-blue-50 border border-blue-200 space-y-2">
        <input
          autoFocus
          value={editLabel}
          onChange={(e) => setEditLabel(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel() }}
          className="w-full px-3 py-1.5 text-sm rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/25 bg-white"
          placeholder="Název"
        />
        <input
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel() }}
          className="w-full px-3 py-1.5 text-sm rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/25 bg-white"
          placeholder="Poznámka (volitelné)"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={!editLabel.trim()}
            className="flex-1 py-1.5 text-xs font-semibold text-white rounded-lg disabled:opacity-40 transition-opacity flex items-center justify-center gap-1.5"
            style={{ backgroundColor: '#1B6CA8' }}
          >
            <Check size={13} strokeWidth={2.5} /> Uložit
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-1.5 text-xs text-stone-500 rounded-lg border border-stone-200 bg-white hover:bg-stone-50"
          >
            Zrušit
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-2.5 py-2 px-3 rounded-xl transition-colors ${
        hover ? 'bg-stone-50' : ''
      } ${item.checked ? 'opacity-40' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(item.id)}
        className={`w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all ${
          item.checked
            ? 'border-[#1B6CA8] bg-[#1B6CA8]'
            : 'border-stone-300 hover:border-[#1B6CA8]'
        }`}
      >
        {item.checked && <Check size={11} strokeWidth={3} className="text-white" />}
      </button>

      {/* Label */}
      <div className="flex-1 min-w-0">
        <span className={`text-sm ${item.checked ? 'line-through text-stone-400' : 'text-stone-800'}`}>
          {item.label}
        </span>
        {item.note && (
          <span className="text-xs text-stone-400 ml-1.5 italic">{item.note}</span>
        )}
      </div>

      {/* Person avatars */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {ALL_PERSONS.map((p) => (
          <PersonAvatar
            key={p}
            person={p}
            faded={!assignedPersons.includes(p)}
            onClick={() => onTogglePerson(item.id, p)}
          />
        ))}
      </div>

      {/* Action buttons */}
      <div className={`flex items-center gap-0.5 transition-opacity ${hover ? 'opacity-100' : 'opacity-0'}`}>
        <button
          onClick={() => setEditing(true)}
          className="w-6 h-6 flex items-center justify-center rounded-lg text-stone-400 hover:text-[#1B6CA8] hover:bg-blue-50 transition-colors"
          title="Upravit"
        >
          <Pencil size={13} />
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="w-6 h-6 flex items-center justify-center rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors"
          title="Smazat"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  )
}
