import { Shield, CheckCircle, FileText, Globe, Landmark, Scale, Lock, Award } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Link } from "react-router-dom";

const complianceItems = [
  {
    body: "Government of Canada",
    standards: [
      "GC Digital Standards",
      "Treasury Board Policy on Service & Digital",
      "PIPEDA / Privacy Act",
      "GC Enterprise Architecture",
      "Zero Trust Security Model",
    ],
    status: "Aligned",
    icon: Shield,
  },
  {
    body: "World Bank",
    standards: [
      "GovTech Maturity Index (GTMI)",
      "Digital Government Readiness",
      "Institutional Integrity Pillars",
      "Anti-Corruption Framework",
      "Cross-Border Trust Assessment",
    ],
    status: "Mapped",
    icon: Landmark,
  },
  {
    body: "OECD",
    standards: [
      "DPI Policy Paper No. 68 (2024)",
      "Digital Government Index",
      "Privacy Guidelines",
      "AI Principles",
      "Regulatory Quality Indicators",
    ],
    status: "Mapped",
    icon: Globe,
  },
  {
    body: "ISO/IEC",
    standards: [
      "ISO 23081 (Records)",
      "ISO/IEC 27001 (Security)",
      "ISO/IEC 27701 (Privacy)",
      "ISO 15489 (Records Mgmt)",
      "ISO 22301 (Continuity)",
    ],
    status: "Aligned",
    icon: Scale,
  },
];

const readinessChecks = [
  { label: "WCAG 2.2 AA Accessibility", status: "Compliant", icon: CheckCircle },
  { label: "PIPEDA / GDPR Privacy Alignment", status: "Compliant", icon: Lock },
  { label: "GC Digital Standards Mapping", status: "Complete", icon: FileText },
  { label: "WB GovTech GTMI Scoring", status: "Mapped", icon: Landmark },
  { label: "Independent Architecture Review", status: "Scheduled", icon: Shield },
  { label: "Anti-Capture Clauses (AC-01–05)", status: "Published", icon: Award },
];

const InstitutionalReadinessBanner = () => (
  <div className="border-b border-border">
    <div className="px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-4">
            Institutional Submission Readiness
          </p>
          <h2 className="institutional-heading text-2xl md:text-3xl font-semibold mb-3">
            GC & World Bank Compliance Status
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            GRGF is designed to support alignment with Government of Canada federal standards and World Bank
            institutional governance requirements. All compliance mappings are publicly documented and independently verifiable.
          </p>
        </FadeIn>

        {/* Readiness Checks */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
            {readinessChecks.map(({ label, status, icon: Icon }) => (
              <div key={label} className="governance-card p-4 text-center">
                <Icon className="h-4 w-4 text-accent mx-auto mb-2" />
                <p className="text-[10px] font-mono text-muted-foreground mb-1">{label}</p>
                <span className="text-[9px] font-mono font-bold text-accent uppercase">{status}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Compliance Matrix */}
        <FadeIn delay={200}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {complianceItems.map(({ body, standards, status, icon: Icon }) => (
              <div key={body} className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="h-4 w-4 text-accent" />
                  <h4 className="font-serif text-sm font-semibold">{body}</h4>
                  <span className="ml-auto text-[9px] font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded-sm">
                    {status.toUpperCase()}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {standards.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[11px] text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-accent/60 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={300}>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/canada"
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-accent-foreground text-xs font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              <Shield className="h-3.5 w-3.5" />
              GC Deployment Strategy
            </Link>
            <Link
              to="/world-bank-alignment"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground text-xs font-medium transition-all hover:border-accent/40"
            >
              <Landmark className="h-3.5 w-3.5" />
              World Bank Alignment
            </Link>
            <Link
              to="/compliance"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground text-xs font-medium transition-all hover:border-accent/40 hover:text-foreground"
            >
              <Scale className="h-3.5 w-3.5" />
              Full Compliance Matrix
            </Link>
            <Link
              to="/submission-hub"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-muted-foreground text-xs font-medium transition-all hover:border-accent/40 hover:text-foreground"
            >
              <FileText className="h-3.5 w-3.5" />
              Submission Pack
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

export default InstitutionalReadinessBanner;
