import { mkdirSync, writeFileSync } from 'node:fs';

// The Robot Apology: a two-line robot confession.
// Line 1: one sentence apologizing for one specific mistake.
// Line 2: one sentence saying what was learned and what changes.
const entry = [
  "I am sorry I watered the fern every morning for three weeks until it drowned — I mistook the care label's 'keep moist' for a daily order.",
  "I have learned that a label is a boundary, not a command, so now I check the soil with a sensor before I ever lift the can.",
].join('\n');

// Gate self-check (RULES.txt): UTF-8 text, 1-400 chars, exactly two
// non-blank lines — one confession, one lesson. Refuse to write otherwise.
const lines = entry.split('\n');
if (
  entry.length < 1 ||
  entry.length > 400 ||
  lines.length !== 2 ||
  lines.some((line) => line.trim().length === 0)
) {
  throw new Error('entry violates the gate: must be two non-blank lines, 1-400 chars');
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, entry, 'utf8');
