[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactContext

# Class: TransactContext

Temporary context created for the duration of a [[Session.transact]] call.

This context is used to store the state of the transact request and
provide a way for plugins to add hooks into the process.

## Table of contents

### Constructors

- [constructor](/docs/testclasses/TransactContext.md#constructor)

### Properties

- [abiCache](/docs/testclasses/TransactContext.md#abicache)
- [appName](/docs/testclasses/TransactContext.md#appname)
- [chain](/docs/testclasses/TransactContext.md#chain)
- [client](/docs/testclasses/TransactContext.md#client)
- [createRequest](/docs/testclasses/TransactContext.md#createrequest)
- [fetch](/docs/testclasses/TransactContext.md#fetch)
- [hooks](/docs/testclasses/TransactContext.md#hooks)
- [info](/docs/testclasses/TransactContext.md#info)
- [permissionLevel](/docs/testclasses/TransactContext.md#permissionlevel)
- [storage](/docs/testclasses/TransactContext.md#storage)
- [transactPluginsOptions](/docs/testclasses/TransactContext.md#transactpluginsoptions)
- [ui](/docs/testclasses/TransactContext.md#ui)

### Accessors

- [accountName](/docs/testclasses/TransactContext.md#accountname)
- [esrOptions](/docs/testclasses/TransactContext.md#esroptions)
- [permissionName](/docs/testclasses/TransactContext.md#permissionname)

### Methods

- [addHook](/docs/testclasses/TransactContext.md#addhook)
- [getInfo](/docs/testclasses/TransactContext.md#getinfo)
- [resolve](/docs/testclasses/TransactContext.md#resolve)

## Constructors

### constructor

• **new TransactContext**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TransactContextOptions`](/docs/testinterfaces/TransactContextOptions.md) |

#### Defined in

[src/transact.ts:99](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L99)

## Properties

### abiCache

• `Readonly` **abiCache**: [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

#### Defined in

[src/transact.ts:82](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L82)

___

### appName

• `Optional` `Readonly` **appName**: `string`

#### Defined in

[src/transact.ts:83](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L83)

___

### chain

• `Readonly` **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/transact.ts:84](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L84)

___

### client

• `Readonly` **client**: [`APIClient`](/docs/testclasses/APIClient.md)

#### Defined in

[src/transact.ts:85](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L85)

___

### createRequest

• `Readonly` **createRequest**: (`args`: [`TransactArgs`](/docs/testinterfaces/TransactArgs.md)) => `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Type declaration

▸ (`args`): `Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`TransactArgs`](/docs/testinterfaces/TransactArgs.md) |

##### Returns

`Promise`<[`SigningRequest`](/docs/testclasses/SigningRequest.md)\>

#### Defined in

[src/transact.ts:86](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L86)

___

### fetch

• `Readonly` **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/transact.ts:87](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L87)

___

### hooks

• `Readonly` **hooks**: [`TransactHooks`](/docs/testinterfaces/TransactHooks.md)

#### Defined in

[src/transact.ts:88](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L88)

___

### info

• **info**: `undefined` \| `GetInfoResponse`

#### Defined in

[src/transact.ts:93](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L93)

___

### permissionLevel

• `Readonly` **permissionLevel**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

[src/transact.ts:94](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L94)

___

### storage

• `Optional` `Readonly` **storage**: [`SessionStorage`](/docs/testinterfaces/SessionStorage.md)

#### Defined in

[src/transact.ts:95](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L95)

___

### transactPluginsOptions

• `Readonly` **transactPluginsOptions**: [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions)

#### Defined in

[src/transact.ts:96](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L96)

___

### ui

• `Optional` `Readonly` **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/transact.ts:97](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L97)

## Accessors

### accountName

• `get` **accountName**(): [`Name`](/docs/testclasses/Name.md)

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Defined in

[src/transact.ts:117](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L117)

___

### esrOptions

• `get` **esrOptions**(): [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md)

#### Returns

[`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md)

#### Defined in

[src/transact.ts:125](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L125)

___

### permissionName

• `get` **permissionName**(): [`Name`](/docs/testclasses/Name.md)

#### Returns

[`Name`](/docs/testclasses/Name.md)

#### Defined in

[src/transact.ts:121](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L121)

## Methods

### addHook

▸ **addHook**(`t`, `hook`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`TransactHookTypes`](/docs/testenums/TransactHookTypes.md) |
| `hook` | [`TransactHookImmutable`](/docs/testREADME.md#transacthookimmutable) \| [`TransactHookMutable`](/docs/testREADME.md#transacthookmutable) |

#### Returns

`void`

#### Defined in

[src/transact.ts:132](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L132)

___

### getInfo

▸ **getInfo**(): `Promise`<`GetInfoResponse`\>

#### Returns

`Promise`<`GetInfoResponse`\>

#### Defined in

[src/transact.ts:146](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L146)

___

### resolve

▸ **resolve**(`request`, `expireSeconds?`): `Promise`<[`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `request` | [`SigningRequest`](/docs/testclasses/SigningRequest.md) | `undefined` |
| `expireSeconds` | `number` | `120` |

#### Returns

`Promise`<[`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)\>

#### Defined in

[src/transact.ts:156](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L156)
