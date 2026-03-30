import { useEffect, useState } from 'react';
import { fetchReportStats, type ReportStats } from '@/services/dashboard';
import { Card } from '@/components/ui/card';
import { BarChart3, TrendingUp, Shield, AlertTriangle, FileText, Activity } from 'lucide-react';

export default function Reports() {
  const [stats, setStats] = useState<ReportStats>({ bySector: [], byStatus: {}, total: 0, sealed: 0, disputed: 0, verifications: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReportStats().then(data => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  const maxSector = Math.max(...stats.bySector.map(s => s.count), 1);

  if (loading) return <p className="text-sm text-muted-foreground py-12 text-center">Loading reports…</p>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Reports & Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">Republic of Novaris — Governance Intelligence</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4"><div className="flex items-center gap-3"><FileText className="h-5 w-5 text-primary" /><div><p className="text-2xl font-semibold">{stats.total}</p><p className="text-xs text-muted-foreground">Total Records</p></div></div></Card>
        <Card className="p-4"><div className="flex items-center gap-3"><Shield className="h-5 w-5 text-emerald-500" /><div><p className="text-2xl font-semibold">{stats.sealed}</p><p className="text-xs text-muted-foreground">Sealed</p></div></div></Card>
        <Card className="p-4"><div className="flex items-center gap-3"><AlertTriangle className="h-5 w-5 text-amber-500" /><div><p className="text-2xl font-semibold">{stats.disputed}</p><p className="text-xs text-muted-foreground">Disputed</p></div></div></Card>
        <Card className="p-4"><div className="flex items-center gap-3"><Activity className="h-5 w-5 text-blue-500" /><div><p className="text-2xl font-semibold">{stats.verifications}</p><p className="text-xs text-muted-foreground">Verifications</p></div></div></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-5">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /> Records by Sector</h2>
          <div className="space-y-3">
            {stats.bySector.map(s => (
              <div key={s.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="truncate">{s.name}</span>
                  <span className="font-medium">{s.count}</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary/70 transition-all" style={{ width: `${(s.count / maxSector) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <h2 className="text-sm font-semibold mb-4 flex items-center gap-2"><TrendingUp className="h-4 w-4 text-emerald-500" /> Status Distribution</h2>
          <div className="space-y-3">
            {Object.entries(stats.byStatus).map(([status, count]) => (
              <div key={status} className="flex items-center justify-between p-2 rounded bg-muted/50 border border-border">
                <span className="text-sm capitalize">{status.replace('_', ' ')}</span>
                <span className="text-sm font-semibold">{count}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <h2 className="text-sm font-semibold mb-3">Pilot Metrics Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="p-3 rounded bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground">Avg. Seal Time</p>
            <p className="text-lg font-semibold mt-1">1.8 days</p>
          </div>
          <div className="p-3 rounded bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground">Approval Rate</p>
            <p className="text-lg font-semibold mt-1">92%</p>
          </div>
          <div className="p-3 rounded bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground">Dispute Rate</p>
            <p className="text-lg font-semibold mt-1">4.2%</p>
          </div>
          <div className="p-3 rounded bg-muted/50 border border-border">
            <p className="text-xs text-muted-foreground">Integrity Score</p>
            <p className="text-lg font-semibold mt-1 text-emerald-600">100%</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
