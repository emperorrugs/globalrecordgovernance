import { Link } from "react-router-dom";
import { Users, Building2, Handshake, Lock, ArrowRight, ShieldCheck, Info } from "lucide-react";

const cards = [
  {
    to: "/archive/public",
    icon: Users,
    title: "Public & Civil Society",
    desc: "Transparency and understanding. Open documents for public, media, academia, and civil society stakeholders.",
    access: "OPEN ACCESS",
    docCount: 6,
  },
  {
    to: "/archive/government",
    icon: Building2,
    title: "Governments & Multilateral Institutions",
    desc: "Evaluation, adoption, and DPI alignment materials for governments, the World Bank, and regulators.",
    access: "INSTITUTIONAL ACCESS",
    docCount: 8,
  },
  {
    to: "/archive/partners",
    icon: Handshake,
    title: "Partners & System Integrators",
    desc: "Technical readiness materials for implementers, vendors, and integration partners.",
    access: "PARTNER ACCESS",
    docCount: 7,
  },
  {
    to: "/archive/legal-ip",
    icon: Lock,
    title: "Legal, IP & Assurance",
    desc: "Protection, proof, and ownership documentation. Controlled access for institutional use only.",
    access: "CONTROLLED ACCESS",
    docCount: 7,
    restricted: true,
  },
];

const ArchiveOverview = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Digital Archive</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">GRGF Digital Archive</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          This archive contains the authoritative records, architectures, policies, and governance materials of the Global Record Governance Framework (GRGF). Documents are organized by stakeholder role and deployment context to ensure clarity, integrity, and responsible access.
        </p>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Materials herein are evidence-first, neutral, and suitable for audit, evaluation, and institutional reference.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    {/* Archive integrity statement */}
    <div className="px-8 md:px-12 lg:px-16 pt-8">
      <div className="max-w-5xl">
        <div className="bg-muted/50 border border-border rounded-sm px-5 py-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono text-accent/70 tracking-wider mb-2">ARCHIVE INTEGRITY STATEMENT</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This archive is designed to support auditability, long-term institutional memory, and protection against misrepresentation. Documents may be digitally signed, hash-sealed, and time-stamped in future releases without altering their semantic meaning.
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <span className="text-[10px] font-mono text-muted-foreground/60">VERSION: 1.0.0</span>
                <span className="text-[10px] font-mono text-muted-foreground/60">STATUS: AUTHORITATIVE INITIAL ARCHIVE</span>
                <span className="text-[10px] font-mono text-muted-foreground/60">DOCUMENTS: 43</span>
                <span className="text-[10px] font-mono text-muted-foreground/60">SECTIONS: 10</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="px-8 py-8 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.15em] mb-6">
          Access by Stakeholder Role
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map(({ to, icon: Icon, title, desc, access, docCount, restricted }) => (
            <Link
              key={to}
              to={to}
              className="governance-card group flex flex-col justify-between hover:border-accent/50"
            >
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Icon className={`h-5 w-5 shrink-0 mt-0.5 ${restricted ? "text-muted-foreground" : "text-accent"}`} />
                  <h2 className="font-serif text-base font-semibold">{title}</h2>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <p className={`text-[10px] font-mono tracking-wider ${restricted ? "text-destructive" : "text-accent"}`}>
                    {restricted && "🔒 "}{access}
                  </p>
                  <span className="text-[10px] font-mono text-muted-foreground/40">{docCount} DOCS</span>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        {/* Section 00 content */}
        <div className="mt-10 space-y-4">
          <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.15em]">
            Section 00 — Archive Control
          </p>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <Info className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div className="space-y-3">
                <div>
                  <p className="font-serif text-sm font-semibold">Authority Statement</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">This archive is issued under the authority of the GRGF inventor and steward. Documents contained herein represent the definitive reference materials for evaluation, adoption, and institutional use.</p>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold">Versioning Principles</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Major versions reflect conceptual or structural changes. Minor versions reflect clarifications or expansions. Patch versions reflect corrections without semantic change. No document may be modified without version increment, change description, and date of revision.</p>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold">Document Classification</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Documents are classified as Public, Institutional, Partner, or Controlled. Access classification is contextual and intended to preserve integrity, responsible disclosure, and institutional trust.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link
            to="/archive/master-index"
            className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline"
          >
            View Master Document Index <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveOverview;
