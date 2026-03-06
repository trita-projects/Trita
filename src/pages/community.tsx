import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function CommunityPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">Community & Impact</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Working with schools, institutions, cultural organisations, and families.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Schools & Institutions</div>
          <p className="mt-2 text-sm text-ink-950/70">Workshops, sessions, and play-based learning.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Cultural Organisations</div>
          <p className="mt-2 text-sm text-ink-950/70">Installations and heritage programming.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Families & Communities</div>
          <p className="mt-2 text-sm text-ink-950/70">Intergenerational play and community events.</p>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Testimonials</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-sm font-semibold text-ink-950">“Our kids discovered strategy and culture together.”</div>
            <p className="mt-2 text-sm text-ink-950/70">Placeholder testimonial — Parent, Mysuru</p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-ink-950">“A beautiful blend of heritage and learning.”</div>
            <p className="mt-2 text-sm text-ink-950/70">Placeholder testimonial — School Partner</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Community & Impact" pathname="/community" />
