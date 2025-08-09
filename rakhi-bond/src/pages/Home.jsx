import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const ALL_QUOTES = [
  "A sibling may be the keeper of one's identity, the only person with the keys to one's unfettered, more fundamental self. – Marian Sandmaier",
  "Brothers and sisters are as close as hands and feet. – Vietnamese Proverb",
  "Siblings: children of the same parents, each of whom is perfectly normal until they get together. – Sam Levenson",
  "Our roots say we’re siblings, our hearts say we’re friends.",
  "There’s no other love like the love for a brother. There’s no other love like the love from a sister. – Astrid Alauda",
  "A brother is a friend given by Nature. – Jean Baptiste Legouve",
]

function getNextRakshaBandhanDate(now = new Date()) {
  // Approx: Raksha Bandhan typically falls in Aug; use known 2025 date (Aug 9, 2025)
  const target = new Date('2025-08-09T00:00:00')
  if (now > target) return new Date('2026-08-28T00:00:00') // rough next
  return target
}

function useCountdown(targetDate) {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const diff = Math.max(0, targetDate.getTime() - now.getTime())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Home() {
  const featured = useMemo(() => {
    const copy = [...ALL_QUOTES]
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }
    return copy.slice(0, 3)
  }, [])

  const target = useMemo(() => getNextRakshaBandhanDate(), [])
  const { days, hours, minutes, seconds } = useCountdown(target)

  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Celebrating the Bond of Love</h1>
              <p className="text-lg text-maroon/80 mb-6">
                Raksha Bandhan honors the beautiful bond between brothers and sisters, a promise of love and protection.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/messages" className="inline-flex items-center justify-center rounded-lg bg-saffron text-maroon px-5 py-3 font-medium shadow hover:shadow-md">
                  Explore Messages
                </Link>
                <Link to="/quotes" className="inline-flex items-center justify-center rounded-lg bg-royalblue text-white px-5 py-3 font-medium shadow hover:shadow-md">
                  Browse Quotes
                </Link>
              </div>
              <p className="mt-6 text-sm text-maroon/70">Lovingly dedicated to Aditi, Harshita, Tanisha, and Misti</p>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-2xl bg-white/70 p-6 ring-1 ring-gold/30 shadow">
                <p className="font-heading text-xl mb-2 text-maroon">Countdown to Raksha Bandhan</p>
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[{label:'Days',value:days},{label:'Hours',value:hours},{label:'Minutes',value:minutes},{label:'Seconds',value:seconds}].map((it) => (
                    <div key={it.label} className="rounded-lg bg-offwhite p-3 ring-1 ring-royalblue/10">
                      <div className="text-2xl font-semibold text-royalblue">{String(it.value).padStart(2,'0')}</div>
                      <div className="text-xs uppercase tracking-wide text-maroon/70">{it.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="font-heading text-2xl mb-4">Featured Quotes</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featured.map((q, idx) => (
                <div key={idx} className="rounded-xl bg-white/80 p-4 ring-1 ring-royalblue/10 shadow-sm">
                  <p className="text-maroon/90">{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 -z-10 select-none">
          <div className="rakhi-dot absolute left-10 top-16"></div>
          <div className="rakhi-dot absolute right-10 top-24"></div>
          <div className="rakhi-dot absolute left-1/2 bottom-10"></div>
        </div>
      </div>
    </section>
  )
}