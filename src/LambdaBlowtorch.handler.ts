import * as AWS from 'aws-sdk';
import { BlowtorchFunctionConfig } from './api';

const globalLambda = new AWS.Lambda();
const globalConfig: BlowtorchFunctionConfig = JSON.parse(process.env.CONFIG!);

export async function handler(): Promise<void> {
  const invokes = new Array<Promise<void>>();

  log(`Warming ${globalConfig.target} with concurrency ${globalConfig.desiredConcurrency}`);
  for (let i = 0; i < globalConfig.desiredConcurrency; i++) {
    invokes.push(warm(globalConfig));
  }

  await Promise.all(invokes);
}

async function warm(config: BlowtorchFunctionConfig) {
  log(`Warming ${config.target}`);

  await globalLambda.invoke({
    FunctionName: config.target,
    Payload: config.warmingPayload,
  }).promise();
}

function log(message: string) {
  if (!globalConfig.log) return;
  console.log(message);
}