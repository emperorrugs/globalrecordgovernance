import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth-context';
import { updateRecordStatus } from '@/services/records';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { ArrowLeft, ShieldCheck, Clock, Hash, FileText, CheckCircle, XCircle, Copy, ExternalLink } from 'lucide-react';

export default function RecordDetail() {
  const { id } = useParams<{ id: string }>();
  const { user, hasRole } = useAuth();
  const { toast } = useToast();
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const [events, setEvents] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);
  const [actionNote, setActionNote] = useState('');

  useEffect(() => {
    if (id) loadRecord();
  }, [id]);

  async function loadRecord() {
    const [recRes, eventsRes] = await Promise.all([
      supabase.from('records').select('*, sectors(name, code), record_types(name, code), jurisdictions(name, code)').eq('id', id!).single(),
      supabase.from('record_events').select('*').eq('record_id', id!).order('occurred_at', { ascending: false }),
    ]);
    setRecord(recRes.data as Record<string, unknown>);
    setEvents((eventsRes.data || []) as Array<Record<string, unknown>>);
    setLoading(false);
  }

  async function handleStatusChange(newStatus: RecordStatus) {
    if (!record || !user || !id) return;

    try {
      await updateRecordStatus(id, record, newStatus, user.id, actionNote || undefined);
      setActionNote('');
      toast({ title: `Record ${STATUS_LABELS[newStatus]}`, description: `Status updated to ${STATUS_LABELS[newStatus]}.` });
      loadRecord();
    } catch (err) {
      toast({ title: 'Action failed', description: (err as Error).message, variant: 'destructive' });
    }
  }

  if (loading) return <p className="text-sm text-muted-foreground py-12 text-center">Loading…</p>;
  if (!record) return <p className="text-sm text-muted-foreground py-12 text-center">Record not found.</p>;

  const status = record.status as RecordStatus;
  const isOwner = user?.id === record.created_by;
  const canSubmit = isOwner && status === 'draft';
  const canApprove = (hasRole('approver') || hasRole('tenant_admin') || hasRole('super_admin')) && ['submitted', 'under_review'].includes(status);
  const canSeal = (hasRole('approver') || hasRole('tenant_admin') || hasRole('super_admin')) && status === 'approved';
  const isSealed = status === 'sealed';
  const sectors = record.sectors as { name: string; code: string } | null;
  const recordTypes = record.record_types as { name: string; code: string } | null;

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <Link to="/app/records"><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold tracking-tight truncate">{record.title as string}</h1>
          <p className="text-xs text-muted-foreground mt-1">
            {sectors?.name} · {recordTypes?.name} · ID: {(record.id as string).slice(0, 8)}…
          </p>
        </div>
        <Badge className={`${STATUS_COLORS[status]} text-xs`}>{STATUS_LABELS[status]}</Badge>
      </div>

      {/* Details Card */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2"><FileText className="h-4 w-4 text-[#00A4EF]" /> Record Details</h2>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div><span className="text-muted-foreground text-xs">Description</span><p className="mt-1">{(record.description as string) || '—'}</p></div>
          <div><span className="text-muted-foreground text-xs">Event Type</span><p className="mt-1">{(record.event_type as string) || '—'}</p></div>
          <div><span className="text-muted-foreground text-xs">Actor</span><p className="mt-1">{(record.actor_ref as string) || '—'}</p></div>
          <div><span className="text-muted-foreground text-xs">Subject</span><p className="mt-1">{(record.subject_ref as string) || '—'}</p></div>
          <div><span className="text-muted-foreground text-xs">Occurred At</span><p className="mt-1">{record.occurred_at ? new Date(record.occurred_at as string).toLocaleString() : '—'}</p></div>
          <div><span className="text-muted-foreground text-xs">Confidentiality</span><p className="mt-1 capitalize">{(record.confidentiality_level as string).replace('_', ' ')}</p></div>
          <div><span className="text-muted-foreground text-xs">Retention</span><p className="mt-1 capitalize">{(record.retention_class as string).replace('_', ' ')}</p></div>
          <div><span className="text-muted-foreground text-xs">Recorded</span><p className="mt-1">{new Date(record.recorded_at as string).toLocaleString()}</p></div>
        </div>
      </Card>

      {/* Integrity Card */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2"><Hash className="h-4 w-4 text-[#7FBA00]" /> Integrity & Verification</h2>
        <div className="space-y-3 text-sm">
          <div><span className="text-muted-foreground text-xs">Current Hash (SHA-256)</span><p className="font-mono text-xs mt-1 break-all">{(record.current_hash as string) || 'Pending'}</p></div>
          <div><span className="text-muted-foreground text-xs">Previous Hash</span><p className="font-mono text-xs mt-1 break-all">{(record.previous_hash as string) || 'Genesis'}</p></div>
          <div><span className="text-muted-foreground text-xs">Verification Token</span><p className="font-mono text-xs mt-1">{(record.verification_token as string) || '—'}</p></div>
          {record.sealed_at && <div><span className="text-muted-foreground text-xs">Sealed At</span><p className="mt-1">{new Date(record.sealed_at as string).toLocaleString()}</p></div>}
        </div>

        {/* Public Verification Link (sealed records) */}
        {status === 'sealed' && record.verification_token && (record.public_verifiable as boolean) && (
          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Sealed ✓ — Public Verification Available</span>
            </div>
            <div className="flex items-center gap-2">
              <code className="text-xs font-mono bg-muted px-2 py-1 rounded flex-1 truncate">
                {window.location.origin}/verify/public/{record.verification_token as string}
              </code>
              <Button
                variant="outline"
                size="sm"
                className="gap-1 shrink-0"
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/verify/public/${record.verification_token as string}`);
                  toast({ title: 'Copied', description: 'Public verification link copied to clipboard.' });
                }}
              >
                <Copy className="h-3 w-3" /> Copy
              </Button>
              <a href={`/verify/public/${record.verification_token as string}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="gap-1">
                  <ExternalLink className="h-3 w-3" /> Open
                </Button>
              </a>
            </div>
          </div>
        )}
      </Card>

      {/* Actions */}
      {(canApprove || canSeal) && (
        <Card className="p-5">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#FFB900]" /> Workflow Actions</h2>
          <Textarea placeholder="Optional action notes…" value={actionNote} onChange={e => setActionNote(e.target.value)} rows={2} className="mb-3" />
          <div className="flex items-center gap-3 flex-wrap">
            {canApprove && status === 'submitted' && (
              <Button variant="outline" onClick={() => handleStatusChange('under_review')} className="gap-2"><Clock className="h-4 w-4" /> Begin Review</Button>
            )}
            {canApprove && (
              <>
                <Button onClick={() => handleStatusChange('approved')} className="gap-2 bg-green-600 hover:bg-green-700"><CheckCircle className="h-4 w-4" /> Approve</Button>
                <Button variant="destructive" onClick={() => handleStatusChange('draft')} className="gap-2"><XCircle className="h-4 w-4" /> Return to Draft</Button>
              </>
            )}
            {canSeal && (
              <Button onClick={() => handleStatusChange('sealed')} className="gap-2 bg-emerald-700 hover:bg-emerald-800"><ShieldCheck className="h-4 w-4" /> Seal Record</Button>
            )}
          </div>
        </Card>
      )}

      {/* Timeline */}
      <Card className="p-5">
        <h2 className="text-sm font-semibold mb-4 flex items-center gap-2"><Clock className="h-4 w-4 text-[#00A4EF]" /> Activity Timeline</h2>
        {events.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">No events recorded.</p>
        ) : (
          <div className="space-y-3">
            {events.map(ev => (
              <div key={ev.id as string} className="flex items-start gap-3 border-l-2 border-border pl-4 pb-3">
                <div>
                  <p className="text-sm">{ev.description as string}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(ev.occurred_at as string).toLocaleString()} · {(ev.event_type as string).toUpperCase()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
