import { PageHeader, Section } from "@/components/PageComponents";
import { GraduationCap, BookOpen, Award, Users } from "lucide-react";

const tracks = [
  {
    title: "Institutional Operator",
    description: "For government officials and institutional staff responsible for day-to-day GRGF operations including record capture, classification, and submission.",
    level: "Foundation",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Governance Auditor",
    description: "For independent auditors and oversight bodies responsible for verifying compliance with GRGF governance protocols and record integrity.",
    level: "Advanced",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "System Administrator",
    description: "For technical personnel responsible for deployment, maintenance, and operational continuity of GRGF infrastructure.",
    level: "Technical",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Stewardship Authority",
    description: "For designated stewards responsible for long-term governance, succession planning, and framework neutrality preservation.",
    level: "Executive",
    icon: <Award className="h-5 w-5" />,
  },
];

const Academy = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Academy"
        subtitle="Training programmes, certification pathways, and professional standards for GRGF practitioners."
      />

      <Section title="Professional Standards">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The GRGF Academy establishes and maintains professional standards for all roles
          within the framework. Certification ensures that operators, auditors, administrators,
          and stewards possess the competence required for their responsibilities.
        </p>
      </Section>

      <Section title="Certification Tracks" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {tracks.map((t) => (
            <div key={t.title} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="text-accent shrink-0 mt-0.5">{t.icon}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-sm font-semibold">{t.title}</h3>
                  </div>
                  <span className="hash-text">{t.level.toUpperCase()}</span>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Academy;
