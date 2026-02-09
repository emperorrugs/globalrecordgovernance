import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Layers, Server, Settings2, Globe, GraduationCap, Archive, Shield, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    title: "Framework",
    description: "Principles, purpose, and the architectural spine governing all GRGF operations.",
    icon: <Layers className="h-5 w-5" />,
    path: "/framework",
  },
  {
    title: "Systems",
    description: "Digital Archive, Governance OS, Platforms, and Engines — the core infrastructure components.",
    icon: <Server className="h-5 w-5" />,
    path: "/systems",
  },
  {
    title: "Processes",
    description: "Versioning, sealing, localization, certification, and stewardship procedures.",
    icon: <Settings2 className="h-5 w-5" />,
    path: "/processes",
  },
  {
    title: "Countries",
    description: "Sovereign deployment packages and country-level adaptation models.",
    icon: <Globe className="h-5 w-5" />,
    path: "/countries",
  },
  {
    title: "Academy",
    description: "Professional standards, certification, and governance stewardship discipline.",
    icon: <GraduationCap className="h-5 w-5" />,
    path: "/academy",
  },
  {
    title: "Archive",
    description: "Authoritative records, integrity proofs, and cryptographic hash verification.",
    icon: <Archive className="h-5 w-5" />,
    path: "/archive",
  },
  {
    title: "Governance",
    description: "Stewardship structure, neutrality principles, succession, and origin authority.",
    icon: <Shield className="h-5 w-5" />,
    path: "/governance",
  },
];

const Index = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Global Record Governance Framework"
        subtitle="Sovereign-grade Digital Public Infrastructure for institutional record integrity."
      >
        <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
          <FileText className="h-3.5 w-3.5" />
          <span>Public Reference Platform · Read-Only · Citable</span>
        </div>
      </PageHeader>

      {/* Canonical Definition */}
      <Section>
        <div className="canonical-quote text-base md:text-lg leading-relaxed max-w-3xl">
          "Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public
          Infrastructure trust layer for recording, preserving, and verifying institutional
          actions, decisions, and omissions over time — without interpretation, enforcement,
          or decision authority."
        </div>
      </Section>

      {/* System Overview */}
      <Section title="System Overview" className="border-t border-border">
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
          GRGF operates as three interdependent layers: a Digital Archive System for immutable,
          hash-sealed records; a Governance Operating System defining rules, processes, and
          stewardship; and a Public Reference Platform providing read-only, citable access
          to authoritative institutional records.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-sm font-semibold">Digital Archive System</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Immutable, hash-sealed records with cryptographic integrity verification.
            </p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-sm font-semibold">Governance Operating System</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Rules, processes, and stewardship protocols for institutional governance.
            </p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-sm font-semibold">Public Reference Platform</h3>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Read-only, citable public interface for authoritative record access.
            </p>
          </div>
        </div>
      </Section>

      {/* Navigation Grid */}
      <Section title="Reference Sections" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link key={s.path} to={s.path} className="block">
              <InfoCard title={s.title} description={s.description} icon={s.icon} />
            </Link>
          ))}
        </div>
      </Section>

      {/* Origin */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          <span className="font-semibold">Origin Authority.</span> GRGF originated as a unified Digital
          Public Infrastructure architecture and governance model conceived and authored by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default Index;
