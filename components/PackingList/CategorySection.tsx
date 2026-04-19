'use client'

import { useState } from 'react'
import { ChevronDown, Plus } from 'lucide-react'
import { PackingItem as PackingItemType, Category, Person } from '@/types'
import PackingItemRow from './PackingItem'
import AddItemForm from './AddItemForm'

interface Props {
  category: Category
  items: PackingItemType[]
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onTogglePerson: (id: string, person: Person) => void
  onAdd: (label: string, note: string, assignedTo: Person[], category: string) => void
  onEdit: (id: string, label: string, note: string) => void
}

export default function CategorySection({
  category, items, onToggle, onDelete, onTogglePerson, onAdd, onEdit,
}: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const checkedCount = items.filter((i) => i.checked).length
  const allDone = items.length > 0 && checkedCount === items.length

  return (
    <div className={`rounded-2xl bg-white shadow-sm border overflow-hidden transition-colors ${
      allDone ? 'border-green-200' : 'border-stone-200/80'
    }`}>
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-stone-50 transition-colors"
      >
        <span className="text-xl leading-none">{category.icon}</span>
        <span
          className="flex-1 text-left font-semibold text-stone-700 text-sm"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {category.label}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
          allDone
            ? 'bg-green-100 text-green-700'
            : checkedCount > 0
            ? 'bg-blue-100 text-blue-700'
            : 'bg-stone-100 text-stone-500'
        }`}>
          {checkedCount}/{items.length}
        </span>
        <ChevronDown
          size={15}
          strokeWidth={2}
          className={`text-stone-400 transition-transform ${collapsed ? '' : 'rotate-180'}`}
        />
      </button>

      {!collapsed && (
        <div className="border-t border-stone-100 px-1 pb-2">
          {items.length === 0 && !showAddForm && (
            <p className="text-xs text-stone-400 px-3 py-3">Žádné položky</p>
          )}
          {items.map((item) => (
            <PackingItemRow
              key={item.id}
              item={item}
              onToggle={onToggle}
              onDelete={onDelete}
              onTogglePerson={onTogglePerson}
              onEdit={onEdit}
            />
          ))}
          {showAddForm ? (
            <div className="px-2 pt-1">
              <AddItemForm
                categoryId={category.id}
                onAdd={(label, note, assignedTo, cat) => {
                  onAdd(label, note, assignedTo, cat)
                  setShowAddForm(false)
                }}
                onCancel={() => setShowAddForm(false)}
              />
            </div>
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-1 mx-1 flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#1B6CA8] hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Plus size={13} strokeWidth={2.5} />
              Přidat položku
            </button>
          )}
        </div>
      )}
    </div>
  )
}
