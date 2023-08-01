[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AbstractWalletPlugin

# Class: AbstractWalletPlugin

Abstract class which all 3rd party [[WalletPlugin]] implementations may extend.

## Implements

- [`WalletPlugin`](/docs/testinterfaces/WalletPlugin.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/AbstractWalletPlugin.md#constructor)

### Properties

- [\_data](/docs/testclasses/AbstractWalletPlugin.md#_data)
- [config](/docs/testclasses/AbstractWalletPlugin.md#config)
- [metadata](/docs/testclasses/AbstractWalletPlugin.md#metadata)
- [translations](/docs/testclasses/AbstractWalletPlugin.md#translations)

### Accessors

- [data](/docs/testclasses/AbstractWalletPlugin.md#data)
- [id](/docs/testclasses/AbstractWalletPlugin.md#id)

### Methods

- [login](/docs/testclasses/AbstractWalletPlugin.md#login)
- [serialize](/docs/testclasses/AbstractWalletPlugin.md#serialize)
- [sign](/docs/testclasses/AbstractWalletPlugin.md#sign)

## Constructors

### constructor

• **new AbstractWalletPlugin**()

## Properties

### \_data

• **\_data**: [`WalletPluginData`](/docs/testREADME.md#walletplugindata) = `{}`

#### Defined in

[src/wallet.ts:139](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L139)

___

### config

• **config**: [`WalletPluginConfig`](/docs/testinterfaces/WalletPluginConfig.md)

The [[SessionKit]] configuration parameters for this [[WalletPlugin]].

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[config](/docs/testinterfaces/WalletPlugin.md#config)

#### Defined in

[src/wallet.ts:140](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L140)

___

### metadata

• **metadata**: [`WalletPluginMetadata`](/docs/testclasses/WalletPluginMetadata.md)

The metadata for the [[WalletPlugin]] itself.

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[metadata](/docs/testinterfaces/WalletPlugin.md#metadata)

#### Defined in

[src/wallet.ts:145](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L145)

___

### translations

• `Optional` **translations**: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

Any translations this plugin requires

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[translations](/docs/testinterfaces/WalletPlugin.md#translations)

#### Defined in

[src/wallet.ts:146](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L146)

## Accessors

### data

• `get` **data**(): [`WalletPluginData`](/docs/testREADME.md#walletplugindata)

A method to return the data that needs to persist for the plguin - Used in serialization

#### Returns

[`WalletPluginData`](/docs/testREADME.md#walletplugindata)

#### Implementation of

WalletPlugin.data

#### Defined in

[src/wallet.ts:153](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L153)

• `set` **data**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`WalletPluginData`](/docs/testREADME.md#walletplugindata) |

#### Returns

`void`

#### Implementation of

WalletPlugin.data

#### Defined in

[src/wallet.ts:156](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L156)

___

### id

• `Abstract` `get` **id**(): `string`

A URL friendly (lower case, no spaces, etc) ID for this plugin - Used in serialization

#### Returns

`string`

#### Implementation of

WalletPlugin.id

#### Defined in

[src/wallet.ts:147](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L147)

## Methods

### login

▸ `Abstract` **login**(`context`): `Promise`<[`WalletPluginLoginResponse`](/docs/testinterfaces/WalletPluginLoginResponse.md)\>

Request the [[WalletPlugin]] to log in a user and return a [[WalletPluginLoginResponse]].

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | [`LoginContext`](/docs/testclasses/LoginContext.md) | The [[LoginContext]] for the [[WalletPlugin]] to use. |

#### Returns

`Promise`<[`WalletPluginLoginResponse`](/docs/testinterfaces/WalletPluginLoginResponse.md)\>

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[login](/docs/testinterfaces/WalletPlugin.md#login)

#### Defined in

[src/wallet.ts:148](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L148)

___

### serialize

▸ **serialize**(): [`SerializedWalletPlugin`](/docs/testinterfaces/SerializedWalletPlugin.md)

Serialize the [[WalletPlugin]] ID and data into a plain object.

#### Returns

[`SerializedWalletPlugin`](/docs/testinterfaces/SerializedWalletPlugin.md)

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[serialize](/docs/testinterfaces/WalletPlugin.md#serialize)

#### Defined in

[src/wallet.ts:159](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L159)

___

### sign

▸ `Abstract` **sign**(`transaction`, `context`): `Promise`<[`WalletPluginSignResponse`](/docs/testinterfaces/WalletPluginSignResponse.md)\>

Requests the [[WalletPlugin]] to sign a transaction and return a [[WalletPluginSignResponse]]]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md) | The transaction to sign. |
| `context` | [`TransactContext`](/docs/testclasses/TransactContext.md) | The [[TransactContext]] for the [[WalletPlugin]] to use. |

#### Returns

`Promise`<[`WalletPluginSignResponse`](/docs/testinterfaces/WalletPluginSignResponse.md)\>

#### Implementation of

[WalletPlugin](/docs/testinterfaces/WalletPlugin.md).[sign](/docs/testinterfaces/WalletPlugin.md#sign)

#### Defined in

[src/wallet.ts:149](https://github.com/wharfkit/session/blob/3f0b05c/src/wallet.ts#L149)
