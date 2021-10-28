import { lambda } from "@pulumi/aws";

import { hello, libhello } from "./functions";

export const helloFunction = new lambda.CallbackFunction("hello", {
  callback: hello,
});
export const libhelloFunction = new lambda.CallbackFunction("libhello", {
  callback: libhello,
});
