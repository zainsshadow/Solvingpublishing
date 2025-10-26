import { cookies } from "next/headers"
import { AdminGate } from "@/components/admin/admin-gate"
import { PromotionsManager } from "@/components/admin/promotions-manager"
import { NewsletterManager } from "@/components/admin/newsletter-manager"
import { ActivityDashboard } from "@/components/admin/activity-dashboard"

export const metadata = {
  title: "Admin — Site Manager",
}

export default function AdminPage() {
  const isAdmin = cookies().get("admin")?.value === "1"

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-12">
        <AdminGate />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 grid gap-10">
      <section>
        <h1 className="font-serif text-3xl">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-2 text-sm">Manage promotions, flyers, and newsletter subscribers.</p>
      </section>

      <section className="grid gap-4">
        <h2 className="text-xl font-medium">Activity Overview</h2>
        <ActivityDashboard />
      </section>

      <section className="grid gap-4">
        <h2 className="text-xl font-medium">Promotions & Flyers</h2>
        <PromotionsManager />
      </section>

      <section className="grid gap-4">
        <h2 className="text-xl font-medium">Newsletter Subscribers</h2>
        <NewsletterManager />
      </section>
    </div>
  )
}
