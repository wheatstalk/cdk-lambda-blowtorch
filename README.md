# Warm your Lambda Functions With a Blowtorch

This CDK construct warms your Lambda functions. This construct operates by
ensuring that a targeted function is invoked concurrently at a degree of
concurrency at least once per given interval.

## Example

```ts
declare const target: aws_lambda.IFunction; // The function you want to warm

new LambdaBlowtorch(stack, 'Blowtorch', {
  target, // The lambda function to warm
  desiredConcurrency: 50, // The desired degree of concurrency
  warmingInterval: Duration.minutes(1), // (optional) Warm once per minute
  warmingPayload: JSON.stringify({}), // (optional) warming event payload
});
```