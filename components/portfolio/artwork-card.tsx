"use client"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export type Artwork = {
  id: string
  title: string
  category: string
  src: string
  alt: string
  blurb: string
}

export function ArtworkCard({ artwork, className }: { artwork: Artwork; className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={cn(
            "group relative overflow-hidden rounded-lg border bg-card text-left transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            className,
          )}
          aria-label={`Open details for ${artwork.title}`}
        >
          {/* Thumb */}
          <div className="aspect-[3/4] w-full overflow-hidden bg-secondary/40">
            {/* We use the remote Source URL directly as requested */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={artwork.src || "/placeholder.svg"}
              alt={artwork.alt}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div className="p-3">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-medium line-clamp-1">{artwork.title}</h3>
              <Badge variant="secondary" className="shrink-0">
                {artwork.category}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{artwork.blurb}</p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{artwork.title}</DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-2">
            <Badge variant="outline">{artwork.category}</Badge>
            <span className="text-muted-foreground">{artwork.blurb}</span>
          </DialogDescription>
        </DialogHeader>

        <figure className="rounded-md overflow-hidden border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artwork.src || "/placeholder.svg"}
            alt={artwork.alt}
            className="w-full h-auto object-contain bg-secondary/40"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="p-2 text-sm text-muted-foreground">{artwork.blurb}</figcaption>
        </figure>
      </DialogContent>
    </Dialog>
  )
}
