"use client"

interface CTASectionProps {
  variant?: "primary" | "secondary"
  heading?: string
  subheading?: string
  buttonText?: string
}

function scrollToPricing(e: React.MouseEvent) {
  e.preventDefault()
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function CTASection({
  variant = "primary",
  heading,
  subheading,
  buttonText = "Join the Club",
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
        <div className="mt-2">
          <button
            onClick={scrollToPricing}
            className="inline-flex items-center rounded-lg bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  )
}
