import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import { ArrowRight, Database, Cpu, Shield, Globe, Lock, Network } from "lucide-react";

const eventSchema = `{
  "event_id": "EVT-2026-00451",
  "timestamp": "2026-02-10T14:30:00Z",
  "actor": {
    "role": "procurement_officer",
    "institution": "ministry_of_finance",
    "jurisdiction": "CA"
  },
  "action_type": "CONTRACT_AWARD",
  "scope": "national",
  "legal_ref": "FAA-2024-S42",
  "metadata": {
    "contract_value": 2500000,
    "currency": "CAD",
    "supplier_id": "SUP-9821"
  }
}`;

const policySchema = `{
  "policy_id": "POL-PROC-007",
  "rule": "dual_authority_required",
  "threshold": 1000000,
  "currency": "CAD",
  "action": "CONTRACT_AWARD",
  "result": {
    "allow": false,
    "reason": "SINGLE_AUTHORITY_INSUFFICIENT",
    "explanation": "Contract awards exceeding $1M CAD require dual authority sign-off."
  }
}`;

const SystemArchitecture = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="System Architecture"
      subtitle="Six layers. Unidirectional data flow. No override pathway. No interpretation."
    />

    {/* Data Flow */}
    <Section>
      <div className="flex flex-wrap items-center gap-2 justify-center mb-8">
        {["Institutional Action", "Event Capture", "Normalization", "Policy Engine", "Evidence Store", "Hash Seal", "Verification API"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
          </div>
        ))}
      </div>
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed">
          Data flows one direction. No reverse path. No update operations. No deletion capability. The evidence backbone accepts only appends.
        </p>
      </div>
    </Section>

    {/* Architecture layers */}
    <Section title="Six-Layer Architecture" className="border-t border-border">
      <div className="space-y-4">
        {[
          {
            num: "01", title: "Event Capture & Normalization", icon: Database,
            desc: "Structured ingestion. Mandatory context: timestamp, actor role, institutional scope, legal reference, action type, metadata envelope.",
            points: ["Normalized schema ensures cross-system compatibility", "Context-bound with institutional scope", "Metadata preserves chain-of-custody"],
          },
          {
            num: "02", title: "Policy Decision Engine", icon: Cpu,
            desc: "Deterministic logic. Authority validation, scope verification, conflict-of-interest rules, procedural completeness checks.",
            points: ["Output: allow = true/false with policy_id", "Machine-readable denial reasoning", "No interpretive AI — encoded rules only"],
          },
          {
            num: "03", title: "Evidence Backbone", icon: Shield,
            desc: "Append-only. Write-once, read-many (WORM). Chronological integrity chain. No modifications after sealing.",
            points: ["Custody separation between storage and governance", "Canada-only regions for sovereign data residency", "Tamper detection invalidates downstream hashes"],
          },
          {
            num: "04", title: "Cryptographic Anchoring", icon: Lock,
            desc: "SHA-256 hash at seal time. Merkle-style integrity structures. External anchor compatibility.",
            points: ["SHA-256/512 hash generation", "Merkle tree for batch verification", "Public hash manifest for independent verification"],
          },
          {
            num: "05", title: "Verification API", icon: Network,
            desc: "Proof-of-existence. Proof-of-absence. Institutional audit access. Zero content exposure.",
            points: ["RESTful API for proof queries", "Role-based scoping for institutional access", "Zero-knowledge validation"],
          },
          {
            num: "06", title: "Federation & Interoperability", icon: Globe,
            desc: "National nodes. Interoperable trust. Cross-border verification. Shared compliance standards.",
            points: ["Tier 1 (Full), Tier 2 (Partial), Observer models", "Voluntary participation — sovereignty preserved", "Cross-border record verification protocols"],
          },
        ].map((layer) => (
          <div key={layer.num} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-xs font-mono font-bold">{layer.num}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <layer.icon className="h-4 w-4 text-accent shrink-0" />
                  <h3 className="font-serif text-sm font-semibold">{layer.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">{layer.desc}</p>
                <ul className="space-y-1">
                  {layer.points.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-accent mt-0.5 shrink-0">·</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Schema Examples */}
    <Section title="Schema Examples" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Database className="h-4 w-4 text-accent" /> Event Schema
          </h4>
          <pre className="governance-card text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed">
            {eventSchema}
          </pre>
        </div>
        <div>
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Cpu className="h-4 w-4 text-accent" /> Policy Decision Schema
          </h4>
          <pre className="governance-card text-xs font-mono text-muted-foreground overflow-x-auto leading-relaxed">
            {policySchema}
          </pre>
        </div>
      </div>
    </Section>

    {/* Design Principles */}
    <Section title="Design Principles" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Zero Trust", desc: "No component trusts another. Every interaction requires policy verification." },
          { title: "No-Edit-After-Seal", desc: "Once sealed, no party — including the operator — can modify a record." },
          { title: "Custody Separation", desc: "Storage, governance, and verification are structurally separated." },
          { title: "Deterministic Execution", desc: "Identical inputs produce identical outputs. No probabilistic logic." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default SystemArchitecture;