"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/publishing-readiness-checker", label: "Readiness Checker" },
  { href: "/resources", label: "Resources" },
  { href: "/submissions", label: "Submissions" },
  { href: "/about", label: "About" },
  { href: "/faqs", label: "FAQs" },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2011%2C%202025%2C%2003_43_06%20PM-c1xcY4thRUlW1bFVSAQE4XWBctb3FY.png"
            alt="Solving Publishing logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-xl md:text-2xl tracking-tight">Solving</span>
            <span className="text-sm md:text-base text-muted-foreground">Publishing</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm hover:text-primary transition-colors",
                pathname === l.href ? "text-primary font-medium" : "text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/book-a-meeting">Book a Meeting</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
