"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    try {
      const seen = localStorage.getItem("newsletter_seen")
      if (!seen) {
        const timer = setTimeout(() => setOpen(true), 2000)
        return () => clearTimeout(timer)
      }
    } catch {}
  }, [])

  function dismiss() {
    try {
      localStorage.setItem("newsletter_seen", "1")
    } catch {}
    setOpen(false)
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/newsletter/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    })
    if (res.ok) {
      setSubmitted(true)
      try {
        localStorage.setItem("newsletter_seen", "1")
      } catch {}
      setTimeout(() => setOpen(false), 1200)
    } else {
      alert("Subscription failed. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Join our newsletter</DialogTitle>
          <DialogDescription>Get launch tips, publishing guides, and promotions.</DialogDescription>
        </DialogHeader>
        {!submitted ? (
          <form className="grid gap-3" onSubmit={submit}>
            <div>
              <Label htmlFor="name">Name (optional)</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="flex items-center justify-between gap-2">
              <Button type="button" variant="ghost" onClick={dismiss}>
                No thanks
              </Button>
              <Button type="submit">Subscribe</Button>
            </div>
          </form>
        ) : (
          <p className="text-sm text-green-600">Thanks for subscribing!</p>
        )}
      </DialogContent>
    </Dialog>
  )
}
