import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Card from "../components/ui/Card"

export default function AboutPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">About Tritā</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Tritā brings together cultural research, thoughtful design, and technology to create playful learning
          experiences rooted in Indian heritage.
        </p>
      </header>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Our Story</div>
          <p className="mt-2 text-sm text-ink-950/70">Placeholder story narrative for Tritā.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Vision</div>
          <p className="mt-2 text-sm text-ink-950/70">A future where culture is lived through play.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Mission</div>
          <p className="mt-2 text-sm text-ink-950/70">
            Design programs, games, and platforms that make cultural learning accessible and joyful.
          </p>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Founders</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Card>
            <div className="text-base font-semibold text-ink-950">Tanushri SN</div>
            <div className="mt-1 text-sm text-ink-950/70">Founder & CEO</div>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Shashishekhar S</div>
            <div className="mt-1 text-sm text-ink-950/70">Co-Founder & COO</div>
          </Card>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Our Approach</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Card>
            <div className="text-base font-semibold text-ink-950">Research</div>
            <p className="mt-2 text-sm text-ink-950/70">Games documentation, knowledge systems, field learning.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Design</div>
            <p className="mt-2 text-sm text-ink-950/70">Human-centered facilitation, experience design, iteration.</p>
          </Card>
          <Card>
            <div className="text-base font-semibold text-ink-950">Technology</div>
            <p className="mt-2 text-sm text-ink-950/70">Digital preservation and playful platforms.</p>
          </Card>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="About" pathname="/about" />
