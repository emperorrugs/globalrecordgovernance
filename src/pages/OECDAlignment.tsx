import { PageHeader, Section } from "@/components/PageComponents";
import { CheckCircle, Shield, Database, Globe, Users, Scale, DollarSign } from "lucide-react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";

const alignmentData = [
  { requirement: "Security & Trust Infrastructure", component: "Cryptographic Evidence Backbone", evidence: "SHA-256/512 hash chaining, append-only storage, tamper-evident registry, zero-trust verification, HSM key management" },
  { requirement: "Data & Information Sharing", component: "Federated Verification Protocol", evidence: "Standardized governance record schemas, cross-agency verification APIs, sovereignty-preserving federation" },
  { requirement: "Strategic Governance Framework", component: "Governance Charter & Oversight Model", evidence: "Anti-capture clauses (AC-01–05), multi-stakeholder advisory council, independent oversight board, custodial neutrality" },
  { requirement: "Sustainable Investment Model", component: "Multi-Modal Funding Architecture", evidence: "Government budget line, transaction-based sharing, multilateral development funding, lifecycle management framework" },
  { requirement: "Human-Centred Safeguards", component: "Safeguards & Trust Architecture", evidence: "Privacy-by-design, data minimization, WCAG accessibility, multilingual readiness, offline fallback procedures" },
  { requirement: "Interoperability & Standards", component: "Connector & Schema Framework", evidence: "Event normalization, canonical schemas, versioned APIs, conformance testing, base registry linkage" },
  { requirement: "Government-as-a-Platform Enablement", component: "DPI Stack Integration Model", evidence: "Layer 3 governance integrity layer, non-invasive integration with existing DPI, reversible deployment" },
  { requirement: "Multi-Stakeholder Collaboration", component: "Advisory & Federation Councils", evidence: "Government, civil society, technical, and international observer representation in governance structure" },
  { requirement: "Privacy & Data Protection", component: "Privacy-by-Design Architecture", evidence: "Pseudonymization, role-based disclosure, lawful basis enforcement, consent architecture, audit logging" },
  { requirement: "Resilience & Continuity", component: "High-Availability Architecture", evidence: "Multi-region deployment, RTO < 4h, RPO < 1h, offline fallback, institutional continuity under failure" },
  { requirement: "Independent Assurance", component: "Audit & Verification Framework", evidence: "Independent security audit (planned), penetration testing, SOC-equivalent assurance, public reporting cadence" },
  { requirement: "Digital Public Good Compatibility", component: "Open Architecture Model", evidence: "Open-source technology stack, no vendor lock-in, freely deployable, multilateral funding compatible" },
];

const OECDAlignment = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="OECD Digital Public Infrastructure Alignment"
      subtitle="Structured compliance mapping against OECD DPI Policy Paper No. 68 (2024) requirements."
    />

    {/* Reference */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          <strong>Reference:</strong> "Digital Public Infrastructure for Digital Governments" — OECD Public Governance Policy Papers No. 68, 2024. This alignment checklist maps GRGF capabilities to the specific requirements, principles, and recommendations defined in the OECD DPI doctrine.
        </p>
      </div>
    </Section>

    {/* Alignment Table */}
    <Section title="OECD Requirement → GRGF Component → Implementation Evidence" className="border-t border-border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-xs font-mono">OECD Requirement</TableHead>
              <TableHead className="text-xs font-mono">GRGF Component</TableHead>
              <TableHead className="text-xs font-mono">Implementation Evidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alignmentData.map((row) => (
              <TableRow key={row.requirement}>
                <TableCell className="text-xs font-semibold text-foreground align-top">{row.requirement}</TableCell>
                <TableCell className="text-xs text-muted-foreground align-top">{row.component}</TableCell>
                <TableCell className="text-xs text-muted-foreground align-top">{row.evidence}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>

    {/* Summary */}
    <Section title="Compliance Summary" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Shield, label: "Security & Trust", status: "Fully Aligned", count: "6 controls" },
          { icon: Database, label: "Data & Information", status: "Fully Aligned", count: "4 controls" },
          { icon: Users, label: "Human-Centred Safeguards", status: "Fully Aligned", count: "6 controls" },
          { icon: Scale, label: "Strategic Governance", status: "Fully Aligned", count: "5 controls" },
          { icon: DollarSign, label: "Sustainable Investment", status: "Fully Aligned", count: "4 models" },
          { icon: Globe, label: "International Cooperation", status: "Fully Aligned", count: "3 protocols" },
        ].map(({ icon: Icon, label, status, count }) => (
          <div key={label} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-1">{label}</h4>
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="h-3 w-3 text-accent" />
              <span className="text-xs text-accent font-medium">{status}</span>
            </div>
            <p className="text-[10px] text-muted-foreground/60">{count}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Assessment Note */}
    <Section className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Assessment Status:</strong> This alignment checklist represents architectural design compliance. Production certification requires independent third-party audit, which is planned as part of the pilot evaluation phase. No premature compliance claims are made.
        </p>
      </div>
    </Section>
  </div>
);

export default OECDAlignment;
