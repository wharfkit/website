[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Float128

# Class: Float128

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Float128.md#constructor)

### Properties

- [data](/docs/testclasses/Float128.md#data)
- [abiName](/docs/testclasses/Float128.md#abiname)
- [byteWidth](/docs/testclasses/Float128.md#bytewidth)

### Methods

- [equals](/docs/testclasses/Float128.md#equals)
- [toABI](/docs/testclasses/Float128.md#toabi)
- [toJSON](/docs/testclasses/Float128.md#tojson)
- [toString](/docs/testclasses/Float128.md#tostring)
- [from](/docs/testclasses/Float128.md#from)
- [fromABI](/docs/testclasses/Float128.md#fromabi)
- [random](/docs/testclasses/Float128.md#random)

## Constructors

### constructor

• **new Float128**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Bytes`](/docs/testclasses/Bytes.md) |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:781

## Properties

### data

• **data**: [`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:780

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:775

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:776

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Float128Type`](/docs/testREADME.md#float128type) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:782

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:783

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:785

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:784

___

### from

▸ `Static` **from**(`value`): [`Float128`](/docs/testclasses/Float128.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Float128Type`](/docs/testREADME.md#float128type) |

#### Returns

[`Float128`](/docs/testclasses/Float128.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:777

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`Float128`](/docs/testclasses/Float128.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`Float128`](/docs/testclasses/Float128.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:778

___

### random

▸ `Static` **random**(): [`Float128`](/docs/testclasses/Float128.md)

#### Returns

[`Float128`](/docs/testclasses/Float128.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:779
