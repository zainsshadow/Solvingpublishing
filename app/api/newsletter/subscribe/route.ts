import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json()
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 })
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    await put(
      `newsletter/${id}.json`,
      JSON.stringify({ id, email, name, createdAt: new Date().toISOString() }, null, 2),
      {
        access: "public",
        contentType: "application/json",
      },
    )
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] newsletter subscribe error:", err)
    return NextResponse.json({ error: "Subscribe failed" }, { status: 500 })
  }
}
