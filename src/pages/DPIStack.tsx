import { PageHeader, Section } from "@/components/PageComponents";
import { Layers, Shield, Database, Globe, Server, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";

const DPIStack = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="GRGF Within the National DPI Stack"
      subtitle="Positioning GRGF as a Governance Integrity Registry Layer within the OECD Digital Public Infrastructure model."
    />

    {/* What GRGF Is Not */}
    <Section title="What GRGF Is Not">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Not a Digital Identity System", desc: "GRGF does not issue, verify, or manage citizen or institutional identity credentials." },
          { title: "Not a Payment Rail", desc: "GRGF does not process, route, or settle financial transactions of any kind." },
          { title: "Not a Data Exchange Layer", desc: "GRGF does not serve as a general-purpose data-sharing or messaging bus between systems." },
          { title: "Not a Citizen Portal", desc: "GRGF does not provide public-facing service delivery or citizen interaction interfaces." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card border-l-2 border-l-destructive/50">
            <AlertTriangle className="h-4 w-4 text-destructive/70 mb-2" />
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* What GRGF Is */}
    <Section title="What GRGF Is" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>A Governance Integrity Registry Layer</strong> — operating above base registries and alongside data-sharing systems, enabling verifiable institutional decisions and authority validation across sovereign jurisdictions.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Shield, title: "Integrity Assurance", desc: "Every institutional action is cryptographically sealed and independently verifiable, creating an immutable chain of governance evidence." },
          { icon: Database, title: "Authority Validation", desc: "Policy decisions are deterministically evaluated against encoded governance rules, ensuring only authorized actions proceed." },
          { icon: Globe, title: "Sovereign Interoperability", desc: "National nodes federate voluntarily, enabling cross-border verification without ceding operational sovereignty." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* DPI Stack Diagram */}
    <Section title="Layered DPI Architecture (OECD-Aligned)" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF operates at Layer 3 of the national DPI stack, providing governance integrity services that complement — but never replace — existing base registries and core DPI components.
      </p>
      <div className="space-y-3 max-w-3xl">
        {[
          { layer: "Layer 4", title: "Services & Applications", desc: "E-government portals, citizen services, procurement platforms, regulatory dashboards", color: "border-muted-foreground/30" },
          { layer: "Layer 3", title: "GRGF — Governance Integrity Layer", desc: "Governance record custody, policy enforcement, authority validation, cross-agency verification", color: "border-accent bg-accent/5" },
          { layer: "Layer 2", title: "Core DPI Components", desc: "Digital Identity, Payments, Data Sharing, Notifications, Consent Management", color: "border-muted-foreground/30" },
          { layer: "Layer 1", title: "Base Registries", desc: "Civil registry, land registry, business registry, health registry, education registry", color: "border-muted-foreground/30" },
        ].map(({ layer, title, desc, color }) => (
          <div key={layer} className={`governance-card border-l-2 ${color}`}>
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-1 text-accent font-bold">{layer}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* OECD DPI Category Mapping */}
    <Section title="OECD DPI Category Mapping" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF maps directly to two of the three OECD DPI categories defined in the 2024 Policy Paper No. 68.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-accent" />
            <h4 className="font-serif text-sm font-semibold">DPI for Security & Trust</h4>
          </div>
          <ul className="space-y-2">
            {[
              "Cryptographic integrity for all governance records",
              "Tamper-evident registry with append-only storage",
              "Zero-trust verification for all participants",
              "Independent auditability without operator trust",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-3">
            <Database className="h-5 w-5 text-accent" />
            <h4 className="font-serif text-sm font-semibold">DPI for Data & Information Sharing</h4>
          </div>
          <ul className="space-y-2">
            {[
              "Standardized governance record schemas",
              "Cross-agency verification protocols",
              "Federated information sharing with sovereignty preservation",
              "Interoperable event normalization framework",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Integration Model */}
    <Section title="Integration with Existing National Systems" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-4">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF integrates alongside — never replaces — existing national digital infrastructure. It operates as a non-invasive integrity layer that records governance events from source systems without modifying their operational logic.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {["Source System Event", "GRGF Connector", "Event Normalization", "Policy Evaluation", "Evidence Seal", "Verification API"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export default DPIStack;
