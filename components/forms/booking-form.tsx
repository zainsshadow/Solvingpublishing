"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { requestBooking } from "@/app/actions/booking"

export function BookingForm() {
  const [pending, setPending] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  async function onAction(formData: FormData) {
    setPending(true)
    setMsg(null)
    try {
      const res = await requestBooking(formData)
      setMsg(res?.ok ? "Request received! We’ll email to confirm a time." : res?.message || "Something went wrong.")
    } catch {
      setMsg("Something went wrong.")
    } finally {
      setPending(false)
    }
  }

  return (
    <form action={onAction} className="space-y-5">
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

      <Button type="submit" disabled={pending}>
        {pending ? "Sending..." : "Request meeting"}
      </Button>
      {msg && <p className="text-sm">{msg}</p>}
    </form>
  )
}
