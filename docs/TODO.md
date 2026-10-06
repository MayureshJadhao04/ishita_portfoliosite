# TODO: Ishita portfolio

## Order matters
Scaffold Astro first, into an empty folder, then add the docs. Astro's installer may offer to wipe a folder that already has files.

## Phase 0: project setup (today, about 1 hour)
- [x] Check tools: `node -v` (LTS) and `git --version`. Install what is missing.
- [x] `npm create astro@latest ishita-portfolio` (minimal template, TypeScript strict, install dependencies)
- [x] `cd ishita-portfolio`, then `npx astro add tailwind`, `npm install gsap lenis`, `npm install -D sharp`
- [x] `git init`, create a GitHub repo `ishita-portfolio`, push. → https://github.com/MayureshJadhao04/ishita_portfoliosite.git
- [x] Create folders: `docs/`, `reference/`, `scripts/`, `public/resume/`, `.agents/rules/`, `.agents/workflows/`
- [x] Copy the docs into `docs/` and `AGENTS.md` into the project root.
- [x] Copy `final-draft.reference.html` into `reference/` (images stripped, so the agent can read it cheaply).
- [x] Copy `prepare-images.mjs` into `scripts/` and add `"images"` script to `package.json`.
- [x] Copy `design-director.md` (rule) and `design-review.md` / `import-photos.md` into `.agents/`.
- [ ] Park the conflicting skills once (PowerShell command in `DESIGN-DIRECTOR-SETUP.md`).
- [x] Open the folder in Antigravity and run `npm run dev` to confirm the starter page loads.

## Phase 1: assets
- [x] Photos in `src/assets/images/`: subfolders `hero`, `editorial`, `layout`, `lumea`, `desserts`, `about`. Exactly one photo in `hero`.
- [ ] Run `npm run images -- ../Ishita-originals`, then `/import-photos` to fill alt text and the image map. *(alt text filled manually for current images)*
- [x] Résumé saved as `public/resume/Ishita-Yadav-Resume.pdf`.
- [x] Fonts: stand-ins installed and self-hosted via Fontsource (Bodoni Moda, Pinyon Script, Inter). Decided.
- [x] Contact details — ishitayadav170@gmail.com · +91 89379 99255 · LinkedIn (added to footer)
- [ ] Project descriptions — optional, images tell the story; add short captions later if Ishita wants.
- [ ] Domain: to arrive later.

## Phase 2: Day 1 (home) ✅ DONE
- [x] Viewport meta set to `width=device-width, initial-scale=1, viewport-fit=cover`
- [x] Colour tokens `--bg`, `--ink`, `--acc`, `--mut` in `global.css` (shell + per-project variants + dark mode override)
- [x] Self-hosted fonts imported in `Layout.astro`
- [x] Hero section with `hero-1.jpg` via Astro `<Image />`, positioned to show halftone boat only (white PPT area clipped)
- [x] 64-bar colour stripe divider
- [x] About section: heading, discipline tag, bio paragraph, résumé link
- [x] Project index: four rows (01 Editorial Writing, 02 Layout Design, 03 Branding Lumea, 04 Visual Identity) with cover image strips
- [x] Footer with résumé download link and contact placeholders
- [x] All images use Astro `<Image />` with `width`, `height`, `alt` from `images.json`
- [x] Build passes, committed and pushed to GitHub

## Phase 3: Day 2 (motion and pages)
- [ ] Hero scan reveal (`clip-path` + `scale`) and letter animation (`translateY`)
- [ ] Index hover preview cycling images, dim other rows (uses `CONFIG` values from draft)
- [ ] Bar-wipe page transition (overlay of coloured bars, GSAP or Web Animations API)
- [ ] Four project pages: title, description, gallery grid with per-project palette tokens
- [ ] Test on a real phone
- [ ] Run `/design-review` on the home page and one project page

## Phase 4: Day 3 (ship)
- [ ] Replace contact placeholders with real email, Instagram, LinkedIn
- [ ] Fix review findings you agree with
- [ ] Mobile and performance pass (targets in `STACK.md`)
- [ ] Run `/design-review` again
- [ ] Connect the repo to Vercel or Cloudflare Pages, add the domain
- [ ] Ishita reviews the preview link and approves

## Cut first if time runs short
Gallery tilt, parallax, smooth scroll.

