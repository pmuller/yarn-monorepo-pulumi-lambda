import { lambda } from "@pulumi/aws";
import { hello as baseHello } from "lib-hello";

export const libhello: lambda.Callback<{ name: string }, { message: string }> =
  async ({ name }) => ({ message: baseHello(name) });
