export function WelcomeLetter() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Oct%2011%2C%202025%2C%2003_43_06%20PM-c1xcY4thRUlW1bFVSAQE4XWBctb3FY.png"
          alt="Solving Publishing logo"
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
        <div>
          <h2 className="font-serif text-2xl">Welcome to Solving Publishing</h2>
          <p className="text-muted-foreground text-sm">A note to new and aspiring authors</p>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          <strong>Dear Author,</strong>
        </p>
        <p>
          We're thrilled to have you join our creative family. At Solving Publishing, we believe every story is a world
          of its own — and every author, a world‑builder. Your imagination is the spark that keeps our forge alive, and
          we're honored to help shape your vision into something truly extraordinary.
        </p>
        <p>
          Our mission is to craft books that reflect the heart and individuality of each writer we work with. We
          understand that no two stories are alike — that's why we take a personalized approach, ensuring your voice,
          message, and magic shine through every page.
        </p>
        <p>Together, we'll bring your dream to life — one word, one chapter, one world at a time.</p>
        <p>
          <strong>Sincerely,</strong>
          <br />
          Solving Publishing
        </p>
      </div>
    </article>
  )
}
