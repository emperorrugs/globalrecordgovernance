import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Shield, Key, Globe, GitBranch, Database, Users, Clock, ArrowRight, Lock, Layers } from "lucide-react";

const FutureProofing = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Future-Proofing & Evolution"
      subtitle="Designed for evolution, not dependence. Protocol-first architecture ensures multi-decade institutional integrity without vendor lock-in."
    />

    {/* Design Philosophy */}
    <Section title="Design Philosophy">
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <p className="text-sm text-foreground font-medium leading-relaxed mb-3">
          Infrastructure that serves institutions for decades cannot depend on any single vendor, algorithm, or political cycle.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          GRGF is designed as a protocol layer — not a product. Every architectural decision prioritizes interoperability over proprietary advantage, standards over custom implementations, and institutional sovereignty over operational convenience.
        </p>
      </div>
    </Section>

    {/* Cryptographic Agility */}
    <Section title="Cryptographic Agility Roadmap" className="border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Cryptographic algorithms have finite lifespans. GRGF architecture separates cryptographic operations from governance logic, enabling algorithm upgrades without disrupting sealed records or institutional workflows.
      </p>
      <div className="space-y-3 max-w-3xl">
        {[
          { phase: "Current", title: "SHA-256 / SHA-512 Hash Chaining", desc: "Industry-standard hashing with Merkle tree verification. Sufficient for current and near-term threat models.", status: "Active" },
          { phase: "Near-Term", title: "Algorithm Versioning Layer", desc: "Each sealed record binds to a specific algorithm version. Enables parallel verification across algorithm generations without re-sealing.", status: "In Design" },
          { phase: "Medium-Term", title: "Post-Quantum Readiness", desc: "Architectural preparation for NIST post-quantum standards (CRYSTALS-Dilithium, SPHINCS+). No premature adoption — roadmap only.", status: "Planned" },
          { phase: "Long-Term", title: "Cryptographic Migration Protocol", desc: "Formal protocol for re-anchoring historical records under new algorithms while preserving original seal integrity and chain-of-custody.", status: "Roadmap" },
        ].map((item) => (
          <div key={item.title} className="governance-card">
            <div className="flex items-start gap-3">
              <span className={`text-[10px] font-mono tracking-wider shrink-0 mt-0.5 px-1.5 py-0.5 rounded-sm ${item.status === "Active" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                {item.status.toUpperCase()}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <Key className="h-3.5 w-3.5 text-accent" />
                  <h4 className="font-serif text-sm font-semibold">{item.title}</h4>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Federation Model */}
    <Section title="Federation & Interoperability" className="border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Governance integrity scales through voluntary federation — not centralized control. Each sovereign node maintains full operational independence while enabling cross-border verification.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Globe, title: "Sovereign Node Architecture", desc: "Each nation operates an independent GRGF node under its own governance authority. No external entity controls policy or data." },
          { icon: Layers, title: "Federation Protocol", desc: "Standardized verification protocol enables cross-border integrity checks without exposing underlying records or governance rules." },
          { icon: Shield, title: "Trust Without Dependency", desc: "Verification requires no trust in the counterparty's operator. Cryptographic proof replaces institutional reputation." },
          { icon: GitBranch, title: "Schema Interoperability", desc: "Canonical event schemas enable cross-system normalization. Institutions retain local schemas with federation-compatible mappings." },
          { icon: Users, title: "Tiered Participation", desc: "Tier 1: Full federation member. Tier 2: Verification-only participant. Observer: Read access to public proofs." },
          { icon: Lock, title: "Sovereignty Preservation", desc: "No federation rule overrides national governance authority. Participation is voluntary and reversible at every level." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Standards-Based Identity */}
    <Section title="Identity & Credentials Integration Path" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
        {[
          { title: "Verifiable Credentials (W3C)", desc: "Architectural compatibility with W3C Verifiable Credentials for institutional identity attestation. Not implemented — integration pathway documented." },
          { title: "Digital ID Interoperability", desc: "Support for standards-based digital identity frameworks. Integration points designed for national digital ID systems without mandating specific providers." },
          { title: "Role-Based Access (RBAC)", desc: "Governance roles defined as structural attributes, not database permissions. Role changes produce governance events subject to the same integrity guarantees." },
          { title: "Delegation Chains", desc: "Authority delegation tracked as verifiable governance records. Delegation scope, expiry, and revocation are structurally enforced." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Long-Term Governance Stewardship */}
    <Section title="Long-Term Governance Stewardship" className="border-t border-border">
      <p className="text-xs text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Infrastructure that outlasts its creators requires formalized stewardship structures. GRGF governance is designed for institutional succession, not founder dependency.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
        {[
          { icon: Users, title: "Foundation / Consortium Model", desc: "Long-term stewardship through an independent nonprofit foundation or multi-stakeholder consortium. Governance rules encoded in charter, not discretion." },
          { icon: GitBranch, title: "Stewardship Succession Protocol", desc: "Formal succession planning for governance custodians. No single individual or entity can capture framework governance." },
          { icon: Shield, title: "Anti-Capture Clauses (AC-01–05)", desc: "Five codified anti-capture clauses prevent vendor capture, political capture, and institutional capture of framework governance." },
          { icon: Clock, title: "Multi-Decade Stability Design", desc: "Architecture decisions optimized for 50+ year operational stability. Technology choices prioritize longevity over novelty." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Data Classification & Retention */}
    <Section title="Data Classification & Retention" className="border-t border-border">
      <div className="space-y-3 max-w-3xl">
        {[
          { classification: "Sealed Records", retention: "Permanent", desc: "Governance events, policy decisions, and sealed records are retained indefinitely. Deletion is architecturally impossible." },
          { classification: "Operational Metadata", retention: "7 Years", desc: "System operational logs, performance metrics, and administrative metadata retained per institutional retention policy." },
          { classification: "Session Data", retention: "90 Days", desc: "Authentication sessions, access logs, and temporary operational data retained for audit purposes then purged." },
          { classification: "Public Proofs", retention: "Permanent", desc: "Cryptographic proofs published for public verification are permanently available. Hash manifests are append-only." },
        ].map((item) => (
          <div key={item.classification} className="governance-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="font-serif text-sm font-semibold mb-1">{item.classification}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-[10px] font-mono text-accent shrink-0 tracking-wider">{item.retention}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Disaster Recovery */}
    <Section title="Disaster Recovery & Continuity" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
        {[
          { title: "Append-Only Resilience", desc: "The append-only architecture inherently resists data corruption. Partial system failure does not compromise sealed record integrity." },
          { title: "Geographic Redundancy", desc: "Multi-region deployment architecture with sovereign data residency. No cross-border data movement without explicit governance authorization." },
          { title: "Recovery Point Objective", desc: "RPO of zero for sealed records (append-only, replicated). RPO of 1 hour for operational state. Recovery validated through scheduled drills." },
          { title: "Continuity of Verification", desc: "Public verification endpoints designed for independent operation. Verification capability survives primary system outage through distributed hash manifests." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <Database className="h-4 w-4 text-accent mb-2" />
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <p className="text-sm text-foreground font-medium leading-relaxed mb-3">
          Designed for evolution, not dependence.
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          GRGF architecture ensures that institutional integrity infrastructure can evolve across technological generations without compromising the integrity of existing records or governance commitments.
        </p>
        <Link to="/architecture" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
          View System Architecture <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <p className="mt-6 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default FutureProofing;
