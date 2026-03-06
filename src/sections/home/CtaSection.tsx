import * as React from "react"

import Button from "../../components/ui/Button"

export default function CtaSection() {
  return (
    <section className="mt-14">
      <div className="rounded-3xl border border-ink-950/10 bg-gradient-to-br from-indigo-600/10 to-marigold-500/10 p-8 shadow-soft sm:p-12">
        <h2 className="text-2xl font-semibold text-ink-950">Let’s build cultural play together</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-950/70">
          Whether you’re a school, cultural institution, or a brand team—there’s a collaboration format that fits.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button to="/collaborate">Collaborate with us</Button>
          <Button to="/contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  )
}
