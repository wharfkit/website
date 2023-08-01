[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactContextOptions

# Interface: TransactContextOptions

Options for creating a new context for a [[Session.transact]] call.

## Table of contents

### Properties

- [abiCache](/docs/testinterfaces/TransactContextOptions.md#abicache)
- [appName](/docs/testinterfaces/TransactContextOptions.md#appname)
- [chain](/docs/testinterfaces/TransactContextOptions.md#chain)
- [client](/docs/testinterfaces/TransactContextOptions.md#client)
- [createRequest](/docs/testinterfaces/TransactContextOptions.md#createrequest)
- [fetch](/docs/testinterfaces/TransactContextOptions.md#fetch)
- [permissionLevel](/docs/testinterfaces/TransactContextOptions.md#permissionlevel)
- [storage](/docs/testinterfaces/TransactContextOptions.md#storage)
- [transactPlugins](/docs/testinterfaces/TransactContextOptions.md#transactplugins)
- [transactPluginsOptions](/docs/testinterfaces/TransactContextOptions.md#transactpluginsoptions)
- [ui](/docs/testinterfaces/TransactContextOptions.md#ui)

## Properties

### abiCache

• **abiCache**: [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

#### Defined in

[src/transact.ts:62](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L62)

___

### appName

• `Optional` **appName**: [`NameType`](/docs/testREADME.md#nametype)

#### Defined in

[src/transact.ts:63](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L63)

___

### chain

• **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/transact.ts:64](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L64)

___

### client

• **client**: [`APIClient`](/docs/testclasses/APIClient.md)

#### Defined in

[src/transact.ts:65](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L65)

___

### createRequest

• **createRequest**: (`args`: [`TransactArgs`](/docs/testinterfaces/TransactArgs.md)) => `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Type declaration

▸ (`args`): `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransactArgs`](/docs/testinterfaces/TransactArgs.md) |

##### Returns

`Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Defined in

[src/transact.ts:66](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L66)

___

### fetch

• **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/transact.ts:67](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L67)

___

### permissionLevel

• **permissionLevel**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

[src/transact.ts:68](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L68)

___

### storage

• `Optional` **storage**: [`SessionStorage`](/docs/testinterfaces/SessionStorage.md)

#### Defined in

[src/transact.ts:69](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L69)

___

### transactPlugins

• `Optional` **transactPlugins**: [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)[]

#### Defined in

[src/transact.ts:70](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L70)

___

### transactPluginsOptions

• `Optional` **transactPluginsOptions**: [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions)

#### Defined in

[src/transact.ts:71](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L71)

___

### ui

• `Optional` **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/transact.ts:72](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L72)
