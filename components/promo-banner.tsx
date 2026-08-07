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
  const ref = useRef<HTMLAnchorElement>(null)

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
    <a
      ref={ref}
      href="#pricing"
      onClick={scrollToPricing}
      aria-label="Back to school special: 15% off. Use code BACKTOSCHOOL15. Tap to shop plans."
      className="fixed inset-x-0 top-0 z-[60] block bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
    >
      <div
        className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-2.5 text-center sm:flex-row sm:gap-3 sm:py-3"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        <span className="text-base font-bold uppercase leading-none tracking-[0.12em] sm:text-lg">
          Back to School Special
        </span>
        <span className="hidden text-primary-foreground/40 sm:inline">|</span>
        <span className="text-lg font-bold uppercase leading-none tracking-[0.12em] sm:text-xl">
          15% Off
        </span>
      </div>
      <p className="pb-2 text-center font-serif text-xs italic tracking-wide text-primary-foreground/80 sm:pb-2.5">
        Use code BACKTOSCHOOL15
      </p>
    </a>
  )
}
