import { aws_events, aws_events_targets, aws_lambda, Duration } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { BlowtorchFunctionConfig } from './api';
import { BlowtorchFunction } from './functions/blowtorch-function';

export interface LambdaBlowtorchProps {
  /**
   * The lambda function to warm.
   */
  readonly target: aws_lambda.IFunction;

  /**
   * The desired level of concurrency.
   */
  readonly desiredConcurrency: number;

  /**
   * The interval between warming events at the desired level of concurrency.
   *
   * @default Duration.minutes(1)
   */
  readonly warmingInterval?: Duration;

  /**
   * Payload to send to the function when warming.
   *
   * @default "{}"
   */
  readonly warmingPayload?: string;

  /**
   * Show blowtorch log messages
   *
   * @default false
   * @experimental Do not use this as I may change this at any time.
   */
  readonly log?: boolean;
}

/**
 * Warms a Lambda function to a desired level of concurrency.
 */
export class LambdaBlowtorch extends Construct {
  constructor(scope: Construct, id: string, props: LambdaBlowtorchProps) {
    super(scope, id);

    const config: BlowtorchFunctionConfig = {
      target: props.target.functionArn,
      desiredConcurrency: props.desiredConcurrency,
      log: props.log,
      warmingPayload: props.warmingPayload ?? JSON.stringify({}),
    };

    const handler = new BlowtorchFunction(this, 'Blowtorch', {
      environment: {
        CONFIG: JSON.stringify(config),
      },
      timeout: props.warmingInterval ?? Duration.minutes(1),
    });

    props.target.grantInvoke(handler);

    new aws_events.Rule(this, 'Rule', {
      schedule: aws_events.Schedule.rate(Duration.minutes(1)),
      targets: [
        new aws_events_targets.LambdaFunction(handler),
      ],
    });
  }
}
