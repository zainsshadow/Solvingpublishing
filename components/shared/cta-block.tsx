import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTABlock({
  title = "Ready to publish with confidence?",
  subtitle = "Tell us about your manuscript and goals. We’ll recommend the right path.",
  primaryHref = "/contact",
  primaryLabel = "Get a custom quote",
  secondaryHref = "/book-a-meeting",
  secondaryLabel = "Book a 30-min consult",
}: {
  title?: string
  subtitle?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="bg-primary text-primary-foreground rounded-lg p-6 md:p-10">
      <div className="max-w-3xl">
        <h3 className="font-serif text-2xl md:text-3xl mb-2 text-balance">{title}</h3>
        <p className="opacity-90 mb-6">{subtitle}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-transparent text-primary-foreground border-primary-foreground/40"
          >
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
