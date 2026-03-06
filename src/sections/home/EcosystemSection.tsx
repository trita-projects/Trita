import * as React from "react"

import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

const items = [
  {
    title: `Roll the Dice`,
    desc: `Experiential game collections and installations designed for families, schools, and communities.`,
    to: `/brands/roll-the-dice`,
  },
  {
    title: `TolluGatti`,
    desc: `Digital-first board games, mindful play, companion experiences, and community events.`,
    to: `/brands/tollugatti`,
  },
  {
    title: `UnCamp`,
    desc: `Thematic camps and challenges that blend culture, curiosity, and creativity.`,
    to: `/brands/uncamp`,
  },
]

export default function EcosystemSection() {
  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold text-ink-950">Our Ecosystem</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-950/70">
            A family of brands and programs built to make culture accessible, joyful, and relevant.
          </p>
        </div>
        <div className="hidden sm:block">
          <Button to="/brands" variant="secondary">
            View all brands
          </Button>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map(item => (
          <Card key={item.title} className="group">
            <div className="text-lg font-semibold text-ink-950 group-hover:text-marigold-600 transition">
              {item.title}
            </div>
            <p className="mt-2 text-sm text-ink-950/70">{item.desc}</p>
            <div className="mt-5">
              <Button to={item.to} variant="ghost" className="px-0 shadow-none">
                Learn more
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-6 sm:hidden">
        <Button to="/brands" variant="secondary">
          View all brands
        </Button>
      </div>
    </section>
  )
}
