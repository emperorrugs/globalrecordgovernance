
-- =====================================================
-- RLS POLICIES
-- =====================================================

-- Reference tables: readable by all authenticated
CREATE POLICY "Public read sectors" ON public.sectors FOR SELECT TO authenticated USING (true);
CREATE POLICY "Public read jurisdictions" ON public.jurisdictions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Public read record_types" ON public.record_types FOR SELECT TO authenticated USING (true);
CREATE POLICY "Public read organizations" ON public.organizations FOR SELECT TO authenticated USING (true);

-- Profiles: users read own, admins read all in org
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.get_user_org(auth.uid()) = organization_id OR public.has_role(auth.uid(), 'super_admin'));
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated
  USING (id = auth.uid()) WITH CHECK (id = auth.uid());
CREATE POLICY "Insert own profile" ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid());

-- User Roles
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'super_admin') OR public.has_role(auth.uid(), 'tenant_admin'));
CREATE POLICY "Admins manage roles" ON public.user_roles FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'super_admin') OR public.has_role(auth.uid(), 'tenant_admin'));

-- Records: tenant-scoped access
CREATE POLICY "Users read records in their org" ON public.records FOR SELECT TO authenticated
  USING (tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin') OR public.has_role(auth.uid(), 'federation_regulator') OR public.has_role(auth.uid(), 'auditor'));
CREATE POLICY "Users create records in their org" ON public.records FOR INSERT TO authenticated
  WITH CHECK (tenant_id = public.get_user_org(auth.uid()) AND created_by = auth.uid());
CREATE POLICY "Users update own draft records" ON public.records FOR UPDATE TO authenticated
  USING (
    (created_by = auth.uid() AND status = 'draft')
    OR public.has_role(auth.uid(), 'approver')
    OR public.has_role(auth.uid(), 'tenant_admin')
    OR public.has_role(auth.uid(), 'super_admin')
  );

-- Record Events
CREATE POLICY "Read record events" ON public.record_events FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Insert record events" ON public.record_events FOR INSERT TO authenticated
  WITH CHECK (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND r.tenant_id = public.get_user_org(auth.uid())));

-- Record Attachments
CREATE POLICY "Read attachments" ON public.record_attachments FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Upload attachments" ON public.record_attachments FOR INSERT TO authenticated
  WITH CHECK (uploaded_by = auth.uid());

-- Record Hashes
CREATE POLICY "Read hashes" ON public.record_hashes FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Insert hashes" ON public.record_hashes FOR INSERT TO authenticated WITH CHECK (true);

-- Approvals
CREATE POLICY "Read approvals" ON public.approvals FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Create approvals" ON public.approvals FOR INSERT TO authenticated
  WITH CHECK (approver_id = auth.uid() AND (public.has_role(auth.uid(), 'approver') OR public.has_role(auth.uid(), 'tenant_admin') OR public.has_role(auth.uid(), 'super_admin')));

-- Verification Receipts: readable by anyone for public verification
CREATE POLICY "Read verification receipts" ON public.verification_receipts FOR SELECT USING (true);
CREATE POLICY "Insert verification receipts" ON public.verification_receipts FOR INSERT TO authenticated WITH CHECK (true);

-- Verification Logs: public insert for logging verifications
CREATE POLICY "Read verification logs" ON public.verification_logs FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'auditor') OR public.has_role(auth.uid(), 'super_admin') OR public.has_role(auth.uid(), 'tenant_admin'));
CREATE POLICY "Insert verification logs" ON public.verification_logs FOR INSERT WITH CHECK (true);

-- Audit Logs
CREATE POLICY "Auditors and admins read audit logs" ON public.audit_logs FOR SELECT TO authenticated
  USING (
    public.has_role(auth.uid(), 'auditor')
    OR public.has_role(auth.uid(), 'super_admin')
    OR public.has_role(auth.uid(), 'federation_regulator')
    OR (tenant_id = public.get_user_org(auth.uid()) AND public.has_role(auth.uid(), 'tenant_admin'))
  );
CREATE POLICY "System insert audit logs" ON public.audit_logs FOR INSERT TO authenticated WITH CHECK (true);

-- Disputes
CREATE POLICY "Read disputes" ON public.disputes FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.records r WHERE r.id = record_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Create disputes" ON public.disputes FOR INSERT TO authenticated
  WITH CHECK (raised_by = auth.uid());
CREATE POLICY "Update disputes" ON public.disputes FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'approver') OR public.has_role(auth.uid(), 'tenant_admin') OR public.has_role(auth.uid(), 'super_admin'));

-- Dispute Events
CREATE POLICY "Read dispute events" ON public.dispute_events FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.disputes d JOIN public.records r ON r.id = d.record_id WHERE d.id = dispute_id AND (r.tenant_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'))));
CREATE POLICY "Insert dispute events" ON public.dispute_events FOR INSERT TO authenticated
  WITH CHECK (actor_id = auth.uid());

-- Authority Contexts
CREATE POLICY "Read authority contexts" ON public.authority_contexts FOR SELECT TO authenticated
  USING (organization_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'));
CREATE POLICY "Admins manage authority contexts" ON public.authority_contexts FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'tenant_admin') OR public.has_role(auth.uid(), 'super_admin'));

-- Policy Templates
CREATE POLICY "Read policy templates" ON public.policy_templates FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins manage templates" ON public.policy_templates FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'super_admin'));

-- Tenant Settings
CREATE POLICY "Org admins read settings" ON public.tenant_settings FOR SELECT TO authenticated
  USING (organization_id = public.get_user_org(auth.uid()) OR public.has_role(auth.uid(), 'super_admin'));
CREATE POLICY "Org admins update settings" ON public.tenant_settings FOR UPDATE TO authenticated
  USING (organization_id = public.get_user_org(auth.uid()) AND public.has_role(auth.uid(), 'tenant_admin'));

-- Notifications
CREATE POLICY "Users read own notifications" ON public.notifications FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "Insert notifications" ON public.notifications FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Users update own notifications" ON public.notifications FOR UPDATE TO authenticated
  USING (user_id = auth.uid());

-- Public verification: allow anon to read specific record fields for verification
CREATE POLICY "Public verify records" ON public.records FOR SELECT TO anon
  USING (public_verifiable = true AND status IN ('sealed', 'disputed', 'superseded', 'revoked'));
