import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../../components/ui/Button"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <StaticImage
          src="../../images/Hero_Image.webp"
          alt="Traditional Indian board game"
          className="h-[120%] w-full"
          imgClassName="object-cover"
          placeholder="blurred"
          loading="eager"
          formats={["webp", "auto"]}
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ y: textY, opacity }}
      >
        <motion.p
          className="mb-4 text-sm font-body uppercase tracking-[0.3em] text-white/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Trita Infotainment
        </motion.p>
        <motion.h1
          className="max-w-4xl font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Reimagining Indian Culture Through{" "}
          <span className="italic text-saffron">Play, Learning</span> & Technology
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl font-body text-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          We design experiences that revive traditional games, create cultural
          learning programs, and build digital platforms that bring families,
          schools, and communities together.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button to="/collaborate" className="px-8 py-3 text-base rounded-full">
            Collaborate with us
          </Button>
          <Button to="/programs" variant="secondary" className="px-8 py-3 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 ring-0 rounded-full">
            Explore our work
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-white/40 p-1">
          <div className="h-2 w-full rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  )
}
