import { del, head } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(_: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 })

    // delete metadata JSON
    const metaUrl = `promotions/${id}.json`
    // Resolve to absolute URL via head(). If not found, ignore.
    try {
      const meta = await head(metaUrl)
      if (meta?.url) {
        // fetch metadata to check imageUrl
        const res = await fetch(meta.url)
        if (res.ok) {
          const data = await res.json()
          if (data?.imageUrl) {
            try {
              await del(data.imageUrl)
            } catch {
              // ignore
            }
          }
        }
        await del(meta.url)
      }
    } catch {
      // ignore if missing
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[v0] promotions delete error:", error)
    return NextResponse.json({ error: "Failed to delete promotion" }, { status: 500 })
  }
}
