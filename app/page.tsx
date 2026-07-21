import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CTASection } from "@/components/cta-section"
import {
  HeroSection,
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

        <WhatsInsideSection />

        <CTASection
          variant="primary"
          heading="Kids still love opening mail."
          subheading="A thoughtful gift for curious kids who still love getting real mail."
          buttonText="Give Little Red Mailbox"
        />

        <TransformationSection />

        <FinalCTASection />

        <HowItWorksSection />

        <CTASection
          variant="primary"
          heading="Ready to trade screen time for story time?"
          showFreeLetterButton
        />

        <BenefitsSection />

        <PlanSelectionSection />
      </main>
      <SiteFooter />
    </>
  )
}
