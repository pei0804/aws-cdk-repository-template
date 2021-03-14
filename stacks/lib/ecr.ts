import * as cdk from "@aws-cdk/core";
import * as ecr from "@aws-cdk/aws-ecr";
import IStackProps from "./stack-config";

export class EcrStack extends cdk.Stack {
  constructor(scope: cdk.Construct, name: string, props: IStackProps) {
    super(scope, name, props);

    new ecr.Repository(this, `${name}-ecr`, {
      repositoryName: "cdk-template",
      imageScanOnPush: true,
      lifecycleRules: [
        {
          maxImageCount: 9999,
        },
      ],
    });
  }
}
