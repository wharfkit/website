[@wharfkit/session - v1.0.0](/docs/testREADME.md) / PackedTransaction

# Class: PackedTransaction

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`PackedTransaction`**

## Table of contents

### Properties

- [compression](/docs/testclasses/PackedTransaction.md#compression)
- [packed\_context\_free\_data](/docs/testclasses/PackedTransaction.md#packed_context_free_data)
- [packed\_trx](/docs/testclasses/PackedTransaction.md#packed_trx)
- [signatures](/docs/testclasses/PackedTransaction.md#signatures)
- [abiBase](/docs/testclasses/PackedTransaction.md#abibase)
- [abiFields](/docs/testclasses/PackedTransaction.md#abifields)
- [abiName](/docs/testclasses/PackedTransaction.md#abiname)

### Accessors

- [structFields](/docs/testclasses/PackedTransaction.md#structfields)

### Methods

- [equals](/docs/testclasses/PackedTransaction.md#equals)
- [getSignedTransaction](/docs/testclasses/PackedTransaction.md#getsignedtransaction)
- [getTransaction](/docs/testclasses/PackedTransaction.md#gettransaction)
- [from](/docs/testclasses/PackedTransaction.md#from)
- [fromSigned](/docs/testclasses/PackedTransaction.md#fromsigned)

## Properties

### compression

• **compression**: [`UInt8`](/docs/testclasses/UInt8.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1328

___

### packed\_context\_free\_data

• **packed\_context\_free\_data**: [`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1329

___

### packed\_trx

• **packed\_trx**: [`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1330

___

### signatures

• **signatures**: [`Signature`](/docs/testclasses/Signature.md)[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1327

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

### getSignedTransaction

▸ **getSignedTransaction**(): [`SignedTransaction`](/docs/testclasses/SignedTransaction.md)

#### Returns

[`SignedTransaction`](/docs/testclasses/SignedTransaction.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1334

___

### getTransaction

▸ **getTransaction**(): [`Transaction`](/docs/testclasses/Transaction.md)

#### Returns

[`Transaction`](/docs/testclasses/Transaction.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1333

___

### from

▸ `Static` **from**(`object`): [`PackedTransaction`](/docs/testclasses/PackedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`PackedTransactionType`](/docs/testREADME.md#packedtransactiontype) |

#### Returns

[`PackedTransaction`](/docs/testclasses/PackedTransaction.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1331

___

### fromSigned

▸ `Static` **fromSigned**(`signed`): [`PackedTransaction`](/docs/testclasses/PackedTransaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signed` | [`SignedTransaction`](/docs/testclasses/SignedTransaction.md) |

#### Returns

[`PackedTransaction`](/docs/testclasses/PackedTransaction.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1332
