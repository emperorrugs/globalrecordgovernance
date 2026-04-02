import { Link } from "react-router-dom";
import { Shield, ArrowRight, Globe, Scale, Layers, Award } from "lucide-react";

export default function PublicAbout() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-16">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">About</p>
        <h1 className="text-display font-bold text-foreground mb-6">About GRGF™</h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          The Global Record Governance Framework is a sovereign-grade Digital Public Infrastructure
          trust layer for recording, preserving, and verifying institutional actions, decisions,
          and omissions over time — without interpretation, enforcement, or decision authority.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card border border-border rounded-xl p-8">
          <Award className="h-6 w-6 text-primary mb-4" />
          <h3 className="text-heading-3 font-bold text-foreground mb-3">Origin & IP</h3>
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            GRGF™ was invented and architected by Tarek Wahid. The framework is protected under
            Canadian Patent No. CA 3,300,102 and positioned as neutral sovereign infrastructure.
          </p>
          <Link to="/ip-status" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            IP Status <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <Globe className="h-6 w-6 text-primary mb-4" />
          <h3 className="text-heading-3 font-bold text-foreground mb-3">International Positioning</h3>
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            Aligned with OECD Digital Government Policy Framework, World Bank GovTech Maturity Index,
            UN SDG 16, and G20 DPI principles. Designed for sovereign deployment.
          </p>
          <Link to="/oecd-alignment" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Standards Alignment <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <div className="bg-muted/30 border border-border rounded-xl p-8 lg:p-10">
        <h2 className="text-heading-2 font-bold text-foreground mb-6">What GRGF™ Is — and What It Is Not</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">GRGF™ Is:</h4>
            <ul className="space-y-2">
              {[
                "An execution-time truth layer",
                "A governance record integrity system",
                "An authority-binding architecture",
                "An independent verification protocol",
                "A sovereign DPI infrastructure component",
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-primary mt-1">✓</span> {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">GRGF™ Is Not:</h4>
            <ul className="space-y-2">
              {[
                "A blockchain or cryptocurrency system",
                "A document management tool",
                "A case management system",
                "An enforcement or decision engine",
                "A replacement for existing IT systems",
              ].map(t => (
                <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive mt-1">✗</span> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
