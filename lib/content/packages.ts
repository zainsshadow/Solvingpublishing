export type PackageTier = {
  id: "starter" | "basic" | "premium" | "extensive" | "bestseller"
  name: string
  price: string
  description: string
  features: string[]
  cta: string
}

export const packageTiers: PackageTier[] = [
  {
    id: "starter",
    name: "Starter Publishing Package",
    price: "$399",
    description: "Affordable digital launch with essential polish and KDP publishing for eBook.",
    features: [
      "Proofreading (fundamental grammar check)",
      "Interior formatting for eBook per standards",
      "Professional cover design (genre-accurate)",
      "ISBN assignment (eBook, registered under your name)",
      "Publishing on Amazon via KDP (eBook)",
    ],
    cta: "Start Starter package",
  },
  {
    id: "basic",
    name: "Basic Publishing Package",
    price: "$699",
    description:
      "Professional launch across eBook, Paperback, and Hardcover with copy editing and standard formatting.",
    features: [
      "Copy Editing (spelling, grammar, punctuation, syntax, consistency)",
      "Standard formatting: eBook, Paperback, Hardcover",
      "Professional cover design (2 concepts + 2 revisions)",
      "Publishing on Amazon via KDP (all formats)",
    ],
    cta: "Start Basic package",
  },
  {
    id: "premium",
    name: "Premium Publishing Package",
    price: "$1,499",
    description: "Line & structural editing, enhanced formatting, and premium custom cover with market positioning.",
    features: [
      "Line Editing & Structural Review (includes copy editing)",
      "Enhanced formatting (custom chapters, graphics, drop caps, advanced placement)",
      "Premium custom cover (3 concepts + 3 revisions, mockups)",
      "ISBN assignment (3 total: eBook, paperback, hardcover)",
      "KDP publishing + Author Page setup",
      "Amazon metadata & keyword guidance",
    ],
    cta: "Start Premium package",
  },
  {
    id: "extensive",
    name: "Extensive Publishing Package",
    price: "$2,499",
    description:
      "Top 5 platform distribution with optimization across each platform, author tools, A+ content, and guaranteed first 50 sales.",
    features: [
      "Multi-platform distribution: Amazon, B&N, Apple Books, Kobo, Google Books",
      "Optimization per platform: keywords, categories, titles/descriptions",
      "Author pages + A+ Content on Amazon",
      "Promotional tools + Post-Optimization Strategy Guide",
      "Guaranteed first 50 organic sales (first quarter)",
      "10 complimentary author copies",
      "Includes Premium package editing, formatting, and cover services",
    ],
    cta: "Start Extensive package",
  },
  {
    id: "bestseller",
    name: "Bestseller Publishing Package",
    price: "$4,999",
    description: "Maximum global reach on 70+ platforms with advanced optimization and guaranteed first 100 sales.",
    features: [
      "Comprehensive editorial services (line & structural review)",
      "Enhanced formatting for all formats",
      "Bespoke luxury cover (unlimited concepts & revisions + marketing assets)",
      "ISBN assignment (3 total)",
      "Global distribution on 70+ platforms and 45,000+ retailers/libraries",
      "Advanced optimization for all platforms + A+ Content",
      "Author pages across platforms + promotional tools + strategy guide",
      "Guaranteed first 100 organic sales (first quarter) & Bestseller category targeting",
    ],
    cta: "Start Bestseller package",
  },
]

export const aLaCarte = {
  editing: [
    { label: "Developmental edit", price: "$0.04/word" },
    { label: "Line & structural edit", price: "Custom (scope-based)" },
    { label: "Copy edit", price: "$0.025/word" },
    { label: "Proofreading", price: "$0.015/word" },
  ],
  formatting: [
    { label: "Ebook only", price: "$299" },
    { label: "Print + ebook", price: "$499" },
    { label: "Design-intensive (InDesign)", price: "Custom" },
  ],
  cover: [
    { label: "Professional cover", price: "Included in packages" },
    { label: "Premium custom", price: "$1,299" },
    { label: "Bespoke luxury (unlimited)", price: "Custom" },
  ],
  audiobook: [
    { label: "Professional (single narrator)", price: "$3,000" },
    { label: "Premium (dual-voice/multi-language)", price: "$5,000" },
  ],
  illustration: [
    { label: "AI-enhanced illustration", price: "Custom" },
    { label: "Custom hand-drawn illustration", price: "Custom" },
    { label: "Premium 3D & high-definition design", price: "Custom" },
  ],
  marketing: [
    { label: "Amazon Optimization", price: "$500" },
    { label: "Amazon Verified Reviews (12)", price: "$699" },
    { label: "Amazon Verified Reviews (25)", price: "$1,299" },
    { label: "Global distribution setup", price: "$2,000" },
    { label: "60-sec video trailer", price: "$1,500" },
  ],
  social: [
    { label: "Foundation Builder (30 days)", price: "$495" },
    { label: "Audience Growth (90 days)", price: "$1,495" },
    { label: "Authority Establishment (6 months)", price: "$2,895" },
  ],
  press: [
    { label: "Press release: Visibility Boost", price: "$250" },
    { label: "Press release: Network Plus", price: "$399" },
    { label: "Press release: Integrated Media", price: "$999" },
    { label: "Press release: Pro+ Integrated", price: "$1,450" },
    { label: "Press release: Mass Media Visibility", price: "$2,450" },
  ],
  podcasts: [
    { label: "Outreach Launchpad", price: "$1,200" },
    { label: "Done-For-You Booking (8+ interviews)", price: "$2,800" },
    { label: "Authority Amplifier (15+ interviews)", price: "$4,500" },
  ],
  articles: [
    { label: "Industry Authority (3 placements)", price: "$15,000" },
    { label: "National Spotlight (5 placements + long-form)", price: "$45,000" },
    { label: "Global Authority (5–7 editorial features)", price: "$79,000+" },
  ],
  wikipedia: [
    { label: "Notability assessment & draft", price: "$1,500" },
    { label: "Page creation & publication", price: "$3,500" },
    { label: "Page management (annual)", price: "$2,000/yr" },
  ],
  ads: [
    { label: "Google Ads Awareness (one-time)", price: "$999 + ad spend" },
    { label: "Google Ads Growth (monthly)", price: "$1,499 + ad spend" },
    { label: "Google Ads Bestseller (monthly)", price: "$2,499 + ad spend" },
    { label: "Social launch boost (one-time)", price: "Custom + ad spend" },
    { label: "Social sustained growth (monthly)", price: "Custom + ad spend" },
    { label: "Social best value (monthly)", price: "Custom + ad spend" },
  ],
  merchandise: [
    { label: "Brand Starter (shop + 2 designs)", price: "$500–$1,000 + product cost" },
    { label: "Fan Favorite (5 designs + mixed fulfillment)", price: "$1,500–$3,000 + product cost" },
    { label: "Legacy Collection (10+ premium items + mgmt)", price: "$4,000–$7,000 + product cost" },
  ],
  billboard: [
    { label: "City Spotlight (1 digital billboard, 2 weeks)", price: "$4,500–$7,000" },
    { label: "Regional Influence (4 billboards, 4 weeks)", price: "$12,000–$20,000" },
    { label: "National Icon (10+ billboards, 6 weeks)", price: "$50,000–$100,000+" },
  ],
}
