import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, BookOpen, Globe, Shield, Building } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const Membership = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Institutional Authority</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Membership & Advisory
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Structured institutional membership, governance advisory council, and professional certification programmes for governance integrity practitioners.
        </p>
      </div>
    </header>

    {/* Membership Tiers */}
    <Sec className="border-b border-border">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Membership</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Institutional Membership Tiers</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          { tier: "Observer", icon: Globe, benefits: ["Access to published standards and frameworks", "Public consultation participation", "Annual governance integrity report", "Foundation newsletter and updates"], audience: "Academic institutions, civil society, media organizations" },
          { tier: "Associate", icon: Building, benefits: ["All Observer benefits", "Standards committee participation eligibility", "Pre-release access to draft frameworks", "Institutional peer review network", "Academy certification discount"], audience: "Government agencies, regulatory bodies, NGOs" },
          { tier: "Institutional Partner", icon: Shield, benefits: ["All Associate benefits", "Governance Board advisory participation", "Federation node deployment priority", "Joint research and co-development", "Dedicated assessment pathway", "Named institutional recognition"], audience: "National governments, multilateral organizations, international bodies" },
        ].map(({ tier, icon: Icon, benefits, audience }) => (
          <div key={tier} className="governance-card-elevated flex flex-col">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-heading-2 font-semibold mb-4">{tier}</h3>
            <ul className="space-y-2 flex-1 mb-6">
              {benefits.map(b => (
                <li key={b} className="flex items-start gap-2 text-caption text-muted-foreground">
                  <span className="w-1 h-1 bg-accent rounded-full shrink-0 mt-2" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-border">
              <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-1">Typical Members</p>
              <p className="text-caption text-muted-foreground">{audience}</p>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* Governance Board */}
    <Sec className="border-b border-border bg-muted/40">
      <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Governance Structure</p>
      <h2 className="institutional-heading text-heading-1 font-semibold mb-10">Advisory Council & Governance Board</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {[
          { title: "Governance Board", desc: "Strategic oversight body with independent membership, term limits, and formal separation from operational management. Responsible for charter stewardship, institutional direction, and anti-capture clause enforcement.", items: ["Independent chair with rotating 3-year terms", "Minimum 5 institutional seats", "Annual transparency report publication", "Formal conflict-of-interest declarations"] },
          { title: "Standards Committee", desc: "Technical body responsible for recognition criteria development, compliance methodology governance, and standards publication cycle management.", items: ["Cross-disciplinary representation", "Open public consultation periods", "Structured amendment process", "Version-controlled standards registry"] },
          { title: "Technical Review Panel", desc: "Independent assessment body conducting architecture validation, security evaluation, and deployment verification for recognition applicants.", items: ["Peer-reviewed assessment methodology", "No commercial relationships with applicants", "Published evaluation criteria", "Formal appeals mechanism"] },
          { title: "Ethics & Compliance Unit", desc: "Oversight function managing transparency reporting, re-certification cycles, credential revocation, and institutional neutrality enforcement.", items: ["Whistleblower protection framework", "Annual ethics review cycle", "Public complaint mechanism", "Formal revocation protocols"] },
        ].map(({ title, desc, items }) => (
          <div key={title} className="governance-card-elevated">
            <h3 className="font-serif text-heading-3 font-semibold mb-3">{title}</h3>
            <p className="text-caption text-muted-foreground leading-relaxed mb-4">{desc}</p>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2 text-caption text-muted-foreground">
                  <span className="text-accent text-xs mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Sec>

    {/* CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Join the Foundation</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          Institutional membership applications are reviewed on a rolling basis. All membership tiers include access to the Foundation's governance standards and public consultation processes.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide">
            Apply for Membership <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium">
            Institutional Inquiry
          </Link>
        </div>
      </div>
    </Sec>
  </div>
);

export default Membership;
