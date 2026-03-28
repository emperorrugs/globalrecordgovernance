import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Clock, ExternalLink } from 'lucide-react';

interface Dispute {
  id: string;
  reason: string;
  status: string;
  raised_at: string;
  resolved_at: string | null;
  resolution: string | null;
  records: { id: string; title: string; status: string } | null;
}

export default function DisputesConsole() {
  const [disputes, setDisputes] = useState<Dispute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('disputes')
      .select('id, reason, status, raised_at, resolved_at, resolution, records(id, title, status)')
      .order('raised_at', { ascending: false })
      .then(({ data }) => {
        setDisputes((data || []) as unknown as Dispute[]);
        setLoading(false);
      });
  }, []);

  const statusIcon = (s: string) => {
    if (s === 'open') return <AlertTriangle className="h-4 w-4 text-amber-500" />;
    if (s === 'resolved') return <CheckCircle className="h-4 w-4 text-green-500" />;
    return <Clock className="h-4 w-4 text-blue-500" />;
  };

  const statusColor = (s: string) => {
    if (s === 'open') return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
    if (s === 'resolved') return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    return 'bg-blue-100 text-blue-800';
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Disputes</h1>
        <p className="text-sm text-muted-foreground mt-1">Track and manage record disputes and exceptions</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <p className="text-2xl font-semibold">{disputes.filter(d => d.status === 'open').length}</p>
          <p className="text-xs text-muted-foreground">Open</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-semibold">{disputes.filter(d => d.status === 'under_review').length}</p>
          <p className="text-xs text-muted-foreground">Under Review</p>
        </Card>
        <Card className="p-4 text-center">
          <p className="text-2xl font-semibold">{disputes.filter(d => d.status === 'resolved').length}</p>
          <p className="text-xs text-muted-foreground">Resolved</p>
        </Card>
      </div>

      {loading ? (
        <p className="text-sm text-muted-foreground py-12 text-center">Loading…</p>
      ) : disputes.length === 0 ? (
        <Card className="p-12 text-center">
          <CheckCircle className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">No disputes recorded.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {disputes.map(d => (
            <Card key={d.id} className="p-5">
              <div className="flex items-start gap-3">
                {statusIcon(d.status)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className={`${statusColor(d.status)} text-[10px]`}>{d.status.toUpperCase()}</Badge>
                    <span className="text-xs text-muted-foreground">{new Date(d.raised_at).toLocaleString()}</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{d.records?.title || 'Unknown Record'}</p>
                  <p className="text-sm text-muted-foreground">{d.reason}</p>
                  {d.resolution && (
                    <div className="mt-2 p-2 rounded bg-muted/50 border border-border">
                      <p className="text-xs font-medium text-green-600 mb-1">Resolution</p>
                      <p className="text-sm">{d.resolution}</p>
                    </div>
                  )}
                </div>
                {d.records && (
                  <Link to={`/app/records/${d.records.id}`}>
                    <Button variant="ghost" size="icon" className="shrink-0"><ExternalLink className="h-4 w-4" /></Button>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
