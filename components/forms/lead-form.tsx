"use client"

import { useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

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
  const formRef = useRef<HTMLFormElement>(null)
  const [pending, setPending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    setPending(true)
    setSuccess(null)
    setError(null)

    // Build FormData from a stable ref BEFORE any await
    const fd = new FormData(form)

    // ✅ REQUIRED: your Web3Forms access key
    fd.append("access_key", "4bb58859-5a76-4b90-9d22-3f760a6df78e")

    // Optional, but helps in the email you receive
    fd.append("subject", "New lead via Solving Publishing")
    fd.append("from_name", "Solving Publishing Website")
    if (preselect) fd.set("preselect", preselect)

    // Optional: redirect after success (remove if you want inline success only)
    // fd.append("redirect", "https://yourdomain.com/thanks")

    // Anti-spam honeypot: (ensure you have a hidden input named 'botcheck' in the form)
    // Web3Forms treats a checked/filled honeypot as spam.
    // If you want stricter protection, enable hCaptcha in Web3Forms dashboard.

    // Timeout so we don't hang forever
    const ctrl = new AbortController()
    const timeout = setTimeout(() => ctrl.abort(), 12000)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
        cache: "no-store",
        signal: ctrl.signal,
      })

      const raw = await res.text()
      let data: any = null
      try { data = raw ? JSON.parse(raw) : null } catch { /* not JSON, ignore */ }

      const ok = res.ok && (data?.success ?? false)
      if (ok) {
        setSuccess(data?.message || "Thanks! We’ll be in touch shortly.")
        form.reset() // use the saved ref, not e.currentTarget
      } else {
        const msg =
          data?.message ||
          (raw && raw.slice(0, 200)) ||
          `HTTP ${res.status} ${res.statusText}` ||
          "Something went wrong."
        setError(msg)
      }
    } catch (err: any) {
      setError(err?.name === "AbortError"
        ? "Request timed out. Please try again."
        : "Network error. Please try again later.")
    } finally {
      clearTimeout(timeout)
      setPending(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
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
              {/* Each checked box adds another "services" entry in FormData */}
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

      {/* Honeypot (hidden) */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <label className="flex items-start gap-2 text-sm ">
        <input type="checkbox" name="consent" required className="border rounded mt-1" />
        <span>
          I agree to the{" "}
          <a className="underline" href="/terms" target="_blank" rel="noreferrer">Terms</a>{" "}
          and acknowledge the{" "}
          <a className="underline" href="/privacy" target="_blank" rel="noreferrer">Privacy Policy </a>.
          By signing up, you agree to receive recurring marketing messages from Solving Publishing. Message frequency may vary. Message & data rates may apply. Reply STOP to cancel or HELP for help.
        </span>
      </label>

      <div className="flex gap-2 items-center">
        <Button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </Button>
        {success && <p className="text-green-600 text-sm">{success}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </form>
  )
}
