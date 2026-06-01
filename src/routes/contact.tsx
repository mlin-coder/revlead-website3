import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 700);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <Toaster />

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-24 text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">Book a Free Audit</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight bg-[image:var(--gradient-text)] bg-clip-text text-transparent">
          Let's find your lost revenue.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          20 minutes. No pitch deck. We'll show you exactly where leads are leaking — and what AI can recover this month.
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 grid lg:grid-cols-[1fr_1.1fr] gap-8">
        {/* Calendly placeholder + contact info */}
        <div className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-semibold">Schedule directly</h2>
                <p className="text-sm text-muted-foreground">Pick a time that works for you.</p>
              </div>
            </div>
            <div className="calendly-inline-widget w-full rounded-xl overflow-hidden" data-url="https://calendly.com/linm-revleadai/ai-implementation?hide_gdpr_banner=1&background_color=241b15&text_color=cc9b75&primary_color=f2d5b9" style={{ minWidth: '320px', height: '700px' }} />
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] space-y-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">linmic@revleadai.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">909-699-8000</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Serving automotive businesses across North America</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] space-y-5"
        >
          <h2 className="text-2xl font-bold tracking-tight">Send us a note</h2>
          <p className="text-sm text-muted-foreground -mt-3">We respond within one business day.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Alex Mercer" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="shop">Business name</Label>
              <Input id="shop" name="shop" required placeholder="Mercer Auto Repair" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@shop.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" placeholder="(555) 555-5555" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">What are you trying to solve?</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="We miss 20+ calls a week and our follow-up is messy..."
            />
          </div>
          <Button type="submit" variant="hero" size="xl" className="w-full" disabled={submitting}>
            {submitting ? "Sending..." : (<>Book My Free Audit <Send className="h-4 w-4" /></>)}
          </Button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}