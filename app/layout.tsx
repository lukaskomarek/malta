import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Malta 2026 🌊',
  description: 'Rodinná dovolená na Maltě — balicí seznam a info o cestě',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-amber-100 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-3">
              <div className="flex-1">
                <h1
                  className="text-xl font-bold leading-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#1B6CA8' }}
                >
                  Malta 2026
                </h1>
                <p className="text-xs text-amber-700">25. dubna – 22. května</p>
              </div>
              <span className="text-2xl">🌊</span>
            </div>
            <Navigation />
          </header>
          <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-8 pt-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
