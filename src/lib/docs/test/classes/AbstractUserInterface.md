[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AbstractUserInterface

# Class: AbstractUserInterface

Abstract class which all 3rd party [[UserInterface]] implementations may extend.

## Implements

- [`UserInterface`](/docs/testinterfaces/UserInterface.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/AbstractUserInterface.md#constructor)

### Methods

- [addTranslations](/docs/testclasses/AbstractUserInterface.md#addtranslations)
- [getTranslate](/docs/testclasses/AbstractUserInterface.md#gettranslate)
- [login](/docs/testclasses/AbstractUserInterface.md#login)
- [onBroadcast](/docs/testclasses/AbstractUserInterface.md#onbroadcast)
- [onBroadcastComplete](/docs/testclasses/AbstractUserInterface.md#onbroadcastcomplete)
- [onError](/docs/testclasses/AbstractUserInterface.md#onerror)
- [onLogin](/docs/testclasses/AbstractUserInterface.md#onlogin)
- [onLoginComplete](/docs/testclasses/AbstractUserInterface.md#onlogincomplete)
- [onSign](/docs/testclasses/AbstractUserInterface.md#onsign)
- [onSignComplete](/docs/testclasses/AbstractUserInterface.md#onsigncomplete)
- [onTransact](/docs/testclasses/AbstractUserInterface.md#ontransact)
- [onTransactComplete](/docs/testclasses/AbstractUserInterface.md#ontransactcomplete)
- [prompt](/docs/testclasses/AbstractUserInterface.md#prompt)
- [status](/docs/testclasses/AbstractUserInterface.md#status)
- [translate](/docs/testclasses/AbstractUserInterface.md#translate)

## Constructors

### constructor

• **new AbstractUserInterface**()

## Methods

### addTranslations

▸ **addTranslations**(`translations`): `void`

Programmatically add new localization strings to the  user interface

#### Parameters

| Name | Type |
| :------ | :------ |
| `translations` | [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions) |

#### Returns

`void`

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[addTranslations](/docs/testinterfaces/UserInterface.md#addtranslations)

#### Defined in

[src/ui.ts:121](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L121)

___

### getTranslate

▸ **getTranslate**(`namespace?`): [`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

Returns a translator for a specific namespace

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace?` | `string` |

#### Returns

[`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[getTranslate](/docs/testinterfaces/UserInterface.md#gettranslate)

#### Defined in

[src/ui.ts:118](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L118)

___

### login

▸ `Abstract` **login**(`context`): `Promise`<[`UserInterfaceLoginResponse`](/docs/testinterfaces/UserInterfaceLoginResponse.md)\>

Interact with the user to collect the data needed for a [[UserInterfaceLoginResponse]].

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`LoginContext`](/docs/testclasses/LoginContext.md) |

#### Returns

`Promise`<[`UserInterfaceLoginResponse`](/docs/testinterfaces/UserInterfaceLoginResponse.md)\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[login](/docs/testinterfaces/UserInterface.md#login)

#### Defined in

[src/ui.ts:96](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L96)

___

### onBroadcast

▸ `Abstract` **onBroadcast**(): `Promise`<`void`\>

Inform the UI that a transact call has started broadcasting the transaction *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onBroadcast](/docs/testinterfaces/UserInterface.md#onbroadcast)

#### Defined in

[src/ui.ts:104](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L104)

___

### onBroadcastComplete

▸ `Abstract` **onBroadcastComplete**(): `Promise`<`void`\>

Inform the UI that a transact call has completed broadcasting the transaction *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onBroadcastComplete](/docs/testinterfaces/UserInterface.md#onbroadcastcomplete)

#### Defined in

[src/ui.ts:105](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L105)

___

### onError

▸ `Abstract` **onError**(`error`): `Promise`<`void`\>

Inform the UI that an error has occurred

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onError](/docs/testinterfaces/UserInterface.md#onerror)

#### Defined in

[src/ui.ts:97](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L97)

___

### onLogin

▸ `Abstract` **onLogin**(`options?`): `Promise`<`void`\>

Inform the UI that a login call has started *

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`LoginOptions`](/docs/testinterfaces/LoginOptions.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onLogin](/docs/testinterfaces/UserInterface.md#onlogin)

#### Defined in

[src/ui.ts:98](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L98)

___

### onLoginComplete

▸ `Abstract` **onLoginComplete**(): `Promise`<`void`\>

Inform the UI that a login call has completed *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onLoginComplete](/docs/testinterfaces/UserInterface.md#onlogincomplete)

#### Defined in

[src/ui.ts:99](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L99)

___

### onSign

▸ `Abstract` **onSign**(): `Promise`<`void`\>

Inform the UI that a transact call has started signing the transaction *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onSign](/docs/testinterfaces/UserInterface.md#onsign)

#### Defined in

[src/ui.ts:102](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L102)

___

### onSignComplete

▸ `Abstract` **onSignComplete**(): `Promise`<`void`\>

Inform the UI that a transact call has completed signing the transaction *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onSignComplete](/docs/testinterfaces/UserInterface.md#onsigncomplete)

#### Defined in

[src/ui.ts:103](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L103)

___

### onTransact

▸ `Abstract` **onTransact**(): `Promise`<`void`\>

Inform the UI that a transact call has started *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onTransact](/docs/testinterfaces/UserInterface.md#ontransact)

#### Defined in

[src/ui.ts:100](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L100)

___

### onTransactComplete

▸ `Abstract` **onTransactComplete**(): `Promise`<`void`\>

Inform the UI that a transact call has completed *

#### Returns

`Promise`<`void`\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[onTransactComplete](/docs/testinterfaces/UserInterface.md#ontransactcomplete)

#### Defined in

[src/ui.ts:101](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L101)

___

### prompt

▸ `Abstract` **prompt**(`args`): [`Cancelable`](/docs/testinterfaces/Cancelable.md)<[`PromptResponse`](/docs/testinterfaces/PromptResponse.md)\>

Prompt the user with a custom UI element *

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`PromptArgs`](/docs/testinterfaces/PromptArgs.md) |

#### Returns

[`Cancelable`](/docs/testinterfaces/Cancelable.md)<[`PromptResponse`](/docs/testinterfaces/PromptResponse.md)\>

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[prompt](/docs/testinterfaces/UserInterface.md#prompt)

#### Defined in

[src/ui.ts:106](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L106)

___

### status

▸ `Abstract` **status**(`message`): `void`

Update the displayed modal status from a TransactPlugin *

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Implementation of

[UserInterface](/docs/testinterfaces/UserInterface.md).[status](/docs/testinterfaces/UserInterface.md#status)

#### Defined in

[src/ui.ts:107](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L107)

___

### translate

▸ **translate**(`key`, `options?`, `namespace?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options?` | [`UserInterfaceTranslateOptions`](/docs/testinterfaces/UserInterfaceTranslateOptions.md) |
| `namespace?` | `string` |

#### Returns

`string`

#### Implementation of

UserInterface.translate

#### Defined in

[src/ui.ts:108](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L108)
