"use server"

import { z } from "zod"
import { put } from "@vercel/blob"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  genre: z.string().optional(),
  status: z.string().optional(),
  words: z.string().optional(),
  timeline: z.string().optional(),
  services: z.union([z.string(), z.array(z.string())]).optional(),
  goals: z.string().optional(),
  budget: z.string().optional(),
  sample: z.string().url().optional(),
  consent: z.string().optional(),
  preselect: z.string().optional(),
})

export async function submitLead(formData: FormData) {
  const raw = Object.fromEntries(formData.entries())
  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return { ok: false, message: "Invalid input" }
  }

  // prepare normalized payload
  const data = parsed.data
  const services =
    typeof data.services === "string" ? [data.services] : Array.isArray(data.services) ? data.services : []

  // TODO: integrate with DB/email later
  console.log("[v0] Lead submission", {
    ...data,
    services,
    createdAt: new Date().toISOString(),
  })

  try {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
    await put(
      `leads/${id}.json`,
      JSON.stringify({ id, ...data, services, createdAt: new Date().toISOString() }, null, 2),
      {
        access: "private",
        contentType: "application/json",
      },
    )
  } catch (e) {
    console.log("[v0] Lead blob write failed")
  }

  return { ok: true }
}
