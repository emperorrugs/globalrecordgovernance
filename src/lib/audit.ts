import { supabase } from '@/integrations/supabase/client';
import { sha256 } from './hash';

export async function createAuditLog(params: {
  tenantId?: string;
  actionType: string;
  entityType: string;
  entityId?: string;
  beforeJson?: Record<string, unknown>;
  afterJson?: Record<string, unknown>;
}) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const payload = JSON.stringify({
    user_id: user.id,
    action: params.actionType,
    entity: params.entityType,
    entity_id: params.entityId,
    timestamp: new Date().toISOString(),
  });
  const integrityHash = await sha256(payload);

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
