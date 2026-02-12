import { Link } from "react-router-dom";
import { ArrowRight, Eye, Shield, FileText, Scale, Clock, Users } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Transparency = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Institutional Authority</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Transparency & Governance
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          The Foundation's governance structure, compliance framework, code of ethics, and public accountability mechanisms. Authority demonstrated through structure.
        </p>
      </div>
    </header>

    {/* Charter Summary */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Charter</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-6">Foundation Charter Summary</h2>
      <div className="canonical-quote mb-8">
        "Global Record Governance Framework is a sovereign-grade Digital Public Infrastructure trust layer for recording, preserving, and verifying institutional actions, decisions, and omissions over time — without interpretation, enforcement, or decision authority."
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { title: "Legal Identity", desc: "Incorporated as an independent standards-setting authority. Formal separation between founder intellectual property and institutional governance operations." },
          { title: "Institutional Mandate", desc: "To establish, maintain, and govern the global structural standard for institutional record integrity across public and private sectors." },
          { title: "Scope of Authority", desc: "Standards development, recognition certification, compliance assessment, and federation governance. No enforcement or adjudicatory function." },
          { title: "Jurisdictional Base", desc: "Primary jurisdiction: Canada. Global operation through federation protocol and bilateral institutional agreements." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card-elevated">
            <h3 className="font-serif text-heading-3 font-semibold mb-2">{title}</h3>
            <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Code of Ethics */}
    <Sec className="border-b border-border bg-muted/40">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Ethics</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Code of Ethics & Conduct</h2>
      <div className="space-y-4 max-w-3xl">
        {[
          { code: "ETH-01", title: "Institutional Neutrality", desc: "All Foundation operations, assessments, and publications maintain strict political and commercial neutrality." },
          { code: "ETH-02", title: "Conflict of Interest", desc: "All Board members, committee participants, and assessors declare conflicts of interest before engagement. Published annually." },
          { code: "ETH-03", title: "Assessment Independence", desc: "Recognition assessments are conducted by independent panels with no commercial relationship to applicant institutions." },
          { code: "ETH-04", title: "Transparency by Default", desc: "All standards, methodologies, and assessment criteria are publicly accessible unless classified under the Controlled Distribution Protocol." },
          { code: "ETH-05", title: "Credential Integrity", desc: "Academy certifications require human-reviewed assessment. AI grading is prohibited. Mandatory renewal cycles prevent credential staleness." },
          { code: "ETH-06", title: "Responsible Disclosure", desc: "Security vulnerabilities and integrity concerns are handled through formal responsible disclosure protocols with published response timelines." },
        ].map(({ code, title, desc }) => (
          <div key={code} className="flex gap-4 governance-card-elevated">
            <span className="text-overline font-mono text-accent shrink-0 mt-1">{code}</span>
            <div>
              <h4 className="font-serif text-heading-3 font-semibold mb-1">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* Compliance & Anti-Capture */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Anti-Capture</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Anti-Capture Clauses</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-4xl">
        {[
          { code: "AC-01", title: "No Single-Entity Control", desc: "No single government, corporation, or interest group may acquire controlling influence." },
          { code: "AC-02", title: "Vendor Independence", desc: "Standards and recognition criteria are developed independently of any technology vendor." },
          { code: "AC-03", title: "Governance Separation", desc: "Operational management is formally separated from strategic governance oversight." },
          { code: "AC-04", title: "Financial Independence", desc: "Revenue diversification prevents dependence on any single funding source." },
          { code: "AC-05", title: "Succession Integrity", desc: "Leadership transitions follow formal protocols ensuring institutional continuity." },
        ].map(({ code, title, desc }) => (
          <div key={code} className="governance-card-elevated">
            <span className="text-overline font-mono text-accent">{code}</span>
            <h4 className="font-serif text-heading-3 font-semibold mt-2 mb-1">{title}</h4>
            <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* Public Consultation */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Public Consultation</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          The Foundation maintains an open public consultation process for standards development and governance framework evolution. Institutional stakeholders and civil society organizations are invited to participate.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide">
          Submit Consultation Response <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default Transparency;
