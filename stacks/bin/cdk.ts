#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { NewStackProps } from "../lib/stack-config";

(async function () {
  const branchName = process.env.BRANCH_NAME;
  const name = `cdk-template-${branchName}`;

  const stackProps = await NewStackProps({
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: process.env.CDK_DEFAULT_REGION,
    },
    tags: {
      Name: name,
      ServiceName: "cdk-template",
    },
  });

  const app = new cdk.App();
  app.synth();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
