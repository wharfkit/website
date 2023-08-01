[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Blob

# Class: Blob

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Blob.md#constructor)

### Properties

- [array](/docs/testclasses/Blob.md#array)
- [abiName](/docs/testclasses/Blob.md#abiname)

### Accessors

- [base64String](/docs/testclasses/Blob.md#base64string)
- [utf8String](/docs/testclasses/Blob.md#utf8string)

### Methods

- [equals](/docs/testclasses/Blob.md#equals)
- [toABI](/docs/testclasses/Blob.md#toabi)
- [toJSON](/docs/testclasses/Blob.md#tojson)
- [toString](/docs/testclasses/Blob.md#tostring)
- [from](/docs/testclasses/Blob.md#from)
- [fromString](/docs/testclasses/Blob.md#fromstring)

## Constructors

### constructor

• **new Blob**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `Uint8Array` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:371

## Properties

### array

• `Readonly` **array**: `Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:370

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:364

## Accessors

### base64String

• `get` **base64String**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:373

___

### utf8String

• `get` **utf8String**(): `string`

UTF-8 string representation of this instance.

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:375

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BlobType`](/docs/testREADME.md#blobtype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:372

___

### toABI

▸ **toABI**(`encoder`): `void`

Called when encoding to binary abi format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) |

#### Returns

`void`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toABI](/docs/testinterfaces/ABISerializableObject.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:376

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:378

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:377

___

### from

▸ `Static` **from**(`value`): [`Blob`](/docs/testclasses/Blob.md)

Create a new Blob instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlobType`](/docs/testREADME.md#blobtype) |

#### Returns

[`Blob`](/docs/testclasses/Blob.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:368

___

### fromString

▸ `Static` **fromString**(`value`): [`Blob`](/docs/testclasses/Blob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

[`Blob`](/docs/testclasses/Blob.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:369
