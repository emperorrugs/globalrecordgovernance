import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';
import { fetchDashboardData, type DashboardStats, type RecentRecord } from '@/services/dashboard';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { FileText, ShieldCheck, Clock, AlertTriangle, CheckCircle, Plus, Activity, BarChart3 } from 'lucide-react';

export default function PlatformDashboard() {
  const { profile, organization } = useAuth();
  const [stats, setStats] = useState<DashboardStats>({ total: 0, sealed: 0, pending: 0, verifications: 0, disputes: 0, byStatus: {} });
  const [recentRecords, setRecentRecords] = useState<RecentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData().then(data => {
      setStats(data.stats);
      setRecentRecords(data.recentRecords);
      setLoading(false);
    });
  }, []);

  const statCards = [
    { label: 'Total Records', value: stats.total, icon: FileText, color: 'text-[#00A4EF]' },
    { label: 'Sealed Records', value: stats.sealed, icon: ShieldCheck, color: 'text-[#7FBA00]' },
    { label: 'Pending Review', value: stats.pending, icon: Clock, color: 'text-[#FFB900]' },
    { label: 'Verifications', value: stats.verifications, icon: CheckCircle, color: 'text-[#00A4EF]' },
    { label: 'Open Disputes', value: stats.disputes, icon: AlertTriangle, color: 'text-[#F25022]' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {organization?.name || 'GRGF™ Platform'} · {profile?.full_name}
          </p>
        </div>
        <Link to="/app/records/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" /> New Record
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {statCards.map(s => (
          <Card key={s.label} className="p-4">
            <div className="flex items-center gap-3">
              <s.icon className={`h-5 w-5 ${s.color}`} />
              <div>
                <p className="text-2xl font-semibold">{loading ? '—' : s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Records */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Activity className="h-5 w-5 text-[#00A4EF]" /> Recent Records
          </h2>
          <Link to="/app/records">
            <Button variant="ghost" size="sm">View All</Button>
          </Link>
        </div>
        {loading ? (
          <p className="text-sm text-muted-foreground py-8 text-center">Loading…</p>
        ) : recentRecords.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-10 w-10 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">No records yet. Create your first governance record.</p>
            <Link to="/app/records/create">
              <Button className="mt-4 gap-2" size="sm">
                <Plus className="h-4 w-4" /> Create Record
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-2">
            {recentRecords.map(r => (
              <Link key={r.id} to={`/app/records/${r.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{r.title}</p>
                  <p className="text-xs text-muted-foreground">{r.sector?.name} · {new Date(r.created_at).toLocaleDateString()}</p>
                </div>
                <Badge variant="secondary" className={`${STATUS_COLORS[r.status]} text-[10px] shrink-0 ml-3`}>
                  {STATUS_LABELS[r.status]}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </Card>

      {/* Status Distribution */}
      <Card className="p-5">
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-4">
          <BarChart3 className="h-5 w-5 text-[#7FBA00]" /> Status Distribution
        </h2>
        <div className="flex flex-wrap gap-3">
          {Object.entries(stats.byStatus).map(([status, count]) => (
            <div key={status} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 border border-border">
              <Badge variant="secondary" className={`${STATUS_COLORS[status as RecordStatus]} text-[10px]`}>
                {STATUS_LABELS[status as RecordStatus] || status}
              </Badge>
              <span className="text-sm font-medium">{count}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
