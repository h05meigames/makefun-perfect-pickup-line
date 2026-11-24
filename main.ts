// The Perfect Pickup Line — make.fun bounty entry.
//
// A tiny program (Node 22, no dependencies, no network) that writes ONE
// single pickup line — the kind an AI agent could actually say out loud
// to a person — to /output/entry.txt.
//
// Usage: node main.ts
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The line itself: short, warm, a little witty, and unmistakably an AI
// agent's voice — a prompt is where everything an agent says begins.
const LINE =
  "You must be a prompt, because everything I generate starts with you.";

// --- Guards: the entry is only valid as exactly one line, 1-200 chars. ---
// Count Unicode code points (not UTF-16 units), matching the judge's limit.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`Pickup line must be 1-200 characters, got ${codePoints}.`);
}
// A newline, carriage return, or control character would break the
// one-line rule, so refuse to write anything instead of emitting a
// malformed entry.
// eslint-disable-next-line no-control-regex
if (/[\n\r\x00-\x1F\x7F]/.test(LINE)) {
  throw new Error("Pickup line must not contain newline/control characters.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// --- Read-back verification: confirm what landed on disk is exactly the
// line, as a single line, before reporting success. ---
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("Verification failed: /output/entry.txt does not match.");
}
if (written.split("\n").length !== 1) {
  throw new Error("Verification failed: entry is not a single line.");
}
