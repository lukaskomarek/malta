'use client'

import { useState } from 'react'
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
  category,
  items,
  onToggle,
  onDelete,
  onTogglePerson,
  onAdd,
  onEdit,
}: Props) {
  const [collapsed, setCollapsed] = useState(false)
  const [showAddForm, setShowAddForm] = useState(false)

  const checkedCount = items.filter((i) => i.checked).length

  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-amber-50/40 transition-colors"
      >
        <span className="text-lg">{category.icon}</span>
        <span
          className="flex-1 text-left font-semibold text-gray-800 text-sm"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {category.label}
        </span>
        <span className="text-xs text-gray-400">
          {checkedCount}/{items.length}
        </span>
        <span className={`text-gray-400 text-xs transition-transform ${collapsed ? '' : 'rotate-180'}`}>
          ▼
        </span>
      </button>

      {!collapsed && (
        <div className="border-t border-amber-50 px-2 pb-2">
          {items.length === 0 && !showAddForm && (
            <p className="text-xs text-gray-400 px-2 py-3">Žádné položky</p>
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
            <AddItemForm
              categoryId={category.id}
              onAdd={(label, note, assignedTo, cat) => {
                onAdd(label, note, assignedTo, cat)
                setShowAddForm(false)
              }}
              onCancel={() => setShowAddForm(false)}
            />
          ) : (
            <button
              onClick={() => setShowAddForm(true)}
              className="mt-1 w-full text-left px-2 py-1.5 text-xs text-[#1B6CA8] hover:text-[#145a8c] hover:bg-blue-50 rounded-lg transition-colors"
            >
              + Přidat položku
            </button>
          )}
        </div>
      )}
    </div>
  )
}
