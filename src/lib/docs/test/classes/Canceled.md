[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Canceled

# Class: Canceled

Cancelable promises

https://stackoverflow.com/questions/46461801/possible-to-add-a-cancel-method-to-promise-in-typescript/46464377#46464377

## Hierarchy

- `Error`

  ↳ **`Canceled`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Canceled.md#constructor)

### Properties

- [message](/docs/testclasses/Canceled.md#message)
- [name](/docs/testclasses/Canceled.md#name)
- [silent](/docs/testclasses/Canceled.md#silent)
- [stack](/docs/testclasses/Canceled.md#stack)
- [prepareStackTrace](/docs/testclasses/Canceled.md#preparestacktrace)
- [stackTraceLimit](/docs/testclasses/Canceled.md#stacktracelimit)

### Methods

- [captureStackTrace](/docs/testclasses/Canceled.md#capturestacktrace)

## Constructors

### constructor

• **new Canceled**(`reason`, `silent?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason` | `any` |
| `silent?` | `boolean` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:10

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### silent

• **silent**: `boolean`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:9

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
