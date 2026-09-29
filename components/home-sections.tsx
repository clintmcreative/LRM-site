"use client"

import Image from "next/image"
import { SectionObserver } from "@/components/section-observer"

function openMailerLitePopup(e: React.MouseEvent) {
  e.preventDefault()
  if (typeof window !== "undefined" && window.ml) {
    window.ml("show", "gwYLVS", true)
  }
}

const primaryButton = "inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
const lightButton = "inline-flex items-center justify-center rounded-lg border border-primary-foreground/40 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image src="/images/hero-child-letter.jpg" alt="A child opening a letter at a warm farmhouse table" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/85">Little Red Mailbox Is Turning the Page</span>
          <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">The mailbox was only the beginning.</h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">Our monthly letter subscription has come to an end, but the stories behind Little Red Mailbox are continuing. We&apos;re carrying the same farm-inspired adventures, imagination and real-world curiosity into a new chapter for kids and families.</p>
          <div className="mt-8">
            <button onClick={openMailerLitePopup} className={primaryButton}>Get a Free Story</button>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/75">Join the list and we&apos;ll send you one of our original stories free, plus keep you posted on the next chapter of Little Red Mailbox.</p>
        </div>
      </div>
    </section>
  )
}

export function OurStorySection() {
  return (
    <section id="our-stories" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src="/images/letter-contents.jpg" alt="Little Red Mailbox letters and story pages on a wooden table" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">Our Story</span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Little Red Mailbox began with a simple idea.</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>Kids still love getting lost in a good story. They still love discovering something made just for them, using their imagination and having something real to look forward to.</p>
                <p>Little Red Mailbox brought those ideas together through original stories sent to kids in the mail. Each one encouraged children to read, imagine, explore and carry a little bit of the story back into the real world.</p>
                <p>The monthly letters have come to an end, but that idea hasn&apos;t.</p>
                <p>Little Red Mailbox is moving into a new chapter built around the same stories, values and imagination that started it all.</p>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function ScreenFreeSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Childhood Beyond the Screen</span><h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Childhood Shouldn&apos;t Happen on a Screen.</h2><div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg"><p>Kids don&apos;t just need less screen time. They need something better to take its place.</p><p>A good story gives them somewhere to go in their imagination, but the best ones don&apos;t end on the page. They make kids curious. They give them something to talk about. Sometimes they send them outside to look a little closer at the world around them.</p><p>That&apos;s the kind of childhood Little Red Mailbox has always wanted to encourage.</p></div></div>
            <div className="relative order-1 aspect-[3/4] overflow-hidden rounded-lg md:order-2"><Image src="/images/kids-reading-letter.jpg" alt="Children reading a Little Red Mailbox letter outdoors" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function FarmSection() {
  return (
    <section id="why-the-farm" className="relative overflow-hidden py-16 md:py-24"><div className="absolute inset-0"><Image src="/images/red-barn.jpg" alt="Red barn in a golden field at sunset" fill className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-foreground/60" /></div><div className="relative z-10 mx-auto max-w-6xl px-6"><SectionObserver><div className="mx-auto max-w-3xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">Why the Farm</span><h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">Why Our Stories Begin on the Farm</h2><div className="mx-auto mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/90 md:text-lg"><p>Long before screens filled our homes, farms helped shape capable kids.</p><p>A farm teaches lessons that can&apos;t be rushed. Seeds take time. Animals depend on people. Hard work matters. Curiosity is rewarded. Responsibility grows through doing, not being told.</p><p>You don&apos;t have to live on a farm to learn those lessons.</p><p>That&apos;s why the farm has always been the starting place for Little Red Mailbox stories. Not because every child needs to grow up in the country, but because patience, resourcefulness, responsibility, curiosity and wonder belong everywhere.</p><p className="pt-2 font-serif text-xl text-primary-foreground">Because childhood doesn&apos;t need more noise. It needs more moments that grow something.</p></div></div></SectionObserver></div></section>
  )
}

export function OriginalStoriesSection() {
  return (
    <section id="stories" className="bg-card py-16 md:py-24"><div className="mx-auto max-w-6xl px-6"><SectionObserver><div className="grid items-center gap-10 md:grid-cols-2 md:gap-16"><div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src="/images/product-envelope-contents.jpg" alt="Original Little Red Mailbox story pages and hands-on adventure materials" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div><div><span className="text-xs font-semibold uppercase tracking-widest text-primary">Original Little Red Mailbox Stories</span><h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Stories made to leave the page.</h2><div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg"><p>Little Red Mailbox stories were created to be read, imagined and carried into the real world. They&apos;re grounded in farm life, nature, family, curiosity and the kind of adventures kids can picture themselves stepping into.</p><p>The lessons are part of the story rather than lectures added afterward. Kids meet characters who have to notice things, solve problems, be patient, take responsibility and figure out what to do next.</p><p>That same approach remains at the center of Little Red Mailbox as we move into this next chapter.</p></div></div></div></SectionObserver></div></section>
  )
}

export function FreeStorySection() {
  return (
    <section id="free-story" className="py-16 md:py-24"><div className="mx-auto max-w-6xl px-6"><SectionObserver><div className="grid items-center gap-10 md:grid-cols-2 md:gap-16"><div><span className="text-xs font-semibold uppercase tracking-widest text-primary">Start With a Story</span><h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Read an Original Little Red Mailbox Story</h2><p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">Curious what a Little Red Mailbox story feels like?</p><p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">We&apos;ll send you one of our original adventures free and keep you updated on the next chapter of Little Red Mailbox.</p><div className="mt-8"><button onClick={openMailerLitePopup} className={primaryButton}>Get the Free Story</button><p className="mt-3 text-sm leading-relaxed text-muted-foreground">We&apos;ll send the story to your inbox and keep you posted on Little Red Mailbox from time to time.</p></div></div><div className="relative aspect-[4/3] overflow-hidden rounded-lg"><Image src="/images/little-red-mailbox-story-spread-farmhouse-table.jpg" alt="Original Little Red Mailbox story pages and envelopes on a farmhouse table" fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" /></div></div></SectionObserver></div></section>
  )
}

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24"><div className="absolute inset-0"><Image src="/images/hero-child-letter.jpg" alt="Child reading a Little Red Mailbox story" fill className="object-cover" sizes="100vw" /><div className="absolute inset-0 bg-foreground/65" /></div><div className="relative z-10 mx-auto max-w-6xl px-6"><SectionObserver><div className="mx-auto max-w-2xl text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">The Next Chapter</span><h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">The stories are moving forward.</h2><p className="mt-6 text-base leading-relaxed text-primary-foreground/90 md:text-lg">The monthly subscription has ended, but the stories, characters and ideas behind Little Red Mailbox are continuing in a new direction. Join the list, read one of our original stories free and be the first to see the next chapter when we share it.</p><div className="mt-8"><button onClick={openMailerLitePopup} className={lightButton}>Follow What&apos;s Next</button><p className="mt-3 text-sm text-primary-foreground/75">We&apos;ll send you a free Little Red Mailbox story when you join the list.</p></div></div></SectionObserver></div></section>
  )
}

export function HowItWorksSection() {
  return <OriginalStoriesSection />
}

export function TransformationSection() {
  return <ScreenFreeSection />
}

export function WhatsInsideSection() {
  return <OriginalStoriesSection />
}

export function BenefitsSection() {
  return <OurStorySection />
}

export function PlanSelectionSection() {
  return null
}

export function FarmMindsetSection() {
  return <FarmSection />
}

export function CTASection() {
  return null
}
