---
title: Basics
description: change_me
category: Antelope
published: false
---

## Installing

This library is distributed through npmjs.org and can be installed as a dependency in your project as follows.

```
npm install --save @wharfkit/antelope
```

```
yarn add @wharfkit/antelope
```

If you are using the [SessionKit](#) or [ContractKit](#), this package will automatically be included as a dependency in your project and available for use.

## Imports

All Antelope types and classes from this library can be included using the following syntax:

```ts
import { APIClient } from "@wharfkit/antelope"
```

## From

Every Antelope core type uses the `.from` static method as a way to create typed objects.

```ts
const balance = Asset.from("0.0001 TOKENS")
const account = Name.from("teamgreymass")
const signature = Signature.from("SIG_K1_...")
```

This `.from` method accepts any valid input, including an already matching type, allowing you to ensure typed values in specific operations as shown below.

```ts
function foo(stringOrName: string | Name) {
  // Always cast to Name type
  const typedName = Name.from(stringOrName)

  // do things with `typedName` as Name
}

// Passing in a string
foo("teamgreymass")

// Passing in an already typed Name
foo(Name.from("teamgreymass"))
```

Neither of these will throw errors, and the function will always ensure it's a `Name` type.

## Type Groupings

Many of the Antelope core types also have type groupings predefined for use in the codebase.

Given the above example, where we want a function to accept any variant of a `Name` type, we can use `NameType`.

```ts
function foo(value: NameType) {
  // Always cast to Name type
  const name = Name.from(value)

  // do things with `name` as Name
}
```

Looking at the [source code](https://github.com/wharfkit/antelope/blob/070bfb3bfe4b5f50f031dc58eb18090806e06c07/src/chain/name.ts#L9), we can see that `NameType` is exported as:

```ts
export type NameType = Name | UInt64 | string
```

These are the valid types that `Name.from()` will accept. This pattern repeats for the majority of Antelope core types.

```ts
export type AssetType = Asset | string

export type AuthorityType =
  | Authority
  | {
      threshold: UInt32Type
      keys?: { key: PublicKeyType; weight: UInt16Type }[]
      accounts?: { permission: PermissionLevelType; weight: UInt16Type }[]
      waits?: { wait_sec: UInt32Type; weight: UInt16Type }[]
    }

export type BytesType = Bytes | ArrayBufferView | ArrayBuffer | ArrayLike<number> | string

// etc...
```

## Equality

Every Antelope core type has an `.equals()` function to help compare different types of data (strings vs types, etc)

```ts
const name = Name.from("teamgreymass")

const equals1 = name === "teamgreymass"
// equals1 is false, one is Name type and one is string

const equals2 = name.equals("teamgreymass")
// equals2 is true, the equals function does type conversion for accurate comparision

const equals3 = name.equals(Name.from("teamgreymass"))
// equals3 is true, the equals function accepts any valid type grouping
```

Each `.equals` method accepts any of the valid type groupings as an input parameter.
