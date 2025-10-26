import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Service } from "@/lib/content/services"

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-serif">{service.name}</CardTitle>
        <CardDescription>{service.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {service.bullets.slice(0, 4).map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href={`/services/${service.slug}`} className="text-primary text-sm underline">
            Learn more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
