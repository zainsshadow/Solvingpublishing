export const metadata = {
  title: "FAQs — Solving Publishing",
  description: "Answers to common questions about our process, timelines, and pricing.",
}

export default function FAQsPage() {
  const faqs = [
    {
      q: "Do you guarantee literary agent placement?",
      a: "No, placement cannot be guaranteed. We provide research, materials, and outreach support to maximize opportunities.",
    },
    {
      q: "Are advertising costs included?",
      a: "Ad spend is not included. We set up campaigns and strategy; media costs are paid directly to platforms.",
    },
    {
      q: "How long does publishing take?",
      a: "Timelines vary by scope and service mix. Typical projects range from 4 to 12 weeks.",
    },
  ]
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      <h1 className="font-serif text-3xl md:text-4xl">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <div className="flex justify-center">
  <img
    src="/images/mg1.png"
    alt="Solving Publishing logo"
    className="w-[70%] max-w-[1500px] h-auto object-contain"
  />
</div>
    </div>
  )
}
