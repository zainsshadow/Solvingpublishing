"use client"

import useSWR from "swr"
import { Card } from "@/components/ui/card"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function NewsletterManager() {
  const { data, isLoading } = useSWR<{ subscribers: Array<{ id: string; url: string; createdAt: string }> }>(
    "/api/newsletter/list",
    fetcher,
  )

  return (
    <Card className="p-4">
      <h3 className="font-medium mb-3">Subscribers</h3>
      {isLoading && <p className="text-sm text-muted-foreground">Loading…</p>}
      <div className="grid gap-2">
        {data?.subscribers?.map((s) => (
          <div key={s.id} className="flex items-center justify-between rounded-md border p-3 text-sm">
            <div>
              <div className="font-medium">#{s.id}</div>
              <div className="text-xs text-muted-foreground">{new Date(s.createdAt).toLocaleString()}</div>
            </div>
            <a className="underline text-primary text-xs" href={s.url} target="_blank" rel="noreferrer">
              View JSON
            </a>
          </div>
        ))}
        {!data?.subscribers?.length && <p className="text-sm text-muted-foreground">No subscribers yet.</p>}
      </div>
    </Card>
  )
}
