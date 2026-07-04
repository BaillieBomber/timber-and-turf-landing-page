"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Scissors,
  Leaf,
  PhoneCall,
  Satellite,
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react"

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)

  const openDialog = () => setDialogOpen(true)

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      {/* ─── Booking Dialog ─── */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold tracking-tight text-slate-900">
              Pick a Time That Works
            </DialogTitle>
            <DialogDescription className="text-slate-500">
              Free 5-minute call &bull; No obligation
            </DialogDescription>
          </DialogHeader>
          <div className="mt-2 rounded-lg border-2 border-dashed border-stone-200 bg-stone-50 px-6 py-10 text-center text-sm text-slate-400">
            [Calendar Widget Placeholder — Marcus would pick his time here]
          </div>
        </DialogContent>
      </Dialog>

      {/* ─── Sticky Nav ─── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a
            href="#"
            className="text-slate-900 font-semibold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded"
          >
            Timber &amp; Turf Co.
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a
              href="#services"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded"
            >
              Our Services
            </a>
            <a
              href="#why-us"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded"
            >
              Why Us
            </a>
            <a
              href="#reviews"
              className="text-sm text-slate-500 hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded"
            >
              Reviews
            </a>
          </nav>

          <Button
            size="sm"
            onClick={openDialog}
            className="bg-amber-500 text-slate-950 hover:bg-amber-600 transition-colors rounded-lg font-medium shadow-none"
          >
            Book a Call
          </Button>
        </div>
      </header>

      <main>
        {/* ─── Hero ─── */}
        <section className="bg-stone-50 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Text column */}
              <div className="flex-1 flex flex-col items-start gap-6">
                {/* Social proof badge */}
                <div className="flex items-center gap-2 text-sm text-slate-500 bg-white border border-stone-200 rounded-full px-4 py-1.5">
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </span>
                  <span>5.0 Rated by Local Homeowners</span>
                </div>

                <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 text-balance leading-tight">
                  Your Weekend Belongs to You. We&apos;ll Handle the Yard.
                </h1>

                <p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                  Premium mowing, precision garden maintenance, and immaculate upkeep for busy homeowners. Get your Saturdays back.
                </p>

                <div className="flex flex-col items-start gap-2.5">
                  <Button
                    size="lg"
                    onClick={openDialog}
                    className="bg-amber-500 text-slate-950 hover:bg-amber-600 transition-colors rounded-lg font-semibold text-base px-8 shadow-none"
                  >
                    Schedule Your Free Estimate Call
                  </Button>
                  <p className="text-sm text-slate-400 pl-1">
                    Takes 2 minutes &bull; Speak with a local specialist
                  </p>
                </div>
              </div>

              {/* Visual panel */}
              <div className="flex-1 w-full" aria-hidden="true">
                <div className="h-72 md:h-[420px] w-full rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-700 to-stone-300 relative overflow-hidden">
                  {/* Subtle inner texture */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white/30 text-xs font-medium tracking-widest uppercase select-none">
                    Modern Lawn Care. Effortless Weekends.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section id="services" className="bg-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-center mb-14">
              Impeccable Care, Every Single Week.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Scissors,
                  title: "Precision Lawn Care",
                  body: "Scheduled weekly or bi-weekly mowing, crisp edging, and full cleanup.",
                },
                {
                  icon: Leaf,
                  title: "Weeding & Beds",
                  body: "Comprehensive weed control, organic mulching, and shrub pruning to keep your property perfectly manicured.",
                },
                {
                  icon: PhoneCall,
                  title: "Transparent Pricing",
                  body: "No guessing games. We chat on the phone, look at your property size via satellite data, and hand you a firm price.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <Card
                  key={title}
                  className="border border-stone-200 bg-stone-50 hover:shadow-md transition-shadow rounded-xl"
                >
                  <CardHeader className="flex flex-col gap-4 pb-2">
                    <div className="size-10 flex items-center justify-center rounded-lg bg-emerald-50 border border-emerald-100">
                      <Icon className="size-5 text-emerald-800" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-slate-900">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-500 leading-relaxed text-sm">
                      {body}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why Us ─── */}
        <section id="why-us" className="bg-stone-50 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                A Modern Standard for Home Care.
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Founded by Julian Vance, we&apos;re a boutique team of six on a mission: Modern Lawn Care. Effortless Weekends.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {[
                {
                  icon: Satellite,
                  title: "Satellite-Measured Quotes",
                  body: "Firm pricing before we ever step on your lawn.",
                },
                {
                  icon: CalendarCheck,
                  title: "Set-and-Forget Scheduling",
                  body: "Your crew arrives the same day, every week.",
                },
                {
                  icon: ShieldCheck,
                  title: "Fully Insured & Vetted",
                  body: "A professional team, not a side hustle.",
                },
                {
                  icon: Sparkles,
                  title: "White-Glove Standards",
                  body: "Gates closed, clippings gone, photo updates after every visit.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex flex-col gap-3">
                  <div className="size-10 flex items-center justify-center rounded-lg bg-white border border-stone-200 shadow-sm">
                    <Icon className="size-5 text-emerald-800" />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm leading-snug">{title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Reviews ─── */}
        <section id="reviews" className="bg-white py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-14">
            {/* Featured blockquote */}
            <figure className="max-w-2xl text-center flex flex-col items-center gap-5">
              <div className="flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-amber-400 stroke-none" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed text-balance">
                &ldquo;The team at Timber &amp; Turf completely changed my weekends. I used to spend Saturday mornings fighting a broken mower; now I just enjoy my yard.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-slate-400">
                — David K., Suburban Homeowner
              </figcaption>
            </figure>

            {/* Mini review cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
              {[
                { name: "Sarah M.", quote: "Immaculate edging, every single time." },
                { name: "Tom R.", quote: "They actually show up when they say they will." },
                { name: "Priya N.", quote: "The quote was the quote. No surprises." },
              ].map(({ name, quote }) => (
                <div
                  key={name}
                  className="bg-stone-50 border border-stone-200 rounded-xl px-5 py-5 flex flex-col gap-2.5"
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{quote}&rdquo;</p>
                  <p className="text-xs text-slate-400 font-medium mt-auto">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Conversion Banner ─── */}
        <section className="bg-slate-900 py-20 md:py-24">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-balance">
              Ready for a Flawless Lawn?
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-xl">
              Don&apos;t spend another Saturday sweating over yard work. Let&apos;s map out a custom plan for your property over a quick, 5-minute call.
            </p>
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-amber-500 text-slate-950 hover:bg-amber-600 transition-colors rounded-lg font-semibold text-base px-8 mt-2 shadow-none"
            >
              Book Your Free Call Now
            </Button>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-lg tracking-tight">
                Timber &amp; Turf Co.
              </span>
              <p className="text-sm leading-relaxed">
                Premium residential lawn care and garden maintenance.
              </p>
            </div>

            {/* Service Areas */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-sm font-semibold">Service Areas</h3>
              <ul className="flex flex-col gap-1.5 text-sm">
                {["North Suburbs", "West End", "Oak Ridge", "Pinecrest"].map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-sm font-semibold">Navigation</h3>
              <ul className="flex flex-col gap-1.5 text-sm">
                {[
                  { label: "Services", href: "#services" },
                  { label: "Why Us", href: "#why-us" },
                  { label: "Reviews", href: "#reviews" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span>&copy; {new Date().getFullYear()} Timber &amp; Turf Co. All rights reserved.</span>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 rounded"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
