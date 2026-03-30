/**
 * GRGF Dashboard Service
 * Centralized data fetching for dashboard and reporting views.
 * Pages consume typed models — no Supabase calls in UI components.
 */

import { supabase } from '@/integrations/supabase/client';
import type { RecordStatus } from '@/lib/types';

export interface DashboardStats {
  total: number;
  sealed: number;
  pending: number;
  verifications: number;
  disputes: number;
  byStatus: Record<string, number>;
}

export interface RecentRecord {
  id: string;
  title: string;
  status: RecordStatus;
  created_at: string;
  sector: { name: string } | null;
}

export interface DashboardData {
  stats: DashboardStats;
  recentRecords: RecentRecord[];
}

export interface ReportStats {
  bySector: Array<{ name: string; count: number }>;
  byStatus: Record<string, number>;
  total: number;
  sealed: number;
  disputed: number;
  verifications: number;
}

/** Fetch all dashboard summary data in a single parallel batch */
export async function fetchDashboardData(): Promise<DashboardData> {
  const [recordsRes, verificationsRes, disputesRes, recentRes] = await Promise.all([
    supabase.from('records').select('status', { count: 'exact' }),
    supabase.from('verification_logs').select('id', { count: 'exact' }),
    supabase.from('disputes').select('id', { count: 'exact' }).eq('status', 'open'),
    supabase.from('records').select('id, title, status, created_at, sectors(name)').order('created_at', { ascending: false }).limit(8),
  ]);

  const records = (recordsRes.data || []) as unknown as Array<{ status: string }>;
  const byStatus: Record<string, number> = {};
  records.forEach(r => { byStatus[r.status] = (byStatus[r.status] || 0) + 1; });

  const stats: DashboardStats = {
    total: recordsRes.count || 0,
    sealed: byStatus['sealed'] || 0,
    pending: (byStatus['submitted'] || 0) + (byStatus['under_review'] || 0),
    verifications: verificationsRes.count || 0,
    disputes: disputesRes.count || 0,
    byStatus,
  };

  const recentRecords: RecentRecord[] = (recentRes.data || []).map((r: Record<string, unknown>) => ({
    id: r.id as string,
    title: r.title as string,
    status: r.status as RecordStatus,
    created_at: r.created_at as string,
    sector: r.sectors as { name: string } | null,
  }));

  return { stats, recentRecords };
}

/** Fetch report-level analytics including sector breakdown */
export async function fetchReportStats(): Promise<ReportStats> {
  const [recRes, verRes] = await Promise.all([
    supabase.from('records').select('status, sectors(name)'),
    supabase.from('verification_logs').select('id', { count: 'exact' }),
  ]);

  const records = (recRes.data || []) as unknown as Array<{ status: string; sectors: { name: string } | null }>;
  const byStatus: Record<string, number> = {};
  const sectorMap: Record<string, number> = {};

  records.forEach(r => {
    byStatus[r.status] = (byStatus[r.status] || 0) + 1;
    const sn = r.sectors?.name || 'Unknown';
    sectorMap[sn] = (sectorMap[sn] || 0) + 1;
  });

  const bySector = Object.entries(sectorMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return {
    bySector,
    byStatus,
    total: records.length,
    sealed: byStatus['sealed'] || 0,
    disputed: byStatus['disputed'] || 0,
    verifications: verRes.count || 0,
  };
}
