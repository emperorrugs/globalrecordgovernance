import { useState } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Shield, FileText, CheckCircle, AlertTriangle, Building2, Globe, Eye, Scale } from "lucide-react";

const classificationLevels = [
  {
    level: "Level 1",
    title: "Public Overview",
    access: "OPEN",
    color: "text-accent",
    items: ["Executive summaries", "Conceptual whitepapers", "Non-sensitive architecture summaries", "Website materials"],
  },
  {
    level: "Level 2",
    title: "Institutional Review",
    access: "INSTITUTIONAL REQUEST",
    color: "text-accent",
    items: ["Full architecture whitepaper", "Security whitepaper", "Deployment manual", "ROI modeling framework", "Governance model"],
  },
  {
    level: "Level 3",
    title: "Restricted Technical Detail",
    access: "NDA REQUIRED",
    color: "text-destructive",
    items: ["Detailed schema definitions", "Policy encoding templates", "Integration specifications", "Node architecture details"],
  },
  {
    level: "Level 4",
    title: "Controlled Sovereign Deployment",
    access: "AUTHORIZED GOVERNMENT ONLY",
    color: "text-destructive",
    items: ["National configuration plans", "Deployment-specific risk assessments", "Security audit findings", "Internal roadmap materials"],
  },
];

const InstitutionalBriefing = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Request Institutional Briefing"
        subtitle="Controlled access to GRGF architecture, security, deployment, and governance documentation under the Controlled Distribution Protocol."
      />

      {/* CRP Notice */}
      <Section>
        <div className="bg-destructive/5 border border-destructive/20 rounded-sm px-5 py-4 flex items-start gap-3 mb-8">
          <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Controlled Distribution Protocol Active</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              GRGF documentation is distributed under the Controlled Distribution Protocol (CRP v1.0). Access to Level 2+ materials requires formal institutional request and identity verification. Level 3+ materials require executed NDA.
            </p>
          </div>
        </div>
      </Section>

      {/* Classification Levels */}
      <Section title="Document Classification Levels" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {classificationLevels.map((cl) => (
            <div key={cl.level} className="governance-card">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-accent/70 uppercase tracking-wider">{cl.level}</span>
                <span className={`text-[10px] font-mono ${cl.color} tracking-wider`}>· {cl.access}</span>
              </div>
              <h4 className="font-serif text-sm font-semibold mb-2">{cl.title}</h4>
              <ul className="space-y-1.5">
                {cl.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Briefing Package Contents */}
      <Section title="Institutional Briefing Package" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            The standard institutional briefing package includes:
          </p>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              "Executive Summary",
              "Architecture Overview",
              "Security Summary",
              "Deployment Framework",
              "Governance Overview",
              "ROI Snapshot",
              "Confidential Release Protocol Notice",
              "Optional NDA Documentation",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 text-accent/60 shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Request Form */}
      <Section title="Submit Access Request" className="border-t border-border">
        {submitted ? (
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-base font-semibold mb-2">Request Received</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your request is under review in accordance with the GRGF Controlled Distribution Protocol. You will receive a response at the provided institutional email address within 5–10 business days.
                </p>
                <p className="mt-3 text-[10px] font-mono text-muted-foreground/50 tracking-wider">
                  CRP v1.0 · INSTITUTIONAL REVIEW · ACCESS LOGGED
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="governance-card max-w-2xl">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">Full Name *</label>
                <input
                  required
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="e.g. Dr. Sarah Chen"
                />
              </div>

              {/* Institution */}
              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">Institution / Organization *</label>
                <input
                  required
                  type="text"
                  className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="e.g. Treasury Board of Canada Secretariat"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">Official Institutional Email *</label>
                <input
                  required
                  type="email"
                  className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="name@institution.gov"
                />
                <p className="text-[10px] text-muted-foreground/60 mt-1">Personal email addresses (Gmail, Yahoo, etc.) will not be accepted.</p>
              </div>

              {/* Role */}
              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">Institutional Role *</label>
                <select
                  required
                  className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="">Select role category</option>
                  <option value="government">Government / Public Administration</option>
                  <option value="multilateral">Multilateral Institution (World Bank, OECD, etc.)</option>
                  <option value="audit">National Audit Office / Oversight Body</option>
                  <option value="treasury">Treasury / Ministry of Finance</option>
                  <option value="cio">CIO / CTO Office</option>
                  <option value="regulator">Regulatory Authority</option>
                  <option value="judiciary">Judiciary / Courts</option>
                  <option value="academic">Academic / Research Institution</option>
                  <option value="other">Other Institutional Role</option>
                </select>
              </div>

              {/* Purpose */}
              <div>
                <label className="text-xs font-medium text-foreground block mb-1.5">Intended Use *</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Briefly describe the purpose of your review (e.g., pilot evaluation, policy alignment, security assessment)."
                />
              </div>

              {/* NDA checkbox */}
              <div className="flex items-start gap-2">
                <input type="checkbox" id="nda" className="mt-1 accent-accent" />
                <label htmlFor="nda" className="text-xs text-muted-foreground leading-relaxed">
                  I am willing to execute a Non-Disclosure Agreement for access to Level 3+ restricted materials.
                </label>
              </div>

              {/* Confidentiality acknowledgment */}
              <div className="flex items-start gap-2">
                <input type="checkbox" required id="confidentiality" className="mt-1 accent-accent" />
                <label htmlFor="confidentiality" className="text-xs text-muted-foreground leading-relaxed">
                  I acknowledge that materials provided under the Controlled Distribution Protocol are confidential and may not be reproduced, redistributed, or used to create derivative works without authorization. *
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                <Lock className="h-4 w-4" />
                Submit Institutional Access Request
              </button>

              <p className="text-[10px] font-mono text-muted-foreground/40 tracking-wider">
                CRP v1.0 · ALL REQUESTS LOGGED · INSTITUTIONAL VERIFICATION REQUIRED
              </p>
            </form>
          </div>
        )}
      </Section>

      {/* IP Protection Notice */}
      <Section title="Intellectual Property Notice" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-xs text-muted-foreground leading-relaxed">
            GRGF documentation, including architectural models, governance schemas, cryptographic integrity structures, and deployment methodologies, remains the intellectual property of the inventor and designated custodial entity. The Controlled Distribution Protocol does not transfer intellectual property rights. All access is granted for institutional evaluation purposes only.
          </p>
          <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
            Canadian Patent Application No. 3,300,102 — "Global Record Governance Framework for Tamper-Evident Logging" — Filed January 28, 2026 (publication pending).
          </p>
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default InstitutionalBriefing;
