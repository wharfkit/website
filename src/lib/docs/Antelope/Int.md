---
title: Int
description: change_me
category: Antelope
published: false
---

# Int

The `Int` base type extends into a family of different binary integer types with underlying values represented by a [BN.js](https://github.com/indutny/bn.js) instance. These types by default follows C++11 standard for arithmetic operators and conversions to mirror operations found in Antelope smart contracts.

## Variants

While the base `Int` type is never used directly, it provides common functionality for all of the following core types below.

- Int8
- Int16
- Int32
- Int64
- Int128
- UInt8
- UInt16
- UInt32
- UInt64
- UInt128
- VarInt
- VarUInt

These can all be included in projects for direct use and are returned by a number of different API requests. They are all used in the internals of other core types, like the `UInt64` value contained in the [Name](#) type or the [Asset](#) type containing both a `UInt64` and `Int64` value.

## Usage

Any of the above variants of `Int` can be included and used in a project. These examples throughout this document will primarily use the `UInt64` type, but it's important to note that all operations and usage will be similar no matter which of the types are used.

### Basic Usage

```ts
import { UInt64 } from "@wharfkit/antelope"

const integer = UInt64.from(12345678)
```

All `Int` types internally will use instance of BN.js, which which can be accessed as the `.value` property.

```ts
const integer = UInt64.from(12345678)

integer // UInt64 instance
integer.value // BN.js instance
```

### Equality

Every variant has an `.equals()` operator which can compare the equality of two `Int` types, or between an `Uint8Array` and `Int` type.

```ts
const a = UInt64.from(1)
const b = UInt64.from(1)
const c = UInt128.from(1)

const isEqual = a.equals(b) // results in `true`
const isEqual = a.equals(c) // results in `true`
const isEqual = a.equals(1) // results in `true`

const isEqual = a.equals(2) // results in `false`
```

A secondary boolean parameter offers strict checking, which will cause the comparison to only be valid if the `Int` types are the same type.

```ts
const a = Int64.from(1)
const b = Int64.from(1)
const c = UInt64.from(1)

const isEqual = a.equals(b, true) // results in `true`
const isEqual = a.equals(c, true) // results in `false`, since a is Int64 and c is UInt64
```

### Math

A number of mathematical operations has been implemented using bn.js and exposed through helpers on every `Int` type.

All return values will be typed to match the types of the integers used in the operation.

These mathematical operations are exposed in two ways, one which allows mutation of the current integer value and another which performs the operation without mutation and returns the value.

#### Return Value

The non-mutating variant of these calls will apply the operations to two `Int` types and provide a return value.

```ts
const a = UInt64.from(2)
const b = UInt64.from(4)

const sum = a.adding(b)
// 2 + 4 = 6
console.log(sum) // UInt64.from(6)
console.log(Number(sum)) // 6

const difference = b.subtracting(a)
// 4 - 2 = 2
console.log(difference) // UInt64.from(2)
console.log(Number(difference)) // 2

const product = a.multiplying(b)
// 2 * 4 = 8
console.log(product) // UInt64.from(8)
console.log(Number(product)) // 8

const quotient = b.dividing(a)
// 4 / 2 = 2
console.log(quotient) // UInt64.from(2)
console.log(Number(quotient)) // 2
```

#### Mutating

The mutating variant of these calls will perform the mathematical operation and mutate the value of the `Int`.

```ts
const a = UInt64.from(2)
const b = UInt64.from(4)
const c = UInt64.from(5)

console.log(Number(a)) // 2

a.add(b) // 2 + 4 = 6
console.log(Number(a)) // 6

a.subtract(c) // 6 - 5 = 1
console.log(Number(a)) // 1

a.multiply(b) // 1 * 4 = 4
console.log(Number(a)) // 4

a.divide(2) // 4 / 2 = 2
console.log(Number(a)) // 2
```

#### Behavior

##### OverflowBehavior

When an `Int` type overflows its maximum value, one of the defined behaviors will be used to handle the overflow. A secondary parameter on relevant mathematical operators can be provided to override how this is handled.

- `truncate` (default): Truncates or extends bit-pattern with sign extension (C++11 behavior).
- `throw`: Throws an error if value overflows (or underflows).
- `clamp`: Clamps the value within the supported range.

##### DivisionBehavior

When using the division operator on integers, any remainder needs to be automatically handled. For this, a second parameter can optionally be provided to decide which of the 3 options are used:

- `floor` (default): Round down to nearest integer.
- `round`: Round to nearest integer.
- `ceil`: Round up to nearest integer.

### Static Methods

All `Int` core types offer static methods based on their integer type.

#### Minimum Value

```ts
// Retrieve the minimum value for a UInt64 as a UInt64
const minimum = UInt64.min()

console.log(minimum)
// BN { negative: 0, words: [ 0 ], length: 1, red: null }

console.log(Number(minimum))
// 0
```

#### Maximum Value

```ts
// Retrieve the maximum value for a UInt64 as a UInt64
const maximum = UInt64.max()

console.log(maximum)
/*
BN {
  negative: 0,
  words: [ 67108863, 67108863, 4095, <1 empty item> ],
  length: 3,
  red: null
}
*/

console.log(Number(maximum))
// 18446744073709552000
```
