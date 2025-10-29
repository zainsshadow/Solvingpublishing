export function WelcomeLetter() {
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <div className="flex items-center gap-4">
        <img
          src="/images/Solving_Publishing_logo-removebg-preview.png"
          alt="Solving Publishing logo"
          width={64}
          height={64}
          className="h-16 w-16 object-contain"
        />
        <div>
          <h2 className="font-serif text-2xl">Welcome to Solving Publishing</h2>
        </div>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          <strong>Dear Author,</strong>
        </p>
        <p>
          At Solving Publishing, we believe every story deserves to be seen,
          read, and remembered. We’re not just a publishing agency — we’re your
          creative partners, guiding authors from idea to impact. Whether you’re
          preparing your first manuscript or building a full-scale author brand,
          our mission is to make publishing simpler, smarter, and beautifully
          done. Our team of editors, designers, animators, and marketers work
          hand-in-hand to transform manuscripts into meaningful books that
          resonate with readers. From stunning covers and immersive book
          trailers to strategic launches and marketing, we help authors not just
          publish — but stand out. What sets us apart is our approach: ✨ Human
          creativity meets smart systems. We combine storytelling expertise with
          digital precision — from our Publishing Readiness Checker, which
          highlights what your manuscript needs, to guided resources that help
          you move forward confidently. Whether you’re an indie author or an
          established writer, Solving Publishing offers clarity where publishing
          often feels complicated. We don’t just publish books — we solve
          publishing.
        </p>
        <p>
          Our mission is to craft books that reflect the heart and individuality
          of each writer we work with. We understand that no two stories are
          alike — that's why we take a personalized approach, ensuring your
          voice, message, and magic shine through every page.
        </p>
        <p>
          Together, we'll bring your dream to life — one word, one chapter, one
          world at a time.
        </p>
        <p className="mt-6">
          <strong>Our Mission</strong>
          <br />
          To make publishing accessible, transparent, and creatively fulfilling
          — empowering every author to share their story with confidence and
          control.
        </p>
        <p className="mt-6">
          <strong>Our Vision</strong>
          <br />A world where authors are equipped, inspired, and empowered to
          publish their stories beautifully and independently.
        </p>
      </div>
    </article>
  );
}
