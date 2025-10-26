"use client"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

type Item = {
  src: string
  alt: string
  caption: string
}

const ITEMS: Item[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_15_24%20PM-E05tr4mzwZ72TyS9UW0JjfAsz5TCot.png",
    alt: "Dynamic manga action page, expressive motion lines and panel flow.",
    caption: "Graphic novel sequencing · Action storytelling",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_10_46%20PM-lCbURhsmB3zZlEFcOqP3586mZLzqEY.png",
    alt: "Three-panel village defense with charming animal heroes vs. robots.",
    caption: "Kids series illustration · Character consistency",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_22%20PM-RIUZT8Fd7b0PpV7BRA3ph0QwL2Kcc5.png",
    alt: "Mythic portrait with fox mask and wolf spirit in sumi ink style.",
    caption: "Cover art · Folklore & literary fiction",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bitwa%20o%20Ponga_%20Kosmiczna%20Przygoda-FX6RNXcoN2QQfzC6ShcY75zLOXXSht.png",
    alt: "Bold sci‑fi poster with a heroic cat commander, dinosaurs, and robots.",
    caption: "Marketing key art · Read‑aloud appeal",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_13%20PM-XUW8czJi9gNBbdSbjRZ4jRSZP4Oe79.png",
    alt: "Five young heroes wielding elemental powers with dynamic lighting.",
    caption: "YA fantasy ensemble · Series branding",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_52%20PM-gr3y6yMtbV0jknfcYezjnTrxgcbrlq.png",
    alt: "Whimsical fairy and friends in a twilight meadow.",
    caption: "Picture book spread · Soft painterly style",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_57%20PM-birxYFFU0NVikIDBiFq5hFA7H2TlJY.png",
    alt: "Gentle watercolor jacket design: Curly Cloud cover and flap copy.",
    caption: "Book jacket layout · Typography & color",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_49%20PM-UHGXsxiZzF4Rhila0v4cnsK1DSrZMP.png",
    alt: "Moody, ornate scene with angelic and cloaked figures.",
    caption: "Fine art & special editions",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2012%2C%202025%2C%2002_14_15%20PM-GFKfd9Td27S4kbKngiz4cD6YefVpKv.png",
    alt: "Playful monster and dog at a party in warm sunlight.",
    caption: "Early reader humor · Character IP",
  },
]

export function HeroPortfolioPreview() {
  return (
    <div className="spotlight-surface paper-grain rounded-lg border bg-card p-2 md:p-3">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {ITEMS.slice(0, 6).map((item, i) => (
          <figure key={i} className="relative overflow-hidden rounded-md bg-muted">
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Open enlarged view: ${item.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <figure className="space-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    className="w-full h-auto rounded-md"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="text-sm text-muted-foreground">{item.caption}</figcaption>
                </figure>
              </DialogContent>
            </Dialog>
          </figure>
        ))}
      </div>
      <p className="sr-only">
        Tap any image to open a larger view and read captions. Portfolio highlights include graphic narrative, picture
        books, YA fantasy, and jacket design.
      </p>
    </div>
  )
}
