// The GPS Swears It Was a Shortcut — make.fun entry.
// Writes the GPS's own excuse, in its own voice, to /output/entry.txt.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Technically this cul-de-sac IS a shortcut. The map just forgot to finish the road.";

// The gate requires one line of plain text, 1-200 chars: keep it exactly one
// line with no trailing newline, so the file's byte count equals the line.
if (LINE.includes("\n") || LINE.length < 1 || LINE.length > 200) {
  throw new Error("entry line must be a single line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
