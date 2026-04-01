import * as React from "react"
import { motion } from "framer-motion"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"
import Button from "../components/ui/Button"

const awards = [
  {
    title: `Startup Karnataka Elevate Winner`,
    year: `2024`,
    desc: `Selected as a Startup Karnataka Elevate Winner for promoting traditional board games — includes a government grant and participation in an enabling ecosystem.`,
    href: `https://rollthedice.in/blogs/talk/honoring-innovation-roll-the-dice-recognised-at-the-elevate-winners-ceremony`,
    image: `https://rollthedice.in/cdn/shop/files/IMG_20241113_134958688.jpg?v=1731493856&width=800`,
  },
]

const pressFeatures = [
  {
    outlet: `The Better India`,
    title: `How Roll the Dice is reviving India's traditional board games`,
    desc: `After years in tech, founders Tanushri SN and Shashishekhar S chose a different path — reviving India's traditional board games through eco-friendly craftsmanship and authentic materials, handcrafted by 30+ artisans across southern India.`,
    href: `https://thebetterindia.com/startup/sustainable-enterprises/roll-the-dice-traditional-games-revival-tanushri-sn-shashishekhar-s-indian-board-games-culture-10590541`,
    tag: `Feature`,
  },
  {
    outlet: `CNN News18`,
    title: `Breakfast Club — Roll the Dice featured`,
    desc: `CNN News18 covered Roll the Dice on their Breakfast Club show, spotlighting the mission to bring traditional Indian games back into family life.`,
    href: `https://rollthedice.in/pages/press-awards`,
    tag: `TV`,
  },
  {
    outlet: `Dinamalar`,
    title: `Roll the Dice in Dinamalar Tamil newspaper`,
    desc: `A feature story on Roll the Dice published in Dinamalar, one of India's leading Tamil-language newspapers, covering the cultural revival mission.`,
    href: `https://rollthedice.in/pages/press-awards`,
    tag: `Print`,
    image: `https://cdn.shopify.com/s/files/1/0700/1692/6010/files/Dinamalar_Tamil_newspaper.jpg?v=1766124048`,
  },
]

const galleryImages = [
  {
    src: `https://rollthedice.in/cdn/shop/files/Traditional_Games_and_Family.jpg?v=1770020495&width=800`,
    alt: `Family playing traditional games`,
    tag: `Family Moments`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/RolltheDice_Event_Image.jpg?v=1770009750&width=800`,
    alt: `Roll the Dice event`,
    tag: `Events`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event.jpg?v=1753186796&width=800`,
    alt: `Alaguli Mane workshop`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event01.jpg?v=1753191262&width=800`,
    alt: `Alaguli Mane event`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/alagulimane_event02.jpg?v=1753187128&width=800`,
    alt: `Festival game event`,
    tag: `Events`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/ANJ8566.jpg?v=1761820994&width=800`,
    alt: `Board game photography`,
    tag: `Board Games`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/Corporate_Leadership_Workshops.png?v=1767600466&width=800`,
    alt: `Corporate leadership workshop`,
    tag: `Workshops`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/ANJ8595_1.jpg?v=1762157420&width=800`,
    alt: `Traditional game set`,
    tag: `Board Games`,
  },
  {
    src: `https://rollthedice.in/cdn/shop/files/Puli_Jhudam_aata_-_Indian_Tiger_and_Goat_game.jpg?v=1756732246&width=800`,
    alt: `Puli Jhudam - Tiger and Goat game`,
    tag: `Board Games`,
  },
]

export default function MediaPage() {
  const [activeFilter, setActiveFilter] = React.useState(`All`)
  const filters = [`All`, `Board Games`, `Workshops`, `Events`, `Family Moments`]
  const filteredGallery = activeFilter === `All`
    ? galleryImages
    : galleryImages.filter(img => img.tag === activeFilter)

  return (
    <SiteLayout>
      {/* ── Hero header ── */}
      <header className="relative space-y-4 overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 shadow-soft text-center sm:px-16">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative space-y-4">
          <div className="inline-block rounded-full border border-border bg-surface-warm px-4 py-1.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
            Press · Awards · Gallery
          </div>
          <h1 className="font-heading text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Media & <span className="text-primary italic">Recognition</span>
          </h1>
          <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
            News features, awards, press coverage, and moments from our workshops, events, and cultural celebrations.
          </p>
        </div>
      </header>

      {/* ── Awards ── */}
      <section className="mt-24">
        <h2 className="font-heading text-3xl font-bold text-foreground">Awards & Recognition</h2>
        <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
          Milestones that mark our journey reviving India's gaming heritage.
        </p>

        <div className="mt-10 space-y-8">
          {awards.map((award) => (
            <motion.a
              key={award.title}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline md:flex-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {award.image && (
                <div className="relative h-52 flex-shrink-0 overflow-hidden bg-surface-warm md:h-auto md:w-80">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-col justify-between gap-6 p-8 md:p-10">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-widest text-primary">
                      🏆 Award
                    </span>
                    <span className="font-body text-xs font-bold text-muted-foreground/50">{award.year}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground transition group-hover:text-primary">
                    {award.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-2xl">{award.desc}</p>
                </div>
                <span className="font-body text-sm font-bold text-primary transition group-hover:opacity-80">
                  Read more →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Press Features ── */}
      <section className="mt-24">
        <h2 className="font-heading text-3xl font-bold text-foreground">In the Press</h2>
        <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
          Features, interviews, and stories from media outlets across India.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {pressFeatures.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {item.image && (
                <div className="relative h-48 overflow-hidden bg-surface-warm">
                  <img
                    src={item.image}
                    alt={item.outlet}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              {!item.image && (
                <div className="flex h-32 items-center justify-center bg-surface-warm px-8">
                  <span className="font-display text-2xl font-bold text-primary/10">{item.outlet}</span>
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-border bg-muted/10 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                      {item.tag}
                    </span>
                    <span className="font-body text-xs font-bold text-muted-foreground/50">{item.outlet}</span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground transition group-hover:text-primary leading-snug">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground line-clamp-3">{item.desc}</p>
                </div>
                <span className="font-body text-sm font-bold text-primary transition group-hover:opacity-80">
                  Read feature →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      <section className="mt-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Story in Pictures</h2>
            <p className="mt-2 font-body text-base leading-relaxed text-muted-foreground">
              Moments from workshops, family game nights, and cultural celebrations.
            </p>
          </div>
          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-5 py-2 font-body text-xs font-bold transition-all duration-200 ${
                  activeFilter === f
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-card text-muted-foreground shadow-soft hover:border-primary/40 hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-style grid */}
        <div className="mt-10 columns-2 gap-6 md:columns-3 lg:columns-4">
          {filteredGallery.map((img, i) => (
            <motion.div
              key={img.src}
              className="group mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full bg-white/90 px-3 py-1 font-body text-[10px] font-bold uppercase tracking-wider text-black">
                    {img.tag}
                  </span>
                </div>
              </div>
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
              Want to <span className="text-primary italic">feature</span> us?
            </h2>
            <p className="mx-auto max-w-xl font-body text-lg leading-relaxed text-muted-foreground">
              For press inquiries, media kits, or collaboration requests — reach out to our team directly.
            </p>
            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-center">
              <Button to="/contact" className="rounded-full px-10 py-3 text-base">Get in touch</Button>
              <Button
                href="https://rollthedice.in/pages/press-awards"
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-10 py-3 text-base"
              >
                Full press page →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Media & Recognition" pathname="/media" />
