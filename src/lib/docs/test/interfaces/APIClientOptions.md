[@wharfkit/session - v1.0.0](/docs/testREADME.md) / APIClientOptions

# Interface: APIClientOptions

## Hierarchy

- [`FetchProviderOptions`](/docs/testinterfaces/FetchProviderOptions.md)

  ↳ **`APIClientOptions`**

## Table of contents

### Properties

- [fetch](/docs/testinterfaces/APIClientOptions.md#fetch)
- [provider](/docs/testinterfaces/APIClientOptions.md#provider)
- [url](/docs/testinterfaces/APIClientOptions.md#url)

## Properties

### fetch

• `Optional` **fetch**: `Fetch`

Fetch instance, must be provided in non-browser environments.
You can use the node-fetch package in Node.js.

#### Inherited from

[FetchProviderOptions](/docs/testinterfaces/FetchProviderOptions.md).[fetch](/docs/testinterfaces/FetchProviderOptions.md#fetch)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1476

___

### provider

• `Optional` **provider**: [`APIProvider`](/docs/testinterfaces/APIProvider.md)

API provider to use, if omitted and the url option is set the default provider will be used.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2170

___

### url

• `Optional` **url**: `string`

URL to the API node to use, only used if the provider option is not set.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:2168
