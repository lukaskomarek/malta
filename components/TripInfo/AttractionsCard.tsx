const attractions = [
  {
    name: 'Splash & Fun Water Park',
    desc: 'Největší aquapark na Maltě',
    url: 'https://www.splash.mt/',
    kids: true,
  },
  {
    name: 'Mediterraneo Marine Park',
    desc: 'Delfíni, lachtani, mořský svět',
    url: 'https://mediterraneo.mt/',
    kids: true,
  },
  {
    name: 'Popeye Village',
    desc: 'Filmová vesnice, aktivity u moře',
    url: 'https://popeyemalta.com/index.html',
    kids: true,
  },
  {
    name: 'Malta Fun Trains',
    desc: 'Turistické vláčky po ostrově',
    url: 'https://maltafuntrains.com/',
    kids: true,
  },
  {
    name: 'Playmobil FunPark',
    desc: 'Téměř 4000 m² zábavního parku',
    url: 'https://www.playmobilmalta.com/',
    kids: true,
  },
  {
    name: 'Malta National Aquarium',
    desc: 'Národní akvárium s mořskými živočichy',
    url: 'https://www.aquarium.com.mt/',
    kids: true,
  },
  {
    name: 'Malta s dětmi (průvodce)',
    desc: 'Tipy a rady pro rodiny s dětmi',
    url: 'https://www.cestujzababku.cz/malta-s-detmi/',
    kids: true,
  },
]

export default function AttractionsCard() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-amber-50 flex items-center gap-2">
        <span className="text-lg">🗺️</span>
        <h2 className="font-bold text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Tipy na výlety
        </h2>
      </div>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {attractions.map((a, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-100 p-3 flex flex-col gap-1.5 hover:border-amber-200 hover:bg-amber-50/30 transition-all"
          >
            <div className="flex items-start justify-between gap-1">
              <p className="text-sm font-semibold text-gray-800 leading-tight">{a.name}</p>
              {a.kids && (
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-700 font-medium flex-shrink-0"
                  title="Vhodné pro děti"
                >
                  👶
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500">{a.desc}</p>
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[#1B6CA8] hover:text-[#145a8c] transition-colors"
            >
              Otevřít →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
