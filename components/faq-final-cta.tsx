"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { SectionObserver } from "@/components/section-observer"

export function FAQFinalCTA() {
  const router = useRouter()

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/#pricing")
  }

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <SectionObserver>
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Ready to start the adventure?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Give your child something to look forward to. Real mail, real stories, real character.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            >
              Join the Club
            </button>
            <Link
              href="/free-letter"
              className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Read the First Letter Free
            </Link>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}
