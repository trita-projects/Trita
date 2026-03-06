import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <h1 className="text-3xl font-semibold text-ink-950">Privacy Policy</h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-950/70">
        Placeholder privacy policy content. Add your data collection, cookie, and form submission details here.
      </p>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Privacy Policy" pathname="/privacy" />
