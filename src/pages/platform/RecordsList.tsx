import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { Plus, Search, FileText } from 'lucide-react';

interface RecordRow {
  id: string;
  title: string;
  status: RecordStatus;
  confidentiality_level: string;
  created_at: string;
  occurred_at: string | null;
  sectors: { name: string } | null;
  record_types: { name: string } | null;
}

export default function RecordsList() {
  const [records, setRecords] = useState<RecordRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => { fetchRecords(); }, [statusFilter]);

  async function fetchRecords() {
    setLoading(true);
    let query = supabase
      .from('records')
      .select('id, title, status, confidentiality_level, created_at, occurred_at, sectors(name), record_types(name)')
      .order('created_at', { ascending: false })
      .limit(100);

    if (statusFilter !== 'all') {
      query = query.eq('status', statusFilter);
    }

    const { data } = await query;
    setRecords((data || []) as unknown as RecordRow[]);
    setLoading(false);
  }

  const filtered = records.filter(r =>
    !search.trim() || r.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">Records</h1>
        <Link to="/app/records/create">
          <Button className="gap-2"><Plus className="h-4 w-4" /> New Record</Button>
        </Link>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search records…" value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="All statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.entries(STATUS_LABELS).map(([k, v]) => (
              <SelectItem key={k} value={k}>{v}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground py-12 text-center">Loading records…</p>
      ) : filtered.length === 0 ? (
        <Card className="p-12 text-center">
          <FileText className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">No records found.</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {filtered.map(r => (
            <Link key={r.id} to={`/app/records/${r.id}`}>
              <Card className="p-4 hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium truncate">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {r.sectors?.name || '—'} · {r.record_types?.name || '—'} · {new Date(r.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="secondary" className={`${STATUS_COLORS[r.status]} text-[10px] shrink-0`}>
                    {STATUS_LABELS[r.status]}
                  </Badge>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
