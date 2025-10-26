export const metadata = {
  title: "Privacy Policy — Solving Publishing",
  description: "How we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  const entity = "Solving Publishing"
  const email = "privacy@solvingpublishing.com"
  const effective = "Effective: October 11, 2025"

  return (
    <article>
      <h1 className="font-serif text-3xl md:text-4xl mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-6">{effective}</p>

      <h2 className="font-serif text-2xl mt-8 mb-2">1) Information We Collect</h2>
      <p>
        We collect information you provide directly (e.g., contact/booking forms: name, email, phone, project details),
        and information gathered automatically through standard web analytics (e.g., device, pages visited).
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">2) How We Use Information</h2>
      <p>
        We use your information to respond to inquiries, provide and improve our services, personalize communications,
        and maintain site security. With your consent, we may also send updates or marketing communications, which you
        can opt out of at any time.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">3) Legal Bases (EEA/UK)</h2>
      <p>
        Where applicable, we rely on one or more legal bases: performance of a contract, legitimate interests (e.g.,
        improving services), consent (e.g., newsletters), and compliance with legal obligations.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">4) Sharing with Service Providers</h2>
      <p>
        We may share information with trusted vendors who help operate our business (e.g., hosting, analytics). They are
        required to protect your data and use it only for services provided to us.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">5) Data Retention</h2>
      <p>
        We keep personal information only as long as necessary to fulfill the purposes outlined in this Policy, unless a
        longer retention period is required or permitted by law.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">6) Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data.
        To exercise rights, contact us at{" "}
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">7) Cookies & Tracking</h2>
      <p>
        We use cookies and similar technologies to understand site usage and improve performance. You can control
        cookies through your browser settings.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">8) Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect personal information. No method of
        transmission or storage is completely secure; use the site at your own risk.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">9) International Transfers</h2>
      <p>
        If data is transferred across borders, we take steps to ensure appropriate safeguards in accordance with
        applicable law.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">10) Children's Privacy</h2>
      <p>
        Our services are not directed to children under 13 (or the relevant age in your jurisdiction), and we do not
        knowingly collect their personal information.
      </p>

      <h2 className="font-serif text-2xl mt-8 mb-2">11) Changes to this Policy</h2>
      <p>We may update this Policy periodically. Material updates will be posted here with a new effective date.</p>

      <h2 className="font-serif text-2xl mt-8 mb-2">12) Contact</h2>
      <p>
        If you have questions about this Policy or our practices, contact {entity} at{" "}
        <a className="underline" href={`mailto:${email}`}>
          {email}
        </a>
        .
      </p>
    </article>
  )
}
