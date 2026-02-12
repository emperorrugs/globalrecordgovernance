import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Shield, FileText, Users, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const levels = [
  {
    level: "Level 1",
    title: "Public Overview",
    desc: "General framework overview, public architecture summaries, and non-technical governance descriptions. Available without restriction.",
    access: "Open access",
    tag: "PUBLIC",
    tagClass: "text-success",
  },
  {
    level: "Level 2",
    title: "Institutional Review",
    desc: "Detailed technical architecture, compliance mappings, deployment models, and governance specifications. Requires institutional affiliation.",
    access: "Institutional approval required",
    tag: "APPROVAL",
    tagClass: "text-accent",
  },
  {
    level: "Level 3",
    title: "NDA Required",
    desc: "Database schemas, policy engine specifications, API endpoint documentation, and security architecture details. NDA required.",
    access: "NDA and institutional verification required",
    tag: "NDA",
    tagClass: "text-warning",
  },
  {
    level: "Level 4",
    title: "Restricted Deployment",
    desc: "Production deployment configurations, key management protocols, federation setup documentation, and sovereign node specifications. Pilot staging access.",
    access: "Government-level authorization required",
    tag: "RESTRICTED",
    tagClass: "text-destructive",
  },
];

const purposeOptions = [
  "Pilot assessment",
  "Compliance review",
  "Technical evaluation",
  "Policy alignment study",
  "Institutional due diligence",
  "Other",
];

const ControlledAccess = () => {
  const [acknowledged, setAcknowledged] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Request Received",
      description: "A controlled review is required before access is granted.",
    });
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Controlled Access — Pilot Requests"
        subtitle="Operational access and deeper technical artifacts are distributed through a controlled review process to protect integrity, security, and evaluation quality."
      />

      {/* Classification Levels */}
      <Section title="Classification Levels">
        <div className="space-y-4">
          {levels.map((l) => (
            <div key={l.level} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-16">
                  <p className={`text-[10px] font-mono uppercase tracking-wider ${l.tagClass}`}>{l.level}</p>
                  <p className={`text-[9px] font-mono mt-0.5 ${l.tagClass}/70`}>{l.tag}</p>
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
      <Section title="Access Governance Principles" className="border-t border-border bg-surface2/30">
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
        {submitted ? (
          <div className="governance-card border-l-2 border-l-success max-w-2xl">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-success shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-foreground font-medium mb-2">Request Received</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A controlled review is required before access is granted. You will be contacted at the institutional email provided within 5 business days.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="governance-card border-l-2 border-l-accent max-w-2xl">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Access to Level 2 and above requires formal institutional request. No public signups are accepted.
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullname" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Full Name</Label>
                <Input id="fullname" type="text" placeholder="Dr. Jane Doe" className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="org" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Organization</Label>
                <Input id="org" type="text" placeholder="Ministry of Finance, Audit Office, etc." className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="role" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Title / Role</Label>
                <Input id="role" type="text" placeholder="Chief Information Officer, Policy Director, etc." className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="email" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Institutional Email</Label>
                <Input id="email" type="email" placeholder="name@institution.gov" className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="country" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Country / Region</Label>
                <Input id="country" type="text" placeholder="Canada, United Kingdom, etc." className="mt-1" required />
              </div>
              <div>
                <Label htmlFor="purpose" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Intended Evaluation Purpose</Label>
                <select
                  id="purpose"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="mt-1 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  required
                >
                  <option value="">Select purpose...</option>
                  {purposeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              {purpose === "Other" && (
                <div>
                  <Label htmlFor="purposeDetail" className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider">Please Specify</Label>
                  <Input id="purposeDetail" type="text" placeholder="Describe your evaluation purpose" className="mt-1" required />
                </div>
              )}
              <div className="flex items-start gap-2">
                <input
                  id="crp"
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="mt-1 shrink-0"
                  required
                />
                <label htmlFor="crp" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  I acknowledge the GRGF Controlled Distribution Protocol and agree not to publicly redistribute restricted artifacts.
                </label>
              </div>
              <button
                type="submit"
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
          </form>
        )}
      </Section>

      {/* What Happens Next */}
      <Section title="What Happens Next" className="border-t border-border bg-surface2/30">
        <div className="max-w-2xl space-y-0">
          {[
            { step: "1", title: "Intake Review", desc: "Institutional validation of your identity, affiliation, and stated evaluation purpose." },
            { step: "2", title: "Optional NDA Step", desc: "If required by classification level, a mutual NDA is executed before restricted materials are shared." },
            { step: "3", title: "Approved Access", desc: "Approved reviewers receive restricted documents, evaluation instructions, and time-limited access links (if applicable)." },
          ].map((s, i, arr) => (
            <div key={s.step}>
              <div className="flex items-start gap-4 py-4">
                <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              {i < arr.length - 1 && <div className="ml-4 w-px h-3 bg-border" />}
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground/60 italic">
          Direct download links are never exposed automatically. Access is granted through manual approval only.
        </p>
      </Section>

      {/* No Public Signup */}
      <Section className="border-t border-border">
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
