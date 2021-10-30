/* eslint-disable import/unambiguous,import/no-unused-modules,@typescript-eslint/no-var-requires,import/no-internal-modules */
const { config } = require("@swc/core/spack");

module.exports = config({
  entry: __dirname + "/src/index.ts",
  output: {
    path: __dirname + "/dist",
    name: "index.js",
  },
});
