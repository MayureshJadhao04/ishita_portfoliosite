# Design Director for Antigravity: setup

## What this is
Antigravity has no single "persona" switch in the IDE. The same effect is built from three parts:
- **Rule** (`.agents/rules/design-director.md`): the persona. Loads when a task looks like design work (Model Decision). It holds the routing table, the conflict rules and how to ask you questions.
- **Workflows** (`/design-director`, `/design-review`): the front door. You remember two commands, not 17 skills.
- **Your skills**: stay where they are. The rule decides which ones the agent uses.

## Install
1. Copy the `.agents` folder from this pack into the root of your project (the folder you open in Antigravity).
2. Restart Antigravity. Rules and workflows only appear after a restart.
3. Open Customizations, then Rules. Check `design-director` shows activation mode **Model Decision**. If it shows something else, change it there.
4. Check Customizations, then Workflows, lists `design-director` and `design-review`.
5. Optional but recommended: park the skills you will not use by default (below).

## Use
- Start work: type `/design-director` and describe the task.
- Review something that exists: type `/design-review`.
- For quick prompts without a workflow, the rule still loads on design tasks. If the agent ignores it, type `@design-director` in the chat to force it.

## Test it (3 prompts)
1. "Design a landing page for a candle brand." It should read your docs, ask at most one direction question, and not mention caveman or gpt-taste.
2. "Make the hero more minimal." It should use the direction already chosen, not ask again.
3. "/design-review the footer." It should list issues first and ask before editing.

## Skills map
| Skill | Role | Mode |
|---|---|---|
| design-taste-frontend | Base taste, three dials, GSAP skeleton | Default |
| web-design-guidelines | UI code checks | Default (verification) |
| impeccable | critique, audit, polish and more | Finish |
| high-end-visual-design | Calm premium direction | Ask (one direction only) |
| minimalist-ui | Editorial minimal direction | Ask (one direction only) |
| industrial-brutalist-ui | Brutalist direction (beta) | Ask (one direction only) |
| redesign-existing-projects | Audit and fix an existing UI | Ask, existing code only |
| brandkit | Brand identity work | Ask, brand tasks only |
| image-to-code, imagegen-frontend-web, imagegen-frontend-mobile | Image-first pipeline | Ask, never default |
| gpt-taste | Stricter variant of design-taste-frontend | Park |
| stitch-design-taste | Google Stitch / DESIGN.md | Park unless you use Stitch |
| find-skills | Discovers and installs skills from skills.sh | Park |
| caveman, caveman-commit, caveman-review | Terse replies, commits, reviews | Keep (not design) |
| caveman-compress, caveman-help, caveman-stats, cavecrew | Compression, help card, Claude Code stats, Claude Code subagent guide | Park |

I identified these from public descriptions of the taste-skill pack, impeccable, caveman and Vercel's agent-skills repo (web-design-guidelines and find-skills are Vercel's). I did not read your local copies.

## Park skills (PowerShell)
Parking means moving a skill folder out of the skills directory so the agent never sees it. This cuts mis-triggers more reliably than any rule.

```powershell
$s = "$env:USERPROFILE\.gemini\config\skills"
$p = "$env:USERPROFILE\.gemini\config\skills-parked"
New-Item -ItemType Directory -Force $p | Out-Null
"gpt-taste","stitch-design-taste","image-to-code","imagegen-frontend-web","imagegen-frontend-mobile","find-skills","cavecrew","caveman-compress","caveman-help","caveman-stats" | ForEach-Object { Move-Item "$s\$_" $p }
```

Bring one back when needed:

```powershell
Move-Item "$env:USERPROFILE\.gemini\config\skills-parked\image-to-code" "$env:USERPROFILE\.gemini\config\skills"
```

Restart Antigravity after moving skills.

## Limits (honest)
- This is instructions, not enforcement. A model can still ignore a rule. Parking is the hard fix.
- I have not run this in your Antigravity. Activation mode names and folder names can differ by version; use the Customizations panel if a file is not picked up.
- A real named agent (`agent.md` with frontmatter) is documented for the Antigravity CLI, not the IDE. If you use the CLI, this rule can be turned into one.
- The taste-skill default is marked v2 experimental and industrial-brutalist-ui is beta. Expect changes when you update them.
- Impeccable can write its own PRODUCT.md and DESIGN.md. If you already have PRD.md and DESIGN-SYSTEM.md, keep yours as the source of truth.
