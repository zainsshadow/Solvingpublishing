import { BookingForm } from "@/components/forms/booking-form"

export const metadata = {
  title: "Book a Meeting — Solving Publishing",
  description: "Request a 30-minute consultation to discuss your project.",
}

export default function BookMeetingPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-6">
      <header className="space-y-2 text-center md:text-left">
        <h1 className="font-serif text-3xl md:text-4xl">Book a meeting</h1>
        <p className="text-muted-foreground">
          Tell us your availability and what you'd like to cover. We'll confirm a time via email.
        </p>
      </header>

      {/* Form on left, image on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="max-w-lg mx-auto w-full">
          <BookingForm />
        </div>

        <div className="flex justify-center">
          <img
            src="/images/mg4.png"
            alt="Solving Publishing logo"
            className="max-w-[350px] w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}
