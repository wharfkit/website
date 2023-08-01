[@wharfkit/session - v1.0.0](/docs/testREADME.md) / LoginContextOptions

# Interface: LoginContextOptions

Options for creating a new context for a [[Kit.login]] call.

## Table of contents

### Properties

- [appName](/docs/testinterfaces/LoginContextOptions.md#appname)
- [chain](/docs/testinterfaces/LoginContextOptions.md#chain)
- [chains](/docs/testinterfaces/LoginContextOptions.md#chains)
- [fetch](/docs/testinterfaces/LoginContextOptions.md#fetch)
- [loginPlugins](/docs/testinterfaces/LoginContextOptions.md#loginplugins)
- [permissionLevel](/docs/testinterfaces/LoginContextOptions.md#permissionlevel)
- [ui](/docs/testinterfaces/LoginContextOptions.md#ui)
- [walletPlugins](/docs/testinterfaces/LoginContextOptions.md#walletplugins)

## Properties

### appName

• `Optional` **appName**: [`NameType`](/docs/testREADME.md#nametype)

#### Defined in

[src/login.ts:25](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L25)

___

### chain

• `Optional` **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/login.ts:27](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L27)

___

### chains

• `Optional` **chains**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)[]

#### Defined in

[src/login.ts:28](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L28)

___

### fetch

• **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/login.ts:29](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L29)

___

### loginPlugins

• `Optional` **loginPlugins**: [`AbstractLoginPlugin`](/docs/testclasses/AbstractLoginPlugin.md)[]

#### Defined in

[src/login.ts:30](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L30)

___

### permissionLevel

• `Optional` **permissionLevel**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

#### Defined in

[src/login.ts:31](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L31)

___

### ui

• **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/login.ts:33](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L33)

___

### walletPlugins

• `Optional` **walletPlugins**: [`UserInterfaceWalletPlugin`](/docs/testinterfaces/UserInterfaceWalletPlugin.md)[]

#### Defined in

[src/login.ts:32](https://github.com/wharfkit/session/blob/3f0b05c/src/login.ts#L32)
