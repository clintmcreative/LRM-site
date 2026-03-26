import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  FreeLetterHero,
  WhatYoullGet,
  WhyFamiliesLoveIt,
  FarmMindsetPhilosophy,
} from "@/components/free-letter-sections"
import { CTASection } from "@/components/cta-section"
import { FreeLetterCTA } from "@/components/free-letter-cta"

export const metadata: Metadata = {
  title: "Read the First Letter Free | Little Red Mailbox",
  description:
    "Download the first Little Red Mailbox story and see how the adventure begins. Screen-free storytelling for kids ages 7-10.",
}

export default function FreeLetterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <FreeLetterHero />

        <WhatYoullGet />

        <WhyFamiliesLoveIt />

        <FarmMindsetPhilosophy />

        <FreeLetterCTA />
      </main>
      <SiteFooter />
    </>
  )
}
