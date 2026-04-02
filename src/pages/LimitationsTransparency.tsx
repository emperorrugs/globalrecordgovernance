import { PageHeader, Section } from "@/components/PageComponents";
import { AlertTriangle, CheckCircle2, Clock, Shield, Eye, ArrowRight } from "lucide-react";
import { PatentNotice } from "@/components/PatentNotice";

const LimitationsTransparency = () => {
  const currentCapabilities = [
    { capability: "Deterministic SHA-256 record hashing", status: "Verified" },
    { capability: "Append-only record lifecycle (draft → sealed)", status: "Verified" },
    { capability: "Hash-chain integrity validation", status: "Verified" },
    { capability: "Tamper detection and rejection", status: "Verified" },
    { capability: "Public verification by token (unauthenticated)", status: "Verified" },
    { capability: "Multi-tenant data isolation", status: "Verified" },
    { capability: "Role-based access control (9 roles)", status: "Verified" },
    { capability: "Immutable audit trail logging", status: "Verified" },
    { capability: "Record supersession with hash linkage", status: "Verified" },
    { capability: "150-test enterprise regression suite", status: "Passed" },
  ];

  const limitations = [
    {
      category: "Cryptographic Infrastructure",
      items: [
        { limitation: "Software-based key management", target: "HSM/KMS integration (FIPS 140-2)", timeline: "TRL 7" },
        { limitation: "No hardware-backed signing", target: "Sovereign HSM deployment per node", timeline: "TRL 8" },
      ],
    },
    {
      category: "Federation",
      items: [
        { limitation: "Single-node architecture", target: "Multi-node federation with checkpoint witnessing", timeline: "TRL 7" },
        { limitation: "No cross-border verification", target: "Bilateral federation protocol", timeline: "TRL 8" },
      ],
    },
    {
      category: "Compliance & Assurance",
      items: [
        { limitation: "No independent security audit", target: "SOC 2 Type II observation period", timeline: "TRL 7" },
        { limitation: "No penetration test results", target: "OWASP ASVS Level 2 assessment", timeline: "TRL 7" },
        { limitation: "Self-assessed compliance alignment", target: "Third-party ISO 27001 certification", timeline: "TRL 8" },
      ],
    },
    {
      category: "Operational",
      items: [
        { limitation: "No offline mode / queue-and-sync", target: "Disconnected operation with reconciliation", timeline: "TRL 8" },
        { limitation: "No formal disaster recovery test", target: "Documented RTO/RPO with tested failover", timeline: "TRL 7" },
        { limitation: "Simulated load testing only", target: "Production-grade stress testing at scale", timeline: "TRL 8" },
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Limitations & Transparency"
        subtitle="Honest assessment of current maturity, known boundaries, and the roadmap to production-grade sovereign infrastructure."
      />

      {/* Philosophy */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <div className="flex items-start gap-3">
            <Eye className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">
              Institutional trust is earned through transparency, not concealment. This page documents what GRGF™ can do today, 
              what it cannot yet do, and the specific steps required to close each gap. 
              Every claim on this platform is bounded by these acknowledged limitations.
            </p>
          </div>
        </div>
      </Section>

      {/* Current TRL */}
      <Section title="Current Maturity: TRL 6" className="border-t border-border">
        <p className="text-sm text-muted-foreground mb-4 max-w-3xl">
          Technology Readiness Level 6 — System/Subsystem Model or Prototype Demonstration in a Relevant Environment.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 max-w-4xl">
          {currentCapabilities.map((c) => (
            <div key={c.capability} className="flex items-start gap-2">
              <CheckCircle2 className="h-3 w-3 text-accent shrink-0 mt-1" />
              <div>
                <span className="text-xs text-foreground">{c.capability}</span>
                <span className="ml-2 text-[10px] font-mono text-accent">{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Known Limitations */}
      <Section title="Known Limitations" className="border-t border-border">
        <div className="space-y-6 max-w-4xl">
          {limitations.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                {cat.category}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div key={item.limitation} className="governance-card">
                    <div className="flex items-start gap-4 flex-wrap">
                      <div className="flex-1 min-w-[200px]">
                        <p className="text-xs text-destructive/80 font-medium">Current: {item.limitation}</p>
                        <p className="text-xs text-accent mt-1">Target: {item.target}</p>
                      </div>
                      <span className="text-[10px] font-mono bg-muted px-2 py-1 rounded text-muted-foreground shrink-0">
                        {item.timeline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* What This Means */}
      <Section title="What This Means for Evaluators" className="border-t border-border">
        <div className="space-y-3 max-w-3xl">
          {[
            { q: "Can GRGF™ be deployed in production today?", a: "Not yet. GRGF™ is a functional proof-of-concept that demonstrates the complete governance record lifecycle. Production deployment requires HSM integration, independent security audits, and formal compliance certification." },
            { q: "Are the institutional evaluation reports official endorsements?", a: "No. They are framework-aligned analyses that demonstrate how GRGF™ would be assessed by these institutions. They are structured using official evaluation methodologies but are not endorsed by the named organizations." },
            { q: "Is the $61.7B valuation real?", a: "It represents the total addressable market based on documented institutional inefficiency costs. It is an economic model, not a revenue projection. The methodology is published and independently verifiable." },
            { q: "What is needed for a government pilot?", a: "A sovereign deployment requires: (1) formal institutional partnership, (2) HSM/KMS key management, (3) SOC 2 Type II certification, (4) penetration testing, and (5) bilateral deployment agreement." },
          ].map((item) => (
            <div key={item.q} className="governance-card">
              <h4 className="text-xs font-semibold text-foreground">{item.q}</h4>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRL Progression */}
      <Section title="Path to TRL 9" className="border-t border-border">
        <div className="max-w-3xl space-y-2">
          {[
            { trl: "TRL 6", label: "Prototype Demonstrated", status: "current", desc: "Functional system with 150-test validation" },
            { trl: "TRL 7", label: "System Prototype in Operational Environment", status: "next", desc: "HSM integration, SOC 2 observation, first institutional pilot" },
            { trl: "TRL 8", label: "System Complete and Qualified", status: "planned", desc: "Multi-node federation, full compliance certification, stress testing" },
            { trl: "TRL 9", label: "Operational System Proven", status: "planned", desc: "National deployment with live governance data" },
          ].map((t) => (
            <div key={t.trl} className={`flex items-start gap-4 governance-card ${
              t.status === "current" ? "border-l-2 border-l-accent" : ""
            }`}>
              <span className={`text-xs font-mono font-bold shrink-0 ${
                t.status === "current" ? "text-accent" : "text-muted-foreground"
              }`}>{t.trl}</span>
              <div>
                <h4 className="text-xs font-semibold text-foreground">{t.label}</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">{t.desc}</p>
              </div>
              {t.status === "current" && <span className="text-[10px] font-bold text-accent ml-auto shrink-0">CURRENT</span>}
            </div>
          ))}
        </div>
      </Section>

      <PatentNotice />
    </div>
  );
};

export default LimitationsTransparency;
