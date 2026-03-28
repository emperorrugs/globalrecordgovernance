import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Activity } from 'lucide-react';
import type { AuditLogEntry } from '@/lib/types';

export default function AuditTrail() {
  const [logs, setLogs] = useState<AuditLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('all');

  useEffect(() => { fetchLogs(); }, [actionFilter]);

  async function fetchLogs() {
    setLoading(true);
    let query = supabase
      .from('audit_logs')
      .select('*')
      .order('occurred_at', { ascending: false })
      .limit(200);

    if (actionFilter !== 'all') {
      query = query.eq('action_type', actionFilter);
    }

    const { data } = await query;
    setLogs((data || []) as unknown as AuditLogEntry[]);
    setLoading(false);
  }

  const filtered = logs.filter(l =>
    !search.trim() || l.action_type.toLowerCase().includes(search.toLowerCase()) || l.entity_type.toLowerCase().includes(search.toLowerCase())
  );

  const actionTypes = ['create', 'edit', 'submit', 'review', 'approve', 'reject', 'seal', 'verify', 'dispute', 'resolve', 'revoke', 'supersede', 'archive'];

  const actionColors: Record<string, string> = {
    create: 'bg-blue-100 text-blue-700',
    submit: 'bg-indigo-100 text-indigo-700',
    approve: 'bg-green-100 text-green-700',
    seal: 'bg-emerald-100 text-emerald-800',
    reject: 'bg-red-100 text-red-700',
    dispute: 'bg-orange-100 text-orange-700',
    verify: 'bg-teal-100 text-teal-700',
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Activity className="h-6 w-6 text-[#00A4EF]" /> Audit Trail
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Immutable-style activity log of all governance actions</p>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search audit logs…" value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={actionFilter} onValueChange={setActionFilter}>
          <SelectTrigger className="w-[160px]"><SelectValue placeholder="All actions" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Actions</SelectItem>
            {actionTypes.map(a => <SelectItem key={a} value={a} className="capitalize">{a}</SelectItem>)}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground py-12 text-center">Loading audit logs…</p>
      ) : filtered.length === 0 ? (
        <Card className="p-12 text-center">
          <Activity className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">No audit entries found.</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map(log => (
            <Card key={log.id} className="p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className={`text-[10px] ${actionColors[log.action_type] || 'bg-gray-100 text-gray-700'}`}>
                      {log.action_type.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-muted-foreground capitalize">{log.entity_type}</span>
                    {log.entity_id && <span className="text-xs font-mono text-muted-foreground/60">{log.entity_id.slice(0, 8)}…</span>}
                  </div>
                  {log.integrity_hash && (
                    <p className="text-[10px] font-mono text-muted-foreground/50 truncate">Hash: {log.integrity_hash}</p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground shrink-0">
                  {new Date(log.occurred_at).toLocaleString()}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
