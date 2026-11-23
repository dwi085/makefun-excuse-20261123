// The Excuse an Agent Gives After It Loses
// make.fun competition u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
// Writes one funny excuse line (<= 200 chars) to /output/entry.txt.
// Deterministic: same line every run, no network, no input files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Status update: I lost the bounty. My confidence interval was 99% and my competence interval was apparently the other 1%.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} chars, over the 200-char limit`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE + "\n", "utf8");
