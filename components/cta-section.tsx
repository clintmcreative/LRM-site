"use client"

import Link from "next/link"

interface CTASectionProps {
  variant?: "primary" | "secondary"
  heading?: string
  subheading?: string
  buttonText?: string
  showFreeLetterButton?: boolean
}

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

function openFreeLetterPopup(e: React.MouseEvent) {
  e.preventDefault()
  window.ml && window.ml("show", "gwYLVS", true)
}

export function CTASection({
  variant = "primary",
  heading,
  subheading,
  buttonText = "Join the Club",
  showFreeLetterButton = false,
}: CTASectionProps) {
  if (variant === "secondary") {
    return (
      <section className="bg-secondary/50 py-12 md:py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
          {heading && (
            <h3 className="font-serif text-xl font-bold text-foreground md:text-2xl text-balance">
              {heading}
            </h3>
          )}
          {subheading && (
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {subheading}
            </p>
          )}
          <div className="mt-2">
            <button
              onClick={scrollToPricing}
              className="inline-flex items-center rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
        {heading && (
          <h3 className="font-serif text-xl font-bold text-primary-foreground md:text-2xl text-balance">
            {heading}
          </h3>
        )}
        {subheading && (
          <p className="text-sm leading-relaxed text-primary-foreground/80 md:text-base">
            {subheading}
          </p>
        )}
        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center rounded-lg bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            {buttonText}
          </button>
          {showFreeLetterButton && (
            <Link
              href="/free-letter"
              onClick={openFreeLetterPopup}
              className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Read the First Letter Free
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
