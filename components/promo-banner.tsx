"use client"

import { useLayoutEffect, useRef } from "react"

/* ============================================================
   PROMO BANNER — Back-to-School 15% off (BACKTOSCHOOL15)
   TEMPORARY: to remove after the promotion ends (Sept 30):
     1. Delete this file.
     2. Remove <PromoBanner /> and its import from app/page.tsx.
     3. Revert the `top-[var(--promo-banner-height,0px)]` offset on
        the header back to `top-0` in components/site-header.tsx.
   The banner sets the --promo-banner-height CSS variable so the
   fixed site header can sit directly beneath it. The variable
   defaults to 0px everywhere else, so no other page is affected.
   ============================================================ */

export function PromoBanner() {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const setHeight = () => {
      document.documentElement.style.setProperty("--promo-banner-height", `${el.offsetHeight}px`)
    }

    setHeight()
    const observer = new ResizeObserver(setHeight)
    observer.observe(el)

    return () => {
      observer.disconnect()
      document.documentElement.style.setProperty("--promo-banner-height", "0px")
    }
  }, [])

  function scrollToPricing(e: React.MouseEvent) {
    e.preventDefault()
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div ref={ref} className="fixed inset-x-0 top-0 z-[60] border-b border-primary/20 bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-2.5 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left">
        <p className="text-sm leading-relaxed text-secondary-foreground">
          Back-to-school special: lock in{" "}
          <span className="font-semibold">15% off</span> monthly or yearly subscriptions through
          September 30 with code{" "}
          <span className="font-semibold tracking-wide">BACKTOSCHOOL15</span>.
        </p>
        <a
          href="#pricing"
          onClick={scrollToPricing}
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Join and Save 15%
        </a>
      </div>
    </div>
  )
}
