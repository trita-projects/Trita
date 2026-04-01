import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

// ─── Data ─────────────────────────────────────────────────────────────────────

const sections = [
  { id: `why`, label: `Why Join Us` },
  { id: `internships`, label: `Internships & Gigs` },
  { id: `jobs`, label: `Full-Time Jobs` },
  { id: `apply`, label: `Apply` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

const whyJoin = [
  {
    number: `01`,
    title: `Hands-on Experience`,
    desc: `Real-world experience in event management, customer engagement, logistics, and cultural programming — not desk work.`,
  },
  {
    number: `02`,
    title: `Flexible Gigs`,
    desc: `Many opportunities to work at events in Mysore, Bangalore, and other cities on your own schedule.`,
  },
  {
    number: `03`,
    title: `Cultural Impact`,
    desc: `Be part of a movement that celebrates and shares India's traditional gaming heritage with communities across the country.`,
  },
  {
    number: `04`,
    title: `Play on the Job`,
    desc: `Where else can you say playing traditional Indian board games is actually part of your job description?`,
  },
]

const internships = [
  {
    number: `01`,
    title: `Event Representative & Customer Engagement`,
    type: `Internship / Gig`,
    location: `Mysore & Bangalore`,
    desc: `Represent Roll the Dice at events, festivals, and exhibitions. Engage with visitors, demonstrate games, and share the story behind each traditional game set.`,
    skills: [`Customer interaction`, `Product demonstrations`, `Stall setup & management`],
    ideal: `Outgoing, passionate about Indian culture, strong communication skills.`,
  },
  {
    number: `02`,
    title: `Logistics & Event Support`,
    type: `Internship / Gig`,
    location: `Mysore & Bangalore`,
    desc: `Assist with transporting game sets, setting up event locations, and supporting exhibitions from start to finish.`,
    skills: [`Event logistics`, `Equipment handling`, `Setup & takedown`],
    ideal: `Reliable, physically fit, keen sense of responsibility.`,
  },
  {
    number: `03`,
    title: `Accounts & Payment Coordination`,
    type: `Internship`,
    location: `Mysore`,
    desc: `Oversee on-site sales transactions, manage accounts, and ensure all payments are accurately recorded and synced with the central system.`,
    skills: [`Sales tracking`, `Financial record-keeping`, `Accounts coordination`],
    ideal: `Detail-oriented, good with numbers, interested in financial coordination.`,
  },
]

const jobs = [
  {
    number: `01`,
    title: `Sales & Customer Engagement`,
    type: `Full-Time`,
    location: `Mysore`,
    desc: `Drive sales at events and exhibitions, build relationships with customers, and help more families discover traditional Indian board games.`,
    skills: [`Sales`, `Customer service`, `Event representation`],
  },
  {
    number: `02`,
    title: `Operations & Logistics`,
    type: `Full-Time`,
    location: `Mysore`,
    desc: `Manage day-to-day logistics, inventory, and event operations to ensure seamless delivery of products and programs across locations.`,
    skills: [`Operations`, `Inventory management`, `Coordination`],
  },
]

// ─── Scroll animation ──────────────────────────────────────────────────────────

function useReveal(threshold = 0.12) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}


export default function CareersPage() {
  return (
    <SiteLayout>
      {/* ── Hero ── */}
      <header className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center shadow-soft sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative space-y-4">
          <div className="inline-block rounded-full border border-border bg-surface-warm px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
            Internships · Gigs · Full-Time
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Join the <span className="text-primary italic">Team</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Are you passionate about Indian culture, eager to learn, and ready for hands-on experience? Join Trita and play a key role in bringing traditional Indian games to communities across the country.
          </p>
        </div>
      </header>

      {/* ── Section nav ── */}
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

      {/* ── Why Join ── */}
      <section id="why" className="mt-24 scroll-mt-28">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-3xl font-bold text-foreground">Why Join Trita?</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
            A rare opportunity to work on cultural impact — and yes, playing on the job is encouraged.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyJoin.map((w) => (
            <div key={w.title} className="flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30">
              <span className="font-display text-3xl font-bold text-primary/20">{w.number}</span>
              <h3 className="font-heading text-xl font-bold text-foreground">{w.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Internships ── */}
      <section id="internships" className="mt-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Internships & Gig Opportunities</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Flexible roles in Mysore, Bangalore, and at events across India.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button
              href="https://rollthedice.in/pages/internships-gig-opportunities"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              Full details
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {internships.map((role) => (
            <div key={role.title} className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30">
              <div className="flex flex-col gap-4 p-8 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-primary/20">{role.number}</span>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary">
                    {role.type}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{role.title}</h3>
                <span className="font-body text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">{role.location}</span>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{role.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {role.skills.map(s => (
                    <span key={s} className="rounded-full bg-surface-warm px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-border bg-muted/5 px-8 py-5">
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  <span className="font-bold text-foreground">Ideal: </span>{role.ideal}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Full-Time Jobs ── */}
      <section id="jobs" className="mt-24 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Full-Time Opportunities</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Based in Mysore. Work hard, connect with people, and dive into Indian culture.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button
              href="https://rollthedice.in/pages/jobs"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full"
            >
              Full details
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {jobs.map((job) => (
            <div key={job.title} className="flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30">
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-bold text-primary/20">{job.number}</span>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-border bg-primary/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wider text-primary">
                    {job.type}
                  </span>
                  <span className="font-body text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">{job.location}</span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{job.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{job.desc}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {job.skills.map(s => (
                  <span key={s} className="rounded-full bg-surface-warm px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Apply CTA ── */}
      <section id="apply" className="mt-24 scroll-mt-28">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid gap-0 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col justify-between gap-8 p-8 sm:p-12">
              <div className="space-y-4">
                <h2 className="font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
                  Ready to <span className="text-primary italic">roll?</span>
                </h2>
                <p className="max-w-lg font-body text-base leading-relaxed text-muted-foreground">
                  Send us your details and the role you're interested in. We'll get back to you within a few working days.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" className="px-10 py-3 text-base rounded-full">Apply via contact form</Button>
                <Button
                  href="mailto:namaste@trita.in"
                  variant="secondary"
                  className="px-10 py-3 text-base rounded-full"
                >
                  Email us directly
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-center border-t border-border lg:border-l lg:border-t-0 bg-muted/5">
              <div className="px-8 pb-4 pt-6 lg:pt-8">
                <span className="font-display text-xs font-medium uppercase tracking-widest text-primary/40">
                  Open roles
                </span>
              </div>
              {[...internships.map(r => r.title), ...jobs.map(r => r.title)].map((title, i, arr) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 px-8 py-4 ${i !== arr.length - 1 ? "border-b border-border" : "pb-8"}`}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="font-body text-sm font-semibold text-foreground">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Careers" pathname="/careers" />