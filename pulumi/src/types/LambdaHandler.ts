export type LambdaHandler<TEvent, TResult> = (
  event: TEvent
) => Promise<TResult>;
