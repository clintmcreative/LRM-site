import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FAQAccordion } from "@/components/faq-accordion"
import { SectionObserver } from "@/components/section-observer"
import { FAQFinalCTA } from "@/components/faq-final-cta"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Little Red Mailbox",
  description:
    "Find answers to common questions about Little Red Mailbox subscription, shipping, cancellation, and more.",
}

const faqs = [
  {
    question: "When do letters ship?",
    answer:
      "Letters ship during the first week of each month. Once your subscription is active, your child's first letter will go out with the next monthly batch. Most families receive their letter within 5–7 business days after shipping, depending on location.",
  },
  {
    question: "What age is this for?",
    answer:
      "Little Red Mailbox is designed for children ages 7 to 10. The stories and missions are written to be engaging and challenging enough for this age range while still being warm and accessible. Some younger or older children enjoy them too, but the sweet spot is right in that 7-10 window.",
  },
  {
    question: "What are the stories about?",
    answer:
      "Little Red Mailbox stories are standalone adventures rooted in real life, curiosity, and meaningful work. Each envelope includes a short story, a simple hands on mission, and a small surprise tied to the experience. The stories are inspired by farm life, the outdoors, old fashioned problem solving, and the kind of moments that help kids grow capable and curious. Some children read them independently while others enjoy them as a family read aloud.",
  },
  {
    question: "What comes inside each envelope?",
    answer:
      "Every envelope includes three things: a short standalone story, a simple hands on mission or activity, and a small surprise tied to the experience. The story draws kids into meaningful adventures, the mission encourages real world curiosity and action, and the surprise adds a little extra excitement to the mailbox moment.",
  },
  {
    question: "How do I cancel?",
    answer:
      "cancel_special",
  },
  {
    question: "Can this be given as a gift?",
    answer:
      "gift_special",
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
                href="mailto:hello@littleredmailboxclub.com"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                hello@littleredmailboxclub.com
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
        <FAQFinalCTA />
      </main>
      <SiteFooter />
    </>
  )
}
