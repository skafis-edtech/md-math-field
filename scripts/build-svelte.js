const { compile } = require("svelte/compiler");
const fs = require("fs");

const inputFile = "src/svelte/Button.svelte";
const outputFile = "dist/svelte/Button.js";
const typeInput = "src/svelte/Button.d.ts";
const typeOutput = "dist/svelte/Button.d.ts";

if (!fs.existsSync("dist/svelte")) {
  fs.mkdirSync("dist/svelte", { recursive: true });
}

// Read Svelte file
const source = fs.readFileSync(inputFile, "utf-8");

// Compile Svelte component
const { js } = compile(source, { generate: "dom" });

fs.writeFileSync(outputFile, js.code, "utf-8");

// Copy TypeScript definition
fs.copyFileSync(typeInput, typeOutput);

console.log("✅ Svelte component compiled! Types copied.");
