import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"
import Button from "../../components/ui/Button"

export default function TolluGattiPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/></svg>
              <span className="text-sm font-medium text-ink-950">Brand / TolluGatti</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/tollugatti-inverse.png"
            alt="TolluGatti logo"
            className="h-16 w-auto max-w-32 object-contain"
          />
          <h1 className="text-3xl font-semibold text-ink-950">TolluGatti</h1>
        </div>
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
