[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Float64

# Class: Float64

## Hierarchy

- `Float`

  ↳ **`Float64`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Float64.md#constructor)

### Properties

- [value](/docs/testclasses/Float64.md#value)
- [abiName](/docs/testclasses/Float64.md#abiname)
- [byteWidth](/docs/testclasses/Float64.md#bytewidth)

### Methods

- [equals](/docs/testclasses/Float64.md#equals)
- [toABI](/docs/testclasses/Float64.md#toabi)
- [toJSON](/docs/testclasses/Float64.md#tojson)
- [toString](/docs/testclasses/Float64.md#tostring)
- [abiDefault](/docs/testclasses/Float64.md#abidefault)
- [from](/docs/testclasses/Float64.md#from)
- [fromABI](/docs/testclasses/Float64.md#fromabi)
- [random](/docs/testclasses/Float64.md#random)

## Constructors

### constructor

• **new Float64**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Inherited from

Float.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:756

## Properties

### value

• **value**: `number`

#### Inherited from

Float.value

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:755

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

Float.abiName

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:770

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Overrides

Float.byteWidth

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:771

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `FloatType` |

#### Returns

`boolean`

#### Inherited from

Float.equals

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:757

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

Float.toABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:758

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

Float.toJSON

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:760

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

Float.toString

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:759

___

### abiDefault

▸ `Static` **abiDefault**(): `Float`

#### Returns

`Float`

#### Inherited from

Float.abiDefault

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:752

___

### from

▸ `Static` **from**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Float` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `FloatType` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Float.from

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:748

▸ `Static` **from**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `FloatType` |

#### Returns

`unknown`

#### Inherited from

Float.from

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:749

___

### fromABI

▸ `Static` **fromABI**<`T`\>(`this`, `decoder`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Float` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Float.fromABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:750

▸ `Static` **fromABI**(`decoder`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`unknown`

#### Inherited from

Float.fromABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:751

___

### random

▸ `Static` **random**<`T`\>(`this`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `Float` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

Float.random

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:753

▸ `Static` **random**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Float.random

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:754
