---
title: PrivateKey
description: Utilize the PrivateKey type to sign data and create signatures, retrieve the associated PublicKey, and manage the string formats used in Antelope blockchains.
category: Antelope
published: true
---

# PrivateKey

The `PrivateKey` core type represents an instance of a private key for use in [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). Each instance of `PrivateKey` can be used to sign data to create a [Signature](#), retrieve the associated [PublicKey](#), and convert between the private key formats supported in Antelope blockchains,

## Anatomy of a PrivateKey

On an instance of `PrivateKey`, the key data is stored on the property `.data` as [Bytes](#) and is associated with a specific curve (`K1`, `W1` and `WA`) using the `.type` property.

```ts
PrivateKey {
  type: 'K1',
  data: Bytes {
    array: Uint8Array(32) [
        1,  61, 251,  45,   2,  71,  0,  29,
      250,  74, 167,  22,   9, 232, 57,  92,
      241, 233, 172, 146, 156, 235, 15, 200,
      190,  68, 101,  41, 238, 216,  9, 188
    ]
  }
}
```

## Usage

```ts
import { PrivateKey } from "@wharfkit/antelope"
```

The `PrivateKey` type can be used to load different private key formats for use in an application. Each instance of a private key can also be converted to the corresponding [PublicKey](#). The `PrivateKey` type can also be used to randomly generate new private keys.

### Using a private key

An application with a key accessible in a string format can use the static `PrivateKey.from()` method to convert the string into a `PrivateKey` instance.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")
```

The same syntax can be used to also import keys in the [WIF](https://en.bitcoin.it/wiki/Wallet_import_format) format.

```ts
const privateKey = PrivateKey.from("5HpqJutRAMfVn7Qc9vGMnCMoNiASZVx89QZVcpfCmFAoBaFQJVD")
```

These two private keys are the same and function identically, they are just represented in different string formats.

### Exporting to string formats

Similar to how private keys can be loaded using multiple formats, they can also be converted back in to the various string formats.

#### Default format

By default when converting a `PrivateKey` instance to a `string`, the default Antelope private key format is used.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")

console.log(String(privateKey))
// PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB

console.log(privateKey.toString())
// PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB
```

This format consists of 3 parts which are divided using `_` (underscore). It begins with the prefix of `PVT` to indicate that it as a private key. That is followed by a string to indicate the key type, which in the above example is a `K1` key. The last part of the format is the raw key data and checksum.

#### WIF Format

An instance of a `PrivateKey` can also be used to export the key in the [WIF](https://en.bitcoin.it/wiki/Wallet_import_format) format as well, regardless of the format used to import it.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")

console.log(privateKey.toWif())
// 5HpqJutRAMfVn7Qc9vGMnCMoNiASZVx89QZVcpfCmFAoBaFQJVD
```

In the early days of this ecosystem, WIF formatted keys were the default used by both the blockchain itself and the wallet software supporting it. Older networks, SDKs, and applications may still require this key format for importing accounts or signing transactions.

### Retrieve the public key

Any instance of a `PrivateKey` can return the associated [PublicKey](#) by calling the `.toPublic()` method.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")

const publicKey = privateKey.toPublic()

console.log(String(publicKey))
// PUB_K1_5AWABL23YzbJad4gNKGYi23Y6uTrxqYoTkSbJdzwenwfjw84eW

console.log(privateKey.toPublic())
/**
PublicKey {
  type: 'K1',
  data: Bytes {
    array: Uint8Array(33) [
        2,  36,  92, 138, 129,  45,  59,   4,
      125, 181, 139, 155, 216, 149,  75, 239,
      191,  57, 153,  42,  55, 113, 199, 169,
      139, 246,  46, 203, 145, 104,  75,  28,
      107
    ]
  }
}
*/
```

### Signing

Each instance of a `PrivateKey` provides methods which can be used to sign different data types and return a valid [Signature](#).

#### Checksum

The `signDigest` method on a `PrivateKey` accepts a [Checksum](#) type parameter and will return a [Signature](#).

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")

const signature = privateKey.signDigest(
  "5206a2e62f2e1235dba4e991b830fb3106fa3531015446cafc3817c65a6b73e7"
)

// SIG_K1_KZ2Rnnqgmv6soS8ZrUE5EvkQpV2f3BuArCDpbthokgzGJk6j8PmJnk4NSNtN1ANLrL16XgJfEbTgXjvyxwxZYBZyiwMVNh

/**
Signature {
  type: 'K1',
  data: Bytes {
    array: Uint8Array(65) [
       32,  32, 178, 146, 139,  19,  48, 123,  85,  37, 155,
      106,  22, 244, 138, 178, 118,  48, 133,  56,  14, 112,
      213, 163, 228,  94, 218,  36,  60, 104,   7, 193,  43,
       70, 234, 193,  41,  65,  97,  38, 168,   0,  39, 177,
       71,  92,  19,  37, 161,  16,  50, 172, 179, 185, 139,
       56,   0, 126, 119, 180,  69, 139, 130, 250,   2
    ]
  }
}
*/
```

#### Data

The `PrivateKey` also offers a `signMessage` method which can accept any [Bytes](#) type object and return a valid [Signature](#) for it. Internally the [Bytes](#) data is converted to a [Checksum](#) type, a hash generated, and the passed in to `signDigest`.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.from("PVT_K1_YjESL5u6WX72L7ipTh9cgA7LXMN63RbViPecTXNKA1w8jhoB")

const signature = privateKey.signMessage(Bytes.from("hello world", "utf8"))

console.log(signature)
/**
Signature {
  type: 'K1',
  data: Bytes {
    array: Uint8Array(65) [
       32,   6, 106,  69, 213, 112,  35, 162,  68, 227,  77,
      163, 121, 240, 192, 226,  89,  57, 149, 252, 216, 161,
      196, 149, 164,  75, 161, 153, 229,  70,  12, 108, 118,
       95,  99, 241,  39,  83, 170, 177, 171,  86, 226, 139,
      144,   1, 163, 198,  91,  45,  36, 120, 129, 235,  20,
      123, 130,  58,  58, 115, 105, 210,  59,  50, 164
    ]
  }
}
*/

console.log(String(signature))
// SIG_K1_KVaziLtj9Y8eJZMKnSLE8biBKNk69dDY3GjvSPGguQeJqMwga4XtHUEyBpXNT8J5K3vB2vzNvc5G7AUZArh9cqcUW8rJcX
```

### Creating new private keys

A static method exists on `PrivateKey` called `generate` that can be used to create a random key of any supported type. Internally this Antelope library acts as a wrapper for and uses [indutny/elliptic](https://github.com/indutny/elliptic) for private key generation.

```ts
import { PrivateKey } from "@wharfkit/antelope"

const privateKey = PrivateKey.generate("K1")

console.log(privateKey)
/**
PrivateKey {
  type: 'K1',
  data: Bytes {
    array: Uint8Array(32) [
      221,  16, 169, 252, 147, 74, 82, 132,
      129, 224,  17, 198, 223, 10, 58, 150,
      141, 153,   6, 157, 178, 42, 29,  31,
       83, 177, 112,  58, 157, 37, 92,  34
    ]
  }
}
*/

console.log(String(privateKey))
// PVT_K1_2gMp3cGhqWoRVsPUfh79jToyAMbNukrhbaVsVJv2tk8fogZGNB
```
