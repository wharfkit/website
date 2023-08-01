[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactionContext

# Interface: TransactionContext

Context used to resolve a transaction.
Compatible with the JSON response from a `get_block` call.

## Table of contents

### Properties

- [block\_num](/docs/testinterfaces/TransactionContext.md#block_num)
- [chainId](/docs/testinterfaces/TransactionContext.md#chainid)
- [expiration](/docs/testinterfaces/TransactionContext.md#expiration)
- [expire\_seconds](/docs/testinterfaces/TransactionContext.md#expire_seconds)
- [ref\_block\_num](/docs/testinterfaces/TransactionContext.md#ref_block_num)
- [ref\_block\_prefix](/docs/testinterfaces/TransactionContext.md#ref_block_prefix)
- [timestamp](/docs/testinterfaces/TransactionContext.md#timestamp)

## Properties

### block\_num

• `Optional` **block\_num**: `any`

Block number ref_block_num will be derived from.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:244

___

### chainId

• `Optional` **chainId**: [`ChainIdType`](/docs/testREADME.md#chainidtype)

Chain ID to resolve for, required for multi-chain requests.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:252

___

### expiration

• `Optional` **expiration**: `any`

Expiration timestamp, takes precedence over timestamp and expire_seconds if set.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:250

___

### expire\_seconds

• `Optional` **expire\_seconds**: `any`

How many seconds in the future to set expiration when deriving from timestamp.
Defaults to 60 seconds if unset.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:242

___

### ref\_block\_num

• `Optional` **ref\_block\_num**: `any`

Reference block number, takes precedence over block_num if both is set.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:246

___

### ref\_block\_prefix

• `Optional` **ref\_block\_prefix**: `any`

Reference block prefix.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:248

___

### timestamp

• `Optional` **timestamp**: `any`

Timestamp expiration will be derived from.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:237
