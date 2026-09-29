import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import {
  HeroSection,
  OurStorySection,
  ScreenFreeSection,
  FarmSection,
  OriginalStoriesSection,
  FreeStorySection,
  FinalCTASection,
} from "@/components/home-sections"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <OurStorySection />
        <ScreenFreeSection />
        <FarmSection />
        <OriginalStoriesSection />
        <FreeStorySection />
        <FinalCTASection />
      </main>
      <SiteFooter />
    </>
  )
}
