import * as React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"

const metrics = [
  { value: 2500, suffix: "+", label: "Families engaged" },
  { value: 30, suffix: "+", label: "Schools partnered" },
  { value: 120, suffix: "+", label: "Workshops conducted" },
  { value: 25, suffix: "+", label: "Games revived" },
]

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function ImpactMetricsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-16 bg-primary overflow-hidden w-screen left-1/2 -translate-x-1/2">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-primary-foreground sm:text-5xl font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Impact Metrics
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-primary-foreground/70 font-body"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Empowering communities through board games and cultural play.
        </motion.p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl font-display font-bold text-primary-foreground">
                <Counter target={m.value} suffix={m.suffix} inView={isInView} />
              </div>
              <p className="mt-2 text-primary-foreground/70 font-caption uppercase tracking-wider text-sm font-semibold">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
