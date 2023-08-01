[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ABIEncoder

# Class: ABIEncoder

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ABIEncoder.md#constructor)

### Properties

- [metadata](/docs/testclasses/ABIEncoder.md#metadata)
- [\_\_className](/docs/testclasses/ABIEncoder.md#__classname)

### Methods

- [getBytes](/docs/testclasses/ABIEncoder.md#getbytes)
- [getData](/docs/testclasses/ABIEncoder.md#getdata)
- [writeArray](/docs/testclasses/ABIEncoder.md#writearray)
- [writeByte](/docs/testclasses/ABIEncoder.md#writebyte)
- [writeFloat](/docs/testclasses/ABIEncoder.md#writefloat)
- [writeString](/docs/testclasses/ABIEncoder.md#writestring)
- [writeVarint32](/docs/testclasses/ABIEncoder.md#writevarint32)
- [writeVaruint32](/docs/testclasses/ABIEncoder.md#writevaruint32)

## Constructors

### constructor

• **new ABIEncoder**(`pageSize?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pageSize?` | `number` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:280

## Properties

### metadata

• **metadata**: `Record`<`string`, `any`\>

User declared metadata, can be used to pass info to instances when encoding.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:279

___

### \_\_className

▪ `Static` **\_\_className**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:273

## Methods

### getBytes

▸ **getBytes**(): [`Bytes`](/docs/testclasses/Bytes.md)

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:291

___

### getData

▸ **getData**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:290

___

### writeArray

▸ **writeArray**(`bytes`): `void`

Write an array of bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `ArrayLike`<`number`\> |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:285

___

### writeByte

▸ **writeByte**(`byte`): `void`

Write a single byte.

#### Parameters

| Name | Type |
| :------ | :------ |
| `byte` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:283

___

### writeFloat

▸ **writeFloat**(`value`, `byteWidth`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |
| `byteWidth` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:286

___

### writeString

▸ **writeString**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:289

___

### writeVarint32

▸ **writeVarint32**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:288

___

### writeVaruint32

▸ **writeVaruint32**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:287
