import { list, put } from "@vercel/blob"
import { NextResponse } from "next/server"

type Promotion = {
  id: string
  title: string
  description?: string
  imageUrl?: string
  ctaLabel?: string
  ctaUrl?: string
  placement?: "banner" | "homepage" | "sidebar"
  active?: boolean
  createdAt: string
}

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "promotions/" })
    const files = blobs
      .filter((b) => b.pathname.endsWith(".json"))
      .map((b) => ({
        id: b.pathname.split("/").pop()?.replace(".json", "") || "unknown",
        url: b.url,
        createdAt: b.uploadedAt?.toISOString?.() ?? new Date().toISOString(),
        size: b.size,
      }))
    return NextResponse.json({ promotions: files })
  } catch (error) {
    console.error("[v0] promotions list error:", error)
    return NextResponse.json({ error: "Failed to list promotions" }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Omit<Promotion, "id" | "createdAt">
    const id = `${Date.now()}`
    const payload: Promotion = {
      id,
      title: body.title,
      description: body.description,
      imageUrl: body.imageUrl,
      ctaLabel: body.ctaLabel,
      ctaUrl: body.ctaUrl,
      placement: body.placement ?? "homepage",
      active: body.active ?? true,
      createdAt: new Date().toISOString(),
    }

    const blob = await put(`promotions/${id}.json`, JSON.stringify(payload, null, 2), {
      access: "public",
      contentType: "application/json",
    })

    return NextResponse.json({ ok: true, promotion: { ...payload, url: blob.url } })
  } catch (error) {
    console.error("[v0] promotions create error:", error)
    return NextResponse.json({ error: "Failed to create promotion" }, { status: 500 })
  }
}
