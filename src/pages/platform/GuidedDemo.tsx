import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, FileText, Upload, UserCheck, ShieldCheck, Search, 
  Activity, AlertTriangle, CheckCircle, ArrowRight, ChevronRight, RotateCcw
} from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: 'Record Creation',
    subtitle: 'A government officer creates a procurement approval record',
    icon: FileText,
    color: 'text-blue-500',
    detail: 'Officer Dr. Elena Voss at the Ministry of Public Administration creates a record for the Q4 Capital Equipment Procurement worth $2.4M. She enters the title, description, sector (Procurement), authority context, and classification level.',
    link: '/app/records/create',
    linkLabel: 'Open Create Record',
    simulated: {
      title: 'Q4 Capital Equipment Procurement Approval',
      actor: 'Deputy Minister — Dr. Elena Voss',
      sector: 'Procurement',
      status: 'Draft',
    }
  },
  {
    id: 2,
    title: 'Evidence Upload',
    subtitle: 'Supporting documents attached to the governance record',
    icon: Upload,
    color: 'text-indigo-500',
    detail: 'Dr. Voss uploads the signed procurement contract, vendor evaluation matrix, and budget allocation memo as evidence attachments. Each file is hashed (SHA-256) for integrity verification.',
    simulated: {
      files: ['Procurement_Contract_Q4_2026.pdf', 'Vendor_Evaluation_Matrix.xlsx', 'Budget_Allocation_Memo.pdf'],
      hashes: ['a1b2c3...', 'e5f6g7...', 'h8i9j0...'],
    }
  },
  {
    id: 3,
    title: 'Authority Binding',
    subtitle: 'Authorized official approves with role and mandate',
    icon: UserCheck,
    color: 'text-green-500',
    detail: 'The Deputy Minister reviews the record for completeness and compliance. She confirms her authority under Mandate NV-GOV-2026-042 and approves the record. The system captures her role, timestamp, and decision rationale.',
    simulated: {
      approver: 'Dr. Elena Voss — Deputy Minister of Finance',
      mandate: 'NV-GOV-2026-042',
      decision: 'Approved',
      timestamp: '2026-01-16T11:00:00Z',
    }
  },
  {
    id: 4,
    title: 'Record Sealing',
    subtitle: 'System generates hash, verification receipt, and immutable state',
    icon: ShieldCheck,
    color: 'text-emerald-600',
    detail: 'The system generates a SHA-256 hash of the canonical record payload, links it to the previous record hash (append-only chain), creates a verification receipt with a unique token, and transitions the record to SEALED status. The record is now immutable.',
    link: '/app/records/e0000000-0000-0000-0000-000000000001',
    linkLabel: 'View Sealed Record',
    simulated: {
      hash: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2',
      receipt: 'VR-2026-NV-001',
      status: 'SEALED',
      sealed_at: '2026-01-16T14:00:00Z',
    }
  },
  {
    id: 5,
    title: 'Public Verification',
    subtitle: 'Independent user verifies the record via ID',
    icon: Search,
    color: 'text-cyan-500',
    detail: 'A journalist, auditor, or citizen enters the record\'s verification token into the Public Verification Portal. The system recomputes the hash, compares it with the stored value, and returns: VALID — Record integrity confirmed. No tampering detected.',
    link: '/verify',
    linkLabel: 'Open Verification Portal',
    simulated: {
      input: 'e0000000-0000-0000-0000-000000000001',
      result: '✅ VALID',
      integrity: 'Hash match confirmed',
      chain: 'Append-only chain intact',
    }
  },
  {
    id: 6,
    title: 'Audit Review',
    subtitle: 'Auditor opens console and sees full activity trace',
    icon: Activity,
    color: 'text-orange-500',
    detail: 'An independent auditor accesses the Audit Trail and views the complete, immutable activity log: creation → submission → review → approval → sealing. Every action is timestamped, attributed, and hash-linked. No gaps, no modifications.',
    link: '/app/audit',
    linkLabel: 'Open Audit Console',
    simulated: {
      events: [
        'Jan 15, 09:30 — Record created (Draft)',
        'Jan 15, 10:00 — Submitted for review',
        'Jan 16, 11:00 — Approved by Deputy Minister',
        'Jan 16, 14:00 — Record sealed (SHA-256)',
      ]
    }
  },
  {
    id: 7,
    title: 'Dispute Scenario',
    subtitle: 'A dispute is raised — tracked immutably',
    icon: AlertTriangle,
    color: 'text-red-500',
    detail: 'An oversight officer raises a dispute on the emergency medical procurement record, flagging that competitive bidding was bypassed. The record\'s status changes to DISPUTED. The dispute reason, evidence, and resolution path are all captured in the immutable audit trail.',
    link: '/app/disputes',
    linkLabel: 'View Disputes',
    simulated: {
      record: 'Emergency Medical Supplies Procurement',
      reason: 'Competitive bidding requirements bypassed',
      status: 'DISPUTED',
      tracking: 'Immutable — all actions logged',
    }
  },
];

export default function GuidedDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const [running, setRunning] = useState(false);

  function runScenario() {
    setRunning(true);
    setActiveStep(0);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= STEPS.length) {
        clearInterval(interval);
        setRunning(false);
      } else {
        setActiveStep(step);
      }
    }, 3000);
  }

  const currentStep = STEPS[activeStep];

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Guided Demo</h1>
          <p className="text-sm text-muted-foreground mt-1">Republic of Novaris — Full Lifecycle Simulation</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => { setActiveStep(0); setRunning(false); }} className="gap-2">
            <RotateCcw className="h-4 w-4" /> Reset
          </Button>
          <Button size="sm" onClick={runScenario} disabled={running} className="gap-2">
            <Play className="h-4 w-4" /> {running ? 'Running…' : 'Run Full Scenario'}
          </Button>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="flex gap-1 overflow-x-auto pb-2">
        {STEPS.map((step, i) => (
          <button
            key={step.id}
            onClick={() => { setActiveStep(i); setRunning(false); }}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              i === activeStep
                ? 'bg-primary text-primary-foreground'
                : i < activeStep
                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            {i < activeStep ? <CheckCircle className="h-3.5 w-3.5" /> : <span className="font-bold">{step.id}</span>}
            {step.title}
          </button>
        ))}
      </div>

      {/* Active Step Detail */}
      <Card className="p-6 border-2 border-primary/20">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl bg-muted ${currentStep.color}`}>
            <currentStep.icon className="h-6 w-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-[10px]">Step {currentStep.id} of 7</Badge>
              <h2 className="text-lg font-semibold">{currentStep.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{currentStep.subtitle}</p>
            <p className="text-sm leading-relaxed mb-4">{currentStep.detail}</p>

            {/* Simulated Data */}
            <Card className="p-4 bg-muted/30 border-dashed">
              <p className="text-[10px] font-mono text-muted-foreground mb-2">SIMULATED OUTPUT</p>
              <pre className="text-xs font-mono whitespace-pre-wrap break-all">
                {JSON.stringify(currentStep.simulated, null, 2)}
              </pre>
            </Card>

            {currentStep.link && (
              <Link to={currentStep.link}>
                <Button variant="outline" size="sm" className="mt-4 gap-2">
                  {currentStep.linkLabel} <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Card>

      {/* Step navigation */}
      <div className="flex justify-between">
        <Button variant="ghost" size="sm" disabled={activeStep === 0} onClick={() => setActiveStep(a => a - 1)}>
          ← Previous
        </Button>
        <Button variant="ghost" size="sm" disabled={activeStep === STEPS.length - 1} onClick={() => setActiveStep(a => a + 1)}>
          Next →
        </Button>
      </div>
    </div>
  );
}
