import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import { ArrowRight, Database, Cpu, Shield, Globe, Lock, Network, XCircle, Hash } from "lucide-react";

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

const evidenceFields = [
  { field: "record_id", type: "UUID", desc: "Globally unique record identifier" },
  { field: "event_type", type: "enum", desc: "action | decision | omission" },
  { field: "source_system", type: "string", desc: "Originating system identifier" },
  { field: "institution_id", type: "string", desc: "Sovereign institutional identifier" },
  { field: "timestamp", type: "ISO 8601", desc: "UTC + local offset" },
  { field: "actor_role", type: "string", desc: "Institutional role (not personal identity)" },
  { field: "policy_rule_id", type: "string", desc: "Reference to governing policy" },
  { field: "decision_outcome", type: "enum", desc: "allow | deny | escalate (if decision)" },
  { field: "reason_codes", type: "string[]", desc: "Machine-readable denial/approval reasons" },
  { field: "attachments_hashes", type: "string[]", desc: "SHA-256 hashes of attached evidence" },
  { field: "previous_record_hash", type: "string", desc: "Hash of prior record (if chained)" },
  { field: "record_hash", type: "string", desc: "SHA-256 (default) or SHA-512" },
  { field: "classification", type: "enum", desc: "Public | Institutional | NDA | Restricted" },
];

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

    {/* Evidence Object Schema */}
    <Section title="Evidence Object Schema" className="border-t border-border">
      <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
        Every governance event captured by GRGF is normalized into a structured evidence object with the following fields. This schema ensures cross-system compatibility and independent verifiability.
      </p>
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-foreground/70 font-medium">Field</th>
              <th className="text-left py-2 pr-4 text-foreground/70 font-medium">Type</th>
              <th className="text-left py-2 text-foreground/70 font-medium">Description</th>
            </tr>
          </thead>
          <tbody>
            {evidenceFields.map((f) => (
              <tr key={f.field} className="border-b border-border/50 last:border-0">
                <td className="py-2 pr-4 text-accent">{f.field}</td>
                <td className="py-2 pr-4 text-muted-foreground">{f.type}</td>
                <td className="py-2 text-muted-foreground">{f.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Hash Generation Explanation */}
    <Section title="Cryptographic Hash Generation" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-3">
            <Hash className="h-4 w-4 text-accent" />
            <h3 className="font-serif text-sm font-semibold">How Hashing Works</h3>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
            <p><span className="font-semibold text-foreground">1. Canonicalization:</span> The evidence object is serialized into a deterministic canonical form (sorted keys, no whitespace variation).</p>
            <p><span className="font-semibold text-foreground">2. Hash computation:</span> SHA-256 (default) or SHA-512 is applied to the canonical byte stream, producing a fixed-length digest.</p>
            <p><span className="font-semibold text-foreground">3. Chaining:</span> The resulting hash is embedded in the next record's <code className="text-accent">previous_record_hash</code> field, creating a chronological integrity chain.</p>
            <p><span className="font-semibold text-foreground">4. Batch anchoring:</span> Periodically, records are grouped into a Merkle tree. The Merkle root serves as a batch integrity proof.</p>
          </div>
        </div>
        <div className="governance-card">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-4 w-4 text-accent" />
            <h3 className="font-serif text-sm font-semibold">Append-Only Rule</h3>
          </div>
          <div className="space-y-2 text-xs text-muted-foreground leading-relaxed">
            <p>GRGF does not allow update-in-place. Corrections are appended as new records referencing prior evidence. Historical truth remains inspectable.</p>
            <p><span className="font-semibold text-foreground">Correction record:</span> A new evidence object is created with <code className="text-accent">event_type: "correction"</code> and a reference to the original <code className="text-accent">record_id</code>. The original record is never modified or deleted.</p>
            <p><span className="font-semibold text-foreground">Tamper detection:</span> Any modification to a sealed record invalidates its hash and breaks the chain, making tampering immediately detectable by any verifier.</p>
          </div>
        </div>
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

    {/* What GRGF Does NOT Do */}
    <Section title="What GRGF Does NOT Do" className="border-t border-border">
      <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
        Clear boundaries are essential for institutional credibility. GRGF is deliberately constrained in scope.
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          "Does not interpret or evaluate governance quality",
          "Does not replace departmental operational systems",
          "Does not enforce policy — it records enforcement evidence",
          "Does not perform surveillance or monitor individuals",
          "Does not assign social scores or rank jurisdictions",
          "Does not store personal data by default — institutions control data classification",
          "Does not centralize control — each node is sovereign",
          "Does not use probabilistic AI or machine learning for decisions",
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 governance-card">
            <XCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
          </div>
        ))}
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
          { title: "Integrity Without Exposure", desc: "Verification proofs confirm existence and sequence without revealing sensitive content." },
          { title: "Federation-Ready", desc: "Sovereign nodes exchange verification metadata and integrity proofs — not operational data by default." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Verification Flows */}
    <Section title="Verification Flows" className="border-t border-border">
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { num: "1", title: "Record Integrity", desc: "Recompute the hash of an evidence object and compare against the stored record_hash. Match confirms the record has not been altered since sealing." },
          { num: "2", title: "Existence at Time", desc: "Query the Verification API with a record_id to receive a timestamped anchoring proof confirming the record existed at the stated time." },
          { num: "3", title: "Sequence Continuity", desc: "Validate the chain of previous_record_hash values across sequential records or verify Merkle inclusion for a batch. Breaks in the chain indicate tampering." },
        ].map(({ num, title, desc }) => (
          <div key={num} className="governance-card">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold">{num}</span>
              </div>
              <h4 className="font-serif text-sm font-semibold">{title}</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to="/verification" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-mono hover:bg-card transition-colors rounded-sm">
          Run Hash Verification Demo <ArrowRight className="h-3 w-3" />
        </Link>
        <Link to="/archive" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-mono hover:bg-card transition-colors rounded-sm">
          View Archive <ArrowRight className="h-3 w-3" />
        </Link>
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
