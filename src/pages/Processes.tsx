import { PageHeader, Section } from "@/components/PageComponents";
import { Hash, GitBranch, Globe, Award, Users, Lock, RefreshCw, ShieldCheck } from "lucide-react";

const processes = [
  {
    title: "Record Versioning",
    description: "All records are version-controlled with full audit trails. Each version is independently sealed and its lineage is cryptographically verifiable. Superseded versions remain accessible but are clearly marked.",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    title: "Freeze & Seal",
    description: "Records are frozen at the point of finalization — no further modification is permitted. The frozen record is then cryptographically sealed using SHA-256, producing an immutable integrity proof. Freezing and sealing are distinct, sequential operations: freeze prevents edits; seal provides verification.",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    title: "Integrity & Hashing",
    description: "Record integrity is maintained through SHA-256 cryptographic hashing. The resulting hash serves as a permanent, independently verifiable proof that the record has not been altered since sealing. Hash verification requires no access to GRGF systems — any party can verify independently.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Country Localization",
    description: "Country-specific deployments adapt the framework to local legal, linguistic, and institutional requirements while maintaining interoperability with the global reference architecture. Localization covers legal terminology, language, institutional naming, and regulatory alignment.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Certification & Renewal",
    description: "Institutional operators, auditors, and administrators undergo structured certification to ensure competent stewardship of GRGF deployments. Certifications are time-limited and require periodic renewal through re-assessment and continued professional development.",
    icon: <Award className="h-5 w-5" />,
  },
  {
    title: "Stewardship & Succession",
    description: "Ongoing governance of the framework is conducted through defined stewardship protocols, ensuring continuity, neutrality, and institutional independence across political and generational transitions. Succession plans are sealed as governance records.",
    icon: <Users className="h-5 w-5" />,
  },
];

const Processes = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Processes"
        subtitle="Operational procedures governing versioning, freeze and seal, integrity, localization, certification, and stewardship."
      />

      <Section>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF processes prioritize clarity, auditability, and institutional durability over
          automation. Each process is documented as a governance protocol — not a software workflow.
          The sequence and separation of these processes is deliberate: each stage must be
          independently verifiable and resistant to circumvention.
        </p>
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
