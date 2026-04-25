import { Home, Calendar, Users, MapPin, Car, Bus, ExternalLink, Receipt } from 'lucide-react'

export default function AccommodationCard() {
  return (
    <div className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center">
          <Home size={16} className="text-amber-700" />
        </div>
        <h2 className="font-bold text-stone-800 text-base" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Ubytování
        </h2>
      </div>

      <div className="p-4 space-y-4">
        <div>
          <p className="font-semibold text-stone-800">7SUN Apartments</p>
          <p className="text-sm text-stone-500 flex items-center gap-1 mt-0.5">
            <MapPin size={12} /> 121 Triq San Paul, San Paul&apos;s Bay, Malta
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-green-50 rounded-xl p-3">
            <p className="text-xs text-stone-500 flex items-center gap-1 mb-0.5"><Calendar size={11} /> Check-in</p>
            <p className="font-semibold text-stone-800 text-sm">25. dubna</p>
          </div>
          <div className="bg-orange-50 rounded-xl p-3">
            <p className="text-xs text-stone-500 flex items-center gap-1 mb-0.5"><Calendar size={11} /> Check-out</p>
            <p className="font-semibold text-stone-800 text-sm">25. května</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-3 flex items-start gap-2">
          <Users size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-stone-700">
            <p>2 dospělí <span className="text-stone-400">(první 3 týdny)</span></p>
            <p>+ 2 děti <span className="text-stone-400">(poslední týden)</span></p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { href: 'https://www.airbnb.cz/rooms/652709424476233290', icon: Home, label: 'Otevřít Airbnb', color: 'text-[#FF5A5F]', bg: 'bg-red-50 border-red-200 hover:bg-red-100' },
            { href: 'https://www.airbnb.cz/receipt/RCSPJ3MXBZ', icon: Receipt, label: 'Potvrzení platby (RCSPJ3MXBZ)', color: 'text-stone-600', bg: 'bg-stone-50 border-stone-200 hover:bg-stone-100' },
            { href: 'https://maps.app.goo.gl/6Gb5UwoFDJXhjRXU8?g_st=ic', icon: MapPin, label: 'Zobrazit na mapě', color: 'text-[#1B6CA8]', bg: 'bg-blue-50 border-blue-200 hover:bg-blue-100' },
          ].map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-colors ${link.bg} ${link.color}`}>
              <link.icon size={15} />
              <span className="flex-1">{link.label}</span>
              <ExternalLink size={12} className="opacity-50" />
            </a>
          ))}
        </div>

        <div className="border-t border-stone-100 pt-3 space-y-2">
          <p className="text-xs font-semibold text-stone-500 flex items-center gap-1.5"><Car size={12} /> Doprava z letiště</p>
          <div className="space-y-1.5 text-sm">
            <div className="flex gap-2.5 items-start">
              <Car size={14} className="text-stone-400 mt-0.5 flex-shrink-0" />
              <span><strong>Uber, Bolt nebo ECabs</strong> — ~35 min, ~€35</span>
            </div>
            <div className="flex gap-2.5 items-start">
              <Bus size={14} className="text-stone-400 mt-0.5 flex-shrink-0" />
              <div>
                <p><strong>TD1</strong> (Airport Direct) — každou hodinu, ~€3</p>
                <p className="text-stone-400 text-xs mt-0.5">Výstup: Bugibba nebo San Pawl il-Baħar → zastávka <strong>TONN</strong> (100 m) linky 41, 42, 49…</p>
                <p className="text-stone-400 text-xs">Celkem ~65 min + krátká chůze</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
