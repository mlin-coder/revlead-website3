import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PhoneOff,
  CalendarCheck,
  Sparkles,
  ArrowRight,
  Check,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const services = [
  {
    icon: PhoneOff,
    title: "AI Missed Call Text-Back",
    pitch: "Recover the ~30%+ of calls your shop misses every week.",
    bullets: [
      "Instant AI SMS reply the moment a call goes unanswered",
      "Qualifies the lead, captures vehicle + issue, books service",
      "Two-way conversation handed to your team only when needed",
      "Works during nights, weekends, lunch rushes, and tow-ins",
    ],
  },
  {
    icon: CalendarCheck,
    title: "AI Appointment Booking & Follow-Up",
    pitch: "Fill your bays and always keep them full.",
    bullets: [
      "AI books appointments directly into your scheduling system",
      "Automated SMS + email reminders that crush no-shows",
      "Confirmation, reschedule, and review-request workflows",
      "Smart nurturing for quotes that didn't convert the first time",
    ],
  },
  {
    icon: Sparkles,
    title: "AI Lead Reactivation",
    pitch: "Wake up the customers already sitting in your CRM.",
    bullets: [
      "Imports your contact database and segments by service history",
      "Personalized AI outreach: maintenance reminders, win-back offers",
      "Books service from customers you haven't heard from in months",
      "Historically recovers 10–30 extra ROs in the first 30 days",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Services</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
          Three AI systems. One outcome: more booked work.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Built specifically for auto repair shops, dealerships, tire shops, collision centers, and service centers.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 space-y-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-[var(--shadow-card)] grid md:grid-cols-[auto_1fr] gap-8"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <s.icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider">0{i + 1}</p>
              <h2 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-muted-foreground text-lg">{s.pitch}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Add-On · One-Time Project
            </div>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight">Need a website to send all that traffic to?</h2>
          </div>
          <div className="relative rounded-3xl border border-dashed border-primary/40 bg-card p-8 md:p-12 shadow-[var(--shadow-card)] grid md:grid-cols-[auto_1fr] gap-8">
            <div className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-primary-foreground">
              One-Time Add-On
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Globe className="h-7 w-7" />
            </div>
            <div>
              <h3 className="mt-1 text-2xl md:text-3xl font-bold tracking-tight">Website Design & Build</h3>
              <p className="mt-2 text-muted-foreground text-lg">
                Your AI systems need somewhere to send traffic. We can offer a clean, conversion-focused websites with lead capture forms and CRM integration built in so every visitor becomes a trackable lead.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  "5-page professional website",
                  "Lead capture forms",
                  "CRM integration",
                  "Mobile optimized",
                  "SEO basics",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Basic 5-page site</p>
                  <p className="mt-1 text-xl font-bold">$1,500–$3,000<span className="text-sm font-normal text-muted-foreground"> one-time</span></p>
                </div>
                <div className="rounded-xl border border-primary/40 bg-background/40 p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">With CRM + lead capture</p>
                  <p className="mt-1 text-xl font-bold">$3,000–$5,000<span className="text-sm font-normal text-muted-foreground"> one-time</span></p>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Website builds are available as a standalone service or as part of your onboarding.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Not sure which fits your shop?</h2>
          <p className="mt-3 text-muted-foreground">We'll map it out in a free 20-minute audit.</p>
          <Button asChild variant="hero" size="xl" className="mt-6">
            <Link to="/contact">Book a Free Audit <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
