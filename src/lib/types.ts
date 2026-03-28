export type AppRole = 'super_admin' | 'federation_regulator' | 'tenant_admin' | 'approver' | 'records_officer' | 'auditor' | 'reviewer' | 'public_verifier' | 'observer';

export type RecordStatus = 'draft' | 'submitted' | 'under_review' | 'approved' | 'sealed' | 'disputed' | 'superseded' | 'revoked' | 'archived';

export type ConfidentialityLevel = 'public' | 'internal' | 'confidential' | 'restricted' | 'top_secret';

export type RetentionClass = 'temporary' | 'short_term' | 'medium_term' | 'long_term' | 'permanent';

export interface Organization {
  id: string;
  name: string;
  slug: string;
  description?: string;
  country?: string;
  org_type: string;
  logo_url?: string;
  is_active: boolean;
}

export interface Profile {
  id: string;
  full_name?: string;
  avatar_url?: string;
  organization_id?: string;
  job_title?: string;
  timezone?: string;
  is_active: boolean;
}

export interface GovRecord {
  id: string;
  tenant_id: string;
  jurisdiction_id?: string;
  sector_id: string;
  record_type_id: string;
  title: string;
  description?: string;
  event_type?: string;
  actor_ref?: string;
  subject_ref?: string;
  authority_context_id?: string;
  occurred_at?: string;
  recorded_at: string;
  timezone: string;
  confidentiality_level: ConfidentialityLevel;
  retention_class: RetentionClass;
  status: RecordStatus;
  current_hash?: string;
  previous_hash?: string;
  manifest_json?: Record<string, unknown>;
  verification_token?: string;
  public_verifiable: boolean;
  metadata?: Record<string, unknown>;
  created_by: string;
  updated_by?: string;
  sealed_at?: string;
  archived_at?: string;
  created_at: string;
  updated_at: string;
  // Joined fields
  sector?: { name: string; code: string };
  record_type?: { name: string; code: string };
  jurisdiction?: { name: string; code: string };
  organization?: { name: string };
  creator?: { full_name: string };
}

export interface AuditLogEntry {
  id: string;
  tenant_id?: string;
  user_id?: string;
  action_type: string;
  entity_type: string;
  entity_id?: string;
  before_json?: Record<string, unknown>;
  after_json?: Record<string, unknown>;
  occurred_at: string;
  ip_address?: string;
  user_agent?: string;
  integrity_hash?: string;
  user?: { full_name: string };
}

export interface Dispute {
  id: string;
  record_id: string;
  raised_by: string;
  reason: string;
  status: string;
  resolution?: string;
  resolved_by?: string;
  raised_at: string;
  resolved_at?: string;
}

export const STATUS_COLORS: Record<RecordStatus, string> = {
  draft: 'bg-gray-100 text-gray-700',
  submitted: 'bg-blue-100 text-blue-700',
  under_review: 'bg-yellow-100 text-yellow-700',
  approved: 'bg-green-100 text-green-700',
  sealed: 'bg-emerald-100 text-emerald-800',
  disputed: 'bg-red-100 text-red-700',
  superseded: 'bg-purple-100 text-purple-700',
  revoked: 'bg-red-200 text-red-800',
  archived: 'bg-gray-200 text-gray-600',
};

export const STATUS_LABELS: Record<RecordStatus, string> = {
  draft: 'Draft',
  submitted: 'Submitted',
  under_review: 'Under Review',
  approved: 'Approved',
  sealed: 'Sealed',
  disputed: 'Disputed',
  superseded: 'Superseded',
  revoked: 'Revoked',
  archived: 'Archived',
};
