import * as React from "react"
import SiteLayout from "../layouts/SiteLayout"
import Seo from "../components/Seo"

import HeroSection from "../sections/home/HeroSection"
import EcosystemSection from "../sections/home/EcosystemSection"
import WhatWeDoSection from "../sections/home/WhatWeDoSection"
import ImpactMetricsSection from "../sections/home/ImpactMetricsSection"
import CtaSection from "../sections/home/CtaSection"
import TestimonialsSection from "../sections/home/Testimonialssection"

const IndexPage = () => {
  return (
    <SiteLayout>
      <HeroSection />
      <EcosystemSection />
      <WhatWeDoSection />
      <ImpactMetricsSection />
      <TestimonialsSection />
      <CtaSection />
    </SiteLayout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage