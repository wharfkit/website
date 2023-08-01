[@wharfkit/session - v1.0.0](/docs/testREADME.md) / VariantConstructor

# Interface: VariantConstructor

## Hierarchy

- [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

  ↳ **`VariantConstructor`**

## Table of contents

### Constructors

- [constructor](/docs/testinterfaces/VariantConstructor.md#constructor)

### Properties

- [abiAlias](/docs/testinterfaces/VariantConstructor.md#abialias)
- [abiBase](/docs/testinterfaces/VariantConstructor.md#abibase)
- [abiDefault](/docs/testinterfaces/VariantConstructor.md#abidefault)
- [abiFields](/docs/testinterfaces/VariantConstructor.md#abifields)
- [abiName](/docs/testinterfaces/VariantConstructor.md#abiname)
- [abiVariant](/docs/testinterfaces/VariantConstructor.md#abivariant)

### Methods

- [from](/docs/testinterfaces/VariantConstructor.md#from)
- [fromABI](/docs/testinterfaces/VariantConstructor.md#fromabi)
- [toABI](/docs/testinterfaces/VariantConstructor.md#toabi)

## Constructors

### constructor

• **new VariantConstructor**<`T`\>(`...args`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Variant`](/docs/testclasses/Variant-1.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Inherited from

ABISerializableConstructor.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:717

## Properties

### abiAlias

• `Optional` **abiAlias**: `ABITypeDescriptor`

Alias to another type.

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiAlias](/docs/testinterfaces/ABISerializableConstructor.md#abialias)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:335

___

### abiBase

• `Optional` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

For structs, the base class this type extends.

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiBase](/docs/testinterfaces/ABISerializableConstructor.md#abibase)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:331

___

### abiDefault

• `Optional` **abiDefault**: () => [`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Type declaration

▸ (): [`ABISerializable`](/docs/testREADME.md#abiserializable)

Return value to use when creating a new instance of this type, used when decoding binary extensions.

##### Returns

[`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiDefault](/docs/testinterfaces/ABISerializableConstructor.md#abidefault)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:337

___

### abiFields

• `Optional` **abiFields**: `ABIField`[]

For structs, the fields that this type contains.

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiFields](/docs/testinterfaces/ABISerializableConstructor.md#abifields)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:329

___

### abiName

• **abiName**: `string`

Name of the type, e.g. `asset`.

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiName](/docs/testinterfaces/ABISerializableConstructor.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:327

___

### abiVariant

• `Optional` **abiVariant**: `ABITypeDescriptor`[]

For variants, the different types this type can represent.

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[abiVariant](/docs/testinterfaces/ABISerializableConstructor.md#abivariant)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:333

## Methods

### from

▸ **from**(`value`): [`ABISerializable`](/docs/testREADME.md#abiserializable)

Create new instance from JavaScript object.
Should also accept an instance of itself and return that unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[from](/docs/testinterfaces/ABISerializableConstructor.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:342

___

### fromABI

▸ `Optional` **fromABI**(`decoder`): [`ABISerializable`](/docs/testREADME.md#abiserializable)

Create instance from binary ABI data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) | Decoder instance to read from. |

#### Returns

[`ABISerializable`](/docs/testREADME.md#abiserializable)

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[fromABI](/docs/testinterfaces/ABISerializableConstructor.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:347

___

### toABI

▸ `Optional` **toABI**(`value`, `encoder`): `void`

Static ABI encoding can be used to encode non-class types.
Will be used in favor of instance.toABI if both exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | The value to encode. |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) | The encoder to write the value to. |

#### Returns

`void`

#### Inherited from

[ABISerializableConstructor](/docs/testinterfaces/ABISerializableConstructor.md).[toABI](/docs/testinterfaces/ABISerializableConstructor.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:354
