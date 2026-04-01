import * as React from "react"
import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const approachItems = [
  {
    number: `01`,
    title: `Research`,
    desc: `Our work begins with exploring traditional games, cultural practices, and knowledge systems. Through field visits, conversations with practitioners, artisans, and community elders, we document traditions and stories.`,
  },
  {
    number: `02`,
    title: `Design`,
    desc: `We follow a human-centered approach, observing how families interact with games. Through prototyping and testing, we transform cultural knowledge into intuitive, enjoyable, and interactive formats.`,
  },
  {
    number: `03`,
    title: `Technology`,
    desc: `We build digital platforms and tools that document traditional games, support interactive learning, and enable people to explore traditions beyond physical spaces — making culture accessible to all.`,
  },
]

const founders = [
  {
    name: `Tanushri SN`,
    role: `Founder & CEO`,
    bio: `Tanushri SN is the Founder and CEO of Trita Infotainment LLP and the creative force behind many of its cultural initiatives. She is passionate about researching, designing, and reviving traditional Indian games and cultural experiences for modern audiences. With a Master's degree in Computer Software Engineering from BITS Pilani, she began her career in technology before turning her focus toward cultural entrepreneurship.`,
  },
  {
    name: `Shashishekhar S`,
    role: `Co-Founder & COO`,
    bio: `Shashishekhar S is the Co-Founder and COO of Trita Infotainment LLP, leading technology strategy, product architecture, and operational development. An engineer by training with a Bachelor's in Electrical Engineering from the University of Mysore, he later worked with Cisco, leading engineering teams focused on innovation and next-generation internet security solutions.`,
  },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <SiteLayout fullWidth>
      
      <section ref={heroRef} className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <StaticImage
            src="../images/Hero_Image.webp"
            alt="Traditional Indian games"
            className="h-[120%] w-full"
            imgClassName="object-cover"
            placeholder="blurred"
            formats={["webp", "auto"]}
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        </motion.div>

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
            Our Story
          </motion.p>
          <motion.h1
            className="max-w-4xl font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            About <span className="italic text-saffron">Trita</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl font-body text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Trita brings together cultural research, thoughtful design, and technology to create playful
            learning experiences rooted in Indian heritage.
          </motion.p>
        </motion.div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 space-y-24 py-24">
        {/* Our Story Section */}
        <SectionWrapper>
          <div className="grid items-start gap-12 md:grid-cols-[3fr_2fr]">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
                <p>
                  Trita Infotainment LLP was founded with a simple yet powerful idea —
                  that <strong className="text-foreground">culture can be experienced, not just remembered.</strong> India has always
                  had a rich tradition of learning through play. Board games, puzzles, storytelling,
                  festivals, and community activities were once natural parts of everyday life.
                </p>
                <p>
                  Trita was created to{" "}
                  <strong className="text-primary">rediscover, revive, and reimagine these cultural experiences for modern audiences.</strong>{" "}
                  Through our diverse brands, we bring back traditional board games, extend them into digital formats, and design
                  challenge-based learning programs.
                </p>
                <p>
                  At the heart of Trita is a belief that{" "}
                  <strong className="text-foreground">play is one of the most powerful ways humans learn, connect, and grow.</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <div className="flex flex-col gap-3 p-8 border-b border-border">
                <span className="font-display text-xs font-medium tracking-widest text-primary uppercase">Vision</span>
                <h3 className="font-heading text-xl font-bold text-foreground">A future where culture is lived through play.</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  We imagine a world where cultural knowledge is experienced actively rather than passively —
                  traditions becoming living experiences that inspire curiosity and connection.
                </p>
              </div>
              <div className="flex flex-col gap-3 p-8">
                <span className="font-display text-xs font-medium tracking-widest text-primary uppercase">Mission</span>
                <h3 className="font-heading text-xl font-bold text-foreground">Making cultural learning accessible and joyful.</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  We build products and digital platforms that transform cultural knowledge
                  into engaging activities — enabling everyone to learn through play and curiosity.
                </p>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Our Approach Section */}
        <SectionWrapper>
          <div className="text-center mb-16">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">Our Approach</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">How We Work</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {approachItems.map((item, i) => (
              <motion.div
                key={item.number}
                className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <span className="text-5xl font-display font-bold text-primary/20">{item.number}</span>
                <h3 className="mt-4 text-xl font-bold text-foreground font-heading">{item.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed font-body text-sm">{item.desc}</p>
                <div className="mt-6 h-1 w-12 rounded-full bg-primary/30 transition-all group-hover:w-20 group-hover:bg-primary" />
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* Founders Section */}
        <SectionWrapper>
          <div className="text-center mb-16">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground">The Team</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">Meet the Founders</h2>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {founders.map((f, i) => (
              <motion.div
                key={f.name}
                className="flex flex-col gap-6 p-8 rounded-3xl border border-border bg-card shadow-soft hover:shadow-lift transition-all"
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-foreground">{f.name}</h3>
                  <p className="font-body text-primary font-semibold">{f.role}</p>
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground italic">
                  "{f.bio}"
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </SiteLayout>
  )
}

function SectionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
}

export const Head = () => <Seo title="About Us" />
