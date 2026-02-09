import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Database, Cpu, Monitor, Cog } from "lucide-react";

const systems = [
  {
    title: "Digital Archive",
    description: "The immutable record store. All institutional actions, decisions, and omissions are captured, hash-sealed, and preserved with full cryptographic integrity. Records are write-once and cannot be modified after sealing.",
    icon: <Database className="h-5 w-5" />,
    meta: "INTEGRITY: SHA-256 · IMMUTABLE · WRITE-ONCE",
  },
  {
    title: "Governance Operating System",
    description: "The rule engine that defines how records are classified, sealed, governed, and stewarded. It codifies institutional processes into verifiable, version-controlled governance protocols.",
    icon: <Cpu className="h-5 w-5" />,
    meta: "PROTOCOL: VERSION-CONTROLLED · AUDITABLE",
  },
  {
    title: "Public Reference Platform",
    description: "The read-only access layer through which governments, courts, auditors, and professionals can reference, cite, and verify authoritative records. No write access is provided through this interface.",
    icon: <Monitor className="h-5 w-5" />,
    meta: "ACCESS: READ-ONLY · CITABLE · PUBLIC",
  },
  {
    title: "Processing Engines",
    description: "Automated validation, classification, and integrity verification engines that process records according to governance rules. Engines operate deterministically and produce auditable outputs.",
    icon: <Cog className="h-5 w-5" />,
    meta: "MODE: DETERMINISTIC · AUDITABLE · AUTOMATED",
  },
];

const Systems = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Systems"
        subtitle="The core infrastructure components of GRGF: archive, governance, platforms, and processing engines."
      />

      <Section>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF comprises four interdependent systems, each serving a distinct function within
          the overall architecture. Together, they form a complete infrastructure for sovereign
          record governance.
        </p>

        <div className="grid gap-6">
          {systems.map((s) => (
            <InfoCard key={s.title} title={s.title} description={s.description} icon={s.icon} meta={s.meta} />
          ))}
        </div>
      </Section>

      <Section title="System Interoperability" className="border-t border-border">
        <div className="governance-card">
          <p className="text-sm text-muted-foreground leading-relaxed">
            All four systems operate under a unified governance model. Records flow from capture
            through the Digital Archive, are governed by the Operating System, processed by Engines,
            and made available through the Public Reference Platform. Each system maintains its own
            integrity guarantees while operating within the shared governance framework.
          </p>
        </div>
      </Section>

      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Design Note.</span> GRGF systems are governance
          infrastructure — not software products. They are described in terms of institutional function,
          not commercial capability. No component of this architecture is marketed, licensed as SaaS,
          or positioned as a technology solution. The value of these systems derives from governance
          integrity, not software features.
        </p>
      </Section>
    </div>
  );
};

export default Systems;
