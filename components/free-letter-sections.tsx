"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { SectionObserver } from "@/components/section-observer"

function scrollToPricing(router: ReturnType<typeof useRouter>) {
  return (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/#pricing")
  }
}


export function FreeLetterHero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
    }
  }

  return (
    <section id="top" className="relative flex min-h-[85vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/envelope-opening.jpg"
          alt="A child's hands opening a kraft paper envelope with a letter inside"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl text-balance">
            Start the Adventure Free
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Read the first Little Red Mailbox story and get a feel for the kind of real life, grounded stories we send each month.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email-capture" className="sr-only">
                Your email address
              </label>
              <input
                id="email-capture"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-4 text-base text-primary-foreground placeholder:text-primary-foreground/50 backdrop-blur-sm focus:border-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get the Free Letter
              </button>
            </form>
          ) : (
            <div className="mt-8 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-6 py-5 backdrop-blur-sm">
              <p className="font-serif text-lg font-bold text-primary-foreground">
                Check your inbox!
              </p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                Your free Little Red Mailbox letter is on its way. Keep an eye out for an email from us.
              </p>
            </div>
          )}
          <p className="mt-3 text-xs text-primary-foreground/60">
            Get your free sample letter delivered to your email inbox.
          </p>

          <div className="mt-8 border-t border-primary-foreground/15 pt-6">
            <p className="text-sm text-primary-foreground/80">
              Kids love getting mail. Ready to start?
            </p>
            <button
              onClick={scrollToPricing(router)}
              className="mt-3 inline-flex items-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Start My Subscription
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatYoullGet() {
  const router = useRouter()

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Your First Adventure
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Start With a Free Sample Letter
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              See exactly what a Little Red Mailbox story feels like before joining.
            </p>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-lg border border-border bg-background p-8 text-center">
              <h3 className="font-serif text-lg font-bold text-foreground">Free Sample Letter (Email)</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Your sample story arrives instantly in your inbox so you can preview the kind of adventure kids receive.
              </p>
              <a
                href="#top"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get the Free Sample Letter
              </a>
            </div>
            <div className="flex flex-col rounded-lg border border-border bg-background p-8 text-center">
              <h3 className="font-serif text-lg font-bold text-foreground">Skip the Preview — Start My Subscription</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                Get your first story delivered to your mailbox and begin the adventure right away.
              </p>
              <button
                onClick={scrollToPricing(router)}
                className="mt-6 inline-flex items-center justify-center rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Start My Subscription
              </button>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function WhyFamiliesLoveIt() {
  const router = useRouter()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            {/* Left side - Photo of kids running to mailbox */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg md:w-2/5">
              <Image
                src="/images/kids-running-mailbox.jpg"
                alt="Two kids running excitedly down a country road toward a red mailbox"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="md:w-3/5">
              <span className="block text-center text-xs font-semibold uppercase tracking-widest text-primary md:text-left">
                Kids Love Opening Mail
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance text-center md:text-left">
                Why Families Love Little Red Mailbox
              </h2>
              <ul className="mt-8 flex flex-col gap-3 text-left">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-muted-foreground">Screen-free storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-muted-foreground">Encourages curiosity and creativity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-muted-foreground">Builds character through action</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-base text-muted-foreground">Creates small moments of connection between parents and kids</span>
                </li>
              </ul>
              
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
                <a
                  href="#top"
                  className="inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get the Free Letter
                </a>
                <button
                  onClick={scrollToPricing(router)}
                  className="inline-flex items-center rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary/10"
                >
                  Start My Subscription
                </button>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function SampleLetterPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:w-1/2">
              <Image
                src="/images/letter-contents.jpg"
                alt="A sample Little Red Mailbox letter with its contents spread on a wooden table"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                A Peek Inside
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                What a letter looks like.
              </h2>
              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <p className="font-serif text-sm italic leading-relaxed text-foreground">
                  {'"'}Dear Explorer,
                </p>
                <p className="mt-3 font-serif text-sm italic leading-relaxed text-foreground">
                  The creek behind the old Whitfield barn has been running higher than usual this week. Mr. Whitfield says it{"'"}s the snow melting up in the hills. But Eliza noticed something else -- tracks, pressed into the mud bank. Not deer. Not rabbit. Something bigger...{'"'}
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  -- Excerpt from Letter No. 1: The Tracks by Whitfield Creek
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Each letter includes the full story, a field mission to complete, and a small surprise tucked inside the envelope. It{"'"}s the kind of mail that makes the whole family gather around.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function FarmMindsetPhilosophy() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/red-barn.jpg"
          alt="A red barn in a wheat field at golden hour"
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
              Rooted in Timeless Values
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              <p>
                Little Red Mailbox stories quietly reflect the mindset of farm life — patience, responsibility, resourcefulness, and gratitude.
              </p>
              <p>
                Not through lectures, but through stories kids explore for themselves.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}
