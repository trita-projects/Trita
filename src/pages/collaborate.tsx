import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const sections = [
  { id: `schools`, label: `Schools & Montessori` },
  { id: `corporates`, label: `Corporates` },
  { id: `cultural`, label: `Cultural Institutions` },
  { id: `retail`, label: `Retail & Distribution` },
  { id: `research`, label: `Get Started` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const schoolPrograms = [
  {
    number: `01`,
    title: `Annual Game Festivals`,
    desc: `Schoolwide events bringing traditional Indian games to students across grades — fostering cultural pride and healthy competition.`,
  },
  {
    number: `02`,
    title: `Classroom Workshops`,
    desc: `Structured sessions that integrate traditional games into learning — building math, strategy, patience, and collaboration skills.`,
  },
  {
    number: `03`,
    title: `Game Leagues & Tournaments`,
    desc: `Inter-school and intra-school leagues where students compete through traditional board games across the year.`,
  },
  {
    number: `04`,
    title: `Montessori Game Kits`,
    desc: `Curated game sets designed for early childhood environments — tactile, culturally rooted, and developmentally appropriate.`,
  },
]

const corporatePrograms = [
  {
    number: `01`,
    title: `Holiday & Festive Events`,
    desc: `Celebrate Diwali, New Year, and other occasions with traditional games that add cultural depth to company gatherings.`,
  },
  {
    number: `02`,
    title: `Corporate Retreats`,
    desc: `Team-based games that foster strategic thinking, collaboration, and leadership — with a sense of nostalgia built in.`,
  },
  {
    number: `03`,
    title: `Employee Recreation Programs`,
    desc: `Transform break areas and recreation centers with traditional games from across India. Help employees connect and unwind.`,
  },
  {
    number: `04`,
    title: `Family Day Events`,
    desc: `Inclusive games that bring all ages together — ideal for employee family days and community-building events.`,
  },
  {
    number: `05`,
    title: `Corporate Gifting`,
    desc: `Unique, heritage-rich gifts for festivals and milestones. Long-lasting, meaningful, and far beyond a traditional gift box.`,
  },
]

const otherFormats = [
  {
    number: `01`,
    title: `Cultural Institutions`,
    desc: `Museum exhibits, gallery installations, heritage festivals, and community programming that bring traditional games to life for the public.`,
    href: `https://rollthedice.in/pages/experiential-game-sets`,
  },
  {
    number: `02`,
    title: `Retail & Distribution`,
    desc: `Bring traditional Indian games to stores, gift shops, libraries, and community spaces. Wholesale and retail partnership formats available.`,
    href: `https://rollthedice.in/pages/wholesale-retail`,
  },
  {
    number: `03`,
    title: `NGOs & Non-Profits`,
    desc: `Special pricing and program support for NGOs working in education, community development, and cultural preservation.`,
    href: `https://rollthedice.in/pages/ngos-non-profits`,
  },
  {
    number: `04`,
    title: `Research Collaborations`,
    desc: `Co-create studies, archives, game documentation projects, and experimental prototypes rooted in India's traditional knowledge systems.`,
    href: `/contact`,
  },
  {
    number: `05`,
    title: `Country Distributors`,
    desc: `Partner with us to bring traditional Indian games to international markets. Distribution partnerships open for multiple regions.`,
    href: `https://rollthedice.in/pages/country-distributors`,
  },
  {
    number: `06`,
    title: `Social Communities`,
    desc: `Game programs for housing societies, cultural clubs, senior communities, and neighbourhood groups that celebrate heritage together.`,
    href: `https://rollthedice.in/pages/social-communities`,
  },
]

export default function CollaboratePage() {
  return (
    <SiteLayout>

      {/* Header */}
      <header className="space-y-4 text-center">
        <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground">Collaborate With Us</h1>
        <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
          Schools, corporates, cultural institutions, retail partners, NGOs, and research collaborations — there's a format that fits.
        </p>
      </header>

      {/* Section nav */}
      <nav className="mt-10 flex flex-wrap justify-center gap-2">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rounded-full border border-border bg-card px-5 py-2 font-body text-xs font-bold text-muted-foreground shadow-soft transition-all hover:border-primary/40 hover:text-primary active:scale-95"
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Schools & Montessori */}
      <section id="schools" className="mt-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Schools & Montessori</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Programs and events that bring the heritage of Indian games into classrooms and school culture.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer" className="rounded-full">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {schoolPrograms.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30"
            >
              <span className="font-display text-3xl font-bold text-primary/20">{p.number}</span>
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer" className="w-full rounded-full">
            Learn more
          </Button>
        </div>
      </section>

      {/* Corporates */}
      <section id="corporates" className="mt-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Corporates</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Team play, cultural events, gifting, and recreation programs designed for the workplace.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/corporate-engagements" variant="secondary" target="_blank" rel="noopener noreferrer" className="rounded-full">
              Learn more
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {corporatePrograms.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30"
            >
              <span className="font-display text-3xl font-bold text-primary/20">{p.number}</span>
              <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="https://rollthedice.in/pages/corporate-engagements" variant="secondary" target="_blank" rel="noopener noreferrer" className="w-full rounded-full">
            Learn more
          </Button>
        </div>
      </section>

      {/* Other formats — Cultural, Retail, Research, etc. */}
      <section id="cultural" className="mt-24 scroll-mt-28">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">More Ways to Collaborate</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
            Cultural institutions, NGOs, retail partners, researchers, distributors, and community groups.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherFormats.map((f) => (
            <a
              key={f.title}
              href={f.href}
              target={f.href.startsWith("http") ? "_blank" : undefined}
              rel={f.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30 no-underline"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-primary/20">{f.number}</span>
                <span className="font-body text-xs font-bold text-primary opacity-0 group-hover:opacity-100 transition-all">Explore →</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="research" className="mt-24 scroll-mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                  Ready to get <span className="text-primary italic">started?</span>
                </h2>
                <p className="max-w-lg font-body text-base leading-relaxed text-muted-foreground">
                  Fill out our contact form or email us directly and our team will get back to you within 1–2 working days.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" className="px-10 py-3 text-base rounded-full">Use contact form</Button>
                <Button variant="secondary" href="mailto:namaste@trita.in" className="px-10 py-3 text-base rounded-full">
                  Email us
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-border lg:border-l lg:border-t-0 bg-muted/5">
              <div className="px-8 pb-4 pt-6 lg:pt-8">
                <span className="font-display text-xs font-medium uppercase tracking-widest text-primary/40">We work with</span>
              </div>
              {[`Schools & Montessori`, `Corporates`, `Cultural Institutions`, `NGOs & Non-Profits`, `Retail Partners`, `Researchers`].map((a, i, arr) => (
                <div
                  key={a}
                  className={`flex items-center gap-3 px-8 py-4 ${i !== arr.length - 1 ? "border-b border-border" : "pb-8"}`}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="font-body text-sm font-semibold text-foreground">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Collaborate" pathname="/collaborate" />