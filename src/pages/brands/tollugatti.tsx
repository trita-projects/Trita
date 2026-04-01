import * as React from "react"

import BrandPageLayout from "../../layouts/BrandPageLayout"
import Button from "../../components/ui/Button"

const offerings = [
  {
    number: `01`,
    title: `Chowka Bara Online`,
    desc: `Play the ancient Indian cross-and-circle game online — solo or with friends. The same game your grandparents played, now on your screen.`,
    tag: `Board Game`,
    href: `https://www.tollugatti.com/games/chowkabara5`,
  },
  {
    number: `02`,
    title: `Aadu Huli Online`,
    desc: `Tigers and Goats — the traditional Indian strategy game of pursuit and capture, now playable online in multiple difficulty levels.`,
    tag: `Board Game`,
    href: `https://www.tollugatti.com/games/aaduhuli3`,
  },
  {
    number: `03`,
    title: `Quizzes`,
    desc: `Topic-based quizzes rooted in Indian culture, mythology, history, and heritage. Test your knowledge and learn as you play.`,
    tag: `Quick Play`,
    href: `https://www.tollugatti.com/quiz/topics`,
  },
  {
    number: `04`,
    title: `Puzzles`,
    desc: `Online puzzles designed to challenge the mind and build pattern recognition, spatial thinking, and cultural awareness.`,
    tag: `Quick Play`,
    href: `https://www.tollugatti.com/puzzles`,
  },
  {
    number: `05`,
    title: `Hangman & Crossword`,
    desc: `Classic word games reimagined with an Indian cultural twist — sharpen vocabulary, spelling, and lateral thinking.`,
    tag: `Quick Play`,
    href: `https://www.tollugatti.com/games/hangman`,
  },
  {
    number: `06`,
    title: `Leaderboard & Badges`,
    desc: `Compete with the community, earn badges for achievements, and climb the leaderboard. Play more, earn more.`,
    tag: `Community`,
    href: `https://www.tollugatti.com/leaderboard`,
  },
  {
    number: `07`,
    title: `Events`,
    desc: `Online board game leagues, community competitions, and micro-events that bring players together around traditional Indian games.`,
    tag: `Community`,
    href: `https://www.tollugatti.com/events`,
  },
  {
    number: `08`,
    title: `UnCamp Challenges`,
    desc: `Structured daily challenge programs for kids — practical, hands-on activities that build thinking, confidence, and creative expression.`,
    tag: `Programs`,
    href: `https://uncamp.tollugatti.com`,
  },
]

export default function TolluGattiPage() {
  return (
    <BrandPageLayout
      title="TolluGatti"
      subtitle="Brand / TolluGatti"
      logo="/tollugatti-inverse.png"
      website="https://tollugatti.com"
      description={
        <p>
          TolluGatti is Trita's digital platform — your ultimate destination for mind games, puzzles, and traditional
          Indian board games online. Play Chowka Bara, Aadu Huli, quizzes, crosswords, and more. Compete on
          leaderboards, earn badges, and join community events. A grandmother in Mysuru can now play with her
          granddaughter abroad.
        </p>
      }
    >
      {offerings.map(o => (
        <a
          key={o.title}
          href={o.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xs font-medium tracking-widest text-primary/30">{o.number}</span>
            <span className="rounded-full border border-border bg-muted/10 px-3 py-0.5 font-body text-xs tracking-wide text-muted-foreground">
              {o.tag}
            </span>
          </div>
          <h3 className="mt-4 font-heading text-lg font-bold text-foreground transition group-hover:text-primary">
            {o.title}
          </h3>
          <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted-foreground">{o.desc}</p>
          <span className="mt-4 font-body text-sm font-semibold text-primary/50 transition group-hover:text-primary">
            Play now →
          </span>
        </a>
      ))}

      {/* Full-width CTA */}
      <div className="col-span-full mt-4 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
        <div className="flex flex-col justify-between gap-8 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="space-y-2">
            <h2 className="font-heading text-2xl font-bold text-ink-950">Ready to play?</h2>
            <p className="max-w-lg font-body text-sm leading-relaxed text-ink-950/65">
              All games on TolluGatti are free to play. No downloads required — just open your browser and start playing traditional Indian games online.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Button
              href="https://www.tollugatti.com/games"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm"
            >
              All games
            </Button>
            <Button
              href="https://www.tollugatti.com/events"
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-sm"
            >
              View events
            </Button>
          </div>
        </div>
      </div>
    </BrandPageLayout>
  )
}