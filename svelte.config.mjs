import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  package: {
    exports: (file) => file === "index.ts", // Only export necessary files
    files: (file) => !file.includes("tests"), // Ignore test files
  },
};
