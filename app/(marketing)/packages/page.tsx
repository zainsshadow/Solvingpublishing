import { packageTiers, aLaCarte } from "@/lib/content/packages"
import { PackageCard } from "@/components/packages/package-card"
import { PackagesCompareTable } from "@/components/packages/packages-compare-table"
import { CTABlock } from "@/components/shared/cta-block"
import { PublishingPhases } from "@/components/info/publishing-phases"
import { MarketingAccordion } from "@/components/info/marketing-accordion"

export const metadata = {
  title: "Packages & Pricing — Elysian Publishers",
  description:
    "Transparent packages and a la carte services: Starter self-publishing launch, Professional full-service publishing, and Elite author brand accelerator.",
}

export default function PackagesPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Packages & Pricing</h1>
        <p className="text-muted-foreground">
          Clear deliverables, timelines, and revision rounds. Third‑party fees (e.g., ad spend, narrator PFH, platform
          fees) are not included.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-serif text-2xl">Pen to Profit: Unlocking Your Book’s Market Potential</h2>
        <p className="text-sm text-muted-foreground">
          Visibility → Branding → Paid Growth. We first make your book discoverable and credible, then build your author
          platform, and finally scale with targeted advertising. Every service below maps to this path so you gain
          momentum that lasts.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        {packageTiers.map((t) => (
          <PackageCard key={t.id} tier={t} />
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl">Compare tiers</h2>
        <PackagesCompareTable tiers={packageTiers} />
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl">From Manuscript to Market</h2>
        <PublishingPhases />
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl">Marketing, Branding & Growth</h2>
        <MarketingAccordion />
      </section>

      <section className="space-y-4">
        <h2 className="font-serif text-2xl">A la carte</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(aLaCarte).map(([group, items]) => (
            <div key={group} className="border rounded-lg p-4">
              <h3 className="font-medium capitalize">{group.replace("-", " ")}</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {items.map((it) => (
                  <li className="flex items-center justify-between" key={it.label}>
                    <span>{it.label}</span>
                    <span className="text-muted-foreground">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Next Steps & Contact */}
      <section className="space-y-3 border rounded-lg p-4 bg-card">
        <h2 className="font-serif text-2xl">Next Steps & Contact</h2>
        <p className="text-sm text-muted-foreground">
          Schedule a free 30‑minute consultation to discuss your manuscript and receive personalized recommendations.
        </p>
        <ul className="text-sm">
          <li>
            Website:{" "}
            <a className="ink-link" href="https://www.thelibertybookpublisher.com" target="_blank" rel="noreferrer">
              www.thelibertybookpublisher.com
            </a>
          </li>
          <li>
            Email:{" "}
            <a className="ink-link" href="mailto:Info@thelibertybookpublisher.com">
              Info@thelibertybookpublisher.com
            </a>
          </li>
          <li>Call: 737‑358‑6750</li>
          <li className="mt-1">
            Social:{" "}
            <a
              className="ink-link"
              href="https://www.instagram.com/thelibertybookpublisherusa/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>{" "}
            ·{" "}
            <a
              className="ink-link"
              href="https://www.facebook.com/profile.php?id=61566475171547"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </section>

      <CTABlock />
    </div>
  )
}
