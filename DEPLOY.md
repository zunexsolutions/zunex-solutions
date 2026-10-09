# Deploy and update (GitHub Pages, free)

Update the live site
1. Copy the project files over your local `zunex-solutions` folder (replace all, include hidden `.github`).
2. GitHub Desktop: Summary > Commit to main > Push origin.
3. GitHub > Actions: wait for the green check (2 to 4 minutes).

Add a blog post: see `content/HOW-TO-ADD-A-POST.md`.

Site address
- Automatic. The workflow reads your GitHub username and repository name.
- Repository named `<username>.github.io` -> https://<username>.github.io/
- Any other name -> https://<username>.github.io/<repository>/
- Custom domain: repo Settings > Secrets and variables > Actions > Variables > add CUSTOM_DOMAIN = yourdomain.com,
  then Settings > Pages > Custom domain.

Required once: Actions secrets VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (values in .env.example),
Pages source = GitHub Actions, and an admin user in Supabase Auth with public sign-ups turned off.
