const infoItems = [
  { icon: '🔌', label: 'Zásuvky', value: 'Typ G (britské) — nutný adaptér!' },
  { icon: '💶', label: 'Měna', value: 'Euro (€)' },
  { icon: '🚌', label: 'MHD', value: 'Tallinja karta — €25 registrace, jízdy zdarma' },
  { icon: '🌡️', label: 'Počasí', value: '22–28 °C, slunečno, moře ~20 °C' },
  { icon: '📞', label: 'Nouzové číslo', value: '112' },
  { icon: '🏥', label: 'Zdravotní péče', value: 'EHIC karta (EU pojištění)' },
  { icon: '🌐', label: 'Jazyk', value: 'Maltština + angličtina' },
]

export default function InfoCard() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-amber-50 flex items-center gap-2">
        <span className="text-lg">📋</span>
        <h2 className="font-bold text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Důležité info
        </h2>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {infoItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3 py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-lg w-6 flex-shrink-0">{item.icon}</span>
              <div>
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
