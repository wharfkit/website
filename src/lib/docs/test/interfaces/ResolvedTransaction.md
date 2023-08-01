[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ResolvedTransaction

# Interface: ResolvedTransaction

## Table of contents

### Properties

- [actions](/docs/testinterfaces/ResolvedTransaction.md#actions)
- [context\_free\_actions](/docs/testinterfaces/ResolvedTransaction.md#context_free_actions)
- [delay\_sec](/docs/testinterfaces/ResolvedTransaction.md#delay_sec)
- [expiration](/docs/testinterfaces/ResolvedTransaction.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testinterfaces/ResolvedTransaction.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testinterfaces/ResolvedTransaction.md#max_net_usage_words)
- [ref\_block\_num](/docs/testinterfaces/ResolvedTransaction.md#ref_block_num)
- [ref\_block\_prefix](/docs/testinterfaces/ResolvedTransaction.md#ref_block_prefix)
- [transaction\_extensions](/docs/testinterfaces/ResolvedTransaction.md#transaction_extensions)

## Properties

### actions

• **actions**: [`ResolvedAction`](/docs/testinterfaces/ResolvedAction.md)[]

The actions in the transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:313

___

### context\_free\_actions

• **context\_free\_actions**: [`ResolvedAction`](/docs/testinterfaces/ResolvedAction.md)[]

The context free actions in the transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:311

___

### delay\_sec

• **delay\_sec**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Number of seconds to delay this transaction for during which it may be canceled.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:309

___

### expiration

• **expiration**: [`TimePointSec`](/docs/testclasses/TimePointSec.md)

The time at which a transaction expires.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:299

___

### max\_cpu\_usage\_ms

• **max\_cpu\_usage\_ms**: [`UInt8`](/docs/testclasses/UInt8.md)

Upper limit on the total CPU time billed for this transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:307

___

### max\_net\_usage\_words

• **max\_net\_usage\_words**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:305

___

### ref\_block\_num

• **ref\_block\_num**: [`UInt16`](/docs/testclasses/UInt16.md)

*Specifies a block num in the last 2^16 blocks.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:301

___

### ref\_block\_prefix

• **ref\_block\_prefix**: [`UInt32`](/docs/testclasses/UInt32.md)

Specifies the lower 32 bits of the block id.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:303

___

### transaction\_extensions

• **transaction\_extensions**: [`TransactionExtension`](/docs/testclasses/TransactionExtension.md)[]

Transaction extensions.

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:315
