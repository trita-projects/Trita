import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function ResearchPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Research & Innovation</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Traditional games research, knowledge systems, and digital preservation.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Traditional Games Research</div>
          <p className="mt-2 text-sm text-ink-950/70">Field research, documentation, and revival.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Knowledge Systems</div>
          <p className="mt-2 text-sm text-ink-950/70">Mapping cultural context, learning methods, and play.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Digital Preservation</div>
          <p className="mt-2 text-sm text-ink-950/70">Digitization approaches for wider access and continuity.</p>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Experimental Projects</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card>
            <div className="text-base font-semibold text-ink-950">Cultural gaming platforms</div>
            <p className="mt-2 text-sm text-ink-950/70">Prototype platforms that connect play with learning.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Interactive storytelling</div>
            <p className="mt-2 text-sm text-ink-950/70">Narrative-led game concepts for cultural immersion.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">AR/Drone learning concepts</div>
            <p className="mt-2 text-sm text-ink-950/70">Exploratory concepts for future learning experiences.</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Research & Innovation" pathname="/research" />
