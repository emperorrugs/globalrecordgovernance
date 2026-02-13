import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Award, FileText, Clock, RefreshCw } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Recognition = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Standards & Recognition</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          GRGF DPI Recognition Framework™
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          A structured, tiered accreditation pathway for institutions seeking verified governance integrity certification. Independent, procedural, and internationally aligned.
        </p>
      </div>
    </header>

    {/* Recognition Tiers */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Certification Levels</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Three-Tier Recognition Model</h2>
      <div className="space-y-6">
        {[
          {
            level: "Level I", title: "Foundational DPI Compliance", duration: "8–12 weeks",
            criteria: ["Core record integrity verification capability", "Basic deterministic policy enforcement", "Audit trail generation and reconstruction", "Documentation and governance procedures met", "Initial security assessment passed"],
            outcome: "Foundational Compliance Certificate — valid 24 months"
          },
          {
            level: "Level II", title: "Verified Governance Alignment", duration: "12–20 weeks",
            criteria: ["Full deterministic policy enforcement operational", "SHA-256/512 cryptographic anchoring deployed", "Federation-ready architecture validated", "Independent security audit completed", "Omission-detection capability demonstrated", "Cross-department integration verified"],
            outcome: "Verified Alignment Certificate — valid 18 months"
          },
          {
            level: "Level III", title: "Institutional-Grade Certified DPI", duration: "20–32 weeks",
            criteria: ["Full omission-awareness architecture operational", "Cross-border federation protocol active", "Continuous compliance monitoring established", "Independent third-party audit passed", "Re-certification cycle operational", "Public transparency reporting active"],
            outcome: "Institutional-Grade DPI Certificate — valid 12 months, renewable"
          },
        ].map(({ level, title, duration, criteria, outcome }) => (
          <div key={level} className="governance-card-elevated border-l-4 border-l-accent">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-overline font-mono text-accent uppercase tracking-widest">{level}</span>
              <span className="text-overline font-mono text-muted-foreground">Est. {duration}</span>
            </div>
            <h3 className="font-serif text-heading-2 font-semibold mb-4">{title}</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-3">Evaluation Criteria</p>
                <ul className="space-y-2.5">
                  {criteria.map(c => (
                    <li key={c} className="flex items-start gap-2.5 text-body text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-3">Outcome</p>
                <p className="text-body text-foreground font-medium">{outcome}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* Audit Methodology */}
    <Sec className="border-b border-border bg-muted/40">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Methodology</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Assessment & Audit Process</h2>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: FileText, title: "Documentation Review", desc: "Comprehensive governance documentation, architecture specifications, and policy framework analysis." },
          { icon: Shield, title: "Technical Validation", desc: "Independent verification of cryptographic integrity, policy determinism, and architecture compliance." },
          { icon: Award, title: "Security Assessment", desc: "Penetration testing, threat modeling, and security posture evaluation by independent assessors." },
          { icon: RefreshCw, title: "Re-Certification", desc: "Ongoing compliance monitoring with structured re-certification cycles ensuring continuous integrity." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card-elevated">
            <Icon className="h-5 w-5 text-accent mb-4" />
            <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
            <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Apply CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Begin the Recognition Process</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          Institutional recognition applications are reviewed by the GRGF Technical Review Panel. The assessment process is structured, independent, and aligned with international governance standards.
        </p>
        <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-accent/20">
          Submit Recognition Application <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default Recognition;
