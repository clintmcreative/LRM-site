import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Free Letter Thank You | Little Red Mailbox",
  description: "Thank you for signing up for your free Little Red Mailbox letter.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function FreeLetterThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-background pt-32 pb-24 md:pt-40 md:pb-32">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Your free letter is on the way!
            </h1>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Check your email in the next minute or two.
              </p>
              <p>
                If you don{"'"}t see it, check your spam or promotions folder.
              </p>
            </div>
            <p className="mt-10 text-sm text-muted-foreground/70">
              We hope your child enjoys the adventure.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
