import { iam, lambda } from "@pulumi/aws";
import { asset } from "@pulumi/pulumi";

export const createWebpackHelloFunction = () => {
  const role = new iam.Role("webpackHello", {
    assumeRolePolicy: iam.assumeRolePolicyForPrincipal({
      Service: "lambda.amazonaws.com",
    }),
  });
  return new lambda.Function("webpackHello", {
    runtime: lambda.Runtime.NodeJS14dX,
    code: new asset.FileArchive("../function-hello-webpack/dist"),
    handler: "index.handler",
    role: role.arn,
    environment: {
      variables: { NODE_OPTIONS: "--enable-source-maps" },
    },
  });
};
