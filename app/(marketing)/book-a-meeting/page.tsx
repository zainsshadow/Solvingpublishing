import { BookingForm } from "@/components/forms/booking-form"

export const metadata = {
  title: "Book a Meeting — Solving Publishing",
  description: "Request a 30-minute consultation to discuss your project.",
}

export default function BookMeetingPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl">Book a meeting</h1>
        <p className="text-muted-foreground">
          Tell us your availability and what you'd like to cover. We'll confirm a time via email.
        </p>
      </header>

      <div className="max-w-2xl">
        <BookingForm />
      </div>
    </div>
  )
}
