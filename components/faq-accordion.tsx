"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

function CancelAnswer() {
  return (
    <div className="space-y-3">
      <p>You can cancel your subscription at any time through your secure account portal.</p>
      <a
        href="https://billing.stripe.com/p/login/bJe28r0pQ2UU7Is3cpfIs00"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary underline underline-offset-2 hover:text-primary/80"
      >
        Manage Subscription
      </a>
      <p>You can also email us at{" "}
        <a
          href="mailto:help@littleredmailboxclub.com"
          className="text-primary underline underline-offset-2 hover:text-primary/80"
        >
          help@littleredmailboxclub.com
        </a>
        {" "}if you need assistance.
      </p>
    </div>
  )
}

function GiftAnswer() {
  const router = useRouter()

  const scrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault()
    router.push("/#pricing")
  }

  return (
    <div className="space-y-3">
      <p>Absolutely. Little Red Mailbox makes a meaningful gift for birthdays, holidays, or just because.</p>
      <p>We offer two gift options:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>6-month gift</li>
        <li>12-month gift</li>
      </ul>
      <p>These are one-time purchases and do not auto-renew.</p>
      <button
        onClick={scrollToPricing}
        className="inline-flex items-center text-primary underline underline-offset-2 hover:text-primary/80"
      >
        View Gift Options
      </button>
    </div>
  )
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const renderAnswer = (answer: string) => {
    if (answer === "cancel_special") {
      return <CancelAnswer />
    }
    if (answer === "gift_special") {
      return <GiftAnswer />
    }
    return answer
  }

  return (
    <div className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/50"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-base font-bold text-foreground md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {renderAnswer(item.answer)}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
