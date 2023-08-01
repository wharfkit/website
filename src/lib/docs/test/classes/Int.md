[@wharfkit/session - v1.0.0](/docs/testREADME.md) / Int

# Class: Int

Binary integer with the underlying value represented by a BN.js instance.
Follows C++11 standard for arithmetic operators and conversions.

**`Note`**

This type is optimized for correctness not speed, if you plan to manipulate
      integers in a tight loop you're advised to use the underlying BN.js value or
      convert to a JavaScript number first.

## Hierarchy

- **`Int`**

  ↳ [`Int128`](/docs/testclasses/Int128.md)

  ↳ [`Int16`](/docs/testclasses/Int16.md)

  ↳ [`Int32`](/docs/testclasses/Int32.md)

  ↳ [`Int64`](/docs/testclasses/Int64.md)

  ↳ [`Int8`](/docs/testclasses/Int8.md)

  ↳ [`UInt128`](/docs/testclasses/UInt128.md)

  ↳ [`UInt16`](/docs/testclasses/UInt16.md)

  ↳ [`UInt32`](/docs/testclasses/UInt32.md)

  ↳ [`UInt64`](/docs/testclasses/UInt64.md)

  ↳ [`UInt8`](/docs/testclasses/UInt8.md)

  ↳ [`VarInt`](/docs/testclasses/VarInt.md)

  ↳ [`VarUInt`](/docs/testclasses/VarUInt.md)

## Implements

- [`ABISerializableObject`](/docs/testinterfaces/ABISerializableObject.md)

## Table of contents

### Constructors

- [constructor](/docs/testclasses/Int.md#constructor)

### Properties

- [value](/docs/testclasses/Int.md#value)
- [abiName](/docs/testclasses/Int.md#abiname)
- [byteWidth](/docs/testclasses/Int.md#bytewidth)
- [isSigned](/docs/testclasses/Int.md#issigned)

### Accessors

- [byteArray](/docs/testclasses/Int.md#bytearray)
- [max](/docs/testclasses/Int.md#max)
- [min](/docs/testclasses/Int.md#min)

### Methods

- [[toPrimitive]](/docs/testclasses/Int.md#[toprimitive])
- [add](/docs/testclasses/Int.md#add)
- [adding](/docs/testclasses/Int.md#adding)
- [cast](/docs/testclasses/Int.md#cast)
- [divide](/docs/testclasses/Int.md#divide)
- [dividing](/docs/testclasses/Int.md#dividing)
- [equals](/docs/testclasses/Int.md#equals)
- [multiply](/docs/testclasses/Int.md#multiply)
- [multiplying](/docs/testclasses/Int.md#multiplying)
- [subtract](/docs/testclasses/Int.md#subtract)
- [subtracting](/docs/testclasses/Int.md#subtracting)
- [toABI](/docs/testclasses/Int.md#toabi)
- [toJSON](/docs/testclasses/Int.md#tojson)
- [toNumber](/docs/testclasses/Int.md#tonumber)
- [toString](/docs/testclasses/Int.md#tostring)
- [abiDefault](/docs/testclasses/Int.md#abidefault)
- [add](/docs/testclasses/Int.md#add-1)
- [div](/docs/testclasses/Int.md#div)
- [divCeil](/docs/testclasses/Int.md#divceil)
- [divRound](/docs/testclasses/Int.md#divround)
- [from](/docs/testclasses/Int.md#from)
- [fromABI](/docs/testclasses/Int.md#fromabi)
- [mul](/docs/testclasses/Int.md#mul)
- [random](/docs/testclasses/Int.md#random)
- [sub](/docs/testclasses/Int.md#sub)

## Constructors

### constructor

• **new Int**(`value`)

Create a new instance, don't use this directly. Use the `.from` factory method instead.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `BN` |

**`Throws`**

If the value over- or under-flows the integer type.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:556

## Properties

### value

• **value**: `BN`

The underlying BN.js instance – don't modify this
directly – take a copy first using `.clone()`.

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:551

___

### abiName

▪ `Static` **abiName**: `string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:501

___

### byteWidth

▪ `Static` **byteWidth**: `number`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:503

___

### isSigned

▪ `Static` **isSigned**: `boolean`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:502

## Accessors

### byteArray

• `get` **byteArray**(): `Uint8Array`

Number as bytes in little endian (matches memory layout in C++ contract).

#### Returns

`Uint8Array`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:563

___

### max

• `Static` `get` **max**(): `BN`

Largest value that can be represented by this integer type.

#### Returns

`BN`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:505

___

### min

• `Static` `get` **min**(): `BN`

Smallest value that can be represented by this integer type.

#### Returns

`BN`

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:570

___

### adding

▸ **adding**(`num`): [`Int`](/docs/testclasses/Int.md)

Non-mutating add.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`Int`](/docs/testclasses/Int.md)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:586

___

### dividing

▸ **dividing**(`by`, `behavior?`): [`Int`](/docs/testclasses/Int.md)

Non-mutating divide.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `by` | `any` | - |
| `behavior?` | [`DivisionBehavior`](/docs/testREADME.md#divisionbehavior) | How to handle the remainder, default is to floor (round down). |

#### Returns

[`Int`](/docs/testclasses/Int.md)

**`Throws`**

When dividing by zero.

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

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[equals](/docs/testinterfaces/ABISerializableObject.md#equals)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:578

___

### multiplying

▸ **multiplying**(`by`): [`Int`](/docs/testclasses/Int.md)

Non-mutating multiply.

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | `any` |

#### Returns

[`Int`](/docs/testclasses/Int.md)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:574

___

### subtracting

▸ **subtracting**(`num`): [`Int`](/docs/testclasses/Int.md)

Non-mutating subtract.

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `any` |

#### Returns

[`Int`](/docs/testclasses/Int.md)

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

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toABI](/docs/testinterfaces/ABISerializableObject.md#toabi)

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:605

___

### toJSON

▸ **toJSON**(): `string` \| `number`

Called when encoding to json abi format.

#### Returns

`string` \| `number`

#### Implementation of

[ABISerializableObject](/docs/testinterfaces/ABISerializableObject.md).[toJSON](/docs/testinterfaces/ABISerializableObject.md#tojson)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:602

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:603

___

### abiDefault

▸ `Static` **abiDefault**(): [`Int`](/docs/testclasses/Int.md)

#### Returns

[`Int`](/docs/testclasses/Int.md)

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:542

▸ `Static` **fromABI**(`decoder`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decoder` | [`ABIDecoder`](/docs/testclasses/ABIDecoder.md) |

#### Returns

`unknown`

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:545

▸ `Static` **random**(): `unknown`

#### Returns

`unknown`

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

#### Defined in

node_modules/@wharfkit/antelope/lib/antelope.d.ts:511
