import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link, Hash, ShieldCheck, ShieldAlert, ArrowDown, RefreshCw } from 'lucide-react';

interface ChainRecord {
  id: string;
  title: string;
  status: string;
  current_hash: string | null;
  previous_hash: string | null;
  recorded_at: string;
  sealed_at: string | null;
}

export default function ChainIntegrity() {
  const [records, setRecords] = useState<ChainRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [chainValid, setChainValid] = useState(true);
  const [breakIndex, setBreakIndex] = useState<number | null>(null);

  useEffect(() => { loadChain(); }, []);

  async function loadChain() {
    setLoading(true);
    const { data } = await supabase
      .from('records')
      .select('id, title, status, current_hash, previous_hash, recorded_at, sealed_at')
      .order('recorded_at', { ascending: true })
      .limit(100);

    const recs = (data || []) as ChainRecord[];
    setRecords(recs);

    // Validate chain linkage
    let valid = true;
    let brk: number | null = null;
    for (let i = 1; i < recs.length; i++) {
      if (recs[i].previous_hash && recs[i - 1].current_hash && recs[i].previous_hash !== recs[i - 1].current_hash) {
        valid = false;
        brk = i;
        break;
      }
    }
    setChainValid(valid);
    setBreakIndex(brk);
    setLoading(false);
  }

  const truncHash = (h: string | null) => h ? `${h.slice(0, 12)}…${h.slice(-8)}` : '—';

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight flex items-center gap-3">
            <Link className="h-6 w-6 text-primary" />
            Chain Integrity View
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Visualize the hash-linked record chain and verify continuity
          </p>
        </div>
        <div className="flex items-center gap-3">
          {!loading && (
            <Badge
              variant={chainValid ? 'default' : 'destructive'}
              className={`gap-1.5 text-sm py-1 px-3 ${chainValid ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
            >
              {chainValid ? <ShieldCheck className="h-3.5 w-3.5" /> : <ShieldAlert className="h-3.5 w-3.5" />}
              {chainValid ? 'CHAIN INTACT' : 'CHAIN BROKEN'}
            </Badge>
          )}
          <Button variant="outline" size="sm" onClick={loadChain} disabled={loading} className="gap-2">
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </Button>
        </div>
      </div>

      {/* Summary */}
      <Card className="p-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-2xl font-bold text-foreground">{records.length}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Records in Chain</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{records.filter(r => r.sealed_at).length}</p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Sealed</p>
        </div>
        <div>
          <p className={`text-2xl font-bold ${chainValid ? 'text-emerald-600' : 'text-destructive'}`}>
            {chainValid ? '100%' : `Break at #${breakIndex}`}
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Integrity</p>
        </div>
      </Card>

      {/* Chain visualization */}
      {loading ? (
        <div className="text-center py-12">
          <RefreshCw className="h-6 w-6 animate-spin mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Loading chain…</p>
        </div>
      ) : records.length === 0 ? (
        <Card className="p-8 text-center">
          <Hash className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">No records in the chain yet. Create a record to begin.</p>
        </Card>
      ) : (
        <div className="space-y-0">
          {records.map((rec, i) => {
            const isBroken = breakIndex === i;
            return (
              <div key={rec.id}>
                {/* Connector arrow */}
                {i > 0 && (
                  <div className="flex justify-center py-1">
                    <div className={`flex flex-col items-center ${isBroken ? 'text-destructive' : 'text-muted-foreground/40'}`}>
                      <div className={`w-px h-4 ${isBroken ? 'bg-destructive' : 'bg-border'}`} />
                      {isBroken ? (
                        <ShieldAlert className="h-4 w-4 text-destructive" />
                      ) : (
                        <ArrowDown className="h-3.5 w-3.5" />
                      )}
                      <div className={`w-px h-4 ${isBroken ? 'bg-destructive' : 'bg-border'}`} />
                    </div>
                  </div>
                )}

                {/* Record block */}
                <Card className={`p-4 border ${isBroken ? 'border-destructive/40 bg-destructive/5' : 'border-border'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-muted-foreground">#{i}</span>
                        <span className="text-sm font-semibold truncate">{rec.title}</span>
                        <Badge variant="outline" className="text-[10px] uppercase shrink-0">
                          {rec.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 mt-2">
                        <div>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Record ID</span>
                          <span className="text-xs font-mono text-foreground">{rec.id.slice(0, 18)}…</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Recorded</span>
                          <span className="text-xs text-foreground">{new Date(rec.recorded_at).toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Hash</span>
                          <span className="text-xs font-mono text-primary">{truncHash(rec.current_hash)}</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">Previous Hash</span>
                          <span className={`text-xs font-mono ${isBroken ? 'text-destructive' : 'text-muted-foreground'}`}>
                            {truncHash(rec.previous_hash)}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="shrink-0">
                      {rec.current_hash ? (
                        <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      ) : (
                        <Hash className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      )}

      {/* System invariant message */}
      <p className="text-xs text-center text-muted-foreground italic pt-4 border-t border-border">
        GRGF does not interpret reality. It records it — immutably.
      </p>
    </div>
  );
}
