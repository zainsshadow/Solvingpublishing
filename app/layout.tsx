import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"

import { Suspense } from "react"
import "./globals.css"
import { Playfair_Display, Geist as V0_Font_Geist, Source_Serif_4 as V0_Font_Source_Serif_4 } from "next/font/google"

// Initialize fonts
const _geist = V0_Font_Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})
const _sourceSerif_4 = V0_Font_Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

// Import new components
import { AnalyticsBeacon } from "@/components/analytics/analytics-beacon"

export const metadata: Metadata = {
  title: "Solving Publishing — Self & Full-Service Book Publishing",
  description: "Solving Publishing helps authors edit, format, publish, and promote their books with expert guidance.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable}`}>
      <body className={`font-sans ${_geist.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          {/* Global pageview beacon */}
          <AnalyticsBeacon />
          {/* Analytics component */}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
