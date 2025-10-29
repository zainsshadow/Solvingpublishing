import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
<footer className="border-t bg-secondary">
      <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-2">
          <div className="font-serif text-xl">Solving Publishing</div>
          <p className="text-sm text-muted-foreground">
            Full-service and self-publishing partner for authors. Edit. Format. Publish. Promote. Brand.
          </p>
        </div>
        <div>
          <div className="font-medium mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-primary">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="hover:text-primary">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-3">Legal</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <div className="font-medium">Start your project</div>
          <div className="flex gap-2">
            <Button asChild variant="outline">
              <Link href="/book-a-meeting">Book meeting</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Get a quote</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Solving Publishing. All rights reserved.
      </div>
    </footer>
  )
}
