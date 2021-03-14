import * as SecretsManager from "aws-sdk/clients/secretsmanager";
import { DescribeSecretRequest } from "aws-sdk/clients/secretsmanager";

const secretsManager = new SecretsManager();

export class SecretsManagerClient {
  fetchSecret = async (
    secretId: string
  ): Promise<SecretsManager.DescribeSecretResponse> => {
    const req: DescribeSecretRequest = {
      SecretId: secretId,
    };
    return secretsManager.describeSecret(req).promise();
  };
}
