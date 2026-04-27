import { Map, ExternalLink, Baby } from 'lucide-react'

type Attraction = {
  name: string
  desc: string
  url: string
  kids: boolean
  detail?: string[]
}

const attractions: Attraction[] = [
  { name: 'Splash & Fun Water Park', desc: 'Největší aquapark na Maltě', url: 'https://www.splash.mt/', kids: true },
  { name: 'Mediterraneo Marine Park', desc: 'Delfíni, lachtani, mořský svět', url: 'https://mediterraneo.mt/', kids: true },
  {
    name: 'Popeye Village',
    desc: 'Filmová vesnice, aktivity u moře',
    url: 'https://popeyemalta.com/index.html',
    kids: true,
    detail: [
      '🕘 Otevřeno 9:30–17:30 (mid-sezóna od 1. 5.)',
      '🎟 Dospělí €18 · Děti 3–12 let €14',
      '✅ Nafukovací atrakce, mini golf, kino, animace, popcorn zdarma',
    ],
  },
  { name: 'Malta Fun Trains', desc: 'Turistické vláčky po ostrově', url: 'https://maltafuntrains.com/', kids: true },
  { name: 'Playmobil FunPark', desc: 'Téměř 4000 m² zábavního parku', url: 'https://www.playmobilmalta.com/', kids: true },
  { name: 'Malta National Aquarium', desc: 'Národní akvárium s mořskými živočichy', url: 'https://www.aquarium.com.mt/', kids: true },
  { name: 'Malta s dětmi (průvodce)', desc: 'Tipy a rady pro rodiny s dětmi', url: 'https://www.cestujzababku.cz/malta-s-detmi/', kids: true },
  {
    name: 'Malta Fireworks Festival',
    desc: '30. dubna · Grand Finale · Grand Harbour, Valletta · 25. ročník',
    url: 'https://www.maltafireworksfestival.com/',
    kids: false,
    detail: [
      '🕣 Začátek 20:30, konec ~22:30',
      '👁 Zdarma z bastionů — nejlepší výhled: Upper Barrakka Gardens',
      '🚌 Z TONN linka 41 / 42 / 49 → výstup Valletta City Gate (B6), ~41 min',
      '🚶 Od City Gate pěšky ~10–15 min na Upper Barrakka Gardens',
      '⏰ Přijet 90 min předem, očekává se 150 000 lidí',
      '🧥 Večer fouká od moře — vzít bundu',
    ],
  },
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
            <p className="text-xs text-stone-400 mb-2">{a.desc}</p>
            {a.detail && (
              <ul className="mb-2.5 space-y-0.5">
                {a.detail.map((line, j) => (
                  <li key={j} className="text-xs text-stone-500">{line}</li>
                ))}
              </ul>
            )}
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
