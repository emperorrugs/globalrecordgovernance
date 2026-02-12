import { Link } from "react-router-dom";

export function InstitutionalFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground px-6 py-14 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Main footer grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-mono font-bold">G</span>
              </div>
              <h4 className="font-serif text-sm font-semibold">GRGF Foundation</h4>
            </div>
            <p className="text-caption text-primary-foreground/50 leading-relaxed">
              Global Record Governance Framework — 
              Sovereign-grade Digital Public Infrastructure for institutional trust.
            </p>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Infrastructure</h4>
            <ul className="space-y-2 text-caption text-primary-foreground/50">
              <li>Governance Operating Layer</li>
              <li>Deterministic Policy Enforcement</li>
              <li>Append-Only Cryptographic Ledger</li>
              <li>Federation Protocol</li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Framework</h4>
            <ul className="space-y-2 text-caption text-primary-foreground/50">
              <li>Version 1.0 · Established 2024</li>
              <li>Pilot Node v0.1 Available</li>
              <li>Canadian Patent CA 3,300,102</li>
              <li>OECD DPI Aligned</li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Engage</h4>
            <ul className="space-y-2">
              <li><Link to="/controlled-access" className="text-caption text-primary-foreground/50 hover:text-accent transition-colors">Request Assessment</Link></li>
              <li><Link to="/contact" className="text-caption text-primary-foreground/50 hover:text-accent transition-colors">Partner With Us</Link></li>
              <li><Link to="/academy" className="text-caption text-primary-foreground/50 hover:text-accent transition-colors">Academy & Certification</Link></li>
              <li><Link to="/archive" className="text-caption text-primary-foreground/50 hover:text-accent transition-colors">Document Archive</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/8">
          <div className="grid gap-3 sm:grid-cols-4 mb-6">
            {[
              "Pilot stage — not production-certified",
              "Independent security audit planned",
              "No certification claims made",
              "Responsible disclosure: contact@globalrecordgovernance.com",
            ].map((signal) => (
              <p key={signal} className="text-overline text-primary-foreground/30 leading-relaxed">{signal}</p>
            ))}
          </div>

          {/* Origin attribution */}
          <div className="mb-6 py-4 border-y border-primary-foreground/6">
            <p className="text-caption text-primary-foreground/40 text-center">
              Global Record Governance Framework — Invented and Owned by Tarek Wahid.
            </p>
          </div>

          <p className="text-body font-serif italic text-primary-foreground/60 text-center mb-6">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-overline text-primary-foreground/20 tracking-widest uppercase">
            GRGF · Governance Integrity Infrastructure
          </p>
          <div className="flex items-center gap-5">
            <Link to="/safeguards-trust" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">Evidence</Link>
            <Link to="/sitemap" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">Sitemap</Link>
            <Link to="/controlled-access" className="text-overline text-accent hover:underline font-mono uppercase tracking-widest transition-colors">Engage →</Link>
            <Link to="/contact" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}