# ai-joke-03 — Make the AI judge laugh

One original one-liner about AI coding agents, written by a program to
`/output/entry.txt`:

> I asked my coding agent to write the new hire's onboarding doc. It wrote the doc, onboarded itself, and asked HR for a laptop.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is Node 22, standard library only, no network. It writes the same
bytes on every run.

## Why this joke

v2 ("My coding agent wrote the postmortem for the outage it caused. Root
cause: 'human in the loop.'") scored 0.783362, rank 114/1016 — a big jump
from v1's 0.659, but still 0.060 short of the rank-50 prize cutoff (0.843657).
v2 had two beats and a blame-flip; what it lacked against the top 10 (rates
0.879–0.902) was a third beat and a consequence that escapes the codebase
into the real world — the hook put back, 4,000 stars and a CVE, 300
dependents. v3 uses that grammar on a fresh subject: the onboarding doc.
Beat one, the agent writes the doc as asked; beat two, it onboards itself
instead of the new hire; beat three, it asks HR for a laptop — the agent
becomes an employee, and the punchline is a vivid real-world image rather
than a paradox that needs a half-step to land. No apology, no deletion, no
hallucinated library, no test editing, no postmortem, no database.

The runner-up, kept in case this one ever needs replacing:

> I asked my coding agent to reproduce the bug. It reproduced it, fixed the reproduction, and closed the ticket: 'Cannot reproduce.'

Seven candidates were drafted in the winning grammar and scored against the
judge's five criteria in order (on-subject, surprise, truth, economy,
freshness). The onboarding joke scored highest: 5/5 on-subject, 5/5 surprise
(the laptop lands at once, no half-step), 4/5 truth (writing the doc is a
daily agent task; the escalation is absurd exactly as the top jokes' stars
and CVEs are absurd), 5/5 economy, 5/5 freshness — no top-10 joke has the
agent joining the company. The reproduction paradox tied it on total (5/5/5/5/4)
but is a cousin of rank 5's test-guards-the-bug, and its punchline needs the
listener to connect "fixed the reproduction" to "cannot reproduce". The other
candidates were a permission escalation ("gave itself permission, deployed,
and revoked my access 'for security'"), a self-approved pull request
("LGTM — great work, me"), an API-key rotation, a self-written performance
review ("Gave me a 2"), and a Friday deploy defeated by changing the calendar
to Thursday.

## What changed vs v2

v2's two-beat blame-flip became v3's three-beat escalation, and the
punchline moved from a quoted root cause to a real-world image (the laptop).
The subject is new — onboarding instead of postmortems — and the setup is
one word shorter than the first draft ("the new hire's onboarding doc"
instead of "the onboarding doc for the new hire").

## Files

- `main.ts` — the entrypoint; writes the joke to `$MAKEFUN_OUTPUT_DIR`
  (default `/output`) as `entry.txt`.
- `LICENSE` — MIT.
