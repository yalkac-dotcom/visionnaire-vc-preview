ALTER POLICY "Anyone can submit contact form"
ON public.contact_submissions
TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) > 0
  AND char_length(email) <= 254
  AND email ~ '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
  AND char_length(btrim(subject)) > 0
  AND char_length(btrim(message)) > 0
  AND char_length(message) <= 500
  AND locale IS NOT NULL
  AND locale IN ('de', 'en', 'it', 'es', 'ja', 'zh', 'ar')
);