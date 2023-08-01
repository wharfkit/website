[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABISerializableConstructor

# Interface: ABISerializableConstructor

## Hierarchy

- **`ABISerializableConstructor`**

  ↳ [`StructConstructor`](/docs/testinterfaces/StructConstructor.md)

  ↳ [`VariantConstructor`](/docs/testinterfaces/VariantConstructor.md)

## Table of contents

### Properties

- [abiAlias](/docs/testinterfaces/ABISerializableConstructor.md#abialias)
- [abiBase](/docs/testinterfaces/ABISerializableConstructor.md#abibase)
- [abiDefault](/docs/testinterfaces/ABISerializableConstructor.md#abidefault)
- [abiFields](/docs/testinterfaces/ABISerializableConstructor.md#abifields)
- [abiName](/docs/testinterfaces/ABISerializableConstructor.md#abiname)
- [abiVariant](/docs/testinterfaces/ABISerializableConstructor.md#abivariant)

### Methods

- [from](/docs/testinterfaces/ABISerializableConstructor.md#from)
- [fromABI](/docs/testinterfaces/ABISerializableConstructor.md#fromabi)
- [toABI](/docs/testinterfaces/ABISerializableConstructor.md#toabi)

## Properties

### abiAlias

• `Optional` **abiAlias**: `ABITypeDescriptor`

Alias to another type.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:335

___

### abiBase

• `Optional` **abiBase**: [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

For structs, the base class this type extends.

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:337

___

### abiFields

• `Optional` **abiFields**: `ABIField`[]

For structs, the fields that this type contains.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:329

___

### abiName

• **abiName**: `string`

Name of the type, e.g. `asset`.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:327

___

### abiVariant

• `Optional` **abiVariant**: `ABITypeDescriptor`[]

For variants, the different types this type can represent.

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:354
