[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactPlugin

# Interface: TransactPlugin

Interface which a [[Session.transact]] plugin must implement.

## Implemented by

- [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)

## Table of contents

### Properties

- [register](/docs/testinterfaces/TransactPlugin.md#register)
- [translations](/docs/testinterfaces/TransactPlugin.md#translations)

### Accessors

- [id](/docs/testinterfaces/TransactPlugin.md#id)

## Properties

### register

• **register**: (`context`: [`TransactContext`](/docs/testclasses/TransactContext.md)) => `void`

#### Type declaration

▸ (`context`): `void`

A function that registers hooks into the transaction flow

##### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`TransactContext`](/docs/testclasses/TransactContext.md) |

##### Returns

`void`

#### Defined in

[src/transact.ts:324](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L324)

___

### translations

• `Optional` **translations**: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

Any translations this plugin requires

#### Defined in

[src/transact.ts:322](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L322)

## Accessors

### id

• `get` **id**(): `string`

A URL friendly (lower case, no spaces, etc) ID for this plugin - Used in serialization

#### Returns

`string`

#### Defined in

[src/transact.ts:320](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L320)
