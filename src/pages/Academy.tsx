import { PageHeader, Section } from "@/components/PageComponents";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Scale,
  RefreshCw,
  XCircle,
  ClipboardCheck,
  ShieldCheck,
  Building2,
  AlertTriangle,
  Landmark,
  FileCheck,
  Ban,
  Link,
} from "lucide-react";

const programLevels = [
  {
    title: "GRGF Foundations Practitioner",
    purpose:
      "To establish conceptual understanding of GRGF principles, governance logic, and the role of record integrity in public institutions.",
    roles:
      "Institutional staff, records officers, public-sector administrators, policy analysts entering governance disciplines.",
    scope:
      "Conceptual comprehension. No deployment authority. No institutional sign-off privileges.",
    limits:
      "Foundations Practitioners may not represent themselves as authorized to implement, audit, or steward GRGF systems. This level confers understanding, not operational authority.",
    prerequisites: "None",
    assessment: "Written examination · Human-reviewed",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "GRGF Practitioner",
    purpose:
      "To develop the competence required for institutional application of GRGF within specific country contexts, DPI environments, and operational safeguards.",
    roles:
      "Governance auditors, system operators, institutional compliance officers, DPI integration specialists.",
    scope:
      "Institutional deployment support. Country-specific configuration. Risk assessment and safeguard implementation.",
    limits:
      "Practitioners operate under steward oversight. They may not unilaterally modify framework architecture, approve cross-border deployments, or certify other practitioners.",
    prerequisites: "Foundations certification · 12 months institutional experience",
    assessment: "Written examination + case study analysis · Human-reviewed",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "GRGF Steward / Architect",
    purpose:
      "To assume custodianship responsibility for long-term framework integrity, cross-country coherence, anti-capture vigilance, and succession planning.",
    roles:
      "Senior governance officers, stewardship authorities, succession planners, multilateral coordination leads.",
    scope:
      "Cross-country integrity assurance. Anti-capture monitoring. Governance review authority. Succession and continuity planning.",
    limits:
      "Stewards preserve the framework — they do not own it. Stewardship does not confer political authority, enforcement power, or commercial licensing rights.",
    prerequisites: "Practitioner certification · 36 months governance experience",
    assessment: "Oral examination + governance review · Panel-reviewed",
    icon: <Award className="h-5 w-5" />,
  },
];

const Academy = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Academy"
        subtitle="The GRGF Academy is the professional standards and certification body responsible for training, credentialing, and stewarding the correct, neutral, and ethical application of the Global Record Governance Framework worldwide."
      />

      {/* 1. Purpose & Mandate */}
      <Section title="1. Purpose & Mandate">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          The GRGF Academy exists because governance systems that lack trained human
          stewardship degrade over time. Technology alone cannot preserve the integrity,
          neutrality, and correct application of a framework designed to endure across
          decades and jurisdictions.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The Academy's mandate is to ensure long-term institutional integrity through
          professional accountability — not to deliver skills training or workforce
          development. Its orientation is toward public interest: protecting the
          framework from misuse, dilution, or capture so that it remains a credible,
          neutral governance instrument for all adopting nations and institutions.
        </p>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Academy trains stewards, not users. Its purpose is to create
              a cadre of professionals who understand why governance records must
              be preserved with integrity — and who bear personal accountability
              for that preservation.
            </p>
          </div>
        </div>
      </Section>

      {/* 2. Professional Positioning */}
      <Section title="2. Professional Positioning" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          The GRGF Academy is positioned alongside established professional standards
          bodies — audit institutes, accounting standards boards, and judicial training
          academies — rather than online learning platforms or technology certification
          programmes.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Certification exists because GRGF carries institutional risk. Incorrect
          application of the framework can undermine public trust, compromise
          record integrity, or create governance vulnerabilities. Certification
          ensures that individuals who operate within GRGF systems have demonstrated
          the judgment, knowledge, and ethical commitment required for this responsibility.
        </p>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <Landmark className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The Academy explicitly rejects mass certification, automated credentialing,
              and any model in which volume of issuance takes precedence over quality of
              professional judgment. Every certification is individually assessed by
              qualified human reviewers.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. Certification Structure */}
      <Section title="3. Certification Structure" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The Academy operates a multi-tier certification model designed for progressive
          responsibility. Credentials are not lifetime entitlements — they require periodic
          renewal, ongoing professional conduct, and are subject to revocation.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <ClipboardCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Multi-Tier Model</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Three progressive levels ensure that authority is earned through
                  demonstrated competence, not seniority or payment.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Mandatory Renewal</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  No credential is permanent. All certifications require renewal
                  through re-assessment and continued professional development.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Human Oversight</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Every assessment is reviewed by qualified human examiners. No
                  algorithmic scoring, AI grading, or automated pass/fail decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Program Levels */}
      <Section title="4. Program Levels" className="border-t border-border">
        <div className="space-y-6">
          {programLevels.map((level, i) => (
            <div key={level.title} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="text-accent shrink-0 mt-0.5">{level.icon}</div>
                <div className="w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="hash-text">LEVEL {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-sm font-semibold">{level.title}</h3>
                  </div>

                  <div className="space-y-3 text-xs text-muted-foreground leading-relaxed">
                    <div>
                      <span className="font-mono text-[10px] text-accent/70 uppercase tracking-wider">Purpose</span>
                      <p className="mt-1">{level.purpose}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-accent/70 uppercase tracking-wider">Typical Roles</span>
                      <p className="mt-1">{level.roles}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-accent/70 uppercase tracking-wider">Scope of Authority</span>
                      <p className="mt-1">{level.scope}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-accent/70 uppercase tracking-wider">Explicit Limits</span>
                      <p className="mt-1">{level.limits}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border space-y-1">
                    <p className="text-[10px] font-mono text-muted-foreground">
                      <span className="text-accent/70">PREREQUISITES:</span> {level.prerequisites}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground">
                      <span className="text-accent/70">ASSESSMENT:</span> {level.assessment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Examination & Assessment */}
      <Section title="5. Examination & Assessment" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF certification assessments are designed to evaluate professional judgment,
          not rote knowledge. Governance is contextual — correct application requires
          the ability to reason through competing obligations, institutional constraints,
          and long-term consequences.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <FileCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Scenario-Based Assessment</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Candidates respond to institutional scenarios that require governance
                  reasoning, risk identification, and integrity-preserving decisions.
                  There are no multiple-choice shortcuts.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Human-Reviewed Decisions</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Every submission is reviewed by qualified human assessors. No AI-only grading,
                  no algorithmic scoring, no gamification. Professional judgment cannot be
                  evaluated by automated systems alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Ethics, Renewal & Revocation */}
      <Section title="6. Ethics, Renewal & Revocation" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Certification carries ongoing professional obligations. GRGF practitioners are
          bound by ethical standards that reflect the framework's commitment to neutrality,
          integrity, and institutional trust.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Scale className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Code of Conduct</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  All certified practitioners are bound by the GRGF Code of Professional
                  Conduct: mandatory neutrality, conflicts-of-interest disclosure, and
                  prohibition of framework use for political or commercial advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Mandatory Renewal</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Certifications are valid for a defined period and require renewal through
                  continued professional development and re-assessment. Lapsed certifications
                  cannot be used for institutional representation.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <XCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Revocation</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Certifications may be revoked for ethical violations, misrepresentation,
                  or actions that compromise framework neutrality. Revocation is necessary
                  because governance integrity depends on the accountability of every
                  certified individual. All revocations are documented within the GRGF Archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Who the Academy Is For */}
      <Section title="7. Who the Academy Is For" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The Academy serves professionals whose work intersects with governance integrity,
          institutional accountability, and Digital Public Infrastructure.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 mb-8">
          <div className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-3">Intended Audience</h4>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">·</span>
                Governance auditors and oversight professionals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">·</span>
                Digital Public Infrastructure architects
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">·</span>
                Multilateral and international organization specialists
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">·</span>
                Governance reform and institutional continuity leaders
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">·</span>
                Senior public-sector records and compliance officers
              </li>
            </ul>
          </div>
          <div className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-3">Not Intended For</h4>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">·</span>
                Software developers seeking technology certifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">·</span>
                Marketing or sales professionals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">·</span>
                Individuals seeking credentials for commercial resale
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/50 mt-0.5">·</span>
                Organizations seeking vendor-aligned endorsements
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 8. Governance & Oversight */}
      <Section title="8. Governance & Oversight" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The Academy operates under the GRGF Stewardship Charter. Its governance
          structure is designed to prevent commercialization pressure, vendor capture,
          and political interference.
        </p>
        <div className="governance-card border-l-2 border-l-accent mb-4">
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
              <p>
                The Academy is structurally separated from vendors, governments, and
                commercial entities. It does not operate on a pay-to-certify model.
                Certification is earned through demonstrated competence, not purchased
                through programme fees.
              </p>
              <p>
                The Global Record Governance Framework and its Academy originated as a unified
                governance and Digital Public Infrastructure architecture conceived and authored
                by Tarek Wahid.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. Relationship to GRGF System */}
      <Section title="9. Relationship to GRGF System" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The Academy is a component of the GRGF system — not its governing authority.
          It preserves correct interpretation and supports institutional adoption, but
          it does not control the framework itself.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Link className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">What the Academy Does</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                  <li>Preserves correct interpretation of GRGF</li>
                  <li>Supports countries and institutions in adoption</li>
                  <li>Certifies individuals for governance roles</li>
                  <li>Maintains ethical and professional standards</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">What the Academy Does Not Do</h4>
                <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground leading-relaxed">
                  <li>Does not control or own GRGF</li>
                  <li>Does not certify governments or nations</li>
                  <li>Does not enforce compliance or impose sanctions</li>
                  <li>Does not grant commercial licensing rights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. What the Academy Is Not */}
      <Section title="10. What the Academy Is Not" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Clarity of identity requires explicit boundary-setting. The following
          distinctions are stated to prevent mischaracterization.
        </p>
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <Ban className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <li>The GRGF Academy is <strong>not</strong> a startup or commercial venture.</li>
              <li>It is <strong>not</strong> an online course marketplace or e-learning platform.</li>
              <li>It is <strong>not</strong> a product upsell or consulting funnel.</li>
              <li>It is <strong>not</strong> a certification mill that issues credentials at scale.</li>
              <li>It is <strong>not</strong> a political body, advocacy organization, or lobbying entity.</li>
              <li>It is <strong>not</strong> a skills bootcamp or workforce development programme.</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Academy;
