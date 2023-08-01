[@wharfkit/session - v1.0.0](/docs/testREADME.md) / BlockTimestamp

# Class: BlockTimestamp

## Hierarchy

- `TimePointBase`

  ↳ **`BlockTimestamp`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/BlockTimestamp.md#constructor)

### Properties

- [value](/docs/testclasses/BlockTimestamp.md#value)
- [abiName](/docs/testclasses/BlockTimestamp.md#abiname)

### Methods

- [equals](/docs/testclasses/BlockTimestamp.md#equals)
- [toABI](/docs/testclasses/BlockTimestamp.md#toabi)
- [toDate](/docs/testclasses/BlockTimestamp.md#todate)
- [toJSON](/docs/testclasses/BlockTimestamp.md#tojson)
- [toMilliseconds](/docs/testclasses/BlockTimestamp.md#tomilliseconds)
- [toString](/docs/testclasses/BlockTimestamp.md#tostring)
- [abiDefault](/docs/testclasses/BlockTimestamp.md#abidefault)
- [from](/docs/testclasses/BlockTimestamp.md#from)
- [fromABI](/docs/testclasses/BlockTimestamp.md#fromabi)
- [fromDate](/docs/testclasses/BlockTimestamp.md#fromdate)
- [fromInteger](/docs/testclasses/BlockTimestamp.md#frominteger)
- [fromMilliseconds](/docs/testclasses/BlockTimestamp.md#frommilliseconds)
- [fromString](/docs/testclasses/BlockTimestamp.md#fromstring)

## Constructors

### constructor

• **new BlockTimestamp**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UInt32`](/docs/testclasses/UInt32.md) |

#### Overrides

TimePointBase.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:868

## Properties

### value

• **value**: [`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:867

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

TimePointBase.abiName

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:863

## Methods

### equals

▸ **equals**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |

#### Returns

`boolean`

#### Inherited from

TimePointBase.equals

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:835

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

TimePointBase.toABI

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:834

___

### toDate

▸ **toDate**(): `Date`

#### Returns

`Date`

#### Inherited from

TimePointBase.toDate

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:837

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Inherited from

TimePointBase.toJSON

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:838

___

### toMilliseconds

▸ **toMilliseconds**(): `number`

#### Returns

`number`

#### Overrides

TimePointBase.toMilliseconds

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:870

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:869

___

### abiDefault

▸ `Static` **abiDefault**<`T`\>(`this`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TimePointConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

TimePointBase.abiDefault

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:833

___

### from

▸ `Static` **from**<`T`\>(`this`, `value`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TimePointConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `value` | `any` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

TimePointBase.from

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:827

▸ `Static` **from**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`unknown`

#### Inherited from

TimePointBase.from

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:828

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:866

___

### fromDate

▸ `Static` **fromDate**<`T`\>(`this`, `date`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TimePointConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `date` | `Date` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

TimePointBase.fromDate

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:831

▸ `Static` **fromDate**(`date`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`unknown`

#### Inherited from

TimePointBase.fromDate

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:832

___

### fromInteger

▸ `Static` **fromInteger**(`value`): [`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:865

___

### fromMilliseconds

▸ `Static` **fromMilliseconds**(`ms`): [`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`BlockTimestamp`](/docs/testclasses/BlockTimestamp.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:864

___

### fromString

▸ `Static` **fromString**<`T`\>(`this`, `string`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `TimePointConstructor` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `string` | `string` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

TimePointBase.fromString

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:829

▸ `Static` **fromString**(`string`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`unknown`

#### Inherited from

TimePointBase.fromString

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:830
