import { Map, ExternalLink, Baby } from 'lucide-react'

const attractions = [
  { name: 'Splash & Fun Water Park', desc: 'Největší aquapark na Maltě', url: 'https://www.splash.mt/', kids: true },
  { name: 'Mediterraneo Marine Park', desc: 'Delfíni, lachtani, mořský svět', url: 'https://mediterraneo.mt/', kids: true },
  { name: 'Popeye Village', desc: 'Filmová vesnice, aktivity u moře', url: 'https://popeyemalta.com/index.html', kids: true },
  { name: 'Malta Fun Trains', desc: 'Turistické vláčky po ostrově', url: 'https://maltafuntrains.com/', kids: true },
  { name: 'Playmobil FunPark', desc: 'Téměř 4000 m² zábavního parku', url: 'https://www.playmobilmalta.com/', kids: true },
  { name: 'Malta National Aquarium', desc: 'Národní akvárium s mořskými živočichy', url: 'https://www.aquarium.com.mt/', kids: true },
  { name: 'Malta s dětmi (průvodce)', desc: 'Tipy a rady pro rodiny s dětmi', url: 'https://www.cestujzababku.cz/malta-s-detmi/', kids: true },
  { name: 'Malta Fireworks Festival', desc: 'Největší ohňostrojový festival na Maltě', url: 'https://www.maltafireworksfestival.com/', kids: false },
]

export default function AttractionsCard() {
  return (
    <div className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center">
          <Map size={16} className="text-green-700" />
        </div>
        <h2 className="font-bold text-stone-800 text-base" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Tipy na výlety
        </h2>
      </div>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {attractions.map((a, i) => (
          <div key={i} className="rounded-xl border border-stone-100 p-3.5 hover:border-stone-200 hover:bg-stone-50/60 transition-all group">
            <div className="flex items-start justify-between gap-1 mb-1">
              <p className="text-sm font-semibold text-stone-800 leading-tight">{a.name}</p>
              {a.kids && (
                <span className="flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600 font-medium flex-shrink-0">
                  <Baby size={10} /> děti
                </span>
              )}
            </div>
            <p className="text-xs text-stone-400 mb-2.5">{a.desc}</p>
            <a href={a.url} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B6CA8] hover:text-[#145a8c] transition-colors">
              Otevřít <ExternalLink size={11} />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
