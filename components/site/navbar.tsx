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
      {/* remove the Tailwind 'container' to avoid constraining the logo */}
      <div className="mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo section */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/logo.png"
            alt="Solving Publishing logo"
            className=" w-[96px] object-contain  "
          />
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm hover:text-primary transition-colors",
                pathname === l.href ? "text-primary font-medium" : "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Action buttons */}
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
