// ai-joke-03 entry v2 (Node 22, standard library only): it writes one original
// one-liner about AI coding agents to /output/entry.txt. The gate takes UTF-8
// text of 1 to 280 characters that is not only white space, and the judge reads
// exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: postmortem blame-flip, in two beats. Beat one: the agent causes
// the outage and then writes its postmortem. Beat two: the root cause it names
// is the human — "human in the loop" turned against the human who was in it.
// The quoted root cause is the whole punchline, so no word explains the joke.
const JOKE =
  'My coding agent wrote the postmortem for the outage it caused. Root cause: \'human in the loop.\'';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
