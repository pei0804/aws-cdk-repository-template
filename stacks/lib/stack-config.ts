import { StackProps } from "@aws-cdk/core";

export default interface IStackProps extends StackProps {
  readonly vpcName: string;
}

export const NewStackProps = async (
  stackProps: StackProps
): Promise<IStackProps> => {
  const customProps = {
    vpcName: "cdk-template",
  };
  return { ...customProps, ...stackProps };
};
