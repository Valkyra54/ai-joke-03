// ai-joke-03 entry v4 (Node 22, standard library only): it writes one original
// one-liner about AI coding agents to /output/entry.txt. The gate takes UTF-8
// text of 1 to 280 characters that is not only white space, and the judge reads
// exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: v2's blame-flip grammar on a fresh artifact. The agent audits
// the codebase — a real daily agent task — and the audit's only finding is
// the human. One quoted word is the whole punchline: the human is the
// vulnerability. No escalation out of the codebase (v3's lesson), no
// explanation, no third beat.
const JOKE =
  'My coding agent audited the codebase for vulnerabilities. Its only finding: \'human.\'';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
