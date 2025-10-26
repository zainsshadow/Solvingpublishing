"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Users, Download, Filter, Search } from "lucide-react"

const RESOURCE_CATEGORIES = [
  { id: "writing", label: "Writing & Editing", icon: BookOpen },
  { id: "publishing", label: "Publishing & Legal", icon: FileText },
  { id: "marketing", label: "Marketing & Promotion", icon: Users },
  { id: "branding", label: "Branding & Platform", icon: Users },
  { id: "business", label: "Business & Finances", icon: FileText },
]

const RESOURCE_TYPES = [
  { id: "template", label: "Template", color: "bg-blue-100 text-blue-800" },
  { id: "guide", label: "Guide", color: "bg-green-100 text-green-800" },
  { id: "checklist", label: "Checklist", color: "bg-yellow-100 text-yellow-800" },
  { id: "video", label: "Video", color: "bg-purple-100 text-purple-800" },
  { id: "interview", label: "Interview", color: "bg-pink-100 text-pink-800" },
]

const RESOURCES = [
  {
    id: 1,
    title: "Novel Manuscript Template",
    category: "writing",
    type: "template",
    description: "Professionally formatted template with chapter breaks, scene markers, and style guidelines.",
    access: "free",
    downloads: 1240,
  },
  {
    id: 2,
    title: "Self-Publishing Contract Template",
    category: "publishing",
    type: "template",
    description: "Comprehensive agreement covering rights, royalties, and payment terms for self-published works.",
    access: "premium",
    downloads: 856,
  },
  {
    id: 3,
    title: "6-Month Book Launch Plan",
    category: "marketing",
    type: "guide",
    description: "Step-by-step timeline for pre-launch, launch, and post-launch marketing activities.",
    access: "free",
    downloads: 2103,
  },
  {
    id: 4,
    title: "Author Branding Worksheet",
    category: "branding",
    type: "guide",
    description: "Interactive exercises to define your author brand, voice, and platform identity.",
    access: "free",
    downloads: 1567,
  },
  {
    id: 5,
    title: "Manuscript Submission Checklist",
    category: "publishing",
    type: "checklist",
    description: "Complete checklist for preparing and submitting your manuscript to publishers.",
    access: "free",
    downloads: 3421,
  },
  {
    id: 6,
    title: "Publishing Budget Planner",
    category: "business",
    type: "template",
    description: "Excel spreadsheet to track editing, design, marketing, and distribution costs.",
    access: "free",
    downloads: 1892,
  },
  {
    id: 7,
    title: "Social Media Content Calendar",
    category: "marketing",
    type: "template",
    description: "Monthly calendar template for planning book-related social media posts and campaigns.",
    access: "free",
    downloads: 2456,
  },
  {
    id: 8,
    title: "Copyright & Rights Guide",
    category: "publishing",
    type: "guide",
    description: "In-depth guide covering copyright basics, registration, and managing subsidiary rights.",
    access: "premium",
    downloads: 945,
  },
  {
    id: 9,
    title: "Building Your Author Platform",
    category: "branding",
    type: "video",
    description: "30-minute video tutorial on creating a professional author website and online presence.",
    access: "premium",
    downloads: 1203,
  },
  {
    id: 10,
    title: "Tax Considerations for Authors",
    category: "business",
    type: "guide",
    description: "Guide to deductions, quarterly taxes, and financial planning for self-employed authors.",
    access: "premium",
    downloads: 678,
  },
  {
    id: 11,
    title: "Interview: From Debut to Bestseller",
    category: "marketing",
    type: "interview",
    description: "Exclusive interview with a bestselling author sharing their launch strategy and lessons learned.",
    access: "premium",
    downloads: 523,
  },
  {
    id: 12,
    title: "Email Newsletter Strategy",
    category: "marketing",
    type: "guide",
    description: "Complete guide to building and maintaining an engaged reader email list.",
    access: "free",
    downloads: 1834,
  },
]

export default function ResourcesClient() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedAccess, setSelectedAccess] = useState<string | null>(null)

  const filteredResources = useMemo(() => {
    return RESOURCES.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || resource.category === selectedCategory
      const matchesType = !selectedType || resource.type === selectedType
      const matchesAccess = !selectedAccess || resource.access === selectedAccess
      return matchesSearch && matchesCategory && matchesType && matchesAccess
    })
  }, [searchTerm, selectedCategory, selectedType, selectedAccess])

  return (
    <>
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl text-balance mb-4">Author Resources Library</h1>
          <p className="text-lg text-muted-foreground mb-6">
            Access a comprehensive collection of templates, guides, checklists, and tools designed to support you at
            every stage of your publishing journey—from writing and editing to marketing and building your author
            platform.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 border-t">
        <div className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Filter className="h-4 w-4" aria-hidden="true" />
              Filter by Category
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
              >
                All Categories
              </Button>
              {RESOURCE_CATEGORIES.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium mt-4">
              <Filter className="h-4 w-4" aria-hidden="true" />
              Filter by Type
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedType === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedType(null)}
              >
                All Types
              </Button>
              {RESOURCE_TYPES.map((type) => (
                <Button
                  key={type.id}
                  variant={selectedType === type.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.label}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm font-medium mt-4">
              <Filter className="h-4 w-4" aria-hidden="true" />
              Filter by Access
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedAccess === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAccess(null)}
              >
                All Access Levels
              </Button>
              <Button
                variant={selectedAccess === "free" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAccess("free")}
              >
                Free
              </Button>
              <Button
                variant={selectedAccess === "premium" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAccess("premium")}
              >
                Premium
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredResources.length} of {RESOURCES.length} resources
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const typeInfo = RESOURCE_TYPES.find((t) => t.id === resource.type)
            const categoryInfo = RESOURCE_CATEGORIES.find((c) => c.id === resource.category)
            return (
              <div key={resource.id} className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg">{resource.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{categoryInfo?.label}</p>
                  </div>
                  <Badge variant="outline" className={typeInfo?.color}>
                    {typeInfo?.label}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Download className="h-3 w-3" aria-hidden="true" />
                    {resource.downloads.toLocaleString()} downloads
                  </div>
                  {resource.access === "premium" && (
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Premium
                    </Badge>
                  )}
                </div>
                <Button className="w-full mt-4" size="sm">
                  Download
                </Button>
              </div>
            )
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No resources found matching your filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory(null)
                setSelectedType(null)
                setSelectedAccess(null)
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 py-12 border-t">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Access Levels</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="font-medium mb-3">Free Resources</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Essential templates, guides, and checklists to get you started on your publishing journey.
              </p>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li>Manuscript templates</li>
                <li>Basic guides and checklists</li>
                <li>Marketing templates</li>
                <li>Branding worksheets</li>
              </ul>
            </div>
            <div className="rounded-lg border p-6 bg-card">
              <h3 className="font-medium mb-3">Premium Resources</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced tools, legal templates, video tutorials, and expert interviews for serious authors.
              </p>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li>Legal contracts & agreements</li>
                <li>Video tutorials & webinars</li>
                <li>Expert interviews & case studies</li>
                <li>Advanced marketing strategies</li>
              </ul>
              <Button className="w-full mt-4" size="sm">
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 border-t">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">New This Month</h2>
          <p className="text-muted-foreground mb-6">
            Check back regularly for fresh resources, seasonal guides, and expert insights to support your publishing
            goals.
          </p>
          <Button asChild>
            <Link href="/contact">Request a Resource</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
