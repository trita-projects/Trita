import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function RollTheDicePage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Roll the Dice</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Experiential game collections and installations designed for families, schools, and communities.
        </p>
        <div className="pt-2">
          <Button href="https://rollthedice.in" target="_blank" rel="noopener noreferrer">
            Visit rollthedice.in
          </Button>
        </div>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Game Collections</div>
          <p className="mt-2 text-sm text-ink-950/70">Curated sets of traditional and contemporary Indian games.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Experiential Game Sets</div>
          <p className="mt-2 text-sm text-ink-950/70">Large-format play for installations and festivals.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Workshops</div>
          <p className="mt-2 text-sm text-ink-950/70">Facilitated learning and play sessions.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Corporate Programs</div>
          <p className="mt-2 text-sm text-ink-950/70">Team building through strategy and culture.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Experience Centre</div>
          <p className="mt-2 text-sm text-ink-950/70">Visit and play (placeholder details).</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Roll the Dice" pathname="/brands/roll-the-dice" />
