/* eslint-disable import/unambiguous,import/no-unused-modules,@typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  externalsPresets: { node: true },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      type: "commonjs2",
    },
  },
};
