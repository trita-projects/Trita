import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const sections = [
  { id: `information`, label: `Information We Collect` },
  { id: `use`, label: `How We Use It` },
  { id: `sharing`, label: `Sharing` },
  { id: `cookies`, label: `Cookies` },
  { id: `rights`, label: `Your Rights` },
  { id: `contact`, label: `Contact` },
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 space-y-4 border-t border-ink-950/[0.08] pt-10">
      <h2 className="font-heading text-2xl font-bold text-ink-950">{title}</h2>
      <div className="space-y-3 font-body text-base leading-relaxed text-ink-950/70">
        {children}
      </div>
    </section>
  )
}

export default function PrivacyPage() {
  return (
    <SiteLayout>

      {/* Header */}
      <header className="space-y-4">
        <div className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
          Last updated — January 2025
        </div>
        <h1 className="font-display text-5xl font-bold tracking-tight text-ink-950">
          Privacy Policy
        </h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-ink-950/65">
          Trita Infotainment LLP ("Trita", "we", "us") respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding that information.
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[220px_1fr] lg:items-start">

        {/* Sticky sidebar nav */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
            <div className="border-b border-ink-950/[0.08] px-6 py-4">
              <span className="font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                Contents
              </span>
            </div>
            <nav className="flex flex-col gap-0 p-2">
              {sections.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className="flex items-center gap-3 rounded-2xl px-4 py-2.5 text-left font-ui text-sm font-semibold text-ink-950/55 transition hover:bg-sand-50 hover:text-ink-950"
                >
                  <span className="font-ui text-xs text-ink-950/20">{String(i + 1).padStart(2, "0")}</span>
                  {s.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile nav pills */}
        <div className="lg:hidden">
          <nav className="flex flex-wrap gap-2">
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="rounded-2xl border border-ink-950/[0.08] bg-white px-4 py-2 font-ui text-sm font-semibold text-ink-950/60 shadow-soft transition hover:bg-sand-50 hover:text-ink-950"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="space-y-10">

          <Section id="information" title="Information We Collect">
            <p>We collect information you provide directly to us, including when you:</p>
            <ul className="ml-4 space-y-1.5 list-none">
              {[
                `Fill out our contact or collaboration form (name, email, phone, message)`,
                `Place an order on rollthedice.in (handled by Shopify — see their privacy policy)`,
                `Subscribe to updates or newsletters`,
                `Communicate with us by email or phone`,
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p>We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, pages visited, and referring URLs through standard web server logs and analytics tools.</p>
          </Section>

          <Section id="use" title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="ml-4 space-y-1.5 list-none">
              {[
                `Respond to your enquiries, collaboration requests, and contact form submissions`,
                `Send you program updates, event announcements, or newsletters if you have opted in`,
                `Improve our website, programs, and services`,
                `Comply with legal obligations`,
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </Section>

          <Section id="sharing" title="Sharing of Information">
            <p>We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services, including:</p>
            <ul className="ml-4 space-y-1.5 list-none">
              {[
                `Resend — used to deliver emails from our contact and collaboration forms`,
                `Netlify / hosting providers — for website hosting and deployment`,
                `Analytics tools — for understanding website usage (no personally identifiable data shared)`,
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p>These providers are contractually obligated to keep your information confidential and use it only for the services they provide to us.</p>
            <p>We may also disclose information if required by law, court order, or government authority.</p>
          </Section>

          <Section id="cookies" title="Cookies & Tracking">
            <p>Our website may use cookies and similar technologies to improve your browsing experience and understand how visitors interact with our pages. These include:</p>
            <ul className="ml-4 space-y-1.5 list-none">
              {[
                `Essential cookies — required for the website to function correctly`,
                `Analytics cookies — help us understand page visits and traffic sources (e.g. Google Analytics, if enabled)`,
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p>You can control or disable cookies through your browser settings. Disabling cookies may affect some functionality of the site.</p>
          </Section>

          <Section id="rights" title="Your Rights">
            <p>You have the right to:</p>
            <ul className="ml-4 space-y-1.5 list-none">
              {[
                `Access the personal information we hold about you`,
                `Request correction of inaccurate or incomplete information`,
                `Request deletion of your personal data, subject to legal obligations`,
                `Withdraw consent for communications at any time`,
                `Lodge a complaint with a relevant data protection authority`,
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-marigold-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p>To exercise any of these rights, please contact us using the details below.</p>
          </Section>

          <Section id="contact" title="Contact Us">
            <p>If you have any questions, concerns, or requests regarding this privacy policy or your personal data, please contact us:</p>
            <div className="overflow-hidden rounded-3xl border border-ink-950/[0.08] bg-white shadow-soft">
              {[
                { label: `Company`, value: `Trita Infotainment LLP` },
                { label: `Address`, value: `1 Floor, "Samputa", 8th Cross, Adipampa Road, V V Mohalla, Mysore 570002` },
                { label: `Email`, value: ` namaste@trita.in`, href: `mailto: namaste@trita.in` },
                { label: `Phone`, value: `+91 93421 84698`, href: `tel:+910000000000` },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex flex-col gap-0.5 px-6 py-4 sm:flex-row sm:gap-6 ${i !== arr.length - 1 ? "border-b border-ink-950/[0.08]" : ""}`}
                >
                  <span className="w-24 flex-shrink-0 font-ui text-xs font-medium uppercase tracking-widest text-ink-950/30">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a href={row.href} className="font-body text-sm text-ink-950/70 no-underline transition hover:text-ink-950">
                      {row.value}
                    </a>
                  ) : (
                    <span className="font-body text-sm text-ink-950/70">{row.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>

    </SiteLayout>
  )
}

export const Head = () => <Seo title="Privacy Policy" pathname="/privacy" />