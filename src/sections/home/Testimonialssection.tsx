import * as React from "react"
import { useRef, useState, useEffect } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    text: "Playing this brought back memories of summer afternoons with my grandmother. We had Chowka Bara etched on the floor of our living room. The game itself is so much fun. Especially if you have a 'gatti'. Buy and play!",
    name: "Rashmi Canchi",
    product: "Chowka Bara",
  },
  {
    text: "The quality of the product is outstanding. The fabric used is excellent and durable too. It has been my go-to gift for kids. Applaud the efforts in reviving the lost Indian games. Thank you!",
    name: "Rianshi",
    product: "Chowka Bara",
  },
  {
    text: "They are very professional, products are very good in quality. I opted the cash on delivery. After receiving the product I forgot to make the payment — after 5-6 days they called me and reminded me very nicely. I was so impressed and made the payment.",
    name: "Amlendu Prakash",
    product: "Chowka Bara",
  },
  {
    text: "Very beautiful, traditional products. Must buy as gifts, presents, return gifts etc.",
    name: "Venkat",
    product: "Sri Rama Pattabhisheka Puzzle",
  },
  {
    text: "This is my choice of gift for kids. Kids love animals and these are our Devata Vahanas. I have got good feedback from my friends to whom I have gifted this puzzle — it is pretty engaging. An excellent start in introducing our devatas to kids.",
    name: "Sachidananda Urs",
    product: "Devata Vahanas Puzzle",
  },
  {
    text: "Lovely! Thanks for bringing the traditional games alive. My 5-year-old grand daughter loves this game and she will be super happy to see the set. A special thanks to the delivery associate who delivered the set in the pouring rain.",
    name: "Uma",
    product: "Chowka Bara 7 Houses",
  },
  {
    text: "A wonderful initiative. These games enhance competitive and healthy mindful thinking of children and also help them learn skills which no textbooks can teach. Thank you for bringing the child in me alive again.",
    name: "Sushmitha Shravan",
    product: "Chowka Bara",
  },
  {
    text: "It's so beautifully designed and very well made. Anyone who sees the quality will feel it's totally worth the money. Hope your products reach many more homes and make them happy too.",
    name: "Chandana Chandrashekhar",
    product: "Chowka Bara",
  },
  {
    text: "Worth buying the game. Good quality shells and play pieces.",
    name: "Alagappan",
    product: "Chowka Bara 7 Houses",
  },
  {
    text: "Fun to discover the rules and play this. Good to know traditional games.",
    name: "SupKu",
    product: "Navakankari",
  },
]

const reviewLinks = [
  { label: "Google Review", href: "https://g.page/r/CXoWbNIAyv7wEAE/review" },
  { label: "Amazon Review", href: "https://www.amazon.in/review/create-review/?ie=UTF8&channel=glance-detail&asin=B0FCXWHNG6" },
  { label: "Shopify Review", href: "https://rollthedice.in/products/chowka-bara-5-7-houses-combo" },
]

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [active, setActive] = useState(0)

  // Auto-scroll every 5 seconds continuously
  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">

        {/* Heading */}
        <motion.h2
          className="font-heading text-3xl font-bold text-ink-950 sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          What People Say
        </motion.h2>

        <motion.p
          className="mt-4 font-body text-ink-950/60"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Real words from families, customers, and community members across India.
        </motion.p>

        {/* Testimonial */}
        <div className="relative mt-8 min-h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              <span className="select-none font-display text-6xl leading-none text-marigold-500/30">"</span>
              <p className="mt-2 max-w-2xl font-body text-xl italic leading-relaxed text-ink-950">
                {testimonials[active].text}
              </p>
              <p className="mt-6 font-heading font-bold text-ink-950">{testimonials[active].name}</p>
              <p className="font-body text-sm text-marigold-600">{testimonials[active].product}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-8 bg-marigold-500"
                  : "w-2.5 bg-ink-950/15 hover:bg-marigold-500/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Your feedback matters */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft text-left">
            <div className="border-b border-ink-950/[0.08] px-8 py-6">
              <h3 className="font-heading text-xl font-bold text-ink-950">Your feedback matters</h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-ink-950/60">
                Tell us what you loved about our games and how we can make your next playtime even better.
              </p>
            </div>
            <div className="flex flex-wrap divide-x divide-ink-950/[0.08]">
              {reviewLinks.map(r => (
                <a
                  key={r.label}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 px-6 py-5 font-ui text-sm font-semibold text-ink-950/60 no-underline transition hover:bg-sand-50 hover:text-ink-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-marigold-500" />
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}