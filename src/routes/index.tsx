import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  PhoneOff,
  CalendarCheck,
  Sparkles,
  Gauge,
  ShieldCheck,
  Clock,
  TrendingUp,
  Users,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroBg from "@/assets/hero-bg.jpg";
import dealershipLot from "@/assets/dealership-lot.jpg";
import shopFloor from "@/assets/shop-floor.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  {
    icon: PhoneOff,
    title: "AI Missed Call Text-Back",
    desc: "Every missed call gets an instant AI text reply so leads never go cold while you're under a hood.",
  },
  {
    icon: CalendarCheck,
    title: "AI Appointment Booking & Follow-Up",
    desc: "Automated reminders, confirmations, and no-show recovery that fill your shop around the clock.",
  },
  {
    icon: Sparkles,
    title: "AI Lead Reactivation",
    desc: "Wake up dormant CRM contacts with personalized AI outreach that books service from customers you forgot you had.",
  },
];

const whyUs = [
  {
    icon: Clock,
    title: "Respond in seconds",
    desc: "AI replies the moment a lead reaches out — beating the 5-minute window that decides who wins the job.",
  },
  {
    icon: TrendingUp,
    title: "Recover real revenue",
    desc: "Turn missed calls and dead leads into booked appointments. Most shops see 10–30 extra ROs per month.",
  },
  {
    icon: Users,
    title: "No extra hiring",
    desc: "Skip the front-desk hire. Our AI handles intake, follow-up, and nurturing 24/7 — without payroll.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$1,500",
    setup: "$1,000–$2,000 setup",
    desc: "For independent shops ready to stop losing leads.",
    features: [
      "AI Missed Call Text-Back",
      "Basic appointment reminders",
      "Up to 500 contacts",
      "Email & chat support",
    ],
  },
  {
    name: "Growth",
    price: "$2,500",
    setup: "$2,000–$3,500 setup",
    desc: "Most popular —> for shops scaling bookings and follow-up.",
    features: [
      "Everything in Starter",
      "AI appointment booking + no-show recovery",
      "Lead reactivation campaigns",
      "CRM integration",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Full Automation Partner",
    price: "$3,500+",
    setup: "$3,000–$5,000 setup",
    desc: "For multi-location operators and dealerships.",
    features: [
      "Everything in Growth",
      "Multi-location AI workflows",
      "Custom voice + SMS agents",
      "Dedicated strategist",
      "Monthly performance reviews",
    ],
  },
];

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          style={{ filter: 'brightness(0.85) sepia(0.2) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Gauge className="h-3.5 w-3.5 text-primary" />
            AI Automation for Automotive
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
            Stop losing customers. <br className="hidden md:block" />
            Book more appointments.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We help automotive businesses recover lost leads, automate follow-up, and book more appointments. Using AI that works 24/7 so your team doesn't have to.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Book a Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/services">See how it works</Link>
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Built for auto repair · dealerships · tire shops · collision · service centers
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-y border-border/50 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">The problem</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
              Your shop is bleeding revenue you never see.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Most automotive businesses miss a meaningful chunk of inbound calls, are slow to follow up on web leads, and have tens — sometimes hundreds — of dormant customers sitting unused in their CRM network.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Every missed client is a booked appointment your competitor gets instead.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-2xl rounded-3xl" />
            <img
              src={dealershipLot}
              alt="Row of cars at a modern dealership at sunset"
              width={1280}
              height={960}
              loading="lazy"
              className="relative rounded-2xl border border-border shadow-[var(--shadow-card)] w-full h-auto object-cover aspect-[4/3]"
              style={{ filter: 'brightness(0.85) sepia(0.2) saturate(1.2)' }}
            />
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-6 -mt-6">
          <p className="text-xs text-muted-foreground uppercase tracking-wider text-center">Industry benchmarks · sources: Invoca, HBR, Google</p>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { stat: "~30%", label: "of inbound calls go unanswered at SMBs (Invoca)" },
              { stat: "5 min", label: "response window before lead conversion drops sharply (HBR)" },
              { stat: "~50%", label: "of buyers choose the vendor that responds first (Google)" },
              { stat: "Free", label: "20-min audit — we quantify your numbers" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="text-4xl text-primary font-black">{s.stat}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">The solution</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
            AI that works the front desk you can't afford to staff.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card/30 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-[1fr_1fr] gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src={shopFloor}
              alt="Mechanic working on a car in a modern auto shop"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-2xl border border-border shadow-[var(--shadow-card)] w-full h-auto object-cover aspect-[4/3]"
              style={{ filter: 'brightness(0.85) sepia(0.2) saturate(1.2)' }}
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Why RevLead</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">
              Faster response. More revenue. Zero extra payroll.
            </h2>
            <div className="mt-10 space-y-6">
              {whyUs.map((w) => (
                <div key={w.title} className="flex gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{w.title}</h3>
                    <p className="mt-1 text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight">Simple plans. Real ROI.</h2>
          <p className="mt-4 text-muted-foreground">All plans include strategy, build, and ongoing optimization.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                p.featured
                  ? "border-primary bg-card shadow-[var(--shadow-glow)]"
                  : "border-border bg-card shadow-[var(--shadow-card)]"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[image:var(--gradient-primary)] px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{p.setup}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "hero" : "outline"} className="mt-8">
                <Link to="/contact">Get started</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-16 text-center shadow-[var(--shadow-card)]">
          <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-10" />
          <div className="relative">
            <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight">
              Find out what you're leaving on the table.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Book a free 20-minute audit. We'll show you exactly how many customers your shop is losing and what AI can help you recover.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <Link to="/contact">
                Book a Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
