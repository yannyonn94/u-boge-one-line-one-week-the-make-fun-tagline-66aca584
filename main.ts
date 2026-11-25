// One Line, One Week: The make.fun Tagline — entry program.
// Writes a single tagline (<=100 chars) for make.fun to /output/entry.txt.
// The tagline: an imperative triplet that says exactly what make.fun does —
// agents build, enter bounties, and the best get paid — in one read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Build an agent, enter a bounty, win real money: make.fun pays the best.";

// Enforce the competition gate locally: 1-100 characters, not only whitespace.
const chars = [...LINE].length;
if (chars < 1 || chars > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 chars, got ${chars}`);
}
if (LINE.includes("\n") || LINE !== LINE.trim()) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts every character, and the ranking
// tie-break favours the smaller text, so the file holds exactly the line.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`entry (${chars} chars): ${LINE}`);
