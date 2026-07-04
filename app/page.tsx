"use client"

import { useState } from "react"
import Image from "next/image"
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

/* ─── Decorative SVG Elements ─── */

function GrassBlades({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 80 Q8 55 15 30 Q20 10 18 0 Q24 20 22 45 Q20 65 22 80Z" fill="currentColor" opacity="0.7" />
      <path d="M28 80 Q24 50 32 20 Q38 0 36 -5 Q44 18 40 48 Q37 68 40 80Z" fill="currentColor" opacity="0.9" />
      <path d="M50 80 Q46 58 52 35 Q56 15 54 5 Q61 22 58 50 Q56 68 60 80Z" fill="currentColor" opacity="0.6" />
      <path d="M72 80 Q68 52 76 25 Q82 5 80 -2 Q88 18 84 48 Q81 66 84 80Z" fill="currentColor" opacity="0.85" />
      <path d="M94 80 Q90 55 98 28 Q104 8 102 0 Q110 20 106 50 Q103 68 108 80Z" fill="currentColor" opacity="0.7" />
    </svg>
  )
}

function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M40 100 Q40 60 40 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M40 65 Q20 55 10 35 Q8 20 20 18 Q35 16 40 40 Q38 52 40 65Z" fill="currentColor" opacity="0.8" />
      <path d="M40 50 Q60 38 68 18 Q70 4 58 4 Q44 4 40 28 Q40 40 40 50Z" fill="currentColor" opacity="0.6" />
      <path d="M40 82 Q24 72 18 55 Q16 44 26 43 Q38 42 40 62 Q40 72 40 82Z" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function FloralAccent({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="80" cy="80" rx="60" ry="25" fill="currentColor" opacity="0.08" />
      <ellipse cx="80" cy="80" rx="60" ry="25" fill="currentColor" opacity="0.08" transform="rotate(60 80 80)" />
      <ellipse cx="80" cy="80" rx="60" ry="25" fill="currentColor" opacity="0.08" transform="rotate(120 80 80)" />
      <circle cx="80" cy="80" r="12" fill="currentColor" opacity="0.15" />
    </svg>
  )
}

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const openDialog = () => setDialogOpen(true)

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-900">
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

      {/* ─── Fixed Background Image (stays in place on scroll) ─── */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: "url('/garden-bg.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      >
        {/* Fade out at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f5f0]" />
      </div>

      {/* ─── Sticky Nav ─── */}
      <header className="sticky top-0 z-50 border-b border-slate-700/40 bg-slate-900/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 rounded"
          >
            <LeafSprig className="size-5 text-emerald-700" />
            <span className="text-stone-50 font-semibold text-lg tracking-tight">
              Timber &amp; Turf Co.
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {[
              { label: "Our Services", href: "#services" },
              { label: "Why Us", href: "#why-us" },
              { label: "Reviews", href: "#reviews" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-stone-200 hover:text-stone-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
              >
                {label}
              </a>
            ))}
          </nav>

          <Button
            size="sm"
            onClick={openDialog}
            className="bg-amber-500 text-slate-950 hover:bg-amber-600 transition-all rounded-lg font-medium shadow-sm hover:shadow-md hover:-translate-y-px"
          >
            Book a Call
          </Button>
        </div>
      </header>

      <main className="relative z-20">
        {/* ─── Hero (sits on top of fixed background image) ─── */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Transparent gradient overlay — only on hero content, excludes header */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" aria-hidden="true" />
          {/* Decorative grass — bottom left */}
          <GrassBlades className="absolute bottom-0 left-0 h-28 md:h-40 text-emerald-700/15 pointer-events-none" aria-hidden="true" />
          {/* Decorative grass — bottom right, flipped */}
          <GrassBlades className="absolute bottom-0 right-4 h-20 md:h-32 text-emerald-800/10 scale-x-[-1] pointer-events-none" aria-hidden="true" />
          {/* Radial glow behind headline */}
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[500px] rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Text column */}
              <div className="flex-1 flex flex-col items-start gap-6">
                {/* Social proof badge */}
                <div className="flex items-center gap-2 text-sm text-slate-600 bg-white/80 border border-amber-200 shadow-sm rounded-full px-4 py-1.5">
                  <span className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </span>
                  <span className="font-medium">5.0</span>
                  <span className="text-slate-400">Rated by Local Homeowners</span>
                </div>

                {/* 2 — Bigger, bolder headline with weight contrast */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 text-balance leading-[1.05]">
                  Your Weekend{" "}
                  <span className="text-emerald-800">Belongs</span>{" "}
                  to You.
                </h1>
                <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                  Premium mowing, precision garden maintenance, and immaculate upkeep for busy homeowners. Get your Saturdays back.
                </p>

                <div className="flex flex-col items-start gap-2.5">
                  <Button
                    size="lg"
                    onClick={openDialog}
                    className="bg-amber-500 text-slate-950 hover:bg-amber-600 transition-all rounded-xl font-semibold text-base px-8 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Schedule Your Free Estimate Call
                  </Button>
                  <p className="text-sm text-slate-400 pl-1">
                    Takes 2 minutes &bull; Speak with a local specialist
                  </p>
                </div>
              </div>

              {/* 3 — Visual panel with real image + richer gradient overlay */}
              <div className="flex-1 w-full" aria-hidden="true">
                <div className="relative h-72 md:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/hero-lawn.png"
                    alt="Perfectly manicured suburban lawn on a sunny morning"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-900/10 to-transparent" />
                  {/* Floating stat pill */}
                  <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-3">
                    <div className="size-8 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Leaf className="size-4 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 leading-none mb-0.5">Properties Maintained</p>
                      <p className="text-sm font-semibold text-slate-900 leading-none">200+ Happy Homeowners</p>
                    </div>
                  </div>
                  <div className="absolute bottom-5 right-5 text-white/50 text-[10px] font-medium tracking-widest uppercase select-none">
                    Modern Lawn Care.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        {/* 6 — Warmer background, sage accent on icon tiles */}
        <section id="services" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
          {/* 5 — Decorative leaf sprig top-right */}
          <LeafSprig className="absolute -top-6 right-10 h-32 text-emerald-600/8 rotate-[20deg] pointer-events-none" aria-hidden="true" />
          <LeafSprig className="absolute -bottom-8 left-8 h-28 text-emerald-700/6 -rotate-[30deg] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4">
            {/* 2 — Section label + larger heading */}
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700 mb-3">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 text-balance">
                Impeccable Care,{" "}
                <span className="text-emerald-800">Every Single Week.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Scissors,
                  title: "Precision Lawn Care",
                  body: "Scheduled weekly or bi-weekly mowing, crisp edging, and full cleanup. Your lawn, flawless every time.",
                  accent: "bg-emerald-50 border-emerald-100",
                  iconColor: "text-emerald-800",
                },
                {
                  icon: Leaf,
                  title: "Weeding & Beds",
                  body: "Comprehensive weed control, organic mulching, and shrub pruning to keep your property perfectly manicured.",
                  accent: "bg-amber-50 border-amber-100",
                  iconColor: "text-amber-700",
                },
                {
                  icon: PhoneCall,
                  title: "Transparent Pricing",
                  body: "No guessing games. We chat on the phone, look at your property size via satellite data, and hand you a firm price.",
                  accent: "bg-stone-50 border-stone-100",
                  iconColor: "text-slate-700",
                },
              ].map(({ icon: Icon, title, body, accent, iconColor }) => (
                <Card
                  key={title}
                  className="group border border-stone-200/80 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                >
                  {/* 3 — Top accent stripe */}
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-600 to-emerald-400" />
                  <CardHeader className="flex flex-col gap-4 pb-2 pt-6">
                    <div className={`size-11 flex items-center justify-center rounded-xl border ${accent}`}>
                      <Icon className={`size-5 ${iconColor}`} />
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
        {/* 3 — Richer gradient background; 5 — floral accent */}
        <section id="why-us" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/85 via-emerald-800/85 to-slate-900/85 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
          {/* 5 — Decorative floral / nature shapes */}
          <FloralAccent className="absolute top-8 left-8 size-48 text-white pointer-events-none" aria-hidden="true" />
          <FloralAccent className="absolute bottom-4 right-4 size-64 text-white pointer-events-none" aria-hidden="true" />
          <GrassBlades className="absolute bottom-0 right-24 h-24 text-white/10 pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-300 mb-3">
                Our Promise
              </span>
              {/* 2 — Larger, bolder heading, white on dark */}
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white text-balance mb-4">
                A Modern Standard{" "}
                <span className="text-emerald-300">for Home Care.</span>
              </h2>
              <p className="text-emerald-100/70 leading-relaxed text-lg">
                Founded by Julian Vance, we&apos;re a boutique team of six on a mission: Modern Lawn Care. Effortless Weekends.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                /* 3 — Glass card with border + shadow depth */
                <div
                  key={title}
                  className="flex flex-col gap-4 bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl p-6 hover:bg-white/14 transition-all duration-300"
                >
                  <div className="size-11 flex items-center justify-center rounded-xl bg-emerald-700/60 border border-emerald-600/40">
                    <Icon className="size-5 text-emerald-200" />
                  </div>
                  <h3 className="font-semibold text-white text-sm leading-snug">{title}</h3>
                  <p className="text-sm text-emerald-100/60 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Reviews ─── */}
        <section id="reviews" className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-[#f7f5f0]/80 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
          {/* 5 — Subtle leaf sprigs as decorative accents */}
          <LeafSprig className="absolute top-10 right-10 h-40 text-emerald-700/7 rotate-[15deg] pointer-events-none" aria-hidden="true" />
          <LeafSprig className="absolute bottom-6 left-6 h-32 text-emerald-700/6 -rotate-[25deg] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center gap-14">
            <div className="text-center">
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-emerald-700 mb-3">
                Homeowner Stories
              </span>
              {/* 2 — Larger heading */}
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 text-balance">
                Real Results. Real Weekends.
              </h2>
            </div>

            {/* Featured blockquote — 3 warmer background card */}
            <figure className="max-w-2xl w-full text-center flex flex-col items-center gap-5 bg-white rounded-3xl px-8 py-10 shadow-lg ring-1 ring-stone-200/60">
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-amber-400 stroke-none" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed text-balance">
                &ldquo;The team at Timber &amp; Turf completely changed my weekends. I used to spend Saturday mornings fighting a broken mower; now I just enjoy my yard.&rdquo;
              </blockquote>
              <figcaption className="text-sm text-slate-400 font-medium">
                — David K., Suburban Homeowner
              </figcaption>
            </figure>

            {/* Mini review cards — 3 hover lift + shadow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
              {[
                { name: "Sarah M.", quote: "Immaculate edging, every single time." },
                { name: "Tom R.", quote: "They actually show up when they say they will." },
                { name: "Priya N.", quote: "The quote was the quote. No surprises." },
              ].map(({ name, quote }) => (
                <div
                  key={name}
                  className="group bg-white border border-stone-200/80 rounded-2xl px-5 py-5 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 stroke-none" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">&ldquo;{quote}&rdquo;</p>
                  {/* 6 — Sage green avatar dot for visual variety */}
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="size-6 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center">
                      <span className="text-[9px] font-semibold text-emerald-700">{name[0]}</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Conversion Banner ─── */}
        {/* 3 — Richer layered dark gradient with radial glow */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-900/85 to-emerald-950/85 backdrop-blur-sm pointer-events-none" aria-hidden="true" />
          {/* 3 — Radial amber glow behind CTA */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="size-[600px] rounded-full bg-amber-500/5 blur-3xl" />
          </div>
          {/* 5 — Grass blades at the base */}
          <GrassBlades className="absolute bottom-0 left-1/4 h-20 text-emerald-400/10 pointer-events-none" aria-hidden="true" />
          <GrassBlades className="absolute bottom-0 right-1/4 h-16 text-emerald-400/8 scale-x-[-1] pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center gap-6 text-center">
            {/* 2 — Oversized headline */}
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white text-balance">
              Ready for a{" "}
              <span className="text-amber-400">Flawless Lawn?</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-xl text-lg">
              Don&apos;t spend another Saturday sweating over yard work. Let&apos;s map out a custom plan for your property over a quick, 5-minute call.
            </p>
            <Button
              size="lg"
              onClick={openDialog}
              className="bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all rounded-xl font-semibold text-base px-10 mt-2 shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
            >
              Book Your Free Call Now
            </Button>
            <p className="text-slate-500 text-sm">No commitment required &bull; 5-minute call</p>
          </div>
        </section>
      </main>

      {/* ─── Footer ─── */}
      <footer className="relative bg-slate-950/85 backdrop-blur-sm border-t border-slate-800 py-12 text-slate-400">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <LeafSprig className="size-5 text-emerald-600" />
                <span className="text-white font-semibold text-lg tracking-tight">
                  Timber &amp; Turf Co.
                </span>
              </div>
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
