import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import IStackProps from "./stack-config";

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: IStackProps) {
    super(scope, id, props);
    const code = `
def hello(event, context):
    print("hello")
`;
    new lambda.Function(this, `${id}-lambda`, {
      runtime: lambda.Runtime.PYTHON_3_6,
      code: lambda.Code.fromInline(code),
      handler: "index.hello",
    });
  }
}
