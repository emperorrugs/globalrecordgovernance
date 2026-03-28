import { Link } from "react-router-dom";
import {
  Shield, ArrowRight, Lock, Globe, FileText, CheckCircle2,
  Building2, Heart, Scale, Landmark, GraduationCap, Zap,
  Wrench, Leaf, Users, ShoppingCart, Gavel, Radio,
  Search, ChevronRight, Layers, Eye, Database, Network,
} from "lucide-react";
import { useState } from "react";

/* ── Sector Data ── */
const sectors = [
  { name: "Government", icon: Landmark, count: 18 },
  { name: "Healthcare", icon: Heart, count: 12 },
  { name: "Finance", icon: Scale, count: 14 },
  { name: "Infrastructure", icon: Building2, count: 10 },
  { name: "Justice", icon: Gavel, count: 11 },
  { name: "Education", icon: GraduationCap, count: 9 },
  { name: "Public Safety", icon: Shield, count: 8 },
  { name: "Utilities", icon: Zap, count: 7 },
  { name: "Social Services", icon: Users, count: 10 },
  { name: "Procurement", icon: ShoppingCart, count: 9 },
  { name: "Environment", icon: Leaf, count: 8 },
  { name: "Trade", icon: Globe, count: 10 },
];

const applications = [
  { title: "Procurement Approval Governance", sector: "Government" },
  { title: "Clinical Inspection Records", sector: "Healthcare" },
  { title: "Regulatory Compliance Logging", sector: "Finance" },
  { title: "Permit & License Issuance", sector: "Infrastructure" },
  { title: "Incident Reporting Chain", sector: "Public Safety" },
  { title: "Service Delivery Tracking", sector: "Social Services" },
  { title: "Court Decision Records", sector: "Justice" },
  { title: "Environmental Impact Audits", sector: "Environment" },
  { title: "Trade Certification Sealing", sector: "Trade" },
];

const documents = [
  { title: "Sovereign Binder", desc: "Complete institutional framework", icon: FileText },
  { title: "126 Applications Catalog", desc: "Full sector application coverage", icon: Database },
  { title: "Architecture Paper", desc: "Six-layer deterministic model", icon: Layers },
  { title: "DPI Positioning", desc: "International alignment strategy", icon: Globe },
  { title: "Verification Guide", desc: "Integrity verification protocol", icon: Shield },
];

const archLayers = [
  { label: "Event Capture", desc: "Normalize governance events at execution time" },
  { label: "Authority Binding", desc: "Bind actions to mandate, role, and legal basis" },
  { label: "Immutable Record", desc: "SHA-256 hash-chained ledger with chain integrity" },
  { label: "Verification Engine", desc: "Independent verification without data exposure" },
  { label: "Federation Protocol", desc: "Cross-jurisdiction record interoperability" },
  { label: "Audit Intelligence", desc: "Deterministic audit trail with integrity proofs" },
];

export default function HomePage() {
  const [verifyId, setVerifyId] = useState("");

  return (
    <div className="bg-background text-foreground">

      {/* ═══ SECTION 1 — HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 0.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }} />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-[11px] font-medium text-primary tracking-wide uppercase mb-8">
              <Shield className="h-3 w-3" />
              Sovereign Digital Public Infrastructure
            </div>
            <h1 className="text-display-xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
              The Execution-Time
              <br />
              <span className="text-primary">Truth Layer</span>
              <br />
              of Digital Public
              <br />
              Infrastructure
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-xl leading-relaxed mb-10">
              GRGF enables governments and institutions to capture, verify, and audit decisions,
              actions, and events at the moment they occur — transforming trust into
              proof-based governance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/framework"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm"
              >
                Explore the Framework
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/app/login"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border text-foreground rounded-lg hover:bg-muted/50 transition-all"
              >
                <Lock className="h-4 w-4" />
                Access Core System
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2 — DUAL ENTRY ═══ */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Framework Portal */}
            <div className="group relative bg-card border border-border rounded-xl p-8 lg:p-10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-heading-2 font-bold text-foreground mb-3">Framework Portal</h2>
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                Explore the architecture, applications, documents, and strategic positioning
                of the Global Record Governance Framework.
              </p>
              <ul className="space-y-2 mb-8">
                {["Architecture & theory", "126 sector applications", "Institutional documents", "DPI positioning", "Verification access"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                to="/framework"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                Enter Framework Portal
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Core System */}
            <div className="group relative bg-foreground text-background rounded-xl p-8 lg:p-10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-background/10 flex items-center justify-center mb-6">
                <Lock className="h-6 w-6 text-background" />
              </div>
              <h2 className="text-heading-2 font-bold mb-3">Core System</h2>
              <p className="text-body text-background/70 mb-6 leading-relaxed">
                Access the operational GRGF governance system. Create records, manage
                workflows, verify integrity, and audit institutional actions.
              </p>
              <ul className="space-y-2 mb-8">
                {["Record governance engine", "Verification & sealing", "Audit trail", "Workflow management", "Institutional dashboards"].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-background/60">
                      <CheckCircle2 className="h-3.5 w-3.5 text-background/50 shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <Link
                to="/app/login"
                className="inline-flex items-center gap-2 text-sm font-semibold text-background hover:text-background/80 transition-colors"
              >
                Login to Core System
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3 — EXECUTIVE THESIS ═══ */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">A New Infrastructure Category</p>
            <h2 className="text-display font-bold text-foreground mb-6">
              A New Category of Governance Infrastructure
            </h2>
            <p className="text-body-lg text-muted-foreground leading-relaxed">
              GRGF introduces a new infrastructure layer where governance actions are recorded,
              verified, and auditable at execution time. It bridges the gap between
              decision-making and verifiable truth.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Layers,
                title: "Execution-Time Recording",
                desc: "Capture governance events at the exact moment they occur, binding them to context, authority, and timestamp.",
              },
              {
                icon: Shield,
                title: "Authority Binding",
                desc: "Every record is linked to the mandate, role, and legal basis under which the action was authorized.",
              },
              {
                icon: Eye,
                title: "Independent Verification",
                desc: "Records can be verified by any authorized party without exposing confidential content.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-heading-3 font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-body text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4 — ARCHITECTURE ═══ */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="lg:w-2/5">
              <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">System Design</p>
              <h2 className="text-heading-1 font-bold text-foreground mb-4">
                Deterministic Governance Architecture
              </h2>
              <p className="text-body text-muted-foreground leading-relaxed mb-6">
                A six-layer architecture that ensures every governance action is captured,
                bound to authority, sealed with integrity, and independently verifiable.
              </p>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                View Full Architecture
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="lg:w-3/5 w-full space-y-3">
              {archLayers.map((layer, i) => (
                <div
                  key={layer.label}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/20 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{layer.label}</h4>
                    <p className="text-caption text-muted-foreground mt-0.5">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5 — SECTORS ═══ */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Coverage</p>
            <h2 className="text-heading-1 font-bold text-foreground mb-4">
              12 Sectors. 126 Applications.
            </h2>
            <p className="text-body text-muted-foreground max-w-xl mx-auto">
              GRGF applies across the full spectrum of governance systems, from healthcare
              to justice, procurement to environmental oversight.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <sector.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{sector.name}</p>
                  <p className="text-[11px] text-muted-foreground">{sector.count} applications</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/sectors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Explore Sector Applications
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6 — APPLICATIONS ═══ */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Applications</p>
            <h2 className="text-heading-1 font-bold text-foreground mb-4">
              126 Applications Across Governance Systems
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app) => (
              <div
                key={app.title}
                className="p-5 bg-card border border-border rounded-lg hover:border-primary/20 transition-colors"
              >
                <p className="text-[11px] text-primary font-medium uppercase tracking-wide mb-2">{app.sector}</p>
                <h4 className="text-sm font-semibold text-foreground">{app.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/applications"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold border border-border rounded-lg hover:bg-muted/50 transition-all"
            >
              View Full Applications Catalog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 7 — DOCUMENTS ═══ */}
      <section className="border-t border-border bg-muted/30">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Resources</p>
            <h2 className="text-heading-1 font-bold text-foreground mb-4">
              Official GRGF Documents
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <doc.icon className="h-6 w-6 text-primary mb-4" />
                <h4 className="text-sm font-semibold text-foreground mb-1">{doc.title}</h4>
                <p className="text-caption text-muted-foreground">{doc.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/documents"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Access Documents
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 8 — VERIFICATION ═══ */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-heading-1 font-bold text-foreground mb-3">
              Verify a Record
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Enter a record ID or verification token to confirm integrity,
              status, and provenance.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="text"
                value={verifyId}
                onChange={(e) => setVerifyId(e.target.value)}
                placeholder="Enter Record ID or Token"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
              />
              <Link
                to={`/verify${verifyId ? `?id=${verifyId}` : ""}`}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all shrink-0"
              >
                Verify
              </Link>
            </div>
            <Link
              to="/verify"
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mt-4 transition-colors"
            >
              Open Full Verification Portal
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 9 — SECURITY & TRUST ═══ */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-overline font-semibold text-background/50 tracking-widest uppercase mb-4">Security</p>
            <h2 className="text-heading-1 font-bold mb-4">
              Built for Sovereign-Grade Integrity
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              "SHA-256 cryptographic integrity",
              "Immutable append-only audit trail",
              "Authority-bound record sealing",
              "Role-based access control",
              "Multi-tenant data isolation",
              "Zero-knowledge verification",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 text-background/50 mt-0.5 shrink-0" />
                <span className="text-sm text-background/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/security-trust"
              className="inline-flex items-center gap-2 text-sm font-semibold text-background/70 hover:text-background transition-colors"
            >
              Security & Trust Center
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 10 — FINAL CTA ═══ */}
      <section className="border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center">
          <h2 className="text-display font-bold text-foreground mb-4">
            Deploy GRGF in Your Institution
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-lg mx-auto mb-10">
            Ready to implement sovereign-grade governance infrastructure?
            Contact us for a pilot engagement or institutional demonstration.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all shadow-sm"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold border border-border rounded-lg hover:bg-muted/50 transition-all"
            >
              Contact
            </Link>
            <Link
              to="/app/login"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold border border-border rounded-lg hover:bg-muted/50 transition-all"
            >
              <Lock className="h-4 w-4" />
              Access Core System
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
