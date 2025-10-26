import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const genre = formData.get("genre") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const text = await file.text()
    const lines = text.split("\n")
    const words = text.split(/\s+/).length
    const characters = text.length

    // Simulate analysis (in production, use real NLP libraries)
    const formattingScore = calculateFormattingScore(text, lines)
    const grammarScore = calculateGrammarScore(text)
    const genreFitScore = calculateGenreFit(text, genre)
    const pacingScore = calculatePacing(lines)

    const overallScore = Math.round((formattingScore + grammarScore + genreFitScore + pacingScore) / 4)

    const result = {
      score: overallScore,
      formatting: {
        score: formattingScore,
        issues: getFormattingIssues(text, lines),
      },
      grammar: {
        score: grammarScore,
        issues: getGrammarIssues(text),
      },
      genreFit: {
        score: genreFitScore,
        feedback: getGenreFeedback(text, genre),
      },
      pacing: {
        score: pacingScore,
        feedback: getPacingFeedback(lines, words),
      },
      checklist: getChecklist(formattingScore, grammarScore, genreFitScore),
      nextSteps: getNextSteps(overallScore),
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Analysis error:", error)
    return NextResponse.json({ error: "Failed to analyze manuscript" }, { status: 500 })
  }
}

function calculateFormattingScore(text: string, lines: string[]): number {
  let score = 100
  const doubleSpaces = (text.match(/ {2,}/g) || []).length
  const inconsistentIndents = lines.filter((l) => l.startsWith("  ") && !l.startsWith("    ")).length

  if (doubleSpaces > 10) score -= 15
  if (inconsistentIndents > lines.length * 0.1) score -= 10

  return Math.max(0, score)
}

function calculateGrammarScore(text: string): number {
  let score = 100
  const commonErrors = [/\b(their|there|they're)\b/gi, /\b(your|you're)\b/gi, /\b(its|it's)\b/gi]

  let errorCount = 0
  commonErrors.forEach((pattern) => {
    errorCount += (text.match(pattern) || []).length
  })

  if (errorCount > 5) score -= Math.min(30, errorCount * 2)

  return Math.max(0, score)
}

function calculateGenreFit(text: string, genre: string): number {
  let score = 85
  const lowerText = text.toLowerCase()

  const genreKeywords: Record<string, string[]> = {
    mystery: ["clue", "suspect", "detective", "murder", "investigation"],
    romance: ["love", "heart", "passion", "relationship", "emotion"],
    "sci-fi": ["future", "technology", "space", "alien", "world"],
    fantasy: ["magic", "quest", "dragon", "kingdom", "spell"],
    memoir: ["experience", "memory", "life", "journey", "personal"],
  }

  const keywords = genreKeywords[genre] || []
  const matchedKeywords = keywords.filter((kw) => lowerText.includes(kw)).length

  if (matchedKeywords < keywords.length * 0.5) score -= 15

  return Math.max(0, score)
}

function calculatePacing(lines: string[]): number {
  let score = 90
  const avgLineLength = lines.reduce((sum, l) => sum + l.length, 0) / lines.length

  if (avgLineLength < 20 || avgLineLength > 150) score -= 10

  return Math.max(0, score)
}

function getFormattingIssues(text: string, lines: string[]): string[] {
  const issues: string[] = []

  if ((text.match(/ {2,}/g) || []).length > 10) {
    issues.push("Multiple double spaces detected. Use single spaces between words.")
  }

  const inconsistentIndents = lines.filter((l) => l.startsWith("  ") && !l.startsWith("    ")).length
  if (inconsistentIndents > lines.length * 0.1) {
    issues.push("Inconsistent paragraph indentation. Standardize to 0.5 inches or 4 spaces.")
  }

  if (!text.includes("\n\n")) {
    issues.push("No paragraph breaks detected. Add spacing between paragraphs for readability.")
  }

  return issues
}

function getGrammarIssues(text: string): string[] {
  const issues: string[] = []

  const passiveVoice = (text.match(/\b(was|were|is|are)\s+\w+ed\b/gi) || []).length
  if (passiveVoice > 20) {
    issues.push("High use of passive voice. Consider rewriting for active, engaging prose.")
  }

  if ((text.match(/\b(very|really|quite|just)\b/gi) || []).length > 30) {
    issues.push("Overuse of intensifiers. Remove 'very,' 'really,' etc. for stronger writing.")
  }

  if ((text.match(/\.\.\./g) || []).length > 10) {
    issues.push("Excessive ellipses. Use sparingly for dramatic effect.")
  }

  return issues
}

function getGenreFeedback(text: string, genre: string): string {
  const genreFeedback: Record<string, string> = {
    mystery: "Ensure your plot has clear clues and a satisfying reveal. Consider adding more suspenseful pacing.",
    romance: "Focus on emotional depth and character connection. Ensure the relationship arc feels earned.",
    "sci-fi": "Establish your world rules clearly. Readers need to understand the technology or setting early.",
    fantasy: "Build your magic system consistently. Avoid info-dumping; weave worldbuilding into the narrative.",
    memoir: "Maintain authentic voice and emotional honesty. Balance reflection with vivid scene-setting.",
  }

  return genreFeedback[genre] || "Your manuscript shows promise. Focus on clarity and reader engagement."
}

function getPacingFeedback(lines: string[], words: number): string {
  const avgWordsPerLine = words / lines.length

  if (avgWordsPerLine < 5) {
    return "Your pacing feels choppy. Consider combining shorter lines for better flow."
  } else if (avgWordsPerLine > 30) {
    return "Some sections feel dense. Break up long paragraphs to improve readability."
  }

  return "Your pacing feels well-balanced. Good mix of short and longer passages."
}

function getChecklist(formatting: number, grammar: number, genreFit: number): string[] {
  const checklist: string[] = []

  if (formatting < 85) checklist.push("Fix formatting inconsistencies (spacing, indentation, margins)")
  if (grammar < 85) checklist.push("Proofread for grammar, spelling, and punctuation errors")
  if (genreFit < 80) checklist.push("Strengthen genre-specific elements and conventions")

  checklist.push("Ensure chapter titles and headings are consistent")
  checklist.push("Verify page numbers and table of contents accuracy")
  checklist.push("Review dialogue formatting and punctuation")
  checklist.push("Check for overused words and clichés")

  return checklist
}

function getNextSteps(score: number): string[] {
  if (score < 60) {
    return [
      "Your manuscript needs significant revision. Consider developmental editing to strengthen structure.",
      "Focus on the priority issues identified above before moving to professional services.",
      "We recommend our Developmental Editing package to help refine your work.",
      "Once revised, re-run this checker to track your progress.",
    ]
  } else if (score < 80) {
    return [
      "Your manuscript is on the right track. Polish the identified issues.",
      "Consider our Line Editing or Copy Editing services to refine prose and style.",
      "After revisions, you'll be ready for submission or self-publishing.",
      "Book a consultation to discuss your publishing goals.",
    ]
  } else {
    return [
      "Excellent work! Your manuscript is nearly publication-ready.",
      "Consider our Copy Editing and Proofreading services for final polish.",
      "You're ready to explore cover design, formatting, and distribution options.",
      "Contact us to discuss your publishing timeline and next steps.",
    ]
  }
}
