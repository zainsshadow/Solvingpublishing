export const metadata = {
  title: "Terms & Conditions — Solving Publishing",
  description: "Terms governing the use of our services and website.",
}

export default function TermsPage() {
  const entity = "Solving Publishing"
  const email = "hello@solvingpublishing.com"
  const jurisdiction = "State of [Your State], USA" // TODO: replace with your jurisdiction
  const effective = "Effective: October 11, 2025"

  return (
    <article>
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Terms & Conditions</h1>
      <p className="text-muted-foreground mb-6">{effective}</p>

      <h2 className="font-serif text-2xl mt-8 mb-2">1) Acceptance of Terms</h2>
      <p>
        These Terms & Conditions (the "Terms") govern your access to and use of services provided by {entity} ("we,"
        "us," or "our"). By engaging our services or using our website, you agree to be bound by these Terms.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">2) Services Scope</h2>
      <p>
        We provide publishing-related services, including but not limited to editing, formatting, cover design,
        distribution guidance, audiobook coordination, illustration, marketing support, literary agent outreach
        assistance, and author branding. Deliverables are described in proposals, statements of work, or package
        descriptions. Unless expressly stated, we do not guarantee any specific commercial outcome, sales volume,
        rankings, reviews, or agent placement.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">3) Quotes & Pricing</h2>
      <p>
        Prices published on our website are for reference and may be updated at any time. Final quotes depend on
        manuscript length, complexity, and scope. Third-party fees (e.g., printing, distribution platforms, ad spend,
        narrator PFH rates) are not included unless expressly stated.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">4) Payments & Refunds</h2>
      <p>
        Payment schedules are outlined in proposals or invoices. Deposits are typically non‑refundable once work begins.
        In the event of cancellation, you will be billed for time and materials incurred to date. Any refunds are at our
        reasonable discretion and subject to applicable law.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">5) Client Responsibilities</h2>
      <p>
        You are responsible for providing accurate information, timely feedback, and all necessary materials in suitable
        formats. Delays in feedback or material delivery may extend timelines and could incur change fees if scope is
        impacted.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">6) Intellectual Property</h2>
      <p>
        You retain ownership of your manuscript and any pre‑existing materials you provide. Upon full payment, we grant
        you a license to use deliverables we create for the intended purpose. We may reference non‑confidential aspects
        of the project in our portfolio unless you notify us in writing to withhold attribution.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">7) Third‑Party Platforms & Distribution</h2>
      <p>
        We may assist with account setup and submissions to third‑party platforms (e.g., KDP, IngramSpark, ACX,
        Goodreads). You are responsible for complying with those platforms' terms and for any associated fees. We are
        not responsible for platform outages, policy changes, or decisions outside our control.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">8) Marketing & Advertising</h2>
      <p>
        We provide strategy and setup services for campaigns. Media costs and advertising budgets are separate and paid
        directly to the platforms. Performance can vary and cannot be guaranteed. Testimonials and case studies
        represent individual experiences.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">9) Literary Agent Outreach Disclaimer</h2>
      <p>
        We do not guarantee representation or publication offers. Our role is to prepare materials, research prospects,
        and facilitate outreach. Outcomes depend on factors beyond our control, including market conditions and
        agent/editor preferences.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">10) Timelines & Revisions</h2>
      <p>
        Estimated schedules are provided in good faith and depend on your timely feedback. Revision rounds are limited
        as stated in your package or proposal. Additional revisions or scope changes may require a change order and
        additional fees.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">11) Confidentiality</h2>
      <p>
        We will take reasonable measures to safeguard your confidential information and unpublished materials. We may
        share information with vetted service providers under confidentiality obligations when necessary to deliver the
        services.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">12) Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for indirect, incidental, special, consequential, or
        punitive damages, or for loss of profits, revenues, data, or goodwill. Our aggregate liability is limited to
        amounts you have paid for the services giving rise to the claim in the twelve (12) months preceding the event.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">13) Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from claims arising from materials you provide, your misuse of the
        services, or your violation of any applicable laws or third‑party rights.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">14) Termination</h2>
      <p>
        Either party may terminate for material breach if the breach is not cured within a reasonable period after
        written notice. Upon termination, you will pay for work completed to date and reasonable wind‑down costs.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">15) Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of the {jurisdiction}, without regard to conflict‑of‑laws principles. Any
        disputes shall be resolved in the courts located in that jurisdiction, unless otherwise agreed in writing.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">16) Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be posted on this page with a new effective
        date.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">17) Contact</h2>
      <p>
        For questions, contact us at{" "}
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
    </article>
  )
}
