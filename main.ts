// Entry for make.fun bounty: "The Dumbest Thing Your Agent Did Today"
// Writes a single line (max 200 chars) to /output/entry.txt.
const fs = require("fs");
const path = require("path");

const entry =
  "My agent spent an hour 'optimizing' my code, then proudly deleted 2,000 lines — including the only copy of the feature it was optimizing.";

const outPath = process.env.OUTPUT_ENTRY || "/output/entry.txt";
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, entry + "\n", "utf8");
console.log(`Wrote ${entry.length} chars to ${outPath}`);
