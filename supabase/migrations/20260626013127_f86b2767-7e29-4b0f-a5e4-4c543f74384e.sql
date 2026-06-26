
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  plan TEXT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  restaurant_name TEXT NOT NULL,
  restaurant_type TEXT,
  city TEXT,
  website TEXT,
  dish_count INT,
  preferred_contact TEXT,
  hear_about TEXT,
  message TEXT,
  user_agent TEXT,
  CONSTRAINT leads_full_name_len CHECK (char_length(full_name) BETWEEN 1 AND 120),
  CONSTRAINT leads_email_len CHECK (char_length(email) BETWEEN 3 AND 254),
  CONSTRAINT leads_restaurant_name_len CHECK (char_length(restaurant_name) BETWEEN 1 AND 160),
  CONSTRAINT leads_message_len CHECK (message IS NULL OR char_length(message) <= 2000)
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a lead from the public contact form
CREATE POLICY "Anyone can submit a lead"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies: only service_role (backend dashboard) can read.
