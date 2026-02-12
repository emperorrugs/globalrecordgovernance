import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, AlertTriangle, Users, Eye, Server, CheckCircle } from "lucide-react";

const risks = [
  {
    id: "RISK-01", category: "Privacy Risk", level: "High",
    description: "Unauthorized re-identification of pseudonymized governance records through metadata correlation or insider access.",
    mitigations: [
      "Pseudonymization at connector layer before evidence backbone entry",
      "Re-identification requires authorized, audited multi-party action",
      "Data minimization: only governance metadata captured, no personal content",
      "All access events sealed as governance records themselves",
      "Periodic privacy impact assessment with independent review",
    ],
  },
  {
    id: "RISK-02", category: "Cybersecurity Risk", level: "Critical",
    description: "Compromise of cryptographic keys, infrastructure penetration, or unauthorized access to governance record storage.",
    mitigations: [
      "Sovereign-controlled HSM for key management — no external key custody",
      "Key rotation with versioned binding and automatic re-anchoring",
      "Zero-trust architecture — no component trusted without policy verification",
      "Tamper-evident storage — any compromise invalidates downstream hashes",
      "Independent penetration testing on defined schedule",
    ],
  },
  {
    id: "RISK-03", category: "Institutional Misuse", level: "High",
    description: "Selective record disclosure, suppression of inconvenient records, or misuse of governance evidence for political purposes.",
    mitigations: [
      "Append-only storage — no selective deletion capability exists",
      "Proof-of-absence verification — suppression attempts are detectable",
      "Deterministic policy engine — no discretionary filtering of records",
      "Multi-stakeholder oversight with independent audit authority",
      "Anti-capture clauses (AC-01–AC-05) structurally enforced",
    ],
  },
  {
    id: "RISK-04", category: "Governance Capture", level: "High",
    description: "Single entity (government, vendor, or international body) gaining disproportionate control over framework governance or operations.",
    mitigations: [
      "AC-01: No single-entity control clause",
      "AC-02: No vendor lock-in — all components replaceable",
      "AC-04: Governance rule encoding independent of funding conditions",
      "Multi-stakeholder advisory council with civil society representation",
      "Open-source architecture eliminates proprietary dependency",
    ],
  },
  {
    id: "RISK-05", category: "System Dependence & Resilience", level: "Medium",
    description: "Over-reliance on GRGF creating single points of failure in national governance processes, or inability to operate during system outages.",
    mitigations: [
      "Offline fallback procedures — governance processes continue without system",
      "Multi-region deployment with active-active failover",
      "Exit and reversibility guaranteed at every deployment phase",
      "No existing system replaced — GRGF operates as additional integrity layer",
      "Disaster recovery: RTO < 4 hours, RPO < 1 hour",
    ],
  },
];

const levelColor = (level: string) => {
  switch (level) {
    case "Critical": return "text-destructive border-destructive/50";
    case "High": return "text-orange-400 border-orange-400/50";
    case "Medium": return "text-accent border-accent/50";
    default: return "text-muted-foreground border-muted-foreground/50";
  }
};

const RiskMitigation = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Risk & Mitigation Framework"
      subtitle="Structured risk assessment with architectural mitigations aligned with OECD DPI safeguard expectations."
    />

    {risks.map((r) => (
      <Section key={r.id} title={`${r.id}: ${r.category}`} className="border-t border-border">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-2 py-1 border rounded-sm text-[10px] font-mono font-bold ${levelColor(r.level)}`}>
            {r.level} Risk
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">{r.description}</p>
        <div className="governance-card">
          <h4 className="font-serif text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Mitigation Architecture</h4>
          <ul className="space-y-2">
            {r.mitigations.map(m => (
              <li key={m} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    ))}

    {/* Residual Risk Statement */}
    <Section className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent">
        <h4 className="font-serif text-sm font-semibold mb-2">Residual Risk Assessment</h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          With all architectural mitigations in place, residual risk is assessed as <strong className="text-foreground">Low to Acceptable</strong> under international standards (ISO 31000, OECD Risk Framework). The primary residual risk remains implementation-specific: ensuring national deployments correctly instantiate the designed safeguards. This is addressed through independent assurance audits and controlled pilot evaluation.
        </p>
      </div>
    </Section>
  </div>
);

export default RiskMitigation;
