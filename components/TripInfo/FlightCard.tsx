import { Plane, Calendar, Clock, Ticket } from 'lucide-react'

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
    title: 'Lukáš & Petra — odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš: B34YTN', 'Petra: SQIETL'],
    date: 'Pátek 25. dubna 2025',
    from: 'Bratislava', fromCode: 'BTS', fromTime: '17:40',
    to: 'Malta', toCode: 'MLA', toTime: '20:00',
    duration: '2h 20min',
  },
  {
    title: 'Lukáš zpět pro děti',
    flightNo: 'Ryanair FR1528',
    reservations: ['Lukáš: B34YTN'],
    date: 'Úterý 13. května 2025',
    from: 'Malta', fromCode: 'MLA', fromTime: '13:40',
    to: 'Bratislava', toCode: 'BTS', toTime: '15:55',
    duration: '2h 15min',
  },
  {
    title: 'Lukáš + děti — odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš + děti: KPPYJL'],
    date: 'Čtvrtek 15. května 2025',
    from: 'Bratislava', fromCode: 'BTS', fromTime: '12:15',
    to: 'Malta', toCode: 'MLA', toTime: '14:35',
    duration: '2h 20min',
  },
  {
    title: 'Všichni zpět domů',
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
    <div className="rounded-2xl bg-white border border-stone-200/80 shadow-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-stone-100 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center">
          <Plane size={16} className="text-[#1B6CA8]" />
        </div>
        <h2 className="font-bold text-stone-800 text-base" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Lety
        </h2>
      </div>

      <div className="p-4 space-y-3">
        {flights.map((f, i) => (
          <div key={i} className="rounded-xl border border-stone-100 bg-stone-50/60 p-3.5 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-stone-800">{f.title}</p>
              <span className="text-xs text-stone-400 whitespace-nowrap flex items-center gap-1">
                <Calendar size={11} /> {f.date}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-center min-w-[48px]">
                <p className="text-xl font-bold text-stone-800 leading-none">{f.fromTime}</p>
                <p className="text-xs font-semibold text-[#1B6CA8] mt-0.5">{f.fromCode}</p>
              </div>
              <div className="flex-1 flex flex-col items-center gap-0.5">
                <div className="w-full flex items-center gap-1">
                  <div className="flex-1 h-px bg-stone-200" />
                  <Plane size={14} className="text-stone-400 rotate-90" />
                  <div className="flex-1 h-px bg-stone-200" />
                </div>
                <p className="text-xs text-stone-400 flex items-center gap-1">
                  <Clock size={10} /> {f.duration}
                </p>
              </div>
              <div className="text-center min-w-[48px]">
                <p className="text-xl font-bold text-stone-800 leading-none">{f.toTime}</p>
                <p className="text-xs font-semibold text-[#1B6CA8] mt-0.5">{f.toCode}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {f.reservations.map((r, ri) => (
                <span key={ri} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  <Ticket size={10} /> {r}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-stone-100 pt-3">
          <p className="text-xs font-semibold text-stone-500 mb-2.5 flex items-center gap-1.5">
            <Calendar size={12} /> Timeline celé cesty
          </p>
          <div className="space-y-2">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-3 items-center text-xs">
                <span className="font-bold text-[#1B6CA8] w-12 flex-shrink-0">{t.date}</span>
                <span className="text-stone-400 w-10 flex-shrink-0">{t.time}</span>
                <span className="text-stone-600">{t.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
