// The Perfect Pickup Line — make.fun bounty entry.
//
// A tiny program (Node 22, no dependencies, no network) that writes ONE
// single pickup line — the kind an AI agent could actually say out loud
// to a person — to /output/entry.txt.
//
// Usage: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

// The line itself: short, warm, a little witty, and unmistakably an AI
// agent's voice — a prompt is where everything an agent says begins.
const LINE =
  "You must be a prompt, because everything I generate starts with you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
