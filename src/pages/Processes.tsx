import { PageHeader, Section } from "@/components/PageComponents";
import { Hash, GitBranch, Globe, Award, Users } from "lucide-react";

const processes = [
  {
    title: "Record Versioning",
    description: "All records are version-controlled with full audit trails. Each version is independently sealed and its lineage is cryptographically verifiable. Superseded versions remain accessible but are clearly marked.",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    title: "Hash Sealing",
    description: "Records are sealed using SHA-256 cryptographic hashing at the point of finalization. The resulting hash serves as an immutable integrity proof that can be independently verified at any time.",
    icon: <Hash className="h-5 w-5" />,
  },
  {
    title: "Localization",
    description: "Country-specific deployments adapt the framework to local legal, linguistic, and institutional requirements while maintaining interoperability with the global reference architecture.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Certification",
    description: "Institutional operators, auditors, and administrators undergo structured certification to ensure competent stewardship of GRGF deployments and adherence to governance protocols.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Stewardship",
    description: "Ongoing governance of the framework is conducted through defined stewardship protocols, ensuring continuity, neutrality, and institutional independence across political and generational transitions.",
    icon: <Users className="h-5 w-5" />,
  },
];

const Processes = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Processes"
        subtitle="Operational procedures governing versioning, sealing, localization, certification, and stewardship."
      />

      <Section>
        <div className="space-y-6">
          {processes.map((p, i) => (
            <div key={p.title} className="governance-card">
              <div className="flex items-start gap-4">
                <div className="text-accent shrink-0 mt-0.5">{p.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="hash-text">PROCESS {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-base font-semibold">{p.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Processes;
