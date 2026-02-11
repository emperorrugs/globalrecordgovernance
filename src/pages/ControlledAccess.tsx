import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Shield, FileText, Users, CheckCircle, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const levels = [
  {
    level: "Level 1",
    title: "Public Overview",
    desc: "General framework overview, public architecture summaries, and non-technical governance descriptions. Available without restriction.",
    access: "Open access",
    color: "text-muted-foreground",
  },
  {
    level: "Level 2",
    title: "Institutional Review",
    desc: "Detailed technical architecture, compliance mappings, deployment models, and governance specifications. Requires institutional affiliation.",
    access: "Institutional email required",
    color: "text-accent",
  },
  {
    level: "Level 3",
    title: "Restricted Technical Detail",
    desc: "Database schemas, policy engine specifications, API endpoint documentation, and security architecture details. NDA required.",
    access: "NDA and institutional verification required",
    color: "text-destructive",
  },
  {
    level: "Level 4",
    title: "Controlled Sovereign Deployment",
    desc: "Production deployment configurations, key management protocols, federation setup documentation, and sovereign node specifications.",
    access: "Government-level authorization required",
    color: "text-destructive",
  },
];

const ControlledAccess = () => {
  const [acknowledged, setAcknowledged] = useState(false);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Controlled Distribution Protocol"
        subtitle="Institutional access is governed by a classification framework ensuring appropriate distribution of governance infrastructure documentation."
      />

      {/* Classification Levels */}
      <Section title="Classification Levels">
        <div className="space-y-4">
          {levels.map((l) => (
            <div key={l.level} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16">
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${l.color}`}>{l.level}</p>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold mb-1">{l.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">{l.desc}</p>
                  <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wider flex items-center gap-1">
                    <Lock className="h-3 w-3" /> {l.access}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Access Principles */}
      <Section title="Access Governance Principles" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Users, title: "Identity Verification", desc: "All access requests require formal institutional identity verification. Personal or commercial email addresses are not accepted." },
            { icon: FileText, title: "Declaration of Intent", desc: "Requestors must declare the intended evaluation purpose and scope of institutional review prior to access." },
            { icon: Shield, title: "Protocol Adherence", desc: "Access is conditional upon acknowledgment and adherence to the Controlled Distribution Protocol and its classification boundaries." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Request Form */}
      <Section title="Request Institutional Access" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent max-w-2xl">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Access to Level 2 and above requires formal institutional request. No public signups are accepted.
          </p>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Institutional Email</Label>
              <Input id="email" type="email" placeholder="name@institution.gov" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="org" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Organization</Label>
              <Input id="org" type="text" placeholder="Ministry of Finance, Audit Office, etc." className="mt-1" />
            </div>
            <div>
              <Label htmlFor="purpose" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Intended Evaluation Purpose</Label>
              <Input id="purpose" type="text" placeholder="Pilot assessment, compliance review, technical evaluation, etc." className="mt-1" />
            </div>
            <div className="flex items-start gap-2">
              <input
                id="crp"
                type="checkbox"
                checked={acknowledged}
                onChange={(e) => setAcknowledged(e.target.checked)}
                className="mt-1 shrink-0"
              />
              <label htmlFor="crp" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I acknowledge the GRGF Controlled Distribution Protocol and agree to handle all materials in accordance with their assigned classification level.
              </label>
            </div>
            <button
              disabled={!acknowledged}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Lock className="h-4 w-4" />
              Submit Access Request
            </button>
          </div>
          <p className="mt-4 text-[10px] text-muted-foreground/50 italic">
            Access requests are reviewed within 5 business days. Approval is subject to institutional verification.
          </p>
        </div>
      </Section>

      {/* No Public Signup */}
      <Section className="border-t border-border bg-card/30">
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-medium mb-2">No public signups. No open registration.</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                GRGF operates under a controlled distribution model. Access is granted exclusively to verified institutional representatives with documented evaluation purposes. This ensures the integrity and appropriate use of sovereign-grade governance infrastructure documentation.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default ControlledAccess;