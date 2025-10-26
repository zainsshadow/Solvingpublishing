import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "newsletter/" })
    const files = blobs
      .filter((b) => b.pathname.endsWith(".json"))
      .map((b) => ({
        id: b.pathname.split("/").pop()?.replace(".json", "") || "unknown",
        url: b.url,
        size: b.size,
        createdAt: b.uploadedAt?.toISOString?.() ?? new Date().toISOString(),
      }))
    return NextResponse.json({ subscribers: files })
  } catch (err) {
    console.error("[v0] newsletter list error:", err)
    return NextResponse.json({ error: "Failed to list subscribers" }, { status: 500 })
  }
}
