export default function AccommodationCard() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-amber-50 flex items-center gap-2">
        <span className="text-lg">🏠</span>
        <h2 className="font-bold text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Ubytování
        </h2>
      </div>
      <div className="p-4 space-y-3">
        <div>
          <p className="font-semibold text-gray-800">7SUN Apartments</p>
          <p className="text-sm text-gray-500">121 Triq San Paul, San Paul&apos;s Bay, Malta</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-green-50 rounded-lg p-2.5">
            <p className="text-xs text-gray-500">📅 Check-in</p>
            <p className="font-semibold text-gray-800">25. dubna</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-2.5">
            <p className="text-xs text-gray-500">📅 Check-out</p>
            <p className="font-semibold text-gray-800">25. května</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-2.5 text-sm">
          <p className="text-xs text-gray-500 mb-0.5">👥 Hosté</p>
          <p className="text-gray-700">2 dospělí (první 3 týdny)</p>
          <p className="text-gray-700">+ 2 děti (poslední týden)</p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="https://www.airbnb.cz/rooms/652709424476233290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#FF5A5F]/30 bg-[#FF5A5F]/5 text-sm font-medium text-[#FF5A5F] hover:bg-[#FF5A5F]/10 transition-colors"
          >
            <span>🏠</span> Otevřít Airbnb
          </a>
          <a
            href="https://www.airbnb.cz/receipt/RCSPJ3MXBZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <span>🧾</span> Potvrzení platby (RCSPJ3MXBZ)
          </a>
          <a
            href="https://maps.app.goo.gl/6Gb5UwoFDJXhjRXU8?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 rounded-lg border border-blue-200 bg-blue-50 text-sm font-medium text-[#1B6CA8] hover:bg-blue-100 transition-colors"
          >
            <span>📍</span> Zobrazit na mapě
          </a>
        </div>

        <div className="border-t border-amber-50 pt-3">
          <p className="text-xs font-semibold text-gray-500 mb-2">🚗 Doprava z letiště</p>
          <ul className="space-y-1.5 text-sm">
            <li className="flex gap-2">
              <span>🚕</span>
              <span><strong>Uber, Bolt nebo ECabs</strong> — nejpohodlnější</span>
            </li>
            <li className="flex gap-2">
              <span>🚏</span>
              <span>Nejbližší zastávka <strong>TONN</strong> (100 m) — linky 41, 42, 49, 221–223, 225, 250</span>
            </li>
            <li className="flex gap-2">
              <span>⏰</span>
              <span className="text-gray-500">Autobusy 6:00–23:30, v noci pouze taxi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
