[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABIDecoder

# Class: ABIDecoder

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ABIDecoder.md#constructor)

### Properties

- [metadata](/docs/testclasses/ABIDecoder.md#metadata)
- [\_\_className](/docs/testclasses/ABIDecoder.md#__classname)

### Methods

- [advance](/docs/testclasses/ABIDecoder.md#advance)
- [canRead](/docs/testclasses/ABIDecoder.md#canread)
- [getPosition](/docs/testclasses/ABIDecoder.md#getposition)
- [readArray](/docs/testclasses/ABIDecoder.md#readarray)
- [readByte](/docs/testclasses/ABIDecoder.md#readbyte)
- [readFloat](/docs/testclasses/ABIDecoder.md#readfloat)
- [readString](/docs/testclasses/ABIDecoder.md#readstring)
- [readVarint32](/docs/testclasses/ABIDecoder.md#readvarint32)
- [readVaruint32](/docs/testclasses/ABIDecoder.md#readvaruint32)
- [setPosition](/docs/testclasses/ABIDecoder.md#setposition)

## Constructors

### constructor

• **new ABIDecoder**(`array`, `textDecoder?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `Uint8Array` |
| `textDecoder?` | `TextDecoder` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:207

## Properties

### metadata

• **metadata**: `Record`<`string`, `any`\>

User declared metadata, can be used to pass info to instances when decoding.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:206

___

### \_\_className

▪ `Static` **\_\_className**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:201

## Methods

### advance

▸ **advance**(`bytes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:212

___

### canRead

▸ **canRead**(`bytes?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes?` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:208

___

### getPosition

▸ **getPosition**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:211

___

### readArray

▸ **readArray**(`length`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:219

___

### readByte

▸ **readByte**(): `number`

Read one byte.

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:214

___

### readFloat

▸ **readFloat**(`byteWidth`): `number`

Read floating point as JavaScript number, 32 or 64 bits.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byteWidth` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:216

___

### readString

▸ **readString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:220

___

### readVarint32

▸ **readVarint32**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:218

___

### readVaruint32

▸ **readVaruint32**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:217

___

### setPosition

▸ **setPosition**(`pos`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pos` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:210
