import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Button from "../../components/ui/Button"

const challengePaths = [
  {
    number: `01`,
    title: `UnCamp Quest`,
    age: `Ages 8–14`,
    desc: `Multi-skill challenges that build independent thinking, problem-solving, and self-expression. Covers critical thinking, creative problem solving, and personal expression.`,
    tag: `Quest`,
    href: `https://uncamp.tollugatti.com/register`,
    skills: [`Critical Thinking`, `Creative Problem Solving`, `Self Expression`],
  },
  {
    number: `02`,
    title: `UnCamp Engage`,
    age: `Ages 4–8`,
    desc: `Playful, parent-friendly activities designed for shorter attention spans and joyful participation. Focused on play-based learning and parent-child bonding.`,
    tag: `Engage`,
    href: `https://uncamp.tollugatti.com/register`,
    skills: [`Play-based Learning`, `Parent-Child Bonding`, `Simple Fun Activities`],
  },
  {
    number: `03`,
    title: `Maker & Hands-on`,
    age: `Themed`,
    desc: `Build things, create with materials, and develop maker instincts through structured hands-on challenges designed for curious kids.`,
    tag: `Theme`,
    href: `https://uncamp.tollugatti.com/events`,
    skills: [`Making`, `Building`, `Creativity`],
  },
  {
    number: `04`,
    title: `Storytelling & Expression`,
    age: `Themed`,
    desc: `Writing, narrating, and performing — challenges that build a child's voice, vocabulary, and confidence in expressing ideas.`,
    tag: `Theme`,
    href: `https://uncamp.tollugatti.com/events`,
    skills: [`Writing`, `Narration`, `Confidence`],
  },
  {
    number: `05`,
    title: `Culture & Heritage`,
    age: `Themed`,
    desc: `Discover India's traditions, games, festivals, and stories through daily challenges that connect children with their cultural roots.`,
    tag: `Theme`,
    href: `https://uncamp.tollugatti.com/events`,
    skills: [`Cultural Awareness`, `Heritage`, `Curiosity`],
  },
  {
    number: `06`,
    title: `Everyday Science`,
    age: `Themed`,
    desc: `Simple science observations and experiments at home — turning everyday moments into opportunities for discovery and learning.`,
    tag: `Theme`,
    href: `https://uncamp.tollugatti.com/events`,
    skills: [`Observation`, `Experimentation`, `Discovery`],
  },
]

const whyKidsLove = [
  `Badges & leaderboards`,
  `Achievable daily wins`,
  `Creative freedom`,
  `Showing off their work`,
  `Friendly competition`,
]

const whyParentsLove = [
  `Gives holidays structure without pressure`,
  `Reduces passive screen time naturally`,
  `Encourages independence`,
  `Creates daily accomplishment`,
  `Sparks meaningful conversations at home`,
  `No transport. No rushing. No overwhelm.`,
]

export default function UnCampPage() {
  return (
    <BrandPageLayout
      title="UnCamp"
      subtitle="Brand / UnCamp"
      logo="/Uncamp Logo.png"
      website="https://uncamp.tollugatti.com/"
      description={
        <p>
          UnCamp is a structured series of short, meaningful challenges that kids complete at home. It's summer —
          but purposeful. Each challenge takes 15–45 minutes, is practical and hands-on, and ends with a simple
          submission. Builds thinking and confidence. Feels like a game. But builds real skills.
        </p>
      }
    >
      {/* Challenge paths */}
      {challengePaths.map(c => (
        <a
          key={c.title}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-medium tracking-widest text-primary/30">{c.number}</span>
            <span className="rounded-full border border-border bg-muted/10 px-3 py-0.5 font-body text-xs tracking-wide text-muted-foreground">
              {c.tag}
            </span>
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-foreground transition group-hover:text-primary">
            {c.title}
          </h3>
          <p className="font-body text-xs font-semibold text-primary">{c.age}</p>
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {c.skills.map(s => (
              <span key={s} className="rounded-full bg-surface-warm px-2.5 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
          <span className="mt-6 font-body text-sm font-semibold text-primary/50 transition group-hover:text-primary">
            Join now →
          </span>
        </a>
      ))}

      {/* Why kids + parents love it */}
      <div className="col-span-full mt-4 grid gap-6 sm:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-7 py-5">
            <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">Why kids love it</span>
          </div>
          <div className="flex flex-col gap-0">
            {whyKidsLove.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-7 py-4 ${i !== whyKidsLove.length - 1 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                <span className="font-body text-sm text-ink-950/70">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
          <div className="border-b border-ink-950/[0.08] px-7 py-5">
            <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">Why parents love it</span>
          </div>
          <div className="flex flex-col gap-0">
            {whyParentsLove.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-7 py-4 ${i !== whyParentsLove.length - 1 ? "border-b border-ink-950/[0.08]" : ""}`}
              >
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                <span className="font-body text-sm text-ink-950/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="col-span-full mt-4 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
        <div className="flex flex-col justify-between gap-8 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-bold text-ink-950">
              UnCamp 2026 — Starts April 1
            </h2>
            <p className="max-w-lg font-body text-sm leading-relaxed text-ink-950/65">
              This summer, don't just keep them occupied. Help them grow. Secure your spot now — choose Quest for ages 8–14 or Engage for ages 4–8.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button
              href="https://uncamp.tollugatti.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm"
            >
              Register now
            </Button>
            <Button
              href="https://uncamp.tollugatti.com/about"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </BrandPageLayout>
  )
}