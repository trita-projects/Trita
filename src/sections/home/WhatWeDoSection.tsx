import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

const items = [
  {
    number: `01`,
    title: `Traditional Games Revival`,
    points: [`Documentation`, `Design refinements`, `Facilitated play`],
  },
  {
    number: `02`,
    title: `Cultural Learning Programs`,
    points: [`School workshops`, `Family programs`, `Community events`],
  },
  {
    number: `03`,
    title: `Digital Platforms`,
    points: [`Board games`, `Interactive learning`, `Companion experiences`],
  },
  {
    number: `04`,
    title: `Research & Innovation`,
    points: [`Knowledge systems`, `Digital preservation`, `Experimental concepts`],
  },
]

export default function WhatWeDoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={sectionRef} className="relative py-12 px-4 sm:px-6 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          Our Work
        </motion.p>
        <motion.h2
          className="mt-3 text-3xl font-bold text-foreground sm:text-5xl font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-muted-foreground font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Our work sits at the intersection of heritage, learning science, and
          modern design.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <motion.div
              key={s.number}
              className="group rounded-3xl border border-border bg-card/80 backdrop-blur-sm p-8 transition-all hover:shadow-lift hover:border-primary/30"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <span className="text-3xl font-display font-bold text-primary/25">{s.number}</span>
              <h3 className="mt-3 text-lg font-bold text-foreground font-heading">{s.title}</h3>
              <ul className="mt-4 space-y-3">
                {s.points.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground font-body">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
