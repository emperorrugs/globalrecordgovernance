import { Shield, CheckCircle, Clock, AlertTriangle, Lock, FileText, Globe, Award, ArrowRight, Eye, Server, Fingerprint } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ControlItem {
  id: string;
  control: string;
  status: "implemented" | "partial" | "planned";
  evidence?: string;
}

interface CertTrack {
  name: string;
  description: string;
  icon: typeof Shield;
  progress: number;
  target: string;
  status: string;
  controls: ControlItem[];
}

const certTracks: CertTrack[] = [
  {
    name: "SOC 2 Type I — Trust Services Criteria",
    description: "Service Organization Control report covering Security, Availability, and Confidentiality trust principles.",
    icon: Shield,
    progress: 25,
    target: "Q3 2026",
    status: "Preparation",
    controls: [
      { id: "CC1.1", control: "Control environment — Integrity and ethical values", status: "implemented", evidence: "Anti-capture clauses AC-01 to AC-05; Neutrality Declaration" },
      { id: "CC2.1", control: "Information and communication — Internal controls", status: "implemented", evidence: "Deterministic denial logging; 9-role RBAC model" },
      { id: "CC3.1", control: "Risk assessment — Identification of threats", status: "implemented", evidence: "Threat model: insider attacks, retroactive manipulation" },
      { id: "CC5.1", control: "Monitoring — Continuous oversight", status: "partial", evidence: "Audit trail operational; automated anomaly detection planned" },
      { id: "CC6.1", control: "Logical access controls", status: "implemented", evidence: "RLS policies across 20+ tables; has_role() security definer" },
      { id: "CC7.1", control: "System operations — Change management", status: "partial", evidence: "Migration-based schema changes; CI/CD pipeline planned" },
      { id: "CC8.1", control: "Change management — Authorized changes", status: "partial", evidence: "Append-only architecture; sealed record immutability" },
    ],
  },
  {
    name: "OWASP ASVS Level 2 — Web Application Security",
    description: "Application Security Verification Standard for institutional-grade web platforms.",
    icon: Lock,
    progress: 35,
    target: "Q3 2026",
    status: "Assessment",
    controls: [
      { id: "V1.1", control: "Architecture — Secure design patterns", status: "implemented", evidence: "Six-layer deterministic architecture; service-layer separation" },
      { id: "V2.1", control: "Authentication — Password security", status: "implemented", evidence: "Supabase Auth with email verification; no anonymous signups" },
      { id: "V3.1", control: "Session management", status: "implemented", evidence: "JWT-based sessions; secure cookie configuration" },
      { id: "V4.1", control: "Access control — RBAC enforcement", status: "implemented", evidence: "9 institutional roles; RLS across all tables" },
      { id: "V5.1", control: "Input validation", status: "implemented", evidence: "Zod schema validation; typed service layer inputs" },
      { id: "V8.1", control: "Data protection — Encryption at rest", status: "partial", evidence: "SHA-256 integrity hashing; full AES-256 at-rest planned" },
      { id: "V13.1", control: "API security — Rate limiting", status: "planned", evidence: "Edge function rate limiting architecture designed" },
    ],
  },
  {
    name: "ISO 27001 — Information Security Management",
    description: "International standard for establishing, implementing, and maintaining an ISMS.",
    icon: Globe,
    progress: 15,
    target: "Q2 2027",
    status: "Gap Analysis",
    controls: [
      { id: "A.5", control: "Information security policies", status: "partial", evidence: "Governance Charter v2.0; Neutrality Declaration published" },
      { id: "A.6", control: "Organization of information security", status: "partial", evidence: "Role separation; independent governance board planned" },
      { id: "A.8", control: "Asset management — Classification", status: "implemented", evidence: "5-level confidentiality classification; CRP v1.0" },
      { id: "A.9", control: "Access control", status: "implemented", evidence: "RBAC/ABAC with has_role() security definer function" },
      { id: "A.10", control: "Cryptography", status: "implemented", evidence: "SHA-256 deterministic hashing; Merkle chain integrity" },
      { id: "A.12", control: "Operations security — Logging", status: "implemented", evidence: "Append-only audit logs; integrity hash per entry" },
      { id: "A.14", control: "System development security", status: "partial", evidence: "TypeScript strict mode; service-layer architecture" },
    ],
  },
  {
    name: "FIPS 140-2 — Cryptographic Module Validation",
    description: "Federal standard for cryptographic modules used in sovereign data protection.",
    icon: Fingerprint,
    progress: 10,
    target: "Q4 2026",
    status: "Planning",
    controls: [
      { id: "L1", control: "Level 1 — Basic security requirements", status: "implemented", evidence: "Web Crypto API SHA-256; deterministic hash generation" },
      { id: "L2", control: "Level 2 — Tamper-evident mechanisms", status: "partial", evidence: "Hash chain provides tamper evidence; physical tamper controls N/A" },
      { id: "L3", control: "Level 3 — Identity-based authentication", status: "planned", evidence: "HSM integration for sovereign key management planned" },
      { id: "L4", control: "Level 4 — Physical security envelope", status: "planned", evidence: "Required for sovereign deployment; hardware vendor evaluation" },
    ],
  },
];

function ControlStatusIcon({ status }: { status: string }) {
  if (status === "implemented") return <CheckCircle className="h-4 w-4 text-green-500" />;
  if (status === "partial") return <Clock className="h-4 w-4 text-amber-500" />;
  return <AlertTriangle className="h-4 w-4 text-muted-foreground" />;
}

export default function CertificationReadiness() {
  const totalControls = certTracks.reduce((sum, t) => sum + t.controls.length, 0);
  const implementedControls = certTracks.reduce((sum, t) => sum + t.controls.filter(c => c.status === "implemented").length, 0);
  const partialControls = certTracks.reduce((sum, t) => sum + t.controls.filter(c => c.status === "partial").length, 0);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-[10px] font-mono tracking-widest">INSTITUTIONAL ASSURANCE</Badge>
        <h1 className="text-4xl font-bold tracking-tight">Certification Readiness Dashboard</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transparent tracking of compliance posture against SOC 2, OWASP, ISO 27001, and FIPS 140-2 — the institutional certifications required for sovereign deployment.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-5 text-center">
          <p className="text-3xl font-black text-green-600">{implementedControls}</p>
          <p className="text-xs text-muted-foreground mt-1">Implemented</p>
        </Card>
        <Card className="p-5 text-center">
          <p className="text-3xl font-black text-amber-600">{partialControls}</p>
          <p className="text-xs text-muted-foreground mt-1">Partial</p>
        </Card>
        <Card className="p-5 text-center">
          <p className="text-3xl font-black text-muted-foreground">{totalControls - implementedControls - partialControls}</p>
          <p className="text-xs text-muted-foreground mt-1">Planned</p>
        </Card>
        <Card className="p-5 text-center">
          <p className="text-3xl font-black">{totalControls}</p>
          <p className="text-xs text-muted-foreground mt-1">Total Controls</p>
        </Card>
      </div>

      {/* Certification Tracks */}
      {certTracks.map((track) => (
        <Card key={track.name} className="overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <track.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <p className="font-semibold text-lg">{track.name}</p>
                  <Badge variant="outline" className="text-[10px]">{track.status} · Target: {track.target}</Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{track.description}</p>
                <div className="mt-3 flex items-center gap-3">
                  <Progress value={track.progress} className="h-2 flex-1" />
                  <span className="text-xs font-mono text-muted-foreground">{track.progress}%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="divide-y divide-border">
            {track.controls.map((ctrl) => (
              <div key={ctrl.id} className="px-6 py-3 flex items-start gap-3">
                <ControlStatusIcon status={ctrl.status} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-muted-foreground">{ctrl.id}</span>
                    <span className="text-sm font-medium">{ctrl.control}</span>
                  </div>
                  {ctrl.evidence && (
                    <p className="text-xs text-muted-foreground mt-1">{ctrl.evidence}</p>
                  )}
                </div>
                <Badge className={`text-[10px] ${
                  ctrl.status === 'implemented' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  ctrl.status === 'partial' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {ctrl.status === 'implemented' ? 'Done' : ctrl.status === 'partial' ? 'In Progress' : 'Planned'}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      ))}

      {/* Footer */}
      <div className="text-center py-6 space-y-2">
        <p className="text-xs text-muted-foreground">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent Application No. CA 3,300,102
        </p>
        <p className="text-[10px] text-muted-foreground/50">
          Certification readiness status is self-assessed. Independent auditor engagement required for formal certification.
        </p>
      </div>
    </div>
  );
}
