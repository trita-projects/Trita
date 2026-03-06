import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function TolluGattiPage() {
  return (
    <SiteLayout>
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">TolluGatti</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Digital board games, mindful play, companion experiences, and community events.
        </p>
        <div className="pt-2">
          <Button href="https://tollugatti.com" target="_blank" rel="noopener noreferrer">
            Visit tollugatti.com
          </Button>
        </div>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Digital Board Games</div>
          <p className="mt-2 text-sm text-ink-950/70">Mobile/web-first board game experiences.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">UnCamp Challenges</div>
          <p className="mt-2 text-sm text-ink-950/70">Challenge-based learning journeys.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Mindful Games</div>
          <p className="mt-2 text-sm text-ink-950/70">Slow play, reflection, and creativity.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Companion App</div>
          <p className="mt-2 text-sm text-ink-950/70">Play support and content (placeholder).</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Community Events</div>
          <p className="mt-2 text-sm text-ink-950/70">Meetups and play circles.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="TolluGatti" pathname="/brands/tollugatti" />
