import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText,
} from "lucide-react";

/* ── Sticky Nav (simplified 8-item) ── */
const navItems = [
  { id: "hero", label: "Home" },
  { id: "positioning", label: "Why GRGF" },
  { id: "alignment", label: "Alignment" },
  { id: "architecture", label: "Architecture" },
  { id: "assurance", label: "Evidence" },
  { id: "deployment", label: "Deployment" },
  { id: "status", label: "Status" },
];

function StickyNav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const current = offsets.reduce(
        (best, s) => (s.top <= 120 && s.top > best.top ? s : best),
        { id: "hero", top: -Infinity }
      );
      setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
        <a href="#hero" className="font-serif text-sm font-semibold text-foreground tracking-wide shrink-0">
          GRGF
        </a>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {navItems.slice(1).map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-2.5 py-1.5 rounded-sm text-[11px] font-medium transition-colors whitespace-nowrap ${
                active === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── Reusable ── */
const Sec = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-14 px-8 py-16 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-8">
    <h2 className="institutional-heading text-2xl md:text-3xl font-semibold">{children}</h2>
    {sub && <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

/* ── Page ── */
const Index = () => (
  <div className="animate-fade-in">
    

    {/* ─── HERO ─── */}
    <header id="hero" className="scroll-mt-14 border-b border-border px-8 py-24 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary-foreground/20 rounded-sm mb-6">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider">Pilot Evaluation Phase · Controlled Access</span>
        </div>
        <h1 className="institutional-heading text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight text-primary-foreground">
          Global Record Governance
          <br />
          Framework (GRGF)
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/60 font-serif italic">
          A Sovereign-Grade Digital Public Infrastructure for Institutional Trust
        </p>
        <p className="mt-6 text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-3xl">
          GRGF provides a neutral, interoperable, and verifiable record layer to strengthen institutional integrity, regulatory compliance, and global public trust.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link to="/briefing" className="flex items-center gap-2 px-4 py-3 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
            <FileText className="h-3.5 w-3.5" />
            Institutional Brief
          </Link>
          <Link to="/architecture" className="flex items-center gap-2 px-4 py-3 bg-primary-foreground/10 text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
            <Cpu className="h-3.5 w-3.5" />
            Technical Architecture
          </Link>
          <Link to="/oecd-alignment" className="flex items-center gap-2 px-4 py-3 bg-primary-foreground/10 text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
            <CheckCircle className="h-3.5 w-3.5" />
            DPI Alignment Matrix
          </Link>
          <Link to="/deployment-scenarios" className="flex items-center gap-2 px-4 py-3 bg-primary-foreground/10 text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20">
            <Globe className="h-3.5 w-3.5" />
            Pilot Deployment Model
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <a href="#positioning" className="text-primary-foreground/30 hover:text-accent transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>

    {/* ─── WHY GRGF — GLOBAL POSITIONING ─── */}
    <Sec id="positioning" className="border-b border-border">
      <Title sub="Why current national DPIs remain fragmented — and how GRGF connects without replacing.">
        Why GRGF Is a Digital Public Infrastructure Layer — Not a Software Tool
      </Title>
      <div className="grid gap-6 sm:grid-cols-2 mb-8">
        <div className="governance-card border-l-2 border-l-primary">
          <h3 className="font-serif text-sm font-semibold mb-3">The Problem</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Governance decisions lack structural verifiability",
              "Audit reconstruction takes weeks, not minutes",
              "Cross-border institutional trust relies on reputation",
              "Policy enforcement is discretionary, not deterministic",
            ].map(t => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-destructive mt-0.5 shrink-0 text-xs">✕</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <h3 className="font-serif text-sm font-semibold mb-3">The GRGF Solution</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Every institutional action becomes a cryptographically sealed event",
              "Full decision chains reconstructable in under 30 minutes",
              "Cross-border trust via federation protocol — no bilateral treaties",
              "Deterministic policy enforcement — identical inputs, identical outputs",
            ].map(t => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="governance-card border-l-2 border-l-primary">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Governance, sovereignty, and non-interference model:</strong> GRGF integrates alongside — never replaces — existing national systems. It operates as a non-invasive integrity layer that records governance events from source systems without modifying their operational logic.
        </p>
      </div>
    </Sec>

    {/* ─── INSTITUTIONAL ALIGNMENT MATRIX ─── */}
    <Sec id="alignment" className="border-b border-border bg-muted/30">
      <Title sub="GRGF maps directly to established multilateral governance frameworks.">
        For Governments &amp; Multilaterals
      </Title>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-primary/20">
              <th className="text-left py-3 px-4 font-serif font-semibold text-foreground">GRGF Capability</th>
              <th className="text-left py-3 px-4 font-serif font-semibold text-foreground">World Bank Pillars</th>
              <th className="text-left py-3 px-4 font-serif font-semibold text-foreground">UN SDGs</th>
              <th className="text-left py-3 px-4 font-serif font-semibold text-foreground">OECD Principles</th>
            </tr>
          </thead>
          <tbody>
            {[
              { cap: "Immutable Record Layer", wb: "Institutional Integrity", un: "SDG 16", oecd: "Trust & Transparency" },
              { cap: "Audit Trails", wb: "Anti-Corruption", un: "SDG 16.5", oecd: "Accountability" },
              { cap: "Interoperability", wb: "Digital Gov Reform", un: "SDG 9", oecd: "Data Governance" },
              { cap: "Policy Enforcement", wb: "Rule of Law", un: "SDG 16.3", oecd: "Regulatory Quality" },
              { cap: "Federation Protocol", wb: "Cross-Border Trust", un: "SDG 17", oecd: "International Cooperation" },
            ].map(({ cap, wb, un, oecd }) => (
              <tr key={cap} className="border-b border-border hover:bg-muted/50 transition-colors">
                <td className="py-3 px-4 font-medium text-foreground">{cap}</td>
                <td className="py-3 px-4 text-muted-foreground">{wb}</td>
                <td className="py-3 px-4"><span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded-sm">{un}</span></td>
                <td className="py-3 px-4 text-muted-foreground">{oecd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/oecd-alignment" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        View Full OECD Alignment Checklist <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── ARCHITECTURE ─── */}
    <Sec id="architecture" className="border-b border-border">
      <Title sub="Three-layer sovereignty-preserving operating architecture.">
        Global Governance Operating Architecture
      </Title>
      <div className="space-y-3 max-w-3xl mb-8">
        {[
          { layer: "Layer 3", title: "Global Trust Layer", desc: "Cross-border verification, federation protocol, multilateral interoperability", color: "border-accent" },
          { layer: "Layer 2", title: "GRGF Verification Layer", desc: "Governance record custody, policy enforcement, authority validation, evidence backbone", color: "border-primary bg-primary/5" },
          { layer: "Layer 1", title: "National Systems", desc: "Existing registries, identity systems, payment rails, departmental databases", color: "border-muted-foreground/30" },
        ].map(({ layer, title, desc, color }) => (
          <div key={layer} className={`governance-card border-l-2 ${color}`}>
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-1 text-primary font-bold">{layer}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2 justify-center mb-6">
        {["Event Capture", "Normalization", "Policy Engine", "Evidence Store", "Hash Seal", "Verification API"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-primary shrink-0" />}
          </div>
        ))}
      </div>
      <Link to="/architecture" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        Full Architecture Detail <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── EVIDENCE & ASSURANCE ─── */}
    <Sec id="assurance" className="border-b border-border bg-muted/30">
      <Title sub="Audit-ready governance posture aligned with NIST, ISO 27001, and OECD safeguards.">
        Evidence &amp; Assurance
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {[
          { icon: Shield, title: "Governance Model", desc: "Formal charter with custodial neutrality, separation of powers, and anti-capture clauses." },
          { icon: Lock, title: "Security Posture", desc: "Zero-trust architecture. No administrative override. Append-only evidence backbone." },
          { icon: Database, title: "Data Minimization", desc: "Only governance metadata captured. No personal identifiers stored in evidence backbone." },
          { icon: CheckCircle, title: "Audit Capability", desc: "Full decision-chain reconstruction from any sealed governance event in under 30 minutes." },
          { icon: Globe, title: "Independent Verification", desc: "Any authorized party verifies record integrity without trusting operator or platform." },
          { icon: BarChart3, title: "Cybersecurity Alignment", desc: "NIST CSF mapping, ISO 27001 alignment, HSM key management, tamper-evident registry." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-primary mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <Link to="/safeguards-trust" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        View Full Safeguards Architecture <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── DEPLOYMENT MODEL ─── */}
    <Sec id="deployment" className="border-b border-border">
      <Title>National Pilot Implementation Model</Title>
      <div className="space-y-0 max-w-2xl">
        {[
          { phase: "Phase 1", title: "Readiness Assessment", desc: "Institutional governance maturity evaluation, stakeholder mapping, integration scoping", status: "Active" },
          { phase: "Phase 2", title: "Integration Nodes", desc: "Deploy connector to 1–3 source systems, encode initial policy rules, validate deterministic enforcement" },
          { phase: "Phase 3", title: "Controlled Deployment", desc: "Expand to operational environment, independent security audit, audit trail reconstruction exercises" },
          { phase: "Phase 4", title: "Institutional Scaling", desc: "Cross-department rollout, training programs, compliance reporting automation" },
          { phase: "Phase 5", title: "International Federation", desc: "Federation protocol activation, cross-border verification testing, multilateral alignment" },
        ].map((s, i) => (
          <div key={s.phase}>
            <div className="flex items-center gap-4 py-4">
              <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {i + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-sm font-semibold">{s.title}</h4>
                  {s.status && (
                    <span className="text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm bg-accent/20 text-accent">
                      {s.status.toUpperCase()}
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            </div>
            {i < 4 && <div className="ml-5 w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
      <Link to="/deployment-scenarios" className="mt-6 inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline">
        View Deployment Scenarios <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── STATUS ─── */}
    <Sec id="status" className="border-b border-border bg-muted/30">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: "Framework", value: "GRGF v1.0" },
          { label: "Pilot Node", value: "v0.1 — Evaluation Ready" },
          { label: "Patent", value: "CA 3,300,102 (Filed)" },
          { label: "Status", value: "Pre-Pilot" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card">
            <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-sm text-foreground font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── CLOSING ─── */}
    <Sec className="border-b border-border">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-4">
          Trust should not rely on reputation.
          <br />
          It should rely on structure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            Request Pilot Access
          </Link>
          <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm font-medium rounded-sm hover:bg-muted transition-colors">
            View Full Architecture
          </Link>
        </div>
      </div>
    </Sec>

    {/* ─── FOOTER ─── */}
    <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-12 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Infrastructure</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Governance Operating Layer<br />
              Deterministic Policy Enforcement<br />
              Append-Only Cryptographic Ledger
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Version 1.0 · Established 2024<br />
              Pilot Node v0.1 Available<br />
              Canadian Patent CA 3,300,102
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Global Record Governance Framework —<br />
              Invented and Owned by Tarek Wahid.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="text-[10px] text-primary-foreground/40 leading-relaxed mb-4">
            Governance disclaimer: This platform provides structured evaluation materials for institutional assessment. Not independently audited. All projections require pilot validation. Jurisdictional base: Canada. Global scope.
          </p>
          <p className="text-sm text-primary-foreground/70 font-serif italic text-center">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-primary-foreground/30 tracking-wide uppercase">
            GRGF · Governance Integrity Infrastructure · Reference Interface
          </p>
          <div className="flex items-center gap-4">
            <Link to="/safeguards-trust" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Evidence & Assurance</Link>
            <Link to="/sitemap" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Sitemap</Link>
            <Link to="/controlled-access" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">Institutional Engagement →</Link>
            <Link to="/contact" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;