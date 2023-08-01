[@wharfkit/session - v1.0.0](/docs/testREADME.md) / LoginContext

# Class: LoginContext

Temporary context created for the duration of a [[Kit.login]] call.

This context is used to store the state of the login request and
provide a way for plugins to add hooks into the process.

## Table of contents

### Constructors

- [constructor](/docs/testclasses/LoginContext.md#constructor)

### Properties

- [appName](/docs/testclasses/LoginContext.md#appname)
- [chain](/docs/testclasses/LoginContext.md#chain)
- [chains](/docs/testclasses/LoginContext.md#chains)
- [fetch](/docs/testclasses/LoginContext.md#fetch)
- [hooks](/docs/testclasses/LoginContext.md#hooks)
- [permissionLevel](/docs/testclasses/LoginContext.md#permissionlevel)
- [ui](/docs/testclasses/LoginContext.md#ui)
- [uiRequirements](/docs/testclasses/LoginContext.md#uirequirements)
- [walletPlugins](/docs/testclasses/LoginContext.md#walletplugins)

### Accessors

- [esrOptions](/docs/testclasses/LoginContext.md#esroptions)

### Methods

- [addHook](/docs/testclasses/LoginContext.md#addhook)
- [getClient](/docs/testclasses/LoginContext.md#getclient)

## Constructors

### constructor

• **new LoginContext**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`LoginContextOptions`](/docs/testinterfaces/LoginContextOptions.md) |

#### Defined in

[src/login.ts:73](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L73)

## Properties

### appName

• `Optional` **appName**: `string`

#### Defined in

[src/login.ts:55](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L55)

___

### chain

• `Optional` **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/login.ts:57](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L57)

___

### chains

• **chains**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)[] = `[]`

#### Defined in

[src/login.ts:58](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L58)

___

### fetch

• **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/login.ts:59](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L59)

___

### hooks

• **hooks**: [`LoginHooks`](/docs/testinterfaces/LoginHooks.md)

#### Defined in

[src/login.ts:60](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L60)

___

### permissionLevel

• `Optional` **permissionLevel**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

[src/login.ts:64](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L64)

___

### ui

• **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/login.ts:65](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L65)

___

### uiRequirements

• **uiRequirements**: [`UserInterfaceRequirements`](/docs/testinterfaces/UserInterfaceRequirements.md)

#### Defined in

[src/login.ts:66](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L66)

___

### walletPlugins

• **walletPlugins**: [`UserInterfaceWalletPlugin`](/docs/testinterfaces/UserInterfaceWalletPlugin.md)[] = `[]`

#### Defined in

[src/login.ts:72](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L72)

## Accessors

### esrOptions

• `get` **esrOptions**(): [`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md)

#### Returns

[`SigningRequestEncodingOptions`](/docs/testinterfaces/SigningRequestEncodingOptions.md)

#### Defined in

[src/login.ts:96](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L96)

## Methods

### addHook

▸ **addHook**(`t`, `hook`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | [`LoginHookTypes`](/docs/testenums/LoginHookTypes.md) |
| `hook` | [`LoginHook`](/docs/testREADME.md#loginhook) |

#### Returns

`void`

#### Defined in

[src/login.ts:90](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L90)

___

### getClient

▸ **getClient**(`chain`): [`APIClient`](/docs/testclasses/APIClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`ChainDefinition`](/docs/testclasses/ChainDefinition.md) |

#### Returns

[`APIClient`](/docs/testclasses/APIClient.md)

#### Defined in

[src/login.ts:93](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L93)
