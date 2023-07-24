---
title: Name
description: change_me
category: Antelope
published: false
---

# Name

Throughout the Antelope technology stack, the `Name` core type is used for human readable text. These are used for the names for accounts, permissions, and are commonly used in smart contract structures.

## Anatomy

Behind the scenes the `Name` type is encoded as an [Int](#) type of `UInt64`. This creates limitations on which characters can be used, which are:

- Limited to 12 characters (13 in rare situations)
- No special characters or spaces (except the period character in premium names)
- Only lower case letters `a-z` are allowed
- Only the numbers `1-5` may be used

The regex syntax for these rules is:

```regex
/^[a-z1-5.]{0,13}$/
```

## Usage

```ts
import { Name } from "@wharfkit/antelope"

const value = Name.from("teamgreymass")
```

By default if you log or access this variable, it'll render out the the `Name` type.

```ts
const value = Name.from('teamgreymass')

console.log(value)
/*
Name {
  value: UInt64 {
    value: BN { negative: 0, words: [Array], length: 3, red: null }
  }
}
/*
```

If you cast it to a `String`, you'll be able to see the human readable value.

```ts
const value = Name.from("teamgreymass")

console.log(String(value)) // 'teamgreymass'
```

The `UInt64` value of the name itself can be accessed through the `.value` property of the name.

```ts
const accountName = Name.from("teamgreymass")

console.log(accountName.value) // UInt64 value of the name
console.log(String(accountName.value)) // '14595364149838066048'
```

### Equality

When working with the `Name` core type, using standard logic to compare a string and a `Name` won't work.

```ts
const stringValue = "teamgreymass"
const nameValue = Name.from(string)

if (stringValue === nameValue) {
  // this will not trigger, the values aren't equal
}
```

Instead of doing string comparisons in your code, its recommended you use the `equals` operator to check for equality.

```ts
const stringValue = "teamgreymass"
const nameValue = Name.from(string)

if (nameValue.equals(stringValue)) {
  // this will trigger using the `equals` operator
}
```

The `equals` operator will allow comparison between any valid `Name` type, including plain strings, other `Name` instances, and `UInt64` instances.

```ts
const accountName = Name.from("teamgreymass")

accountName.equals("teamgreymass") // true
accountName.equals(Name.from("teamgreymass")) // true

const uint64 = UInt64.from("14595364149838066048")

accountName.equals(uint64) // true
```
