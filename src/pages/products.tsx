import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

export default function ProductsPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Products</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Board games, educational products, and experiential game installations.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-ink-950">Board Games</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            `Chowka Bara`,
            `Aadu Huli`,
            `Navakankari`,
            `Pagade`,
            `Sholo Gutti`,
          ].map(name => (
            <Card key={name}>
              <div className="text-base font-semibold text-ink-950">{name}</div>
              <p className="mt-2 text-sm text-ink-950/70">Placeholder product description.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Educational Products</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[`Cultural puzzles`, `Activity books`].map(name => (
            <Card key={name}>
              <div className="text-base font-semibold text-ink-950">{name}</div>
              <p className="mt-2 text-sm text-ink-950/70">Placeholder product description.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Experiential Game Installations</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-base font-semibold text-ink-950">Large-format play</div>
            <p className="mt-2 text-sm text-ink-950/70">Installations for festivals, museums, schools, and events.</p>
            <div className="mt-5">
              <Button variant="secondary" to="/collaborate">
                Enquire
              </Button>
            </div>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Shop</div>
            <p className="mt-2 text-sm text-ink-950/70">CTA placeholder.</p>
            <div className="mt-5">
              <Button href="#" variant="primary">
                Shop Now
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Products" pathname="/products" />
