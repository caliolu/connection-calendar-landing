CREATE TABLE public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  excited_feature TEXT NOT NULL CHECK (
    excited_feature IN ('voice_notes','ai_reminders','relationship_insights','never_forget_dates')
  ),
  referral_source TEXT,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert" ON public.waitlist FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Anyone can count" ON public.waitlist FOR SELECT TO anon USING (true);
