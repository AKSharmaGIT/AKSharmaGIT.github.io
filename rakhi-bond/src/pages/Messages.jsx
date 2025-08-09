import Card from '../components/Card'

const MESSAGES_BROTHER = [
  "Dear Brother, on this Raksha Bandhan, I want to say that you are the best brother in the world. Thank you for everything. Happy Raksha Bandhan!",
  "You have always been my best friend, holding my hand and making sure the road I traveled on was free of obstacles. There cannot be a better brother than you. Happy Rakhi!",
]

const MESSAGES_SISTER = [
  "My dear sister, you are the most precious gift I have ever received. On this Rakhi, I promise to always protect you. Happy Raksha Bandhan!",
  "Having a sister like you is like having a best friend in life! Let's celebrate this festival with joy and happiness. Happy Rakhi!",
]

export default function Messages() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Messages</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-heading text-2xl mb-4 text-royalblue">For Brother</h2>
          <div className="grid gap-4">
            {MESSAGES_BROTHER.map((m, i) => (
              <Card key={i} text={m} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-heading text-2xl mb-4 text-royalblue">For Sister</h2>
          <div className="grid gap-4">
            {MESSAGES_SISTER.map((m, i) => (
              <Card key={i} text={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}