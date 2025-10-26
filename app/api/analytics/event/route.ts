import { put } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const now = new Date()
    const day = now.toISOString().slice(0, 10) // YYYY-MM-DD
    const id = `${now.getTime()}-${Math.random().toString(36).slice(2, 8)}`
    const payload = {
      id,
      type: body?.type || "pageview",
      path: body?.path || "",
      referrer: body?.referrer || "",
      ua: body?.ua || "",
      ts: now.toISOString(),
    }
    await put(`analytics/events/${day}/${id}.json`, JSON.stringify(payload, null, 2), {
      access: "private",
      contentType: "application/json",
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[v0] analytics event error:", err)
    return NextResponse.json({ error: "Failed to record event" }, { status: 500 })
  }
}
