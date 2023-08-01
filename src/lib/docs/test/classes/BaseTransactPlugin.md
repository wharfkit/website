[@wharfkit/session - v1.0.0](/docs/testREADME.md) / BaseTransactPlugin

# Class: BaseTransactPlugin

Abstract class for [[Session.transact]] plugins to extend.

## Hierarchy

- [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)

  ↳ **`BaseTransactPlugin`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/BaseTransactPlugin.md#constructor)

### Properties

- [translations](/docs/testclasses/BaseTransactPlugin.md#translations)

### Accessors

- [id](/docs/testclasses/BaseTransactPlugin.md#id)

### Methods

- [register](/docs/testclasses/BaseTransactPlugin.md#register)

## Constructors

### constructor

• **new BaseTransactPlugin**()

#### Inherited from

[AbstractTransactPlugin](/docs/testclasses/AbstractTransactPlugin.md).[constructor](/docs/testclasses/AbstractTransactPlugin.md#constructor)

## Properties

### translations

• `Optional` **translations**: [`LocaleDefinitions`](/docs/testREADME.md#localedefinitions)

Any translations this plugin requires

#### Inherited from

[AbstractTransactPlugin](/docs/testclasses/AbstractTransactPlugin.md).[translations](/docs/testclasses/AbstractTransactPlugin.md#translations)

#### Defined in

[src/transact.ts:331](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L331)

## Accessors

### id

• `get` **id**(): `string`

A URL friendly (lower case, no spaces, etc) ID for this plugin - Used in serialization

#### Returns

`string`

#### Overrides

AbstractTransactPlugin.id

#### Defined in

[src/transact.ts:337](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L337)

## Methods

### register

▸ **register**(): `void`

A function that registers hooks into the transaction flow

#### Returns

`void`

#### Overrides

[AbstractTransactPlugin](/docs/testclasses/AbstractTransactPlugin.md).[register](/docs/testclasses/AbstractTransactPlugin.md#register)

#### Defined in

[src/transact.ts:340](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L340)
