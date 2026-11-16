// Copies the entry image to the output directory for the grader.
// The judge reads exactly the bytes of /output/entry.png.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync("entry.png", join(outDir, "entry.png"));
