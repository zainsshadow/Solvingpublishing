import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { PackageTier } from "@/lib/content/packages"

export function PackageCard({ tier }: { tier: PackageTier }) {
  return (
    <Card className="h-full border-primary/20">
      <CardHeader>
        <CardTitle className="font-serif">{tier.name}</CardTitle>
        <CardDescription>{tier.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-semibold text-foreground">{tier.price}</div>
        <ul className="mt-4 space-y-2 text-sm">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/contact?interest=${encodeURIComponent(tier.name)}`}>{tier.cta}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
