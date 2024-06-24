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
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaBlowtorch <a name="LambdaBlowtorch" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch"></a>

Warms a Lambda function to a desired level of concurrency.

#### Initializers <a name="Initializers" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer"></a>

```typescript
import { LambdaBlowtorch } from '@wheatstalk/cdk-lambda-blowtorch'

new LambdaBlowtorch(scope: Construct, id: string, props: LambdaBlowtorchProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.props">props</a></code> | <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps">LambdaBlowtorchProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.Initializer.parameter.props"></a>

- *Type:* <a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps">LambdaBlowtorchProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.isConstruct"></a>

```typescript
import { LambdaBlowtorch } from '@wheatstalk/cdk-lambda-blowtorch'

LambdaBlowtorch.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorch.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### LambdaBlowtorchProps <a name="LambdaBlowtorchProps" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps"></a>

#### Initializer <a name="Initializer" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.Initializer"></a>

```typescript
import { LambdaBlowtorchProps } from '@wheatstalk/cdk-lambda-blowtorch'

const lambdaBlowtorchProps: LambdaBlowtorchProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.desiredConcurrency">desiredConcurrency</a></code> | <code>number</code> | The desired level of concurrency. |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.target">target</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The lambda function to warm. |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.log">log</a></code> | <code>boolean</code> | Show blowtorch log messages. |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.warmingInterval">warmingInterval</a></code> | <code>aws-cdk-lib.Duration</code> | The interval between warming events at the desired level of concurrency. |
| <code><a href="#@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.warmingPayload">warmingPayload</a></code> | <code>string</code> | Payload to send to the function when warming. |

---

##### `desiredConcurrency`<sup>Required</sup> <a name="desiredConcurrency" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.desiredConcurrency"></a>

```typescript
public readonly desiredConcurrency: number;
```

- *Type:* number

The desired level of concurrency.

---

##### `target`<sup>Required</sup> <a name="target" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.target"></a>

```typescript
public readonly target: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The lambda function to warm.

---

##### `log`<sup>Optional</sup> <a name="log" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.log"></a>

```typescript
public readonly log: boolean;
```

- *Type:* boolean
- *Default:* false

Show blowtorch log messages.

---

##### `warmingInterval`<sup>Optional</sup> <a name="warmingInterval" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.warmingInterval"></a>

```typescript
public readonly warmingInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(1)

The interval between warming events at the desired level of concurrency.

---

##### `warmingPayload`<sup>Optional</sup> <a name="warmingPayload" id="@wheatstalk/cdk-lambda-blowtorch.LambdaBlowtorchProps.property.warmingPayload"></a>

```typescript
public readonly warmingPayload: string;
```

- *Type:* string
- *Default:* "{}"

Payload to send to the function when warming.

---



