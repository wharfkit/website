---
title: Signature
description: change_me
category: Antelope
published: true
requiresReview: true
---

# Signature

The `Signature` built-in type represents an instance of a signature as the result of [Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography). Signatures are used within the Antelope ecosystem for things like authorizing a [Transaction](#) or a producer signing a block. A signature can be generated using a [PrivateKey](#) and signatures can be verified by comparing its contents to the corresponding [PublicKey](#).

## Format

Internally a `Signature` object is stored as [Bytes](#) and a corresponding key type (`K1`, `R1`, or `WA`). When output as a string, the signatures plain text representation consists of

```
SIG_K1_JxL8qFxSRMAYKX5wEWyx7j6j2Vitu3k43RShVZ9NL2acATvLx9PyciFLSu7BFC7w1DPL4qwLSm7NxE7vBwGEChV6YFk1NN
```

## Usage

Given an existing signature string, a `Signature` typed object may be created using the `.from()` static method.

```ts
import { Signature } from "@wharfkit/antelope"

const signature = Signature.from(
  "SIG_K1_JxL8qFxSRMAYKX5wEWyx7j6j2Vitu3k43RShVZ9NL2acATvLx9PyciFLSu7BFC7w1DPL4qwLSm7NxE7vBwGEChV6YFk1NN"
)
```

### Creating Signatures

To create new signatures a [PrivateKey](#) must be used to [sign](/docs/antelope/private-key#signing) a transaction digest.

### Recover PublicKey

Given a known chain ID, transaction, and signature - the `Signature` type offers a `recoverDigest` method that is capable of extracting the public key used during the signature creation in order to validate the signature. The example below defines all these public elements and then recovers the [PublicKey](#) used to sign the transaction.

```ts
import { Signature, Transaction } from "@wharfkit/antelope"

const chainId =
  "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d"

const transaction = Transaction.from({
  ref_block_num: 123,
  ref_block_prefix: 456,
  expiration: 992,
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [{ actor: "foo", permission: "active" }],
      data: "0000000000855c340000000000000e3da40100000000000001474d5a0000000007666f7220796f75",
    },
  ],
})

const signature = Signature.from(
  "SIG_K1_KcgeV43BeK7cuCz4ywZGZGnnE21f7TAJaVfGFVG2KPNtH9yFwphvzbLchycFE4ryXTo1bu2ethLi2iFQR5aHUmjiVrTAM3"
)

const recoveredKey = signature.recoverDigest(
  transaction.signingDigest(chainId)
)

console.log(String(recoveredKey))
```

The key recovered here can then be compared against the on-chain authority of the authorizing account to ensure the transaction is valid.
