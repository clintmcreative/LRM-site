"use client"

import { SectionObserver } from "@/components/section-observer"

declare global {
  interface Window {
    ml?: (action: string, formId: string, show: boolean) => void
  }
}

export function FAQFinalCTA() {
  const openMailerLitePopup = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.ml) window.ml("show", "gwYLVS", true)
  }

  return <section className="bg-primary py-16 md:py-20"><div className="mx-auto max-w-2xl px-6 text-center"><SectionObserver><span className="text-xs font-semibold uppercase tracking-widest text-primary-foreground/80">What&apos;s Next</span><h2 className="mt-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">Follow the next chapter.</h2><p className="mt-4 text-base leading-relaxed text-primary-foreground/85 md:text-lg">Join the list and we&apos;ll send you a free Little Red Mailbox story while keeping you posted on what comes next.</p><button onClick={openMailerLitePopup} className="mt-8 inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90">Follow What&apos;s Next</button></SectionObserver></div></section>
}
