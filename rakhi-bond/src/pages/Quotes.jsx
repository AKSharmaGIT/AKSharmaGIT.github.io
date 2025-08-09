import Card from '../components/Card'

const QUOTES = [
  "A sibling may be the keeper of one's identity, the only person with the keys to one's unfettered, more fundamental self. – Marian Sandmaier",
  "Brothers and sisters are as close as hands and feet. – Vietnamese Proverb",
  "Sometimes being a brother is even better than being a superhero. – Marc Brown",
  "Sisters and brothers just happen, we don’t get to choose them, but they become one of our most cherished bonds.",
  "A sister is both your mirror and your opposite. – Elizabeth Fishel",
  "What brothers say to tease their sisters has nothing to do with what they really think of them. – Esther M. Friesner",
]

export default function Quotes() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Quotes</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {QUOTES.map((q, i) => (
          <Card key={i} text={q} />
        ))}
      </div>
    </section>
  )
}