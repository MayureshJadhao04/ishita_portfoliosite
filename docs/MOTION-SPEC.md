# Motion Spec

Rule: a maximum of three signature motions; everything else stays subtle.

## Signature motions
1. **Hero scan reveal**: the halftone photo resolves out of scanlines (1.8s) while PORT / FOLIO rises letter by letter.
2. **Bar-wipe transition**: 16 bars in the destination project's colours sweep up (600ms, staggered), the page swaps, bars sweep away.
3. **Index hover preview**: see below.

## Supporting motions
| Motion | Trigger | Notes |
|---|---|---|
| Hero parallax | Scroll | Image moves at about 0.22 of scroll speed, capped |
| Stripe bars rise | Scroll into view | Staggered |
| Project title wipe | Page enter | Left-to-right clip reveal |
| Gallery curtain reveal | Scroll into view | Clip from the top |
| Gallery tilt | Mouse move (hover devices) | Max 4 degrees |
| Next-project link | Hover | Slides left 18px |

## Index hover (customisable)
Edit `CONFIG.hover` at the top of the script.

| Key | Default | What it does |
|---|---|---|
| `mode` | `'strip'` | `'strip'` image strip in the row, `'float'` image follows the cursor, `'both'` |
| `images` | 3 | Images per project in the preview (first N of the project's gallery) |
| `cycleMs` | 1000 | Time between images while hovering |
| `label` | `'View project →'` | Caption on the strip |
| `stripWidth` | `'38vw'` | Strip width |
| `stripHeight` | `'clamp(70px,11vw,150px)'` | Strip height |
| `dimOthers` | true | Dim the other rows |
| `dimOpacity` | 0.3 | Opacity of dimmed rows |
| `titleShift` | 22 | Pixels the title slides on hover |
| `flood` | false | Page background takes the hovered project's palette |
| `floatWidth` | `'min(30vw,380px)'` | Floating preview width |
| `floatLag` | 0.12 | Follow smoothing (lower is slower) |
| `floatTilt` | 0.08 | Tilt from cursor speed |
| `floatOffset` | `[30,-80]` | Offset from the cursor in pixels |

To choose which images appear for one project, add `hover:['la1','la3','la2']` to that project's entry in the `P` object.

## Fallbacks
- `prefers-reduced-motion`: all animations and transitions off, content visible, no cycling.
- Touch devices: strips always visible, no hover behaviour.
- Without JavaScript: not supported in the prototype; the Astro build should render content server-side.

## Removed on purpose
Preloader, marquee band, custom cursor and invert circle, scroll-filled About text, portrait placeholder, skill lists.
