/**
 * Access Request Service Tests
 */
import { describe, it, expect } from 'vitest';
import { validateAccessRequest, type AccessRequestInput } from '@/services/access';

const validInput: AccessRequestInput = {
  fullName: 'Dr. Jane Doe',
  organization: 'Ministry of Finance',
  titleRole: 'Chief Information Officer',
  email: 'jane.doe@finance.gov',
  country: 'Canada',
  requestedLevel: 'Level 2',
  purpose: 'Pilot assessment',
};

describe('Access Request Validation', () => {
  it('accepts valid input', () => {
    const result = validateAccessRequest(validInput);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('rejects empty full name', () => {
    const result = validateAccessRequest({ ...validInput, fullName: '' });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Full name is required');
  });

  it('rejects empty organization', () => {
    const result = validateAccessRequest({ ...validInput, organization: '' });
    expect(result.valid).toBe(false);
  });

  it('rejects invalid email format', () => {
    const result = validateAccessRequest({ ...validInput, email: 'not-an-email' });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Invalid email format');
  });

  it('rejects empty country', () => {
    const result = validateAccessRequest({ ...validInput, country: '' });
    expect(result.valid).toBe(false);
  });

  it('rejects empty purpose', () => {
    const result = validateAccessRequest({ ...validInput, purpose: '' });
    expect(result.valid).toBe(false);
  });

  it('rejects empty requested level', () => {
    const result = validateAccessRequest({ ...validInput, requestedLevel: '' });
    expect(result.valid).toBe(false);
  });

  it('collects multiple errors', () => {
    const result = validateAccessRequest({ ...validInput, fullName: '', email: '', country: '' });
    expect(result.errors.length).toBeGreaterThanOrEqual(3);
  });
});
