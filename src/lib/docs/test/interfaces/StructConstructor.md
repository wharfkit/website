[@wharfkit/session - v1.0.0](/docs/testREADME.md) / StructConstructor

# Interface: StructConstructor

## Hierarchy

- [`ABISerializableConstructor`](/docs/testinterfaces/ABISerializableConstructor.md)

  ↳ **`StructConstructor`**

## Table of contents

### Constructors

- [constructor](/docs/testinterfaces/StructConstructor.md#constructor)

### Properties

- [abiAlias](/docs/testinterfaces/StructConstructor.md#abialias)
- [abiBase](/docs/testinterfaces/StructConstructor.md#abibase)
- [abiDefault](/docs/testinterfaces/StructConstructor.md#abidefault)
- [abiFields](/docs/testinterfaces/StructConstructor.md#abifields)
- [abiName](/docs/testinterfaces/StructConstructor.md#abiname)
- [abiVariant](/docs/testinterfaces/StructConstructor.md#abivariant)
- [structFields](/docs/testinterfaces/StructConstructor.md#structfields)

### Methods

- [from](/docs/testinterfaces/StructConstructor.md#from)
- [fromABI](/docs/testinterfaces/StructConstructor.md#fromabi)
- [toABI](/docs/testinterfaces/StructConstructor.md#toabi)

## Constructors

### constructor

• **new StructConstructor**<`T`\>(`...args`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Struct`](/docs/testclasses/Struct-1.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Inherited from

ABISerializableConstructor.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:687

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

___

### structFields

• **structFields**: `ABIField`[]

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:688

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
