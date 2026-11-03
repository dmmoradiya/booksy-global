"use client"

import { BenefitsBar } from "@/components/sections/benefits-bar"
import { CtaBanner } from "@/components/sections/cta-banner"
import { DataSecurity } from "@/components/sections/data-security"
import { Hero } from "@/components/sections/hero"
import { HowWeWork } from "@/components/sections/how-we-work"
import { IndustriesTeaser } from "@/components/sections/industries-teaser"
import { Platforms } from "@/components/sections/platforms"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      <Hero />
      <BenefitsBar overlapHero />
      <Services />
      <WhyChooseUs />
      <IndustriesTeaser />
      <Platforms />
      <HowWeWork />
      <DataSecurity />
      <CtaBanner />
    </div>
  )
}
