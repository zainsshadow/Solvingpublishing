import { LeadForm } from "@/components/forms/lead-form"
import { CTABlock } from "@/components/shared/cta-block"

export const metadata = {
  title: "Get a Quote — Solving Publishing",
  description: "Share your manuscript and goals to receive a tailored quote and next steps.",
}

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { interest?: string }
}) {
  const preselect = searchParams?.interest
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Get a custom quote</h1>
        <p className="text-muted-foreground">
          Fill out the form and we'll respond with recommendations for services or packages that fit your goals.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <LeadForm preselect={preselect} />
        </div>
        <aside className="space-y-3">
          <div className="rounded-lg border p-4">
            <div className="font-medium mb-1">Why authors choose us</div>
            <p className="text-sm text-muted-foreground">
              Editorial rigor, clear communication, and end‑to‑end support—from manuscript to market.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="font-medium mb-1">Response time</div>
            <p className="text-sm text-muted-foreground">We typically reply within 1–2 business days.</p>
          </div>
        </aside>
      </div>

      <CTABlock
        title="Prefer to talk first?"
        subtitle="Send a booking request for a 30‑minute consult."
        primaryHref="/book-a-meeting"
        primaryLabel="Request a meeting"
        secondaryHref="/services"
        secondaryLabel="Explore services"
      />
    </div>
  )
}
