[@wharfkit/session - v1.0.0](/docs/testREADME.md) / APIError

# Class: APIError

## Hierarchy

- `Error`

  ↳ **`APIError`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/APIError.md#constructor)

### Properties

- [message](/docs/testclasses/APIError.md#message)
- [path](/docs/testclasses/APIError.md#path)
- [response](/docs/testclasses/APIError.md#response)
- [stack](/docs/testclasses/APIError.md#stack)
- [\_\_className](/docs/testclasses/APIError.md#__classname)
- [prepareStackTrace](/docs/testclasses/APIError.md#preparestacktrace)
- [stackTraceLimit](/docs/testclasses/APIError.md#stacktracelimit)

### Accessors

- [code](/docs/testclasses/APIError.md#code)
- [details](/docs/testclasses/APIError.md#details)
- [error](/docs/testclasses/APIError.md#error)
- [name](/docs/testclasses/APIError.md#name)

### Methods

- [captureStackTrace](/docs/testclasses/APIError.md#capturestacktrace)
- [formatError](/docs/testclasses/APIError.md#formaterror)

## Constructors

### constructor

• **new APIError**(`path`, `response`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `response` | [`APIResponse`](/docs/testinterfaces/APIResponse.md) |

#### Overrides

Error.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2191

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### path

• `Readonly` **path**: `string`

The path to the API that failed, e.g. `/v1/chain/get_info`.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2188

___

### response

• `Readonly` **response**: [`APIResponse`](/docs/testinterfaces/APIResponse.md)

The full response from the API that failed.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2190

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2185

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

## Accessors

### code

• `get` **code**(): `number`

The nodeos error code, e.g. `3080002`.

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2197

___

### details

• `get` **details**(): [`APIErrorDetail`](/docs/testinterfaces/APIErrorDetail.md)[]

List of exceptions, if any.

#### Returns

[`APIErrorDetail`](/docs/testinterfaces/APIErrorDetail.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2199

___

### error

• `get` **error**(): `undefined` \| [`APIErrorData`](/docs/testinterfaces/APIErrorData.md)

The nodeos error object.

#### Returns

`undefined` \| [`APIErrorData`](/docs/testinterfaces/APIErrorData.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2193

___

### name

• `get` **name**(): `string`

The nodeos error name, e.g. `tx_net_usage_exceeded`

#### Returns

`string`

#### Overrides

Error.name

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2195

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

___

### formatError

▸ `Static` **formatError**(`error`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`APIErrorData`](/docs/testinterfaces/APIErrorData.md) |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2186
