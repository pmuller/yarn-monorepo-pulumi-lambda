import { lambda } from "@pulumi/aws";

import { hello } from "./functions";

export const helloFunction = new lambda.CallbackFunction("hello", {
  callback: hello,
});
