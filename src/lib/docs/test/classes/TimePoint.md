[@wharfkit/session - v1.0.0](/docs/testREADME.md) / TimePoint

# Class: TimePoint

Timestamp with microsecond accuracy.

## Hierarchy

- `TimePointBase`

  ↳ **`TimePoint`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/TimePoint.md#constructor)

### Properties

- [value](/docs/testclasses/TimePoint.md#value)
- [abiName](/docs/testclasses/TimePoint.md#abiname)

### Methods

- [equals](/docs/testclasses/TimePoint.md#equals)
- [toABI](/docs/testclasses/TimePoint.md#toabi)
- [toDate](/docs/testclasses/TimePoint.md#todate)
- [toJSON](/docs/testclasses/TimePoint.md#tojson)
- [toMilliseconds](/docs/testclasses/TimePoint.md#tomilliseconds)
- [toString](/docs/testclasses/TimePoint.md#tostring)
- [abiDefault](/docs/testclasses/TimePoint.md#abidefault)
- [from](/docs/testclasses/TimePoint.md#from)
- [fromABI](/docs/testclasses/TimePoint.md#fromabi)
- [fromDate](/docs/testclasses/TimePoint.md#fromdate)
- [fromInteger](/docs/testclasses/TimePoint.md#frominteger)
- [fromMilliseconds](/docs/testclasses/TimePoint.md#frommilliseconds)
- [fromString](/docs/testclasses/TimePoint.md#fromstring)

## Constructors

### constructor

• **new TimePoint**(`value`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Int64`](/docs/testclasses/Int64.md) |

#### Overrides

TimePointBase.constructor

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:847

## Properties

### value

• **value**: [`Int64`](/docs/testclasses/Int64.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:846

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

TimePointBase.abiName

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:842

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

node_modules/@wharfkit/antelope/lib/antelope.d.ts:849

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:848

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

▸ `Static` **fromABI**(`decoder`): [`TimePoint`](/docs/testclasses/TimePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`TimePoint`](/docs/testclasses/TimePoint.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:845

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

▸ `Static` **fromInteger**(`value`): [`TimePoint`](/docs/testclasses/TimePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`TimePoint`](/docs/testclasses/TimePoint.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:844

___

### fromMilliseconds

▸ `Static` **fromMilliseconds**(`ms`): [`TimePoint`](/docs/testclasses/TimePoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `number` |

#### Returns

[`TimePoint`](/docs/testclasses/TimePoint.md)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:843

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
