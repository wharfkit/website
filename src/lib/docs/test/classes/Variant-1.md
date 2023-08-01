[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Variant

# Class: Variant

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- **`Variant`**

  ↳ [`ChainIdVariant`](/docs/testclasses/ChainIdVariant.md)

  ↳ [`RequestVariantV2`](/docs/testclasses/RequestVariantV2.md)

  ↳ [`RequestVariantV3`](/docs/testclasses/RequestVariantV3.md)

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Properties

- [value](/docs/testclasses/Variant-1.md#value)
- [variantIdx](/docs/testclasses/Variant-1.md#variantidx)
- [abiName](/docs/testclasses/Variant-1.md#abiname)
- [abiVariant](/docs/testclasses/Variant-1.md#abivariant)

### Accessors

- [variantName](/docs/testclasses/Variant-1.md#variantname)

### Methods

- [equals](/docs/testclasses/Variant-1.md#equals)
- [from](/docs/testclasses/Variant-1.md#from)

## Properties

### value

• **value**: [`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:725

___

### variantIdx

• **variantIdx**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:726

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:721

___

### abiVariant

▪ `Static` **abiVariant**: `ABITypeDescriptor`[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:722

## Accessors

### variantName

• `get` **variantName**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:736

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if this variant equals the other.

Note: This compares the ABI encoded bytes of both variants, subclasses
      should implement their own fast equality check when possible.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`AnyVariant`](/docs/testREADME.md#anyvariant) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:735

___

### from

▸ `Static` **from**<`T`\>(`this`, `object`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`VariantConstructor`](/docs/testinterfaces/VariantConstructor.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `object` | [`AnyVariant`](/docs/testREADME.md#anyvariant) |

#### Returns

`InstanceType`<`T`\>

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:723

▸ `Static` **from**(`object`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`AnyVariant`](/docs/testREADME.md#anyvariant) |

#### Returns

`unknown`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:724
