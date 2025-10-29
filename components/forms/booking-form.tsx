"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function BookingForm() {
  const [pending, setPending] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  const form = e.currentTarget // <-- keep a stable ref right away
  setPending(true)
  setMsg(null)

  const formData = new FormData(form)
  formData.append("access_key", "858a7bae-93fb-4f82-af94-dcdd16e20c5b")

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    const data = await res.json()
    console.log("data", data.success)

    if (data.success) {
      setMsg("✅ Request received! We’ll email you to confirm a time.")
      form.reset() // <-- use the saved reference, not e.currentTarget
    } else {
      setMsg(data.message || "❌ Something went wrong. Please try again.")
    }
  } catch (err) {
    setMsg("⚠️ Network error. Please try again later.")
  } finally {
    setPending(false)
  }
}


  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Jane Author" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@example.com" />
        </div>
      </div>

      <div>
        <Label htmlFor="times">Preferred dates/times</Label>
        <Input id="times" name="times" placeholder="e.g., Weekdays 10am–2pm (EST)" />
      </div>

      <div>
        <Label htmlFor="services">Services of interest</Label>
        <Input id="services" name="services" placeholder="e.g., Editing, Formatting, Cover" />
      </div>

      <div>
        <Label htmlFor="notes">Notes</Label>
        <Textarea id="notes" name="notes" placeholder="Share context or questions ahead of time..." />
      </div>

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Sending..." : "Request meeting"}
      </Button>

      {msg && <p className="text-sm text-center">{msg}</p>}
    </form>
  )
}
