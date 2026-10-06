# AGENTS.md — Rules for AI coding agents

## Project
Portfolio site for Ishita Yadav. Read `PRD.md`, `DESIGN-SYSTEM.md` and `MOTION-SPEC.md` before changing anything.

## Working style
- Use one agent and one task at a time. Do not run parallel agents on this codebase.
- Make small commits. Explain each change in one or two lines.
- Never add a dependency without asking.

## Stack
Astro, TypeScript, Tailwind, GSAP, optional Lenis. Details in `STACK.md`.

## Design rules
- Use the CSS variable tokens from `DESIGN-SYSTEM.md`; do not hard-code colours.
- No component libraries (no shadcn or MUI look).
- Maximum three signature motions. Do not add effects that are not in `MOTION-SPEC.md`.
- Do not add: preloader, marquee, custom cursor, scroll-filled text, WebGL (until the site is live).

## Motion rules
- Respect `prefers-reduced-motion` on every animation.
- Animate `transform`, `opacity` and `clip-path` only. No animated `filter: blur` or layout properties.
- Hover behaviour only when `(hover: hover)` matches.

## Fonts
- Use the Le Jour Serif, Burgues Script or Helvetica World from `STACK.md`.

## Reference
- `reference/final-draft.reference.html` is the approved look and behaviour. It is read-only, has placeholder images, and must be rebuilt in Astro, not copied.

## Image order
- Gallery order is the order of entries in `src/data/images.json` (filename order, numeric-aware). Never reorder in code.
- The first image of each project is its cover and the index hover preview.

## Images
- Every image: width and height set, lazy-loaded below the fold, descriptive alt text, AVIF or WebP.
- Never commit originals larger than 5 MB.

## Definition of done
- Works at 360px width and on desktop.
- Lighthouse mobile targets in `STACK.md` met.
- Tested with reduced motion on.
- No console errors.
