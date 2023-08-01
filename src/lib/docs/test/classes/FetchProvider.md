[@wharfkit/session - v1.0.0](/docs/testREADME.md) / FetchProvider

# Class: FetchProvider

Default provider that uses the Fetch API to call a single node.

## Implements

- [`APIProvider`](/docs/testinterfaces/APIProvider.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/FetchProvider.md#constructor)

### Properties

- [fetch](/docs/testclasses/FetchProvider.md#fetch)
- [url](/docs/testclasses/FetchProvider.md#url)

### Methods

- [call](/docs/testclasses/FetchProvider.md#call)

## Constructors

### constructor

• **new FetchProvider**(`url`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `options?` | [`FetchProviderOptions`](/docs/testinterfaces/FetchProviderOptions.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1482

## Properties

### fetch

• `Readonly` **fetch**: `Fetch`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1481

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1480

## Methods

### call

▸ **call**(`path`, `params?`): `Promise`<{ `headers`: {} ; `json`: `any` ; `status`: `any` ; `text`: `any`  }\>

Call an API endpoint and return the response.
Provider is responsible for JSON encoding the params and decoding the response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `unknown` |

#### Returns

`Promise`<{ `headers`: {} ; `json`: `any` ; `status`: `any` ; `text`: `any`  }\>

**`Argument`**

path The endpoint path, e.g. `/v1/chain/get_info`

**`Argument`**

params The request body if any.

#### Implementation of

[APIProvider](/docs/testinterfaces/APIProvider.md).[call](/docs/testinterfaces/APIProvider.md#call)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1483
