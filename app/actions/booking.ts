"use server"

import { z } from "zod"
import { put } from "@vercel/blob"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  times: z.string().optional(),
  services: z.string().optional(),
  notes: z.string().optional(),
})

export async function requestBooking(formData: FormData) {
  const raw = Object.fromEntries(formData.entries())
  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, message: "Invalid input" }
  }

  // TODO: integrate with calendar/email later
  console.log("[v0] Booking request", {
    ...parsed.data,
    createdAt: new Date().toISOString(),
  })

  try {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    await put(
      `bookings/${id}.json`,
      JSON.stringify({ id, ...parsed.data, createdAt: new Date().toISOString() }, null, 2),
      { access: "private", contentType: "application/json" },
    )
  } catch (e) {
    console.log("[v0] Booking blob write failed")
  }

  return { ok: true }
}
