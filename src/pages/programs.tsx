import * as React from "react"
import { motion } from "framer-motion"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const workshops = [
  {
    number: `01`,
    title: `Indian Board Game Workshops`,
    desc: `Hands-on facilitated sessions introducing traditional Indian board games with full cultural context — for schools, corporates, and community groups.`,
    tag: `All ages`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `02`,
    title: `Culture Connect Sessions`,
    desc: `Interactive deep-dive sessions exploring the history, regional variations, and strategy behind India's traditional games. Designed for schools and institutions.`,
    tag: `Schools`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `03`,
    title: `Strategy Games for Schools`,
    desc: `Structured game programs that build decision-making, teamwork, and strategic thinking through traditional Indian strategy games like Aadu Huli and Navakankari.`,
    tag: `Schools`,
    href: `https://rollthedice.in/pages/schools-montessori`,
  },
  {
    number: `04`,
    title: `Corporate Leadership Workshops`,
    desc: `Team-building and leadership development through traditional games. Retreats, recreation programs, and family day events designed for the workplace.`,
    tag: `Corporate`,
    href: `https://rollthedice.in/pages/corporate-engagements`,
    image: `https://rollthedice.in/cdn/shop/files/Corporate_Leadership_Workshops.png?v=1767600466&width=800`,
  },
  {
    number: `05`,
    title: `Teacher Training Programs`,
    desc: `Workshops that equip teachers with traditional games as a culturally rooted toolkit for 21st-century student development and classroom engagement.`,
    tag: `Educators`,
    href: `https://rollthedice.in/blogs/talk/revolutionizing-teacher-training-with-traditional-indian-games-a-workshop-with-v-lead`,
  },
]

const upcomingEvents = [
  {
    title: `Webinar on Navakankari`,
    type: `Online`,
    date: `To be announced`,
    location: `Online`,
    desc: `A deep-dive webinar exploring the history, rules, and strategy of Navakankari — India's ancient version of Nine Men's Morris.`,
  },
  {
    title: `Chowka Bara Micro League`,
    type: `Online`,
    date: `To be announced`,
    location: `Online`,
    desc: `A community micro-league for Chowka Bara players. Compete, connect, and celebrate one of India's oldest board games.`,
  },
]

const pastEvents = [
  {
    title: `TTOX'24 — India's Premier Tabletop Games Convention`,
    date: `14–15 December, 2024`,
    location: `Bengaluru`,
    type: `Exhibition`,
    image: `https://rollthedice.in/cdn/shop/files/RolltheDice_Event_Image.jpg?v=1770009750&width=800`,
  },
  {
    title: `Indica Mysuru Yoga Utsava`,
    date: `12–15 December, 2024`,
    location: `Mysuru`,
    type: `Cultural Festival`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event02.jpg?v=1753187128&width=800`,
  },
  {
    title: `Gayu's Glitz Flea Market`,
    date: `5 January, 2025`,
    location: `Davanagere`,
    type: `Pop-up`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event01.jpg?v=1753191262&width=800`,
  },
  {
    title: `Private Event`,
    date: `26 January, 2025`,
    location: `Bengaluru`,
    type: `Invite-only`,
    image: `https://rollthedice.in/cdn/shop/files/Traditional_Games_and_Family.jpg?v=1770020495&width=800`,
  },
]

const experienceTypes = [
  { label: `Board Game Leagues`, desc: `Recurring community leagues that build connection through competitive traditional play.` },
  { label: `Display & Sales at Events`, desc: `We participate in exhibitions, fun fairs, school events, and cultural festivals across cities.` },
  { label: `Community Pop-ups`, desc: `Drop-in game sessions open to families, neighbourhoods, and cultural communities.` },
  { label: `Experiential Game Installations`, desc: `Large-format traditional game sets for festivals, museums, and corporate spaces.` },
]

export default function ProgramsPage() {
  return (
    <SiteLayout>
      {/* ── Hero header ── */}
      <header className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center shadow-soft sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative space-y-4">
          <div className="inline-block rounded-full border border-border bg-surface-warm px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
            Workshops · Events · Experiences
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Programs & <span className="text-primary italic">Experiences</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            Workshops, leagues, festivals, and play-led learning experiences — bringing traditional Indian games into schools, workplaces, and communities.
          </p>
        </div>
      </header>

      {/* ── Workshops ── */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Workshops</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Structured, facilitated sessions for schools, corporates, and communities.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer" className="rounded-full">
              School programs
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w, i) => (
            <motion.a
              key={w.title}
              href={w.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {w.image && (
                <div className="relative h-48 overflow-hidden bg-surface-warm">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-primary/20">{w.number}</span>
                    <span className="rounded-full border border-border bg-muted/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{w.tag}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground transition group-hover:text-primary leading-snug">{w.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
                <span className="font-body text-sm font-bold text-primary transition group-hover:opacity-80">
                  Learn more →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="https://rollthedice.in/pages/schools-montessori" variant="secondary" target="_blank" rel="noopener noreferrer" className="w-full rounded-full">
            School programs
          </Button>
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="mt-24">
        <h2 className="font-heading text-3xl font-bold text-foreground">Upcoming Events</h2>
        <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
          Online and in-person events — leagues, webinars, and community competitions.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {upcomingEvents.map((e, i) => (
            <motion.div
              key={e.title}
              className="flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30 h-full"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
                  {e.type}
                </span>
                <span className="font-body text-xs font-bold text-muted-foreground/50">{e.date}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{e.title}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
              <span className="font-body text-xs font-bold text-muted-foreground/40 uppercase tracking-widest">{e.location}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Past Events ── */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Past Events</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Exhibitions, festivals, and showcases from across India.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="https://rollthedice.in/pages/events" variant="secondary" target="_blank" rel="noopener noreferrer" className="rounded-full">
              View all events
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pastEvents.map((e, i) => (
            <motion.div
              key={e.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="relative overflow-hidden bg-surface-warm aspect-[4/3]">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-black">
                    {e.type}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-heading text-base font-bold text-foreground leading-snug">{e.title}</h3>
                <span className="font-body text-xs font-bold text-muted-foreground/50">{e.date} · {e.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 sm:hidden">
          <Button href="https://rollthedice.in/pages/events" variant="secondary" target="_blank" rel="noopener noreferrer" className="w-full rounded-full">
            View all events
          </Button>
        </div>
      </section>

      {/* ── How We Show Up ── */}
      <section className="mt-24">
        <h2 className="font-heading text-3xl font-bold text-foreground">How We Show Up</h2>
        <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
          The different formats we use to bring traditional games into the world.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {experienceTypes.map((e, i) => (
            <motion.div
              key={e.label}
              className="flex flex-col gap-4 p-8 rounded-3xl border border-border bg-card shadow-soft transition-all hover:shadow-lift hover:border-primary/30 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="font-display text-3xl font-bold text-primary/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-xl font-bold text-foreground leading-snug">{e.label}</h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center shadow-soft sm:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Want to <span className="text-primary italic">host</span> a program?
            </h2>
            <p className="mx-auto max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
              We bring traditional Indian games to your school, office, festival, or community. Get in touch to design a format that fits.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button to="/collaborate" className="rounded-full px-10 py-3 text-base">Collaborate with us</Button>
              <Button
                href="https://rollthedice.in/pages/events"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-3 text-base"
              >
                All events →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Programs & Experiences" pathname="/programs" />
