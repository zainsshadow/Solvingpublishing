export const metadata = {
  title: "About — Solving Publishing",
  description: "Our mission is to help authors publish confidently and build lasting brands.",
}

import { WelcomeLetter } from "@/components/shared/welcome-letter"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-10">
      <h1 className="font-serif text-3xl md:text-4xl">About Solving Publishing</h1>

      <WelcomeLetter />
    </div>
  )
}
