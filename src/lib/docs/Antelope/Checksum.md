---
title: Checksum
description: Create and compare checksum hashes utilized within the Antelope ecosystem.
category: Antelope
published: true
---

# Checksum

The `Checksum` type is the base of a family of different checksum types used for hashing different [Bytes](/docs/antelope/bytes) values. Each variant can be used to compute the hash of a given value and also provide equality helpers for comparison purposes.

## Variants

While the base `Checksum` type is never used directly, it provides common functionality for all of the following core types:

- Checksum160 (ripemd160)
- Checksum256 (sha256)
- Checksum512 (sha512)

These types can all be included in projects, for use in the various places we typically find these types of hashes (e.g. Chain ID, Transaction ID).

## Usage

Any of the above variants can be included and used in a project. For the example below, the `Checksum256` type is being used, but identical syntax is available for `Checksum160` and `Checksum512`.

### Casting

When given a string or a [Bytes](/docs/antelope/bytes) type, the data can be passed into the `.from()` method to establish a new instance of a `Checksum`.

```ts
import { Checksum256 } from "@wharfkit/antelope"

const checksum = Checksum256.from(
  "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d"
)
```

### Hashing

The `Checksum` variants also offer a static `.hash()` method, which allows computing a checksum of any [Bytes](/docs/antelope/bytes) type provided.

```ts
import { Checksum256 } from "@wharfkit/antelope"

const bytes = Bytes.from("hello world", "utf8")
const checksum = Checksum256.hash(bytes)

// Show the Checksum256 instance
console.log(checksum)
/*
Checksum256 {
  array: Uint8Array(32) [
    185,  77,  39, 185, 147,  77,  62,
      8, 165,  46,  82, 215, 218, 125,
    171, 250, 196, 132, 239, 227, 122,
     83, 128, 238, 144, 136, 247, 172,
    226, 239, 205, 233
  ]
}
*/

// Output as a string
console.log(String(checksum))
// b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```
