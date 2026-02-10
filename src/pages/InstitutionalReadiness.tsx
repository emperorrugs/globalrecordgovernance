import { useState } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Clock, BarChart3, FileText, Users, Lock, AlertTriangle, CheckCircle, Globe, ArrowRight } from "lucide-react";

/* ═══════════════════════════════════════════════
   PILOT PROPOSAL TEMPLATE
   ═══════════════════════════════════════════════ */

const pilotPhases = [
  { phase: "1", title: "Scope & Selection", duration: "Week 1–2", items: ["Define pilot objective and success criteria", "Select single pilot ministry based on digital maturity and governance complexity", "Identify 3–5 decision types for initial recording", "Establish integration boundary with existing systems"] },
  { phase: "2", title: "Policy Encoding", duration: "Week 3–4", items: ["Translate selected governance rules into deterministic policy schemas", "Dual review (legal + technical) of all encodings", "Test environment validation of policy logic", "Document encoding decisions and justifications"] },
  { phase: "3", title: "Security Validation", duration: "Week 5–6", items: ["Deploy national node in controlled environment", "Execute integration testing with existing ministry systems", "Validate cryptographic sealing and hash integrity", "Verify role separation and access control enforcement"] },
  { phase: "4", title: "Operational Trial", duration: "Week 7–10", items: ["Begin recording governance events in parallel with existing processes", "Monitor system performance against KPI targets", "Collect institutional feedback from practitioners", "Validate proof-of-absence and omission detection capability"] },
  { phase: "5", title: "Audit & Evaluation", duration: "Week 11–12", items: ["Independent audit checkpoint of pilot records", "Treasury evaluation gate: fiscal impact assessment", "Final institutional readiness validation report", "Go/No-Go scaling decision with documented rationale"] },
];

const pilotKPIs = [
  { kpi: "Deterministic enforcement rate", target: "100%", method: "Policy engine output analysis" },
  { kpi: "Audit cycle time reduction", target: "20–40%", method: "Parallel audit comparison" },
  { kpi: "Policy denial clarity rate", target: "100%", method: "Machine + human-readable output verification" },
  { kpi: "Incident detection time", target: "< 4 hours", method: "Automated integrity monitoring" },
  { kpi: "Record sealing latency", target: "< 500ms", method: "System performance monitoring" },
  { kpi: "Audit trail completeness", target: "100%", method: "Independent verification sampling" },
];

/* ═══════════════════════════════════════════════
   COST CALCULATOR
   ═══════════════════════════════════════════════ */

function CostCalculator() {
  const [procurement, setProcurement] = useState(10);
  const [ministries, setMinistries] = useState(1);
  const [maturity, setMaturity] = useState<"low" | "medium" | "high">("medium");

  const maturityMultiplier = maturity === "low" ? 1.4 : maturity === "high" ? 0.8 : 1.0;
  const pilotCost = (0.5 + ministries * 0.3) * maturityMultiplier;
  const deployCost = (2 + ministries * 1.5) * maturityMultiplier;
  const integrityGain = procurement * 0.003;
  const breakEven = ((pilotCost / (procurement * 0.05)) * 100).toFixed(1);

  return (
    <div className="governance-card">
      <h4 className="font-serif text-sm font-semibold mb-4">Preliminary Cost Modeling Framework</h4>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div>
          <label className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1 block">Annual Procurement Volume ($B)</label>
          <input
            type="number"
            value={procurement}
            onChange={(e) => setProcurement(Math.max(1, Number(e.target.value)))}
            className="w-full px-3 py-2 border border-border rounded-sm bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            min={1}
          />
        </div>
        <div>
          <label className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1 block">Number of Ministries</label>
          <input
            type="number"
            value={ministries}
            onChange={(e) => setMinistries(Math.max(1, Math.min(20, Number(e.target.value))))}
            className="w-full px-3 py-2 border border-border rounded-sm bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
            min={1}
            max={20}
          />
        </div>
        <div>
          <label className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1 block">Digital Maturity Level</label>
          <select
            value={maturity}
            onChange={(e) => setMaturity(e.target.value as "low" | "medium" | "high")}
            className="w-full px-3 py-2 border border-border rounded-sm bg-background text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Estimated Pilot Cost", value: `$${pilotCost.toFixed(1)}M` },
          { label: "Estimated Deployment Cost", value: `$${deployCost.toFixed(1)}M` },
          { label: "0.3% Integrity Improvement", value: `$${(integrityGain * 1000).toFixed(0)}M saved` },
          { label: "Break-Even Threshold", value: `${breakEven}% detection` },
        ].map(({ label, value }) => (
          <div key={label} className="bg-card border border-border rounded-sm p-3 text-center">
            <p className="text-lg font-serif font-semibold text-accent">{value}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{label}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[10px] font-mono text-muted-foreground/50 tracking-wider">
        PRELIMINARY MODELING ONLY — ACTUAL COSTS DEPEND ON NATIONAL CONTEXT, INSTITUTIONAL MATURITY, AND DEPLOYMENT SCOPE
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   RISK REGISTER
   ═══════════════════════════════════════════════ */

const risks = [
  { risk: "Institutional resistance to governance transparency", likelihood: "Medium", impact: "High", mitigation: "Phased rollout with single ministry pilot. Executive sponsorship required before scaling.", residual: "Low" },
  { risk: "Policy misencoding leading to incorrect enforcement", likelihood: "Low", impact: "Critical", mitigation: "Dual review (legal + technical). Test environment validation. Periodic review cycles.", residual: "Very Low" },
  { risk: "Overcomplex rollout exceeding institutional capacity", likelihood: "Medium", impact: "Medium", mitigation: "Minimum viable pilot scope. 3–5 decision types only. 90-day bounded engagement.", residual: "Low" },
  { risk: "Political misunderstanding of framework purpose", likelihood: "Medium", impact: "High", mitigation: "Clear positioning: GRGF records — it does not replace decision authority. Stakeholder briefings.", residual: "Medium" },
  { risk: "Security misconfiguration during deployment", likelihood: "Low", impact: "Critical", mitigation: "Security validation phase in pilot. Independent penetration testing pre-production.", residual: "Very Low" },
  { risk: "Vendor dependency or lock-in concerns", likelihood: "Low", impact: "Medium", mitigation: "Open standards. Exportable records. No proprietary formats. AC-02 enforcement.", residual: "Very Low" },
];

/* ═══════════════════════════════════════════════
   VERSION REGISTRY
   ═══════════════════════════════════════════════ */

const versions = [
  { version: "v1.0", date: "2024-12-01", updates: "Initial framework architecture, governance model, and security architecture.", classification: "Level 1 — Public", hash: "e3b0c44298fc...a495991b7852b855" },
  { version: "v1.1", date: "2025-06-15", updates: "Added compliance mapping, ROI modeling, and national deployment framework.", classification: "Level 1 — Public", hash: "d7a8fbb307d7...809cf4f3c762e742" },
  { version: "v1.2", date: "2026-01-30", updates: "Governance Risk & Ethics, Critical Questions, Institutional Readiness, Independent Validation.", classification: "Level 1 — Public", hash: "9f86d081884c...a3007c9d7b4d7041" },
];

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */

const InstitutionalReadiness = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Institutional Readiness"
      subtitle="Pilot proposal template, implementation cost modeling, deployment risk register, exit policy, version control, privacy boundaries, advisory structure, and current limitations."
    />

    {/* Pilot Proposal */}
    <Section title="90-Day Pilot Proposal Template">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          Pilot required before national deployment. This template defines a bounded, reversible evaluation engagement.
        </p>
      </div>
      <div className="space-y-4">
        {pilotPhases.map((p) => (
          <div key={p.phase} className="governance-card">
            <div className="flex items-center gap-3 mb-3">
              <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {p.phase}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold">{p.title}</h4>
                <span className="text-[10px] font-mono text-muted-foreground/60">{p.duration}</span>
              </div>
            </div>
            <ul className="ml-11 space-y-1.5">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    {/* Pilot KPIs */}
    <Section title="Pilot Success Metrics" className="border-t border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">KPI</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Target</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Measurement Method</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {pilotKPIs.map((k) => (
              <tr key={k.kpi} className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium text-foreground">{k.kpi}</td>
                <td className="py-2 pr-4 font-mono text-accent">{k.target}</td>
                <td className="py-2">{k.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Cost Calculator */}
    <Section title="Implementation Cost Modeling" className="border-t border-border">
      <CostCalculator />
    </Section>

    {/* Risk Register */}
    <Section title="Deployment Risk Register" className="border-t border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Risk</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Likelihood</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Impact</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Mitigation</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Residual</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {risks.map((r) => (
              <tr key={r.risk} className="border-b border-border/50">
                <td className="py-2 pr-3 font-medium text-foreground">{r.risk}</td>
                <td className="py-2 pr-3 font-mono">{r.likelihood}</td>
                <td className="py-2 pr-3 font-mono">{r.impact}</td>
                <td className="py-2 pr-3">{r.mitigation}</td>
                <td className="py-2 font-mono text-accent">{r.residual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Exit & Reversibility */}
    <Section title="Exit & Reversibility Policy" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4 font-medium">
          Institutions can adopt, scale, or withdraw from GRGF without data lock-in or operational dependency.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Modular Architecture", desc: "Components can be independently adopted, replaced, or decommissioned without affecting other system layers." },
            { title: "Exportable Records", desc: "All governance records stored in standardized, non-proprietary formats. Full export capability is an architectural requirement." },
            { title: "No Vendor Lock-In", desc: "Open standards, documented APIs, and standardized schemas. No proprietary technology dependencies (AC-02)." },
            { title: "Reversibility Pathway", desc: "Documented process for reverting to pre-GRGF governance workflows with complete data return." },
            { title: "Controlled Decommissioning", desc: "Formal decommissioning process ensures record integrity, data portability, and audit trail preservation." },
            { title: "Sovereignty Preserved", desc: "National policy authority retained at all times. Withdrawal from federation permitted without data loss." },
          ].map(({ title, desc }) => (
            <div key={title}>
              <h4 className="text-xs font-mono text-accent/70 uppercase tracking-wider mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Privacy & Data Boundaries */}
    <Section title="Privacy & Data Boundaries" className="border-t border-border">
      <div className="governance-card">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "GRGF does not inherently store personal data — it stores structured governance events",
            "Privacy-by-design: public verification exposes no personal or classified information",
            "Data minimization: only governance-relevant metadata is captured",
            "Data sovereignty preserved: jurisdictional hosting under institutional control",
            "Purpose limitation: records serve governance integrity only, not surveillance or profiling",
            "Cross-border safeguards: federation preserves data residency requirements",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Advisory Board Framework */}
    <Section title="Advisory & Review Board Framework" className="border-t border-border">
      <p className="text-xs text-muted-foreground mb-4">Proposed governance oversight structure for institutional deployment phases:</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { role: "Digital Governance Expert", scope: "Framework architecture and policy encoding review" },
          { role: "Cybersecurity Expert", scope: "Security architecture audit and penetration testing oversight" },
          { role: "Public Administration Specialist", scope: "Institutional adoption, change management, and workflow integration" },
          { role: "Legal Scholar", scope: "Legal compatibility, sovereignty preservation, and evidentiary admissibility" },
          { role: "Independent Audit Advisor", scope: "Audit methodology, compliance verification, and independent validation" },
        ].map(({ role, scope }) => (
          <div key={role} className="governance-card text-center">
            <Users className="h-5 w-5 text-accent mx-auto mb-2" />
            <h4 className="font-serif text-xs font-semibold mb-1">{role}</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{scope}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Version Registry */}
    <Section title="Version Registry & Change Log" className="border-t border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Version</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Date</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Major Updates</th>
              <th className="text-left py-2 pr-3 text-muted-foreground/70 font-medium">Classification</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">SHA-256</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {versions.map((v) => (
              <tr key={v.version} className="border-b border-border/50">
                <td className="py-2 pr-3 font-mono font-medium text-foreground">{v.version}</td>
                <td className="py-2 pr-3 font-mono">{v.date}</td>
                <td className="py-2 pr-3">{v.updates}</td>
                <td className="py-2 pr-3 text-[10px] font-mono text-accent/70">{v.classification}</td>
                <td className="py-2 font-mono text-[10px] text-muted-foreground/50">{v.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Current Limitations */}
    <Section title="Current Limitations" className="border-t border-border">
      <div className="bg-destructive/5 border border-destructive/20 rounded-sm px-5 py-4 flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Transparent Disclosure</p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "No national deployment has been executed to date",
              "No completed third-party security audit exists",
              "ROI modeling is scenario-based using publicly available data",
              "Pilot deployment required for empirical validation",
              "Advisory board structure is proposed — not yet constituted",
              "Federation model has not been tested in multi-nation configuration",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-destructive/60 mt-0.5 shrink-0">·</span>{item}
              </li>
            ))}
          </ul>
        </div>
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

export default InstitutionalReadiness;
