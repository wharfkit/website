[@wharfkit/session - v1.0.0](/docs/testREADME.md) / BlockId

# Class: BlockId

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/BlockId.md#constructor)

### Properties

- [array](/docs/testclasses/BlockId.md#array)
- [abiName](/docs/testclasses/BlockId.md#abiname)

### Accessors

- [blockNum](/docs/testclasses/BlockId.md#blocknum)
- [hexString](/docs/testclasses/BlockId.md#hexstring)

### Methods

- [equals](/docs/testclasses/BlockId.md#equals)
- [toABI](/docs/testclasses/BlockId.md#toabi)
- [toJSON](/docs/testclasses/BlockId.md#tojson)
- [toString](/docs/testclasses/BlockId.md#tostring)
- [from](/docs/testclasses/BlockId.md#from)
- [fromABI](/docs/testclasses/BlockId.md#fromabi)
- [fromBlockChecksum](/docs/testclasses/BlockId.md#fromblockchecksum)

## Constructors

### constructor

• **new BlockId**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `Uint8Array` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1417

## Properties

### array

• `Readonly` **array**: `Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1416

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1412

## Accessors

### blockNum

• `get` **blockNum**(): [`UInt32`](/docs/testclasses/UInt32.md)

#### Returns

[`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1423

___

### hexString

• `get` **hexString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1422

## Methods

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BlockIdType`](/docs/testREADME.md#blockidtype) |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1418

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1419

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1421

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1420

___

### from

▸ `Static` **from**(`value`): [`BlockId`](/docs/testclasses/BlockId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`BlockIdType`](/docs/testREADME.md#blockidtype) |

#### Returns

[`BlockId`](/docs/testclasses/BlockId.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1413

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`BlockId`](/docs/testclasses/BlockId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`BlockId`](/docs/testclasses/BlockId.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1414

___

### fromBlockChecksum

▸ `Static` **fromBlockChecksum**(`checksum`, `blockNum`): [`BlockId`](/docs/testclasses/BlockId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `checksum` | [`Checksum256Type`](/docs/testREADME.md#checksum256type) |
| `blockNum` | `any` |

#### Returns

[`BlockId`](/docs/testclasses/BlockId.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:1415
