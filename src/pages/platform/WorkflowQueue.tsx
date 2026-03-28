import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { Clock, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

interface QueueItem {
  id: string;
  title: string;
  status: RecordStatus;
  created_at: string;
  actor_ref: string | null;
  sectors: { name: string } | null;
  record_types: { name: string } | null;
}

export default function WorkflowQueue() {
  const [items, setItems] = useState<QueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'pending' | 'approved'>('pending');

  useEffect(() => { fetchQueue(); }, [tab]);

  async function fetchQueue() {
    setLoading(true);
    const statuses = tab === 'pending' ? ['submitted', 'under_review'] : ['approved'];
    const { data } = await supabase
      .from('records')
      .select('id, title, status, created_at, actor_ref, sectors(name), record_types(name)')
      .in('status', statuses as any)
      .order('created_at', { ascending: true })
      .limit(50);
    setItems((data || []) as unknown as QueueItem[]);
    setLoading(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Workflow Queue</h1>
        <p className="text-sm text-muted-foreground mt-1">Records requiring action</p>
      </div>

      <div className="flex gap-2">
        <Button variant={tab === 'pending' ? 'default' : 'outline'} size="sm" onClick={() => setTab('pending')} className="gap-2">
          <Clock className="h-4 w-4" /> Pending Review ({tab === 'pending' ? items.length : '…'})
        </Button>
        <Button variant={tab === 'approved' ? 'default' : 'outline'} size="sm" onClick={() => setTab('approved')} className="gap-2">
          <CheckCircle className="h-4 w-4" /> Ready to Seal ({tab === 'approved' ? items.length : '…'})
        </Button>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground py-12 text-center">Loading queue…</p>
      ) : items.length === 0 ? (
        <Card className="p-12 text-center">
          <CheckCircle className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">No items in this queue.</p>
        </Card>
      ) : (
        <div className="space-y-2">
          {items.map(item => (
            <Link key={item.id} to={`/app/records/${item.id}`}>
              <Card className="p-4 hover:border-primary/30 transition-colors cursor-pointer">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {item.status === 'submitted' && <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />}
                      {item.status === 'under_review' && <Clock className="h-4 w-4 text-blue-500 shrink-0" />}
                      {item.status === 'approved' && <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />}
                      <p className="text-sm font-medium truncate">{item.title}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.sectors?.name} · {item.record_types?.name} · {item.actor_ref || 'Unknown actor'} · {new Date(item.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Badge variant="secondary" className={`${STATUS_COLORS[item.status]} text-[10px]`}>
                      {STATUS_LABELS[item.status]}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
