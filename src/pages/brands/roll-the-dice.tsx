import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function RollTheDicePage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/></svg>
              <span className="text-sm font-medium text-ink-950">Brand / Roll the Dice</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/Roll the Dice Logo (1200 x 628 px).png"
            alt="Roll the Dice logo"
            className="h-16 w-auto max-w-32 object-contain"
          />
          <h1 className="text-3xl font-semibold text-ink-950">Roll the Dice</h1>
        </div>
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
