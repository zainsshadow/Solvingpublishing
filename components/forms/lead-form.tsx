"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { submitLead } from "@/app/actions/lead"

const services = [
  "Editing",
  "Book formatting",
  "Cover design",
  "Publishing (paperback/hardcover/ebook)",
  "Audiobooks",
  "Illustration",
  "Marketing",
  "Literary agent outreach",
  "Author branding",
]

export function LeadForm({ preselect }: { preselect?: string }) {
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onAction(formData: FormData) {
    setPending(true)
    setSuccess(null)
    setError(null)
    try {
      if (preselect) formData.set("preselect", preselect)
      const res = await submitLead(formData)
      if (res?.ok) setSuccess("Thanks! We’ll be in touch shortly.")
      else setError(res?.message || "Something went wrong.")
    } catch (e) {
      setError("Something went wrong.")
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
        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input id="phone" name="phone" placeholder="+1 555 123 4567" />
        </div>
        <div>
          <Label htmlFor="genre">Genre</Label>
          <Input id="genre" name="genre" placeholder="e.g., Thriller, Romance" />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="status">Manuscript status</Label>
          <Input id="status" name="status" placeholder="Idea/Draft/Complete" />
        </div>
        <div>
          <Label htmlFor="words">Word count (approx.)</Label>
          <Input id="words" name="words" placeholder="e.g., 75,000" />
        </div>
        <div>
          <Label htmlFor="timeline">Desired timeline</Label>
          <Input id="timeline" name="timeline" placeholder="e.g., 2–3 months" />
        </div>
      </div>

      <div>
        <Label>Services of interest</Label>
        <div className="mt-2 grid md:grid-cols-2 gap-3">
          {services.map((s) => (
            <label key={s} className="flex items-center gap-2 text-sm">
              <Checkbox name="services" value={s} />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="goals">Goals</Label>
        <Textarea id="goals" name="goals" placeholder="Tell us what success looks like to you..." />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="budget">Budget range (optional)</Label>
          <Input id="budget" name="budget" placeholder="e.g., $2,000–$5,000" />
        </div>
        <div>
          <Label htmlFor="sample">Link to manuscript/sample (optional)</Label>
          <Input id="sample" name="sample" placeholder="Link to Google Drive/Dropbox, etc." />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <Checkbox name="consent" required />
        <span>
          I agree to the{" "}
          <a className="underline" href="/terms" target="_blank" rel="noreferrer">
            Terms
          </a>{" "}
          and acknowledge the{" "}
          <a className="underline" href="/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <div className="flex gap-2">
        <Button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </Button>
        {success && <p className="text-green-600 text-sm">{success}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </form>
  )
}
