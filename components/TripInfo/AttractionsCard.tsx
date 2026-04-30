import { Map, ExternalLink, Baby } from 'lucide-react'

type Attraction = {
  name: string
  desc: string
  url: string
  kids: boolean
  detail?: string[]
}

const attractions: Attraction[] = [
  // ── Konkrétní datum ────────────────────────────────────────────────────────
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
  {
    name: 'Fotbal: YoHealth Malta Premier — Final Four',
    desc: 'Playoff o titul — semifinále a finále na Národním stadionu v Ta\' Qali',
    url: 'https://www.maltapremierleague.mt/',
    kids: false,
    detail: [
      '📅 Termín: ~9.–17. 5. (program vyjde po posledním kole 2. 5.)',
      '🏟 Národní stadion Ta\' Qali (National Stadium)',
      '🎟 Playoff vstupné: €15 · Dospělí · Děti do 16 let zdarma',
      '💶 2 dospělí: €30 · děti gratis',
      '📲 Lístky online: tickets.mfa.com.mt nebo na pokladně',
      '🚌 Z TONN: linka 41 → Valletta (B6), přestup 51/52/56 → Ta\' Qali · ~1 h',
      '💡 Program sleduj na maltapremierleague.mt nebo maltafootball.com',
    ],
  },
  // ── 16. 5. (sobota) — příjezd ─────────────────────────────────────────────
  {
    name: 'Splash & Fun Water Park',
    desc: 'Největší aquapark na Maltě — otevírá přesně 16. 5. (první den vašeho pobytu!)',
    url: 'https://www.splash.mt/',
    kids: true,
    detail: [
      '🕙 Otevřeno 10:00–18:00 (low season 16. 5. – 19. 6.)',
      '🎟 Dospělí €26,50 · Děti 3–12 let €18 · Do 3 let zdarma',
      '💶 Family Pack 2+2: €75 (vs. jednotlivě €89)',
      '🗓 Před 16. 5. zavřeno — otevírá v den příjezdu',
      '🚌 Z TONN: linka 41 směr Mellieħa → zastávka Splash & Fun · ~5 min',
    ],
  },
  // ── Výlety na ostrovy ─────────────────────────────────────────────────────
  {
    name: 'Comino — Blue Lagoon',
    desc: 'Tyrkysová laguna, nejkrásnější voda Malty — ideálně celý den',
    url: 'https://bluelagoon.mt/',
    kids: true,
    detail: [
      '⚠️ NUTNÉ předem: QR přístupový pas (zdarma) → bluelagooncomino.mt',
      '🕗 Časové sloty: ráno 8:00–13:00 · odpoledne 13:30–17:30 · západ slunce 18:00–22:00',
      '🚢 Varianta A — přímo z Bugibby: trajekt/výlet ~€20–25 dospělí · viz visitbluelagoonmalta.com',
      '🚢 Varianta B — z Ċirkewwy: autobus 221 z Bugibby → Ċirkewwa, trajekt Co-Op €15/dospělý · €7/dítě (zpáteční)',
      '💶 2 dospělí + 2 děti (var. B): ~€44 (cesta) + bus',
      '⏱ Plavba z Ċirkewwy: ~25–35 min',
      '🏊 Mimo Blue Lagoon: Crystal Lagoon (klidnější), St. Mary\'s Tower, pěší trasy',
      '💡 Ráno nejméně lidí — první trajekt nejlepší volba',
    ],
  },
  {
    name: 'Gozo — ostrov klidu',
    desc: 'Sesterský ostrov Malty — NOVÝ rychloferibot přímo z Bugibby od 5. 5. 2026',
    url: 'https://gozohighspeed.com/',
    kids: true,
    detail: [
      '🚢 Rychloferibot z Bugibby → Mġarr (Gozo): ~30 min · pouze pěší pasažéři',
      '🎟 Z Bugibby: Dospělí €6,50 · Děti 4–10 let €3 · Do 3 let zdarma (jedna cesta)',
      '💶 2 dospělí + 2 děti: €19 tam, €19 zpět = €38 celkem',
      '🕗 Léto (22 spojů denně): odjezdy z Bugibby ~každou hodinu od ~9:15',
      '🏰 Victoria Citadela: středověká pevnost, panorama, vstup zdarma',
      '🌊 Dwejra — Inland Sea: lodní výlet přírodním tunelem do moře (~€5/os.)',
      '🏛 Ġgantija: nejstarší volně stojící stavby světa (3600 př. n. l.) · €9 dospělí · €4,50 děti',
      '🏖 Ramla Bay: červený písek, nejhezčí pláž Goza',
      '💡 Po připlutí do Mġarr: taxi nebo místní autobus do Victoria (~15 min)',
    ],
  },
  // ── 17. 5. (neděle) — rybí trh ────────────────────────────────────────────
  {
    name: 'Marsaxlokk',
    desc: 'Největší rybářská vesnice Malty — barevné loďky luzzu, trh, mořské plody',
    url: 'https://www.maltauncovered.com/malta-island/marsaxlokk-fishing-village/',
    kids: true,
    detail: [
      '🐟 Nedělní rybí trh — nejlepší den na návštěvu (17. 5.)',
      '🏊 St. Peter\'s Pool — přírodní bazén, 3 km od vesnice',
      '🍽 Seafood restaurace přímo u přístavu (tip: Tartarun)',
      '🚌 Z TONN: linka 41 → Valletta (B6), přestup na 81 / 85 nebo v neděli TD10 → Marsaxlokk (~1,5 h)',
    ],
  },
  // ── Kdykoli 16.–21. 5. ────────────────────────────────────────────────────
  {
    name: 'Mediterraneo Marine Park',
    desc: 'Delfíni, lachtani, papoušci, plazi — vše v ceně vstupného',
    url: 'https://mediterraneo.mt/',
    kids: true,
    detail: [
      '🕙 Otevřeno denně 9:30–17:00 (od 30. 3.)',
      '🎟 Dospělí €18 · Děti 3–12 let €13 · Do 3 let zdarma',
      '💶 2 dospělí + 2 děti: €62 (žádný family bundle)',
      '🐬 Show: lachtani 11:00 & 16:15 · delfíni 12:30 · papoušci 11:45 & 15:00 · plazi 14:30',
      '⚠️ Rezervace povinná min. 2 dny předem, platba kartou',
      '🚌 Z TONN: linka 41 → Baħar iċ-Ċagħaq (Splash & Fun zastávka) · ~10 min',
    ],
  },
  {
    name: 'Popeye Village',
    desc: 'Filmová vesnice z roku 1980 — aktivity u moře, animace, mini golf',
    url: 'https://popeyemalta.com/index.html',
    kids: true,
    detail: [
      '🕘 Otevřeno 9:30–17:30 (mid-sezóna 1. 5. – 31. 5.)',
      '🎟 Dospělí €18 · Děti 3–12 let €14 · Do 3 let zdarma',
      '💶 2 dospělí + 2 děti: €64 (žádný family bundle)',
      '✅ Nafukovací atrakce, mini golf, kino, animace, popcorn zdarma',
      '💡 Celý květen mid-sezóna — cena stejná 1.–31. 5.',
      '🚌 Z TONN: linka 41/221 → Mellieħa, pak taxi ~10 min do Anchor Bay · ~45 min',
    ],
  },
  {
    name: 'Malta National Aquarium',
    desc: 'Národní akvárium — 20 000 m², 5 zón, mořský svět i plazi · přímo v Qawra',
    url: 'https://www.aquarium.com.mt/',
    kids: true,
    detail: [
      '🕙 Otevřeno denně 10:00–20:00 (poslední vstup 19:30)',
      '🎟 Online: Dospělí €13,95 · Děti 4–12 let €8,90 · Do 4 let zdarma',
      '💶 2 dospělí + 2 děti online: ~€45,70 (u pokladny €55,60)',
      '💡 Kupujte online — ušetříte ~€10 oproti pokladně',
      '🚶 Pěšky z TONN (~10 min), Triq it-Trunciera, Qawra',
    ],
  },
  {
    name: 'Playmobil FunPark',
    desc: 'Obří herní park přímo ve fabrice Playmobil — vstup téměř zadarmo',
    url: 'https://www.playmobilmalta.com/',
    kids: true,
    detail: [
      '🕙 Po–Čt 10:00–16:00 · Pá–Ne a svátky 10:00–18:00',
      '🎟 Děti 1–12 let €5 · Dospělí €3 · Do 1 roku zdarma',
      '💶 2 dospělí + 2 děti: €16 — nejlevnější výlet na seznamu!',
      '📍 Ħal Far Industrial Estate (jih Malty) — daleko od TONN',
      '🚌 Z TONN: linka 41 → Valletta (B6), přestup 82 → Ħal Far · ~1,5 h',
    ],
  },
  {
    name: 'Malta Fun Trains',
    desc: 'Turistické vláčky — Valletta a Mdina/Rabat okruh, každých 30–60 min',
    url: 'https://maltafuntrains.com/',
    kids: true,
    detail: [
      '🕙 Denně 10:00–16:00 (kromě Vánoc a Nového roku)',
      '🎟 Dospělí €7 · Děti do 12 let €5 · Nad 12 let €7',
      '💶 2 dospělí + 2 děti: €24 za jeden okruh',
      '🚃 Valletta tour: ~30 min, odjezd každých 30 min od St. John\'s Cathedral',
      '🚃 Rabat/Mdina tour: ~30 min, odjezd každou hodinu od Domus Romana',
      '💳 Platba hotově nebo kartou u vlačku, bez rezervace',
      '🚌 Z TONN: linka 41 → Valletta (B6) · ~40 min',
    ],
  },
  {
    name: 'Mdina & Rabat',
    desc: '„Město ticha" — středověké hradby, barokní paláce, výhled na půl Malty',
    url: 'https://www.grumpycamel.com/things-to-do-in-mdina/',
    kids: false,
    detail: [
      '⛪ Mdina: St. Paul\'s Cathedral, Bastion Square (panorama)',
      '🏛 Rabat (5 min pěšky): katakomby, St. Paul\'s Grotto, Domus Romana',
      '⏱ Stačí půlden, vstup do města zdarma',
      '🌅 Nejlepší ráno nebo při západu slunce (odpoledne davy)',
      '🚌 Z TONN: linka 41 → Valletta (B6), přestup 51/52/56 → Mdina (Howard Gardens) · ~1 h',
    ],
  },
  { name: 'Malta s dětmi (průvodce)', desc: 'Tipy a rady pro rodiny s dětmi', url: 'https://www.cestujzababku.cz/malta-s-detmi/', kids: true },
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
