"use client"

import { useRouter } from "next/navigation"

export function FreeLetterCTA() {
  const router = useRouter()

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/#pricing")
  }

  return (
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
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
          >
            Start My Subscription
          </button>
        </div>
      </div>
    </section>
  )
}
