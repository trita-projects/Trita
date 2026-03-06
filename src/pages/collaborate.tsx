import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"
import Button from "../components/ui/Button"

export default function CollaboratePage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Collaborate With Us</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Schools, cultural institutions, corporates, retail partners, and research collaborations.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Schools</div>
          <p className="mt-2 text-sm text-ink-950/70">Workshops, leagues, and culture connect sessions.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Cultural Institutions</div>
          <p className="mt-2 text-sm text-ink-950/70">Exhibits, installations, and community programming.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Corporates</div>
          <p className="mt-2 text-sm text-ink-950/70">Team play, leadership workshops, and events.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Retail & Distribution</div>
          <p className="mt-2 text-sm text-ink-950/70">Bring games to stores and community spaces.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Research Collaborations</div>
          <p className="mt-2 text-sm text-ink-950/70">Co-create studies, archives, and prototypes.</p>
        </Card>
      </section>

      <section className="mt-14 rounded-3xl border border-ink-950/10 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-ink-950">Collaboration Form</h2>
        <p className="mt-2 text-sm text-ink-950/70">
          Placeholder UI for now. This will submit to a Resend-backed Gatsby Function once dependencies are installed.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact">Use contact form</Button>
          <Button variant="secondary" href="mailto:hello@trita.example">
            Email us
          </Button>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Collaborate" pathname="/collaborate" />
