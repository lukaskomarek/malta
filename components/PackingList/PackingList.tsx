'use client'

import { useState, useEffect } from 'react'
import { Trash2, RotateCcw, Wifi, WifiOff } from 'lucide-react'
import { Person, CATEGORIES, PERSON_CONFIG, ALL_PERSONS } from '@/types'
import { PackingItem } from '@/types'
import { usePackingSync } from '@/lib/usePackingSync'
import PersonFilter from './PersonFilter'
import CategorySection from './CategorySection'

const FILTER_KEY = 'malta-filter-v2'

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
    save(items.map((item) => {
      if (item.id !== id) return item
      const current: Person[] = item.assignedTo.includes('all') ? [...ALL_PERSONS] : (item.assignedTo as Person[])
      const has = current.includes(person)
      const next = has ? current.filter((p) => p !== person) : [...current, person]
      return { ...item, assignedTo: next.length > 0 ? next : current }
    }))
  }

  const handleEdit = (id: string, label: string, note: string) => {
    save(items.map((i) => i.id === id ? { ...i, label, note: note || undefined } : i))
  }

  const handleAdd = (label: string, note: string, assignedTo: Person[], category: string) => {
    save([...items, {
      id: generateId(), label, note: note || undefined,
      category, assignedTo, checked: false,
      addedBy: filter !== 'all' ? filter : undefined,
    }])
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
      <div className="py-20 flex flex-col items-center gap-3 text-stone-400">
        <div className="w-7 h-7 border-2 border-[#1B6CA8] border-t-transparent rounded-full animate-spin" />
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
      {/* Filter + sync */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3">
          <PersonFilter selected={filter} onChange={handleFilterChange} />
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {synced
              ? <Wifi size={13} className="text-green-500" />
              : <WifiOff size={13} className="text-stone-300" />
            }
            <span className={`text-xs font-medium ${synced ? 'text-green-600' : 'text-stone-300'}`}>
              {synced ? 'sync' : '—'}
            </span>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-2xl border border-stone-200/80 px-4 py-3 space-y-2 shadow-sm">
          <div className="flex justify-between items-center">
            <span className="text-xs text-stone-500">
              Zabaleno&nbsp;
              <strong className="text-stone-700">{checkedCount} / {totalCount}</strong>
              {filter !== 'all' && (
                <span className="text-stone-400 ml-1">({PERSON_CONFIG[filter as Person]?.label})</span>
              )}
            </span>
            <span className="text-sm font-bold" style={{ color: '#1B6CA8' }}>{progress}%</span>
          </div>
          <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${progress}%`, backgroundColor: progress === 100 ? '#2E7D32' : '#1B6CA8' }}
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2.5">
        {CATEGORIES.map((cat) => {
          const allCatItems = items.filter((i) => i.category === cat.id)
          const visibleCatItems = allCatItems.filter((i) => itemMatchesPerson(i, filter))
          if (visibleCatItems.length === 0 && filter !== 'all') return null
          const displayItems = filter === 'all' ? allCatItems : visibleCatItems
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

      {/* Action bar */}
      <div className="sticky bottom-4 flex gap-2.5 pt-1">
        <button
          onClick={handleDeleteChecked}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-2xl border border-red-200 text-red-500 bg-white hover:bg-red-50 transition-colors shadow-sm"
        >
          <Trash2 size={15} strokeWidth={2} /> Smazat zaškrtnuté
        </button>
        <button
          onClick={handleReset}
          className="flex-1 flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-2xl border border-stone-200 text-stone-600 bg-white hover:bg-stone-50 transition-colors shadow-sm"
        >
          <RotateCcw size={15} strokeWidth={2} /> Začít znovu
        </button>
      </div>
    </div>
  )
}
