import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { STATUS_COLORS, STATUS_LABELS, type RecordStatus } from '@/lib/types';
import { FileText, ShieldCheck, Clock, AlertTriangle, CheckCircle, Activity, BarChart3, Play, Eye } from 'lucide-react';

const stats = {
  total: 24, sealed: 10, pending: 5, verifications: 10, disputes: 2,
  byStatus: { draft: 3, submitted: 3, under_review: 2, approved: 5, sealed: 10, disputed: 1 } as Record<string, number>,
};

const recentRecords = [
  { id: '1', title: 'Q4 Capital Equipment Procurement Approval', status: 'sealed' as RecordStatus, sector: 'Procurement' },
  { id: '2', title: 'Central Hospital Annual Safety Inspection', status: 'sealed' as RecordStatus, sector: 'Healthcare' },
  { id: '3', title: 'Construction Permit — Metro Line Phase 2', status: 'sealed' as RecordStatus, sector: 'Infrastructure' },
  { id: '4', title: 'Patient Data Breach — Regional Hospital', status: 'disputed' as RecordStatus, sector: 'Healthcare' },
  { id: '5', title: 'Dam Safety Inspection — Reservoir NV-3', status: 'approved' as RecordStatus, sector: 'Infrastructure' },
  { id: '6', title: 'National Curriculum Reform Decision', status: 'approved' as RecordStatus, sector: 'Education' },
  { id: '7', title: 'Medical Device Approval — CardioMonitor Pro', status: 'under_review' as RecordStatus, sector: 'Healthcare' },
  { id: '8', title: 'Stadium Evacuation Protocol Report', status: 'submitted' as RecordStatus, sector: 'Public Safety' },
];

const metricCards = [
  { label: 'Total Records', value: stats.total, icon: FileText, color: 'text-blue-500' },
  { label: 'Sealed', value: stats.sealed, icon: ShieldCheck, color: 'text-emerald-500' },
  { label: 'Pending Approval', value: stats.pending, icon: Clock, color: 'text-amber-500' },
  { label: 'Open Disputes', value: stats.disputes, icon: AlertTriangle, color: 'text-red-500' },
];

export default function GuestDashboard() {
  return (
    <div className="space-y-6 max-w-6xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Institutional Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Republic of Novaris — Ministry of Public Administration</p>
        </div>
        <Link to="/demo/app/demo">
          <Button size="sm" className="gap-2">
            <Play className="h-4 w-4" /> Run Guided Demo
          </Button>
        </Link>
      </div>

      {/* Info Banner */}
      <Card className="p-4 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
        <div className="flex items-start gap-3">
          <Eye className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-foreground">You are viewing a live simulation</p>
            <p className="text-xs text-muted-foreground mt-1">
              This dashboard displays real data from the GRGF Pilot Node v0.1 — Republic of Novaris deployment. 
              All 24 governance records, audit trails, and verification receipts are functional. 
              Guest mode is read-only. <Link to="/auth" className="text-primary underline">Sign up</Link> for full access.
            </p>
          </div>
        </div>
      </Card>

      {/* Metrics */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {metricCards.map(m => (
          <Card key={m.label} className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <m.icon className={`h-4 w-4 ${m.color}`} />
              <span className="text-xs text-muted-foreground">{m.label}</span>
            </div>
            <p className="text-2xl font-bold">{m.value}</p>
          </Card>
        ))}
      </div>

      {/* Status Distribution */}
      <Card className="p-5">
        <h3 className="text-sm font-semibold mb-4">Record Status Distribution</h3>
        <div className="flex flex-wrap gap-2">
          {Object.entries(stats.byStatus).map(([status, count]) => (
            <Badge key={status} className={`${STATUS_COLORS[status as RecordStatus] || 'bg-muted'} text-xs px-3 py-1`}>
              {STATUS_LABELS[status as RecordStatus] || status}: {count}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Recent Records */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold">Recent Governance Records</h3>
          <Link to="/demo/app/records">
            <Button variant="ghost" size="sm" className="text-xs gap-1">View All <Activity className="h-3 w-3" /></Button>
          </Link>
        </div>
        <div className="space-y-2">
          {recentRecords.map(r => (
            <div key={r.id} className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{r.title}</p>
                  <p className="text-[11px] text-muted-foreground">{r.sector}</p>
                </div>
              </div>
              <Badge className={`${STATUS_COLORS[r.status]} text-[10px] shrink-0 ml-2`}>
                {STATUS_LABELS[r.status]}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:grid-cols-3">
        <Link to="/demo/app/demo">
          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
            <Play className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">Guided Demo</p>
            <p className="text-xs text-muted-foreground">7-step lifecycle walkthrough</p>
          </Card>
        </Link>
        <Link to="/demo/app/audit">
          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
            <Activity className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">Audit Trail</p>
            <p className="text-xs text-muted-foreground">Immutable activity log</p>
          </Card>
        </Link>
        <Link to="/verify">
          <Card className="p-4 hover:bg-muted/50 transition-colors cursor-pointer">
            <ShieldCheck className="h-5 w-5 text-primary mb-2" />
            <p className="text-sm font-medium">Public Verification</p>
            <p className="text-xs text-muted-foreground">Verify record integrity</p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
