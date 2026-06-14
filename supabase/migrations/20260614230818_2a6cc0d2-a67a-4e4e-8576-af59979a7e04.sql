CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone TEXT CHECK (phone IS NULL OR char_length(phone) <= 40),
  property_address TEXT CHECK (property_address IS NULL OR char_length(property_address) <= 300),
  property_type TEXT CHECK (property_type IS NULL OR property_type IN ('Residential', 'Commercial', 'Land', 'Not sure')),
  interest TEXT CHECK (interest IS NULL OR char_length(interest) <= 100),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 2000),
  source TEXT NOT NULL CHECK (source IN ('valuation', 'contact'))
);
GRANT ALL ON public.leads TO service_role;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
CREATE INDEX leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX leads_source_idx ON public.leads (source);