[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Weight

# Class: Weight

Binary integer with the underlying value represented by a BN.js instance.
Follows C++11 standard for arithmetic operators and conversions.

**`Note`**

This type is optimized for correctness not speed, if you plan to manipulate
      integers in a tight loop you're advised to use the underlying BN.js value or
      convert to a JavaScript number first.

## Hierarchy

- [`UInt16`](/docs/testclasses/UInt16.md)

  ↳ **`Weight`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Weight.md#constructor)

### Properties

- [value](/docs/testclasses/Weight.md#value)
- [abiName](/docs/testclasses/Weight.md#abiname)
- [byteWidth](/docs/testclasses/Weight.md#bytewidth)
- [isSigned](/docs/testclasses/Weight.md#issigned)

### Accessors

- [byteArray](/docs/testclasses/Weight.md#bytearray)
- [max](/docs/testclasses/Weight.md#max)
- [min](/docs/testclasses/Weight.md#min)

### Methods

- [[toPrimitive]](/docs/testclasses/Weight.md#[toprimitive])
- [add](/docs/testclasses/Weight.md#add)
- [adding](/docs/testclasses/Weight.md#adding)
- [cast](/docs/testclasses/Weight.md#cast)
- [divide](/docs/testclasses/Weight.md#divide)
- [dividing](/docs/testclasses/Weight.md#dividing)
- [equals](/docs/testclasses/Weight.md#equals)
- [multiply](/docs/testclasses/Weight.md#multiply)
- [multiplying](/docs/testclasses/Weight.md#multiplying)
- [subtract](/docs/testclasses/Weight.md#subtract)
- [subtracting](/docs/testclasses/Weight.md#subtracting)
- [toABI](/docs/testclasses/Weight.md#toabi)
- [toJSON](/docs/testclasses/Weight.md#tojson)
- [toNumber](/docs/testclasses/Weight.md#tonumber)
- [toString](/docs/testclasses/Weight.md#tostring)
- [abiDefault](/docs/testclasses/Weight.md#abidefault)
- [add](/docs/testclasses/Weight.md#add-1)
- [div](/docs/testclasses/Weight.md#div)
- [divCeil](/docs/testclasses/Weight.md#divceil)
- [divRound](/docs/testclasses/Weight.md#divround)
- [from](/docs/testclasses/Weight.md#from)
- [fromABI](/docs/testclasses/Weight.md#fromabi)
- [mul](/docs/testclasses/Weight.md#mul)
- [random](/docs/testclasses/Weight.md#random)
- [sub](/docs/testclasses/Weight.md#sub)

## Constructors

### constructor

• **new Weight**(`value`)

Create a new instance, don't use this directly. Use the `.from` factory method instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BN` |

**`Throws`**

If the value over- or under-flows the integer type.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[constructor](/docs/testclasses/UInt16.md#constructor)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:556

## Properties

### value

• **value**: `BN`

The underlying BN.js instance – don't modify this
directly – take a copy first using `.clone()`.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[value](/docs/testclasses/UInt16.md#value)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:551

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[abiName](/docs/testclasses/UInt16.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:646

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[byteWidth](/docs/testclasses/UInt16.md#bytewidth)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:647

___

### isSigned

▪ `Static` **isSigned**: `boolean`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[isSigned](/docs/testclasses/UInt16.md#issigned)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:648

## Accessors

### byteArray

• `get` **byteArray**(): `Uint8Array`

Number as bytes in little endian (matches memory layout in C++ contract).

#### Returns

`Uint8Array`

#### Inherited from

UInt16.byteArray

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:563

___

### max

• `Static` `get` **max**(): `BN`

Largest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

UInt16.max

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:505

___

### min

• `Static` `get` **min**(): `BN`

Smallest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

UInt16.min

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:507

## Methods

### [toPrimitive]

▸ **[toPrimitive]**(`type`): `string` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string` \| `number`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[[toPrimitive]](/docs/testclasses/UInt16.md#[toprimitive])

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:604

___

### add

▸ **add**(`num`): `void`

Mutating add.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

`void`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[add](/docs/testclasses/UInt16.md#add)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:570

___

### adding

▸ **adding**(`num`): [`Weight`](/docs/testclasses/Weight.md)

Non-mutating add.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`Weight`](/docs/testclasses/Weight.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[adding](/docs/testclasses/UInt16.md#adding)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:572

___

### cast

▸ **cast**<`T`\>(`type`, `overflow?`): `InstanceType`<`T`\>

Cast this integer to other type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`Int`](/docs/testclasses/Int.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `T` | - |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) | How to handle overflow, default is to preserve bit-pattern (C++11 behavior). |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[cast](/docs/testclasses/UInt16.md#cast)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:561

___

### divide

▸ **divide**(`by`, `behavior?`): `void`

Mutating divide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `by` | `any` | - |
| `behavior?` | [`DivisionBehavior`](/docs/testREADME.md#divisionbehavior) | How to handle the remainder, default is to floor (round down). |

#### Returns

`void`

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[divide](/docs/testclasses/UInt16.md#divide)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:586

___

### dividing

▸ **dividing**(`by`, `behavior?`): [`Weight`](/docs/testclasses/Weight.md)

Non-mutating divide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `by` | `any` | - |
| `behavior?` | [`DivisionBehavior`](/docs/testREADME.md#divisionbehavior) | How to handle the remainder, default is to floor (round down). |

#### Returns

[`Weight`](/docs/testclasses/Weight.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[dividing](/docs/testclasses/UInt16.md#dividing)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:592

___

### equals

▸ **equals**(`other`, `strict?`): `boolean`

Compare two integers, if strict is set to true the test will only consider integers
of the exact same type. I.e. Int64.from(1).equals(UInt64.from(1)) will return false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `any` |
| `strict?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[equals](/docs/testclasses/UInt16.md#equals)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:568

___

### multiply

▸ **multiply**(`by`): `void`

Mutating multiply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `any` |

#### Returns

`void`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[multiply](/docs/testclasses/UInt16.md#multiply)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:578

___

### multiplying

▸ **multiplying**(`by`): [`Weight`](/docs/testclasses/Weight.md)

Non-mutating multiply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `any` |

#### Returns

[`Weight`](/docs/testclasses/Weight.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[multiplying](/docs/testclasses/UInt16.md#multiplying)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:580

___

### subtract

▸ **subtract**(`num`): `void`

Mutating subtract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

`void`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[subtract](/docs/testclasses/UInt16.md#subtract)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:574

___

### subtracting

▸ **subtracting**(`num`): [`Weight`](/docs/testclasses/Weight.md)

Non-mutating subtract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`Weight`](/docs/testclasses/Weight.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[subtracting](/docs/testclasses/UInt16.md#subtracting)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:576

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

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[toABI](/docs/testclasses/UInt16.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:605

___

### toJSON

▸ **toJSON**(): `string` \| `number`

Called when encoding to json abi format.

#### Returns

`string` \| `number`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[toJSON](/docs/testclasses/UInt16.md#tojson)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:606

___

### toNumber

▸ **toNumber**(): `number`

Convert to a JavaScript number.

#### Returns

`number`

**`Throws`**

If the number cannot be represented by 53-bits.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[toNumber](/docs/testclasses/UInt16.md#tonumber)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:602

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[toString](/docs/testclasses/UInt16.md#tostring)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:603

___

### abiDefault

▸ `Static` **abiDefault**(): [`Int`](/docs/testclasses/Int.md)

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[abiDefault](/docs/testclasses/UInt16.md#abidefault)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:544

___

### add

▸ `Static` **add**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Add `lhs` to `rhs` and return the resulting value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[add](/docs/testclasses/UInt16.md#add-1)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:509

___

### div

▸ `Static` **div**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Divide `lhs` by `rhs` and return the quotient, dropping the remainder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[div](/docs/testclasses/UInt16.md#div)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:518

___

### divCeil

▸ `Static` **divCeil**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Divide `lhs` by `rhs` and return the quotient + remainder rounded up to the closest integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[divCeil](/docs/testclasses/UInt16.md#divceil)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:528

___

### divRound

▸ `Static` **divRound**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Divide `lhs` by `rhs` and return the quotient + remainder rounded to the closest integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[divRound](/docs/testclasses/UInt16.md#divround)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:523

___

### from

▸ `Static` **from**<`T`\>(`this`, `value`, `overflow?`): `InstanceType`<`T`\>

Create a new instance from value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`Int`](/docs/testclasses/Int.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | - |
| `value` | `any` | Value to create new Int instance from, can be a string, number, little-endian byte array or another Int instance. |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) | How to handle integer overflow, default behavior is to throw. |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[from](/docs/testclasses/UInt16.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:540

▸ `Static` **from**(`value`, `overflow?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

`unknown`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[from](/docs/testclasses/UInt16.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:541

___

### fromABI

▸ `Static` **fromABI**<`T`\>(`this`, `decoder`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`Int`](/docs/testclasses/Int.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[fromABI](/docs/testclasses/UInt16.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:542

▸ `Static` **fromABI**(`decoder`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`unknown`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[fromABI](/docs/testclasses/UInt16.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:543

___

### mul

▸ `Static` **mul**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Multiply `lhs` by `rhs` and return the resulting value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[mul](/docs/testclasses/UInt16.md#mul)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:513

___

### random

▸ `Static` **random**<`T`\>(`this`): `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof [`Int`](/docs/testclasses/Int.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `T` |

#### Returns

`InstanceType`<`T`\>

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[random](/docs/testclasses/UInt16.md#random)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:545

▸ `Static` **random**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[random](/docs/testclasses/UInt16.md#random)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:546

___

### sub

▸ `Static` **sub**(`lhs`, `rhs`, `overflow?`): [`Int`](/docs/testclasses/Int.md)

Add `lhs` to `rhs` and return the resulting value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lhs` | [`Int`](/docs/testclasses/Int.md) |
| `rhs` | [`Int`](/docs/testclasses/Int.md) |
| `overflow?` | [`OverflowBehavior`](/docs/testREADME.md#overflowbehavior) |

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[UInt16](/docs/testclasses/UInt16.md).[sub](/docs/testclasses/UInt16.md#sub)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:511
