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
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold text-ink-950">UnCamp</h1>
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
