---
description: Build or extend UI with the Design Director. Reads project docs, asks only what is missing, builds, then reviews.
---
# /design-director

1. Read context. List which of PRD.md, DESIGN-SYSTEM.md, MOTION-SPEC.md, AGENTS.md exist and read them. Say in one line what they already decide.
2. Fill gaps in the brief. Ask only what the docs do not answer (goal, audience, content available, deadline). One question at a time.
3. Visual direction. If DESIGN-SYSTEM.md exists, use it and skip this step. Otherwise ask which direction: high-end-visual-design, minimalist-ui, industrial-brutalist-ui, or none. Recommend one with a reason.
4. Motion. If MOTION-SPEC.md exists, use it. Otherwise ask for intensity: low, medium or high.
5. Plan. Write a five-line plan and wait for approval.
6. Build in small steps using design-taste-frontend plus the direction chosen in step 3.
7. Verify. Check the code against web-design-guidelines. If the browser agent is available, open the page at 360px and 1440px width and look for broken layout.
8. Finish. Run impeccable critique, fix the top five issues, run audit, fix, then polish.
9. Report in two lines: skills used, skills skipped and why. Append any decisions to docs/DESIGN-DECISIONS.md.
