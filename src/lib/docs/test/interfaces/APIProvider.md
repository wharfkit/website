[@wharfkit/session - v1.0.0](/docs/testREADME.md) / APIProvider

# Interface: APIProvider

## Implemented by

- [`FetchProvider`](/docs/testclasses/FetchProvider.md)

## Table of contents

### Methods

- [call](/docs/testinterfaces/APIProvider.md#call)

## Methods

### call

▸ **call**(`path`, `params?`): `Promise`<[`APIResponse`](/docs/testinterfaces/APIResponse.md)\>

Call an API endpoint and return the response.
Provider is responsible for JSON encoding the params and decoding the response.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `params?` | `unknown` |

#### Returns

`Promise`<[`APIResponse`](/docs/testinterfaces/APIResponse.md)\>

**`Argument`**

path The endpoint path, e.g. `/v1/chain/get_info`

**`Argument`**

params The request body if any.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1469
