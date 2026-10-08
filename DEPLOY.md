# Go live (free): GitHub Pages
1. GitHub > New repository (e.g. `zunex-solutions`), then upload all files from this folder (keep `.github/`).
2. Repo > Settings > Secrets and variables > Actions > New secret: add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (values in .env.example).
3. Repo > Settings > Pages > Source: GitHub Actions. Push to `main` and wait for the Deploy action.
4. Site URL: https://YOUR-USERNAME.github.io/zunex-solutions/
5. Supabase dashboard > Authentication > Users > Add user (your admin email/password); Sign In/Providers > turn off "Allow new users to sign up".
6. Custom domain later: buy one, set it in Pages settings, and remove the VITE_BASE line in deploy.yml (use `/`).
