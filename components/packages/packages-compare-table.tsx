import type { PackageTier } from "@/lib/content/packages"

export function PackagesCompareTable({ tiers }: { tiers: PackageTier[] }) {
  const rows = [
    "Editing included",
    "Formatting (print + ebook)",
    "Custom cover",
    "Distribution guidance",
    "Author profiles",
    "ARC/review plan",
    "Audiobook coordination",
    "Illustration support",
    "Marketing plan + ads setup",
    "Agent outreach support",
    "Author website",
    "Registrations & brand kit",
    "Revision rounds",
  ]

  function hasFeature(t: PackageTier, label: string) {
    const match = (text: string) => t.features.some((f) => f.toLowerCase().includes(text))
    switch (label) {
      case "Editing included":
        return match("edit")
      case "Formatting (print + ebook)":
        return match("formatting")
      case "Custom cover":
        return match("cover")
      case "Distribution guidance":
        return match("distribution")
      case "Author profiles":
        return match("author central") || match("goodreads")
      case "ARC/review plan":
        return match("review")
      case "Audiobook coordination":
        return match("audiobook")
      case "Illustration support":
        return match("illustration")
      case "Marketing plan + ads setup":
        return match("marketing") && match("setup")
      case "Agent outreach support":
        return match("agent")
      case "Author website":
        return match("website")
      case "Registrations & brand kit":
        return match("registrations") || match("branding")
      case "Revision rounds":
        return match("revision")
      default:
        return false
    }
  }

  return (
    <div className="overflow-x-auto border rounded-lg">
      <table className="min-w-[800px] w-full text-sm">
        <thead className="bg-secondary">
          <tr>
            <th className="text-left p-3">Feature</th>
            {tiers.map((t) => (
              <th key={t.id} className="text-left p-3">
                {t.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r} className="border-t">
              <td className="p-3 font-medium">{r}</td>
              {tiers.map((t) => (
                <td key={t.id} className="p-3">
                  {hasFeature(t, r) ? "✓" : "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
