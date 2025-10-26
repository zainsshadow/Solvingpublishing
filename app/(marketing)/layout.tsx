import type { ReactNode } from "react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Newsletter modal removed */}
    </div>
  )
}
