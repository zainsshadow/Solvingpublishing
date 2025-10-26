"use client"

import { useMemo, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Step = {
  id: string
  title: string
  summary: string
  details: string[]
}

const steps: Step[] = [
  {
    id: "discovery",
    title: "Discovery & Strategy",
    summary: "We clarify goals, audience, and success criteria—aligning creative direction with your vision.",
    details: [
      "Author intake and manuscript review",
      "Positioning, genre fit, competitive scan",
      "Publishing pathway and budget planning",
      "High‑level title and series strategy",
    ],
  },
  {
    id: "craft",
    title: "Editorial Craft",
    summary: "Refine the work through professional editing tailored to your manuscript and goals.",
    details: [
      "Developmental, line, and copy editing options",
      "Sensitivity and fact checking as needed",
      "Editorial schedule with milestone check‑ins",
      "Clean, production‑ready manuscript",
    ],
  },
  {
    id: "production",
    title: "Design & Production",
    summary: "Transform your manuscript into a beautiful book—print, ebook, and audiobook when desired.",
    details: [
      "Cover design and author brand system",
      "Interior layout and ebook conversion",
      "Audiobook casting and production support",
      "Proofing, ISBNs, metadata, and distribution setup",
    ],
  },
  {
    id: "launch",
    title: "Launch & Marketing",
    summary: "Bring your book to market with a plan designed for traction, reviews, and sales.",
    details: [
      "ARC and review workflow, influencer outreach",
      "Retail pages, pricing, and promo calendar",
      "Email, social, and paid experimentation",
      "Launch dashboard with KPI tracking",
    ],
  },
  {
    id: "growth",
    title: "Long‑Term Growth",
    summary: "Sustain momentum with evergreen marketing and brand development for your author career.",
    details: [
      "Backlist optimization and seasonal promos",
      "Audience building and newsletter strategy",
      "Foreign rights and agent outreach options",
      "Roadmap for your next title or series",
    ],
  },
]

export function JourneyRoadmap() {
  const [active, setActive] = useState<Step["id"]>("discovery")
  const currentIndex = steps.findIndex((s) => s.id === active)
  const progress = useMemo(() => Math.round(((currentIndex + 1) / steps.length) * 100), [currentIndex])

  // Simple timeline estimator: words -> weeks
  const [wordsK, setWordsK] = useState(60) // thousands of words
  const estimatedWeeks = useMemo(() => {
    // heuristic baseline: editorial + production + launch prep
    const editorial = Math.ceil(wordsK / 15) // weeks
    const production = 4 // weeks
    const launchPrep = 3 // weeks
    return editorial + production + launchPrep
  }, [wordsK])

  return (
    <section id="journey" aria-labelledby="journey-heading" className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-4xl">
        <h2 id="journey-heading" className="font-serif text-3xl md:text-4xl text-balance">
          Your Journey to Publication
        </h2>
        <p className="mt-3 text-muted-foreground">
          A clear, collaborative path from idea to impact. Explore each stage, see what’s included, and estimate a
          realistic timeline for your manuscript.
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-3 gap-8">
        {/* Left: interactive step tabs */}
        <div className="lg:col-span-2">
          <Tabs value={active} onValueChange={(v) => setActive(v as Step["id"])}>
            <TabsList className="flex flex-wrap gap-2">
              {steps.map((s) => (
                <TabsTrigger key={s.id} value={s.id} className="whitespace-nowrap">
                  {s.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((s) => (
              <TabsContent key={s.id} value={s.id} className="mt-6">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-serif text-2xl">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.summary}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2 list-disc pl-5">
                    {s.details.map((d, i) => (
                      <li key={i} className="text-sm">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Right: progress + estimator */}
        <aside className="rounded-lg border bg-secondary/40 p-6">
          <h4 className="font-serif text-xl">Roadmap Progress</h4>
          <p className="mt-2 text-muted-foreground">
            Step {currentIndex + 1} of {steps.length}
          </p>
          <div className="mt-3">
            <Progress value={progress} aria-label="Roadmap progress" />
          </div>

          <div className="mt-6">
            <h5 className="font-medium">Timeline Estimator</h5>
            <label htmlFor="words-slider" className="sr-only">
              Manuscript length in thousands of words
            </label>
            <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>20k</span>
              <span>{wordsK}k words</span>
              <span>150k</span>
            </div>
            <Slider
              id="words-slider"
              min={20}
              max={150}
              step={5}
              value={[wordsK]}
              onValueChange={(v) => setWordsK(v[0] ?? wordsK)}
              aria-valuemin={20}
              aria-valuemax={150}
              aria-valuenow={wordsK}
              className="mt-2"
            />
            <p className="mt-3">
              Estimated timeline: <span className="font-semibold">{estimatedWeeks} weeks</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Actual timelines vary based on editorial depth, design complexity, and chosen deliverables.
            </p>
          </div>

          <div className="mt-6 flex gap-2">
            <Button asChild>
              <Link href="/contact">Get a detailed plan</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/book-a-meeting">Book a consult</Link>
            </Button>
          </div>
        </aside>
      </div>
    </section>
  )
}
