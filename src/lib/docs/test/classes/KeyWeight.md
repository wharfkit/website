[@wharfkit/session - v1.0.0](/docs/testREADME.md) / KeyWeight

# Class: KeyWeight

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`KeyWeight`**

## Table of contents

### Properties

- [key](/docs/testclasses/KeyWeight.md#key)
- [weight](/docs/testclasses/KeyWeight.md#weight)
- [abiBase](/docs/testclasses/KeyWeight.md#abibase)
- [abiFields](/docs/testclasses/KeyWeight.md#abifields)
- [abiName](/docs/testclasses/KeyWeight.md#abiname)

### Accessors

- [structFields](/docs/testclasses/KeyWeight.md#structfields)

### Methods

- [equals](/docs/testclasses/KeyWeight.md#equals)
- [from](/docs/testclasses/KeyWeight.md#from)

## Properties

### key

• **key**: [`PublicKey`](/docs/testclasses/PublicKey.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1345

___

### weight

• **weight**: [`Weight`](/docs/testclasses/Weight.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1346

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
