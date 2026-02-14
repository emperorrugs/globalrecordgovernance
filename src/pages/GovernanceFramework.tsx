import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Globe, Eye, FileText, Scale, Lock, Building2, Gavel, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GovernanceFramework = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Governance & Charter"
      subtitle="Foundational principles, anti-capture safeguards, institutional structure, and the accountability framework governing the Global Record Governance Framework."
    />

    {/* ── SECTION 1: Foundational Principles ── */}
    <Section title="Foundational Charter Principles">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF's operational mandate is grounded in six non-negotiable principles. These are not
        aspirational values — they are structural constraints encoded into the framework's architecture,
        governance rules, and operational protocols. Violation of any principle constitutes a governance failure.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            num: "01", icon: Scale, title: "Neutrality",
            desc: "GRGF does not interpret policy, modify authority structures, or override institutional decisions. It records what occurs — without judgment, evaluation, or interference. No political, commercial, or ideological influence is permitted in framework operations.",
          },
          {
            num: "02", icon: CheckCircle, title: "Verifiability",
            desc: "Every governance event produces independently verifiable cryptographic evidence. Any authorized party can confirm record integrity without trusting the operator. Verification is structural — not dependent on reputation or authority.",
          },
          {
            num: "03", icon: Lock, title: "Integrity",
            desc: "Once sealed, no party — including system operators, founders, or government officials — can modify, delete, or reorder a governance record. Immutability is architectural, not policy-based. Updates are appended, never altered.",
          },
          {
            num: "04", icon: Eye, title: "Transparency",
            desc: "Governance logic, policy rules, and verification outcomes are publicly accessible. The framework's operating rules are documented, versioned, and subject to structured change control. No opaque decision-making.",
          },
          {
            num: "05", icon: Shield, title: "Accountability",
            desc: "Every governance action, denial, and omission is attributable to an identifiable authority. Deterministic enforcement ensures identical inputs produce identical outputs — eliminating discretionary inconsistency.",
          },
          {
            num: "06", icon: Globe, title: "Interoperability",
            desc: "The framework integrates with existing national systems without replacing them. Federation protocols enable cross-border governance verification while preserving sovereign authority and data residency requirements.",
          },
        ].map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="governance-card group hover:border-accent/30 transition-all duration-300">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-overline font-mono text-accent">{num}</span>
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 2: Anti-Capture Clauses ── */}
    <Section title="Anti-Capture Clauses" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6 max-w-3xl">
        <p className="text-sm text-foreground leading-relaxed">
          Anti-capture clauses are structural safeguards — not policy aspirations. They are encoded into
          the framework's architecture and governance operating system to prevent any single entity from
          gaining disproportionate control over framework operations, standards, or governance decisions.
        </p>
      </div>
      <div className="space-y-4">
        {[
          {
            id: "AC-01", title: "No Vendor Capture",
            desc: "No commercial entity may acquire exclusive control over framework components, standards, or certification processes. All architecture components are replaceable. No proprietary dependency is permitted.",
            enforcement: "Open architecture specification. Component substitutability verified during certification. Vendor lock-in assessment in every deployment review.",
          },
          {
            id: "AC-02", title: "No Governmental Override",
            desc: "No government — including the framework's jurisdiction of incorporation — may unilaterally modify, suppress, or override governance records, operational rules, or framework standards.",
            enforcement: "Structural separation of political authority from record custody. Governance rules encoded in policy engine — not in administrative procedures amendable by executive action.",
          },
          {
            id: "AC-03", title: "No Centralized Control Authority",
            desc: "No single individual, entity, or committee has unilateral authority over all framework functions. Governance, operations, and verification are structurally separated across independent bodies.",
            enforcement: "Separation of powers: Governance Board (strategic oversight), Standards Committee (technical standards), Technical Review Panel (assessment), Ethics Unit (compliance). No body controls another.",
          },
          {
            id: "AC-04", title: "No Retroactive Modification",
            desc: "Once sealed, governance records cannot be modified, deleted, reordered, or suppressed — by anyone, for any reason, under any authority. This is not a policy — it is an architectural constraint.",
            enforcement: "Append-only storage with WORM enforcement. Cryptographic hash chains invalidate any post-seal modification. Proof-of-absence detects suppression attempts.",
          },
          {
            id: "AC-05", title: "Structural Independence Enforcement",
            desc: "The framework's governance rules are encoded independently of funding conditions, political preferences, or institutional relationships. Funding sources cannot influence operational decisions or standards.",
            enforcement: "Governance rule encoding separated from financial management. Anti-influence declarations required from all funding sources. Independent audit of rule changes.",
          },
        ].map(({ id, title, desc, enforcement }) => (
          <div key={id} className="governance-card border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-mono font-bold rounded-sm">{id}</span>
              <h4 className="font-serif text-sm font-semibold">{title}</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
            <div className="bg-muted/30 border border-border p-3 rounded-sm">
              <p className="text-[10px] font-mono text-accent mb-1">ENFORCEMENT MECHANISM</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{enforcement}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 3: Custodial Neutrality ── */}
    <Section title="Custodial Neutrality" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF does not interpret policy, modify authority structures, or override institutions.
          It enforces what is encoded in governance rules — deterministically, transparently, and without discretion.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Does Not Interpret", desc: "Policy decisions are encoded, not interpreted. The framework executes rules as defined by governance authorities. No probabilistic or AI-based decision logic." },
          { title: "Does Not Override", desc: "No component of the framework can override institutional authority. Governance remains with human decision-makers. GRGF records — it does not decide." },
          { title: "Does Not Modify", desc: "Authority structures, legal frameworks, and institutional hierarchies remain unchanged. GRGF operates within them as an additional integrity layer." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 4: Governance Structure ── */}
    <Section title="Institutional Governance Structure" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        The framework is governed by a structured institutional model designed to ensure independence,
        accountability, and separation of powers. No single body controls all governance functions.
      </p>

      {/* Founder */}
      <div className="governance-card border-l-4 border-l-accent mb-6">
        <div className="flex items-start gap-3">
          <Gavel className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">Inventor & IP Holder</p>
            <h4 className="font-serif text-base font-semibold mb-2">Tarek Wahid</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Inventor of the Global Record Governance Framework architecture. Holder of Canadian Patent
              No. CA 3,300,102 ("Global Record Governance Framework for Tamper-Evident Logging").
              Retains intellectual property rights and architectural authority while operational governance
              is distributed across independent institutional bodies.
            </p>
          </div>
        </div>
      </div>

      {/* Governance Bodies */}
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: Users, title: "Governance Board",
            desc: "Strategic oversight body with independent membership, term limits, and formal separation from operational management.",
            responsibilities: [
              "Charter stewardship and institutional direction",
              "Anti-capture clause enforcement",
              "Annual transparency report publication",
              "Formal conflict-of-interest declarations",
              "Independent chair with rotating 3-year terms",
            ],
          },
          {
            icon: FileText, title: "Standards Committee",
            desc: "Technical body responsible for recognition criteria, compliance methodology, and standards publication cycle.",
            responsibilities: [
              "Cross-disciplinary expert representation",
              "Open public consultation periods for standard changes",
              "Structured amendment and versioning process",
              "Version-controlled standards registry",
              "Alignment with ISO, OECD, and international norms",
            ],
          },
          {
            icon: Shield, title: "Technical Review Panel",
            desc: "Independent assessment body conducting architecture validation, security evaluation, and deployment verification.",
            responsibilities: [
              "Peer-reviewed assessment methodology",
              "No commercial relationships with applicants",
              "Published evaluation criteria and scoring rubrics",
              "Formal appeals mechanism for assessment decisions",
              "Independent of Governance Board decisions",
            ],
          },
          {
            icon: Eye, title: "Compliance Oversight Committee",
            desc: "Ethics and compliance function managing transparency reporting, re-certification, and institutional neutrality enforcement.",
            responsibilities: [
              "Whistleblower protection framework",
              "Annual ethics and compliance review cycle",
              "Public complaint and resolution mechanism",
              "Formal credential revocation protocols",
              "Independent audit trigger authority",
            ],
          },
        ].map(({ icon: Icon, title, desc, responsibilities }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
            <ul className="space-y-1.5">
              {responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Independent Audit Layer */}
      <div className="mt-6 governance-card border-l-2 border-l-accent">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Independent Audit Review Layer</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              External to all governance bodies. Conducts periodic independent reviews of framework operations,
              governance decisions, and anti-capture clause enforcement. Reports directly to the public
              transparency mechanism — not to the Governance Board. Ensures no internal body can suppress
              findings or influence audit conclusions.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* ── SECTION 5: Sovereign Interoperability ── */}
    <Section title="Sovereign Interoperability" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Each participating nation retains full sovereignty over its governance processes. Federation
        participation is voluntary, and national nodes operate independently. No external authority
        can mandate operational changes to any sovereign deployment.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Globe, title: "Legal Sovereignty", desc: "Each nation retains its legal framework, judicial authority, and policy-making autonomy. GRGF does not require legislative change for deployment." },
          { icon: Building2, title: "Operational Autonomy", desc: "National nodes operate independently. Data residency is preserved. No external authority can access, modify, or override national records." },
          { icon: Scale, title: "Policy Definition Authority", desc: "Governance rules are defined by national authorities according to their institutional requirements. GRGF enforces — it does not prescribe." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 6: Federation Participation ── */}
    <Section title="Federation Participation" className="border-t border-border">
      <div className="grid gap-4 lg:grid-cols-3 mb-6">
        {[
          { tier: "Tier 1", label: "Full Federation", desc: "Full node deployment, cross-border verification, shared compliance standards, and mutual trust agreements. Active participation in standards development." },
          { tier: "Tier 2", label: "Partial Federation", desc: "Selected integration points, limited cross-border verification, and observer-level data sharing. Sovereignty-preserving engagement model." },
          { tier: "Observer", label: "Observer Status", desc: "Read-only access to federation standards, compliance frameworks, and best practice documentation. No operational requirements." },
        ].map(({ tier, label, desc }) => (
          <div key={tier} className="governance-card border-l-2 border-l-accent">
            <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">{tier}</p>
            <h4 className="font-serif text-sm font-semibold mb-2">{label}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 7: Institutional Onboarding ── */}
    <Section title="Institutional Onboarding Process" className="border-t border-border">
      <div className="space-y-3">
        {[
          { step: "01", title: "Initial Assessment", desc: "Evaluation of institutional readiness, legal compatibility, and digital maturity against GRGF deployment criteria." },
          { step: "02", title: "Governance Alignment", desc: "Mapping of existing governance rules to GRGF encoding requirements. Gap analysis and remediation planning." },
          { step: "03", title: "Node Configuration", desc: "Technical deployment and integration with existing national infrastructure. Non-invasive — strengthens existing systems." },
          { step: "04", title: "Pilot Validation", desc: "Controlled 90-day pilot deployment with defined KPIs: 100% policy determinism, <30 min audit reconstruction, full omission detection." },
          { step: "05", title: "Full Activation", desc: "Production deployment with ongoing monitoring, compliance reporting, and federation integration. Reversible at every stage." },
        ].map((s) => (
          <div key={s.step} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {s.step}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold">{s.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* ── SECTION 8: Dispute Resolution ── */}
    <Section title="Accountability & Dispute Resolution" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="governance-card">
          <Gavel className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Dispute Resolution Pathway</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {[
              "Stage 1: Internal review by Compliance Oversight Committee (30 days)",
              "Stage 2: Independent mediation by appointed neutral party (60 days)",
              "Stage 3: Binding arbitration under ADR Institute of Canada rules",
              "Emergency injunctive relief available for IP or integrity violations",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">▸</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <Shield className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Accountability Pathway</h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {[
              "All governance decisions traceable to identifiable authority",
              "Public reporting on framework operations and institutional decisions",
              "Version control on all governance rule changes with justification",
              "Annual independent governance review published publicly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">▸</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* ── Separation Statement ── */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          Political authority is structurally separated from record custody. No political actor,
          government official, or institutional leader can alter, suppress, or influence sealed
          governance records.
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default GovernanceFramework;
