export function InstitutionalFooter() {
  return (
    <footer className="border-t border-border bg-card/30 px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Citation Format</h4>
            <p className="text-xs text-muted-foreground leading-relaxed font-mono">
              Global Record Governance Framework (GRGF), [Section Title], [Record ID if applicable]. Available at: globalrecordgovernance.com
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
              Conceived and authored by Tarek Wahid.
              <br />
              No commercial affiliation. No promotional intent.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <p className="text-[10px] text-muted-foreground/50 tracking-wide uppercase">
            GRGF · Global Record Governance Framework · Digital Public Infrastructure · All content is public, citable, and non-proprietary.
          </p>
        </div>
      </div>
    </footer>
  );
}
