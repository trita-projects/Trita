import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function CareersPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Careers</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Internship opportunities, event facilitators, developers, and designers.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        <Card>
          <div className="text-base font-semibold text-ink-950">Internships</div>
          <p className="mt-2 text-sm text-ink-950/70">Research, facilitation, design, and ops roles.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Event Facilitators</div>
          <p className="mt-2 text-sm text-ink-950/70">Lead workshops, leagues, and community play sessions.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Developers</div>
          <p className="mt-2 text-sm text-ink-950/70">Build digital game experiences and platforms.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Designers</div>
          <p className="mt-2 text-sm text-ink-950/70">Game UX, visual design, and storytelling.</p>
        </Card>
      </section>

      <section className="mt-14 rounded-3xl border border-ink-950/10 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-ink-950">Application Form</h2>
        <p className="mt-2 text-sm text-ink-950/70">
          Placeholder UI for now. This will submit to a Resend-backed Gatsby Function once dependencies are installed.
        </p>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Careers" pathname="/careers" />
