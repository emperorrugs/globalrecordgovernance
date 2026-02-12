import { Link } from "react-router-dom";

export function InstitutionalFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Infrastructure</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Governance Operating Layer
              <br />
              Deterministic Policy Enforcement
              <br />
              Append-Only Cryptographic Ledger
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Version 1.0 · Established 2024
              <br />
              Pilot Node v0.1 Available
              <br />
              Canadian Patent CA 3,300,102
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Global Record Governance Framework —
              <br />
              Invented and Owned by Tarek Wahid.
            </p>
          </div>
        </div>
        {/* Governance disclaimer & trust signals */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10">
          <div className="grid gap-3 sm:grid-cols-4 mb-4">
            {[
              "Pilot stage — not production-certified",
              "Independent security audit planned",
              "No certification claims made",
              "Responsible disclosure: contact@globalrecordgovernance.com",
            ].map((signal) => (
              <p key={signal} className="text-[10px] text-primary-foreground/40 leading-relaxed">{signal}</p>
            ))}
          </div>
          <p className="text-[10px] text-primary-foreground/40 leading-relaxed mb-4">
            Jurisdictional base: Canada. Global scope. Neutral public-interest positioning.
          </p>
          <p className="text-sm text-primary-foreground/70 font-serif italic text-center">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-primary-foreground/30 tracking-wide uppercase">
            GRGF · Governance Integrity Infrastructure · Reference Interface
          </p>
          <div className="flex items-center gap-4">
            <Link to="/safeguards-trust" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Evidence & Assurance</Link>
            <Link to="/sitemap" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Sitemap</Link>
            <Link to="/controlled-access" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">Institutional Engagement →</Link>
            <Link to="/contact" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}