import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Refund Policy | Little Red Mailbox",
  description:
    "Refund Policy for Little Red Mailbox. Learn about our policies for damaged mail, subscriptions, and gift purchases.",
}

export default function RefundPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-card pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Refund Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Little Red Mailbox Refund Policy
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-neutral max-w-none">
              <p className="text-base leading-relaxed text-muted-foreground">
                We want every experience to be a good one. If something goes wrong, we will make it right.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Damaged or Missing Mail
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If a letter arrives damaged or does not arrive, contact us and we will send a replacement at no cost.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Subscriptions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Subscriptions renew automatically unless canceled. You may cancel at any time to stop future billing.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If a subscription renews and you contact us within 30 days, we can issue a refund for any unshipped letters.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Gift Subscriptions
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Gift subscriptions are one-time purchases and do not renew. They are non-refundable once purchased.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Incorrect Addresses
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Customers are responsible for entering the correct shipping address. If an incorrect address is provided, we are not responsible for lost items, but may resend as a courtesy.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                For support, contact:{" "}
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
