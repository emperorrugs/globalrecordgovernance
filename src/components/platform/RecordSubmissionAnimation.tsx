import { useState, useEffect, useCallback } from 'react';
import { CheckCircle, Loader2, Shield, Hash, Anchor, FileCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface RecordResult {
  recordId: string;
  hash: string;
  timestamp: string;
  anchorBatchId: string;
  title: string;
}

interface Props {
  result: RecordResult;
  onViewRecord: () => void;
  onCreateAnother: () => void;
}

const STEPS = [
  { label: 'Normalizing data…', icon: FileCheck, duration: 1200 },
  { label: 'Validating schema…', icon: Shield, duration: 1000 },
  { label: 'Generating SHA-256 hash…', icon: Hash, duration: 1400 },
  { label: 'Anchoring record…', icon: Anchor, duration: 1100 },
  { label: 'Record verified ✓', icon: CheckCircle, duration: 0 },
];

export default function RecordSubmissionAnimation({ result, onViewRecord, onCreateAnother }: Props) {
  const [currentStep, setCurrentStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const advanceSteps = useCallback(() => {
    let step = 0;
    const advance = () => {
      if (step < STEPS.length - 1) {
        step++;
        setCurrentStep(step);
        if (step < STEPS.length - 1) {
          setTimeout(advance, STEPS[step].duration);
        } else {
          setTimeout(() => setComplete(true), 600);
        }
      }
    };
    setTimeout(advance, STEPS[0].duration);
  }, []);

  useEffect(() => {
    advanceSteps();
  }, [advanceSteps]);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Step Progress */}
      <Card className="p-8 border-primary/20 bg-card">
        <div className="space-y-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === currentStep;
            const isDone = i < currentStep || complete;
            const isPending = i > currentStep && !complete;

            return (
              <div
                key={i}
                className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-all duration-500 ${
                  isActive ? 'bg-primary/10 border border-primary/30' :
                  isDone ? 'bg-accent/30 opacity-80' :
                  'opacity-30'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isDone ? 'bg-green-500/20 text-green-500' :
                  isActive ? 'bg-primary/20 text-primary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {isActive && !complete ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isDone ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <Icon className="h-5 w-5" />
                  )}
                </div>
                <span className={`text-sm font-medium tracking-wide ${
                  isDone ? 'text-green-600 dark:text-green-400' :
                  isActive ? 'text-foreground' :
                  'text-muted-foreground'
                }`}>
                  {step.label}
                </span>
                {isActive && !complete && (
                  <div className="ml-auto">
                    <div className="h-1.5 w-20 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full animate-[progress_1s_ease-in-out_infinite]" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Final Result Card */}
      {complete && (
        <Card className="p-8 border-green-500/30 bg-green-500/5 animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <Shield className="h-8 w-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">Record Anchored</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Immutable governance record successfully created and verified
            </p>
          </div>

          <div className="space-y-3 bg-background rounded-lg p-5 border border-border">
            <Row label="Record ID" value={result.recordId} mono />
            <Row label="Title" value={result.title} />
            <Row label="SHA-256 Hash" value={result.hash} mono truncate />
            <Row label="Timestamp" value={result.timestamp} />
            <Row label="Anchor Batch" value={result.anchorBatchId} mono />
            <Row label="Status" value="✅ VERIFIED" highlight />
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4 italic">
            GRGF™ does not interpret reality. It records it — immutably.
          </p>

          <div className="flex gap-3 justify-center mt-6">
            <Button onClick={onViewRecord}>View Record</Button>
            <Button variant="outline" onClick={onCreateAnother}>Create Another</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

function Row({ label, value, mono, truncate, highlight }: {
  label: string; value: string; mono?: boolean; truncate?: boolean; highlight?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5 border-b border-border/50 last:border-0">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider min-w-[110px]">{label}</span>
      <span className={`text-sm text-right ${mono ? 'font-mono' : ''} ${truncate ? 'truncate max-w-[280px]' : ''} ${highlight ? 'text-green-500 font-semibold' : 'text-foreground'}`}>
        {value}
      </span>
    </div>
  );
}
