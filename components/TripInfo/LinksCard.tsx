import { ExternalLink, Link2 } from 'lucide-react'

const links = [
  { emoji: '✈️', label: 'Ryanair', desc: 'Správa letu', url: 'https://www.ryanair.com' },
  { emoji: '🏠', label: 'Airbnb', desc: 'Naše rezervace', url: 'https://www.airbnb.cz/rooms/652709424476233290' },
  { emoji: '🚌', label: 'Malta Public Transport', desc: 'Jízdní řády', url: 'https://www.publictransport.com.mt' },
  { emoji: '📱', label: 'Tallinja App (iOS)', desc: 'App Store', url: 'https://apps.apple.com/mt/app/tallinja/id1198877820' },
  { emoji: '📱', label: 'Tallinja App (Android)', desc: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.maltaenterprise.tallinja' },
  { emoji: '🗺️', label: 'Google Maps — Malta', desc: 'Navigace', url: 'https://maps.google.com/?q=Malta' },
  { emoji: '🌤️', label: 'Počasí Malta', desc: 'Předpověď', url: 'https://www.yr.no/en/forecast/daily-table/2-2562305/Malta/Malta' },
]

export default function LinksCard() {
  return (
    <div className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-stone-100 flex items-center justify-center">
          <Link2 size={16} className="text-stone-600" />
        </div>
        <h2 className="font-bold text-stone-800 text-base" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Užitečné odkazy
        </h2>
      </div>
      <div className="divide-y divide-stone-100">
        {links.map((link, i) => (
          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-5 py-3 hover:bg-stone-50 transition-colors group">
            <span className="text-xl w-7 text-center">{link.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-stone-800">{link.label}</p>
              <p className="text-xs text-stone-400">{link.desc}</p>
            </div>
            <ExternalLink size={13} className="text-stone-300 group-hover:text-[#1B6CA8] transition-colors flex-shrink-0" />
          </a>
        ))}
      </div>
    </div>
  )
}
