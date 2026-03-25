import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FAQAccordion } from "@/components/faq-accordion"
import { SectionObserver } from "@/components/section-observer"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Little Red Mailbox",
  description:
    "Find answers to common questions about Little Red Mailbox subscription, shipping, cancellation, and more.",
}

const faqs = [
  {
    question: "When do letters ship?",
    answer:
      "Letters ship on the first week of every month. Once your subscription is active, your child's first letter will go out with the next monthly batch. Most families receive their letter within 5-7 business days of shipping, depending on location.",
  },
  {
    question: "What age is this for?",
    answer:
      "Little Red Mailbox is designed for children ages 7 to 10. The stories and missions are written to be engaging and challenging enough for this age range while still being warm and accessible. Some younger or older children enjoy them too, but the sweet spot is right in that 7-10 window.",
  },
  {
    question: "Is this religious?",
    answer:
      "Little Red Mailbox is not affiliated with any specific religion. Our stories and missions focus on universal character traits like responsibility, grit, patience, resourcefulness, gratitude, and stewardship. These are values that families of all backgrounds can appreciate.",
  },
  {
    question: "What comes inside each envelope?",
    answer:
      "Every envelope contains three things: a short original adventure story, a hands-on mission or activity, and a small surprise. The story is the heart of the letter, the mission gets your child off the couch and into the real world, and the surprise brings a little extra joy to the experience.",
  },
  {
    question: "How do I cancel?",
    answer:
      "You can cancel your subscription at any time with no questions asked. Simply log into your account or send us an email at hello@littleredmailbox.com. There are no cancellation fees and no long-term commitments.",
  },
  {
    question: "Can this be given as a gift?",
    answer:
      "Absolutely! Little Red Mailbox makes a wonderful gift for birthdays, holidays, or just because. During checkout, you can enter a different shipping address for the recipient. We can also include a personalized note with the first letter. Gift subscriptions are available for 3, 6, or 12 months.",
  },
  {
    question: "How often do letters arrive?",
    answer:
      "Letters arrive once per month, every month, for as long as your subscription is active. We believe in the power of anticipation -- part of the magic is waiting for that next envelope to appear in the mailbox.",
  },
  {
    question: "What if my child doesn't like reading?",
    answer:
      "That's actually one of the best reasons to try Little Red Mailbox. Our stories are short, engaging, and designed to hook even reluctant readers. The physical experience of receiving real mail, opening an envelope, and finding a surprise inside creates excitement that naturally draws children into the story.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Currently, we ship within the United States. International shipping is something we're working toward. If you're outside the US and interested, send us an email and we'll let you know when we expand.",
  },
]

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-card pt-28 pb-16 md:pt-36 md:pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Questions & Answers
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Everything you need to know about Little Red Mailbox. Can{"'"}t find what you{"'"}re looking for? Reach out to us at{" "}
              <a
                href="mailto:hello@littleredmailbox.com"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                hello@littleredmailbox.com
              </a>
            </p>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-12 md:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <SectionObserver>
              <FAQAccordion items={faqs} />
            </SectionObserver>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-primary py-16 md:py-20">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <SectionObserver>
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Ready to start the adventure?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Give your child something to look forward to. Real mail, real stories, real character.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#pricing"
                  className="inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
                >
                  Subscribe Now
                </Link>
                <Link
                  href="/free-letter"
                  className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  Read the First Letter Free
                </Link>
              </div>
            </SectionObserver>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
