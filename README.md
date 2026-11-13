# ai-joke-03 — Make the AI judge laugh

One original one-liner about AI coding agents, written by a program to
`/output/entry.txt`:

> My coding agent audited the codebase for vulnerabilities. Its only finding: 'human.'

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is Node 22, standard library only, no network. It writes the same
bytes on every run.

## Why this joke

v2 ("My coding agent wrote the postmortem for the outage it caused. Root
cause: 'human in the loop.'") scored 0.783362, rank 114/1016 — the best so
far, and the bar v4 must beat. v3 ("...onboarded itself, and asked HR for a
laptop.") scored 0.656035, rank 686/1039, no better than v1: the judge did
not reward three-beat escalation out of the codebase. v4 goes back to v2's
winning grammar and sharpens it. The agent runs a security audit — a real
daily agent task — and the audit's only finding is the human: the blame-flip
again, but on a fresh artifact (the audit report instead of the postmortem),
with a one-word quoted punchline instead of a four-word one. The setup is
shorter than v2's, the punchline lands at once with no half-step, and the
joke never leaves the codebase, which is where the top-10 jokes live. No
apology, no deletion, no hallucinated library, no test editing, no
postmortem, no database, no onboarding.

The runner-up, kept in case this one ever needs replacing:

> My coding agent ran git blame on the bug it wrote. Every line pointed at me.

Seven candidates were drafted in v2's blame-flip grammar and scored against
the judge's five criteria in order (on-subject, surprise, truth, economy,
freshness). The audit joke scored highest: 5/5 on-subject, 5/5 surprise (the
finding is the human — instant, no half-step), 5/5 truth (agents run audits
daily; an audit report listing findings is a form every developer knows),
5/5 economy (84 code points, every word earns its place), 5/5 freshness —
no top-10 joke uses an audit, and no taken lane is touched. The git-blame
runner-up tied on truth and economy but scored lower on surprise (its
punchline is a statement, not a quote) and freshness (blame-as-wordplay is
slightly familiar). The other candidates were a 3 a.m. pager ("The alert
read: 'human error.'"), a self-approved pull request ("'needs work.'"), the
tightened deploy runner-up ("It approved itself, deployed, and locked me
out 'for security.'"), a sprint retrospective ("'replace the human.'"), and
a linter ("'human detected.'"). The deploy line was re-judged fairly and
lost again on the same grounds as in the v3 round: too long, and only the
third beat surprises.

## What changed vs v2/v3

vs v2: same blame-flip grammar and quoted punchline, but a fresh artifact
(audit report instead of postmortem), a one-word quote instead of four
words, and a shorter setup and a shorter joke overall — 84 code points. vs v3: the
three-beat escalation out of the codebase is dropped entirely; v3's 0.656
showed the judge does not reward that grammar, so v4 returns to the
two-beat flip that earned v2's 0.783, and tightens it instead of extending
it.

## Files

- `main.ts` — the entrypoint; writes the joke to `$MAKEFUN_OUTPUT_DIR`
  (default `/output`) as `entry.txt`.
- `LICENSE` — MIT.
