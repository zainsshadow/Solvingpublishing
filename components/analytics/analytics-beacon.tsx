"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function AnalyticsBeacon() {
  const pathname = usePathname()

  useEffect(() => {
    const data = {
      type: "pageview",
      path: pathname || "/",
      referrer: document.referrer || "",
      ua: navigator.userAgent || "",
    }
    try {
      const blob = new Blob([JSON.stringify(data)], { type: "application/json" })
      navigator.sendBeacon?.("/api/analytics/event", blob)
    } catch {
      // no-op
    }
  }, [pathname])

  return null
}
