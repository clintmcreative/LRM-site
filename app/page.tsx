import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import {
  HeroSection,
  ProblemStatementSection,
  HowItWorksSection,
  TransformationSection,
  WhatsInsideSection,
  BenefitsSection,
  FinalCTASection,
  PlanSelectionSection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />

        <ProblemStatementSection />

        <TransformationSection />

        <CTASection
          variant="secondary"
          heading="Ready to trade screen time for story time?"
        />

        <HowItWorksSection />

        <CTASection
          variant="primary"
          heading="Give a gift that doesn&apos;t get tossed aside."
          subheading="Available as 6-month or yearly subscriptions. Perfect for birthdays, holidays, or grandparents looking to give something meaningful."
          buttonText="Gift a Subscription"
        />

        <WhatsInsideSection />

        <CTASection
          variant="primary"
          heading="Kids still love opening mail."
          subheading="Stories, missions, and surprises delivered monthly."
        />

        <BenefitsSection />

        <FinalCTASection />

        <PlanSelectionSection />
      </main>
      <SiteFooter />
    </>
  )
}
