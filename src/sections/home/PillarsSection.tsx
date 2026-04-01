import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const pillars = [
  {
    num: "01",
    title: "Play-led Learning",
    subtitle: "Games as a cultural bridge",
    description:
      "Traditional games carry centuries of wisdom. We bring them back to life as tools for connection, learning, and joy.",
  },
  {
    num: "02",
    title: "Research to Design",
    subtitle: "Grounded in lived heritage",
    description:
      "Every product starts with deep research into India's knowledge systems, ensuring authenticity in every detail.",
  },
  {
    num: "03",
    title: "Technology with Soul",
    subtitle: "Digital preservation & platforms",
    description:
      "We build digital experiences that honor tradition while making culture accessible to the modern world.",
  },
]

export default function PillarsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Foundation
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-bold text-foreground sm:text-5xl font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Three pillars of <span className="italic text-primary">cultural play</span>
        </motion.h2>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lift"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
            >
              <span className="text-5xl font-display font-bold text-primary/20">{p.num}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground font-heading">{p.title}</h3>
              <p className="mt-1 text-sm font-semibold text-primary font-body">{p.subtitle}</p>
              <p className="mt-4 text-muted-foreground leading-relaxed font-body">{p.description}</p>
              <div className="mt-6 h-1 w-12 rounded-full bg-primary/30 transition-all group-hover:w-20 group-hover:bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
