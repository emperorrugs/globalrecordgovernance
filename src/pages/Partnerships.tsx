import { Link } from "react-router-dom";
import { ArrowRight, Globe, Handshake, Shield, Building, Network, Users } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Partnerships = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Global Engagement</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Global Partnerships
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Strategic alliances and institutional cooperation frameworks enabling governance integrity infrastructure deployment at national and international scale.
        </p>
      </div>
    </header>

    {/* Partnership Models */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Cooperation Models</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Institutional Partnership Framework</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { icon: Globe, title: "Federation Partners", desc: "National governments and institutional bodies deploying sovereign GRGF nodes. Full architectural sovereignty with cross-border verification capability.", items: ["Sovereign node deployment", "Federation protocol integration", "Cross-border trust verification", "Independent governance control"] },
          { icon: Building, title: "Standards Development Partners", desc: "Organizations contributing to the evolution of governance integrity standards through joint research and policy development.", items: ["Standards committee participation", "Joint research programmes", "Co-authored policy frameworks", "Public consultation leadership"] },
          { icon: Shield, title: "Audit & Assurance Partners", desc: "Independent assessment organizations providing third-party validation for GRGF recognition certification processes.", items: ["Accredited audit provider network", "Assessment methodology alignment", "Cross-jurisdiction validation", "Continuous monitoring services"] },
          { icon: Network, title: "Technology Integration Partners", desc: "Infrastructure providers enabling GRGF deployment across diverse institutional environments and technology stacks.", items: ["API integration certification", "Deployment support services", "Interoperability validation", "Technical documentation contribution"] },
        ].map(({ icon: Icon, title, desc, items }) => (
          <div key={title} className="governance-card-elevated">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-heading-3 font-semibold mb-3">{title}</h3>
            <p className="text-caption text-muted-foreground leading-relaxed mb-4">{desc}</p>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2 text-caption text-muted-foreground">
                  <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Sec>

    {/* Regional Focus */}
    <Sec className="border-b border-border bg-muted/40">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Geographic Scope</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Regional Partnership Strategy</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { region: "Americas", focus: "Anchor jurisdiction — Canada. Expansion through OECD member alignment, OAS governance cooperation, and bilateral DPI agreements.", status: "Primary" },
          { region: "Europe & Central Asia", focus: "EU digital governance alignment, Council of Europe standards integration, and OSCE institutional transparency frameworks.", status: "Engagement" },
          { region: "Asia-Pacific & Africa", focus: "Development-stage DPI adoption, World Bank governance reform partnerships, and regional federation node pilots.", status: "Strategic" },
        ].map(({ region, focus, status }) => (
          <div key={region} className="governance-card-elevated">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-serif text-heading-3 font-semibold">{region}</h3>
              <span className="text-overline font-mono px-2 py-0.5 bg-accent/15 text-accent">{status.toUpperCase()}</span>
            </div>
            <p className="text-caption text-muted-foreground leading-relaxed">{focus}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Partner With the Foundation</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          Institutional partnership inquiries are reviewed by the Foundation's strategic engagement team. All partnerships operate under formal agreements ensuring mutual institutional independence.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide">
          Submit Partnership Inquiry <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default Partnerships;
