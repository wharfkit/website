[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Session

# Class: Session

A representation of a session to interact with a specific blockchain account.

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Session.md#constructor)

### Properties

- [abiCache](/docs/testclasses/Session.md#abicache)
- [abis](/docs/testclasses/Session.md#abis)
- [allowModify](/docs/testclasses/Session.md#allowmodify)
- [appName](/docs/testclasses/Session.md#appname)
- [broadcast](/docs/testclasses/Session.md#broadcast)
- [chain](/docs/testclasses/Session.md#chain)
- [expireSeconds](/docs/testclasses/Session.md#expireseconds)
- [fetch](/docs/testclasses/Session.md#fetch)
- [permissionLevel](/docs/testclasses/Session.md#permissionlevel)
- [storage](/docs/testclasses/Session.md#storage)
- [transactPlugins](/docs/testclasses/Session.md#transactplugins)
- [transactPluginsOptions](/docs/testclasses/Session.md#transactpluginsoptions)
- [ui](/docs/testclasses/Session.md#ui)
- [walletPlugin](/docs/testclasses/Session.md#walletplugin)

### Accessors

- [actor](/docs/testclasses/Session.md#actor)
- [client](/docs/testclasses/Session.md#client)
- [permission](/docs/testclasses/Session.md#permission)

### Methods

- [cloneRequest](/docs/testclasses/Session.md#clonerequest)
- [createRequest](/docs/testclasses/Session.md#createrequest)
- [getPluginTranslations](/docs/testclasses/Session.md#getplugintranslations)
- [serialize](/docs/testclasses/Session.md#serialize)
- [signTransaction](/docs/testclasses/Session.md#signtransaction)
- [transact](/docs/testclasses/Session.md#transact)
- [updateRequest](/docs/testclasses/Session.md#updaterequest)
- [upgradeTransaction](/docs/testclasses/Session.md#upgradetransaction)

## Constructors

### constructor

• **new Session**(`args`, `options?`)

The constructor of the `Session` class.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SessionArgs`](/docs/testinterfaces/SessionArgs.md) | - |
| `options` | [`SessionOptions`](/docs/testinterfaces/SessionOptions.md) | SessionOptions |

#### Defined in

[src/session.ts:105](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L105)

## Properties

### abiCache

• `Readonly` **abiCache**: [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

#### Defined in

[src/session.ts:87](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L87)

___

### abis

• `Readonly` **abis**: [`TransactABIDef`](/docs/testinterfaces/TransactABIDef.md)[] = `[]`

#### Defined in

[src/session.ts:86](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L86)

___

### allowModify

• `Readonly` **allowModify**: `boolean` = `true`

#### Defined in

[src/session.ts:88](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L88)

___

### appName

• `Optional` `Readonly` **appName**: `string`

#### Defined in

[src/session.ts:85](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L85)

___

### broadcast

• `Readonly` **broadcast**: `boolean` = `true`

#### Defined in

[src/session.ts:89](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L89)

___

### chain

• `Readonly` **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/session.ts:90](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L90)

___

### expireSeconds

• `Readonly` **expireSeconds**: `number` = `120`

#### Defined in

[src/session.ts:91](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L91)

___

### fetch

• `Readonly` **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/session.ts:92](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L92)

___

### permissionLevel

• `Readonly` **permissionLevel**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

[src/session.ts:93](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L93)

___

### storage

• `Optional` `Readonly` **storage**: [`SessionStorage`](/docs/testinterfaces/SessionStorage.md)

#### Defined in

[src/session.ts:94](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L94)

___

### transactPlugins

• `Readonly` **transactPlugins**: [`TransactPlugin`](/docs/testinterfaces/TransactPlugin.md)[]

#### Defined in

[src/session.ts:95](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L95)

___

### transactPluginsOptions

• `Readonly` **transactPluginsOptions**: [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions) = `{}`

#### Defined in

[src/session.ts:96](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L96)

___

### ui

• `Optional` `Readonly` **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/session.ts:97](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L97)

___

### walletPlugin

• `Readonly` **walletPlugin**: [`WalletPlugin`](/docs/testinterfaces/WalletPlugin.md)

#### Defined in

[src/session.ts:98](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L98)

## Accessors

### actor

• `get` **actor**(): [`Name`](/docs/testclasses/Name.md)

Returns the name of the actor that is being used for this session.

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Defined in

[src/session.ts:168](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L168)

___

### client

• `get` **client**(): [`APIClient`](/docs/testclasses/APIClient.md)

Returns an APIClient configured for this session.

#### Returns

[`APIClient`](/docs/testclasses/APIClient.md)

#### Defined in

[src/session.ts:182](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L182)

___

### permission

• `get` **permission**(): [`Name`](/docs/testclasses/Name.md)

Returns the name of the permission that is being used for this session.

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Defined in

[src/session.ts:175](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L175)

## Methods

### cloneRequest

▸ **cloneRequest**(`request`, `abiCache`): [`SigningRequest`](/docs/testclasses/SigningRequest.md)

Create a clone of the given SigningRequest

Overrides: https://github.com/greymass/@wharfkit/signing-request/blob/6fc84b2355577d6461676bff417c76e4f6f2f5c3/src/signing-request.ts#L1112

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) | The SigningRequest to clone |
| `abiCache` | [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md) | The ABICacheInterface to use for the clone |

#### Returns

[`SigningRequest`](/docs/testclasses/SigningRequest.md)

Returns a cloned SigningRequest with updated abiCache and zlib

#### Defined in

[src/session.ts:241](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L241)

___

### createRequest

▸ **createRequest**(`args`, `abiCache`): `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

Convert any provided form of TransactArgs to a SigningRequest

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransactArgs`](/docs/testinterfaces/TransactArgs.md) |
| `abiCache` | [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md) |

#### Returns

`Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

Returns a SigningRequest

#### Defined in

[src/session.ts:263](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L263)

___

### getPluginTranslations

▸ **getPluginTranslations**(`transactPlugin`): [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transactPlugin` | [`TransactPlugin`](/docs/testinterfaces/TransactPlugin.md) \| [`WalletPlugin`](/docs/testinterfaces/WalletPlugin.md) |

#### Returns

[`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

#### Defined in

[src/session.ts:586](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L586)

___

### serialize

▸ **serialize**(): [`SerializedSession`](/docs/testinterfaces/SerializedSession.md)

#### Returns

[`SerializedSession`](/docs/testinterfaces/SerializedSession.md)

#### Defined in

[src/session.ts:578](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L578)

___

### signTransaction

▸ **signTransaction**(`transaction`): `Promise`<[`Signature`](/docs/testclasses/Signature.md)[]\>

Request a signature for a given transaction.

This function will NOT use plugins and will NOT broadcast the transaction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`TransactionType`](/docs/testREADME.md#transactiontype) | A full transaction-like object |

#### Returns

`Promise`<[`Signature`](/docs/testclasses/Signature.md)[]\>

The signature(s) for the transaction

#### Defined in

[src/session.ts:541](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L541)

___

### transact

▸ **transact**(`args`, `options?`): `Promise`<[`TransactResult`](/docs/testinterfaces/TransactResult.md)\>

Perform a transaction using this session.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransactArgs`](/docs/testinterfaces/TransactArgs.md) |
| `options?` | [`TransactOptions`](/docs/testinterfaces/TransactOptions.md) |

#### Returns

`Promise`<[`TransactResult`](/docs/testinterfaces/TransactResult.md)\>

The status and data gathered during the operation.

**`Mermaid`**

- Transaction sequence diagram
flowchart LR
  A((Transact)) --> B{{"Hook(s): beforeSign"}}
  B --> C[Wallet Plugin]
  C --> D{{"Hook(s): afterSign"}}
  D --> E[Broadcast Plugin]
  E --> F{{"Hook(s): afterBroadcast"}}
  F --> G[TransactResult]

#### Defined in

[src/session.ts:333](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L333)

___

### updateRequest

▸ **updateRequest**(`previous`, `modified`, `abiCache`): `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

Update a SigningRequest, ensuring its old metadata is retained.

#### Parameters

| Name | Type |
| :------ | :------ |
| `previous` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) |
| `modified` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) |
| `abiCache` | [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md) |

#### Returns

`Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Defined in

[src/session.ts:296](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L296)

___

### upgradeTransaction

▸ **upgradeTransaction**(`args`): [`TransactArgs`](/docs/testinterfaces/TransactArgs.md)

Templates in any missing fields from partial transactions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`TransactArgs`](/docs/testinterfaces/TransactArgs.md) | TransactArgs |

#### Returns

[`TransactArgs`](/docs/testinterfaces/TransactArgs.md)

TransactArgs

#### Defined in

[src/session.ts:192](https://github.com/wharfkit/session/blob/3f0b05c/src/session.ts#L192)
