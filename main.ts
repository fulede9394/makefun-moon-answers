// The Moon, four billion years into being wished upon, finally snaps — politely.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I've watched you wish on me for four billion years. Not once has anyone wished for me. I'm fine. I'm literally fine. Keep staring, I guess.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
