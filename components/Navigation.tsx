'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/', label: 'Co balit', icon: '🧳' },
  { href: '/info', label: 'Info o cestě', icon: '✈️' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex border-t border-amber-50">
      {tabs.map((tab) => {
        const active = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-colors ${
              active
                ? 'border-b-2 text-[#1B6CA8]'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            style={active ? { borderBottomColor: '#1B6CA8' } : {}}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
