export type Service = {
  slug: string
  name: string
  summary: string
  bullets: string[]
}

export const services: Service[] = [
  {
    slug: "editing",
    name: "Editing",
    summary: "Developmental, copy, line, and proofreading to elevate your manuscript.",
    bullets: ["Developmental review", "Copy/line edit", "Proofreading", "Editorial memo"],
  },
  {
    slug: "book-formatting",
    name: "Book Formatting",
    summary: "Professional interior design for print and ebook distribution.",
    bullets: ["Print layout", "Ebook conversion", "Typography & styles", "Distribution-ready files"],
  },
  {
    slug: "cover-design",
    name: "Cover Design",
    summary: "Custom covers that fit your genre and convert browsers into buyers.",
    bullets: ["Concept exploration", "Bespoke design", "3D mockups", "Retail-optimized files"],
  },
  {
    slug: "publishing",
    name: "Publishing",
    summary: "Guidance and execution for paperback, hardcover, and ebook.",
    bullets: ["ISBN & metadata", "KDP & IngramSpark setup", "Upload & QA", "Store listings"],
  },
  {
    slug: "audiobooks",
    name: "Audiobooks",
    summary: "Narrator sourcing and production coordination for ACX and beyond.",
    bullets: ["Casting & auditions", "Production management", "QC & delivery", "Distribution support"],
  },
  {
    slug: "illustration",
    name: "Illustration",
    summary: "Illustrations to bring your story and world to life.",
    bullets: ["Style matching", "Art direction", "Revisions included", "Print-ready assets"],
  },
  {
    slug: "marketing",
    name: "Book Marketing",
    summary: "Launch plans, ad setup, and review strategy to drive discoverability.",
    bullets: ["Campaign setup", "Ad creative support", "ARC outreach", "Analytics guidance"],
  },
  {
    slug: "agent-outreach",
    name: "Literary Agent Outreach",
    summary: "Research, targeting, and outreach materials to pitch your book.",
    bullets: ["Agent research", "Query package prep", "Outreach support", "Response tracking"],
  },
  {
    slug: "author-branding",
    name: "Author Branding",
    summary: "Unified online presence across key platforms and a clean author site.",
    bullets: ["Profiles & registrations", "Brand kit", "Author site setup", "Ongoing guidance"],
  },
]
