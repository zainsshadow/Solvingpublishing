import Link from "next/link"
import { Button } from "@/components/ui/button"
import { packageTiers } from "@/lib/content/packages"
import { PackageCard } from "@/components/packages/package-card"
import { CTABlock } from "@/components/shared/cta-block"
import { JourneyRoadmap } from "@/components/shared/journey-roadmap"
import { HeroPortfolioPreview } from "@/components/portfolio/hero-portfolio-preview"
import { BookOpen, Brush, ImageIcon, Sparkles, CheckCircle2, Zap, Library } from "lucide-react"

export const metadata = {
  title: "Solving Publishing — Self & Full-Service Book Publishing",
  description:
    "Solving Publishing helps authors edit, format, publish, and promote their books—plus branding, audiobooks, and agent outreach.",
}

export default function HomePage() {
  return (
    <>
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-balance flex items-start gap-3">
              <span className="mt-1 text-primary">
                <Sparkles aria-hidden="true" />
              </span>
              <span>Publish with confidence. Build a lasting author brand.</span>
            </h1>
            <p className="mt-4 text-muted-foreground">
              From editorial craftsmanship and beautiful design to smart distribution and launch strategy—Solving
              Publishing partners with you end‑to‑end. We tailor services to your goals, whether you're debuting your
              first book or scaling a multi‑title catalog.
            </p>
            <ul className="mt-4 grid gap-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <span>Developmental, line, and copy editing calibrated to your manuscript</span>
              </li>
              <li className="flex items-start gap-2">
                <Brush className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <span>Cover systems that extend to series branding and your author identity</span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <span>Print, ebook, and audiobook production with metadata and distribution</span>
              </li>
              <li className="flex items-start gap-2">
                <ImageIcon className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
                <span>Launch planning, reviews, pricing strategy, and ongoing growth support</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Get a custom quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/book-a-meeting">Book a 30‑min consult</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/portfolio">See portfolio</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/portfolio#case-studies">Read case studies</Link>
              </Button>
            </div>
          </div>
          <HeroPortfolioPreview />
        </div>
        <div className="mt-12 rounded-lg border bg-gradient-to-r from-primary/5 to-accent/5 p-6">
          <h3 className="font-medium text-sm mb-4">Explore Our Tools & Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              href="/publishing-readiness-checker"
              className="flex items-start gap-3 p-3 rounded-md hover:bg-white/50 transition-colors"
            >
              <Zap className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="font-medium text-sm">Publishing Readiness Checker</div>
                <div className="text-xs text-muted-foreground">Analyze your manuscript and get a readiness score</div>
              </div>
            </Link>
            <Link
              href="/resources"
              className="flex items-start gap-3 p-3 rounded-md hover:bg-white/50 transition-colors"
            >
              <Library className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="font-medium text-sm">Author Resources</div>
                <div className="text-xs text-muted-foreground">Templates, guides, and tools for your journey</div>
              </div>
            </Link>
            <Link
              href="/submissions"
              className="flex items-start gap-3 p-3 rounded-md hover:bg-white/50 transition-colors"
            >
              <BookOpen className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="font-medium text-sm">Submit Your Manuscript</div>
                <div className="text-xs text-muted-foreground">Follow our guidelines and submit your work</div>
              </div>
            </Link>
            <Link
              href="/services"
              className="flex items-start gap-3 p-3 rounded-md hover:bg-white/50 transition-colors"
            >
              <Sparkles className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <div className="font-medium text-sm">Our Services</div>
                <div className="text-xs text-muted-foreground">Explore editing, design, and publishing options</div>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted-foreground">
          <div className="rounded-md border bg-card p-3 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
            Fiction & Memoir
          </div>
          <div className="rounded-md border bg-card p-3 flex items-center gap-2">
            <Brush className="h-4 w-4 text-primary" aria-hidden="true" />
            Picture Books
          </div>
          <div className="rounded-md border bg-card p-3 flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-primary" aria-hidden="true" />
            Graphic Novels
          </div>
          <div className="rounded-md border bg-card p-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Fantasy & Sci‑Fi
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-3">Our Approach</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-primary">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-medium">Editorial Integrity</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Objective feedback, clear edits, and milestone check‑ins ensure your voice gets sharper—not lost.
            </p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-primary">
              <Brush className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-medium">Design that Works</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Audience‑appropriate covers and layouts that meet retailer standards and delight readers.
            </p>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <div className="text-primary">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-medium">Long‑Term Thinking</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Launch is day one. We plan for backlist momentum, list‑building, and your next title.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-3">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="font-medium">Done‑with‑You Services</h3>
            <ul className="mt-2 grid gap-2 list-disc pl-5 text-sm">
              <li>Editorial roadmap with annotated feedback and revision cycles</li>
              <li>Cover concepts with iteration rounds and usage guidelines</li>
              <li>Print/ebook files, proofs, and distribution setup with ISBNs</li>
              <li>Launch playbook—reviews, promos, and outreach templates</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6 bg-card">
            <h3 className="font-medium">Tools & Support</h3>
            <ul className="mt-2 grid gap-2 list-disc pl-5 text-sm">
              <li>Milestone dashboard with dates, files, and approvals</li>
              <li>Retail metadata checklist and pricing strategy guide</li>
              <li>Brand toolkit: typography, colors, social assets, and mockups</li>
              <li>Post‑launch growth plan with seasonal promotion ideas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl md:text-3xl mb-6">Packages & Pricing</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packageTiers.map((t) => (
            <PackageCard key={t.id} tier={t} />
          ))}
        </div>
        <div className="mt-6">
          <Link className="underline text-primary" href="/packages">
            See full comparison
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <JourneyRoadmap />
      </section>

      <section className="container mx-auto px-4 py-12">
        <CTABlock />
      </section>
    </>
  )
}
