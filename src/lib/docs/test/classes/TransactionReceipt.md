[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TransactionReceipt

# Class: TransactionReceipt

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`TransactionReceipt`**

## Table of contents

### Properties

- [cpu\_usage\_us](/docs/testclasses/TransactionReceipt.md#cpu_usage_us)
- [net\_usage\_words](/docs/testclasses/TransactionReceipt.md#net_usage_words)
- [status](/docs/testclasses/TransactionReceipt.md#status)
- [abiBase](/docs/testclasses/TransactionReceipt.md#abibase)
- [abiFields](/docs/testclasses/TransactionReceipt.md#abifields)
- [abiName](/docs/testclasses/TransactionReceipt.md#abiname)

### Accessors

- [structFields](/docs/testclasses/TransactionReceipt.md#structfields)

### Methods

- [equals](/docs/testclasses/TransactionReceipt.md#equals)
- [from](/docs/testclasses/TransactionReceipt.md#from)

## Properties

### cpu\_usage\_us

• **cpu\_usage\_us**: [`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1338

___

### net\_usage\_words

• **net\_usage\_words**: [`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1339

___

### status

• **status**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1337

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

▸ `Static` **from**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`StructConstructor`](/docs/testinterfaces/StructConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:694

▸ `Static` **from**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`unknown`

#### Inherited from

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:695
