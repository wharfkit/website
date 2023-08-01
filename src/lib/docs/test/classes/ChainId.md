[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ChainId

# Class: ChainId

## Hierarchy

- [`Checksum256`](/docs/testclasses/Checksum256.md)

  ↳ **`ChainId`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ChainId.md#constructor)

### Properties

- [array](/docs/testclasses/ChainId.md#array)
- [abiName](/docs/testclasses/ChainId.md#abiname)
- [byteSize](/docs/testclasses/ChainId.md#bytesize)

### Accessors

- [chainName](/docs/testclasses/ChainId.md#chainname)
- [chainVariant](/docs/testclasses/ChainId.md#chainvariant)
- [hexString](/docs/testclasses/ChainId.md#hexstring)

### Methods

- [equals](/docs/testclasses/ChainId.md#equals)
- [toABI](/docs/testclasses/ChainId.md#toabi)
- [toJSON](/docs/testclasses/ChainId.md#tojson)
- [toString](/docs/testclasses/ChainId.md#tostring)
- [abiDefault](/docs/testclasses/ChainId.md#abidefault)
- [from](/docs/testclasses/ChainId.md#from)
- [fromABI](/docs/testclasses/ChainId.md#fromabi)
- [hash](/docs/testclasses/ChainId.md#hash)

## Constructors

### constructor

• **new ChainId**(`array`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `Uint8Array` |

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[constructor](/docs/testclasses/Checksum256.md#constructor)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:438

## Properties

### array

• `Readonly` **array**: `Uint8Array`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[array](/docs/testclasses/Checksum256.md#array)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:437

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[abiName](/docs/testclasses/Checksum256.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:447

___

### byteSize

▪ `Static` **byteSize**: `number`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[byteSize](/docs/testclasses/Checksum256.md#bytesize)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:448

## Accessors

### chainName

• `get` **chainName**(): [`ChainName`](/docs/testenums/ChainName.md)

#### Returns

[`ChainName`](/docs/testenums/ChainName.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:55

___

### chainVariant

• `get` **chainVariant**(): [`ChainIdVariant`](/docs/testclasses/ChainIdVariant.md)

#### Returns

[`ChainIdVariant`](/docs/testclasses/ChainIdVariant.md)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:54

___

### hexString

• `get` **hexString**(): `string`

#### Returns

`string`

#### Inherited from

Checksum256.hexString

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

[Checksum256](/docs/testclasses/Checksum256.md).[equals](/docs/testclasses/Checksum256.md#equals)

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

[Checksum256](/docs/testclasses/Checksum256.md).[toABI](/docs/testclasses/Checksum256.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:441

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[toJSON](/docs/testclasses/Checksum256.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:443

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[toString](/docs/testclasses/Checksum256.md#tostring)

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

[Checksum256](/docs/testclasses/Checksum256.md).[abiDefault](/docs/testclasses/Checksum256.md#abidefault)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:435

▸ `Static` **abiDefault**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[abiDefault](/docs/testclasses/Checksum256.md#abidefault)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:436

___

### from

▸ `Static` **from**(`value`): [`ChainId`](/docs/testclasses/ChainId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`ChainIdType`](/docs/testREADME.md#chainidtype) |

#### Returns

[`ChainId`](/docs/testclasses/ChainId.md)

#### Overrides

[Checksum256](/docs/testclasses/Checksum256.md).[from](/docs/testclasses/Checksum256.md#from)

#### Defined in

node_modules/@wharfkit/signing-request/lib/signing-request.d.ts:53

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

[Checksum256](/docs/testclasses/Checksum256.md).[fromABI](/docs/testclasses/Checksum256.md#fromabi)

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

[Checksum256](/docs/testclasses/Checksum256.md).[fromABI](/docs/testclasses/Checksum256.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:434

___

### hash

▸ `Static` **hash**(`data`): [`Checksum256`](/docs/testclasses/Checksum256.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

[`Checksum256`](/docs/testclasses/Checksum256.md)

#### Inherited from

[Checksum256](/docs/testclasses/Checksum256.md).[hash](/docs/testclasses/Checksum256.md#hash)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:450
