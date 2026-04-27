'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Luggage, Plane, Images } from 'lucide-react'

const tabs = [
  { href: '/galerie', label: 'Fotogalerie', icon: Images },
  { href: '/baleni', label: 'Co balit', icon: Luggage },
  { href: '/info', label: 'Info o cestě', icon: Plane },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="flex">
      {tabs.map((tab) => {
        const active = pathname === tab.href
        const Icon = tab.icon
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium transition-all border-b-2 ${
              active
                ? 'border-[#1B6CA8] text-[#1B6CA8]'
                : 'border-transparent text-stone-400 hover:text-stone-600'
            }`}
          >
            <Icon size={15} strokeWidth={active ? 2.5 : 2} />
            <span>{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
