[@wharfkit/session - v1.0.0](/docs/testREADME.md) / ChainAlias

# Class: ChainAlias

Binary integer with the underlying value represented by a BN.js instance.
Follows C++11 standard for arithmetic operators and conversions.

**`Note`**

This type is optimized for correctness not speed, if you plan to manipulate
      integers in a tight loop you're advised to use the underlying BN.js value or
      convert to a JavaScript number first.

## Hierarchy

- [`UInt8`](/docs/testclasses/UInt8.md)

  ↳ **`ChainAlias`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/ChainAlias.md#constructor)

### Properties

- [value](/docs/testclasses/ChainAlias.md#value)
- [abiName](/docs/testclasses/ChainAlias.md#abiname)
- [byteWidth](/docs/testclasses/ChainAlias.md#bytewidth)
- [isSigned](/docs/testclasses/ChainAlias.md#issigned)

### Accessors

- [byteArray](/docs/testclasses/ChainAlias.md#bytearray)
- [max](/docs/testclasses/ChainAlias.md#max)
- [min](/docs/testclasses/ChainAlias.md#min)

### Methods

- [[toPrimitive]](/docs/testclasses/ChainAlias.md#[toprimitive])
- [add](/docs/testclasses/ChainAlias.md#add)
- [adding](/docs/testclasses/ChainAlias.md#adding)
- [cast](/docs/testclasses/ChainAlias.md#cast)
- [divide](/docs/testclasses/ChainAlias.md#divide)
- [dividing](/docs/testclasses/ChainAlias.md#dividing)
- [equals](/docs/testclasses/ChainAlias.md#equals)
- [multiply](/docs/testclasses/ChainAlias.md#multiply)
- [multiplying](/docs/testclasses/ChainAlias.md#multiplying)
- [subtract](/docs/testclasses/ChainAlias.md#subtract)
- [subtracting](/docs/testclasses/ChainAlias.md#subtracting)
- [toABI](/docs/testclasses/ChainAlias.md#toabi)
- [toJSON](/docs/testclasses/ChainAlias.md#tojson)
- [toNumber](/docs/testclasses/ChainAlias.md#tonumber)
- [toString](/docs/testclasses/ChainAlias.md#tostring)
- [abiDefault](/docs/testclasses/ChainAlias.md#abidefault)
- [add](/docs/testclasses/ChainAlias.md#add-1)
- [div](/docs/testclasses/ChainAlias.md#div)
- [divCeil](/docs/testclasses/ChainAlias.md#divceil)
- [divRound](/docs/testclasses/ChainAlias.md#divround)
- [from](/docs/testclasses/ChainAlias.md#from)
- [fromABI](/docs/testclasses/ChainAlias.md#fromabi)
- [mul](/docs/testclasses/ChainAlias.md#mul)
- [random](/docs/testclasses/ChainAlias.md#random)
- [sub](/docs/testclasses/ChainAlias.md#sub)

## Constructors

### constructor

• **new ChainAlias**(`value`)

Create a new instance, don't use this directly. Use the `.from` factory method instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BN` |

**`Throws`**

If the value over- or under-flows the integer type.

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[constructor](/docs/testclasses/UInt8.md#constructor)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:556

## Properties

### value

• **value**: `BN`

The underlying BN.js instance – don't modify this
directly – take a copy first using `.clone()`.

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[value](/docs/testclasses/UInt8.md#value)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:551

___

### abiName

▪ `Static` **abiName**: `string`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[abiName](/docs/testclasses/UInt8.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:640

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[byteWidth](/docs/testclasses/UInt8.md#bytewidth)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:641

___

### isSigned

▪ `Static` **isSigned**: `boolean`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[isSigned](/docs/testclasses/UInt8.md#issigned)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:642

## Accessors

### byteArray

• `get` **byteArray**(): `Uint8Array`

Number as bytes in little endian (matches memory layout in C++ contract).

#### Returns

`Uint8Array`

#### Inherited from

UInt8.byteArray

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:563

___

### max

• `Static` `get` **max**(): `BN`

Largest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

UInt8.max

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:505

___

### min

• `Static` `get` **min**(): `BN`

Smallest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

UInt8.min

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

[UInt8](/docs/testclasses/UInt8.md).[[toPrimitive]](/docs/testclasses/UInt8.md#[toprimitive])

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

[UInt8](/docs/testclasses/UInt8.md).[add](/docs/testclasses/UInt8.md#add)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:570

___

### adding

▸ **adding**(`num`): [`ChainAlias`](/docs/testclasses/ChainAlias.md)

Non-mutating add.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`ChainAlias`](/docs/testclasses/ChainAlias.md)

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[adding](/docs/testclasses/UInt8.md#adding)

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

[UInt8](/docs/testclasses/UInt8.md).[cast](/docs/testclasses/UInt8.md#cast)

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

[UInt8](/docs/testclasses/UInt8.md).[divide](/docs/testclasses/UInt8.md#divide)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:586

___

### dividing

▸ **dividing**(`by`, `behavior?`): [`ChainAlias`](/docs/testclasses/ChainAlias.md)

Non-mutating divide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `by` | `any` | - |
| `behavior?` | [`DivisionBehavior`](/docs/testREADME.md#divisionbehavior) | How to handle the remainder, default is to floor (round down). |

#### Returns

[`ChainAlias`](/docs/testclasses/ChainAlias.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[dividing](/docs/testclasses/UInt8.md#dividing)

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

[UInt8](/docs/testclasses/UInt8.md).[equals](/docs/testclasses/UInt8.md#equals)

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

[UInt8](/docs/testclasses/UInt8.md).[multiply](/docs/testclasses/UInt8.md#multiply)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:578

___

### multiplying

▸ **multiplying**(`by`): [`ChainAlias`](/docs/testclasses/ChainAlias.md)

Non-mutating multiply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `any` |

#### Returns

[`ChainAlias`](/docs/testclasses/ChainAlias.md)

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[multiplying](/docs/testclasses/UInt8.md#multiplying)

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

[UInt8](/docs/testclasses/UInt8.md).[subtract](/docs/testclasses/UInt8.md#subtract)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:574

___

### subtracting

▸ **subtracting**(`num`): [`ChainAlias`](/docs/testclasses/ChainAlias.md)

Non-mutating subtract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`ChainAlias`](/docs/testclasses/ChainAlias.md)

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[subtracting](/docs/testclasses/UInt8.md#subtracting)

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

[UInt8](/docs/testclasses/UInt8.md).[toABI](/docs/testclasses/UInt8.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:605

___

### toJSON

▸ **toJSON**(): `string` \| `number`

Called when encoding to json abi format.

#### Returns

`string` \| `number`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[toJSON](/docs/testclasses/UInt8.md#tojson)

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

[UInt8](/docs/testclasses/UInt8.md).[toNumber](/docs/testclasses/UInt8.md#tonumber)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:602

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[toString](/docs/testclasses/UInt8.md#tostring)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:603

___

### abiDefault

▸ `Static` **abiDefault**(): [`Int`](/docs/testclasses/Int.md)

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[abiDefault](/docs/testclasses/UInt8.md#abidefault)

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

[UInt8](/docs/testclasses/UInt8.md).[add](/docs/testclasses/UInt8.md#add-1)

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

[UInt8](/docs/testclasses/UInt8.md).[div](/docs/testclasses/UInt8.md#div)

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

[UInt8](/docs/testclasses/UInt8.md).[divCeil](/docs/testclasses/UInt8.md#divceil)

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

[UInt8](/docs/testclasses/UInt8.md).[divRound](/docs/testclasses/UInt8.md#divround)

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

[UInt8](/docs/testclasses/UInt8.md).[from](/docs/testclasses/UInt8.md#from)

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

[UInt8](/docs/testclasses/UInt8.md).[from](/docs/testclasses/UInt8.md#from)

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

[UInt8](/docs/testclasses/UInt8.md).[fromABI](/docs/testclasses/UInt8.md#fromabi)

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

[UInt8](/docs/testclasses/UInt8.md).[fromABI](/docs/testclasses/UInt8.md#fromabi)

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

[UInt8](/docs/testclasses/UInt8.md).[mul](/docs/testclasses/UInt8.md#mul)

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

[UInt8](/docs/testclasses/UInt8.md).[random](/docs/testclasses/UInt8.md#random)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:545

▸ `Static` **random**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[UInt8](/docs/testclasses/UInt8.md).[random](/docs/testclasses/UInt8.md#random)

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

[UInt8](/docs/testclasses/UInt8.md).[sub](/docs/testclasses/UInt8.md#sub)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:511
