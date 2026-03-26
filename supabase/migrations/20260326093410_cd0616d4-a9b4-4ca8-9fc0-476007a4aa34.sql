-- Create access_requests table for institutional document access requests
CREATE TABLE public.access_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  organization TEXT NOT NULL,
  title_role TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  requested_level TEXT NOT NULL CHECK (requested_level IN ('Level 2', 'Level 3', 'Level 4')),
  evaluation_purpose TEXT NOT NULL,
  purpose_detail TEXT,
  jurisdiction TEXT,
  department_type TEXT,
  document_categories TEXT[],
  crp_acknowledged BOOLEAN NOT NULL DEFAULT false,
  nda_required BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'approved', 'denied', 'nda_pending')),
  reviewer_notes TEXT,
  email_verified BOOLEAN NOT NULL DEFAULT false,
  verification_token UUID DEFAULT gen_random_uuid(),
  verification_expires_at TIMESTAMP WITH TIME ZONE DEFAULT (now() + interval '48 hours'),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form submission)
CREATE POLICY "Anyone can submit access requests"
  ON public.access_requests
  FOR INSERT
  WITH CHECK (true);

-- Allow reading own request by email verification token
CREATE POLICY "Anyone can read requests by verification token"
  ON public.access_requests
  FOR SELECT
  USING (true);

-- Update trigger for timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_access_requests_updated_at
  BEFORE UPDATE ON public.access_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();