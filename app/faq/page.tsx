import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FAQAccordion } from "@/components/faq-accordion"
import { SectionObserver } from "@/components/section-observer"
import { FAQFinalCTA } from "@/components/faq-final-cta"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Little Red Mailbox",
  description: "Find answers about Little Red Mailbox stories, the end of the monthly letters, and what comes next.",
}

const faqs = [
  { question: "What happened to the monthly letters?", answer: "The monthly Little Red Mailbox subscription has ended, but the stories and the ideas behind them are continuing. Little Red Mailbox is moving into a new chapter built around the same kind of thoughtful, grounded stories families came to know through the letters." },
  { question: "What are the stories about?", answer: "Little Red Mailbox stories are original adventures rooted in real life, curiosity, meaningful work, farm life and the outdoors. They invite kids to notice things, solve problems, be patient and carry the story into the real world." },
  { question: "What age are the stories for?", answer: "The stories were designed primarily for children ages 7 to 10, though younger children may enjoy them read aloud and older children may enjoy them independently." },
  { question: "What's next for Little Red Mailbox?", answer: "Little Red Mailbox is moving into a new chapter centered on the same original stories, farm-inspired values and real-world imagination that shaped the letters. We'll share more with our email list first." },
  { question: "How can I receive an original story?", answer: "Join the Little Red Mailbox email list through any of the story or follow-up buttons on the site. When you join the email list, we'll send you one of our original stories and keep you posted on the next chapter of Little Red Mailbox." },
  { question: "How can I contact you?", answer: "You can reach us at hello@littleredmailboxclub.com and we will be glad to help." },
]

export default function FAQPage() {
  return <><SiteHeader /><main><section className="bg-card pb-16 pt-28 md:pb-20 md:pt-36"><div className="mx-auto max-w-3xl px-6 text-center"><span className="text-xs font-semibold uppercase tracking-widest text-primary">Questions & Answers</span><h1 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl">Frequently Asked Questions</h1><p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">Everything you need to know about Little Red Mailbox. Can&apos;t find what you&apos;re looking for? Reach out at <a href="mailto:hello@littleredmailboxclub.com" className="text-primary underline underline-offset-2">hello@littleredmailboxclub.com</a>.</p></div></section><section className="py-12 md:py-20"><div className="mx-auto max-w-3xl px-6"><SectionObserver><FAQAccordion items={faqs} /></SectionObserver></div></section><FAQFinalCTA /></main><SiteFooter /></>
}
