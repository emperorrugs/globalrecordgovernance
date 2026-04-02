/**
 * GRGF™ Access Request Service
 * Handles institutional document access request submission,
 * validation, and audit logging.
 */

import { supabase } from '@/integrations/supabase/client';
import { createAuditLog } from '@/services/audit/auditService';

export interface AccessRequestInput {
  fullName: string;
  organization: string;
  titleRole: string;
  email: string;
  country: string;
  requestedLevel: string;
  purpose: string;
  purposeDetail?: string;
  jurisdiction?: string;
  departmentType?: string;
  documentCategories?: string[];
}

export interface AccessRequestResult {
  success: boolean;
  error?: string;
}

/** Validate access request input */
export function validateAccessRequest(input: AccessRequestInput): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!input.fullName?.trim()) errors.push('Full name is required');
  if (!input.organization?.trim()) errors.push('Organization is required');
  if (!input.titleRole?.trim()) errors.push('Title/role is required');
  if (!input.email?.trim()) errors.push('Email is required');
  if (input.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) errors.push('Invalid email format');
  if (!input.country?.trim()) errors.push('Country is required');
  if (!input.purpose?.trim()) errors.push('Evaluation purpose is required');
  if (!input.requestedLevel) errors.push('Requested level is required');
  return { valid: errors.length === 0, errors };
}

/** Submit an institutional access request */
export async function submitAccessRequest(input: AccessRequestInput): Promise<AccessRequestResult> {
  const validation = validateAccessRequest(input);
  if (!validation.valid) {
    return { success: false, error: validation.errors.join('. ') };
  }

  const ndaRequired = input.requestedLevel === 'Level 3' || input.requestedLevel === 'Level 4';

  const { error } = await supabase.from('access_requests').insert({
    full_name: input.fullName.trim(),
    organization: input.organization.trim(),
    title_role: input.titleRole.trim(),
    email: input.email.trim().toLowerCase(),
    country: input.country.trim(),
    requested_level: input.requestedLevel,
    evaluation_purpose: input.purpose,
    purpose_detail: input.purposeDetail?.trim() || null,
    jurisdiction: input.jurisdiction?.trim() || null,
    department_type: input.departmentType || null,
    document_categories: input.documentCategories && input.documentCategories.length > 0
      ? input.documentCategories
      : null,
    crp_acknowledged: true,
    nda_required: ndaRequired,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  // Best-effort audit log (don't fail the request if audit fails)
  try {
    await createAuditLog({
      actionType: 'access_request',
      entityType: 'access_request',
      afterJson: {
        organization: input.organization,
        requested_level: input.requestedLevel,
        purpose: input.purpose,
        country: input.country,
      },
    });
  } catch {
    // Audit log is non-blocking for unauthenticated requests
  }

  return { success: true };
}
