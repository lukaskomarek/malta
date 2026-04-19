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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ fontFamily: 'var(--font-dm-sans), system-ui, sans-serif' }}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 bg-white border-b border-stone-200/80 shadow-sm">
            <div className="max-w-2xl mx-auto px-5 py-3.5 flex items-center gap-3">
              <div className="flex-1">
                <h1
                  className="text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#1B6CA8' }}
                >
                  Malta 2026
                </h1>
                <p className="text-xs text-amber-700 font-medium">25. dubna – 22. května</p>
              </div>
              <div className="w-9 h-9 rounded-xl bg-[#1B6CA8]/10 flex items-center justify-center text-lg">
                🌊
              </div>
            </div>
            <Navigation />
          </header>
          <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-10 pt-5">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
