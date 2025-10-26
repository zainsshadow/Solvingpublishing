import { del } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { url } = await req.json()
    if (!url) {
      return NextResponse.json({ error: "Missing 'url'." }, { status: 400 })
    }
    await del(url)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] Blob delete error:", err)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}
