# STACK — Technology choices

## Prototype (current)
Plain HTML, CSS and JavaScript in one file. No framework, no build, no libraries. Fonts from Google Fonts.

## Production stack
| Layer | Choice | Why |
|---|---|---|
| Framework | Astro + TypeScript | Content-heavy site, ships little JavaScript, built-in view transitions |
| Styling | Tailwind CSS with CSS variables for palettes | Fast to build, per-project themes via variables |
| Animation | GSAP (core, ScrollTrigger, SplitText) | Free to use including plugins; standard for this type of site |
| Smooth scroll | Lenis (optional) | Adds feel; drop it if it causes problems |
| Page transition | Astro view transitions + the bar-wipe overlay | Keeps the signature motion |
| Images | Astro image tools with Sharp, AVIF and WebP | Image-heavy site, so size matters most |
| Fonts | Self-hosted (Fontsource or licensed files) | No third-party request, controlled licensing |
| CMS | None for launch; Sanity later if she wants to edit | Saves time |
| Forms | Formspree or Resend, only if a contact form is added | Avoids writing a backend |
| Analytics | Plausible or none | Light, no cookie banner |
| Hosting | Vercel or Cloudflare Pages, custom domain | Free tier, simple deploys |
| Tooling | Node LTS, pnpm or npm, Prettier, ESLint | Standard |
| AI-assisted dev | Antigravity (Editor view, one agent at a time) | See `AGENTS.md` |

## Performance budgets
- Home page transfer: under 1.5 MB before scrolling.
- Largest image: under 250 KB; use responsive sizes.
- Lighthouse mobile: Performance 85+, Accessibility 95+, SEO 95+.
- No layout shift: set width and height on every image.

## WebGL policy
Not required. If added, it is a progressive enhancement:
1. Feature-detect `webgl2` and skip when missing.
2. Skip when `prefers-reduced-motion` is set or the device looks weak.
3. Handle `webglcontextlost` by restoring plain images.
Candidates: hover distortion on index images, a liquid page transition.

## Reference repos (study, rebuild, check licences)
- blenkcode/codrops-demo (async page transitions with GSAP and Vite)
- codrops/PageTransitions, codrops/HoverEffectIdeas, codrops/ScrollBasedLayoutAnimations
- GSAP and Lenis official repos

## Fonts
| Role | Design font | Stand-in |
|---|---|---|
| Display | Le Jour Serif | Bodoni Moda |
| Script | Burgues Script | Pinyon Script |
| Body | Helvetica World | Inter |
Ishita says all three fonts are free. "Free" often means personal use only, and many licences forbid web embedding or converting the file. Before launch, get the download page and licence text for each font and check web (@font-face) use and use in a portfolio that promotes her work. If any font fails, keep its stand-in. The stand-ins are open-licence Google Fonts.
