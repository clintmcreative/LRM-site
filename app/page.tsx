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
  PricingSection,
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
          heading="Give your child something to look forward to each month."
        />

        <WhatsInsideSection />

        <CTASection
          variant="primary"
          heading="Kids still love opening mail."
          subheading="Stories, missions, and surprises delivered monthly."
        />

        <BenefitsSection />

        <FinalCTASection />

        <PricingSection />
      </main>
      <SiteFooter />
    </>
  )
}
