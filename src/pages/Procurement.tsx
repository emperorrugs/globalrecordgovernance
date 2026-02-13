import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { CheckCircle, AlertTriangle, Shield } from "lucide-react";

const CHECKLIST = [
  { key: "openStandards", label: "Open Standards Compliance", desc: "System uses open, non-proprietary standards (REST/JSON, OAuth 2.0, OpenAPI)." },
  { key: "modular", label: "Modular Architecture", desc: "Components can be deployed, upgraded, or replaced independently." },
  { key: "vendorNeutral", label: "Vendor Neutrality", desc: "No single-vendor dependency. Architecture supports multi-vendor deployment." },
  { key: "dataPortability", label: "Data Portability", desc: "Data can be exported in standard formats without proprietary conversion." },
  { key: "sovereignHosting", label: "Sovereign Hosting Compatibility", desc: "System can be deployed on national/sovereign cloud infrastructure." },
  { key: "apiDocs", label: "API Documentation Availability", desc: "Complete API documentation available for integration assessment." },
  { key: "auditTrail", label: "Audit Trail Capability", desc: "System produces verifiable, tamper-evident audit records." },
  { key: "privacyByDesign", label: "Privacy-by-Design", desc: "Data protection principles embedded in system architecture." },
  { key: "scalability", label: "Scalability Evidence", desc: "Documented scaling model with throughput and capacity projections." },
  { key: "exitStrategy", label: "Exit / Reversibility", desc: "Clear data extraction and contract exit pathway documented." },
] as const;

type CheckKey = typeof CHECKLIST[number]["key"];

const Procurement = () => {
  const [checks, setChecks] = useState<Record<CheckKey, boolean>>(() =>
    Object.fromEntries(CHECKLIST.map((c) => [c.key, true])) as Record<CheckKey, boolean>
  );

  const score = useMemo(() => {
    const total = CHECKLIST.length;
    const passed = Object.values(checks).filter(Boolean).length;
    return { passed, total, pct: Math.round((passed / total) * 100) };
  }, [checks]);

  const toggle = (key: CheckKey) => setChecks((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Procurement Readiness Checklist — GRGF"
        description="Interactive procurement readiness assessment for DPI evaluation. Check open standards, modularity, vendor neutrality, and data portability compliance."
      />
      <PageHeader
        title="Procurement & Readiness Checklist"
        subtitle="Interactive assessment tool for procurement committees evaluating governance infrastructure solutions against institutional requirements."
      />

      <Section title="Readiness Assessment" className="border-t border-border">
        <FadeIn>
          <div className="max-w-3xl space-y-2">
            {CHECKLIST.map(({ key, label, desc }) => (
              <button key={key} onClick={() => toggle(key)}
                className={`w-full text-left governance-card flex items-start gap-3 transition-all ${checks[key] ? "border-accent/30" : "opacity-60"}`}>
                <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 transition-colors ${checks[key] ? "text-accent" : "text-muted-foreground/30"}`} />
                <div>
                  <p className="text-sm font-semibold">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                </div>
              </button>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Procurement Readiness Score" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-md text-center">
            <Shield className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="text-4xl font-serif font-bold text-accent">{score.pct}%</p>
            <p className="text-sm font-medium mt-1">{score.passed} / {score.total} criteria met</p>
            <p className="text-xs text-muted-foreground mt-3">
              {score.pct === 100 ? "Full procurement readiness achieved." :
               score.pct >= 80 ? "Strong readiness. Minor gaps to address." :
               score.pct >= 60 ? "Moderate readiness. Review unchecked criteria." :
               "Significant gaps identified. Detailed assessment recommended."}
            </p>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Assessment Note.</span>{" "}
            This checklist is a preliminary procurement evaluation tool. Formal procurement assessment should follow institutional procurement frameworks and national digital government guidelines.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Procurement;
