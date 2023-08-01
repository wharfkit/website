[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Checksum512

# Class: Checksum512

## Hierarchy

- `Checksum`

  ↳ **`Checksum512`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Checksum512.md#constructor)

### Properties

- [array](/docs/testclasses/Checksum512.md#array)
- [abiName](/docs/testclasses/Checksum512.md#abiname)
- [byteSize](/docs/testclasses/Checksum512.md#bytesize)

### Accessors

- [hexString](/docs/testclasses/Checksum512.md#hexstring)

### Methods

- [equals](/docs/testclasses/Checksum512.md#equals)
- [toABI](/docs/testclasses/Checksum512.md#toabi)
- [toJSON](/docs/testclasses/Checksum512.md#tojson)
- [toString](/docs/testclasses/Checksum512.md#tostring)
- [abiDefault](/docs/testclasses/Checksum512.md#abidefault)
- [from](/docs/testclasses/Checksum512.md#from)
- [fromABI](/docs/testclasses/Checksum512.md#fromabi)
- [hash](/docs/testclasses/Checksum512.md#hash)

## Constructors

### constructor

• **new Checksum512**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `Uint8Array` |

#### Inherited from

Checksum.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:438

## Properties

### array

• `Readonly` **array**: `Uint8Array`

#### Inherited from

Checksum.array

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:437

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

Checksum.abiName

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:454

___

### byteSize

▪ `Static` **byteSize**: `number`

#### Overrides

Checksum.byteSize

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:455

## Accessors

### hexString

• `get` **hexString**(): `string`

#### Returns

`string`

#### Inherited from

Checksum.hexString

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:440

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `string` \| `ArrayBuffer` \| `ArrayBufferView` \| `ArrayLike`<`number`\> \| [`Bytes`](/docs/testclasses/Bytes.md) \| [`Checksum160`](/docs/testclasses/Checksum160.md) \| [`Checksum256`](/docs/testclasses/Checksum256.md) \| [`Checksum512`](/docs/testclasses/Checksum512.md) |

#### Returns

`boolean`

#### Inherited from

Checksum.equals

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:439

___

### toABI

▸ **toABI**(`encoder`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoder` | [`ABIEncoder`](/docs/testclasses/ABIEncoder.md) |

#### Returns

`void`

#### Inherited from

Checksum.toABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:441

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

Checksum.toJSON

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:443

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

Checksum.toString

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:442

___

### abiDefault

▸ `Static` **abiDefault**<`T`\>(`this`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Checksum` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Checksum.abiDefault

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:435

▸ `Static` **abiDefault**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Checksum.abiDefault

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:436

___

### from

▸ `Static` **from**(`value`): [`Checksum512`](/docs/testclasses/Checksum512.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Checksum512Type`](/docs/testREADME.md#checksum512type) |

#### Returns

[`Checksum512`](/docs/testclasses/Checksum512.md)

#### Overrides

Checksum.from

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:456

___

### fromABI

▸ `Static` **fromABI**<`T`\>(`this`, `decoder`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Checksum` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Checksum.fromABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:433

▸ `Static` **fromABI**(`decoder`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`unknown`

#### Inherited from

Checksum.fromABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:434

___

### hash

▸ `Static` **hash**(`data`): [`Checksum512`](/docs/testclasses/Checksum512.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

[`Checksum512`](/docs/testclasses/Checksum512.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:457
