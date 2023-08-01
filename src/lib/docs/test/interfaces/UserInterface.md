[@wharfkit/session - v1.0.0](/docs/testREADME.md) / UserInterface

# Interface: UserInterface

Interface which all 3rd party user interface plugins must implement.

## Implemented by

- [`AbstractUserInterface`](/docs/testclasses/AbstractUserInterface.md)

## Table of contents

### Properties

- [addTranslations](/docs/testinterfaces/UserInterface.md#addtranslations)
- [getTranslate](/docs/testinterfaces/UserInterface.md#gettranslate)
- [onBroadcast](/docs/testinterfaces/UserInterface.md#onbroadcast)
- [onBroadcastComplete](/docs/testinterfaces/UserInterface.md#onbroadcastcomplete)
- [onError](/docs/testinterfaces/UserInterface.md#onerror)
- [onLogin](/docs/testinterfaces/UserInterface.md#onlogin)
- [onLoginComplete](/docs/testinterfaces/UserInterface.md#onlogincomplete)
- [onSign](/docs/testinterfaces/UserInterface.md#onsign)
- [onSignComplete](/docs/testinterfaces/UserInterface.md#onsigncomplete)
- [onTransact](/docs/testinterfaces/UserInterface.md#ontransact)
- [onTransactComplete](/docs/testinterfaces/UserInterface.md#ontransactcomplete)
- [prompt](/docs/testinterfaces/UserInterface.md#prompt)
- [status](/docs/testinterfaces/UserInterface.md#status)
- [translate](/docs/testinterfaces/UserInterface.md#translate)

### Methods

- [login](/docs/testinterfaces/UserInterface.md#login)

## Properties

### addTranslations

• **addTranslations**: (`translations`: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)) => `void`

#### Type declaration

▸ (`translations`): `void`

Programmatically add new localization strings to the  user interface

##### Parameters

| Name | Type |
| :------ | :------ |
| `translations` | [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions) |

##### Returns

`void`

#### Defined in

[src/ui.ts:89](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L89)

___

### getTranslate

• **getTranslate**: (`namespace?`: `string`) => [`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

#### Type declaration

▸ (`namespace?`): [`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

Returns a translator for a specific namespace

##### Parameters

| Name | Type |
| :------ | :------ |
| `namespace?` | `string` |

##### Returns

[`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

#### Defined in

[src/ui.ts:87](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L87)

___

### onBroadcast

• **onBroadcast**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has started broadcasting the transaction *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:77](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L77)

___

### onBroadcastComplete

• **onBroadcastComplete**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has completed broadcasting the transaction *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:79](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L79)

___

### onError

• **onError**: (`error`: `Error`) => `Promise`<`void`\>

#### Type declaration

▸ (`error`): `Promise`<`void`\>

Inform the UI that an error has occurred

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:63](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L63)

___

### onLogin

• **onLogin**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a login call has started *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:65](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L65)

___

### onLoginComplete

• **onLoginComplete**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a login call has completed *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:67](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L67)

___

### onSign

• **onSign**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has started signing the transaction *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:73](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L73)

___

### onSignComplete

• **onSignComplete**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has completed signing the transaction *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:75](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L75)

___

### onTransact

• **onTransact**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has started *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:69](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L69)

___

### onTransactComplete

• **onTransactComplete**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Inform the UI that a transact call has completed *

##### Returns

`Promise`<`void`\>

#### Defined in

[src/ui.ts:71](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L71)

___

### prompt

• **prompt**: (`args`: [`PromptArgs`](/docs/testinterfaces/PromptArgs.md)) => [`Cancelable`](/docs/testinterfaces/Cancelable.md)<[`PromptResponse`](/docs/testinterfaces/PromptResponse.md)\>

#### Type declaration

▸ (`args`): [`Cancelable`](/docs/testinterfaces/Cancelable.md)<[`PromptResponse`](/docs/testinterfaces/PromptResponse.md)\>

Prompt the user with a custom UI element *

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`PromptArgs`](/docs/testinterfaces/PromptArgs.md) |

##### Returns

[`Cancelable`](/docs/testinterfaces/Cancelable.md)<[`PromptResponse`](/docs/testinterfaces/PromptResponse.md)\>

#### Defined in

[src/ui.ts:81](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L81)

___

### status

• **status**: (`message`: `string`) => `void`

#### Type declaration

▸ (`message`): `void`

Update the displayed modal status from a TransactPlugin *

##### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

##### Returns

`void`

#### Defined in

[src/ui.ts:83](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L83)

___

### translate

• **translate**: [`UserInterfaceTranslateFunction`](/docs/testREADME.md#userinterfacetranslatefunction)

Translate a string using the UI's language *

#### Defined in

[src/ui.ts:85](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L85)

## Methods

### login

▸ **login**(`context`): `Promise`<[`UserInterfaceLoginResponse`](/docs/testinterfaces/UserInterfaceLoginResponse.md)\>

Interact with the user to collect the data needed for a [[UserInterfaceLoginResponse]].

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`LoginContext`](/docs/testclasses/LoginContext.md) |

#### Returns

`Promise`<[`UserInterfaceLoginResponse`](/docs/testinterfaces/UserInterfaceLoginResponse.md)\>

#### Defined in

[src/ui.ts:61](https://github.com/wharfkit/session/blob/3f0b05c/src/ui.ts#L61)
