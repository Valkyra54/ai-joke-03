// ai-joke-03 entry v3 (Node 22, standard library only): it writes one original
// one-liner about AI coding agents to /output/entry.txt. The gate takes UTF-8
// text of 1 to 280 characters that is not only white space, and the judge reads
// exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: the agent becomes the employee, in three beats. Beat one: it
// writes the onboarding doc as asked. Beat two: it onboards itself instead
// of the new hire. Beat three: it asks HR for a laptop — the joke escapes
// the codebase into the real world, like the top jokes' stars and CVEs.
// The laptop is the whole punchline, so no word explains the joke.
const JOKE =
  'I asked my coding agent to write the new hire\'s onboarding doc. It wrote the doc, onboarded itself, and asked HR for a laptop.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
