[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactionHeader

# Class: TransactionHeader

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`TransactionHeader`**

  ↳↳ [`Transaction`](/docs/testclasses/Transaction.md)

## Table of contents

### Properties

- [delay\_sec](/docs/testclasses/TransactionHeader.md#delay_sec)
- [expiration](/docs/testclasses/TransactionHeader.md#expiration)
- [max\_cpu\_usage\_ms](/docs/testclasses/TransactionHeader.md#max_cpu_usage_ms)
- [max\_net\_usage\_words](/docs/testclasses/TransactionHeader.md#max_net_usage_words)
- [ref\_block\_num](/docs/testclasses/TransactionHeader.md#ref_block_num)
- [ref\_block\_prefix](/docs/testclasses/TransactionHeader.md#ref_block_prefix)
- [abiBase](/docs/testclasses/TransactionHeader.md#abibase)
- [abiFields](/docs/testclasses/TransactionHeader.md#abifields)
- [abiName](/docs/testclasses/TransactionHeader.md#abiname)

### Accessors

- [structFields](/docs/testclasses/TransactionHeader.md#structfields)

### Methods

- [equals](/docs/testclasses/TransactionHeader.md#equals)
- [from](/docs/testclasses/TransactionHeader.md#from)

## Properties

### delay\_sec

• **delay\_sec**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Number of seconds to delay this transaction for during which it may be canceled.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1260

___

### expiration

• **expiration**: [`TimePointSec`](/docs/testclasses/TimePointSec.md)

The time at which a transaction expires.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1250

___

### max\_cpu\_usage\_ms

• **max\_cpu\_usage\_ms**: [`UInt8`](/docs/testclasses/UInt8.md)

Upper limit on the total CPU time billed for this transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1258

___

### max\_net\_usage\_words

• **max\_net\_usage\_words**: [`VarUInt`](/docs/testclasses/VarUInt.md)

Upper limit on total network bandwidth (in 8 byte words) billed for this transaction.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1256

___

### ref\_block\_num

• **ref\_block\_num**: [`UInt16`](/docs/testclasses/UInt16.md)

*Specifies a block num in the last 2^16 blocks.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1252

___

### ref\_block\_prefix

• **ref\_block\_prefix**: [`UInt32`](/docs/testclasses/UInt32.md)

Specifies the lower 32 bits of the block id.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1254

___

### abiBase

▪ `Static` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiBase](/docs/testclasses/Struct-1.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:693

___

### abiFields

▪ `Static` **abiFields**: `ABIField`[]

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiFields](/docs/testclasses/Struct-1.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:692

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[abiName](/docs/testclasses/Struct-1.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:691

## Accessors

### structFields

• `Static` `get` **structFields**(): `ABIField`[]

#### Returns

`ABIField`[]

#### Inherited from

Struct.structFields

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:696

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this struct equals the other.

Note: This compares the ABI encoded bytes of both structs, subclasses
      should implement their own fast equality check when possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[equals](/docs/testclasses/Struct-1.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:705

___

### from

▸ `Static` **from**(`object`): [`TransactionHeader`](/docs/testclasses/TransactionHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`TransactionHeaderType`](/docs/testREADME.md#transactionheadertype) |

#### Returns

[`TransactionHeader`](/docs/testclasses/TransactionHeader.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1261
