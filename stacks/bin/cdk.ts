#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { env } from "../lib/util/env";
import { NewStackProps } from "../lib/stack-config";
import { HelloLambdaStack } from "../lib/hello-lambda";

(async function () {
  const branchName = env("BRANCH_NAME");
  const name = `cdk-template-${branchName}`;
  const stackPrefix = branchName === "main" ? "prod" : "dev";

  const stackProps = await NewStackProps({
    tags: {
      Name: name,
    },
  });

  const app = new cdk.App();
  new HelloLambdaStack(
    app,
    `${stackPrefix}-lambda-hello-${branchName}`,
    stackProps
  );

  app.synth();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
