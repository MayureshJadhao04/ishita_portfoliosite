# PRD — Ishita Yadav Portfolio 2026

Version: final draft · Date: 5 Oct 2026 · Owner: Ishita Yadav · Builder: Mayuresh

## 1. Goal
A portfolio site that presents Ishita as a communication designer in fashion (editorial, layout, branding), and gives brands, magazines and agencies a clear way to contact her.

## 2. Audience
1. Recruiters and agency creative leads, mostly on phones, with under a minute to spare.
2. Brands and clients looking for editorial or branding work.
3. Faculty and peers.

## 3. Success criteria
- Loads fast on a mid-range phone and a normal laptop (budgets in `STACK.md`).
- A visitor can see all four projects and find her contact details within two clicks.
- Looks like the PDF, not like a template.
- Ishita approves the final build.

## 4. Scope
**In**
- Home: halftone hero, simple About section, project index with the hover preview, footer.
- Four project pages: Editorial Writing, Layout Design (DASTAK), Branding (Lumea), Branding & Visual Identity (City of Desserts).
- Bar-wipe page transition, per-project palettes, image galleries using the PDF slides.
- Mobile-first layout, reduced-motion support, deployment on a custom domain.

**Out (for now)**
- CMS, blog, e-commerce, user accounts.
- WebGL effects (optional later layer, see `STACK.md`).
- Marquee text band, custom cursor and preloader (removed on purpose).

## 5. Functional requirements
| ID | Requirement |
|---|---|
| F1 | Home shows the hero, About, index of four projects, footer |
| F2 | Index hover shows an image preview, cycles images, dims other rows (configurable) |
| F3 | Each project page has a title, short text, and a gallery of that project's slides |
| F4 | Page changes use the bar-wipe transition and URL hash routing |
| F5 | Each project page has a link to the next project |
| F6 | Contact details visible in the footer |
| F7 | Touch devices show the index previews without hover |
| F8 | Resume PDF can be opened or downloaded from the About section and the footer |

## 6. Non-functional requirements
- Works without WebGL. Respects `prefers-reduced-motion`.
- Keyboard-navigable links, meaningful alt text on all images.
- Total page weight and Lighthouse targets in `STACK.md`.

## 7. Known risks
| Risk | Impact | Mitigation |
|---|---|---|
| Original images | Resolved: the original photos are available | Compress to WebP or AVIF; keep originals out of the repo |
| Font licences | Ishita says all three fonts are free; not yet verified for web use | Get the font files and licence text; confirm web embedding and commercial use; otherwise keep the stand-ins |
| Editorial text only exists inside spreads | Unreadable on web | Get the source text; show spreads as visuals |
| No contact details yet | Site cannot convert | Collect email, Instagram, LinkedIn before launch |
| Too many effects | Slow, busy site | Keep to the motions in `MOTION-SPEC.md` |

## 8. Open questions
1. Final copy for each project description?
2. Is a portrait photo wanted in About?
3. Which email and social links go live?
4. Domain name?
