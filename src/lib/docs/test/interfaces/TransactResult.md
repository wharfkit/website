[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactResult

# Interface: TransactResult

The response from a [[Session.transact]] call.

## Table of contents

### Properties

- [chain](/docs/testinterfaces/TransactResult.md#chain)
- [request](/docs/testinterfaces/TransactResult.md#request)
- [resolved](/docs/testinterfaces/TransactResult.md#resolved)
- [response](/docs/testinterfaces/TransactResult.md#response)
- [revisions](/docs/testinterfaces/TransactResult.md#revisions)
- [signatures](/docs/testinterfaces/TransactResult.md#signatures)
- [signer](/docs/testinterfaces/TransactResult.md#signer)
- [transaction](/docs/testinterfaces/TransactResult.md#transaction)

## Properties

### chain

• **chain**: [`ChainDefinition`](/docs/testclasses/ChainDefinition.md)

The chain that was used.

#### Defined in

[src/transact.ts:298](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L298)

___

### request

• **request**: [`SigningRequest`](/docs/testclasses/SigningRequest.md)

The SigningRequest representation of the transaction.

#### Defined in

[src/transact.ts:300](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L300)

___

### resolved

• **resolved**: `undefined` \| [`ResolvedSigningRequest`](/docs/testclasses/ResolvedSigningRequest.md)

The ResolvedSigningRequest of the transaction

#### Defined in

[src/transact.ts:302](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L302)

___

### response

• `Optional` **response**: `Object`

The response from the API after sending the transaction, only present if transaction was broadcast.

#### Index signature

▪ [key: `string`]: `any`

#### Defined in

[src/transact.ts:304](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L304)

___

### revisions

• **revisions**: [`TransactRevisions`](/docs/testclasses/TransactRevisions.md)

An array containing revisions of the transaction as modified by plugins as ESR payloads

#### Defined in

[src/transact.ts:306](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L306)

___

### signatures

• **signatures**: [`Signature`](/docs/testclasses/Signature.md)[]

The transaction signatures.

#### Defined in

[src/transact.ts:308](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L308)

___

### signer

• **signer**: [`PermissionLevel`](/docs/testclasses/PermissionLevel.md)

The signer authority.

#### Defined in

[src/transact.ts:310](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L310)

___

### transaction

• **transaction**: `undefined` \| [`ResolvedTransaction`](/docs/testinterfaces/ResolvedTransaction.md)

The resulting transaction.

#### Defined in

[src/transact.ts:312](https://github.com/wharfkit/session/blob/3f0b05c/src/transact.ts#L312)
