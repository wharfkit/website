[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Bytes

# Class: Bytes

Interface that should be implemented by ABI serializable objects.

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Bytes.md#constructor)

### Properties

- [array](/docs/testclasses/Bytes.md#array)
- [abiName](/docs/testclasses/Bytes.md#abiname)

### Accessors

- [hexString](/docs/testclasses/Bytes.md#hexstring)
- [length](/docs/testclasses/Bytes.md#length)
- [utf8String](/docs/testclasses/Bytes.md#utf8string)

### Methods

- [append](/docs/testclasses/Bytes.md#append)
- [appending](/docs/testclasses/Bytes.md#appending)
- [copy](/docs/testclasses/Bytes.md#copy)
- [dropFirst](/docs/testclasses/Bytes.md#dropfirst)
- [droppingFirst](/docs/testclasses/Bytes.md#droppingfirst)
- [equals](/docs/testclasses/Bytes.md#equals)
- [toABI](/docs/testclasses/Bytes.md#toabi)
- [toJSON](/docs/testclasses/Bytes.md#tojson)
- [toString](/docs/testclasses/Bytes.md#tostring)
- [zeropad](/docs/testclasses/Bytes.md#zeropad)
- [zeropadded](/docs/testclasses/Bytes.md#zeropadded)
- [abiDefault](/docs/testclasses/Bytes.md#abidefault)
- [equal](/docs/testclasses/Bytes.md#equal)
- [from](/docs/testclasses/Bytes.md#from)
- [fromABI](/docs/testclasses/Bytes.md#fromabi)
- [fromString](/docs/testclasses/Bytes.md#fromstring)
- [isBytes](/docs/testclasses/Bytes.md#isbytes)
- [random](/docs/testclasses/Bytes.md#random)

## Constructors

### constructor

• **new Bytes**(`array?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `array?` | `Uint8Array` |

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:401

## Properties

### array

• **array**: `Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:400

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:387

## Accessors

### hexString

• `get` **hexString**(): `string`

Hex string representation of this instance.

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:405

___

### length

• `get` **length**(): `number`

Number of bytes in this instance.

#### Returns

`number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:403

___

### utf8String

• `get` **utf8String**(): `string`

UTF-8 string representation of this instance.

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:407

## Methods

### append

▸ **append**(`other`): `void`

Mutating. Append bytes to this instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `AnyBytes` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:409

___

### appending

▸ **appending**(`other`): [`Bytes`](/docs/testclasses/Bytes.md)

Non-mutating, returns a copy of this instance with appended bytes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `AnyBytes` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:411

___

### copy

▸ **copy**(): [`Bytes`](/docs/testclasses/Bytes.md)

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:420

___

### dropFirst

▸ **dropFirst**(`n?`): `void`

Mutating. Drop bytes from the start of this instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:417

___

### droppingFirst

▸ **droppingFirst**(`n?`): [`Bytes`](/docs/testclasses/Bytes.md)

Non-mutating, returns a copy of this instance with dropped bytes from the start.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | `number` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:419

___

### equals

▸ **equals**(`other`): `boolean`

Return true if the object equals the other object passed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `AnyBytes` |

#### Returns

`boolean`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:421

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:423

___

### toJSON

▸ **toJSON**(): `string`

Called when encoding to json abi format.

#### Returns

`string`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:424

___

### toString

▸ **toString**(`encoding?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding?` | [`BytesEncoding`](/docs/testREADME.md#bytesencoding) |

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:422

___

### zeropad

▸ **zeropad**(`n`, `truncate?`): `void`

Mutating. Pad this instance to length.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `truncate?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:413

___

### zeropadded

▸ **zeropadded**(`n`, `truncate?`): [`Bytes`](/docs/testclasses/Bytes.md)

Non-mutating, returns a copy of this instance with zeros padded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `truncate?` | `boolean` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:415

___

### abiDefault

▸ `Static` **abiDefault**(): [`Bytes`](/docs/testclasses/Bytes.md)

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:395

___

### equal

▸ `Static` **equal**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`BytesType`](/docs/testREADME.md#bytestype) |
| `b` | [`BytesType`](/docs/testREADME.md#bytestype) |

#### Returns

`boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:396

___

### from

▸ `Static` **from**(`value`, `encoding?`): [`Bytes`](/docs/testclasses/Bytes.md)

Create a new Bytes instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `AnyBytes` |
| `encoding?` | [`BytesEncoding`](/docs/testREADME.md#bytesencoding) |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

**`Note`**

Make sure to take a [[copy]] before mutating the bytes as the underlying source is not copied here.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:392

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:394

___

### fromString

▸ `Static` **fromString**(`value`, `encoding?`): [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |
| `encoding?` | [`BytesEncoding`](/docs/testREADME.md#bytesencoding) |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:393

___

### isBytes

▸ `Static` **isBytes**(`value`): value is BytesType

Return true if given value is a valid `BytesType`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BytesType

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:399

___

### random

▸ `Static` **random**(`length`): [`Bytes`](/docs/testclasses/Bytes.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `length` | `number` |

#### Returns

[`Bytes`](/docs/testclasses/Bytes.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:397
