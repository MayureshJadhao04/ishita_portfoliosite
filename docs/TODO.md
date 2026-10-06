# TODO: Ishita portfolio

## Order matters
Scaffold Astro first, into an empty folder, then add the docs. Astro's installer may offer to wipe a folder that already has files.

## Phase 0: project setup (today, about 1 hour)
- [ ] Check tools: `node -v` (LTS) and `git --version`. Install what is missing.
- [ ] `npm create astro@latest ishita-portfolio` (minimal template, TypeScript strict, install dependencies)
- [ ] `cd ishita-portfolio`, then `npx astro add tailwind`, `npm install gsap lenis`, `npm install -D sharp`
- [ ] `git init`, create a GitHub repo `ishita-portfolio`, push.
- [ ] Create folders: `docs/`, `reference/`, `scripts/`, `public/resume/`, `.agents/rules/`, `.agents/workflows/`
- [ ] Copy the docs into `docs/` and `AGENTS.md` into the project root.
- [ ] Copy `final-draft.reference.html` into `reference/` (images stripped, so the agent can read it cheaply). Keep the full `Ishita_Yadav_final_draft.html` outside the project to open in a browser.
- [ ] Copy `prepare-images.mjs` into `scripts/` and add `"images": "node scripts/prepare-images.mjs"` to `package.json` scripts.
- [ ] Copy `design-director.md` (rule) and `design-review.md` (workflow) into `.agents/`, plus `import-photos.md` into `.agents/workflows/`. Restart Antigravity and check Customizations.
- [ ] Park the conflicting skills once (PowerShell command in `DESIGN-DIRECTOR-SETUP.md`).
- [ ] Open the folder in Antigravity and run `npm run dev` to confirm the starter page loads.

## Phase 1: assets
- [ ] Photos in `Ishita-originals/` (next to the project, not inside it): subfolders `hero`, `editorial`, `layout`, `lumea`, `desserts`, `about`. Exactly one photo in `hero`. Number files in the order you want them (`01`, `02`...). `01` is each project's cover.
- [ ] Run `npm run images -- ../Ishita-originals`, then `/import-photos` in Antigravity to fill alt text and the image map.
- [ ] Résumé saved as `public/resume/Ishita-Yadav-Resume.pdf` (under 1 MB, selectable text).
- [ ] Fonts: stand-ins (Bodoni Moda, Pinyon Script, Inter). Decided.
- [ ] Contact details, project descriptions and domain: can arrive later; use placeholders until Day 3.

## Phase 2: Day 1 (home)
- [ ] Prompt the agent: "Read AGENTS.md and docs/. Rebuild the home page from reference/final-draft.reference.html in Astro with static content only. No animation yet."
- [ ] Colour tokens, fonts, About section, real photos through Astro's image tools.

## Phase 3: Day 2 (motion and pages)
- [ ] Hero scan reveal and letter animation
- [ ] Index hover preview using the CONFIG values from the draft
- [ ] Bar-wipe transition
- [ ] Four project pages with galleries
- [ ] Test on a real phone
- [ ] Run `/design-review` on the home page and one project page

## Phase 4: Day 3 (ship)
- [ ] Footer contact and résumé link in About and footer
- [ ] Fix review findings you agree with
- [ ] Mobile and performance pass (targets in `STACK.md`)
- [ ] Run `/design-review` again
- [ ] Connect the repo to Vercel or Cloudflare Pages, add the domain
- [ ] Ishita reviews the preview link and approves

## Cut first if time runs short
Gallery tilt, parallax, smooth scroll.
