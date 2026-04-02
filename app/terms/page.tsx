import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service | Little Red Mailbox",
  description:
    "Terms of Service for Little Red Mailbox subscriptions, billing, shipping, and more.",
}

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-card pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Terms of Service
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Little Red Mailbox Terms of Service
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-neutral max-w-none">
              <p className="text-base leading-relaxed text-muted-foreground">
                By subscribing to Little Red Mailbox, you agree to the following terms.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Subscriptions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Subscriptions are billed on a recurring basis (monthly or yearly) unless canceled. By purchasing a subscription, you authorize us to charge your payment method on file at the selected billing interval.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Cancellation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                You may cancel your subscription at any time. Cancellation will stop future billing, but does not refund payments already processed.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Shipping
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Letters are shipped monthly. Delivery times may vary depending on location and postal service conditions.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Incorrect Addresses
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Customers are responsible for providing an accurate shipping address. We are not responsible for items shipped to incorrectly entered addresses.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Changes to Service
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We reserve the right to update or modify the service at any time to improve the experience.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For any questions, contact us at:{" "}
                <a
                  href="mailto:help@littleredmailboxclub.com"
                  className="text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  help@littleredmailboxclub.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
