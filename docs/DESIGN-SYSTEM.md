# Design System

## Principles
1. Restraint. Photography and type carry the site; motion supports them.
2. Each project gets its own palette; the shell stays calm.
3. Mobile first.

## Colour tokens
Tokens are CSS variables: `--bg`, `--ink`, `--acc`, `--mut`.

| Scope | `--bg` | `--ink` | `--acc` | `--mut` |
|---|---|---|---|---|
| Shell / Home | #f6f3ee | #17110f | #a3141b | #6b625c |
| Editorial | #f4f1ec | #17110f | #a3141b | #6b625c |
| Layout (DASTAK) | #6e0f1a | #f5ead3 | #f2b01e | #d9a8a0 |
| Lumea | #2d150e | #f1e6dc | #d3b196 | #a68f80 |
| City of Desserts | #1f0e09 | #d8c5b8 | #9aa77a | #8d7b6e |

Home also has a dark variant under `prefers-color-scheme: dark`.

## Typography
- Display: Bodoni Moda (stand-in for Le Jour Serif), uppercase, tight leading (about 0.9), negative tracking.
- Script: Pinyon Script (stand-in for Burgues Script), project titles and the "next project" link only.
- Body: Inter, uppercase, small, wide tracking.
- About paragraph: Inter, sentence case, `clamp(16px, 1.55vw, 21px)`, line height 1.6. Heading left, paragraph right, aligned to the bottom edge.

## Layout
- 22px side padding (14px on small phones).
- Gallery: 12-column grid; every third image spans full width, others span 6; single column under 700px.
- Index rows: number, title, preview strip; the strip width and height are CONFIG values.

## Images
- Source: PDF slides now; original exports later.
- WebP or AVIF, 1000px wide minimum for gallery, 1500px for hero.
- Every image needs descriptive alt text.
- Do not stretch or crop mockups unnaturally; use `object-fit: cover` only in strips.

## Signature motif
Vertical colour bars (from her intro and thank-you slides): used above About, and as the page transition.
