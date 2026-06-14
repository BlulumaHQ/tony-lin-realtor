CREATE POLICY "Trusted server manages leads"
ON public.leads
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);