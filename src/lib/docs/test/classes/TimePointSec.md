[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TimePointSec

# Class: TimePointSec

Timestamp with second accuracy.

## Hierarchy

- `TimePointBase`

  ↳ **`TimePointSec`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/TimePointSec.md#constructor)

### Properties

- [value](/docs/testclasses/TimePointSec.md#value)
- [abiName](/docs/testclasses/TimePointSec.md#abiname)

### Methods

- [equals](/docs/testclasses/TimePointSec.md#equals)
- [toABI](/docs/testclasses/TimePointSec.md#toabi)
- [toDate](/docs/testclasses/TimePointSec.md#todate)
- [toJSON](/docs/testclasses/TimePointSec.md#tojson)
- [toMilliseconds](/docs/testclasses/TimePointSec.md#tomilliseconds)
- [toString](/docs/testclasses/TimePointSec.md#tostring)
- [abiDefault](/docs/testclasses/TimePointSec.md#abidefault)
- [from](/docs/testclasses/TimePointSec.md#from)
- [fromABI](/docs/testclasses/TimePointSec.md#fromabi)
- [fromDate](/docs/testclasses/TimePointSec.md#fromdate)
- [fromInteger](/docs/testclasses/TimePointSec.md#frominteger)
- [fromMilliseconds](/docs/testclasses/TimePointSec.md#frommilliseconds)
- [fromString](/docs/testclasses/TimePointSec.md#fromstring)

## Constructors

### constructor

• **new TimePointSec**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`UInt32`](/docs/testclasses/UInt32.md) |

#### Overrides

TimePointBase.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:858

## Properties

### value

• **value**: [`UInt32`](/docs/testclasses/UInt32.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:857

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

TimePointBase.abiName

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:853

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:860

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:859

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

▸ `Static` **fromABI**(`decoder`): [`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:856

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

▸ `Static` **fromInteger**(`value`): [`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:855

___

### fromMilliseconds

▸ `Static` **fromMilliseconds**(`ms`): [`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`TimePointSec`](/docs/testclasses/TimePointSec.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:854

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
