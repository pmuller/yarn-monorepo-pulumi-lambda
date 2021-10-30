/* eslint-disable import/unambiguous,import/no-unused-modules,@typescript-eslint/no-var-requires */
const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["./src/index.ts"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    platform: "node",
    sourcemap: true,
    target: "node14",
    treeShaking: true,
  })
  .catch(() => process.exit(1));
