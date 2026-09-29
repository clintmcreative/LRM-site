"use client"

declare global {
  interface Window {
    ml?: (action: string, formId: string, show: boolean) => void
  }
}

export function FreeLetterCTA() {
  const openMailerLitePopup = (e: React.MouseEvent) => {
    e.preventDefault()
    if (typeof window !== "undefined" && window.ml) {
      window.ml("show", "gwYLVS", true)
    }
  }

  return (
    <section className="bg-card py-12 md:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6 text-center">
        <p className="font-serif text-xl font-bold text-foreground md:text-2xl">Curious what a Little Red Mailbox story feels like?</p>
        <p className="text-base leading-relaxed text-muted-foreground">We&apos;ll send you one of our original adventures free and keep you updated on the next chapter of Little Red Mailbox.</p>
        <button onClick={openMailerLitePopup} className="mt-2 inline-flex items-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Get the Free Story</button>
      </div>
    </section>
  )
}
