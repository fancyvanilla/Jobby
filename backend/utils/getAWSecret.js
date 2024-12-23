import {
    SecretsManagerClient,
    GetSecretValueCommand,
  } from "@aws-sdk/client-secrets-manager";
  
  const secret_name = "rds!db-a410d4f6-e034-44e7-9253-42b9a8a08805";
  
  const client = new SecretsManagerClient({
    region: "us-east-1",
  });
  
  let response;
  
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", 
      })
    );
  } catch (error) {
    console.log("Error sending the request: ", error);
  }
  console.log(response);
//   export const secret = response.SecretString;