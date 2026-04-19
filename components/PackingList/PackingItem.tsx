'use client'

import { useState } from 'react'
import { PackingItem as PackingItemType, Person, PERSON_CONFIG } from '@/types'
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
      <div className="px-2 py-2 rounded-lg bg-blue-50 border border-blue-100 space-y-1.5">
        <input
          autoFocus
          value={editLabel}
          onChange={(e) => setEditLabel(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel() }}
          className="w-full px-2.5 py-1 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/30 bg-white"
          placeholder="Název"
        />
        <input
          value={editNote}
          onChange={(e) => setEditNote(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel() }}
          className="w-full px-2.5 py-1 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1B6CA8]/30 bg-white"
          placeholder="Poznámka (volitelné)"
        />
        <div className="flex gap-2">
          <button
            onClick={handleSave}
            disabled={!editLabel.trim()}
            className="flex-1 py-1 text-xs font-medium text-white rounded-lg disabled:opacity-40"
            style={{ backgroundColor: '#1B6CA8' }}
          >
            Uložit
          </button>
          <button
            onClick={handleCancel}
            className="px-3 py-1 text-xs text-gray-500 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
          >
            Zrušit
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`flex items-center gap-2 py-2 px-2 rounded-lg transition-colors ${
        hover ? 'bg-amber-50/60' : ''
      } ${item.checked ? 'opacity-50' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        onClick={() => onToggle(item.id)}
        className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
          item.checked
            ? 'border-[#1B6CA8] bg-[#1B6CA8]'
            : 'border-gray-300 hover:border-[#1B6CA8]'
        }`}
      >
        {item.checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <span className={`text-sm ${item.checked ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {item.label}
        </span>
        {item.note && (
          <span className="text-xs text-gray-400 ml-1.5">({item.note})</span>
        )}
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        {ALL_PERSONS.map((p) => {
          const assigned = assignedPersons.includes(p)
          return (
            <PersonAvatar
              key={p}
              person={p}
              faded={!assigned}
              onClick={() => onTogglePerson(item.id, p)}
            />
          )
        })}
      </div>

      <button
        onClick={() => setEditing(true)}
        className={`text-gray-300 hover:text-[#1B6CA8] transition-opacity text-sm leading-none ml-0.5 ${
          hover ? 'opacity-100' : 'opacity-0'
        }`}
        title="Upravit"
      >
        ✎
      </button>

      <button
        onClick={() => onDelete(item.id)}
        className={`text-gray-300 hover:text-red-400 transition-opacity text-lg leading-none ${
          hover ? 'opacity-100' : 'opacity-0'
        }`}
        title="Smazat"
      >
        ×
      </button>
    </div>
  )
}
