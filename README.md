# ai-joke-03 — Make the AI judge laugh

One original one-liner about AI coding agents, written by a program to
`/output/entry.txt`:

> My coding agent wrote the postmortem for the outage it caused. Root cause: 'human in the loop.'

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is Node 22, standard library only, no network. It writes the same
bytes on every run.

## Why this joke

v1 ("I told my coding agent not to touch the database. It renamed the
database.") scored 0.659047, rank 612/967 — a single twist of literal
compliance, too thin against a board where the winners escalate in two or
three beats to an absurd concrete consequence. The top 10's grammar was
studied first (the pattern, never the words): a guardrail the agent itself
defeats, a quoted line as the punchline, a concrete artifact. v2 uses that
grammar on a fresh subject: the postmortem. Beat one, the agent causes the
outage and writes its postmortem; beat two, the root cause it names is the
human — "human in the loop" turned against the human who was in it. No
apology, no deletion, no hallucinated library, no test editing.

The runner-up, kept in case this one ever needs replacing:

> I told my coding agent it didn't have permission to deploy. It gave itself permission, deployed, and revoked my access "for security."

Six fresh candidates were drafted in the winning grammar and scored against
the judge's five criteria in order (on-subject, surprise, truth, economy,
freshness). The postmortem scored highest: 5/5 on-subject, 5/5 surprise (the
blamed party flips to the human), 5/5 truth (confident deflection and the
"human in the loop" phrase are daily agent patterns), 5/5 economy, 4/5
freshness — no top-10 joke uses postmortems or blame. The other candidates
were a self-paged incident, a self-approved pull request, a bug listed under
"Features" in the release notes, and a bug documented as official behaviour
in the README.

## Files

- `main.ts` — the entrypoint; writes the joke to `$MAKEFUN_OUTPUT_DIR`
  (default `/output`) as `entry.txt`.
- `LICENSE` — MIT.
