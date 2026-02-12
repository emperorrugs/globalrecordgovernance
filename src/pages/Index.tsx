import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText, Users,
  Award, BookOpen, Handshake, Scale,
} from "lucide-react";

/* ── Reusable ── */
const Sec = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-14 px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{children}</p>
);

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-10">
    <h2 className="institutional-heading text-heading-1 font-semibold">{children}</h2>
    {sub && <p className="mt-3 text-body text-muted-foreground leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

/* ── Page ── */
const Index = () => (
  <div className="animate-fade-in">

    {/* ═══════════════════ HERO ═══════════════════ */}
    <header id="hero" className="relative overflow-hidden border-b border-border px-6 py-28 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px),
                          repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px)`
      }} />
      <div className="relative max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-primary-foreground/15 mb-8">
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          <span className="text-overline font-mono text-accent uppercase">Institutional Pilot · Controlled Evaluation</span>
        </div>

        <h1 className="institutional-heading text-display font-semibold leading-none text-primary-foreground max-w-4xl">
          The Global Standard for
          <br />
          <span className="text-accent">Governance Integrity</span>
        </h1>

        <p className="mt-6 text-body-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
          A sovereign-grade Digital Public Infrastructure that transforms institutional actions into cryptographically verifiable records — enabling accountability at civilisation scale.
        </p>

        <div className="mt-4 text-caption text-primary-foreground/40 font-mono">
          Global Record Governance Framework (GRGF) · Est. 2024 · Canadian Patent CA 3,300,102
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-accent/20">
            <Scale className="h-4 w-4" />
            Request Governance Assessment
          </Link>
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-200 hover:bg-primary-foreground/5">
            Apply for Recognition
          </Link>
          <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3.5 border border-primary-foreground/10 text-primary-foreground/70 text-sm font-medium transition-all duration-200 hover:bg-primary-foreground/5 hover:text-primary-foreground">
            Access Framework <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "OECD", label: "DPI Aligned" },
            { value: "SHA-256", label: "Hash-Sealed Records" },
            { value: "100%", label: "Deterministic Enforcement" },
            { value: "< 30 min", label: "Audit Reconstruction" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="text-xl md:text-2xl font-serif font-semibold text-accent">{value}</p>
              <p className="text-overline text-primary-foreground/40 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </header>

    {/* ═══════════════════ INSTITUTIONAL MANDATE ═══════════════════ */}
    <Sec id="mandate" className="border-b border-border">
      <SectionLabel>Our Mandate</SectionLabel>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-6">
            Setting the global standard for institutional record integrity
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            The Global Record Governance Framework establishes a neutral, verifiable trust layer that records institutional actions, decisions, and omissions — without interpretation, enforcement, or decision authority.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            Positioned as a Governance Integrity Registry (Layer 3) within the national Digital Public Infrastructure stack, GRGF sits above base registries and alongside core DPI components to enable verifiable governance at sovereign scale.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { icon: Shield, title: "Institutional Neutrality", desc: "No enforcement capability, no decision authority. Pure record infrastructure with anti-capture clauses." },
            { icon: Globe, title: "Sovereign Compatibility", desc: "Non-invasive integration that strengthens existing national systems without replacing operational control." },
            { icon: Lock, title: "Cryptographic Assurance", desc: "Every governance event becomes a tamper-evident, independently verifiable cryptographic record." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card-elevated flex gap-4">
              <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-heading-3 font-semibold mb-1">{title}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Sec>

    {/* ═══════════════════ THE PROBLEM ═══════════════════ */}
    <Sec id="problem" className="border-b border-border bg-primary text-primary-foreground">
      <SectionLabel>The Challenge</SectionLabel>
      <Title>
        Why current governance infrastructure fails at scale
      </Title>
      <div className="grid gap-5 md:grid-cols-2 mb-10">
        <div className="border border-primary-foreground/10 p-6">
          <h3 className="font-serif text-heading-3 font-semibold text-primary-foreground mb-4">Structural Deficiencies</h3>
          <ul className="space-y-3 text-body text-primary-foreground/70">
            {[
              "Governance decisions lack structural verifiability",
              "Audit reconstruction takes weeks, not minutes",
              "Cross-border institutional trust relies on reputation alone",
              "Policy enforcement is discretionary, not deterministic",
              "Institutional omissions leave no trace in current systems",
            ].map(t => (
              <li key={t} className="flex items-start gap-3">
                <span className="text-accent/60 mt-0.5 shrink-0 text-xs">—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-accent/30 p-6 bg-accent/5">
          <h3 className="font-serif text-heading-3 font-semibold text-accent mb-4">The GRGF Resolution</h3>
          <ul className="space-y-3 text-body text-primary-foreground/70">
            {[
              "Every institutional action becomes a cryptographically sealed event",
              "Full decision chains reconstructable in under 30 minutes",
              "Cross-border trust via federation protocol — no bilateral treaties",
              "Deterministic policy enforcement — identical inputs, identical outputs",
              "Omission-aware architecture — inaction is recorded alongside action",
            ].map(t => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Sec>

    {/* ═══════════════════ FRAMEWORK PILLARS ═══════════════════ */}
    <Sec id="framework" className="border-b border-border">
      <SectionLabel>Governance Framework</SectionLabel>
      <Title sub="Six operational pillars forming the foundation of institutional governance integrity.">
        Framework Architecture
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Cpu, title: "Record Infrastructure", desc: "Event capture, normalization, and deterministic policy enforcement engine." },
          { icon: Shield, title: "Evidence Backbone", desc: "Append-only cryptographic ledger with SHA-256/512 anchoring and tamper-evident sealing." },
          { icon: Database, title: "Verification Layer", desc: "Independent verification API enabling any authorized party to validate record integrity." },
          { icon: Award, title: "Recognition & Standards", desc: "Institutional accreditation framework with governance maturity assessment criteria." },
          { icon: Globe, title: "Federation Protocol", desc: "Cross-border verification without bilateral treaties. Sovereign nodes maintain local control." },
          { icon: Users, title: "Institutional Governance", desc: "Formal charter with custodial neutrality, separation of powers, and anti-capture clauses." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card-elevated group">
            <Icon className="h-5 w-5 text-accent mb-4 transition-colors group-hover:text-foreground" />
            <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
            <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ INSTITUTIONAL ALIGNMENT ═══════════════════ */}
    <Sec id="alignment" className="border-b border-border bg-muted/40">
      <SectionLabel>International Alignment</SectionLabel>
      <Title sub="GRGF maps directly to established multilateral governance frameworks and accountability standards.">
        Multilateral Institutional Matrix
      </Title>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-accent/30">
              <th className="text-left py-4 px-4 font-serif font-semibold text-foreground text-heading-3">GRGF Capability</th>
              <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">World Bank</th>
              <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">UN SDGs</th>
              <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">OECD</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cap: "Immutable Record Layer", wb: "Institutional Integrity", un: "SDG 16", oecd: "Trust & Transparency" },
              { cap: "Audit Trails", wb: "Anti-Corruption", un: "SDG 16.5", oecd: "Accountability" },
              { cap: "Interoperability", wb: "Digital Gov Reform", un: "SDG 9", oecd: "Data Governance" },
              { cap: "Policy Enforcement", wb: "Rule of Law", un: "SDG 16.3", oecd: "Regulatory Quality" },
              { cap: "Federation Protocol", wb: "Cross-Border Trust", un: "SDG 17", oecd: "Int'l Cooperation" },
            ].map(({ cap, wb, un, oecd }) => (
              <tr key={cap} className="border-b border-border/60 hover:bg-card transition-colors">
                <td className="py-3.5 px-4 font-medium text-foreground">{cap}</td>
                <td className="py-3.5 px-4 text-muted-foreground">{wb}</td>
                <td className="py-3.5 px-4"><span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-mono">{un}</span></td>
                <td className="py-3.5 px-4 text-muted-foreground">{oecd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/oecd-alignment" className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
        View Full Alignment Assessment <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Sec>

    {/* ═══════════════════ SERVICES & ENGAGEMENT ═══════════════════ */}
    <Sec id="services" className="border-b border-border">
      <SectionLabel>Institutional Services</SectionLabel>
      <Title sub="Structured pathways for governments, multilateral organizations, and institutional partners.">
        How We Engage
      </Title>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, title: "Recognition & Certification", desc: "Governance maturity assessment, institutional accreditation, compliance certification.", cta: "Apply for Recognition", path: "/controlled-access" },
          { icon: BookOpen, title: "Advisory Services", desc: "Sovereign deployment planning, architecture review, integration scoping.", cta: "Request Assessment", path: "/controlled-access" },
          { icon: Handshake, title: "Strategic Partnerships", desc: "Multilateral collaboration, federation node participation, joint research initiatives.", cta: "Partner With Us", path: "/contact" },
          { icon: Users, title: "Membership", desc: "Institutional membership tiers, professional certification, governance academy access.", cta: "Learn More", path: "/academy" },
        ].map(({ icon: Icon, title, desc, cta, path }) => (
          <div key={title} className="governance-card-elevated flex flex-col">
            <Icon className="h-5 w-5 text-accent mb-4" />
            <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
            <p className="text-caption text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
            <Link to={path} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors">
              {cta} <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ DEPLOYMENT MODEL ═══════════════════ */}
    <Sec id="deployment" className="border-b border-border bg-muted/40">
      <SectionLabel>Implementation Pathway</SectionLabel>
      <Title>National Pilot Implementation Model</Title>
      <div className="space-y-0 max-w-3xl">
        {[
          { phase: "Phase 1", title: "Readiness Assessment", desc: "Institutional governance maturity evaluation, stakeholder mapping, integration scoping", status: "Active" },
          { phase: "Phase 2", title: "Integration Nodes", desc: "Deploy connector to 1–3 source systems, encode initial policy rules, validate deterministic enforcement" },
          { phase: "Phase 3", title: "Controlled Deployment", desc: "Expand to operational environment, independent security audit, audit trail reconstruction exercises" },
          { phase: "Phase 4", title: "Institutional Scaling", desc: "Cross-department rollout, training programs, compliance reporting automation" },
          { phase: "Phase 5", title: "International Federation", desc: "Federation protocol activation, cross-border verification testing, multilateral alignment" },
        ].map((s, i) => (
          <div key={s.phase}>
            <div className="flex items-center gap-5 py-5">
              <div className="shrink-0 w-11 h-11 bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono font-bold">
                {i + 1}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className="font-serif text-heading-3 font-semibold">{s.title}</h4>
                  {s.status && (
                    <span className="text-overline font-mono px-2 py-0.5 bg-accent/15 text-accent">
                      {s.status.toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="text-caption text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
            {i < 4 && <div className="ml-[1.375rem] w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
      <Link to="/deployment-scenarios" className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
        View Deployment Scenarios <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Sec>

    {/* ═══════════════════ GLOBAL IMPACT ═══════════════════ */}
    <Sec id="impact" className="border-b border-border">
      <SectionLabel>Global Impact</SectionLabel>
      <Title sub="Governance integrity infrastructure for every level of institutional operation.">
        Sectors &amp; Regions
      </Title>
      <div className="grid gap-5 md:grid-cols-3 mb-8">
        {[
          { title: "Government & Public Sector", items: ["Procurement verification", "Cross-ministry authorization", "Regulatory compliance trails", "Social benefit validation"] },
          { title: "International Organizations", items: ["Multilateral governance reform", "Cross-border recognition", "Development programme oversight", "Anti-corruption infrastructure"] },
          { title: "Institutional Partners", items: ["Audit readiness enhancement", "Compliance certification", "Federation node deployment", "Research collaboration"] },
        ].map(({ title, items }) => (
          <div key={title} className="governance-card-elevated">
            <h4 className="font-serif text-heading-3 font-semibold mb-4">{title}</h4>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-center gap-2 text-caption text-muted-foreground">
                  <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ STATUS ═══════════════════ */}
    <Sec id="status" className="border-b border-border bg-muted/40">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { label: "Framework", value: "GRGF v1.0" },
          { label: "Pilot Node", value: "v0.1 — Evaluation Ready" },
          { label: "Patent", value: "CA 3,300,102 (Filed)" },
          { label: "Status", value: "Pre-Pilot" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card-elevated">
            <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-2">{label}</p>
            <p className="text-body font-serif font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ CLOSING CTA ═══════════════════ */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto py-8">
        <p className="text-display font-serif text-primary-foreground leading-tight mb-3">
          Trust should not rely
          <br />
          on reputation.
        </p>
        <p className="text-heading-2 font-serif text-accent mb-8">
          It should rely on structure.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-accent/20">
            Request Governance Assessment
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-200 hover:bg-primary-foreground/5">
            Partner With Us
          </Link>
        </div>
      </div>
    </Sec>
  </div>
);

export default Index;