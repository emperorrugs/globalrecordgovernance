/**
 * GRGF™ Audit Service
 * Append-only audit trail for all governance actions.
 * Every entry carries its own integrity hash.
 */

import { supabase } from '@/integrations/supabase/client';
import { generateHash } from '@/core/crypto';

export interface AuditLogParams {
  tenantId?: string;
  actionType: string;
  entityType: string;
  entityId?: string;
  beforeJson?: Record<string, unknown>;
  afterJson?: Record<string, unknown>;
}

/** Create an integrity-hashed audit log entry */
export async function createAuditLog(params: AuditLogParams): Promise<void> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const payload = JSON.stringify({
    user_id: user.id,
    action: params.actionType,
    entity: params.entityType,
    entity_id: params.entityId,
    timestamp: new Date().toISOString(),
  });
  const integrityHash = await generateHash(payload);

  await (supabase.from('audit_logs').insert as Function)({
    tenant_id: params.tenantId,
    user_id: user.id,
    action_type: params.actionType,
    entity_type: params.entityType,
    entity_id: params.entityId,
    before_json: params.beforeJson,
    after_json: params.afterJson,
    integrity_hash: integrityHash,
  });
}
