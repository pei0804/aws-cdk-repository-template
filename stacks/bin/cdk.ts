#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { env } from "../lib/util/env";
import { NewStackProps } from "../lib/stack-config";
import { EcrStack } from "../lib/ecr";

(async function () {
  const branchName = env("BRANCH_NAME");
  const name = `cdk-template-${branchName}`;
  const stackPrefix = branchName === "main" ? "prod" : "dev";
  const stackProps = await NewStackProps({
    env: {
      account: env("CDK_DEFAULT_ACCOUNT"),
      region: env("CDK_DEFAULT_REGION"),
    },
    tags: {
      Name: name,
    },
  });

  const app = new cdk.App();
  new EcrStack(app, `${stackPrefix}-ecr-${branchName}`, stackProps);
  app.synth();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
