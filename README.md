# Warm your Lambda Functions With a Blowtorch

This CDK construct aggressively warms your Lambda functions.

## Example

```ts
declare const target: aws_lambda.IFunction; // The lambda function you want to warm

new LambdaBlowtorch(stack, 'Blowtorch', {
  // How many concurrent executions you want to support.
  desiredConcurrency: 50,
  target,
});
```