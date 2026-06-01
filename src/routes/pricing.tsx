import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

const tiers = [
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
      "Monthly performance report",
    ],
  },
  {
    name: "Growth",
    price: "$2,500",
    setup: "$2,000–$3,500 setup",
    desc: "For shops scaling bookings and follow-up.",
    features: [
      "Everything in Starter",
      "AI appointment booking + no-show recovery",
      "Lead reactivation campaigns",
      "CRM / DMS integration",
      "Review-request automation",
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
      "Dedicated AI strategist",
      "Monthly performance reviews",
      "Quarterly roadmap planning",
    ],
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
          Pricing built for ROI.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Most shops cover their plan with the first 5–10 recovered appointments. Month-to-month; no long contracts.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((p) => (
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
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Website builds are available as a standalone service or as part of your onboarding. <Link to="/services" className="text-primary underline-offset-4 hover:underline">See website packages →</Link>
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-[var(--shadow-card)]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Want a custom quote?</h2>
          <p className="mt-3 text-muted-foreground">We tailor scope for multi-rooftop dealer groups and franchise operators.</p>
          <Button asChild variant="hero" size="xl" className="mt-6">
            <Link to="/contact">Talk to us <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
