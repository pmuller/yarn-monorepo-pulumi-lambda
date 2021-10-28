import { lambda } from "@pulumi/aws";

export const hello: lambda.Callback<{ name: string }, { message: string }> =
  async ({ name }) => ({
    message: `Hello ${name}`,
  });
