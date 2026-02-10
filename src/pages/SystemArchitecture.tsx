import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import { ArrowRight, Database, Cpu, Shield, Globe, Lock, Network, Layers } from "lucide-react";

const layers = [
  {
    num: "01",
    title: "Event Capture & Normalization",
    icon: Database,
    desc: "Institutional actions are structured into standardized schemas containing timestamp, actor role context, institutional scope, legal reference, action type, and metadata envelope.",
    details: [
      "Event normalization schema ensures cross-system compatibility",
      "Structured record format with mandatory fields",
      "Context-bound with institutional scope and legal reference",
      "Metadata envelope preserves chain-of-custody information",
    ],
  },
  {
    num: "02",
    title: "Policy Decision Engine",
    icon: Cpu,
    desc: "The policy engine executes deterministic logic: authority validation, scope verification, conflict-of-interest rules, and procedural completeness checks.",
    details: [
      "Outputs: allow = true/false with policy_id",
      "Machine-readable denial reasoning",
      "Human-readable explanation for audit trails",
      "Encoded governance rules — not interpretive AI",
    ],
  },
  {
    num: "03",
    title: "Evidence Backbone",
    icon: Shield,
    desc: "Append-only storage model with immutable event records, hash-based sealing, and chronological integrity chain. No record can be modified after sealing.",
    details: [
      "Write-once, read-many (WORM) storage architecture",
      "Chronological integrity chain prevents reordering",
      "Separation of custody between storage and governance",
      "Canada-only regions for sovereign data residency",
    ],
  },
  {
    num: "04",
    title: "Cryptographic Anchoring",
    icon: Lock,
    desc: "Each record is sealed using SHA-256 hash algorithms with Merkle-style integrity structures and external anchor compatibility.",
    details: [
      "SHA-256/512 hash generation at seal time",
      "Merkle tree structure for batch verification",
      "External timestamp anchor compatibility",
      "Public hash manifest for independent verification",
    ],
  },
  {
    num: "05",
    title: "Verification API Layer",
    icon: Network,
    desc: "Allows institutional audit access, proof validation, and public verification endpoints without exposing underlying record content.",
    details: [
      "RESTful API for proof-of-existence queries",
      "Proof-of-absence verification capability",
      "Institutional audit access with role-based scoping",
      "Zero-knowledge validation — no content exposure",
    ],
  },
  {
    num: "06",
    title: "Federation & Interoperability Layer",
    icon: Globe,
    desc: "National nodes can participate in interoperable trust federation, cross-border verification, and shared compliance standards.",
    details: [
      "Tier 1 (Full Federation), Tier 2 (Partial), Observer models",
      "Cross-border record verification protocols",
      "Shared compliance and interoperability standards",
      "Voluntary participation — sovereignty preserved",
    ],
  },
];

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
      subtitle="Six-layer sovereign architecture ensuring integrity from event capture through international federation."
    />

    {/* Architecture layers */}
    <Section>
      <div className="space-y-6">
        {layers.map((layer) => (
          <div key={layer.num} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-sm font-mono font-bold">{layer.num}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <layer.icon className="h-4 w-4 text-accent shrink-0" />
                  <h3 className="font-serif text-base font-semibold">Layer {layer.num} — {layer.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{layer.desc}</p>
                <ul className="space-y-1.5">
                  {layer.details.map((d) => (
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

    {/* Data Flow */}
    <Section title="Data Flow" className="border-t border-border">
      <div className="flex flex-wrap items-center gap-2 justify-center mb-8">
        {["Institutional Action", "Event Capture", "Normalization", "Policy Engine", "Evidence Store", "Hash Seal", "Verification API"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
          </div>
        ))}
      </div>
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Data flows unidirectionally from institutional action through normalization, policy evaluation, and sealing. No reverse flow is permitted. The evidence backbone accepts only append operations — no updates, deletions, or modifications are possible after sealing.
        </p>
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
          { title: "Zero Trust", desc: "No component trusts another by default. Every interaction requires policy verification." },
          { title: "No-Edit-After-Seal", desc: "Once a record is cryptographically sealed, it cannot be modified by any party — including the operator." },
          { title: "Custody Separation", desc: "Storage, governance, and verification are structurally separated to prevent single points of compromise." },
          { title: "Deterministic Execution", desc: "All policy decisions produce identical outputs for identical inputs. No probabilistic or AI-based logic." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default SystemArchitecture;
