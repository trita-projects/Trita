import * as React from "react"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Button from "../../components/ui/Button"

const items = [
  {
    title: `Roll the Dice`,
    logo: `/Roll the Dice Logo (1200 x 628 px).png`,
    desc: `Experiential game collections and installations designed for families, schools, and communities.`,
    to: `/brands/roll-the-dice`,
    number: `01`,
  },
  {
    title: `TolluGatti`,
    logo: `/tollugatti-inverse.png`,
    desc: `Digital-first board games, mindful play, companion experiences, and community events.`,
    to: `/brands/tollugatti`,
    number: `02`,
  },
  {
    title: `UnCamp`,
    logo: `/Uncamp Logo.png`,
    desc: `Thematic camps and challenges that blend culture, curiosity, and creativity.`,
    to: `/brands/uncamp`,
    number: `03`,
  },
]

export default function EcosystemSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-8 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">Our Brands</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">Our Ecosystem</h2>
            <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground">
              A family of brands and programs built to make culture accessible, joyful, and relevant.
            </p>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button to="/brands" variant="secondary" className="rounded-full">
              View all brands
            </Button>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.to}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:shadow-lift hover:border-primary/40 no-underline"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            >
              <div className="flex items-center justify-center bg-muted/30 mx-5 mt-5 px-6 py-12 rounded-2xl">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="h-20 w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 p-8">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl font-bold text-foreground transition group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="font-display text-xs font-medium tracking-widest text-primary/30">
                      {item.number}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
                <div className="inline-flex items-center gap-2 font-body text-sm font-bold text-primary group-hover:gap-3 transition-all">
                  Learn more <span>→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="mt-8 md:hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Button to="/brands" variant="secondary" className="w-full rounded-full">
            View all brands
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
