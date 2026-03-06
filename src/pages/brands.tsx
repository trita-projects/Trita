import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

const brands = [
  { 
    title: `Roll the Dice`, 
    to: `/brands/roll-the-dice`, 
    desc: `Game collections, workshops, corporate programs.`,
    image: `Roll the Dice Logo (1200 x 628 px).png`
  },
  { 
    title: `TolluGatti`, 
    to: `/brands/tollugatti`, 
    desc: `Digital board games, mindful play, community events.`,
    image: `tollugatti-inverse.png`
  },
  { 
    title: `UnCamp`, 
    to: `/brands/uncamp`, 
    desc: `Thematic camps and family learning programs.`,
    image: `uncamp-logo.png`
  },
  { 
    title: `Dahi Handi`, 
    to: `/brands/dahi-handi`, 
    desc: `Cultural festivals, youth engagement, heritage celebrations.`,
    image: `dahi-handi-game.png`
  },
]

export default function BrandsPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Our Brands</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Explore Trita's ecosystem of brands and programs.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        {brands.map(b => (
          <Card key={b.to} className="group">
            <div className="mt-4 flex items-center gap-3">
              <img
                src={`/${b.image}`}
                alt={`${b.title} logo`}
                className="h-12 w-auto max-w-20 object-contain"
              />
              <div className="text-lg font-semibold text-ink-950 group-hover:text-marigold-600 transition">
                {b.title}
              </div>
            </div>
            <p className="mt-2 text-sm text-ink-950/70">{b.desc}</p>
            <div className="mt-4">
              <Link to={b.to} className="text-sm font-semibold text-marigold-500 hover:text-marigold-600">
                View details
              </Link>
            </div>
          </Card>
        ))}
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Brands" pathname="/brands" />
