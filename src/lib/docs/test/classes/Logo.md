[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Logo

# Class: Logo

Interface that should be implemented by ABI serializable objects.

## Hierarchy

- [`Struct`](/docs/testclasses/Struct-1.md)

  ↳ **`Logo`**

## Table of contents

### Properties

- [dark](/docs/testclasses/Logo.md#dark)
- [light](/docs/testclasses/Logo.md#light)
- [abiBase](/docs/testclasses/Logo.md#abibase)
- [abiFields](/docs/testclasses/Logo.md#abifields)
- [abiName](/docs/testclasses/Logo.md#abiname)

### Accessors

- [structFields](/docs/testclasses/Logo.md#structfields)

### Methods

- [equals](/docs/testclasses/Logo.md#equals)
- [getVariant](/docs/testclasses/Logo.md#getvariant)
- [toString](/docs/testclasses/Logo.md#tostring)
- [from](/docs/testclasses/Logo.md#from)

## Properties

### dark

• **dark**: `string`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:42

___

### light

• **light**: `string`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:43

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

### getVariant

▸ **getVariant**(`variant`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `variant` | ``"dark"`` \| ``"light"`` |

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:45

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:46

___

### from

▸ `Static` **from**(`data`): [`Logo`](/docs/testclasses/Logo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`LogoType`](/docs/testREADME.md#logotype) |

#### Returns

[`Logo`](/docs/testclasses/Logo.md)

#### Overrides

[Struct](/docs/testclasses/Struct-1.md).[from](/docs/testclasses/Struct-1.md#from)

#### Defined in

node_modules/@wharfkit/common/lib/common.d.ts:44
