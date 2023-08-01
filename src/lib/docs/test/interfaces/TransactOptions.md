[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactOptions

# Interface: TransactOptions

Options for the [[Session.transact]] method.

## Table of contents

### Properties

- [abiCache](/docs/testinterfaces/TransactOptions.md#abicache)
- [abis](/docs/testinterfaces/TransactOptions.md#abis)
- [allowModify](/docs/testinterfaces/TransactOptions.md#allowmodify)
- [broadcast](/docs/testinterfaces/TransactOptions.md#broadcast)
- [chain](/docs/testinterfaces/TransactOptions.md#chain)
- [expireSeconds](/docs/testinterfaces/TransactOptions.md#expireseconds)
- [transactPlugins](/docs/testinterfaces/TransactOptions.md#transactplugins)
- [transactPluginsOptions](/docs/testinterfaces/TransactOptions.md#transactpluginsoptions)
- [validatePluginSignatures](/docs/testinterfaces/TransactOptions.md#validatepluginsignatures)

## Properties

### abiCache

• `Optional` **abiCache**: [`ABICacheInterface`](/docs/testinterfaces/ABICacheInterface.md)

An optional ABICacheInterface to control how ABIs are loaded.

#### Defined in

[src/transact.ts:206](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L206)

___

### abis

• `Optional` **abis**: [`TransactABIDef`](/docs/testinterfaces/TransactABIDef.md)[]

An array of ABIs to use when resolving the transaction.

#### Defined in

[src/transact.ts:202](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L202)

___

### allowModify

• `Optional` **allowModify**: `boolean`

Whether to allow the signer to make modifications to the request
(e.g. applying a cosigner action to pay for resources).

Defaults to true if [[broadcast]] is true or unspecified; otherwise false.

#### Defined in

[src/transact.ts:213](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L213)

___

### broadcast

• `Optional` **broadcast**: `boolean`

Whether to broadcast the transaction or just return the signature.
Defaults to true.

#### Defined in

[src/transact.ts:218](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L218)

___

### chain

• `Optional` **chain**: [`Checksum256Type`](/docs/testREADME.md#checksum256type)

Chain to use when configured with multiple chains.

#### Defined in

[src/transact.ts:222](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L222)

___

### expireSeconds

• `Optional` **expireSeconds**: `number`

The number of seconds in the future this transaction will expire.

#### Defined in

[src/transact.ts:226](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L226)

___

### transactPlugins

• `Optional` **transactPlugins**: [`AbstractTransactPlugin`](/docs/testclasses/AbstractTransactPlugin.md)[]

Specific transact plugins to use for this transaction.

#### Defined in

[src/transact.ts:230](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L230)

___

### transactPluginsOptions

• `Optional` **transactPluginsOptions**: [`TransactPluginsOptions`](/docs/testREADME.md#transactpluginsoptions)

Optional parameters passed in to the various transact plugins.

#### Defined in

[src/transact.ts:234](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L234)

___

### validatePluginSignatures

• `Optional` **validatePluginSignatures**: `boolean`

Optional parameter to control whether signatures returned from plugins are validated.

#### Defined in

[src/transact.ts:238](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L238)
