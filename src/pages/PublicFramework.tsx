import { Link } from "react-router-dom";
import { ArrowRight, Shield, Layers, Eye, Scale, FileText, Globe, CheckCircle2 } from "lucide-react";

const pillars = [
  {
    icon: Layers,
    title: "Execution-Time Recording",
    desc: "Governance events are captured at the exact moment of occurrence — not retroactively, not by approximation. Each action is bound to timestamp, context, actor, and authority reference.",
  },
  {
    icon: Shield,
    title: "Authority Binding",
    desc: "Every recorded action links to the legal mandate, institutional role, and delegated authority under which it was performed. Authority is verifiable, not assumed.",
  },
  {
    icon: Eye,
    title: "Independent Verification",
    desc: "Any authorized party can verify record integrity, status, and provenance without exposing confidential content. Zero-knowledge proof compatible.",
  },
  {
    icon: Scale,
    title: "Deterministic Audit",
    desc: "Audit trails are append-only, hash-chained, and independently reconstructable. No record can be altered without detection.",
  },
];

const principles = [
  "Records are captured at execution time, not after",
  "Every action is bound to authority and legal basis",
  "Hash-chain integrity ensures tamper detection",
  "Omissions are tracked — what didn't happen matters",
  "Multi-tenant isolation preserves sovereignty",
  "Public verification without data exposure",
  "Federation-ready for cross-jurisdiction governance",
  "Anti-capture mechanisms prevent institutional override",
];

export default function PublicFramework() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">The Framework</p>
        <h1 className="text-display font-bold text-foreground mb-6">
          Global Record Governance Framework
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          GRGF™ is a sovereign-grade Digital Public Infrastructure trust layer for recording,
          preserving, and verifying institutional actions, decisions, and omissions over time —
          without interpretation, enforcement, or decision authority.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {pillars.map((p) => (
          <div key={p.title} className="p-6 lg:p-8 bg-card border border-border rounded-xl">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <p.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-heading-3 font-bold text-foreground mb-3">{p.title}</h3>
            <p className="text-body text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Core Principles */}
      <div className="bg-muted/30 border border-border rounded-xl p-8 lg:p-10 mb-20">
        <h2 className="text-heading-2 font-bold text-foreground mb-6">Core Principles</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {principles.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground">{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: "Architecture", path: "/architecture", desc: "Six-layer deterministic model", icon: Layers },
          { title: "Documents", path: "/documents", desc: "Official institutional library", icon: FileText },
          { title: "International", path: "/oecd-alignment", desc: "OECD, World Bank, UN alignment", icon: Globe },
        ].map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="group flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-sm transition-all"
          >
            <item.icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-caption text-muted-foreground">{item.desc}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto mt-0.5 group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
}
