import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Shield, ShieldAlert, Lock, Edit3 } from 'lucide-react';
import { sha256 } from '@/lib/hash';

const SEALED_RECORD = {
  id: 'GRGF™-2026-00847',
  title: 'Procurement Approval — Federal IT Modernization Contract',
  actor: 'Deputy Minister, Public Services',
  action: 'Approved procurement award of $42.6M for IT modernization',
  authority: 'Treasury Board Directive 2024-09',
  timestamp: '2026-03-15T14:32:00Z',
  jurisdiction: 'Canada — Federal',
  status: 'sealed' as const,
};

export default function TamperSimulation() {
  const [originalHash, setOriginalHash] = useState('');
  const [currentHash, setCurrentHash] = useState('');
  const [editedRecord, setEditedRecord] = useState({ ...SEALED_RECORD });
  const [tampering, setTampering] = useState<'idle' | 'editing' | 'detected' | 'verified'>('idle');
  const [editField, setEditField] = useState('');

  const computeHash = async (record: typeof SEALED_RECORD) => {
    const payload = JSON.stringify(record, Object.keys(record).sort());
    return sha256(payload);
  };

  const initDemo = async () => {
    const hash = await computeHash(SEALED_RECORD);
    setOriginalHash(hash);
    setCurrentHash(hash);
    setEditedRecord({ ...SEALED_RECORD });
    setTampering('editing');
    setEditField('');
  };

  const attemptTamper = async () => {
    const newHash = await computeHash(editedRecord);
    setCurrentHash(newHash);
    setTampering(newHash === originalHash ? 'verified' : 'detected');
  };

  const reset = () => {
    setTampering('idle');
    setOriginalHash('');
    setCurrentHash('');
    setEditedRecord({ ...SEALED_RECORD });
    setEditField('');
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-3">
          <ShieldAlert className="h-6 w-6 text-destructive" />
          Tamper Detection Simulation
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Attempt to modify a sealed governance record. The system will detect any unauthorized changes through cryptographic hash verification.
        </p>
      </div>

      {/* Original Sealed Record */}
      <Card className="p-6 border-primary/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" /> Sealed Record
          </h2>
          <Badge variant="outline" className="border-green-500 text-green-600">
            <Shield className="h-3 w-3 mr-1" /> SEALED
          </Badge>
        </div>

        <div className="grid gap-2 text-sm bg-muted/30 rounded-lg p-4">
          <Field label="Record ID" value={SEALED_RECORD.id} />
          <Field label="Title" value={SEALED_RECORD.title} />
          <Field label="Actor" value={SEALED_RECORD.actor} />
          <Field label="Action" value={SEALED_RECORD.action} />
          <Field label="Authority" value={SEALED_RECORD.authority} />
          <Field label="Timestamp" value={SEALED_RECORD.timestamp} />
          <Field label="Jurisdiction" value={SEALED_RECORD.jurisdiction} />
        </div>

        {originalHash && (
          <div className="mt-4 p-3 bg-background rounded border border-border">
            <span className="text-xs text-muted-foreground block mb-1">Original SHA-256 Hash</span>
            <code className="text-xs font-mono text-primary break-all">{originalHash}</code>
          </div>
        )}

        {tampering === 'idle' && (
          <Button onClick={initDemo} className="mt-4 gap-2">
            <Edit3 className="h-4 w-4" /> Attempt to Modify Record
          </Button>
        )}
      </Card>

      {/* Editing Interface */}
      {tampering === 'editing' && (
        <Card className="p-6 border-amber-500/30 bg-amber-500/5 animate-fade-in">
          <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Modify the Record (Simulated Attack)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Change any field below to simulate unauthorized tampering. The system will recompute the hash and detect the change.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Title</Label>
              <Input
                value={editedRecord.title}
                onChange={e => { setEditedRecord(r => ({ ...r, title: e.target.value })); setEditField('title'); }}
              />
            </div>
            <div className="space-y-2">
              <Label>Action Description</Label>
              <Textarea
                value={editedRecord.action}
                onChange={e => { setEditedRecord(r => ({ ...r, action: e.target.value })); setEditField('action'); }}
                rows={2}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Actor</Label>
                <Input
                  value={editedRecord.actor}
                  onChange={e => { setEditedRecord(r => ({ ...r, actor: e.target.value })); setEditField('actor'); }}
                />
              </div>
              <div className="space-y-2">
                <Label>Authority</Label>
                <Input
                  value={editedRecord.authority}
                  onChange={e => { setEditedRecord(r => ({ ...r, authority: e.target.value })); setEditField('authority'); }}
                />
              </div>
            </div>
          </div>

          <Button onClick={attemptTamper} variant="destructive" className="mt-5 gap-2">
            <ShieldAlert className="h-4 w-4" /> Submit Modified Record
          </Button>
        </Card>
      )}

      {/* Detection Result */}
      {tampering === 'detected' && (
        <Card className="p-6 border-destructive/40 bg-destructive/5 animate-fade-in">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/20 mb-3">
              <ShieldAlert className="h-8 w-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-destructive">❌ TAMPERING DETECTED</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Hash mismatch — the record has been altered from its sealed state
            </p>
          </div>

          <div className="space-y-3 bg-background rounded-lg p-5 border border-border">
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Modified Field</span>
              <p className="text-sm font-semibold text-destructive">{editField || 'Unknown'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Original Hash</span>
              <p className="text-xs font-mono text-green-600 break-all">{originalHash}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Computed Hash (Modified)</span>
              <p className="text-xs font-mono text-destructive break-all">{currentHash}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Integrity Verdict</span>
              <Badge variant="destructive">INVALID — RECORD COMPROMISED</Badge>
            </div>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-4 italic">
            This record cannot be overwritten. The original sealed version remains permanently in the evidence backbone.
          </p>

          <div className="flex justify-center mt-5">
            <Button variant="outline" onClick={reset}>Reset Simulation</Button>
          </div>
        </Card>
      )}

      {tampering === 'verified' && (
        <Card className="p-6 border-green-500/30 bg-green-500/5 animate-fade-in">
          <div className="text-center">
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-green-600">Record Integrity Confirmed</h2>
            <p className="text-sm text-muted-foreground mt-1">No modifications detected — hashes match.</p>
          </div>
          <div className="flex justify-center mt-5">
            <Button variant="outline" onClick={reset}>Reset Simulation</Button>
          </div>
        </Card>
      )}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-xs font-medium text-muted-foreground min-w-[90px] uppercase tracking-wider">{label}</span>
      <span className="text-sm text-foreground">{value}</span>
    </div>
  );
}
