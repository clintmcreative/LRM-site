import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Little Red Mailbox",
  description:
    "Privacy Policy for Little Red Mailbox. Learn how we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-card pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <h1 className="font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Little Red Mailbox Privacy Policy
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="prose prose-neutral max-w-none">
              <p className="text-base leading-relaxed text-muted-foreground">
                We respect your privacy and are committed to protecting your information.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Information We Collect
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We collect basic information such as your name, email address, and shipping address when you subscribe or request a free letter.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                How We Use Information
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We use your information to:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-base leading-relaxed text-muted-foreground">
                <li>Process orders and deliver letters</li>
                <li>Communicate about your subscription</li>
                <li>Send occasional updates related to Little Red Mailbox</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We do not sell or share your personal information with third parties.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Payments
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                All payments are securely processed through Stripe. We do not store your payment information.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Email
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                You may unsubscribe from emails at any time.
              </p>

              <h2 className="mt-10 font-serif text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If you have questions about this policy, contact:{" "}
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
