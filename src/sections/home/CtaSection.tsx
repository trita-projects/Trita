import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../components/ui/Button"

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <section id="collaborate" ref={ref} className="relative py-32 overflow-hidden w-screen left-1/2 -translate-x-1/2">
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <StaticImage
          src="../../images/Hero_Image.webp"
          alt=""
          className="h-[130%] w-full"
          imgClassName="object-cover"
          placeholder="blurred"
          formats={["webp", "auto"]}
          quality={85}
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <motion.h2
          className="text-3xl font-bold text-primary-foreground sm:text-5xl font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's build cultural play{" "}
          <span className="italic text-saffron">together</span>
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-primary-foreground/70 font-body"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Whether you're a school, cultural institution, or a brand team — there's
          a collaboration format that fits.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <Button
            href="https://www.trita.in/collaborate/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-base rounded-full"
          >
            Collaborate with us
          </Button>
          <Button
            href="https://www.trita.in/contact/"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="px-8 py-3 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 ring-0 rounded-full"
          >
            Contact
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/50 font-caption uppercase tracking-widest font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <span>Schools</span>
          <span>•</span>
          <span>Cultural institutions</span>
          <span>•</span>
          <span>Brand teams</span>
        </motion.div>
      </div>
    </section>
  )
}
