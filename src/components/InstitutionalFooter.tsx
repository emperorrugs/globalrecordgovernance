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
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-serif italic">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/50 tracking-wide uppercase">
            GRGF · Governance Integrity Infrastructure · Reference Interface
          </p>
          <Link to="/controlled-access" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">
            Controlled Access →
          </Link>
        </div>
      </div>
    </footer>
  );
}
