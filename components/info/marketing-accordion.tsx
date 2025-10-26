"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Megaphone,
  Globe,
  Video,
  Headphones,
  Building2,
  Users,
  Newspaper,
  Rocket,
  ShoppingBag,
  PanelsTopLeft,
} from "lucide-react"

export function MarketingAccordion() {
  return (
    <Tabs defaultValue="visibility" className="w-full">
      <TabsList className="flex flex-wrap gap-2">
        <TabsTrigger value="visibility" className="flex items-center gap-2">
          <Megaphone className="h-4 w-4" /> Visibility
        </TabsTrigger>
        <TabsTrigger value="branding" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" /> Author Branding
        </TabsTrigger>
        <TabsTrigger value="social" className="flex items-center gap-2">
          <Users className="h-4 w-4" /> Social Media
        </TabsTrigger>
        <TabsTrigger value="press" className="flex items-center gap-2">
          <Newspaper className="h-4 w-4" /> Press & Media
        </TabsTrigger>
        <TabsTrigger value="ads" className="flex items-center gap-2">
          <Rocket className="h-4 w-4" /> Paid Ads
        </TabsTrigger>
        <TabsTrigger value="merchandise" className="flex items-center gap-2">
          <ShoppingBag className="h-4 w-4" /> Merchandise
        </TabsTrigger>
        <TabsTrigger value="billboard" className="flex items-center gap-2">
          <PanelsTopLeft className="h-4 w-4" /> Billboards
        </TabsTrigger>
      </TabsList>

      <TabsContent value="visibility" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="amazon-opt">
            <AccordionTrigger className="text-left">
              <span className="inline-flex items-center gap-2">
                <Megaphone className="h-4 w-4 text-primary" /> Amazon Optimization — $500
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>Comprehensive keyword research; optimize 7 KDP backend fields</li>
                <li>Category and bestseller rank strategy, SEO‑optimized titles</li>
                <li>HTML‑formatted description; Author Central optimization</li>
                <li>A+ Content creation and promotional setup with guidance</li>
                <li>Post‑optimization strategy guide</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="verified-reviews">
            <AccordionTrigger className="text-left">Amazon Verified Reviews</AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>Essential Pack (12 reviews) — $699</li>
                <li>Bestseller Accelerator (25 reviews) — $1,299</li>
                <li>100% Amazon‑compliant; genre‑matched readers</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="global-distribution">
            <AccordionTrigger className="text-left">
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" /> Global Distribution — $2,000
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>70+ platforms, 45,000+ retailers/libraries, POD worldwide</li>
                <li>ISBNs (registered under your name), BISAC/category optimization</li>
                <li>Global pricing & royalty management, metadata SEO per region</li>
                <li>Optional: Localization, global ad campaigns, virtual book tour</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="video-trailer">
            <AccordionTrigger className="text-left">
              <span className="inline-flex items-center gap-2">
                <Video className="h-4 w-4 text-primary" /> Cinematic Video Trailer (60s) — $1,500
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>Concept/storyboard → production → revisions (10–12 business days)</li>
                <li>Professional VO, SFX, music; multi‑format delivery (9:16, 16:9, 1:1)</li>
                <li>Direct‑response CTA + optional Ad Campaign Setup (+$500)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="audiobook">
            <AccordionTrigger className="text-left">
              <span className="inline-flex items-center gap-2">
                <Headphones className="h-4 w-4 text-primary" /> Audiobook Production — $3,000 / $5,000
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <div className="font-medium">Professional Audiobook — $3,000</div>
              <ul className="list-disc pl-5">
                <li>Single‑narrator, full editing/mastering, ACX/Audible compliant</li>
                <li>Cover art, ISBN, distribution to Audible/Amazon/iTunes</li>
              </ul>
              <div className="font-medium mt-3">Premium Audiobook — $5,000</div>
              <ul className="list-disc pl-5">
                <li>Dual‑voice or multi‑language, enhanced soundscapes</li>
                <li>Distribution to 10+ platforms including libraries (OverDrive, Hoopla)</li>
              </ul>
              <p className="text-xs">
                Market insight: $6.47B (2024) → $38.67B (2032), fastest growth under 45‑year‑old listeners.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="branding" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="author-site">
            <AccordionTrigger className="text-left">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" /> Custom Author Website
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <div className="font-medium">Basic Author Site — $500</div>
              <ul className="list-disc pl-5">
                <li>3 pages, responsive, lead capture, links, domain/hosting guidance</li>
                <li>2 years basic maintenance</li>
              </ul>
              <div className="font-medium mt-3">Author Platform Pro — $1,200</div>
              <ul className="list-disc pl-5">
                <li>5 pages incl. Blog/Gallery/Contact, SEO setup, GA install</li>
                <li>5 years priority maintenance</li>
              </ul>
              <div className="font-medium mt-3">Author Brand Empire — $3,500</div>
              <ul className="list-disc pl-5">
                <li>E‑commerce, membership, media hub, press kit, advanced SEO/speed</li>
                <li>CRM integration, multi‑language, annual strategy session</li>
                <li>Lifetime maintenance + premium hosting options</li>
              </ul>
              <div className="font-medium mt-3">Add‑Ons</div>
              <ul className="list-disc pl-5">
                <li>Premium/Lifetime hosting, e‑commerce add‑on, social integration</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="social" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="foundation-builder">
            <AccordionTrigger className="text-left">Foundation Builder — $495</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              30 days, 12 posts (3/week) across 2 platforms (IG/FB), hashtag strategy, basic analytics, growth guide.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="audience-growth">
            <AccordionTrigger className="text-left">Audience Growth — $1,495</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              90 days, 36 posts, 3 platforms, seasonal promo graphics, one ad campaign, engagement initiative,
              analytics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="authority-establishment">
            <AccordionTrigger className="text-left">Authority Establishment — $2,895</AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-1">
              <ul className="list-disc pl-5">
                <li>120 content pieces, 4 platforms, 3 managed ad campaigns, 4 short‑form videos</li>
                <li>Influencer giveaway, community management, quarterly planning</li>
              </ul>
              <div className="mt-2">
                Add‑Ons: monthly ad management, extra platforms, follower growth, weekly reports
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="press" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="press-release">
            <AccordionTrigger className="text-left">Press Release Distribution</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Packages: $250 (Visibility Boost), $399 (Network Plus), $999 (Integrated Media), $1,450 (Pro+ Integrated),
              $2,450 (Mass Media Visibility).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="podcasts">
            <AccordionTrigger className="text-left">Targeted Podcast Appearances</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Outreach Launchpad — $1,200; Done‑For‑You Booking — $2,800 (min. 8 interviews); Authority Amplifier —
              $4,500 (min. 15 interviews).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="articles">
            <AccordionTrigger className="text-left">Feature Articles in Top Publications</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Industry Authority — $15,000; National Spotlight — $45,000; Global Authority — $79,000+.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="tv-interview">
            <AccordionTrigger className="text-left">TV Interview Booking (Local → National)</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Tiered packages targeting local to national exposure with full campaign management and analytics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="wikipedia">
            <AccordionTrigger className="text-left">Wikipedia Page Creation & Management</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Notability Assessment & Draft — $1,500; Page Creation & Publication — $3,500; Ongoing Management —
              $2,000/yr.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="ads" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="google-ads">
            <AccordionTrigger className="text-left">Google Ads (PPC)</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Awareness — $999 one‑time (+ad spend); Growth — $1,499/mo (+ad spend); Bestseller — $2,499/mo (+ad spend).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="social-ads">
            <AccordionTrigger className="text-left">Social Ads (FB/IG/TikTok/Pinterest)</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Launch Boost — one‑time (+ad spend); Sustained Growth — monthly; Best Value — full‑funnel cross‑platform
              strategy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="strategy">
            <AccordionTrigger className="text-left">Strategic Insights: Maximizing Ad Spend</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Balance PPC for intent with social for brand/list growth; use email automation, upsells, retargeting, and
              tracking (pixels/tags/UTMs).
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="merchandise" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="brand-starter">
            <AccordionTrigger className="text-left">The Brand Starter — $500–$1,000 + product cost</AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>Shop integration on author site + 2 custom merchandise designs</li>
                <li>Print-on-demand setup (e.g., Printful), Stripe/PayPal checkout</li>
                <li>30 days of basic store management for a smooth launch</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="fan-favorite">
            <AccordionTrigger className="text-left">The Fan Favorite — $1,500–$3,000 + product cost</AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>Everything in Starter, plus 5 custom designs and mixed fulfillment</li>
                <li>Professional product photography and a launch promotion plan</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="legacy-collection">
            <AccordionTrigger className="text-left">
              The Legacy Collection — $4,000–$7,000 + product cost
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-2">
              <ul className="list-disc pl-5">
                <li>10+ premium items with dedicated designer and advanced e‑commerce features</li>
                <li>Bulk order management, fulfillment coordination, and 6 months of full-service support</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>

      <TabsContent value="billboard" className="mt-4">
        <Accordion type="multiple" className="w-full text-sm">
          <AccordionItem value="city-spotlight">
            <AccordionTrigger className="text-left">The City Spotlight — $4,500–$7,000</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              One prime digital billboard for two weeks, high-frequency rotation, custom creative, and analytics report.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="regional-influence">
            <AccordionTrigger className="text-left">The Regional Influence — $12,000–$20,000</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Four billboards across complementary markets, A/B creative testing, premium placements, and performance
              metrics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="national-icon">
            <AccordionTrigger className="text-left">The National Icon — $50,000–$100,000+</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              10+ premier billboards across 5–7 major U.S. markets, full-service creative, motion options, and
              executive-level reporting.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
    </Tabs>
  )
}
