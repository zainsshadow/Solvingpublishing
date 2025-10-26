"use client"

import type React from "react"

import useSWR from "swr"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function PromotionsManager() {
  const { data, mutate, isLoading } = useSWR<{ promotions: Array<{ id: string; url: string }> }>(
    "/api/promotions",
    fetcher,
  )
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [ctaLabel, setCtaLabel] = useState("")
  const [ctaUrl, setCtaUrl] = useState("")
  const [placement, setPlacement] = useState<"banner" | "homepage" | "sidebar">("homepage")

  async function createPromotion(e: React.FormEvent) {
    e.preventDefault()
    let imageUrl: string | undefined
    if (file) {
      const fd = new FormData()
      fd.append("file", file)
      const up = await fetch("/api/blob/upload", { method: "POST", body: fd })
      const ur = await up.json()
      if (!up.ok) {
        alert("Upload failed")
        return
      }
      imageUrl = ur.url
    }
    const res = await fetch("/api/promotions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: desc, ctaLabel, ctaUrl, placement, imageUrl, active: true }),
    })
    if (!res.ok) {
      alert("Failed to create promotion")
      return
    }
    setFile(null)
    setTitle("")
    setDesc("")
    setCtaLabel("")
    setCtaUrl("")
    await mutate()
  }

  async function deletePromotion(id: string) {
    const res = await fetch(`/api/promotions/${id}/delete`, { method: "POST" })
    if (!res.ok) {
      alert("Delete failed")
      return
    }
    await mutate()
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card className="p-4">
        <form className="grid gap-3" onSubmit={createPromotion}>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="ctaLabel">CTA Label</Label>
              <Input
                id="ctaLabel"
                value={ctaLabel}
                onChange={(e) => setCtaLabel(e.target.value)}
                placeholder="Learn more"
              />
            </div>
            <div>
              <Label htmlFor="ctaUrl">CTA URL</Label>
              <Input id="ctaUrl" value={ctaUrl} onChange={(e) => setCtaUrl(e.target.value)} placeholder="https://..." />
            </div>
          </div>
          <div>
            <Label>Placement</Label>
            <Select value={placement} onValueChange={(v) => setPlacement(v as any)}>
              <SelectTrigger>
                <SelectValue placeholder="Placement" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="banner">Banner</SelectItem>
                <SelectItem value="homepage">Homepage</SelectItem>
                <SelectItem value="sidebar">Sidebar</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="image">Flyer/Ad Image (optional)</Label>
            <Input id="image" type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
          </div>
          <Button type="submit">Create Promotion</Button>
        </form>
      </Card>

      <Card className="p-4">
        <h3 className="font-medium mb-3">Existing Promotions</h3>
        {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
        <div className="grid gap-3">
          {data?.promotions?.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded-md border p-3">
              <div className="text-sm">
                <div className="font-medium">#{p.id}</div>
                <a className="underline text-primary text-xs" href={p.url} target="_blank" rel="noreferrer">
                  View JSON
                </a>
              </div>
              <Button variant="destructive" size="sm" onClick={() => deletePromotion(p.id)}>
                Delete
              </Button>
            </div>
          ))}
          {!data?.promotions?.length && <p className="text-sm text-muted-foreground">No promotions yet.</p>}
        </div>
      </Card>
    </div>
  )
}
