---
title: Asset
description: change_me
category: Antelope
published: false
---

# Asset

The `Asset` type represents a token balance on an Antelope chain and is the combination of two `UInt64` values, one for the token quantity and one for the token `Symbol`.

`10.0000 FOO` is a string representation of an `Asset`, with the first part being the quantity with an exact precision and the other being the token symbol.

## Usage

The `Asset` type can be imported and then initialized in multiple ways. The first and most common way to initialize an asset is by passing a formatted string.

```ts
import { Asset } from "@wharfkit/antelope"

const balance = Asset.from("1.0000 FOO")
```

The `Asset` will determine the decimal precision based on the amount of numbers after the decimal. In the above example, the precision is `4`. It will also determine the `Symbol` of the `Asset` based on the string that follows the numeric value. An internal representation of the value is also determined for use in integer-based math and is named `Units`.

An example representation of the above `Asset` in JSON data would be:

```json
{
  "precision": 4,
  "symbol": "FOO",
  "units": 10000,
  "value": 1
}
```

### From number

An `Asset` can also be created using a combination of numeric and `Symbol` data by passing the numeric value as the first parameter, followed by either a `Symbol` instance or a string representation of a symbol.

A string representation of a `Symbol` is a numeric value of the decimal precision, followed by the string asset label.

```ts
// 1 value + 4 precision + "foo" label
const balance = Asset.from(1, "4,FOO")
// 1.0000 FOO

// 0.05 value + 8 precision + "bar" label
const balance = Asset.from(0.05, "8,BAR")
// 0.05000000 BAR

// 0.05 value + 4 precision + "foo" label
const balance = Asset.from(0.05, Asset.Symbol.from("4,FOO"))
// 0.0500 FOO

// 0.05 value + 4 precision + "foo" label
const balance = Asset.from(0.05, Asset.Symbol.fromParts("FOO", 4))
// 0.0500 FOO
```

### From units

The `fromUnits` method is also available to build `Asset` instances when performing integer math.

```ts
// 10000 units + 4 precision + "EOS" label
const balance = Asset.fromUnits(10000, "4,EOS")
// 1.0000 EOS

// 100 units + 8 precision + "WAX" label
const balance = Asset.fromUnits(100, "8,WAX")
// 0.00000100 WAX

// 300 units + 4 precision + "FOO" label
const balance = Asset.fromUnits(300, "4,FOO")
// 0.0300 FOO
```

## Properties

With an `Asset` instance established, a number of properties are made readily available for use in applications.

### Value

Each `Asset` has a `.value` property which can be accessed to utilize the value of the asset as a native javascript `Number`.

```ts
const balance = Asset.from("10.0000 FOO")

console.log(balance.value) // Number(10)

const balance = Asset.from("0.0001 FOO")

console.log(balance.value) // Number(0.0001)
```

Due to the oddities surrounding floating point math in Javascript, if you need to perform mathematical operations on these values, it is recommended you use the `.units` value instead.

### Units

The units portion of an `Asset` contains the numeric amount of the asset represented as an `Int64` value. It can be accessed through the `.units` property on the `Asset`.

```ts
const balance = Asset.from("10.0000 FOO")

console.log(balance.units) // Int64.from(100000)
console.log(Number(balance.units)) // Number(100000)
```

With the `units` value of an asset being an `Int64`, it can make use of all the built-in [Int](#) math operations.

### Symbol

The `Symbol` portion of an `Asset` represents its name and decimal precision. The `.symbol` value exists on the `Asset` class, providing the string representation of the symbol and the precision.

```ts
const balance = Asset.from("10.00000000 FOO")
console.log(balance.symbol.name) // String('FOO')
console.log(balance.symbol.precision) // Number('8')
```

### Rendering Assets

When displaying an `Asset` to a user and a readable format is required, the asset object itself just needs to be cast to a `String`.

```ts
const balance = Asset.from("10.0000 FOO")

console.log(String(balance)) // "10.0000 FOO"
```
