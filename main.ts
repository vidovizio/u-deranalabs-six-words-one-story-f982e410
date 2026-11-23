import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const story = "Childhood home. Lock changed. Stranger answers.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, story, "utf8");