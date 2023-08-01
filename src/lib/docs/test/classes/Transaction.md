[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Transaction

# Class: Transaction

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`TransactionHeader`](/docs/testclasses/TransactionHeader.md)

  ↳ **`Transaction`**

  ↳↳ [`SignedTransaction`](/docs/testclasses/SignedTransaction.md)

## Table of contents

### Properties

- [actions](/docs/testclasses/Transaction.md#actions)
- [context\_free\_actions](/docs/testclasses/Transaction.md#context_free_actions)
- [delay\_sec](/docs/testclasses/Transaction.md#delay_sec)
- [expiration](/docs/testclasses/Transaction.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testclasses/Transaction.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testclasses/Transaction.md#max_net_usage_words)
- [ref\_block\_num](/docs/testclasses/Transaction.md#ref_block_num)
- [ref\_block\_prefix](/docs/testclasses/Transaction.md#ref_block_prefix)
- [transaction\_extensions](/docs/testclasses/Transaction.md#transaction_extensions)
- [abiBase](/docs/testclasses/Transaction.md#abibase)
- [abiFields](/docs/testclasses/Transaction.md#abifields)
- [abiName](/docs/testclasses/Transaction.md#abiname)

### Accessors

- [id](/docs/testclasses/Transaction.md#id)
- [structFields](/docs/testclasses/Transaction.md#structfields)

### Methods

- [equals](/docs/testclasses/Transaction.md#equals)
- [signingData](/docs/testclasses/Transaction.md#signingdata)
- [signingDigest](/docs/testclasses/Transaction.md#signingdigest)
- [from](/docs/testclasses/Transaction.md#from)

## Properties

### actions

• **actions**: [`Action`](/docs/testclasses/Action.md)[]

The actions in the transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1290

___

### context\_free\_actions

• **context\_free\_actions**: [`Action`](/docs/testclasses/Action.md)[]

The context free actions in the transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1288

___

### delay\_sec

• **delay\_sec**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Number of seconds to delay this transaction for during which it may be canceled.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[delay_sec](/docs/testclasses/TransactionHeader.md#delay_sec)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1260

___

### expiration

• **expiration**: [`TimePointSec`](/docs/testclasses/TimePointSec.md)

The time at which a transaction expires.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[expiration](/docs/testclasses/TransactionHeader.md#expiration)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1250

___

### max\_cpu\_usage\_ms

• **max\_cpu\_usage\_ms**: [`UInt8`](/docs/testclasses/UInt8.md)

Upper limit on the total CPU time billed for this transaction.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[max_cpu_usage_ms](/docs/testclasses/TransactionHeader.md#max_cpu_usage_ms)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1258

___

### max\_net\_usage\_words

• **max\_net\_usage\_words**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[max_net_usage_words](/docs/testclasses/TransactionHeader.md#max_net_usage_words)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1256

___

### ref\_block\_num

• **ref\_block\_num**: [`UInt16`](/docs/testclasses/UInt16.md)

*Specifies a block num in the last 2^16 blocks.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[ref_block_num](/docs/testclasses/TransactionHeader.md#ref_block_num)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1252

___

### ref\_block\_prefix

• **ref\_block\_prefix**: [`UInt32`](/docs/testclasses/UInt32.md)

Specifies the lower 32 bits of the block id.

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[ref_block_prefix](/docs/testclasses/TransactionHeader.md#ref_block_prefix)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1254

___

### transaction\_extensions

• **transaction\_extensions**: [`TransactionExtension`](/docs/testclasses/TransactionExtension.md)[]

Transaction extensions.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1292

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[abiBase](/docs/testclasses/TransactionHeader.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[abiFields](/docs/testclasses/TransactionHeader.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[abiName](/docs/testclasses/TransactionHeader.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### id

• `get` **id**(): [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1299

___

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

TransactionHeader.structFields

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

#### Overrides

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[equals](/docs/testclasses/TransactionHeader.md#equals)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1300

___

### from

▸ `Static` **from**(`object`, `abis?`): [`Transaction`](/docs/testclasses/Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`AnyTransaction`](/docs/testinterfaces/AnyTransaction.md) \| [`TransactionType`](/docs/testREADME.md#transactiontype) |
| `abis?` | [`ABIDef`](/docs/testREADME.md#abidef) \| { `abi`: [`ABIDef`](/docs/testREADME.md#abidef) ; `contract`: [`NameType`](/docs/testREADME.md#nametype)  }[] |

#### Returns

[`Transaction`](/docs/testclasses/Transaction.md)

#### Overrides

[TransactionHeader](/docs/testclasses/TransactionHeader.md).[from](/docs/testclasses/TransactionHeader.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1293
