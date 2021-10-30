import { iam, lambda } from "@pulumi/aws";
import { asset } from "@pulumi/pulumi";

export const deployPackagedLambdaFunction = (name: string): lambda.Function => {
  const role = new iam.Role(name, {
    assumeRolePolicy: iam.assumeRolePolicyForPrincipal({
      Service: "lambda.amazonaws.com",
    }),
  });
  return new lambda.Function(name, {
    runtime: lambda.Runtime.NodeJS14dX,
    code: new asset.FileArchive(`../function-${name}/dist`),
    handler: "index.handler",
    role: role.arn,
    environment: {
      variables: { NODE_OPTIONS: "--enable-source-maps" },
    },
  });
};
