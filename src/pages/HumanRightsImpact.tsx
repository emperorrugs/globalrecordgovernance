import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Eye, Scale, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const HumanRightsImpact = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Human Rights</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Human Rights Impact Assessment
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Formal assessment aligned with the UN Guiding Principles on Business and Human Rights, evaluating the Foundation's governance infrastructure against international human rights standards.
        </p>
      </div>
    </header>

    {/* Framework */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Assessment Framework</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">UN Guiding Principles Alignment</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Pillar I: State Duty to Protect", desc: "GRGF strengthens state capacity to protect human rights by making institutional governance verifiable, reducing opportunities for arbitrary or opaque administrative action." },
            { title: "Pillar II: Corporate Responsibility", desc: "The Foundation's governance charter, anti-capture clauses, and institutional neutrality demonstrate responsible governance infrastructure stewardship." },
            { title: "Pillar III: Access to Remedy", desc: "Omission-awareness architecture ensures that failures to act — including failures to provide remedy — become structurally visible and independently verifiable." },
          ].map(({ title, desc }) => (
            <div key={title} className="governance-card-elevated border-l-4 border-l-accent">
              <h4 className="font-serif text-heading-3 font-semibold mb-3">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Rights Impact Matrix */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Impact Matrix</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Rights-Specific Assessment</h2>
        <div className="space-y-4">
          {[
            { right: "Right to Privacy", icon: Shield, impact: "Positive", assessment: "Privacy-by-design architecture. No PII stored in governance records. Role-based disclosure. Data minimisation enforced at the schema level. GDPR, PIPEDA, and CCPA compliant by architecture." },
            { right: "Right to Non-Discrimination", icon: Users, impact: "Positive", assessment: "Deterministic policy enforcement eliminates discretionary bias. Identical inputs always produce identical outputs regardless of the subject's identity, location, or status." },
            { right: "Right to Transparency", icon: Eye, impact: "Strongly Positive", assessment: "Core mission alignment. Omission-awareness makes institutional silence visible. Public verification API enables independent oversight. All standards publicly accessible." },
            { right: "Right to Due Process", icon: Scale, impact: "Positive", assessment: "Audit trail reconstruction enables procedural verification. Chain-of-custody documentation supports legal proceedings. Evidence preservation ensures accountability." },
            { right: "Right to Access Information", icon: Globe, impact: "Positive", assessment: "Public-facing verification endpoints. Machine-readable governance data. Open standards enabling third-party tools and analysis." },
            { right: "Freedom from Surveillance", icon: Heart, impact: "Neutral/Positive", assessment: "Architecture records institutional actions, not individual behaviour. No tracking, profiling, or behavioural monitoring. No biometric data. Content-blind verification." },
          ].map(({ right, icon: Icon, impact, assessment }) => (
            <div key={right} className="governance-card-elevated hover:border-accent/20 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="h-4 w-4 text-accent" />
                <h4 className="font-serif text-heading-3 font-semibold">{right}</h4>
                <span className="ml-auto px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono">{impact}</span>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed">{assessment}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Safeguards */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Safeguards</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Ongoing Commitments</h2>
        <div className="governance-card-elevated border-l-4 border-l-accent max-w-3xl">
          <ul className="space-y-3">
            {[
              "Annual Human Rights Impact Assessment review and public disclosure",
              "Independent human rights advisory input to Governance Board",
              "Formal grievance mechanism for rights-related concerns",
              "Proactive assessment before deployment in new jurisdictions",
              "Alignment monitoring with evolving UN and OECD human rights standards",
              "No deployment in jurisdictions with active human rights sanctions without Board review",
            ].map(c => (
              <li key={c} className="flex items-start gap-2.5 text-body text-muted-foreground">
                <Heart className="h-3.5 w-3.5 text-accent shrink-0 mt-1" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Sec>

    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Responsible Governance</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          The Foundation welcomes scrutiny and feedback on its human rights commitments. For questions, concerns, or formal submissions, contact the Governance Board.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
          Submit Inquiry <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default HumanRightsImpact;
