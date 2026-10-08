# Zunex Solutions
1. `npm install`  2. copy `.env.example` to `.env`, add Supabase URL + anon key  3. run `supabase/schema.sql` in the Supabase SQL editor  4. `npm run dev`
Deploy: push to GitHub, import in Vercel, add the two VITE_ env vars, then add your domain under Project Settings > Domains.
Admin is at /admin (create the admin user in Supabase Auth; disable public sign-ups). Replace zunexsolutions.com in index.html and sitemap.xml with your real domain.
