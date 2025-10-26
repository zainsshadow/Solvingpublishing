import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-12 grid gap-10">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl">Author Submissions</h1>
        <p className="text-muted-foreground">
          We're excited to review your work. Please follow the guidelines below to help us evaluate your manuscript
          efficiently.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-xl">Submission Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 text-sm leading-relaxed">
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                Include a brief query or cover letter introducing your book, genre, target audience, and word count.
              </li>
              <li>
                Submit the first 3 chapters or first 30–50 pages, plus a 1–2 page synopsis that reveals the ending.
              </li>
              <li>
                Format: 12pt, legible font, double-spaced, 1 inch margins. Include page numbers and your contact info.
              </li>
              <li>
                Accepted file types: PDF or DOCX preferred; we also accept RTF. Please do not send ZIP files or external
                links.
              </li>
              <li>Attach a signed NDA template if you'd like additional confidentiality beyond our standard terms.</li>
              <li>
                Email submissions to{" "}
                <a href="mailto:submissions@solvingpublishing.com" className="underline">
                  submissions@solvingpublishing.com
                </a>{" "}
                with subject "Author Submission — [Your Name] — [Title]".
              </li>
              <li>
                Optional: You may also use our contact page to share your goals or timeline:{" "}
                <Link href="/contact" className="underline">
                  Contact form
                </Link>
                .
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Download NDA</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm">
            <p>
              Use our mutual Non‑Disclosure Agreement if you prefer to submit under additional confidentiality.
              Download, fill in your details, sign, and attach to your email along with your manuscript.
            </p>
            <div className="flex gap-2">
              <Button asChild>
                <a href="/docs/author-nda.txt" download>
                  Download NDA
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
            <p className="text-muted-foreground text-xs">
              Note: You can also send your own NDA. We'll review and countersign if acceptable.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-3">
        <h2 className="text-xl font-medium">What to Expect</h2>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>Initial acknowledgment within 3–5 business days.</li>
          <li>Editorial evaluation typically within 2–4 weeks.</li>
          <li>Next steps may include a call, sample edit, or proposal with scope and timeline.</li>
        </ul>
      </section>
    </div>
  )
}
