import * as React from "react"
import { motion } from "framer-motion"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const community = [
  {
    number: `01`,
    title: `Game Festivals & Exhibitions`,
    desc: `We participate in cultural festivals, school fairs, and game conventions across India, setting up experiential zones where families can play traditional games together.`,
    tag: `Events`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event02.jpg?v=1753187128&width=800`,
  },
  {
    number: `02`,
    title: `School & College Programs`,
    desc: `We partner with educational institutions to run workshops, set up game libraries, and organize inter-school leagues that make cultural learning interactive and fun.`,
    tag: `Education`,
    image: `https://rollthedice.in/cdn/shop/files/alagulimane_event.jpg?v=1753186796&width=800`,
  },
  {
    number: `03`,
    title: `Corporate Engagement`,
    desc: `Team-building workshops, family day events, and cultural celebrations for the workplace that use traditional games to foster connection and strategic thinking.`,
    tag: `Corporate`,
    image: `https://rollthedice.in/cdn/shop/files/Corporate_Leadership_Workshops.png?v=1767600466&width=800`,
  },
  {
    number: `04`,
    title: `Online Community`,
    desc: `Through our digital platforms and social media, we connect a global community of traditional game enthusiasts, sharing stories, rules, and the joy of play.`,
    tag: `Digital`,
    image: `https://rollthedice.in/cdn/shop/files/Traditional_Games_and_Family.jpg?v=1770020495&width=800`,
  },
]

const testimonials = [
  {
    text: "A wonderful initiative. These games enhance competitive and healthy mindful thinking in children and teach skills no textbook can.",
    name: "Sushmitha Shravan",
    source: "Google Review",
  },
  {
    text: "The quality of the product is outstanding. The fabric used is excellent and durable too. It has been my go-to gift for kids. Applaud the efforts in reviving the lost Indian games.",
    name: "Rianshi",
    source: "rollthedice.in",
  },
  {
    text: "Playing this brought back memories of summer afternoons with my grandmother. We had Chowka Bara etched on the floor of our living room. The game itself is so much fun!",
    name: "Rashmi Canchi",
    source: "rollthedice.in",
  },
]

export default function CommunityPage() {
  return (
    <SiteLayout>
      {/* ── Hero header ── */}
      <header className="relative space-y-4 overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center shadow-soft sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative space-y-4">
          <div className="inline-block rounded-full border border-border bg-surface-warm px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
            Play · Connect · Celebrate
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Our <span className="text-primary italic">Community</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            We believe culture is best experienced together. Through events, workshops, and digital platforms, we bring people together to share the joy of traditional play.
          </p>
        </div>
      </header>

      {/* ── Community Pillars ── */}
      <section className="mt-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {community.map((c, i) => (
            <motion.div
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden bg-surface-warm">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between gap-6 p-8 sm:p-10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-primary/20">{c.number}</span>
                    <span className="rounded-full border border-border bg-muted/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                      {c.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground transition group-hover:text-primary">{c.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="mt-24">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">What People Say</h2>
          <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
            Real words from families, customers, and community members across India.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:shadow-lift hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="space-y-4">
                <span className="font-display text-5xl text-primary/20">"</span>
                <p className="font-body text-base italic leading-relaxed text-foreground">{t.text}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-bold text-foreground">{t.name}</span>
                <span className="font-body text-xs font-bold text-muted-foreground/50">{t.source}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 text-center shadow-soft sm:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative space-y-6">
            <h2 className="font-heading text-4xl font-bold text-foreground sm:text-5xl">
              Join our <span className="text-primary italic">community</span>
            </h2>
            <p className="mx-auto max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
              Host a workshop, organize an event, or collaborate with us to bring the joy of traditional play to your community.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button to="/collaborate" className="rounded-full px-10 py-3 text-base">Collaborate with us</Button>
              <Button to="/contact" variant="secondary" className="rounded-full px-10 py-3 text-base">
                Get in touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Community" pathname="/community" />
