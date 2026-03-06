import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function ProgramsPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Programs & Experiences</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Workshops, events, and play-led learning experiences.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-ink-950">Workshops</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card>
            <div className="text-base font-semibold text-ink-950">Indian Board Game Workshops</div>
            <p className="mt-2 text-sm text-ink-950/70">Hands-on play with facilitation and cultural context.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Culture Connect Sessions</div>
            <p className="mt-2 text-sm text-ink-950/70">Interactive sessions for schools and institutions.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Strategy Games for Schools</div>
            <p className="mt-2 text-sm text-ink-950/70">Decision-making, teamwork, and joyful competition.</p>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Events</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card>
            <div className="text-base font-semibold text-ink-950">Board Game Leagues</div>
            <p className="mt-2 text-sm text-ink-950/70">Recurring leagues that build community.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Community Events</div>
            <p className="mt-2 text-sm text-ink-950/70">Pop-ups and gatherings with intergenerational play.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Cultural Festivals</div>
            <p className="mt-2 text-sm text-ink-950/70">Curated play experiences for festival settings.</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Programs" pathname="/programs" />
