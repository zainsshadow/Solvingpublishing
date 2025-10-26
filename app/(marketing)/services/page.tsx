import { services } from "@/lib/content/services"
import { ServiceCard } from "@/components/services/service-card"
import { CTABlock } from "@/components/shared/cta-block"

export const metadata = {
  title: "Services — Elysian Publishers",
  description:
    "Editing, formatting, cover design, publishing, audiobooks, illustration, marketing, agent outreach, and author branding.",
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Our Services</h1>
        <p className="text-muted-foreground">
          Choose a full-service path or pick just what you need. Every engagement includes clear deliverables and
          revision rounds.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>

      <CTABlock
        title="Not sure where to start?"
        subtitle="Tell us about your manuscript and goals—we’ll recommend services or a package that fits."
      />
    </div>
  )
}
