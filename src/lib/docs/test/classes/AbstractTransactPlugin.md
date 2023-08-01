[@wharfkit/session - v1.0.0](/docs/testREADME.md) / AbstractTransactPlugin

# Class: AbstractTransactPlugin

Abstract class for [[Session.transact]] plugins to extend.

## Hierarchy

- **`AbstractTransactPlugin`**

  ↳ [`BaseTransactPlugin`](/docs/testclasses/BaseTransactPlugin.md)

## Implements

- [`TransactPlugin`](/docs/testinterfaces/TransactPlugin.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/AbstractTransactPlugin.md#constructor)

### Properties

- [translations](/docs/testclasses/AbstractTransactPlugin.md#translations)

### Accessors

- [id](/docs/testclasses/AbstractTransactPlugin.md#id)

### Methods

- [register](/docs/testclasses/AbstractTransactPlugin.md#register)

## Constructors

### constructor

• **new AbstractTransactPlugin**()

## Properties

### translations

• `Optional` **translations**: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

Any translations this plugin requires

#### Implementation of

[TransactPlugin](/docs/testinterfaces/TransactPlugin.md).[translations](/docs/testinterfaces/TransactPlugin.md#translations)

#### Defined in

[src/transact.ts:331](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L331)

## Accessors

### id

• `Abstract` `get` **id**(): `string`

A URL friendly (lower case, no spaces, etc) ID for this plugin - Used in serialization

#### Returns

`string`

#### Implementation of

TransactPlugin.id

#### Defined in

[src/transact.ts:333](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L333)

## Methods

### register

▸ `Abstract` **register**(`context`): `void`

A function that registers hooks into the transaction flow

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`TransactContext`](/docs/testclasses/TransactContext.md) |

#### Returns

`void`

#### Implementation of

[TransactPlugin](/docs/testinterfaces/TransactPlugin.md).[register](/docs/testinterfaces/TransactPlugin.md#register)

#### Defined in

[src/transact.ts:332](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L332)
