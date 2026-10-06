---
description: Review an existing page or component. Audit first, then ask which fixes to apply.
---
# /design-review

1. Ask which page or component to review if the user has not said.
2. Read docs/DESIGN-SYSTEM.md and docs/MOTION-SPEC.md if they exist. Anything they chose on purpose (palettes, script and display fonts, uppercase small text, motion limits) is not a defect. If a finding contradicts them, list it separately under "Conflicts with the design system" and let the user decide.
3. If it is a whole existing codebase and the user wants it redesigned, run redesign-existing-projects in audit mode only. No edits.
4. Run impeccable critique (hierarchy, clarity, emotional impact).
5. Run impeccable audit (accessibility, performance, responsive).
6. Check against web-design-guidelines. If it cannot fetch its rules, say so and skip it.
7. Merge all findings into one list ranked P0, P1, P2, each with a rough effort (small, medium, large). Remove duplicates.
8. Ask which items to apply. Do not change anything before the answer.
9. Apply the approved items, then run impeccable polish.
10. Report what changed and what was left.
