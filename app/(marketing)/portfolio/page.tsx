export const metadata = {
  title: "Portfolio — Elysian Publishers",
  description: "Selected work and success stories from our authors.",
}

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { type Artwork, ArtworkCard } from "@/components/portfolio/artwork-card"

export default function PortfolioPage() {
  const artworks: Artwork[] = [
    {
      id: "manga-duel",
      title: "Kinetic Manga Action",
      category: "Manga / Comics",
      src: "/portfolio/action.png",
      alt: "Black and white manga panels with an intense punch and dynamic motion lines.",
      blurb:
        "High‑impact black‑and‑white sequential art emphasizing clarity of action, expressive posing, and panel rhythm.",
    },
    {
      id: "village-defense",
      title: "All‑Ages Sci‑Fi Adventure",
      category: "Comics",
      src: "/portfolio/actionscifi.png",
      alt: "Cartoon villagers rally against flying robot invaders in a three‑panel sequence.",
      blurb:
        "Story beats for younger readers—clear silhouettes, warm palette, and cinematic pacing for easy comprehension.",
    },
    {
      id: "kitsune-mask",
      title: "Folklore Portrait",
      category: "Dark Fantasy",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_22%20PM-RIUZT8Fd7b0PpV7BRA3ph0QwL2Kcc5.png",
      alt: "Woman with a fox mask and a looming wolf spirit rendered in ink‑wash style.",
      blurb: "Atmospheric character illustration blending folklore motifs with a restrained, evocative ink technique.",
    },
    {
      id: "stable-friends",
      title: "Chapter Book Spot Art",
      category: "Black & White",
      src: "/portfolio/winter.png",
      alt: "Two friendly horses in a stable, grayscale line and wash style.",
      blurb: "Approachable grayscale spot illustrations optimized for chapter books and early readers.",
    },
    {
      id: "commander-gold",
      title: "Middle‑Grade Poster",
      category: "Cover / Poster",
      src: "/portfolio/cover.png",
      alt: "Bold sci‑fi poster with a heroic cat commander, dinosaurs, and robots.",
      blurb: "Bold title design and character‑first composition for high shelf appeal in middle‑grade markets.",
    },
    {
      id: "elemental-team",
      title: "YA Fantasy Ensemble",
      category: "Young Adult",
      src: "/portfolio/metal.png",
      alt: "Five young heroes wielding elemental powers with dynamic lighting.",
      blurb: "Cast ensemble key art—distinct silhouettes, power effects, and color scripting for series branding.",
    },
    {
      id: "karmic-friends",
      title: "Picture‑Book Cover",
      category: "Picture Book",
      src: "/portfolio/granny.png",
      alt: "Whimsical fairy with animals at sunset, warm magical glow.",
      blurb: "Warm, magical palette and friendly characters for ages 3–7. Designed for read‑aloud moments.",
    },
    {
      id: "curly-cloud",
      title: "Picture‑Book Spread",
      category: "Picture Book",
      src: "/portfolio/adventure.png",
      alt: "Double‑page spread featuring cheerful cloud characters and gentle rhymes.",
      blurb: "Narrative layout with generous whitespace and large type—tested for legibility in print and ebook.",
    },
    {
      id: "gothic-panel",
      title: "Gothic Fantasy Panel",
      category: "Cover / Poster",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_49%20PM-UHGXsxiZzF4Rhila0v4cnsK1DSrZMP.png",
      alt: "Gothic tableau with hooded figures, poppies, and a dramatic central scene.",
      blurb: "Ornate, painterly composition for literary or dark fantasy—textured palettes and period sensibility.",
    },
    {
      id: "slime-friends",
      title: "Humor Spread",
      category: "Kids",
      src: "/portfolio/characters.png",
      alt: "Goofy blue monster and a happy dog covered in custard in a sunny park.",
      blurb: "Giggle‑worthy character acting and clean shapes tailored for early readers and activity books.",
    },
  ]

  const categories = ["All", ...Array.from(new Set(artworks.map((a) => a.category)))]

  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <header className="space-y-3">
        <h1 className="font-serif text-3xl md:text-4xl">Portfolio</h1>
        <p className="text-muted-foreground max-w-3xl">
          A selection of illustration styles we produce for picture books, chapter books, YA fantasy, and comics. Our
          process emphasizes clear storytelling, character‑first composition, and market‑aligned design while preserving
          each author’s unique voice. Click any piece to view details.
        </p>
      </header>

      <Tabs defaultValue="All">
        <TabsList className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <TabsTrigger key={c} value={c}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((c) => {
          const filtered = c === "All" ? artworks : artworks.filter((a) => a.category === c)
          return (
            <TabsContent key={c} value={c} className="mt-6 space-y-6">
              {c !== "All" ? (
                <p className="text-sm text-muted-foreground">
                  Showing: <span className="font-medium">{c}</span>. We tailor palettes, layout, and rendering style to
                  fit your audience and format (print, ebook, audiobook tie‑ins, and marketing).
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Explore a range from whimsical picture‑book art to cinematic YA fantasy and high‑energy comics.
                </p>
              )}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((art) => (
                  <ArtworkCard key={art.id} artwork={art} />
                ))}
              </div>
            </TabsContent>
          )
        })}
      </Tabs>

      <section aria-labelledby="illustration-fit" className="space-y-3">
        <h2 id="illustration-fit" className="font-serif text-2xl md:text-3xl">
          How Illustration Supports Your Publishing Journey
        </h2>
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <p>
            Illustration is more than decoration—it’s storytelling. In early discovery, we determine the role artwork
            plays in your positioning and reader experience. During production, we plan trim size, page count, image
            cadence, and typography so words and pictures breathe together. At launch, key art drives ads, retailer
            thumbnails, metadata images, and social creative for consistent brand recall.
          </p>
          <p>
            We adapt pipelines for your format: picture books prioritize spread rhythm and read‑aloud clarity; chapter
            books use economical spot art to pace long‑form reading; YA covers focus on shelf impact and series
            continuity; comics emphasize panel clarity and kinetic motion. Every deliverable is prepared for print and
            digital with color‑managed exports and accessibility‑minded contrast.
          </p>
        </div>
      </section>
    </div>
  )
}
