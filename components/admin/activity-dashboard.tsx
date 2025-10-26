import { list } from "@vercel/blob"

async function countPrefix(prefix: string) {
  try {
    const { blobs } = await list({ prefix })
    return blobs.length
  } catch {
    return 0
  }
}

async function countEventsLastNDays(days: number) {
  const now = new Date()
  let total = 0
  for (let i = 0; i < days; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const day = d.toISOString().slice(0, 10)
    try {
      const { blobs } = await list({ prefix: `analytics/events/${day}/` })
      total += blobs.length
    } catch {
      // ignore
    }
  }
  return total
}

export async function ActivityDashboard() {
  const [pageviews7d, newsletterTotal, promotionsTotal, leadsTotal, bookingsTotal] = await Promise.all([
    countEventsLastNDays(7),
    countPrefix("newsletter/"),
    countPrefix("promotions/"),
    countPrefix("leads/"),
    countPrefix("bookings/"),
  ])

  const cards: Array<{ label: string; value: number; hint?: string }> = [
    { label: "Pageviews (7d)", value: pageviews7d },
    { label: "Newsletter signups", value: newsletterTotal },
    { label: "Promotions", value: promotionsTotal },
    { label: "Leads", value: leadsTotal },
    { label: "Bookings", value: bookingsTotal },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <div key={c.label} className="rounded-lg border bg-card text-card-foreground p-4">
          <div className="text-sm text-muted-foreground">{c.label}</div>
          <div className="text-2xl font-semibold mt-1">{c.value.toLocaleString()}</div>
          {c.hint ? <div className="text-xs text-muted-foreground mt-1">{c.hint}</div> : null}
        </div>
      ))}
    </div>
  )
}
