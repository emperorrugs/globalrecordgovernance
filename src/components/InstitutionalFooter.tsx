export function InstitutionalFooter() {
  return (
    <footer className="border-t border-border bg-card/30 px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Governance Framework</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Reference Website · No personal data collected
              <br />
              Simulation and explanation only
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Version 1.0 · Established 2024
              <br />
              Sovereign-grade Digital Public Infrastructure
              <br />
              Read-Only Public Reference
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin Authority</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Global Record Governance Framework —
              <br />
              Invented and Owned by Tarek Wahid.
              <br />
              No commercial affiliation. No promotional intent.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground/50 tracking-wide uppercase">
            GRGF · Global Record Governance Framework · Digital Public Infrastructure · All content is public, citable, and non-proprietary.
          </p>
          <a href="/source-of-truth" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">
            Source of Truth →
          </a>
        </div>
      </div>
    </footer>
  );
}
