import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Globe, Clock, CheckCircle2, AlertTriangle, ArrowRight, Target, Shield } from "lucide-react";
import { PatentNotice } from "@/components/PatentNotice";

const StandardsSubmission = () => {
  const submissions = [
    {
      body: "ISO TC 307",
      title: "Blockchain and DLT — Governance Record Integrity",
      status: "In Preparation",
      target: "Q3 2026",
      scope: "Canonical schema for governance event records, hash-chain integrity proofs, and cross-jurisdiction verification protocols.",
      relevance: "Positions GRGF canonical format as the international standard for governance record interoperability.",
    },
    {
      body: "ITU-T SG17",
      title: "Security Aspects — Governance Trust Layer",
      status: "Drafting",
      target: "Q4 2026",
      scope: "Cryptographic verification framework for institutional governance records. Includes threat model, proof artifacts, and federation checkpoint witnessing.",
      relevance: "Establishes GRGF verification methodology as a recognized telecommunications security standard.",
    },
    {
      body: "ISO/IEC 27001",
      title: "Annex A — Governance Record Controls",
      status: "Alignment Complete",
      target: "Certification Q2 2027",
      scope: "Mapping of GRGF security controls to ISO 27001 Annex A requirements. Covers access control, cryptographic controls, and audit logging.",
      relevance: "Enables institutional procurement by meeting mandatory security certification requirements.",
    },
    {
      body: "OECD DGPF",
      title: "Digital Government Policy Framework — Trust Layer Specification",
      status: "Submitted for Review",
      target: "Q1 2027",
      scope: "Formal alignment with OECD Digital Government Policy Framework principles. Governance integrity as DPI Layer 3.",
      relevance: "Embeds GRGF into OECD policy recommendations for member state governance modernization.",
    },
  ];

  const ipTimeline = [
    { date: "Jan 28, 2026", event: "Canadian Patent Application Filed", ref: "CA 3,300,102", status: "Filed" },
    { date: "Jul 2026", event: "PCT International Filing Deadline", ref: "Paris Convention 12-month priority", status: "Approaching" },
    { date: "Q3 2026", event: "Continuation Patents — Execution Layer", ref: "Hashing method, omission detection, federation protocol", status: "In Preparation" },
    { date: "Q4 2026", event: "Defensive Publications", ref: "Six-layer stack, policy-as-code engine", status: "Drafting" },
    { date: "2027", event: "National Phase Entry", ref: "US, EU, UK, AU, SG, AE target jurisdictions", status: "Planned" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Standards & IP Strategy"
        subtitle="Systematic pursuit of international standardization and comprehensive intellectual property protection."
      />

      {/* Strategic Rationale */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            Whoever sets the standard owns the market. GRGF's standardization strategy targets four international bodies 
            to establish its canonical schema and verification methodology as the global reference for governance record integrity.
          </p>
        </div>
      </Section>

      {/* Standards Submissions */}
      <Section title="Active Standards Submissions" className="border-t border-border">
        <div className="space-y-4 max-w-4xl">
          {submissions.map((s) => (
            <div key={s.body} className="governance-card">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-accent shrink-0" />
                  <span className="text-xs font-mono font-bold text-accent">{s.body}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-[10px] text-muted-foreground">Target: {s.target}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    s.status === "Alignment Complete" ? "bg-accent/10 text-accent" :
                    s.status === "Submitted for Review" ? "bg-primary/10 text-primary" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {s.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-sm font-semibold mt-2">{s.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.scope}</p>
              <div className="mt-3 flex items-start gap-2">
                <Target className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-foreground/70"><strong>Strategic Value:</strong> {s.relevance}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IP Portfolio Timeline */}
      <Section title="IP Portfolio Timeline" className="border-t border-border">
        <div className="max-w-3xl space-y-3">
          {ipTimeline.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="shrink-0 w-24">
                <span className="text-[10px] font-mono text-muted-foreground">{item.date}</span>
              </div>
              <div className="flex-1 governance-card">
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <h4 className="text-xs font-semibold text-foreground">{item.event}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    item.status === "Filed" ? "bg-accent/10 text-accent" :
                    item.status === "Approaching" ? "bg-destructive/10 text-destructive" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground mt-1">{item.ref}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Competitive Moat */}
      <Section title="Competitive Moat Analysis" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {[
            { title: "Network Effects", desc: "Every new jurisdiction node increases the verification network's value exponentially. Federation creates mutual dependency." },
            { title: "Switching Costs", desc: "Sealed records cannot be migrated without breaking hash chains. Integrity continuity locks institutions to the framework." },
            { title: "Standards Capture", desc: "Once GRGF's canonical schema becomes an ISO/ITU standard, competitors must conform to it — not compete with it." },
            { title: "Data Gravity", desc: "Governance truth accumulates. The more records exist, the more records are attracted. GRGF becomes the system of record." },
          ].map((m) => (
            <div key={m.title} className="governance-card">
              <Shield className="h-4 w-4 text-accent mb-2" />
              <h3 className="font-serif text-sm font-semibold">{m.title}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Priority Action */}
      <Section className="border-t border-border">
        <div className="governance-card border-l-2 border-l-destructive max-w-3xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-semibold text-foreground">Critical: PCT Filing Deadline</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                The Paris Convention 12-month priority window for international patent filing expires in July 2026. 
                PCT application must be filed before this deadline to preserve priority across all target jurisdictions (US, EU, UK, AU, SG, AE).
              </p>
            </div>
          </div>
        </div>
      </Section>

      <PatentNotice />
    </div>
  );
};

export default StandardsSubmission;
