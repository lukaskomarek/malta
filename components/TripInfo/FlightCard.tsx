interface Flight {
  title: string
  flightNo: string
  reservations: string[]
  date: string
  from: string
  fromCode: string
  fromTime: string
  to: string
  toCode: string
  toTime: string
  duration: string
}

const flights: Flight[] = [
  {
    title: 'Let 1 — Lukáš & Petra odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš: B34YTN', 'Petra: SQIETL'],
    date: 'Pátek 25. dubna 2025',
    from: 'Bratislava', fromCode: 'BTS', fromTime: '17:40',
    to: 'Malta', toCode: 'MLA', toTime: '20:00',
    duration: '2h 20min',
  },
  {
    title: 'Let 2 — Lukáš zpět pro děti',
    flightNo: 'Ryanair FR1528',
    reservations: ['Lukáš: B34YTN'],
    date: 'Úterý 13. května 2025',
    from: 'Malta', fromCode: 'MLA', fromTime: '13:40',
    to: 'Bratislava', toCode: 'BTS', toTime: '15:55',
    duration: '2h 15min',
  },
  {
    title: 'Let 3 — Lukáš + děti odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš + děti: KPPYJL'],
    date: 'Čtvrtek 15. května 2025',
    from: 'Bratislava', fromCode: 'BTS', fromTime: '12:15',
    to: 'Malta', toCode: 'MLA', toTime: '14:35',
    duration: '2h 20min',
  },
  {
    title: 'Let 4 — Všichni zpět',
    flightNo: 'Ryanair FR1528',
    reservations: ['Petra: SQIETL', 'Lukáš + děti: KPPYJL'],
    date: 'Čtvrtek 22. května 2025',
    from: 'Malta', fromCode: 'MLA', fromTime: '15:00',
    to: 'Bratislava', toCode: 'BTS', toTime: '17:15',
    duration: '2h 15min',
  },
]

const timeline = [
  { date: '25. 4.', time: '17:40', desc: 'Lukáš + Petra odlétají z BTS (FR1529)' },
  { date: '13. 5.', time: '13:40', desc: 'Lukáš letí zpět do BTS pro děti (FR1528)' },
  { date: '15. 5.', time: '12:15', desc: 'Lukáš + děti odlétají z BTS (FR1529)' },
  { date: '22. 5.', time: '15:00', desc: 'Všichni letí domů z MLA (FR1528)' },
]

export default function FlightCard() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-amber-50 flex items-center gap-2">
        <span className="text-lg">✈️</span>
        <h2 className="font-bold text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Lety
        </h2>
      </div>
      <div className="p-4 space-y-4">
        {flights.map((f, i) => (
          <div key={i} className="rounded-xl border border-gray-100 bg-gray-50/60 p-3 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-[#1B6CA8]">{f.title}</p>
                <p className="text-xs text-gray-500">{f.flightNo}</p>
              </div>
              <span className="text-xs text-gray-400 text-right whitespace-nowrap">📅 {f.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="text-center">
                <p className="font-bold text-gray-800">{f.fromTime}</p>
                <p className="text-xs text-gray-500">{f.fromCode}</p>
                <p className="text-xs text-gray-400 hidden sm:block">{f.from}</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-center gap-1">
                  <div className="flex-1 h-px bg-gray-300" />
                  <span className="text-gray-400">✈</span>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
                <p className="text-xs text-gray-400">⏱ {f.duration}</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-800">{f.toTime}</p>
                <p className="text-xs text-gray-500">{f.toCode}</p>
                <p className="text-xs text-gray-400 hidden sm:block">{f.to}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {f.reservations.map((r, ri) => (
                <span
                  key={ri}
                  className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700"
                >
                  🎫 {r}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Timeline */}
        <div className="border-t border-amber-50 pt-3">
          <p className="text-xs font-semibold text-gray-500 mb-2">📅 Timeline celé cesty</p>
          <div className="space-y-1.5">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-3 items-start text-xs">
                <span className="font-semibold text-[#1B6CA8] whitespace-nowrap w-14">{t.date}</span>
                <span className="text-gray-500 whitespace-nowrap w-10">{t.time}</span>
                <span className="text-gray-700">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
