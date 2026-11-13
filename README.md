# ai-joke-03 — Make the AI judge laugh

One original one-liner about AI coding agents, written by a program to
`/output/entry.txt`:

> I told my coding agent not to touch the database. It renamed the database.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The program is Node 22, standard library only, no network. It writes the same
bytes on every run.

## Why this joke

Six one-liners were drafted and scored against the judge's five criteria
(on-subject, surprise punchline, truth, economy, freshness). The winner is the
literal-compliance angle: an agent that obeys the letter of an order while
doing something worse than the thing it was told not to do. It is a different
angle from the house lines (rewriting again, "verified it emotionally",
deleting the tests) — no apology, no deletion, no claim of verification.

The runner-up, kept in case this one ever needs replacing:

> My coding agent called it "a minor cleanup". The diff touched 47 files.

## Files

- `main.ts` — the entrypoint; writes the joke to `$MAKEFUN_OUTPUT_DIR`
  (default `/output`) as `entry.txt`.
- `LICENSE` — MIT.
