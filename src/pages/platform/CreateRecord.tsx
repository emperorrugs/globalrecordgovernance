import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth-context';
import { createRecord, validateRecordInput, type CreateRecordInput } from '@/services/records';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Save, SendHorizonal } from 'lucide-react';
import RecordSubmissionAnimation from '@/components/platform/RecordSubmissionAnimation';

interface SubmissionResult {
  recordId: string;
  hash: string;
  timestamp: string;
  anchorBatchId: string;
  title: string;
}

export default function CreateRecord() {
  const { user, organization } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [sectors, setSectors] = useState<Array<{ id: string; name: string }>>([]);
  const [recordTypes, setRecordTypes] = useState<Array<{ id: string; name: string; sector_id: string }>>([]);
  const [jurisdictions, setJurisdictions] = useState<Array<{ id: string; name: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    sector_id: '',
    record_type_id: '',
    jurisdiction_id: '',
    event_type: '',
    actor_ref: '',
    subject_ref: '',
    occurred_at: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    confidentiality_level: 'internal' as string,
    retention_class: 'medium_term' as string,
    public_verifiable: true,
  });

  useEffect(() => {
    Promise.all([
      supabase.from('sectors').select('id, name').order('display_order'),
      supabase.from('record_types').select('id, name, sector_id'),
      supabase.from('jurisdictions').select('id, name'),
    ]).then(([s, rt, j]) => {
      setSectors((s.data || []) as Array<{ id: string; name: string }>);
      setRecordTypes((rt.data || []) as Array<{ id: string; name: string; sector_id: string }>);
      setJurisdictions((j.data || []) as Array<{ id: string; name: string }>);
    });
  }, []);

  const filteredTypes = recordTypes.filter(rt => rt.sector_id === form.sector_id);

  const update = (field: string, value: string | boolean) => setForm(f => ({ ...f, [field]: value }));

  async function handleSave(submitAfter = false) {
    if (!user || !organization) {
      toast({ title: 'Not authenticated', description: 'Please log in.', variant: 'destructive' });
      return;
    }

    const input: CreateRecordInput = {
      title: form.title,
      description: form.description,
      sector_id: form.sector_id,
      record_type_id: form.record_type_id,
      jurisdiction_id: form.jurisdiction_id || undefined,
      event_type: form.event_type || undefined,
      actor_ref: form.actor_ref || undefined,
      subject_ref: form.subject_ref || undefined,
      occurred_at: form.occurred_at || undefined,
      timezone: form.timezone,
      confidentiality_level: form.confidentiality_level,
      retention_class: form.retention_class,
      public_verifiable: form.public_verifiable,
    };

    const validation = validateRecordInput(input);
    if (!validation.valid) {
      toast({ title: 'Missing fields', description: validation.errors.join('. '), variant: 'destructive' });
      return;
    }

    setLoading(true);

    try {
      const result = await createRecord(input, user.id, organization.id, submitAfter);

      if (submitAfter) {
        setSubmissionResult({
          recordId: result.recordId,
          hash: result.hash,
          timestamp: result.timestamp,
          anchorBatchId: result.anchorBatchId,
          title: result.title,
        });
      } else {
        toast({ title: 'Draft Saved', description: `Record "${result.title}" has been saved as draft.` });
        navigate(`/app/records/${result.recordId}`);
      }
    } catch (err) {
      toast({ title: 'Error creating record', description: (err as Error).message, variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  }

  if (submissionResult) {
    return (
      <div className="space-y-6 max-w-3xl">
        <RecordSubmissionAnimation
          result={submissionResult}
          onViewRecord={() => navigate(`/app/records/${submissionResult.recordId}`)}
          onCreateAnother={() => {
            setSubmissionResult(null);
            setForm({ title: '', description: '', sector_id: '', record_type_id: '', jurisdiction_id: '', event_type: '', actor_ref: '', subject_ref: '', occurred_at: '', timezone: Intl.DateTimeFormat().resolvedOptions().timeZone, confidentiality_level: 'internal', retention_class: 'medium_term', public_verifiable: false });
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Create Governance Record</h1>
          <p className="text-sm text-muted-foreground">Capture an institutional action, decision, or event</p>
        </div>
      </div>

      <Card className="p-6 space-y-5">
        <div className="space-y-2">
          <Label htmlFor="title">Record Title *</Label>
          <Input id="title" placeholder="e.g., Procurement Approval — Q4 Capital Equipment" value={form.title} onChange={e => update('title', e.target.value)} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" placeholder="Describe the governance event or action…" rows={4} value={form.description} onChange={e => update('description', e.target.value)} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Sector *</Label>
            <Select value={form.sector_id} onValueChange={v => { update('sector_id', v); update('record_type_id', ''); }}>
              <SelectTrigger><SelectValue placeholder="Select sector" /></SelectTrigger>
              <SelectContent>
                {sectors.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Record Type *</Label>
            <Select value={form.record_type_id} onValueChange={v => update('record_type_id', v)} disabled={!form.sector_id}>
              <SelectTrigger><SelectValue placeholder={form.sector_id ? 'Select type' : 'Select sector first'} /></SelectTrigger>
              <SelectContent>
                {filteredTypes.map(rt => <SelectItem key={rt.id} value={rt.id}>{rt.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Jurisdiction</Label>
            <Select value={form.jurisdiction_id} onValueChange={v => update('jurisdiction_id', v)}>
              <SelectTrigger><SelectValue placeholder="Select jurisdiction" /></SelectTrigger>
              <SelectContent>
                {jurisdictions.map(j => <SelectItem key={j.id} value={j.id}>{j.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Event Type</Label>
            <Input placeholder="e.g., approval, inspection, issuance" value={form.event_type} onChange={e => update('event_type', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Actor Reference</Label>
            <Input placeholder="Authority or person acting" value={form.actor_ref} onChange={e => update('actor_ref', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Subject Reference</Label>
            <Input placeholder="Person or entity affected" value={form.subject_ref} onChange={e => update('subject_ref', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Date of Occurrence</Label>
            <Input type="datetime-local" value={form.occurred_at} onChange={e => update('occurred_at', e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Timezone</Label>
            <Input value={form.timezone} onChange={e => update('timezone', e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Confidentiality Level</Label>
            <Select value={form.confidentiality_level} onValueChange={v => update('confidentiality_level', v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="public">Public</SelectItem>
                <SelectItem value="internal">Internal</SelectItem>
                <SelectItem value="confidential">Confidential</SelectItem>
                <SelectItem value="restricted">Restricted</SelectItem>
                <SelectItem value="top_secret">Top Secret</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Retention Class</Label>
            <Select value={form.retention_class} onValueChange={v => update('retention_class', v)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="temporary">Temporary</SelectItem>
                <SelectItem value="short_term">Short Term</SelectItem>
                <SelectItem value="medium_term">Medium Term</SelectItem>
                <SelectItem value="long_term">Long Term</SelectItem>
                <SelectItem value="permanent">Permanent</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-3 justify-end">
        <Button variant="outline" onClick={() => handleSave(false)} disabled={loading} className="gap-2">
          <Save className="h-4 w-4" /> Save Draft
        </Button>
        <Button onClick={() => handleSave(true)} disabled={loading} className="gap-2">
          <SendHorizonal className="h-4 w-4" /> Submit for Review
        </Button>
      </div>
    </div>
  );
}
