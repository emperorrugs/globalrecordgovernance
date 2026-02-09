import { PageHeader, Section } from "@/components/PageComponents";
import { Landmark, ShoppingCart, Scale, Gavel, Globe } from "lucide-react";

const useCases = [
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "Government Decisions",
    description: "Recording executive decisions, ministerial orders, and policy actions with immutable integrity. Provides courts, auditors, and legislatures with verifiable evidence of what was decided, when, and by whom.",
    examples: [
      "Cabinet decision records with seal timestamps",
      "Ministerial directive issuance and acknowledgement tracking",
      "Omission records for mandated actions not taken within statutory deadlines",
    ],
  },
  {
    icon: <ShoppingCart className="h-5 w-5" />,
    title: "Procurement",
    description: "End-to-end procurement governance from tender publication to contract award. GRGF records each stage with cryptographic integrity, enabling post-award audit and dispute resolution.",
    examples: [
      "Tender publication and bid receipt records",
      "Evaluation criteria application and scoring rationale",
      "Contract award decisions and non-selection explanations",
      "Procurement omissions — required steps not completed",
    ],
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Regulatory Actions",
    description: "Recording regulatory decisions, licence approvals, enforcement actions, and compliance determinations. Provides regulators with tamper-proof records that withstand legal challenge.",
    examples: [
      "Licence application decisions with documented rationale",
      "Enforcement actions with evidence chain preservation",
      "Regulatory omissions — inspections not performed within mandated schedules",
    ],
  },
  {
    icon: <Gavel className="h-5 w-5" />,
    title: "Courts & Oversight",
    description: "Supporting judicial proceedings and institutional oversight with verifiable records. GRGF does not interpret or adjudicate — it provides the factual substrate for independent assessment.",
    examples: [
      "Institutional audit trails for judicial review",
      "Evidence preservation for anti-corruption investigations",
      "Timeline reconstruction from sealed decision records",
    ],
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multilateral Programmes",
    description: "Cross-border governance record-keeping for international development programmes, multilateral agreements, and intergovernmental cooperation frameworks.",
    examples: [
      "Development programme milestone recording and verification",
      "Cross-jurisdiction governance coordination records",
      "Multilateral agreement compliance documentation",
      "International audit and transparency reporting",
    ],
  },
];

const UseCases = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Use Cases"
        subtitle="Institutional applications of GRGF across government, regulatory, judicial, and multilateral contexts."
      />

      <Section>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF is designed for institutional environments where the integrity, immutability,
          and verifiability of governance records is a legal, regulatory, or operational requirement.
          The following use cases illustrate — they do not constitute endorsement or deployment claims.
        </p>
      </Section>

      {useCases.map((uc, i) => (
        <Section
          key={uc.title}
          title={uc.title}
          className={i === 0 ? "border-t border-border" : "border-t border-border"}
        >
          <div className="governance-card">
            <div className="flex items-start gap-4">
              <div className="text-accent shrink-0 mt-0.5">{uc.icon}</div>
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Illustrative Examples</p>
                  <ul className="space-y-1.5">
                    {uc.examples.map((ex) => (
                      <li key={ex} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-accent mt-0.5 shrink-0">·</span>
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Disclaimer */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Note.</span> The use cases described above
          are illustrative of GRGF's design intent. They do not imply current deployment, government
          endorsement, or operational status in any jurisdiction. GRGF does not claim live government
          deployment or fabricate implementation references.
        </p>
      </Section>
    </div>
  );
};

export default UseCases;
