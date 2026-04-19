'use client'

import { useState, useEffect } from 'react'
import { Person, CATEGORIES, PERSON_CONFIG } from '@/types'
import { PackingItem } from '@/types'
import { usePackingSync } from '@/lib/usePackingSync'
import PersonFilter from './PersonFilter'
import CategorySection from './CategorySection'

const FILTER_KEY = 'malta-filter-v1'
const ALL_PERSONS: Person[] = ['lukas', 'petra', 'deti']

function generateId() {
  return `item_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`
}

function itemMatchesPerson(item: PackingItem, filter: Person | 'all'): boolean {
  if (filter === 'all') return true
  if (item.assignedTo.includes('all')) return true
  return item.assignedTo.includes(filter)
}

export default function PackingList() {
  const { items, loaded, synced, save } = usePackingSync()
  const [filter, setFilter] = useState<Person | 'all'>('all')

  useEffect(() => {
    const savedFilter = localStorage.getItem(FILTER_KEY) as Person | 'all' | null
    setFilter(savedFilter ?? 'all')
  }, [])

  const handleFilterChange = (f: Person | 'all') => {
    setFilter(f)
    localStorage.setItem(FILTER_KEY, f)
  }

  const handleToggle = (id: string) => {
    save(items.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)))
  }

  const handleDelete = (id: string) => {
    save(items.filter((i) => i.id !== id))
  }

  const handleTogglePerson = (id: string, person: Person) => {
    save(
      items.map((item) => {
        if (item.id !== id) return item
        const current: Person[] = item.assignedTo.includes('all')
          ? [...ALL_PERSONS]
          : (item.assignedTo as Person[])
        const has = current.includes(person)
        const next = has ? current.filter((p) => p !== person) : [...current, person]
        return { ...item, assignedTo: next.length > 0 ? next : current }
      })
    )
  }

  const handleEdit = (id: string, label: string, note: string) => {
    save(items.map((i) => i.id === id ? { ...i, label, note: note || undefined } : i))
  }

  const handleAdd = (label: string, note: string, assignedTo: Person[], category: string) => {
    const newItem: PackingItem = {
      id: generateId(),
      label,
      note: note || undefined,
      category,
      assignedTo,
      checked: false,
      addedBy: filter !== 'all' ? filter : undefined,
    }
    save([...items, newItem])
  }

  const handleDeleteChecked = () => {
    const visible = items.filter((i) => itemMatchesPerson(i, filter))
    const checkedIds = new Set(visible.filter((i) => i.checked).map((i) => i.id))
    if (checkedIds.size === 0) return
    if (!confirm(`Smazat ${checkedIds.size} zaškrtnutých položek?`)) return
    save(items.filter((i) => !checkedIds.has(i.id)))
  }

  const handleReset = () => {
    if (!confirm('Opravdu začít znovu? Všechna zaškrtnutí budou odstraněna.')) return
    save(items.map((i) => ({ ...i, checked: false })))
  }

  if (!loaded) {
    return (
      <div className="py-16 flex flex-col items-center gap-3 text-gray-400">
        <div className="w-6 h-6 border-2 border-[#1B6CA8] border-t-transparent rounded-full animate-spin" />
        <span className="text-sm">Načítám seznam…</span>
      </div>
    )
  }

  const visibleItems = items.filter((i) => itemMatchesPerson(i, filter))
  const checkedCount = visibleItems.filter((i) => i.checked).length
  const totalCount = visibleItems.length
  const progress = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <PersonFilter selected={filter} onChange={handleFilterChange} />
          {synced && (
            <span className="text-xs text-green-600 flex items-center gap-1 flex-shrink-0" title="Synchronizováno">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              sync
            </span>
          )}
        </div>

        {/* Progress bar */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500">
              Zabaleno: <strong>{checkedCount} / {totalCount}</strong>
            </span>
            <span className="text-xs font-semibold" style={{ color: '#1B6CA8' }}>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ width: `${progress}%`, backgroundColor: '#1B6CA8' }}
            />
          </div>
          {filter !== 'all' && (
            <p className="text-xs text-gray-400">
              Zobrazeno: {PERSON_CONFIG[filter as Person]?.label}
            </p>
          )}
        </div>
      </div>

      {/* Category sections */}
      <div className="space-y-3">
        {CATEGORIES.map((cat) => {
          const catItems = visibleItems.filter((i) => i.category === cat.id)
          if (catItems.length === 0 && filter !== 'all') return null
          const allCatItems = items.filter((i) => i.category === cat.id)
          const displayItems = filter === 'all' ? allCatItems : catItems
          return (
            <CategorySection
              key={cat.id}
              category={cat}
              items={displayItems}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onTogglePerson={handleTogglePerson}
              onAdd={handleAdd}
              onEdit={handleEdit}
            />
          )
        })}
      </div>

      {/* Bottom action bar */}
      <div className="sticky bottom-4 flex gap-3 pt-2">
        <button
          onClick={handleDeleteChecked}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl border border-red-200 text-red-500 bg-white hover:bg-red-50 transition-colors shadow-sm"
        >
          <span>🗑</span> Smazat zaškrtnuté
        </button>
        <button
          onClick={handleReset}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl border border-gray-200 text-gray-600 bg-white hover:bg-gray-50 transition-colors shadow-sm"
        >
          <span>↺</span> Začít znovu
        </button>
      </div>
    </div>
  )
}
