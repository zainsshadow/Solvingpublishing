"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react"

interface AnalysisResult {
  score: number
  formatting: { score: number; issues: string[] }
  grammar: { score: number; issues: string[] }
  genreFit: { score: number; feedback: string }
  pacing: { score: number; feedback: string }
  checklist: string[]
  nextSteps: string[]
}

export default function PublishingReadinessCheckerPage() {
  const [file, setFile] = useState<File | null>(null)
  const [genre, setGenre] = useState("fiction")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState("")

  const genres = [
    "Fiction",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Fantasy",
    "Memoir",
    "Self-Help",
    "Business",
    "Children's",
    "Picture Book",
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      const validTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ]
      if (validTypes.includes(selectedFile.type)) {
        setFile(selectedFile)
        setError("")
      } else {
        setError("Please upload a PDF, DOCX, or TXT file.")
        setFile(null)
      }
    }
  }

  const analyzeManuscript = async () => {
    if (!file) {
      setError("Please select a file to analyze.")
      return
    }

    setLoading(true)
    setError("")

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("genre", genre)

      const response = await fetch("/api/analyze/manuscript", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to analyze manuscript")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError("Error analyzing manuscript. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Publishing Readiness Checker</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Get a comprehensive assessment of your manuscript's readiness for publication. Our tool analyzes formatting,
          grammar, genre fit, and pacing to give you an actionable roadmap for improvement.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Upload Section */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload Your Manuscript</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors">
                <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-3" aria-hidden="true" />
                <label className="cursor-pointer">
                  <span className="font-medium text-primary">Click to upload</span>
                  <span className="text-muted-foreground"> or drag and drop</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.txt"
                    className="hidden"
                    aria-label="Upload manuscript"
                  />
                </label>
                <p className="text-xs text-muted-foreground mt-2">PDF, DOCX, or TXT (max 50MB)</p>
              </div>

              {file && (
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{file.name}</span>
                </div>
              )}

              <div className="space-y-3">
                <label className="block text-sm font-medium">Select Your Genre</label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                >
                  {genres.map((g) => (
                    <option key={g} value={g.toLowerCase()}>
                      {g}
                    </option>
                  ))}
                </select>
              </div>

              {error && (
                <div className="flex items-start gap-2 p-3 bg-red-50 rounded-md text-red-900 text-sm">
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}

              <Button onClick={analyzeManuscript} disabled={!file || loading} className="w-full">
                {loading ? "Analyzing..." : "Analyze Manuscript"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What We Check</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <div className="font-medium mb-1">Formatting</div>
                <p className="text-muted-foreground">Font consistency, spacing, margins, and chapter structure</p>
              </div>
              <div>
                <div className="font-medium mb-1">Grammar & Style</div>
                <p className="text-muted-foreground">Spelling, punctuation, readability, and passive voice usage</p>
              </div>
              <div>
                <div className="font-medium mb-1">Genre Fit</div>
                <p className="text-muted-foreground">Alignment with genre conventions and reader expectations</p>
              </div>
              <div>
                <div className="font-medium mb-1">Pacing & Structure</div>
                <p className="text-muted-foreground">Story flow, chapter balance, and narrative momentum</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="mt-12 space-y-8">
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{result.score}</div>
                  <div className="text-sm font-medium">Overall Readiness Score</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{result.formatting.score}</div>
                  <div className="text-sm font-medium">Formatting</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{result.grammar.score}</div>
                  <div className="text-sm font-medium">Grammar & Style</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{result.genreFit.score}</div>
                  <div className="text-sm font-medium">Genre Fit</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" aria-hidden="true" />
                Detailed Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {result.formatting.issues.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Formatting Issues</h3>
                  <ul className="space-y-1 text-sm">
                    {result.formatting.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result.grammar.issues.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Grammar & Style Suggestions</h3>
                  <ul className="space-y-1 text-sm">
                    {result.grammar.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h3 className="font-medium mb-2">Genre Fit Analysis</h3>
                <p className="text-sm text-muted-foreground">{result.genreFit.feedback}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Pacing & Structure</h3>
                <p className="text-sm text-muted-foreground">{result.pacing.feedback}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-1" aria-label={`Checklist item ${i + 1}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {result.nextSteps.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to take the next step? Our team can help you refine your manuscript and prepare for publication.
                </p>
                <Button asChild>
                  <a href="/contact">Get a Custom Quote</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
