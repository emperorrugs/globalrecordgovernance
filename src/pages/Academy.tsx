import { PageHeader, Section } from "@/components/PageComponents";
import { GraduationCap, BookOpen, Award, Users, Scale, RefreshCw, XCircle, ClipboardCheck } from "lucide-react";

const levels = [
  {
    title: "Foundation",
    description: "For institutional staff, records officers, and public sector professionals entering the GRGF discipline. Covers core principles, record classification, and integrity fundamentals.",
    prerequisites: "None",
    assessment: "Written examination · Human-reviewed",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Practitioner",
    description: "For governance auditors, system operators, and institutional administrators responsible for day-to-day GRGF operations, compliance verification, and record integrity assurance.",
    prerequisites: "Foundation certification · 12 months institutional experience",
    assessment: "Written examination + case study · Human-reviewed",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Steward",
    description: "For designated stewardship authorities, senior governance officers, and succession planners responsible for long-term framework integrity, neutrality preservation, and institutional continuity.",
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
        subtitle="Professional discipline, certification levels, and governance standards for GRGF practitioners."
      />

      <Section title="Professional Discipline">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The GRGF Academy is a professional discipline — not a training programme. It establishes
          the competence, ethics, and accountability standards required for all roles within the
          framework. Certification is earned through rigorous, human-reviewed assessment, not
          automated testing or self-paced completion.
        </p>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <ClipboardCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              All examinations are reviewed by qualified human assessors. No automated grading,
              AI-generated evaluation, or algorithmic scoring is used in the certification process.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Certification Levels" className="border-t border-border">
        <div className="space-y-4">
          {levels.map((t, i) => (
            <div key={t.title} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="text-accent shrink-0 mt-0.5">{t.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="hash-text">LEVEL {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-sm font-semibold">{t.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t.description}</p>
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono text-muted-foreground">
                      <span className="text-accent/70">PREREQUISITES:</span> {t.prerequisites}
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground">
                      <span className="text-accent/70">ASSESSMENT:</span> {t.assessment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Ethics, Renewal & Revocation" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Certification carries ongoing professional obligations. GRGF practitioners are bound
          by ethical standards that reflect the framework's commitment to neutrality, integrity,
          and institutional trust.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Scale className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Ethics</h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  All certified practitioners are bound by the GRGF Code of Professional Conduct,
                  which mandates neutrality, conflicts-of-interest disclosure, and prohibition
                  of framework use for political or commercial advantage.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <RefreshCw className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold">Renewal</h4>
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
                  or actions that compromise framework neutrality. Revocation is documented
                  as a governance record within the GRGF Archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Academy;
