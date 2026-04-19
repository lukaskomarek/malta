const links = [
  { icon: '✈️', label: 'Ryanair', desc: 'Správa letu', url: 'https://www.ryanair.com' },
  { icon: '🏠', label: 'Airbnb', desc: 'Naše rezervace', url: 'https://www.airbnb.cz/rooms/652709424476233290' },
  { icon: '🚌', label: 'Malta Public Transport', desc: 'Jízdní řády', url: 'https://www.publictransport.com.mt' },
  { icon: '📱', label: 'Tallinja App', desc: 'App Store', url: 'https://apps.apple.com/mt/app/tallinja/id1198877820' },
  { icon: '📱', label: 'Tallinja App', desc: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.maltaenterprise.tallinja' },
  { icon: '🗺️', label: 'Google Maps — Malta', desc: 'Navigace', url: 'https://maps.google.com/?q=Malta' },
  { icon: '🌤️', label: 'Počasí Malta', desc: 'Předpověď', url: 'https://www.yr.no/en/forecast/daily-table/2-2562305/Malta/Malta' },
]

export default function LinksCard() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-amber-50 flex items-center gap-2">
        <span className="text-lg">🔗</span>
        <h2 className="font-bold text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Užitečné odkazy
        </h2>
      </div>
      <div className="p-3 grid grid-cols-1 gap-2">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl border border-gray-100 hover:border-[#1B6CA8]/30 hover:bg-blue-50/40 transition-all group"
          >
            <span className="text-xl w-7 flex-shrink-0">{link.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">{link.label}</p>
              <p className="text-xs text-gray-400">{link.desc}</p>
            </div>
            <span className="text-gray-300 group-hover:text-[#1B6CA8] text-xs">→</span>
          </a>
        ))}
      </div>
    </div>
  )
}
