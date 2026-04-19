import { Plane, Calendar, Clock, Ticket, MapPin, Car, AlarmClock } from 'lucide-react'

interface Flight {
  title: string
  flightNo: string
  reservations: string[]
  date: string
  fromCode: string
  fromTime: string
  toCode: string
  toTime: string
  duration: string
  logistics: {
    atAirport: string        // kdy být na letišti
    departFrom: string       // odkud odjet
    departTime: string       // doporučený čas odjezdu
    travelNote: string       // poznámka k cestě
  }
}

const flights: Flight[] = [
  {
    title: 'Lukáš & Petra — odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš: B34YTN', 'Petra: SQIETL'],
    date: 'Pátek 25. dubna 2025',
    fromCode: 'BTS', fromTime: '17:40',
    toCode: 'MLA', toTime: '20:00',
    duration: '2h 20min',
    logistics: {
      atAirport: '15:30',
      departFrom: 'Kozlov 58821',
      departTime: '≈ 13:00',
      travelNote: 'autem ~220 km, cca 2h 20min',
    },
  },
  {
    title: 'Lukáš zpět pro děti',
    flightNo: 'Ryanair FR1528',
    reservations: ['Lukáš: B34YTN'],
    date: 'Úterý 13. května 2025',
    fromCode: 'MLA', fromTime: '13:40',
    toCode: 'BTS', toTime: '15:55',
    duration: '2h 15min',
    logistics: {
      atAirport: '11:30',
      departFrom: '7SUN Apartments',
      departTime: '≈ 10:50',
      travelNote: 'taxík ~35 min (Uber/Bolt/eCabs)',
    },
  },
  {
    title: 'Lukáš + děti — odlet',
    flightNo: 'Ryanair FR1529',
    reservations: ['Lukáš + děti: KPPYJL'],
    date: 'Čtvrtek 15. května 2025',
    fromCode: 'BTS', fromTime: '12:15',
    toCode: 'MLA', toTime: '14:35',
    duration: '2h 20min',
    logistics: {
      atAirport: '10:00',
      departFrom: 'Kozlov 58821',
      departTime: '≈ 7:30',
      travelNote: 'autem ~220 km, cca 2h 20min',
    },
  },
  {
    title: 'Všichni zpět domů',
    flightNo: 'Ryanair FR1528',
    reservations: ['Petra: SQIETL', 'Lukáš + děti: KPPYJL'],
    date: 'Čtvrtek 22. května 2025',
    fromCode: 'MLA', fromTime: '15:00',
    toCode: 'BTS', toTime: '17:15',
    duration: '2h 15min',
    logistics: {
      atAirport: '13:00',
      departFrom: '7SUN Apartments',
      departTime: '≈ 12:15',
      travelNote: 'taxík ~35 min (Uber/Bolt/eCabs)',
    },
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
          <div key={i} className="rounded-xl border border-stone-100 overflow-hidden">
            {/* Flight header */}
            <div className="bg-stone-50/60 px-3.5 pt-3 pb-2.5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-stone-800">{f.title}</p>
                <span className="text-xs text-stone-400 whitespace-nowrap flex items-center gap-1 flex-shrink-0">
                  <Calendar size={11} /> {f.date}
                </span>
              </div>

              {/* Route */}
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

              {/* Reservations */}
              <div className="flex flex-wrap gap-1.5">
                {f.reservations.map((r, ri) => (
                  <span key={ri} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    <Ticket size={10} /> {r}
                  </span>
                ))}
              </div>
            </div>

            {/* Logistics */}
            <div className="border-t border-amber-100 bg-amber-50/40 px-3.5 py-2.5 space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <AlarmClock size={12} className="text-amber-600 flex-shrink-0" />
                <span className="text-stone-500">Na letišti nejpozději</span>
                <span className="font-bold text-amber-700 ml-auto">{f.logistics.atAirport}</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <Car size={12} className="text-stone-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-500 flex-1">
                  Odjet z <strong className="text-stone-700">{f.logistics.departFrom}</strong>
                  <span className="text-stone-400"> · {f.logistics.travelNote}</span>
                </span>
                <span className="font-bold text-stone-700 ml-2 flex-shrink-0">{f.logistics.departTime}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Timeline */}
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
