export type Person = 'lukas' | 'petra' | 'ema' | 'tomas' | 'all'

export interface PackingItem {
  id: string
  label: string
  note?: string
  category: string
  assignedTo: Person[]
  checked: boolean
  addedBy?: string
}

export interface Category {
  id: string
  label: string
  icon: string
}

export const CATEGORIES: Category[] = [
  { id: 'obleceni', label: 'Oblečení', icon: '👗' },
  { id: 'plaz', label: 'Pláž & moře', icon: '🏊' },
  { id: 'zdravi', label: 'Zdraví & lékárnička', icon: '💊' },
  { id: 'elektronika', label: 'Elektronika', icon: '🔌' },
  { id: 'hygiena', label: 'Hygiena & kosmetika', icon: '🧴' },
  { id: 'doklady', label: 'Doklady & peníze', icon: '📄' },
  { id: 'deti', label: 'Pro děti', icon: '🎒' },
  { id: 'apartman', label: 'Do apartmánu', icon: '🏠' },
  { id: 'jidlo', label: 'Jídlo & pití', icon: '🍵' },
]

export const ALL_PERSONS: Person[] = ['lukas', 'petra', 'ema', 'tomas']

export const PERSON_CONFIG: Record<Person, { label: string; color: string; initial: string }> = {
  lukas: { label: 'Lukáš', color: '#1B6CA8', initial: 'L' },
  petra: { label: 'Petra', color: '#2E7D32', initial: 'P' },
  ema:   { label: 'Ema',   color: '#9C27B0', initial: 'E' },
  tomas: { label: 'Tomáš', color: '#E65100', initial: 'T' },
  all:   { label: 'Vše',   color: '#555',    initial: 'V' },
}
