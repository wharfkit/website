---
title: Bytes
description: The byte representation used internally for all Antelope data types and serialization
category: Antelope
published: true
---

# Bytes

The `Bytes` type is the internal type used for the majority of other Antelope types and is regularly used in conjunction with the [Serializer](/docs/antelope/serializer). The `Bytes` type is capable of wrapping hex, utf-8, and native JavaScript buffers and arrays, which it internally stores as a `Uint8Array`.

## Usage

The `Bytes` type acts as the base data format for many other Antelope types, and so occasionally developers will need to coerce their data into one of the `BytesTypes`. This conversion can be performed by using the `Bytes.from` method and passing in any of the supported types.

```ts
import { Bytes } from "@wharfkit/antelope"

const bytes = Bytes.from("68656c6c6f20776f726c64")
```

The `Bytes.from` method accepts any of the following parameter types by default:

```ts
export type BytesType =
  | Bytes
  | ArrayBufferView
  | ArrayBuffer
  | ArrayLike<number>
  | string
```

When passing in a `string` value, it expects a hex string by default. UTF-8 strings are also accepted, but require a 2nd parameter as a type to indicate it should be converted.

```ts
import { Bytes } from "@wharfkit/antelope"

const bytes = Bytes.from("hello world", "utf8")
```

Once the `Bytes` instance is established, it can be output in any of the other possible formats.

```ts
import { Bytes } from "@wharfkit/antelope"

const bytes = Bytes.from("68656c6c6f20776f726c64")

// defaults to hex when cast to string
console.log(String(bytes))
// 68656c6c6f20776f726c64

// output utf8 string
console.log(bytes.utf8String)
// hello world

// access the internal Uint8Array
console.log(bytes.array)
/*
Uint8Array(11) [
  104, 101, 108, 108,
  111,  32, 119, 111,
  114, 108, 100
]
*/
```

##
