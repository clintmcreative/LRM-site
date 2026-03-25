import Image from "next/image"
import Link from "next/link"
import { SectionObserver } from "@/components/section-observer"
import { BookOpen, Compass, Gift, Heart, Leaf, TreePine } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-child-letter.jpg"
          alt="A child opening a rustic envelope at a farmhouse table with warm sunlight"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
            A Screen-Free Monthly Adventure Your Kids Will Look Forward To
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Each month, we send a story and small adventure to your mailbox — inviting kids ages 7–10 to explore, imagine, and try something new.
          </p>
          <p className="mt-4 text-lg font-bold text-primary-foreground md:text-xl">
            Because kids still love getting mail.
          </p>
          <div className="mt-8">
            <Link
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Join the Club
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProblemStatementSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionObserver>
          <div className="text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl text-balance">
              Childhood Shouldn{"'"}t Happen on a Screen
            </h2>
            
            {/* Screen to Envelope icon transition */}
            <div className="mt-6 flex items-center justify-center gap-4">
              {/* Screen/tablet icon */}
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 md:h-12 md:w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="6" y="4" width="28" height="32" rx="2" className="stroke-primary" />
                <line x1="6" y1="30" x2="34" y2="30" className="stroke-primary" />
                <circle cx="20" cy="34" r="1.5" className="fill-primary stroke-primary" />
              </svg>
              
              {/* Arrow */}
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" y1="12" x2="20" y2="12" className="stroke-primary" />
                <polyline points="14,6 20,12 14,18" className="stroke-primary" />
              </svg>
              
              {/* Envelope icon */}
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 md:h-12 md:w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Envelope body */}
                <rect x="4" y="10" width="32" height="22" rx="2" className="stroke-primary" />
                {/* Envelope flap - V shape */}
                <path d="M4 12 L20 24 L36 12" className="stroke-primary" />
                {/* Bottom corner lines */}
                <path d="M4 32 L14 22" className="stroke-primary" />
                <path d="M36 32 L26 22" className="stroke-primary" />
              </svg>
            </div>
            
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted-foreground">
              <p>
                Most kids{"'"} entertainment today is noisy, disposable, or digital.
              </p>
              <p>Another show watched.</p>
              <p>Another afternoon slips by.</p>
              <p>
                We all desire something better for our kids. Something slower, more meaningful, and <strong><em>real</em></strong>.
              </p>
              <p>
                Little Red Mailbox turns a simple moment into something special: a story to read, a mission to try, and a letter waiting in the mailbox with their name on it.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function FarmMindsetSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Rooted in the Farm Mindset
            </h2>
            <div className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>The Little Red Mailbox is inspired by the mindset of farm life:</p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["Stewardship", "Responsibility", "Patience", "Grit", "Gratitude", "Resourcefulness", "Courage"].map(
                  (value) => (
                    <div
                      key={value}
                      className="rounded-lg border border-border bg-background px-4 py-3"
                    >
                      <span className="font-serif text-sm font-bold text-foreground">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
              <p className="mt-6">These aren{"'"}t taught as lessons.</p>
              <p className="mt-2">They{"'"}re experienced through stories, challenges, and adventure.</p>
              <p className="mt-4 font-serif font-semibold text-foreground">Farm isn{"'"}t a place — it{"'"}s a mindset.</p>
              <p className="mt-2">And every kid can grow it.</p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function TransformationSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg md:w-1/2">
              <Image
                src="/images/child-mailbox.jpg"
                alt="A boy in a plaid shirt checking a red mailbox on a country road"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                More Than Just Mail
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
                Little Red Mailbox helps families reclaim small moments that matter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Kids begin to:
              </p>
              <ul className="mt-4 flex flex-col gap-2 text-base leading-relaxed text-muted-foreground md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Look forward to the mailbox
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Get pulled into meaningful stories
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Try new things with their hands
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Talk with parents about what they discovered
                </li>
              </ul>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                This is simple, screen-free adventure designed to help kids grow steady, curious, and capable.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function WhatsInsideSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Inside Each Envelope
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              What your child will discover each month.
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg md:w-1/2">
              <Image
                src="/images/letter-contents.jpg"
                alt="Contents of a Little Red Mailbox letter including a handwritten letter, compass, and dried flowers"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col gap-8 md:w-1/2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Short Story</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    An original adventure story that captures imaginations and teaches timeless values through compelling characters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Compass className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Mission</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A hands-on activity or challenge that gets kids off the couch and into the real world -- building, exploring, and problem-solving.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Gift className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">A Small Surprise</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    A small, meaningful token tucked inside each envelope that brings the adventure to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              For Parents
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
              Why parents love Little Red Mailbox.
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Screen-Free Engagement</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Give your child something they can hold in their hands. Real paper, real stories, real adventures.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <TreePine className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Character Development</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Each letter reinforces values like grit, responsibility, patience, and gratitude through story and mission.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <Heart className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="mt-5 font-serif text-lg font-bold text-foreground">Family Connection</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Missions are designed to be done together. The letters become shared memories and meaningful conversations.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function HowItWorksSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              How Little Red Mailbox Works
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Join the Club</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Subscribe in under a minute.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Watch the Mailbox</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Each month a story and mission arrive.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <span className="font-serif text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-6 font-serif text-xl font-bold text-foreground">Read the Story. Try the Mission.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Kids explore the adventure and complete a hands-on challenge.
              </p>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/red-barn.jpg"
          alt="A red barn in a golden wheat field at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
              Turn the Mailbox Into an Adventure
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              <p>
                Little Red Mailbox is about more than a story arriving in the mail. It{"'"}s about giving kids something meaningful in a world full of noise.
              </p>
              <p>
                Each month brings a story to read, a mission to try, and a small moment of curiosity waiting in the mailbox.
              </p>
              <p>
                Along the way, kids quietly grow in the values that shape capable lives — patience, responsibility, resourcefulness, and gratitude — not through lectures, but through stories and experiences they explore for themselves.
              </p>
              <p>
                Because childhood doesn{"'"}t need more noise. It needs more moments that matter.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center rounded-lg bg-primary-foreground px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
              >
                Join the Club
              </Link>
              <Link
                href="/free-letter"
                className="inline-flex items-center rounded-lg border border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Read the First Letter Free
              </Link>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionObserver>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Simple Pricing
            </span>
            <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              One plan. One price. Stories worth opening.
            </h2>
          </div>
        </SectionObserver>

        <SectionObserver>
          <div className="mx-auto mt-12 max-w-md">
            <div className="overflow-hidden rounded-xl border-2 border-primary bg-background">
              <div className="bg-primary px-8 py-6 text-center">
                <h3 className="font-serif text-xl font-bold text-primary-foreground">
                  Little Red Mailbox
                </h3>
                <p className="mt-1 text-sm text-primary-foreground/80">
                  Monthly adventure subscription
                </p>
              </div>
              <div className="px-8 py-8 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl font-bold text-foreground">$10.99</span>
                  <span className="text-base text-muted-foreground">/month</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Cancel anytime. Ships monthly.</p>

                <ul className="mt-8 flex flex-col gap-3 text-left">
                  {[
                    "Original adventure story each month",
                    "Hands-on mission or activity",
                    "A small surprise inside every envelope",
                    "Addressed personally to your child",
                    "Cancel anytime, no commitment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Join the Club
                </Link>
                <p className="mt-3 text-xs text-muted-foreground">
                  Secure checkout. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </SectionObserver>
      </div>
    </section>
  )
}
