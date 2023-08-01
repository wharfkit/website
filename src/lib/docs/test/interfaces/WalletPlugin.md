[@wharfkit/session - v1.0.0](/docs/testREADME.md) / WalletPlugin

# Interface: WalletPlugin

Interface which all 3rd party wallet plugins must implement.

## Implemented by

- [`AbstractWalletPlugin`](/docs/testclasses/AbstractWalletPlugin.md)

## Table of contents

### Properties

- [config](/docs/testinterfaces/WalletPlugin.md#config)
- [metadata](/docs/testinterfaces/WalletPlugin.md#metadata)
- [translations](/docs/testinterfaces/WalletPlugin.md#translations)

### Accessors

- [data](/docs/testinterfaces/WalletPlugin.md#data)
- [id](/docs/testinterfaces/WalletPlugin.md#id)

### Methods

- [login](/docs/testinterfaces/WalletPlugin.md#login)
- [serialize](/docs/testinterfaces/WalletPlugin.md#serialize)
- [sign](/docs/testinterfaces/WalletPlugin.md#sign)

## Properties

### config

• **config**: [`WalletPluginConfig`](/docs/testinterfaces/WalletPluginConfig.md)

The [[SessionKit]] configuration parameters for this [[WalletPlugin]].

#### Defined in

[src/wallet.ts:108](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L108)

___

### metadata

• **metadata**: [`WalletPluginMetadata`](/docs/testclasses/WalletPluginMetadata.md)

The metadata for the [[WalletPlugin]] itself.

#### Defined in

[src/wallet.ts:110](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L110)

___

### translations

• `Optional` **translations**: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

Any translations this plugin requires

#### Defined in

[src/wallet.ts:112](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L112)

## Accessors

### data

• `get` **data**(): [`WalletPluginData`](/docs/testREADME.md#walletplugindata)

A method to return the data that needs to persist for the plguin - Used in serialization

#### Returns

[`WalletPluginData`](/docs/testREADME.md#walletplugindata)

#### Defined in

[src/wallet.ts:105](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L105)

• `set` **data**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`WalletPluginData`](/docs/testREADME.md#walletplugindata) |

#### Returns

`void`

#### Defined in

[src/wallet.ts:106](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L106)

___

### id

• `get` **id**(): `string`

A URL friendly (lower case, no spaces, etc) ID for this plugin - Used in serialization

#### Returns

`string`

#### Defined in

[src/wallet.ts:103](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L103)

## Methods

### login

▸ **login**(`context`): `Promise`<[`WalletPluginLoginResponse`](/docs/testinterfaces/WalletPluginLoginResponse.md)\>

Request the [[WalletPlugin]] to log in a user and return a [[WalletPluginLoginResponse]].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`LoginContext`](/docs/testclasses/LoginContext.md) | The [[LoginContext]] for the [[WalletPlugin]] to use. |

#### Returns

`Promise`<[`WalletPluginLoginResponse`](/docs/testinterfaces/WalletPluginLoginResponse.md)\>

#### Defined in

[src/wallet.ts:118](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L118)

___

### serialize

▸ **serialize**(): [`WalletPluginData`](/docs/testREADME.md#walletplugindata)

Serialize the [[WalletPlugin]] ID and data into a plain object.

#### Returns

[`WalletPluginData`](/docs/testREADME.md#walletplugindata)

#### Defined in

[src/wallet.ts:132](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L132)

___

### sign

▸ **sign**(`transaction`, `context`): `Promise`<[`WalletPluginSignResponse`](/docs/testinterfaces/WalletPluginSignResponse.md)\>

Requests the [[WalletPlugin]] to sign a transaction and return a [[WalletPluginSignResponse]]]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md) | The transaction to sign. |
| `context` | [`TransactContext`](/docs/testclasses/TransactContext.md) | The [[TransactContext]] for the [[WalletPlugin]] to use. |

#### Returns

`Promise`<[`WalletPluginSignResponse`](/docs/testinterfaces/WalletPluginSignResponse.md)\>

#### Defined in

[src/wallet.ts:125](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L125)
