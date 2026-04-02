import * as React from "react"
import { Link } from "gatsby"

import { footerLinks } from "../utils/routes"

const socials = [
  { label: `Instagram`, href: `https://www.instagram.com/rollthedice_in` },
  {
    label: `LinkedIn`,
    href: `https://www.linkedin.com/company/trita-roll-the-dice/`,
  },
  { label: `YouTube`, href: `https://www.youtube.com/@rollthedicein` },
]

const websites = [
  { label: `Roll the Dice`, href: `https://rollthedice.in` },
  { label: `TolluGatti`, href: `https://tollugatti.com` },
  { label: `UnCamp`, href: `https://uncamp.tollugatti.com/` },
  {
    label: `Dahi Handi`,
    href: `https://play.google.com/store/apps/details?id=com.tollugatti.dahihandi&hl=en_IN`,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-warm text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="grid gap-0 md:grid-cols-[2fr_1fr_1fr_1fr]">
            <div className="flex flex-col justify-between gap-6 border-b border-border p-8 md:border-b-0 md:border-r">
              <div className="space-y-3">
                <div className="font-heading text-2xl font-bold text-foreground">
                  Trita Infotainment LLP
                </div>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">
                  Reimagining Indian culture through play, learning, and
                  technology.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-border bg-muted/30 px-3 py-1.5 font-body text-xs font-semibold text-muted-foreground no-underline transition-all active:bg-muted/50 active:text-foreground lg:hover:bg-muted/50 lg:hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-b border-border p-8 md:border-b-0 md:border-r">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Quick Links
              </span>
              <nav className="flex flex-col gap-2.5" aria-label="Footer">
                {footerLinks.map(item => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="py-1 font-body text-sm font-bold text-foreground no-underline transition-all hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/privacy"
                  className="py-1 font-body text-sm font-bold text-foreground no-underline transition-all hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4 border-b border-border p-8 md:border-b-0 md:border-r">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Our Brands
              </span>
              <nav className="flex flex-col gap-2.5" aria-label="Our Websites">
                {websites.map(w => (
                  <a
                    key={w.label}
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 font-body text-sm font-bold text-foreground no-underline transition-all hover:text-primary"
                  >
                    {w.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-4 p-8">
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                Contact
              </span>
              <div className="flex flex-col gap-3">
                <p className="font-body text-sm font-bold leading-relaxed text-foreground">
                  1 Floor, "Samputa", 8th Cross,
                  <br />
                  Adipampa Road, V V Mohalla,
                  <br />
                  Mysore 570002
                </p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href="mailto:namaste@trita.in"
                    className="font-body text-sm font-bold text-primary no-underline transition-all hover:opacity-80"
                  >
                    namaste@trita.in
                  </a>
                  <a
                    href="tel:+919342184698"
                    className="font-body text-sm font-bold text-primary no-underline transition-all hover:opacity-80"
                  >
                    +91 93421 84698
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border bg-muted/10 px-8 py-6">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="font-body text-xs text-muted-foreground">
                © {new Date().getFullYear()} Trita Infotainment LLP. All rights
                reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  to="/privacy"
                  className="font-body text-xs text-muted-foreground no-underline hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <span className="font-caption text-xs font-medium text-ink-950/40">
                  Built by{" "}
                  <a
                    href="https://www.inf.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-ink-950/50 no-underline transition hover:text-marigold-500"
                  >
                    infinAIte
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
