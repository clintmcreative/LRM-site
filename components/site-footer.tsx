import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-lg font-bold text-foreground">
              Little Red Mailbox
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Little Red Mailbox helps parents give kids a screen-free monthly adventure through stories and hands-on missions delivered right to the mailbox.
            </p>
          </div>

          <nav className="flex gap-8" aria-label="Footer navigation">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Pages
              </span>
              <Link
                href="/"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/free-letter"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Free Letter
              </Link>
              <Link
                href="/faq"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                FAQ
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Support
              </span>
              <Link
                href="/faq"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Questions
              </Link>
              <a
                href="mailto:hello@littleredmailbox.com"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                Contact
              </a>
            </div>
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Little Red Mailbox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
