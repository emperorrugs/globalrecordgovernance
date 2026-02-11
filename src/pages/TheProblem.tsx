import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Database, FileText, Shield, AlertTriangle, ArrowRight, Scale, Banknote, ClipboardCheck } from "lucide-react";

const TheProblem = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="The Problem"
      subtitle="Why institutions fail at governance integrity at scale — and why compliance is not enforcement."
    />

    {/* First Principles */}
    <Section title="First Principles">
      <div className="space-y-4 max-w-3xl">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Modern institutions manage trillions of dollars in public expenditure using systems
          designed for convenience — not integrity. Databases are mutable. Audit trails are
          retrospective. Compliance is self-reported. Policy enforcement depends on human discretion.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The result: institutional actions — approvals, disbursements, licensing decisions —
          can be modified, deleted, or suppressed after the fact by anyone with sufficient
          database privilege. There is no structural guarantee that what was recorded is what happened.
        </p>
        <p className="text-sm text-foreground font-medium leading-relaxed">
          This is not a technology problem. It is an architecture problem.
        </p>
      </div>
    </Section>

    {/* Why Current Systems Fail */}
    <Section title="Why Current Systems Fail" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            icon: Database,
            title: "Databases Are Mutable",
            desc: "Standard relational databases allow privileged users — administrators, operators, insiders — to modify or delete records after creation. There is no structural immutability.",
          },
          {
            icon: ClipboardCheck,
            title: "Audits Are Retrospective",
            desc: "Traditional audits occur months or years after events. By the time anomalies are detected, evidence may have been altered, deleted, or lost. Detection is too slow.",
          },
          {
            icon: Scale,
            title: "Compliance Is Not Enforcement",
            desc: "Compliance frameworks describe what should happen. They do not enforce it. A policy that is not structurally enforced is merely a suggestion.",
          },
          {
            icon: AlertTriangle,
            title: "Discretion Creates Vulnerability",
            desc: "When policy execution depends on human interpretation, identical inputs produce different outputs. Discretion introduces ambiguity, favoritism, and deniability.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Real Scenarios */}
    <Section title="Three Scenarios Where This Fails" className="border-t border-border">
      <div className="space-y-4">
        {[
          {
            icon: Banknote,
            scenario: "Procurement Approvals",
            problem: "A $200M infrastructure contract is approved by a procurement authority. The approval record is stored in a standard database. Six months later, an auditor discovers the approval timestamp was modified after a political change. The original approver's identity was overwritten. No cryptographic seal exists to verify the original record.",
            consequence: "The integrity of the procurement decision cannot be independently verified. Public funds are exposed to contestable authority.",
          },
          {
            icon: FileText,
            scenario: "Grants Disbursement",
            problem: "A development agency disburses $50M in grants to regional organizations. The disbursement records are maintained in an internal system with admin override capabilities. A privileged operator modifies disbursement amounts retroactively to cover budget shortfalls in another program.",
            consequence: "Grant recipients receive different amounts than recorded. The audit trail shows no discrepancy because the trail itself was modified.",
          },
          {
            icon: Shield,
            scenario: "Regulatory Licensing",
            problem: "A regulatory body issues operating licenses to financial institutions. License conditions are stored as database records. A senior official modifies license conditions post-issuance to accommodate a politically connected entity. The modification is invisible to standard audit procedures.",
            consequence: "Regulatory integrity is compromised. The licensing authority cannot prove what conditions were originally imposed.",
          },
        ].map(({ icon: Icon, scenario, problem, consequence }) => (
          <div key={scenario} className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3 mb-3">
              <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <h4 className="font-serif text-sm font-semibold">{scenario}</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{problem}</p>
            <p className="text-xs text-foreground font-medium leading-relaxed">
              Consequence: {consequence}
            </p>
          </div>
        ))}
      </div>
    </Section>

    {/* What GRGF Changes */}
    <Section title="What GRGF Changes" className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <p className="text-sm text-foreground font-medium leading-relaxed mb-4">
          Administrative action becomes a cryptographically verifiable event governed by deterministic rules.
        </p>
        <ul className="space-y-2">
          {[
            "Every institutional action is captured, normalized, and sealed — not stored in a mutable database.",
            "Policy enforcement is deterministic — identical inputs produce identical outputs, every time.",
            "Records cannot be modified, deleted, or reordered after sealing — by anyone, including system operators.",
            "Omissions are detectable — the system provides proof-of-absence, not just proof-of-existence.",
            "Independent verification requires no trust in the operator — integrity is structural, not procedural.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">·</span>{item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <Link to="/architecture" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
          View System Architecture <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default TheProblem;
