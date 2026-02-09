import { PageHeader, Section } from "@/components/PageComponents";
import { GraduationCap, BookOpen, Award, Users, Clock, ShieldCheck } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";

const certifications = [
  {
    title: "Practitioner",
    icon: <Users className="h-6 w-6" />,
    duration: "3–6 months",
    who: "Institutional staff, records officers, policy analysts",
    plain: "Learn the fundamentals of GRGF — what it records, why, and how integrity is maintained.",
    tech: "Conceptual competence in GRGF principles, governance logic, record integrity. No deployment authority.",
    outcome: "GRGF Foundations Practitioner Certificate",
  },
  {
    title: "Verifier",
    icon: <ShieldCheck className="h-6 w-6" />,
    duration: "6–12 months",
    who: "Governance auditors, compliance officers, DPI specialists",
    plain: "Qualified to verify records, support institutional deployment, and conduct compliance assessments.",
    tech: "Institutional deployment support, country-specific configuration, risk assessment and safeguard implementation under steward oversight.",
    outcome: "GRGF Practitioner Certificate",
  },
  {
    title: "Auditor",
    icon: <BookOpen className="h-6 w-6" />,
    duration: "12–24 months",
    who: "Senior governance officers, judicial bodies, national audit offices",
    plain: "Qualified to audit GRGF deployments and assess governance integrity across institutions.",
    tech: "Cross-institutional integrity assurance, audit protocol execution, governance review authority with formal assessment panel.",
    outcome: "GRGF Auditor Certificate",
  },
  {
    title: "Policy Architect",
    icon: <Award className="h-6 w-6" />,
    duration: "24–36 months",
    who: "Stewardship authorities, succession planners, multilateral coordination leads",
    plain: "The highest level — responsible for protecting the framework's long-term integrity and guiding its evolution.",
    tech: "Cross-country coherence, anti-capture vigilance, succession planning, federation governance. Stewards preserve — they do not own.",
    outcome: "GRGF Steward / Architect Designation",
  },
];

const Academy = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Academy"
        subtitle={isPlain
          ? "Professional training and certification for people who work with GRGF."
          : "Professional standards body for GRGF training, credentialing, and stewardship of correct, neutral, and ethical framework application."
        }
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div key={cert.title} className="governance-card flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-accent shrink-0 mt-0.5">{cert.icon}</div>
                <div>
                  <h3 className="font-serif text-lg font-semibold">{cert.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.who}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {isPlain ? cert.plain : cert.tech}
              </p>
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent" />
                  Duration: {cert.duration}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="h-3.5 w-3.5 text-accent" />
                  {cert.outcome}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Assessment Standard.</span> All certifications
          require human-reviewed assessment. No AI grading, no automated pass/fail. Credentials require
          mandatory renewal and are subject to revocation for ethical violations.
        </p>
      </Section>
    </div>
  );
};

export default Academy;
