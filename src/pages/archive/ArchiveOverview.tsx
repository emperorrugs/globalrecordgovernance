import { Link } from "react-router-dom";
import { Users, Building2, Handshake, Lock, ArrowRight } from "lucide-react";

const cards = [
  {
    to: "/archive/public",
    icon: Users,
    title: "Public & Civil Society",
    desc: "Transparency and understanding. Open documents for public, media, academia, and civil society stakeholders.",
    access: "OPEN ACCESS",
  },
  {
    to: "/archive/government",
    icon: Building2,
    title: "Governments & Multilateral Institutions",
    desc: "Evaluation, adoption, and DPI alignment materials for governments, the World Bank, and regulators.",
    access: "INSTITUTIONAL ACCESS",
  },
  {
    to: "/archive/partners",
    icon: Handshake,
    title: "Partners & System Integrators",
    desc: "Technical readiness materials for implementers, vendors, and integration partners.",
    access: "PARTNER ACCESS",
  },
  {
    to: "/archive/legal-ip",
    icon: Lock,
    title: "Legal, IP & Assurance",
    desc: "Protection, proof, and ownership documentation. Controlled access for institutional use only.",
    access: "CONTROLLED ACCESS",
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
        <div className="section-divider mt-6" />
      </div>
    </header>

    <section className="px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-5xl">
        <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-[0.15em] mb-6">
          Access by Stakeholder Role
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map(({ to, icon: Icon, title, desc, access, restricted }) => (
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
                <p className={`text-[10px] font-mono tracking-wider ${restricted ? "text-destructive" : "text-accent"}`}>
                  {restricted && "🔒 "}{access}
                </p>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-accent transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed">
            All documents in this archive serve as reference materials. Authoritative governance resides exclusively in sealed archives and formal governance operating documents maintained outside this platform.
          </p>
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
