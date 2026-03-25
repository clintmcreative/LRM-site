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

        <section className="bg-card py-12 md:py-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
            <p className="font-serif text-xl font-bold text-foreground md:text-2xl">
              Curious First? Start With a Free Sample Letter.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              See exactly what a Little Red Mailbox story feels like before joining.
            </p>
            <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="/free-letter#top"
                className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get the Free Sample Letter
              </a>
              <a
                href="/#choose-plan"
                className="inline-flex items-center rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Join the Club
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
