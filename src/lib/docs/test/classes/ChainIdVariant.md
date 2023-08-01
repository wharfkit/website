[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ChainIdVariant

# Class: ChainIdVariant

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Variant`](/docs/testclasses/Variant-1.md)

  ↳ **`ChainIdVariant`**

## Table of contents

### Properties

- [value](/docs/testclasses/ChainIdVariant.md#value)
- [variantIdx](/docs/testclasses/ChainIdVariant.md#variantidx)
- [abiName](/docs/testclasses/ChainIdVariant.md#abiname)
- [abiVariant](/docs/testclasses/ChainIdVariant.md#abivariant)

### Accessors

- [chainId](/docs/testclasses/ChainIdVariant.md#chainid)
- [variantName](/docs/testclasses/ChainIdVariant.md#variantname)

### Methods

- [equals](/docs/testclasses/ChainIdVariant.md#equals)
- [from](/docs/testclasses/ChainIdVariant.md#from)

## Properties

### value

• **value**: [`ChainId`](/docs/testclasses/ChainId.md) \| [`ChainAlias`](/docs/testclasses/ChainAlias.md)

#### Overrides

[Variant](/docs/testclasses/Variant-1.md).[value](/docs/testclasses/Variant-1.md#value)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:60

___

### variantIdx

• **variantIdx**: `number`

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[variantIdx](/docs/testclasses/Variant-1.md#variantidx)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:726

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[abiName](/docs/testclasses/Variant-1.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:721

___

### abiVariant

▪ `Static` **abiVariant**: `ABITypeDescriptor`[]

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[abiVariant](/docs/testclasses/Variant-1.md#abivariant)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:722

## Accessors

### chainId

• `get` **chainId**(): [`ChainId`](/docs/testclasses/ChainId.md)

#### Returns

[`ChainId`](/docs/testclasses/ChainId.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:61

___

### variantName

• `get` **variantName**(): `string`

#### Returns

`string`

#### Inherited from

Variant.variantName

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

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[equals](/docs/testclasses/Variant-1.md#equals)

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

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[from](/docs/testclasses/Variant-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:723

▸ `Static` **from**(`object`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`AnyVariant`](/docs/testREADME.md#anyvariant) |

#### Returns

`unknown`

#### Inherited from

[Variant](/docs/testclasses/Variant-1.md).[from](/docs/testclasses/Variant-1.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:724
