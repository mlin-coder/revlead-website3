import { Link } from "@tanstack/react-router";
import { Gauge } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Gauge className="h-4 w-4" strokeWidth={2.5} />
            </span>
            RevLeadAI<span className="text-primary">.com</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            AI automation built for automotive businesses. Recover lost leads, book more appointments, grow without hiring.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Book a Call</Link>
        </div>
      </div>
      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} RevLeadAI.com — All rights reserved.
      </div>
    </footer>
  );
}