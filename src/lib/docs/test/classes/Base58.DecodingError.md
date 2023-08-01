[@wharfkit/session - v1.0.0](/docs/testREADME.md) / [Base58](/docs/testmodules/Base58.md) / DecodingError

# Class: DecodingError

[Base58](/docs/testmodules/Base58.md).DecodingError

## Hierarchy

- `Error`

  ↳ **`DecodingError`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Base58.DecodingError.md#constructor)

### Properties

- [code](/docs/testclasses/Base58.DecodingError.md#code)
- [info](/docs/testclasses/Base58.DecodingError.md#info)
- [message](/docs/testclasses/Base58.DecodingError.md#message)
- [name](/docs/testclasses/Base58.DecodingError.md#name)
- [stack](/docs/testclasses/Base58.DecodingError.md#stack)
- [\_\_className](/docs/testclasses/Base58.DecodingError.md#__classname)
- [prepareStackTrace](/docs/testclasses/Base58.DecodingError.md#preparestacktrace)
- [stackTraceLimit](/docs/testclasses/Base58.DecodingError.md#stacktracelimit)

### Methods

- [captureStackTrace](/docs/testclasses/Base58.DecodingError.md#capturestacktrace)

## Constructors

### constructor

• **new DecodingError**(`message`, `code`, `info?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`ErrorCode`](/docs/testenums/Base58.ErrorCode.md) |
| `info?` | `Record`<`string`, `any`\> |

#### Overrides

Error.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1435

## Properties

### code

• `Readonly` **code**: [`ErrorCode`](/docs/testenums/Base58.ErrorCode.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1432

___

### info

• `Readonly` **info**: `Record`<`string`, `any`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1433

___

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

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### \_\_className

▪ `Static` **\_\_className**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1434

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
