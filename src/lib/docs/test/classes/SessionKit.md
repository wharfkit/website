[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SessionKit

# Class: SessionKit

Request a session from an account.

## Table of contents

### Constructors

- [constructor](/docs/testclasses/SessionKit.md#constructor)

### Properties

- [abis](/docs/testclasses/SessionKit.md#abis)
- [allowModify](/docs/testclasses/SessionKit.md#allowmodify)
- [appName](/docs/testclasses/SessionKit.md#appname)
- [chains](/docs/testclasses/SessionKit.md#chains)
- [expireSeconds](/docs/testclasses/SessionKit.md#expireseconds)
- [fetch](/docs/testclasses/SessionKit.md#fetch)
- [loginPlugins](/docs/testclasses/SessionKit.md#loginplugins)
- [storage](/docs/testclasses/SessionKit.md#storage)
- [transactPlugins](/docs/testclasses/SessionKit.md#transactplugins)
- [transactPluginsOptions](/docs/testclasses/SessionKit.md#transactpluginsoptions)
- [ui](/docs/testclasses/SessionKit.md#ui)
- [walletPlugins](/docs/testclasses/SessionKit.md#walletplugins)

### Methods

- [getChainDefinition](/docs/testclasses/SessionKit.md#getchaindefinition)
- [getSessionOptions](/docs/testclasses/SessionKit.md#getsessionoptions)
- [getSessions](/docs/testclasses/SessionKit.md#getsessions)
- [login](/docs/testclasses/SessionKit.md#login)
- [logout](/docs/testclasses/SessionKit.md#logout)
- [persistSession](/docs/testclasses/SessionKit.md#persistsession)
- [restore](/docs/testclasses/SessionKit.md#restore)
- [restoreAll](/docs/testclasses/SessionKit.md#restoreall)

## Constructors

### constructor

• **new SessionKit**(`args`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`SessionKitArgs`](/docs/testinterfaces/SessionKitArgs.md) |
| `options` | [`SessionKitOptions`](/docs/testinterfaces/SessionKitOptions.md) |

#### Defined in

[src/kit.ts:90](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L90)

## Properties

### abis

• `Readonly` **abis**: [`TransactABIDef`](/docs/testinterfaces/TransactABIDef.md)[] = `[]`

#### Defined in

[src/kit.ts:77](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L77)

___

### allowModify

• `Readonly` **allowModify**: `boolean` = `true`

#### Defined in

[src/kit.ts:78](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L78)

___

### appName

• `Readonly` **appName**: `string`

#### Defined in

[src/kit.ts:79](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L79)

___

### chains

• `Readonly` **chains**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)[]

#### Defined in

[src/kit.ts:80](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L80)

___

### expireSeconds

• `Readonly` **expireSeconds**: `number` = `120`

#### Defined in

[src/kit.ts:81](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L81)

___

### fetch

• `Readonly` **fetch**: [`Fetch`](/docs/testREADME.md#fetch)

#### Defined in

[src/kit.ts:82](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L82)

___

### loginPlugins

• `Readonly` **loginPlugins**: [`AbstractLoginPlugin`](/docs/testclasses/AbstractLoginPlugin.md)[]

#### Defined in

[src/kit.ts:83](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L83)

___

### storage

• `Readonly` **storage**: [`SessionStorage`](/docs/testinterfaces/SessionStorage.md)

#### Defined in

[src/kit.ts:84](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L84)

___

### transactPlugins

• `Readonly` **transactPlugins**: [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)[]

#### Defined in

[src/kit.ts:85](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L85)

___

### transactPluginsOptions

• `Readonly` **transactPluginsOptions**: [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions) = `{}`

#### Defined in

[src/kit.ts:86](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L86)

___

### ui

• `Readonly` **ui**: [`UserInterface`](/docs/testinterfaces/UserInterface.md)

#### Defined in

[src/kit.ts:87](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L87)

___

### walletPlugins

• `Readonly` **walletPlugins**: [`WalletPlugin`](/docs/testinterfaces/WalletPlugin.md)[]

#### Defined in

[src/kit.ts:88](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L88)

## Methods

### getChainDefinition

▸ **getChainDefinition**(`id`, `override?`): [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |
| `override?` | [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)[] |

#### Returns

[`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

#### Defined in

[src/kit.ts:140](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L140)

___

### getSessionOptions

▸ **getSessionOptions**(`options?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`LoginOptions`](/docs/testinterfaces/LoginOptions.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `abis` | [`TransactABIDef`](/docs/testinterfaces/TransactABIDef.md)[] |
| `allowModify` | `boolean` |
| `appName` | `string` |
| `expireSeconds` | `number` |
| `fetch` | [`Fetch`](/docs/testREADME.md#fetch) |
| `storage` | [`SessionStorage`](/docs/testinterfaces/SessionStorage.md) |
| `transactPlugins` | [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)[] |
| `transactPluginsOptions` | [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions) |
| `ui` | [`UserInterface`](/docs/testinterfaces/UserInterface.md) |

#### Defined in

[src/kit.ts:525](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L525)

___

### getSessions

▸ **getSessions**(): `Promise`<[`SerializedSession`](/docs/testinterfaces/SerializedSession.md)[]\>

#### Returns

`Promise`<[`SerializedSession`](/docs/testinterfaces/SerializedSession.md)[]\>

#### Defined in

[src/kit.ts:505](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L505)

___

### login

▸ **login**(`options?`): `Promise`<[`LoginResult`](/docs/testinterfaces/LoginResult.md)\>

Request a session from an account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`LoginOptions`](/docs/testinterfaces/LoginOptions.md) |

#### Returns

`Promise`<[`LoginResult`](/docs/testinterfaces/LoginResult.md)\>

**`Mermaid`**

- Login sequence diagram
flowchart LR
  A((Login)) --> B{{"Hook(s): beforeLogin"}}
  B --> C[Wallet Plugin]
  C --> D{{"Hook(s): afterLogin"}}
  D --> E[Session]

#### Defined in

[src/kit.ts:160](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L160)

___

### logout

▸ **logout**(`session?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `session?` | [`SerializedSession`](/docs/testinterfaces/SerializedSession.md) \| [`Session`](/docs/testclasses/Session.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/kit.ts:307](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L307)

___

### persistSession

▸ **persistSession**(`session`, `setAsDefault?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `session` | [`Session`](/docs/testclasses/Session.md) | `undefined` |
| `setAsDefault` | `boolean` | `true` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/kit.ts:450](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L450)

___

### restore

▸ **restore**(`args?`, `options?`): `Promise`<`undefined` \| [`Session`](/docs/testclasses/Session.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`RestoreArgs`](/docs/testinterfaces/RestoreArgs.md) |
| `options?` | [`LoginOptions`](/docs/testinterfaces/LoginOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Session`](/docs/testclasses/Session.md)\>

#### Defined in

[src/kit.ts:335](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L335)

___

### restoreAll

▸ **restoreAll**(): `Promise`<[`Session`](/docs/testclasses/Session.md)[]\>

#### Returns

`Promise`<[`Session`](/docs/testclasses/Session.md)[]\>

#### Defined in

[src/kit.ts:436](https://github.com/wharfkit/session/blob/3f0b05c/src/kit.ts#L436)
