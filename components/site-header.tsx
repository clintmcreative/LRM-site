"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Menu, X } from "lucide-react"

function openMailerLitePopup(e: React.MouseEvent) {
  e.preventDefault()
  if (typeof window !== "undefined" && window.ml) {
    window.ml("show", "gwYLVS", true)
  }
}

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const links = [
    { href: "/#our-stories", label: "Our Stories" },
    { href: "/#why-the-farm", label: "Why the Farm" },
    { href: "/#free-story", label: "Free Story" },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2"><Mail className="h-6 w-6 text-primary" aria-hidden="true" /><span className="font-serif text-lg font-bold tracking-tight text-foreground">Little Red Mailbox</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{link.label}</Link>)}
          <button onClick={openMailerLitePopup} className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90">Follow What&apos;s Next</button>
        </nav>
        <button type="button" className="text-foreground md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>{mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
      </div>
      {mobileMenuOpen && <nav className="border-t border-border bg-background px-6 pb-6 pt-4 md:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-4">{links.map((link) => <Link key={link.href} href={link.href} className="text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>{link.label}</Link>)}<button onClick={(e) => { setMobileMenuOpen(false); openMailerLitePopup(e) }} className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-base font-semibold uppercase tracking-wide text-primary-foreground">Follow What&apos;s Next</button></div></nav>}
    </header>
  )
}
