---
title: PublicKey
description: The PublicKey type wraps the raw data representing a public key, which can be used to output it in multiple formats.
category: Antelope
published: true
---

# PublicKey

The `PublicKey` core type represents an instance of a public key for use in [public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). The `PublicKey` can be used during signature verification and be rendered to a string in any valid output format.

## Usage

```ts
import { PublicKey } from "@wharfkit/antelope"
```

The `PublicKey` class can be used to load different public key formats for use in an application.

Any string representation of a key can be passed into the static `PublicKey.from()` method to create a new `PublicKey` instance.

```ts
import { PublicKey } from "@wharfkit/antelope"

const publicKey = PublicKey.from(
  "PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973"
)
```

The same syntax can also be used with any legacy format.

```ts
const publicKey = PublicKey.from(
  "EOS6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqnXqNAR"
)
```

Either format will result in a functionally identical public key.

### Exporting to String Formats

Similar to how public keys can be loaded using multiple formats, they can also be converted back into the various string formats.

#### Default Format

When converting a `PublicKey` instance to a `string`, the default Antelope private key format is used.

```ts
import { PublicKey } from "@wharfkit/antelope"

const publicKey = PublicKey.from(
  "PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973"
)

console.log(String(publicKey))
// PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973

console.log(publicKey.toString())
// PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973
```

This format consists of 3 parts which are divided using `_` (underscore). It begins with the prefix of `PUB` to indicate that it is a public key. That is followed by a string to indicate the key type, which in the above example is a `K1` key. The last part of the format is the raw key data and checksum.

#### Legacy Formats

An instance of a `PublicKey` can also be used to export the key in the legacy format for the blockchain, regardless of the format used to import it.

```ts
import { PublicKey } from "@wharfkit/antelope"

const publicKey = PublicKey.from(
  "PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973"
)

console.log(publicKey.toLegacyString())
// EOS6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqnXqNAR
```

If the legacy format uses a prefix for keys which differs from `EOS`, it may be passed as a parameter on `toLegacyString` to set the prefix.

```ts
import { PublicKey } from "@wharfkit/antelope"

const publicKey = PublicKey.from(
  "PUB_K1_6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqn3a973"
)

console.log(publicKey.toLegacyString("FIO"))
// FIO6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqnXqNAR
```

In the early days of this ecosystem, legacy formatted keys were the default used by both the blockchain itself and the wallet software supporting it. Older networks, SDKs, and applications may still require this key format.
