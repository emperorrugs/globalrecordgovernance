import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  GraduationCap, Award, BookOpen, Users, Shield, Clock,
  CheckCircle, XCircle, FileText, Globe, AlertTriangle,
  ArrowRight, Layers, Scale,
} from "lucide-react";

const certificationTiers = [
  {
    title: "Foundations Practitioner",
    icon: <BookOpen className="h-5 w-5" />,
    description: "Entry-level certification for professionals seeking foundational understanding of GRGF governance principles, record lifecycle, and institutional integrity models.",
    prerequisites: "None",
    assessment: "Written examination + practical case study",
    renewal: "Every 2 years",
    topics: ["Governance philosophy & principles", "Record lifecycle (Proposal → Seal → Audit → Revision)", "Authority boundaries & source of truth", "Anti-capture safeguards", "Basic verification concepts"],
  },
  {
    title: "Practitioner",
    icon: <Award className="h-5 w-5" />,
    description: "Mid-level certification for professionals implementing or auditing GRGF deployments. Requires demonstrated competency in governance operations and integrity verification.",
    prerequisites: "Foundations Practitioner + 6 months institutional experience",
    assessment: "Practical examination + portfolio review + oral defense",
    renewal: "Every 2 years",
    topics: ["System architecture (Evidence Backbone & Document Pipeline)", "Policy engine configuration & evaluation", "Cryptographic integrity & proof verification", "Omission detection methodology", "Deployment models & country localisation"],
  },
  {
    title: "Steward / Architect",
    icon: <Shield className="h-5 w-5" />,
    description: "Senior-level certification for professionals responsible for institutional stewardship, system architecture, or governance oversight of GRGF deployments.",
    prerequisites: "Practitioner + 2 years institutional experience",
    assessment: "Architectural review + governance case study + institutional panel",
    renewal: "Every 3 years",
    topics: ["Federation models (Tier 1, Tier 2, Observer)", "Cross-jurisdiction interoperability", "Stewardship succession planning", "Institutional governance design", "Audit & compliance framework leadership"],
  },
];

const AcademyPage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="GRGF Academy"
        subtitle="Professional standards body for governance record practitioners. Multi-tier certification with mandatory renewal, human-reviewed assessments, and formal revocation protocols."
      />

      {/* Mission */}
      <Section title="Academy Mission" className="border-b border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            The GRGF Academy exists to build and maintain a global community of certified governance record professionals. It ensures that institutional stewardship of the framework meets rigorous, independently verified standards of competence and ethical conduct.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, title: "Human Assessment Only", desc: "All certification assessments are reviewed by qualified human examiners. AI-graded assessments are explicitly prohibited." },
            { icon: Clock, title: "Mandatory Renewal", desc: "No lifetime credentials. All certifications require periodic renewal through re-assessment and continued professional development." },
            { icon: Scale, title: "Revocation Protocols", desc: "Formal revocation procedures exist for ethical misuse, misrepresentation, or failure to maintain competency standards." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Certification Tiers */}
      <Section title="Certification Tiers" className="border-b border-border bg-card/30">
        <div className="space-y-6">
          {certificationTiers.map((tier, i) => (
            <div key={tier.title} className="governance-card">
              <div className="flex items-start gap-4">
                <div className="text-accent shrink-0 mt-0.5">{tier.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="hash-text">TIER {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-base font-semibold">{tier.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{tier.description}</p>

                  <div className="grid gap-2 sm:grid-cols-3 mb-4">
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Prerequisites</p>
                      <p className="text-xs text-foreground">{tier.prerequisites}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Assessment</p>
                      <p className="text-xs text-foreground">{tier.assessment}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Renewal</p>
                      <p className="text-xs text-foreground">{tier.renewal}</p>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Curriculum Topics</p>
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {tier.topics.map((topic) => (
                      <div key={topic} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                        <span className="text-xs text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Glossary */}
      <Section title="Governance Glossary" className="border-b border-border">
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          Key terms used across the GRGF framework and certification curriculum. Understanding these terms is essential for all certification levels.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { term: "Sealed Archive", def: "A governance record that has been cryptographically sealed using SHA-256 hashing. Once sealed, the record is immutable and independently verifiable." },
            { term: "Policy Engine (OPA)", def: "An Open Policy Agent instance that evaluates governance events against codified policy rules, producing deterministic, auditable policy decisions." },
            { term: "CICE", def: "Continuous Compliance Evidence — attestations that provide ongoing proof of governance compliance, generated automatically from sealed event data." },
            { term: "Merkle Proof", def: "A cryptographic proof structure using a tree of hashes that enables efficient verification that a specific record exists within a larger dataset." },
            { term: "Omission", def: "A governance action that was expected but did not occur. GRGF uniquely records and verifies omissions as governance events." },
            { term: "WORM Storage", def: "Write-Once Read-Many storage. Records written to WORM storage cannot be modified or deleted, ensuring long-term integrity." },
            { term: "Air-Gapped Pipeline", def: "A processing system physically or logically isolated from external networks. System B operates air-gapped to preserve document custody." },
            { term: "Federation Node", def: "A sovereign deployment of GRGF that interoperates with the global network. Nodes are classified as Tier 1, Tier 2, or Observer." },
            { term: "Verifiable Credential", def: "A W3C-standard digital credential that can be cryptographically verified by any party without contacting the issuer." },
            { term: "Anti-Capture Clause", def: "Structural safeguards (AC-01 through AC-05) that prevent any single entity from controlling or subverting the governance framework." },
          ].map(({ term, def }) => (
            <div key={term} className="governance-card">
              <h4 className="font-serif text-sm font-semibold text-accent mb-1">{term}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{def}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Standards & References */}
      <Section title="Standards & External References" className="border-b border-border bg-card/30">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "W3C Verifiable Credentials", desc: "Standard for cryptographically verifiable digital credentials used in GRGF proof issuance." },
            { title: "Open Policy Agent (OPA)", desc: "Policy-as-code engine used for deterministic governance policy evaluation in System A." },
            { title: "SHA-256 Cryptographic Hash", desc: "Industry-standard hash function used for record sealing and integrity verification." },
            { title: "WCAG 2.2", desc: "Web Content Accessibility Guidelines ensuring GRGF platforms meet accessibility standards." },
            { title: "Merkle Tree Proofs", desc: "Data structure enabling efficient and secure verification of record integrity within large datasets." },
            { title: "SCIM/SSO", desc: "Identity management standards used for institutional user provisioning and authentication." },
          ].map(({ title, desc }) => (
            <div key={title} className="governance-card">
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Assessment Policy */}
      <Section title="Assessment Integrity Policy" className="border-b border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card border-l-2 border-l-accent">
            <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" /> Required
            </h4>
            <ul className="space-y-2">
              {[
                "Human-reviewed assessment at every level",
                "Practical demonstration of governance competency",
                "Periodic renewal through re-assessment",
                "Continued professional development",
                "Ethical conduct declaration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="governance-card border-l-2 border-l-destructive">
            <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" /> Prohibited
            </h4>
            <ul className="space-y-2">
              {[
                "AI-graded or automated assessment",
                "Lifetime or non-expiring credentials",
                "Self-certification without external review",
                "Commercial sponsorship of certification outcomes",
                "Transfer of credentials between individuals",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-destructive mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <Section className="bg-card/30">
        <div className="flex flex-wrap gap-3">
          <Link to="/simulation" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            <Layers className="h-4 w-4" /> Launch Simulation
          </Link>
          <Link to="/blueprints" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <FileText className="h-4 w-4" /> Technical Blueprints
          </Link>
          <Link to="/archive" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Shield className="h-4 w-4" /> Digital Archive
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default AcademyPage;
