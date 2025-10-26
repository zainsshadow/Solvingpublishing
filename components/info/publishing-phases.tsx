"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpenCheck, Layout, ImageIcon, Sparkles } from "lucide-react"

export function PublishingPhases() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="phase-1">
        <AccordionTrigger className="text-left">
          <span className="inline-flex items-center gap-2">
            <BookOpenCheck className="h-4 w-4 text-primary" aria-hidden="true" />
            Phase 1: Professional Editing – Refining Your Manuscript
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 text-sm">
          <div>
            <div className="font-medium">Copy Editing</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Final polish for correctness and clarity at the sentence level</li>
              <li>
                Proofreading for spelling, grammar, punctuation; consistency checks (e.g., Chicago Manual of Style)
              </li>
              <li>Benefit: Eliminates errors and ensures professional presentation</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Line Editing & Structural Review</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>All Copy Editing services plus tone, flow, pacing, and structure analysis</li>
              <li>Marginal commentary and editorial review highlighting strengths and revisions</li>
              <li>Benefit: Elevates prose and maintains reader engagement</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Developmental Editing</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Comprehensive evaluation and restructuring for narrative strength</li>
              <li>Arc analysis, POV and dialogue review, actionable revision plan, chapter breakdown</li>
              <li>Two-pass edit plus 1:1 consultation; transforms the manuscript into a compelling story</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="phase-2">
        <AccordionTrigger className="text-left">
          <span className="inline-flex items-center gap-2">
            <Layout className="h-4 w-4 text-primary" aria-hidden="true" />
            Phase 2: Professional Formatting for All Formats
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 text-sm">
          <div>
            <div className="font-medium">Standard Formatting</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Clean layout for text-focused books; typesetting, margins, headers/footers</li>
              <li>Compliance for Amazon KDP, IngramSpark, Apple Books</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Enhanced Formatting</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Standard Formatting plus custom chapter styles, themed breaks, charts/diagrams</li>
              <li>Drop caps, pull quotes, advanced image/table placement, licensed fonts support</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Premium Design‑Intensive</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Custom InDesign/Photoshop layouts, hi‑res image optimization</li>
              <li>Complex flows (multi-column, full‑bleed), specialty effects, design consultation</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="phase-3">
        <AccordionTrigger className="text-left">
          <span className="inline-flex items-center gap-2">
            <ImageIcon className="h-4 w-4 text-primary" aria-hidden="true" />
            Phase 3: Captivating Cover Design – First Impressions
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 text-sm">
          <div>
            <div className="font-medium">Professional Cover Design</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Genre analysis, concept development, stock imagery, custom typography</li>
              <li>Basic spine/back layout, 2 concepts + 2 revisions, KDP‑compliant deliverables</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Premium Custom Cover Design</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Creative consultation, custom illustration or photo manipulation</li>
              <li>Advanced typography, detailed spine/back, 5 concepts + 3 revisions, 3D mockups</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Bespoke Luxury Cover Design</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Original artwork or photoshoot, hand‑lettered typography, luxury finishes</li>
              <li>Unlimited concepts & revisions, full source files and marketing asset suite</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="phase-4">
        <AccordionTrigger className="text-left">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
            Phase 4: Design & Illustration – Bringing Your World to Life
          </span>
        </AccordionTrigger>
        <AccordionContent className="space-y-4 text-sm">
          <p className="text-muted-foreground">
            From AI‑enhanced visuals to hand‑drawn art and premium 3D, we tailor illustration pipelines to your book’s
            needs.
          </p>
          <div>
            <div className="font-medium">Package 1: AI‑Enhanced Illustration & Design</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Creative direction → AI generation/curation → professional enhancement</li>
              <li>3 revisions per illustration, print‑ready files, full commercial rights</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Package 2: Custom Hand‑Drawn Illustration</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Storyboards, character/concept design, sketches & approval, final renders</li>
              <li>5 revisions per illustration, source files on request, full rights</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Package 3: Premium 3D & High‑Definition Design</div>
            <ul className="list-disc pl-5 mt-1 text-muted-foreground">
              <li>Concept development, 3D modeling/rigging, cinematic renders</li>
              <li>Unlimited revisions, character sheets, animation‑ready assets as applicable</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
