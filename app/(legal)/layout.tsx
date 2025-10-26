import type { ReactNode } from "react"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 prose prose-slate max-w-4xl">{children}</main>
      <Footer />
    </div>
  )
}
