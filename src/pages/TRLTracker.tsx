import { Shield, CheckCircle, Clock, Target, Lock, FileText, Globe, Award, ArrowRight, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const trlLevels = [
  { level: 1, name: "Basic Principles Observed", status: "complete" as const, date: "2025 Q3", evidence: "Governance gap analysis published. SHA-256 integrity model validated theoretically." },
  { level: 2, name: "Technology Concept Formulated", status: "complete" as const, date: "2025 Q3", evidence: "Six-layer deterministic architecture designed. Append-only evidence backbone specified." },
  { level: 3, name: "Experimental Proof of Concept", status: "complete" as const, date: "2025 Q4", evidence: "Core hashing, chain linkage, and verification logic prototyped. Initial cryptographic tests passed." },
  { level: 4, name: "Technology Validated in Lab", status: "complete" as const, date: "2025 Q4", evidence: "150-test enterprise suite — 100% pass rate. Deterministic policy engine validated." },
  { level: 5, name: "Technology Validated in Relevant Environment", status: "complete" as const, date: "2026 Q1", evidence: "Republic of Novaris sovereign simulation executed. Multi-tenant isolation confirmed." },
  { level: 6, name: "System Demonstrated in Relevant Environment", status: "current" as const, date: "2026 Q1", evidence: "15-step institutional lifecycle validation (13/13 pass). Public verification operational. GovTech Committee score: 8.95/10." },
  { level: 7, name: "System Prototype in Operational Environment", status: "next" as const, date: "2026 Q3", requirements: ["Live pilot with government ministry", "SOC 2 Type I audit initiated", "Independent penetration testing (OWASP)", "HSM/KMS integration for sovereign key management"] },
  { level: 8, name: "System Complete and Qualified", status: "planned" as const, date: "2027 Q1", requirements: ["SOC 2 Type II certification", "FIPS 140-2 compliance for cryptographic modules", "ISO 27001 certification initiated", "Multi-jurisdiction federation tested"] },
  { level: 9, name: "System Proven in Operational Environment", status: "planned" as const, date: "2027 Q4", requirements: ["Live national deployment (≥1 country)", "Standards body formal recognition", "Independent third-party attestation", "Cross-border federation operational"] },
];

const currentTRL = 6;
const progressPercent = ((currentTRL) / 9) * 100;

const certificationTracks = [
  { name: "SOC 2 Type I", status: "Preparation", progress: 25, target: "Q3 2026", icon: Shield },
  { name: "SOC 2 Type II", status: "Planned", progress: 5, target: "Q1 2027", icon: Lock },
  { name: "ISO 27001", status: "Gap Analysis", progress: 15, target: "Q2 2027", icon: FileText },
  { name: "ISO 15489", status: "Aligned", progress: 73, target: "Ongoing", icon: CheckCircle },
  { name: "OWASP ASVS", status: "Assessment", progress: 35, target: "Q3 2026", icon: Target },
  { name: "FIPS 140-2", status: "Planning", progress: 10, target: "Q4 2026", icon: Zap },
];

const evidenceArtifacts = [
  { name: "150-Test Enterprise Regression Suite", status: "Passed", type: "Automated" },
  { name: "15-Step Sovereign Validation Protocol", status: "13/13 Pass", type: "Manual" },
  { name: "GovTech Executive Committee Review", status: "8.95/10", type: "Independent" },
  { name: "Public Verification Lifecycle Test", status: "Validated", type: "End-to-End" },
  { name: "Tamper Detection & Chain Integrity", status: "Confirmed", type: "Security" },
  { name: "Republic of Novaris Sovereign Simulation", status: "Complete", type: "Simulation" },
  { name: "Multi-Tenant Isolation Verification", status: "Confirmed", type: "Architecture" },
  { name: "Cryptographic Determinism Audit", status: "Verified", type: "Crypto" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    complete: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
    current: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 animate-pulse",
    next: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    planned: "bg-muted text-muted-foreground",
  };
  const labels: Record<string, string> = { complete: "Complete", current: "Current", next: "Next Target", planned: "Planned" };
  return <Badge className={`${styles[status]} text-[10px] font-mono`}>{labels[status]}</Badge>;
}

export default function TRLTracker() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-[10px] font-mono tracking-widest">TECHNOLOGY READINESS</Badge>
        <h1 className="text-4xl font-bold tracking-tight">TRL Advancement Tracker</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transparent progression from concept to operational deployment, validated by independent evidence at every stage.
        </p>
      </div>

      {/* Current TRL Banner */}
      <Card className="p-8 border-blue-400/30 bg-gradient-to-r from-blue-50/50 to-transparent dark:from-blue-950/20">
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-3xl font-black text-blue-600">6</span>
            </div>
            <div>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Current Readiness Level</p>
              <p className="text-2xl font-bold mt-1">TRL 6 — System Demonstrated</p>
              <p className="text-sm text-muted-foreground mt-1">Prototype demonstration in relevant operational environment</p>
            </div>
          </div>
          <div className="w-48">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>TRL 1</span><span>TRL 9</span>
            </div>
            <Progress value={progressPercent} className="h-3" />
            <p className="text-xs text-center text-muted-foreground mt-1">{Math.round(progressPercent)}% to Full Operational</p>
          </div>
        </div>
      </Card>

      {/* TRL Timeline */}
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Readiness Level Progression
        </h2>
        <div className="space-y-3">
          {trlLevels.map((trl) => (
            <Card key={trl.level} className={`p-5 transition-all ${trl.status === 'current' ? 'border-blue-400 ring-1 ring-blue-400/20 shadow-lg' : ''}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-sm font-bold ${
                  trl.status === 'complete' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  trl.status === 'current' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {trl.status === 'complete' ? <CheckCircle className="h-5 w-5" /> : trl.level}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-semibold">TRL {trl.level} — {trl.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{trl.date}</p>
                    </div>
                    <StatusBadge status={trl.status} />
                  </div>
                  {trl.evidence && (
                    <p className="text-sm text-muted-foreground mt-2">{trl.evidence}</p>
                  )}
                  {trl.requirements && (
                    <div className="mt-3 space-y-1.5">
                      {trl.requirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-3 w-3 shrink-0" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Certification Tracks */}
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Certification Readiness Tracks
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certificationTracks.map((cert) => (
            <Card key={cert.name} className="p-5">
              <div className="flex items-center gap-3 mb-3">
                <cert.icon className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">Target: {cert.target}</p>
                </div>
                <Badge variant="outline" className="text-[10px]">{cert.status}</Badge>
              </div>
              <Progress value={cert.progress} className="h-2" />
              <p className="text-[10px] text-muted-foreground mt-1 text-right">{cert.progress}%</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Evidence Artifacts */}
      <div>
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Validation Evidence Artifacts
        </h2>
        <Card className="divide-y divide-border">
          {evidenceArtifacts.map((artifact) => (
            <div key={artifact.name} className="px-5 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">{artifact.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-[10px]">{artifact.type}</Badge>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px]">{artifact.status}</Badge>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center py-6 space-y-2">
        <p className="text-xs text-muted-foreground">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent Application No. CA 3,300,102
        </p>
        <p className="text-[10px] text-muted-foreground/50">
          TRL methodology aligned with NASA/ISO 16290 standards. All evidence artifacts independently verifiable.
        </p>
      </div>
    </div>
  );
}
