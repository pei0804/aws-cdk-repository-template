import * as EC2 from "aws-sdk/clients/ec2";
import {
  DescribeSecurityGroupsRequest,
  DescribeSecurityGroupsResult,
} from "aws-sdk/clients/ec2";

const ec2Client = new EC2();

export class EC2Client {
  fetchSecurityGroups = async (
    securityGroupName: string
  ): Promise<DescribeSecurityGroupsResult> => {
    const req: DescribeSecurityGroupsRequest = {
      Filters: [{ Name: "group-name", Values: [securityGroupName] }],
    };
    return ec2Client.describeSecurityGroups(req).promise();
  };
}
