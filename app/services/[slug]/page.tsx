import { services } from "@/lib/content/services"
import { notFound } from "next/navigation"
import { CTABlock } from "@/components/shared/cta-block"

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <div className="container mx-auto px-4 py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">{service.name}</h1>
        <p className="text-muted-foreground">{service.summary}</p>
      </header>

      <section>
        <h2 className="font-serif text-2xl mb-3">What’s included</h2>
        <ul className="list-disc pl-6 space-y-1">
          {service.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <CTABlock
        title="Ready to get started?"
        subtitle="Share your manuscript and goals—we’ll tailor a proposal for you."
      />
    </div>
  )
}
