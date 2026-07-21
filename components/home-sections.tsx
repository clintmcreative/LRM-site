"use client"

import Image from "next/image"
import { SectionObserver } from "@/components/section-observer"
import { BookOpen, Compass, Gift, Heart, Sun, TreePine } from "lucide-react"

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-child-letter.jpg"
          alt="A child opening a rustic envelope at a farmhouse table with warm sunlight"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            Childhood Shouldn{"'"}t Happen on a Screen.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Every month, your child receives <strong className="font-semibold">an original story</strong> written just for Little Red Mailbox, <strong className="font-semibold">a hands-on mission</strong> that brings it to life, and <strong className="font-semibold">a small surprise</strong> tucked inside every envelope.
          </p>
          <p className="mt-4 text-lg font-bold text-primary-foreground md:text-xl">
            Because kids still love getting mail.
          </p>
          <div className="mt-8">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join the Club
            </button>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Ships monthly. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FarmMindsetSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Rooted in the Farm Mindset
            </h2>
            <div className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>The Little Red Mailbox is inspired by the mindset of farm life:</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Stewardship", "Responsibility", "Patience", "Grit", "Gratitude", "Resourcefulness", "Courage"].map(
                  (value) => (
                    <div
                      key={value}
                      className="rounded-lg border border-border bg-background px-4 py-3"
                    >
                      <span className="font-serif text-sm font-bold text-foreground">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-6">These aren{"'"}t taught as lessons.</p>
              <p className="mt-2">They{"'"}re experienced through stories, challenges, and adventure.</p>
              <p className="mt-4 font-serif font-semibold text-foreground">Farm isn{"'"}t a place — it{"'"}s a mindset.</p>
              <p className="mt-2">And every kid can grow it.</p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function TransformationSection() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg md:w-1/2">
              <Image
                src="/images/kids-running-mailbox.jpg"
                alt="Two children in overalls running toward a red mailbox on a rural path"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Something Real to Look Forward To
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Little Red Mailbox helps families reclaim small moments that matter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Kids don{"'"}t just need less screen time. They need something better to take its place. Something slower, more meaningful, and real.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Your child begins to:
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Look forward to checking the mailbox
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Get pulled into original stories
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Bring the story to life through simple hands-on missions
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Talk with their family about what they discovered
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Little Red Mailbox gives families one meaningful moment they can count on every month. Each envelope invites kids to slow down, imagine, use their hands, and discover something new.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function WhatsInsideSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Open the Envelope
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              See What Arrives in the Mailbox
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              A complete screen-free adventure, delivered in a real envelope with your child{"'"}s name on it.
            </p>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:w-3/5">
              <Image
                src="/images/product-envelope-contents.jpg"
                alt="Little Red Mailbox envelope with an original story, hands-on mission, and small surprise"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-8 md:w-2/5">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Short Story</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    An original story written exclusively for Little Red Mailbox, inspired by farm life, curiosity, and meaningful adventure.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Compass className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A simple hands-on mission that brings the story to life through real-world exploration, creativity, and discovery.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Gift className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Small Surprise Inside</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A small surprise tucked inside every envelope that adds one more reason to smile when the mailbox opens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              For Parents
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Why parents love Little Red Mailbox.
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Sun className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Off the screen, into the world.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Give your child something they can hold in their hands. Real paper, real stories, real adventures. No batteries. No logins. No noise.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <TreePine className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Capable Kids Grow Through Experience.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Farm life has always taught patience, responsibility, curiosity, and resourcefulness—not through lectures, but through everyday life. Little Red Mailbox follows that same philosophy, helping kids grow through stories they experience, not lessons they{"'"}re told.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Conversations you{"'"}ve been missing.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every mission gives families one more reason to talk, laugh, wonder, and discover something together long after the story ends.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function HowItWorksSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              How Little Red Mailbox Works
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Join Little Red Mailbox</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Subscribe in under a minute.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Check the Mailbox</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                An original story, a hands-on mission, and a small surprise arrive each month.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Read. Imagine. Discover.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Every envelope invites kids to slow down, explore, and try something new.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/red-barn.jpg"
          alt="A red barn in a golden wheat field at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Why Our Stories Begin on the Farm
            </h2>
            <div className="mx-auto mt-6 max-w-[780px] text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              <p>
                Long before screens filled our homes, farms helped shape capable kids.
              </p>
              <p className="mt-4">
                A farm teaches lessons that can{"'"}t be rushed. Seeds take time. Animals depend on people. Hard work matters. Curiosity is rewarded. Responsibility grows through doing, not being told. You don{"'"}t have to live on a farm to learn those lessons.
              </p>
              <p className="mt-4">
                Because childhood doesn{"'"}t need more noise. It needs more moments that grow something.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button
                onClick={scrollToPricing}
                className="inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Join the Club
              </button>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

// Stripe checkout links
const MONTHLY_STRIPE_LINK = "https://buy.stripe.com/bJe28r0pQ2UU7Is3cpfIs00"
const YEARLY_STRIPE_LINK = "https://buy.stripe.com/14A7sLgoOdzy9QA5kxfIs01"

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-accent"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function PlanSelectionSection() {
  const monthlyFeatures = [
    "Original story each month",
    "Hands-on mission or activity",
    "Cancel anytime",
  ]

  const yearlyFeatures = [
    "Everything in monthly",
    "One simple payment for the year",
    "Best value for families",
    "Our most popular option",
  ]

  return (
    <section id="pricing" className="scroll-mt-20 bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Choose Your Subscription
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Select the option that fits your family best.
            </p>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-2">
            {/* Monthly Plan */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-background">
              <div className="px-6 py-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Monthly
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Welcome to the Club.
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-4xl font-bold text-foreground">$10.99</span>
                    <span className="text-base text-muted-foreground">/ month</span>
                  </div>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {monthlyFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={MONTHLY_STRIPE_LINK}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Join Monthly
                </a>
              </div>
            </div>

            {/* Yearly Plan - Best Value */}
            <div className="flex flex-col overflow-hidden rounded-xl border-2 border-primary bg-primary">
              <div className="px-6 py-6 text-center">
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  Yearly
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Our Best Value
                </p>
              </div>
              <div className="flex flex-1 flex-col px-6 py-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="font-serif text-4xl font-bold text-primary-foreground">$119</span>
                    <span className="text-base text-primary-foreground/80">/ year</span>
                  </div>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {yearlyFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-primary-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={YEARLY_STRIPE_LINK}
                  className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-primary-foreground px-6 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Join Yearly
                </a>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div >
    </section >
  )
}
