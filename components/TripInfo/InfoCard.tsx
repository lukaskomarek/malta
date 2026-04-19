import { Plug, Euro, Bus, Sun, Phone, Cross, Globe, ClipboardList } from 'lucide-react'

const infoItems = [
  { icon: Plug, label: 'Zásuvky', value: 'Typ G (britské) — nutný adaptér!', highlight: true },
  { icon: Euro, label: 'Měna', value: 'Euro (€)' },
  { icon: Bus, label: 'MHD', value: 'Tallinja karta — €25 registrace, jízdy zdarma' },
  { icon: Sun, label: 'Počasí', value: '22–28 °C, slunečno, moře ~20 °C' },
  { icon: Phone, label: 'Nouzové číslo', value: '112' },
  { icon: Cross, label: 'Zdravotní péče', value: 'EHIC karta (EU pojištění)' },
  { icon: Globe, label: 'Jazyk', value: 'Maltština + angličtina' },
]

export default function InfoCard() {
  return (
    <div className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center">
          <ClipboardList size={16} className="text-purple-600" />
        </div>
        <h2 className="font-bold text-stone-800 text-base" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Důležité info
        </h2>
      </div>
      <div className="divide-y divide-stone-100">
        {infoItems.map((item, i) => (
          <div key={i} className={`flex items-center gap-3.5 px-5 py-3 ${item.highlight ? 'bg-amber-50' : ''}`}>
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${item.highlight ? 'bg-amber-200' : 'bg-stone-100'}`}>
              <item.icon size={14} className={item.highlight ? 'text-amber-700' : 'text-stone-500'} />
            </div>
            <div>
              <p className="text-xs text-stone-400">{item.label}</p>
              <p className={`text-sm font-medium ${item.highlight ? 'text-amber-800' : 'text-stone-800'}`}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
