[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SignedTransaction

# Class: SignedTransaction

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Transaction`](/docs/testclasses/Transaction.md)

  ↳ **`SignedTransaction`**

## Table of contents

### Properties

- [actions](/docs/testclasses/SignedTransaction.md#actions)
- [context\_free\_actions](/docs/testclasses/SignedTransaction.md#context_free_actions)
- [context\_free\_data](/docs/testclasses/SignedTransaction.md#context_free_data)
- [delay\_sec](/docs/testclasses/SignedTransaction.md#delay_sec)
- [expiration](/docs/testclasses/SignedTransaction.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testclasses/SignedTransaction.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testclasses/SignedTransaction.md#max_net_usage_words)
- [ref\_block\_num](/docs/testclasses/SignedTransaction.md#ref_block_num)
- [ref\_block\_prefix](/docs/testclasses/SignedTransaction.md#ref_block_prefix)
- [signatures](/docs/testclasses/SignedTransaction.md#signatures)
- [transaction\_extensions](/docs/testclasses/SignedTransaction.md#transaction_extensions)
- [abiBase](/docs/testclasses/SignedTransaction.md#abibase)
- [abiFields](/docs/testclasses/SignedTransaction.md#abifields)
- [abiName](/docs/testclasses/SignedTransaction.md#abiname)

### Accessors

- [id](/docs/testclasses/SignedTransaction.md#id)
- [transaction](/docs/testclasses/SignedTransaction.md#transaction)
- [structFields](/docs/testclasses/SignedTransaction.md#structfields)

### Methods

- [equals](/docs/testclasses/SignedTransaction.md#equals)
- [signingData](/docs/testclasses/SignedTransaction.md#signingdata)
- [signingDigest](/docs/testclasses/SignedTransaction.md#signingdigest)
- [from](/docs/testclasses/SignedTransaction.md#from)

## Properties

### actions

• **actions**: [`Action`](/docs/testclasses/Action.md)[]

The actions in the transaction.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[actions](/docs/testclasses/Transaction.md#actions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1290

___

### context\_free\_actions

• **context\_free\_actions**: [`Action`](/docs/testclasses/Action.md)[]

The context free actions in the transaction.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[context_free_actions](/docs/testclasses/Transaction.md#context_free_actions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1288

___

### context\_free\_data

• **context\_free\_data**: [`Bytes`](/docs/testclasses/Bytes.md)[]

Context-free action data, for each context-free action, there is an entry here.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1314

___

### delay\_sec

• **delay\_sec**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Number of seconds to delay this transaction for during which it may be canceled.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[delay_sec](/docs/testclasses/Transaction.md#delay_sec)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1260

___

### expiration

• **expiration**: [`TimePointSec`](/docs/testclasses/TimePointSec.md)

The time at which a transaction expires.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[expiration](/docs/testclasses/Transaction.md#expiration)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1250

___

### max\_cpu\_usage\_ms

• **max\_cpu\_usage\_ms**: [`UInt8`](/docs/testclasses/UInt8.md)

Upper limit on the total CPU time billed for this transaction.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[max_cpu_usage_ms](/docs/testclasses/Transaction.md#max_cpu_usage_ms)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1258

___

### max\_net\_usage\_words

• **max\_net\_usage\_words**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[max_net_usage_words](/docs/testclasses/Transaction.md#max_net_usage_words)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1256

___

### ref\_block\_num

• **ref\_block\_num**: [`UInt16`](/docs/testclasses/UInt16.md)

*Specifies a block num in the last 2^16 blocks.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[ref_block_num](/docs/testclasses/Transaction.md#ref_block_num)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1252

___

### ref\_block\_prefix

• **ref\_block\_prefix**: [`UInt32`](/docs/testclasses/UInt32.md)

Specifies the lower 32 bits of the block id.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[ref_block_prefix](/docs/testclasses/Transaction.md#ref_block_prefix)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1254

___

### signatures

• **signatures**: [`Signature`](/docs/testclasses/Signature.md)[]

List of signatures.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1312

___

### transaction\_extensions

• **transaction\_extensions**: [`TransactionExtension`](/docs/testclasses/TransactionExtension.md)[]

Transaction extensions.

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[transaction_extensions](/docs/testclasses/Transaction.md#transaction_extensions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1292

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[abiBase](/docs/testclasses/Transaction.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[abiFields](/docs/testclasses/Transaction.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[abiName](/docs/testclasses/Transaction.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### id

• `get` **id**(): [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Overrides

Transaction.id

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1317

___

### transaction

• `get` **transaction**(): [`Transaction`](/docs/testclasses/Transaction.md)

The transaction without the signatures.

#### Returns

[`Transaction`](/docs/testclasses/Transaction.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1316

___

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

Transaction.structFields

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:696

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this transaction is equal to given transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`TransactionType`](/docs/testREADME.md#transactiontype) |

#### Returns

`boolean`

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[equals](/docs/testclasses/Transaction.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1298

___

### signingData

▸ **signingData**(`chainId`): [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[signingData](/docs/testclasses/Transaction.md#signingdata)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1301

___

### signingDigest

▸ **signingDigest**(`chainId`): [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Inherited from

[Transaction](/docs/testclasses/Transaction.md).[signingDigest](/docs/testclasses/Transaction.md#signingdigest)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1300

___

### from

▸ `Static` **from**(`object`): [`SignedTransaction`](/docs/testclasses/SignedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`SignedTransactionType`](/docs/testREADME.md#signedtransactiontype) |

#### Returns

[`SignedTransaction`](/docs/testclasses/SignedTransaction.md)

#### Overrides

[Transaction](/docs/testclasses/Transaction.md).[from](/docs/testclasses/Transaction.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1318
