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
            <div className="max-w-2xl mx-auto px-5 py-3 flex items-center gap-3">
              {/* Logo */}
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1B6CA8 0%, #0e4a7a 100%)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 17c1.5-2 3-3 5-3s3.5 2 5 2 3.5-2 5-2 3.5 1 5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12c1.5-2 3-3 5-3s3.5 2 5 2 3.5-2 5-2 3.5 1 5 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  <circle cx="12" cy="6" r="2.5" fill="white" opacity="0.9"/>
                  <path d="M12 8.5v3" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
                </svg>
              </div>
              {/* Title */}
              <div className="flex-1">
                <h1
                  className="text-xl font-bold leading-tight tracking-tight"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#1B6CA8' }}
                >
                  Malta 2026
                </h1>
                <p className="text-xs font-medium" style={{ color: '#C9963A' }}>25. dubna – 22. května</p>
              </div>
              {/* Sun decoration */}
              <div className="flex-shrink-0 text-right">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="7" fill="#C9963A" opacity="0.9"/>
                  <circle cx="16" cy="16" r="5" fill="#f0b840"/>
                  {[0,45,90,135,180,225,270,315].map((deg, i) => {
                    const rad = (deg * Math.PI) / 180
                    const x1 = 16 + 9 * Math.cos(rad)
                    const y1 = 16 + 9 * Math.sin(rad)
                    const x2 = 16 + 13 * Math.cos(rad)
                    const y2 = 16 + 13 * Math.sin(rad)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C9963A" strokeWidth="2" strokeLinecap="round" opacity="0.8"/>
                  })}
                </svg>
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
