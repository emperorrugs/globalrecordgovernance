
-- Drop ALL foreign key constraints referencing auth.users
ALTER TABLE records DROP CONSTRAINT IF EXISTS records_created_by_fkey;
ALTER TABLE records DROP CONSTRAINT IF EXISTS records_updated_by_fkey;
ALTER TABLE disputes DROP CONSTRAINT IF EXISTS disputes_raised_by_fkey;
ALTER TABLE disputes DROP CONSTRAINT IF EXISTS disputes_resolved_by_fkey;
ALTER TABLE record_events DROP CONSTRAINT IF EXISTS record_events_actor_id_fkey;
ALTER TABLE record_attachments DROP CONSTRAINT IF EXISTS record_attachments_uploaded_by_fkey;
ALTER TABLE verification_receipts DROP CONSTRAINT IF EXISTS verification_receipts_issued_by_fkey;
ALTER TABLE approvals DROP CONSTRAINT IF EXISTS approvals_approver_id_fkey;
ALTER TABLE notifications DROP CONSTRAINT IF EXISTS notifications_user_id_fkey;
ALTER TABLE audit_logs DROP CONSTRAINT IF EXISTS audit_logs_user_id_fkey;

-- Add Novaris jurisdictions
INSERT INTO jurisdictions (id, name, code, level, country) VALUES
('b0000000-0000-0000-0000-000000000010', 'Republic of Novaris — Federal', 'NV-FED', 'national', 'Novaris'),
('b0000000-0000-0000-0000-000000000011', 'Novaris — Capital District', 'NV-CAP', 'subnational', 'Novaris'),
('b0000000-0000-0000-0000-000000000012', 'Novaris — Eastern Province', 'NV-EAST', 'subnational', 'Novaris')
ON CONFLICT DO NOTHING;
