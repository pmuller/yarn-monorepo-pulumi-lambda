import { lambda } from "@pulumi/aws";

import { createWebpackHelloFunction, hello } from "./functions";

export const helloFunction = new lambda.CallbackFunction("hello", {
  callback: hello,
});
export const webpackHelloFunction = createWebpackHelloFunction();
