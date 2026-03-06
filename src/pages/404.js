import * as React from "react"

import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <SiteLayout>
    <h1 className="text-3xl font-semibold text-ink-950">404: Not Found</h1>
    <p className="mt-3 text-sm text-ink-950/70">You just hit a route that doesn’t exist.</p>
  </SiteLayout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
