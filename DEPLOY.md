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

Keep the source private (optional, free)
Host on Cloudflare Pages instead of GitHub Pages, then make the GitHub repository private.
Cloudflare build command: npm run build   Output directory: dist
Environment variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_SITE_URL (your live address), NODE_VERSION=20
Then delete .github/workflows/deploy.yml.

Edit content
- Products: src/data/products.json (name, tagline, features, steps)
- Client reviews: src/data/reviews.ts (replace the samples with real reviews and delete "sample:true")
- Blog posts: content/posts (see content/HOW-TO-ADD-A-POST.md)
- Team: src/data/team.ts
