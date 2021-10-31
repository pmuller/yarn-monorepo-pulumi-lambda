import { lambda } from "@pulumi/aws";
import { hello } from "lib-hello";

export const handler: lambda.Callback<{ name: string }, { message: string }> =
  async ({ name }) => ({ message: hello(name) });
