"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            Little Red Mailbox
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/free-letter"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the First Letter
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/#choose-plan"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Subscribe Now
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/free-letter"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Read the First Letter
            </Link>
            <Link
              href="/faq"
              className="text-base font-medium text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/#choose-plan"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscribe Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
