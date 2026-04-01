import * as React from "react"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

import HeroSection from "../sections/home/HeroSection"
import PillarsSection from "../sections/home/PillarsSection"
import EcosystemSection from "../sections/home/EcosystemSection"
import WhatWeDoSection from "../sections/home/WhatWeDoSection"
import ImpactMetricsSection from "../sections/home/ImpactMetricsSection"
import CtaSection from "../sections/home/CtaSection"
import TestimonialsSection from "../sections/home/Testimonialssection"

const IndexPage = () => {
  return (
    <SiteLayout fullWidth>
      <HeroSection />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 space-y-2 py-2">
        <PillarsSection />
        <EcosystemSection />
        <WhatWeDoSection />
        <ImpactMetricsSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
