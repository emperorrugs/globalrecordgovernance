import { Link } from "react-router-dom";

export function InstitutionalFooter() {
  return (
    <footer className="border-t border-border bg-card/30 px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Infrastructure</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Governance Operating Layer
              <br />
              Deterministic Policy Enforcement
              <br />
              Append-Only Cryptographic Ledger
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Version 1.0 · Established 2024
              <br />
              Pilot Node v0.1 Available
              <br />
              Canadian Patent CA 3,300,102
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Global Record Governance Framework —
              <br />
              Invented and Owned by Tarek Wahid.
            </p>
          </div>
        </div>
        {/* Trust Signals */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid gap-3 sm:grid-cols-4 mb-4">
            {[
              "Pilot stage — not production-certified",
              "Independent security audit planned",
              "No certification claims made",
              "Responsible disclosure: contact@globalrecordgovernance.com",
            ].map((signal) => (
              <p key={signal} className="text-[10px] text-muted-foreground/60 leading-relaxed">{signal}</p>
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-serif italic text-center">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/50 tracking-wide uppercase">
            GRGF · Governance Integrity Infrastructure · Reference Interface
          </p>
          <div className="flex items-center gap-4">
            <Link to="/security-trust" className="text-[10px] text-muted-foreground/70 hover:text-accent font-mono uppercase tracking-wider">Trust Center</Link>
            <Link to="/sitemap" className="text-[10px] text-muted-foreground/70 hover:text-accent font-mono uppercase tracking-wider">Version Registry</Link>
            <Link to="/controlled-access" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">Controlled Access →</Link>
            <Link to="/contact" className="text-[10px] text-muted-foreground/70 hover:text-accent font-mono uppercase tracking-wider">Contact</Link>
          </div>
        </div>
        <p className="mt-4 text-[9px] text-muted-foreground/30 leading-relaxed">
          Modeled projections — pilot validation required. Not independently audited.
        </p>
      </div>
    </footer>
  );
}
