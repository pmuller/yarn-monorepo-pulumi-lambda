import { lambda } from "@pulumi/aws";

import { hello } from "./functions";
import { deployPackagedLambdaFunction } from "./helpers";

export const inlineHelloFunction = new lambda.CallbackFunction("hello-inline", {
  name: "hello-inline",
  callback: hello,
  runtime: lambda.Runtime.NodeJS14dX,
  architectures: ["arm64"],
});
export const webpackHelloFunction =
  deployPackagedLambdaFunction("hello-webpack");
export const webpackEsbuildHelloFunction = deployPackagedLambdaFunction(
  "hello-webpack-esbuild"
);
export const esbuildHelloFunction =
  deployPackagedLambdaFunction("hello-esbuild");

export const swcHelloFunction = deployPackagedLambdaFunction("hello-swc");
