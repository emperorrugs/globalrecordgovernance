import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Shield, Lock, FileText, Download, Clock, CheckCircle,
  AlertTriangle, Server, ArrowRight, Hash,
} from "lucide-react";

const kpis = [
  { metric: "100%", label: "Policy Determinism Rate", desc: "Identical inputs produce identical outputs — every execution, every time." },
  { metric: "100%", label: "Integrity Verification Success", desc: "All sealed records independently verifiable by any authorized party." },
  { metric: "<30 min", label: "Audit Reconstruction Time", desc: "Full decision-chain reconstruction from any sealed governance event." },
  { metric: "Structured", label: "Denial Clarity Index", desc: "Machine-readable and human-readable reason for every denied action." },
  { metric: "Complete", label: "Trace Completeness", desc: "Event → Decision → Hash → Verify — full chain captured in append-only store." },
];

const timeline = [
  { weeks: "Week 1–2", title: "Setup & Stakeholder Alignment", items: ["Environment provisioning", "Stakeholder briefing", "Scope confirmation & KPI baseline"] },
  { weeks: "Week 3–6", title: "Controlled Evaluation & Scenarios", items: ["Policy encoding exercises", "Deterministic enforcement testing", "Hash integrity verification drills"] },
  { weeks: "Week 7–8", title: "Findings & Recommendations", items: ["Audit reconstruction exercise", "Findings report", "Next-phase plan & recommendations"] },
];

const publicDocs = [
  { title: "Pilot Evaluation Plan (v0.1)", version: "0.1", date: "2026-01-31", file: "GRGF_Pilot_Evaluation_Plan_v0.1.pdf" },
  { title: "Demo Guide (v0.1)", version: "0.1", date: "2026-01-31", file: "GRGF_Demo_Guide_v0.1.pdf" },
  { title: "Executive Slide Deck", version: "1.0", date: "2026-01-31", file: "GRGF_Executive_Visual_Binder.pptx" },
];

const controlledDocs = [
  "API Contract (v0.1)",
  "Technical Walkthrough",
  "Full Pilot Kit ZIP (reference implementation + tools)",
];

const PilotEvaluation = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="GRGF Pilot Evaluation — v0.1"
      subtitle="Controlled evaluation package for institutional stakeholders. Public-safe materials are available below. Controlled technical materials and operational access are available through the Controlled Access process."
    >
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-sm">
        <span className="w-2 h-2 bg-accent rounded-full" />
        <span className="text-[10px] font-mono text-accent uppercase tracking-wider">Controlled Evaluation Mode</span>
      </div>
    </PageHeader>

    {/* Section B — What This Pilot Is */}
    <Section title="What This Pilot Evaluates">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { icon: Server, text: "Deterministic policy evaluation (allow/deny with human + machine reasons)" },
          { icon: Hash, text: "Append-only integrity logging with hash chaining" },
      { icon: Shield, text: "Independent verification workflow (verification of records via approved access)" },
          { icon: CheckCircle, text: "Governance trace completeness (event → decision → record)" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3 governance-card">
            <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Section C — What This Pilot Is NOT */}
    <Section title="What This Pilot Is Not" className="border-t border-border bg-surface2/30">
      <div className="governance-card max-w-2xl">
        <ul className="space-y-2">
          {[
            "Not a production certification",
            "Not yet a completed third-party security audit",
            "Not an open operational system",
            "Not a replacement for legal frameworks; it is an integrity layer for administrative execution",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="h-4 w-4 text-warning shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>

    {/* Section D — Evaluation KPIs */}
    <Section title="Evaluation KPIs" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map(({ metric, label, desc }) => (
          <div key={label} className="governance-card">
            <p className="text-2xl font-serif font-semibold text-accent mb-1">{metric}</p>
            <h4 className="text-xs font-mono text-foreground uppercase tracking-wider mb-1">{label}</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Section E — Timeline */}
    <Section title="Evaluation Timeline" className="border-t border-border bg-surface2/30">
      <div className="space-y-0 max-w-2xl">
        {timeline.map((t, i) => (
          <div key={t.weeks}>
            <div className="flex items-start gap-4 py-4">
              <div className="shrink-0 w-20">
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider">{t.weeks}</p>
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold mb-2">{t.title}</h4>
                <ul className="space-y-1">
                  {t.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < timeline.length - 1 && <div className="ml-10 w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
    </Section>

    {/* Section F — Public Downloads */}
    <Section title="Public Evaluation Pack" className="border-t border-border">
      <div className="grid gap-3 sm:grid-cols-3">
        {publicDocs.map((doc) => (
          <div key={doc.title} className="governance-card">
            <FileText className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-1">{doc.title}</h4>
            <div className="space-y-1 mb-3">
              <p className="text-[10px] font-mono text-muted-foreground">Version {doc.version}</p>
              <p className="text-[10px] font-mono text-muted-foreground">{doc.date}</p>
              <p className="text-[10px] font-mono text-accent uppercase tracking-wider">Classification: Public</p>
            </div>
            <a
              href={`/documents/${doc.file}`}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border text-xs font-medium rounded-sm hover:bg-surface2 transition-colors"
            >
              <Download className="h-3 w-3" />
              Download
            </a>
          </div>
        ))}
      </div>
    </Section>

    {/* Section G — Controlled Technical Pack */}
    <Section title="Controlled Technical Pack" className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent max-w-2xl">
        <div className="flex items-start gap-3 mb-4">
          <Lock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Controlled Access Required</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Technical implementation references and deeper integration material are available for institutional reviewers under Controlled Access.
            </p>
          </div>
        </div>
        <ul className="space-y-2 mb-4 ml-8">
          {controlledDocs.map((doc) => (
            <li key={doc} className="text-sm text-muted-foreground flex items-start gap-2">
              <Lock className="h-3 w-3 text-muted-foreground/50 shrink-0 mt-1" />
              {doc}
            </li>
          ))}
        </ul>
        <div className="ml-8">
          <Link
            to="/controlled-access"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors"
          >
            <Lock className="h-4 w-4" />
            Request Controlled Access
          </Link>
        </div>
      </div>
    </Section>

    {/* Section H — Pilot Access CTA */}
    <Section className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent max-w-2xl">
        <h3 className="font-serif text-lg font-semibold mb-2">Request Pilot Access</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Submit institutional details to receive controlled evaluation instructions and (if approved) access to technical materials.
        </p>
        <Link
          to="/controlled-access"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors"
        >
          Request Pilot Access <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>

    {/* Section I — Footer Disclaimer */}
    <Section className="border-t border-border bg-surface/50">
      <p className="text-xs text-muted-foreground/60 italic leading-relaxed max-w-3xl">
        This pilot package provides evaluation materials only. All results require institutional validation and independent review prior to production deployment decisions.
      </p>
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default PilotEvaluation;
