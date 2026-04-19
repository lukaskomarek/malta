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

          {/* Header */}
          <header className="sticky top-0 z-50">
            {/* Hero band */}
            <div style={{ background: 'linear-gradient(135deg, #0e3d6e 0%, #1B6CA8 60%, #2a8fd4 100%)' }}>
              <div className="max-w-2xl mx-auto px-5 pt-4 pb-3 flex items-center gap-4">

                {/* Wave logo */}
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 16c1.5-2.5 3.5-3.5 5.5-3.5s3.5 2 5.5 2 3.5-2 5.5-2 2.5.5 3.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 11.5c1.5-2 3.5-3 5.5-3s3.5 1.8 5.5 1.8 3.5-1.8 5.5-1.8 2.5.4 3.5 1.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
                    <circle cx="12" cy="5.5" r="2.5" fill="white" opacity="0.95"/>
                    <path d="M12 8v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                  </svg>
                </div>

                {/* Title */}
                <div className="flex-1">
                  <h1
                    className="text-2xl font-bold leading-none text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif', textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}
                  >
                    Malta 2026
                  </h1>
                  <p className="text-xs mt-1 font-medium" style={{ color: '#fcd27a' }}>
                    25. dubna – 22. května · Rodinná dovolená
                  </p>
                </div>

                {/* Sun SVG */}
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" opacity="0.9">
                  <circle cx="19" cy="19" r="8" fill="#fcd27a"/>
                  <circle cx="19" cy="19" r="6" fill="#f7b731"/>
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180
                    return (
                      <line key={i}
                        x1={19 + 10 * Math.cos(angle)} y1={19 + 10 * Math.sin(angle)}
                        x2={19 + 15 * Math.cos(angle)} y2={19 + 15 * Math.sin(angle)}
                        stroke="#fcd27a" strokeWidth="2.5" strokeLinecap="round"
                      />
                    )
                  })}
                </svg>
              </div>

              {/* Wave divider */}
              <svg viewBox="0 0 390 28" preserveAspectRatio="none" style={{ display: 'block', height: 28 }}>
                <path d="M0 14 C65 28 130 0 195 14 C260 28 325 0 390 14 L390 28 L0 28 Z" fill="white"/>
              </svg>
            </div>

            {/* Navigation */}
            <div className="bg-white border-b border-stone-200/80 shadow-sm">
              <Navigation />
            </div>
          </header>

          <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-10 pt-5">
            {children}
          </main>

          <footer className="max-w-2xl mx-auto w-full px-5 py-4 text-center">
            <p className="text-xs text-stone-400">Malta 2026 · Komarek family ☀️</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
