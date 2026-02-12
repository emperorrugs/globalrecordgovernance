import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, Download, ExternalLink } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Research = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Knowledge & Standards</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Research & Publications
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Policy papers, technical standards, institutional reports, and governance integrity research published by the Foundation.
        </p>
      </div>
    </header>

    {/* Featured Publications */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Featured Publications</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Foundational Documents</h2>
      <div className="space-y-4">
        {[
          { title: "GRGF Master Binder v1.0", type: "Authoritative Reference", date: "January 2026", desc: "Definitive institutional submission covering architecture, security, governance, deployment, financial, compliance, legal, and ethics frameworks.", classification: "Controlled Distribution" },
          { title: "Data Flow Architecture — Technical Specification", type: "Technical Standard", date: "January 2026", desc: "Comprehensive data flow diagrams, event normalization schemas, and system integration specifications for institutional deployment.", classification: "Public" },
          { title: "Threat Model — STRIDE Analysis", type: "Security Assessment", date: "January 2026", desc: "Full STRIDE-based threat modeling of the GRGF architecture including mitigation strategies and residual risk analysis.", classification: "Controlled Distribution" },
          { title: "Privacy Impact Assessment", type: "Compliance Document", date: "January 2026", desc: "Privacy-by-design analysis covering data minimization, role-based disclosure, and jurisdictional compliance requirements.", classification: "Public" },
          { title: "Feasibility Study — Global DPI Governance", type: "Policy Paper", date: "January 2026", desc: "Economic and institutional feasibility analysis for sovereign-grade governance integrity infrastructure at national and international scale.", classification: "Public" },
          { title: "Valuation Scenarios — 5-Year Projection", type: "Financial Analysis", date: "January 2026", desc: "Multi-scenario financial projection modelling institutional adoption pathways and federation economics over a 5-year horizon.", classification: "Controlled Distribution" },
        ].map(({ title, type, date, desc, classification }) => (
          <div key={title} className="governance-card-elevated flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-overline font-mono text-accent uppercase">{type}</span>
                <span className="text-overline font-mono text-muted-foreground/50">{date}</span>
                <span className={`text-overline font-mono px-2 py-0.5 ${classification === "Public" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                  {classification.toUpperCase()}
                </span>
              </div>
              <h3 className="font-serif text-heading-3 font-semibold mb-2">{title}</h3>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
            <div className="shrink-0">
              {classification === "Public" ? (
                <Link to="/archive" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors">
                  <Download className="h-3.5 w-3.5" /> Access
                </Link>
              ) : (
                <Link to="/controlled-access" className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-accent transition-colors">
                  <FileText className="h-3.5 w-3.5" /> Request Access
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* Research Areas */}
    <Sec className="border-b border-border bg-muted/40">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Research Programme</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Active Research Areas</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { title: "Governance Integrity Metrics", desc: "Developing quantitative frameworks for measuring institutional governance integrity, policy determinism rates, and audit reconstruction efficiency." },
          { title: "Cross-Border Federation Economics", desc: "Analysing the economic models and institutional incentives underlying international governance infrastructure federation." },
          { title: "Omission Detection Methodology", desc: "Advancing the theoretical and technical foundations for structurally detecting and recording institutional omissions." },
          { title: "DPI Governance Standards Harmonization", desc: "Mapping GRGF standards to existing national and international DPI governance frameworks for interoperability alignment." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card-elevated">
            <BookOpen className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-heading-3 font-semibold mb-2">{title}</h3>
            <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Access the Archive</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          Public documents are available through the Foundation's digital archive. Controlled distribution materials require institutional access approval.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/archive" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide">
            Browse Archive <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium">
            Request Controlled Access
          </Link>
        </div>
      </div>
    </Sec>
  </div>
);

export default Research;
