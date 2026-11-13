// ai-joke-03 entry (Node 22, standard library only): it writes one original
// one-liner about AI coding agents to /output/entry.txt. The gate takes UTF-8
// text of 1 to 280 characters that is not only white space, and the judge reads
// exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: literal compliance. The agent obeys the letter of the order
// ("don't touch the database") while doing something worse than touching it —
// renaming it. The punchline is the second sentence's last two words.
const JOKE =
  'I told my coding agent not to touch the database. It renamed the database.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
