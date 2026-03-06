import * as React from "react"

import SiteLayout from "../../layouts/SiteLayout"
import Seo from "../../components/Seo"
import Card from "../../components/ui/Card"

const programs = [`Summer Challenges`, `Thematic Camps`, `Family Learning Programs`]

const themes = [
  `UnCamp Quest`,
  `UnCamp Sanskriti`,
  `UnCamp Innovators`,
  `UnCamp Wordsmiths`,
  `UnCamp Move`,
  `UnCamp Junior`,
]

export default function UnCampPage() {
  return (
    <SiteLayout>
      <header className="space-y-4">
        <div>
          <button type="button" onClick={() => window.history.back()} aria-label="Back">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/></svg>
              <span className="text-sm font-medium text-ink-950">Brand / UnCamp</span>
            </div>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="/uncamp-logo.png"
            alt="UnCamp logo"
            className="h-16 w-auto max-w-32 object-contain"
          />
          <h1 className="text-3xl font-semibold text-ink-950">UnCamp</h1>
        </div>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Programs that blend culture, curiosity, creativity, and community.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-ink-950">Programs</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {programs.map(p => (
            <Card key={p}>
              <div className="text-base font-semibold text-ink-950">{p}</div>
              <p className="mt-2 text-sm text-ink-950/70">Placeholder description.</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-ink-950">Themes</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map(t => (
            <Card key={t}>
              <div className="text-base font-semibold text-ink-950">{t}</div>
              <p className="mt-2 text-sm text-ink-950/70">Placeholder description.</p>
            </Card>
          ))}
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="UnCamp" pathname="/brands/uncamp" />
