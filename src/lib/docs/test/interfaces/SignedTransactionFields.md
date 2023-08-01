[@wharfkit/session - v1.0.0](/docs/testREADME.md) / SignedTransactionFields

# Interface: SignedTransactionFields

## Hierarchy

- [`TransactionFields`](/docs/testinterfaces/TransactionFields.md)

  ↳ **`SignedTransactionFields`**

## Table of contents

### Properties

- [actions](/docs/testinterfaces/SignedTransactionFields.md#actions)
- [context\_free\_actions](/docs/testinterfaces/SignedTransactionFields.md#context_free_actions)
- [context\_free\_data](/docs/testinterfaces/SignedTransactionFields.md#context_free_data)
- [delay\_sec](/docs/testinterfaces/SignedTransactionFields.md#delay_sec)
- [expiration](/docs/testinterfaces/SignedTransactionFields.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testinterfaces/SignedTransactionFields.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testinterfaces/SignedTransactionFields.md#max_net_usage_words)
- [ref\_block\_num](/docs/testinterfaces/SignedTransactionFields.md#ref_block_num)
- [ref\_block\_prefix](/docs/testinterfaces/SignedTransactionFields.md#ref_block_prefix)
- [signatures](/docs/testinterfaces/SignedTransactionFields.md#signatures)
- [transaction\_extensions](/docs/testinterfaces/SignedTransactionFields.md#transaction_extensions)

## Properties

### actions

• `Optional` **actions**: [`ActionType`](/docs/testREADME.md#actiontype)[]

The actions in the transaction.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[actions](/docs/testinterfaces/TransactionFields.md#actions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1267

___

### context\_free\_actions

• `Optional` **context\_free\_actions**: [`ActionType`](/docs/testREADME.md#actiontype)[]

The context free actions in the transaction.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[context_free_actions](/docs/testinterfaces/TransactionFields.md#context_free_actions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1265

___

### context\_free\_data

• `Optional` **context\_free\_data**: [`BytesType`](/docs/testREADME.md#bytestype)[]

Context-free action data, for each context-free action, there is an entry here.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1307

___

### delay\_sec

• `Optional` **delay\_sec**: `any`

Number of seconds to delay this transaction for during which it may be canceled.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[delay_sec](/docs/testinterfaces/TransactionFields.md#delay_sec)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1245

___

### expiration

• **expiration**: `any`

The time at which a transaction expires.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[expiration](/docs/testinterfaces/TransactionFields.md#expiration)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1235

___

### max\_cpu\_usage\_ms

• `Optional` **max\_cpu\_usage\_ms**: `any`

Upper limit on the total CPU time billed for this transaction.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[max_cpu_usage_ms](/docs/testinterfaces/TransactionFields.md#max_cpu_usage_ms)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1243

___

### max\_net\_usage\_words

• `Optional` **max\_net\_usage\_words**: `any`

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[max_net_usage_words](/docs/testinterfaces/TransactionFields.md#max_net_usage_words)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1241

___

### ref\_block\_num

• **ref\_block\_num**: `any`

*Specifies a block num in the last 2^16 blocks.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[ref_block_num](/docs/testinterfaces/TransactionFields.md#ref_block_num)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1237

___

### ref\_block\_prefix

• **ref\_block\_prefix**: `any`

Specifies the lower 32 bits of the block id.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[ref_block_prefix](/docs/testinterfaces/TransactionFields.md#ref_block_prefix)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1239

___

### signatures

• `Optional` **signatures**: [`SignatureType`](/docs/testREADME.md#signaturetype)[]

List of signatures.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1305

___

### transaction\_extensions

• `Optional` **transaction\_extensions**: { `data`: [`BytesType`](/docs/testREADME.md#bytestype) ; `type`: `any`  }[]

Transaction extensions.

#### Inherited from

[TransactionFields](/docs/testinterfaces/TransactionFields.md).[transaction_extensions](/docs/testinterfaces/TransactionFields.md#transaction_extensions)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1269
