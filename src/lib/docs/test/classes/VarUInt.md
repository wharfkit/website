[@wharfkit/session - v1.0.0](/docs/testREADME.md) / VarUInt

# Class: VarUInt

Binary integer with the underlying value represented by a BN.js instance.
Follows C++11 standard for arithmetic operators and conversions.

**`Note`**

This type is optimized for correctness not speed, if you plan to manipulate
      integers in a tight loop you're advised to use the underlying BN.js value or
      convert to a JavaScript number first.

## Hierarchy

- [`Int`](/docs/testclasses/Int.md)

  ↳ **`VarUInt`**

## Table of contents

### Constructors

- [constructor](/docs/testclasses/VarUInt.md#constructor)

### Properties

- [value](/docs/testclasses/VarUInt.md#value)
- [abiName](/docs/testclasses/VarUInt.md#abiname)
- [byteWidth](/docs/testclasses/VarUInt.md#bytewidth)
- [isSigned](/docs/testclasses/VarUInt.md#issigned)

### Accessors

- [byteArray](/docs/testclasses/VarUInt.md#bytearray)
- [max](/docs/testclasses/VarUInt.md#max)
- [min](/docs/testclasses/VarUInt.md#min)

### Methods

- [[toPrimitive]](/docs/testclasses/VarUInt.md#[toprimitive])
- [add](/docs/testclasses/VarUInt.md#add)
- [adding](/docs/testclasses/VarUInt.md#adding)
- [cast](/docs/testclasses/VarUInt.md#cast)
- [divide](/docs/testclasses/VarUInt.md#divide)
- [dividing](/docs/testclasses/VarUInt.md#dividing)
- [equals](/docs/testclasses/VarUInt.md#equals)
- [multiply](/docs/testclasses/VarUInt.md#multiply)
- [multiplying](/docs/testclasses/VarUInt.md#multiplying)
- [subtract](/docs/testclasses/VarUInt.md#subtract)
- [subtracting](/docs/testclasses/VarUInt.md#subtracting)
- [toABI](/docs/testclasses/VarUInt.md#toabi)
- [toJSON](/docs/testclasses/VarUInt.md#tojson)
- [toNumber](/docs/testclasses/VarUInt.md#tonumber)
- [toString](/docs/testclasses/VarUInt.md#tostring)
- [abiDefault](/docs/testclasses/VarUInt.md#abidefault)
- [add](/docs/testclasses/VarUInt.md#add-1)
- [div](/docs/testclasses/VarUInt.md#div)
- [divCeil](/docs/testclasses/VarUInt.md#divceil)
- [divRound](/docs/testclasses/VarUInt.md#divround)
- [from](/docs/testclasses/VarUInt.md#from)
- [fromABI](/docs/testclasses/VarUInt.md#fromabi)
- [mul](/docs/testclasses/VarUInt.md#mul)
- [random](/docs/testclasses/VarUInt.md#random)
- [sub](/docs/testclasses/VarUInt.md#sub)

## Constructors

### constructor

• **new VarUInt**(`value`)

Create a new instance, don't use this directly. Use the `.from` factory method instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BN` |

**`Throws`**

If the value over- or under-flows the integer type.

#### Inherited from

[Int](/docs/testclasses/Int.md).[constructor](/docs/testclasses/Int.md#constructor)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:556

## Properties

### value

• **value**: `BN`

The underlying BN.js instance – don't modify this
directly – take a copy first using `.clone()`.

#### Inherited from

[Int](/docs/testclasses/Int.md).[value](/docs/testclasses/Int.md#value)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:551

___

### abiName

▪ `Static` **abiName**: `string`

#### Overrides

[Int](/docs/testclasses/Int.md).[abiName](/docs/testclasses/Int.md#abiname)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:678

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Overrides

[Int](/docs/testclasses/Int.md).[byteWidth](/docs/testclasses/Int.md#bytewidth)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:679

___

### isSigned

▪ `Static` **isSigned**: `boolean`

#### Overrides

[Int](/docs/testclasses/Int.md).[isSigned](/docs/testclasses/Int.md#issigned)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:680

## Accessors

### byteArray

• `get` **byteArray**(): `Uint8Array`

Number as bytes in little endian (matches memory layout in C++ contract).

#### Returns

`Uint8Array`

#### Inherited from

Int.byteArray

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:563

___

### max

• `Static` `get` **max**(): `BN`

Largest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

Int.max

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:505

___

### min

• `Static` `get` **min**(): `BN`

Smallest value that can be represented by this integer type.

#### Returns

`BN`

#### Inherited from

Int.min

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

[Int](/docs/testclasses/Int.md).[[toPrimitive]](/docs/testclasses/Int.md#[toprimitive])

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

[Int](/docs/testclasses/Int.md).[add](/docs/testclasses/Int.md#add)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:570

___

### adding

▸ **adding**(`num`): [`VarUInt`](/docs/testclasses/VarUInt.md)

Non-mutating add.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`VarUInt`](/docs/testclasses/VarUInt.md)

#### Inherited from

[Int](/docs/testclasses/Int.md).[adding](/docs/testclasses/Int.md#adding)

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

[Int](/docs/testclasses/Int.md).[cast](/docs/testclasses/Int.md#cast)

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

[Int](/docs/testclasses/Int.md).[divide](/docs/testclasses/Int.md#divide)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:586

___

### dividing

▸ **dividing**(`by`, `behavior?`): [`VarUInt`](/docs/testclasses/VarUInt.md)

Non-mutating divide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `by` | `any` | - |
| `behavior?` | [`DivisionBehavior`](/docs/testREADME.md#divisionbehavior) | How to handle the remainder, default is to floor (round down). |

#### Returns

[`VarUInt`](/docs/testclasses/VarUInt.md)

**`Throws`**

When dividing by zero.

#### Inherited from

[Int](/docs/testclasses/Int.md).[dividing](/docs/testclasses/Int.md#dividing)

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

[Int](/docs/testclasses/Int.md).[equals](/docs/testclasses/Int.md#equals)

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

[Int](/docs/testclasses/Int.md).[multiply](/docs/testclasses/Int.md#multiply)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:578

___

### multiplying

▸ **multiplying**(`by`): [`VarUInt`](/docs/testclasses/VarUInt.md)

Non-mutating multiply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `any` |

#### Returns

[`VarUInt`](/docs/testclasses/VarUInt.md)

#### Inherited from

[Int](/docs/testclasses/Int.md).[multiplying](/docs/testclasses/Int.md#multiplying)

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

[Int](/docs/testclasses/Int.md).[subtract](/docs/testclasses/Int.md#subtract)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:574

___

### subtracting

▸ **subtracting**(`num`): [`VarUInt`](/docs/testclasses/VarUInt.md)

Non-mutating subtract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`VarUInt`](/docs/testclasses/VarUInt.md)

#### Inherited from

[Int](/docs/testclasses/Int.md).[subtracting](/docs/testclasses/Int.md#subtracting)

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

#### Overrides

[Int](/docs/testclasses/Int.md).[toABI](/docs/testclasses/Int.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:682

___

### toJSON

▸ **toJSON**(): `string` \| `number`

Called when encoding to json abi format.

#### Returns

`string` \| `number`

#### Inherited from

[Int](/docs/testclasses/Int.md).[toJSON](/docs/testclasses/Int.md#tojson)

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

[Int](/docs/testclasses/Int.md).[toNumber](/docs/testclasses/Int.md#tonumber)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:602

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Int](/docs/testclasses/Int.md).[toString](/docs/testclasses/Int.md#tostring)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:603

___

### abiDefault

▸ `Static` **abiDefault**(): [`Int`](/docs/testclasses/Int.md)

#### Returns

[`Int`](/docs/testclasses/Int.md)

#### Inherited from

[Int](/docs/testclasses/Int.md).[abiDefault](/docs/testclasses/Int.md#abidefault)

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

[Int](/docs/testclasses/Int.md).[add](/docs/testclasses/Int.md#add-1)

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

[Int](/docs/testclasses/Int.md).[div](/docs/testclasses/Int.md#div)

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

[Int](/docs/testclasses/Int.md).[divCeil](/docs/testclasses/Int.md#divceil)

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

[Int](/docs/testclasses/Int.md).[divRound](/docs/testclasses/Int.md#divround)

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

[Int](/docs/testclasses/Int.md).[from](/docs/testclasses/Int.md#from)

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

[Int](/docs/testclasses/Int.md).[from](/docs/testclasses/Int.md#from)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:541

___

### fromABI

▸ `Static` **fromABI**(`decoder`): [`VarUInt`](/docs/testclasses/VarUInt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

[`VarUInt`](/docs/testclasses/VarUInt.md)

#### Overrides

[Int](/docs/testclasses/Int.md).[fromABI](/docs/testclasses/Int.md#fromabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:681

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

[Int](/docs/testclasses/Int.md).[mul](/docs/testclasses/Int.md#mul)

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

[Int](/docs/testclasses/Int.md).[random](/docs/testclasses/Int.md#random)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:545

▸ `Static` **random**(): `unknown`

#### Returns

`unknown`

#### Inherited from

[Int](/docs/testclasses/Int.md).[random](/docs/testclasses/Int.md#random)

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

[Int](/docs/testclasses/Int.md).[sub](/docs/testclasses/Int.md#sub)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:511
