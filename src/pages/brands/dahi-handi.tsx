import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"

export default function DahiHandiPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/></svg>
              <span className="text-sm font-medium text-ink-950">Brand / Dahi Handi</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/dahi-handi-game.png"
            alt="Dahi Handi logo"
            className="h-16 w-auto max-w-32 object-contain"
          />
          <h1 className="text-3xl font-semibold text-ink-950">Dahi Handi</h1>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Cultural festivals, community play, youth engagement, competitions, and heritage celebrations.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="text-base font-semibold text-ink-950">Cultural festivals</div>
          <p className="mt-2 text-sm text-ink-950/70">Festival activations and play-led cultural programming.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Community play</div>
          <p className="mt-2 text-sm text-ink-950/70">Neighborhood events that bring people together.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Youth engagement</div>
          <p className="mt-2 text-sm text-ink-950/70">Leadership, teamwork, and cultural participation.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Competitions</div>
          <p className="mt-2 text-sm text-ink-950/70">Playful challenges and festival competitions.</p>
        </Card>
        <Card>
          <div className="text-base font-semibold text-ink-950">Heritage celebrations</div>
          <p className="mt-2 text-sm text-ink-950/70">Document and showcase local traditions.</p>
        </Card>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Dahi Handi" pathname="/brands/dahi-handi" />
