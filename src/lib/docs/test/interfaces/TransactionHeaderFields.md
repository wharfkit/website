[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactionHeaderFields

# Interface: TransactionHeaderFields

## Hierarchy

- **`TransactionHeaderFields`**

  ↳ [`AnyTransaction`](/docs/testinterfaces/AnyTransaction.md)

  ↳ [`TransactionFields`](/docs/testinterfaces/TransactionFields.md)

## Table of contents

### Properties

- [delay\_sec](/docs/testinterfaces/TransactionHeaderFields.md#delay_sec)
- [expiration](/docs/testinterfaces/TransactionHeaderFields.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testinterfaces/TransactionHeaderFields.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testinterfaces/TransactionHeaderFields.md#max_net_usage_words)
- [ref\_block\_num](/docs/testinterfaces/TransactionHeaderFields.md#ref_block_num)
- [ref\_block\_prefix](/docs/testinterfaces/TransactionHeaderFields.md#ref_block_prefix)

## Properties

### delay\_sec

• `Optional` **delay\_sec**: `any`

Number of seconds to delay this transaction for during which it may be canceled.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1245

___

### expiration

• **expiration**: `any`

The time at which a transaction expires.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1235

___

### max\_cpu\_usage\_ms

• `Optional` **max\_cpu\_usage\_ms**: `any`

Upper limit on the total CPU time billed for this transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1243

___

### max\_net\_usage\_words

• `Optional` **max\_net\_usage\_words**: `any`

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1241

___

### ref\_block\_num

• **ref\_block\_num**: `any`

*Specifies a block num in the last 2^16 blocks.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1237

___

### ref\_block\_prefix

• **ref\_block\_prefix**: `any`

Specifies the lower 32 bits of the block id.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1239
