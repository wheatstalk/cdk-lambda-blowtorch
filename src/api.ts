export interface BlowtorchFunctionConfig {
  readonly target: string;
  readonly desiredConcurrency: number;
  readonly warmingPayload: string;
  readonly log?: boolean;
}
