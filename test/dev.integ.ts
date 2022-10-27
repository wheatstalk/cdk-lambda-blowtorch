import { App, aws_lambda, Duration, Stack } from 'aws-cdk-lib';
import { LambdaBlowtorch } from '../src';

const app = new App();
const stack = new Stack(app, 'integ-lambda-blowtorch');

const target = new aws_lambda.Function(stack, 'Target', {
  runtime: aws_lambda.Runtime.PYTHON_3_9,
  handler: 'index.handler',
  timeout: Duration.minutes(1),
  code: aws_lambda.Code.fromInline([
    'import time',
    'def handler(event, ctx):',
    '  print("I am a slow function")',
    '  time.sleep(5)',
    '  return {}',
  ].join('\n')),
});

new LambdaBlowtorch(stack, 'Blowtorch', {
  desiredConcurrency: 50,
  target,
});
