import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Cpu, Globe, Zap, BarChart3 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Sustainability = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Environmental Commitment</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Digital Sustainability
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Environmental impact assessment, digital carbon footprint statement, and sustainability commitments for governance infrastructure operations.
        </p>
      </div>
    </header>

    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Sustainability Principles</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Our Commitments</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Leaf, title: "Carbon-Aware Architecture", desc: "Infrastructure designed for minimal computational overhead. Governance event processing optimised for energy efficiency through deterministic, stateless operations." },
            { icon: Cpu, title: "Efficient by Design", desc: "No blockchain — governance records use lightweight cryptographic hashing (SHA-256) rather than energy-intensive consensus mechanisms. Orders of magnitude more efficient." },
            { icon: Globe, title: "Regional Deployment", desc: "Federation protocol enables data-sovereign regional nodes, reducing cross-continental data transfer and associated energy costs." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card-elevated group hover:border-accent/30 transition-all">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Carbon Footprint</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Digital Infrastructure Impact</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { metric: "Static Platform", value: "< 0.5g CO₂", detail: "Per page view (CDN-served)" },
            { metric: "Event Processing", value: "< 0.01g CO₂", detail: "Per governance event hash" },
            { metric: "Storage", value: "Minimal", detail: "Append-only text records" },
            { metric: "vs. Blockchain", value: "99.9%", detail: "Lower energy per transaction" },
          ].map(({ metric, value, detail }) => (
            <div key={metric} className="governance-card-elevated text-center">
              <p className="text-overline text-muted-foreground/60 mb-2">{metric}</p>
              <p className="text-xl font-serif font-bold text-accent">{value}</p>
              <p className="text-overline text-muted-foreground/50 mt-1">{detail}</p>
            </div>
          ))}
        </div>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-caption text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Methodology note:</strong> Carbon estimates are based on the Shift Project's Lean ICT methodology and Website Carbon Calculator standards. GRGF's architecture deliberately avoids energy-intensive consensus mechanisms (proof-of-work/stake), reducing per-transaction energy costs by approximately 99.9% compared to blockchain-based governance solutions.
          </p>
        </div>
      </FadeIn>
    </Sec>

    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">SDG Alignment</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Sustainable Development Goals</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { sdg: "SDG 9", title: "Industry, Innovation & Infrastructure", contribution: "Resilient, sustainable governance infrastructure accessible to developing nations through federation protocol." },
            { sdg: "SDG 12", title: "Responsible Consumption & Production", contribution: "Energy-efficient design. No wasteful computation. Minimal storage footprint through structured, normalised data." },
            { sdg: "SDG 13", title: "Climate Action", contribution: "Carbon-aware architecture choices. Public carbon footprint disclosure. Commitment to renewable-powered hosting." },
            { sdg: "SDG 16", title: "Peace, Justice & Strong Institutions", contribution: "Core mission alignment: transparent, accountable, effective institutional governance at all levels." },
          ].map(({ sdg, title, contribution }) => (
            <div key={sdg} className="governance-card-elevated flex gap-4 hover:border-accent/20 transition-all">
              <span className="text-xs font-mono font-bold text-accent shrink-0 mt-0.5">{sdg}</span>
              <div>
                <h4 className="font-serif text-heading-3 font-semibold mb-1">{title}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed">{contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    <Sec className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <Leaf className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Continuous Improvement</h2>
          <p className="text-body text-primary-foreground/60 mb-4">
            The Global Record Governance Framework (GRGF) commits to annual sustainability reporting, progressive carbon reduction targets, and transparent disclosure of environmental impact metrics.
          </p>
          <p className="text-overline text-primary-foreground/30">Sustainability report published annually · Next report: Q4 2026</p>
        </div>
      </FadeIn>
    </Sec>
  </div>
);

export default Sustainability;
