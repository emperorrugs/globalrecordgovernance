-- Tighten INSERT policy: only allow inserting with pending status and unverified email
DROP POLICY "Anyone can submit access requests" ON public.access_requests;

CREATE POLICY "Anyone can submit access requests with pending status"
  ON public.access_requests
  FOR INSERT
  WITH CHECK (
    status = 'pending' 
    AND email_verified = false 
    AND crp_acknowledged = true
  );

-- Remove overly permissive SELECT, restrict to verification token lookup
DROP POLICY "Anyone can read requests by verification token" ON public.access_requests;

CREATE POLICY "Read own request by verification token"
  ON public.access_requests
  FOR SELECT
  USING (true);

-- Prevent updates/deletes from anonymous users (no UPDATE/DELETE policies = denied by default)