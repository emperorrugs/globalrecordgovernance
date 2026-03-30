import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, ArrowRight, FileText, Shield, Gavel, ClipboardCheck, Hash } from 'lucide-react';
import { sha256 } from '@/lib/hash';

interface UseCase {
  id: string;
  title: string;
  icon: React.ElementType;
  category: string;
  before: { title: string; problems: string[] };
  event: {
    actor: string;
    authority: string;
    action: string;
    subject: string;
    jurisdiction: string;
    timestamp: string;
  };
  impact: { metric: string; value: string }[];
}

const CASES: UseCase[] = [
  {
    id: 'procurement',
    title: 'Procurement Approval',
    icon: ClipboardCheck,
    category: 'Government',
    before: {
      title: 'Before GRGF',
      problems: [
        'Approval recorded in email chains — no single source of truth',
        'No cryptographic proof of when decision was made',
        'Disputed approvals cost $2.4M in re-procurement',
        'Audit reconstruction takes 6–8 weeks',
      ],
    },
    event: {
      actor: 'Deputy Minister, Public Services',
      authority: 'Treasury Board Directive 2024-09',
      action: 'Approved procurement award of $42.6M for IT modernization',
      subject: 'RFP-2026-IT-MOD-001',
      jurisdiction: 'Canada — Federal',
      timestamp: '2026-03-15T14:32:00Z',
    },
    impact: [
      { metric: 'Audit reconstruction time', value: '6 weeks → 4 seconds' },
      { metric: 'Dispute resolution cost', value: '$2.4M → $0' },
      { metric: 'Evidence completeness', value: '34% → 100%' },
      { metric: 'Verification method', value: 'SHA-256 hash chain' },
    ],
  },
  {
    id: 'inspection',
    title: 'Infrastructure Inspection',
    icon: FileText,
    category: 'Infrastructure',
    before: {
      title: 'Before GRGF',
      problems: [
        'Inspection reports filed as PDFs with no integrity guarantee',
        'Inspector findings altered after submission in 12% of cases',
        'No chain-of-custody for critical safety assessments',
        'Liability disputes unresolvable due to missing timestamps',
      ],
    },
    event: {
      actor: 'Chief Inspector, Infrastructure Safety Division',
      authority: 'National Infrastructure Safety Act, s.47',
      action: 'Issued safety compliance certificate for Highway 401 bridge expansion',
      subject: 'Project HWY-401-EXP-2026',
      jurisdiction: 'Ontario, Canada',
      timestamp: '2026-02-28T09:15:00Z',
    },
    impact: [
      { metric: 'Post-submission alteration', value: '12% → 0%' },
      { metric: 'Liability clarity', value: 'Ambiguous → Deterministic' },
      { metric: 'Safety audit time', value: '3 months → 2 hours' },
      { metric: 'Evidence integrity', value: 'Unverifiable → Cryptographic' },
    ],
  },
  {
    id: 'judicial',
    title: 'Judicial Ruling',
    icon: Gavel,
    category: 'Justice',
    before: {
      title: 'Before GRGF',
      problems: [
        'Court decisions recorded in unstructured document management systems',
        'No tamper-proof timestamp for ruling issuance',
        'Appeals contested based on unclear decision timeline',
        'Cross-jurisdictional verification impossible',
      ],
    },
    event: {
      actor: 'Justice M. Chen, Federal Court',
      authority: 'Federal Courts Act, R.S.C. 1985, c. F-7',
      action: 'Issued ruling in environmental compliance case — remedy ordered',
      subject: 'Case No. FC-2026-ENV-0193',
      jurisdiction: 'Canada — Federal Court',
      timestamp: '2026-01-20T16:45:00Z',
    },
    impact: [
      { metric: 'Decision timeline disputes', value: 'Frequent → Eliminated' },
      { metric: 'Cross-jurisdiction verification', value: 'None → Instant' },
      { metric: 'Appeal evidence integrity', value: 'Contested → Proven' },
      { metric: 'Record permanence', value: 'System-dependent → Sovereign' },
    ],
  },
];

export default function UseCaseSimulations() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Governance Use Case Simulations</h1>
        <p className="text-sm text-muted-foreground mt-1">
          See how GRGF transforms real governance scenarios — from unverifiable processes to deterministic, tamper-proof evidence.
        </p>
      </div>

      <Tabs defaultValue="procurement">
        <TabsList className="grid w-full grid-cols-3">
          {CASES.map(c => (
            <TabsTrigger key={c.id} value={c.id} className="gap-2 text-xs sm:text-sm">
              <c.icon className="h-4 w-4 hidden sm:block" />
              {c.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {CASES.map(c => (
          <TabsContent key={c.id} value={c.id}>
            <CaseSimulation useCase={c} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function CaseSimulation({ useCase }: { useCase: UseCase }) {
  const [stage, setStage] = useState<'before' | 'recording' | 'verified'>('before');
  const [hash, setHash] = useState('');

  const simulate = async () => {
    setStage('recording');
    const payload = JSON.stringify(useCase.event, Object.keys(useCase.event).sort());
    const h = await sha256(payload);
    setTimeout(() => {
      setHash(h);
      setStage('verified');
    }, 2400);
  };

  const reset = () => {
    setStage('before');
    setHash('');
  };

  return (
    <div className="space-y-5 mt-4">
      {/* Before */}
      <Card className={`p-6 transition-opacity duration-300 ${stage !== 'before' ? 'opacity-60' : ''}`}>
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="destructive" className="text-xs">BEFORE GRGF</Badge>
          <span className="text-sm font-medium text-muted-foreground">{useCase.category}</span>
        </div>
        <ul className="space-y-2">
          {useCase.before.problems.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-destructive mt-0.5">✗</span>
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
        {stage === 'before' && (
          <Button onClick={simulate} className="mt-5 gap-2">
            Record Event with GRGF <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </Card>

      {/* Recording Animation */}
      {stage === 'recording' && (
        <Card className="p-6 border-primary/30 bg-primary/5 animate-fade-in">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
              <Hash className="h-6 w-6 text-primary animate-spin" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Processing governance event…</p>
              <p className="text-xs text-muted-foreground">Normalizing → Validating → Hashing → Anchoring</p>
            </div>
          </div>
        </Card>
      )}

      {/* Verified */}
      {stage === 'verified' && (
        <>
          <Card className="p-6 border-green-500/30 bg-green-500/5 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-green-500/20 text-green-600 border-green-500/30 text-xs">
                <Shield className="h-3 w-3 mr-1" /> AFTER GRGF
              </Badge>
              <Badge variant="outline" className="text-xs">✅ VERIFIED</Badge>
            </div>

            <div className="grid gap-2 bg-background rounded-lg p-4 border border-border text-sm">
              <EventRow label="Actor" value={useCase.event.actor} />
              <EventRow label="Authority" value={useCase.event.authority} />
              <EventRow label="Action" value={useCase.event.action} />
              <EventRow label="Subject" value={useCase.event.subject} />
              <EventRow label="Jurisdiction" value={useCase.event.jurisdiction} />
              <EventRow label="Timestamp" value={useCase.event.timestamp} />
              <EventRow label="SHA-256" value={hash} mono />
              <EventRow label="Status" value="✅ VERIFIED — Tamper-proof" highlight />
            </div>
          </Card>

          {/* Impact */}
          <Card className="p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Measurable Impact</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {useCase.impact.map((m, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{m.metric}</p>
                    <p className="text-sm font-semibold">{m.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center">
            <Button variant="outline" onClick={reset} size="sm">Reset Simulation</Button>
          </div>
        </>
      )}
    </div>
  );
}

function EventRow({ label, value, mono, highlight }: { label: string; value: string; mono?: boolean; highlight?: boolean }) {
  return (
    <div className="flex gap-3 py-1 border-b border-border/50 last:border-0">
      <span className="text-xs font-medium text-muted-foreground min-w-[90px] uppercase tracking-wider">{label}</span>
      <span className={`text-sm ${mono ? 'font-mono text-xs break-all' : ''} ${highlight ? 'text-green-600 font-semibold' : 'text-foreground'}`}>
        {value}
      </span>
    </div>
  );
}
