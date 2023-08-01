---
title: Signature
description: change_me
category: Antelope
published: false
---

# Signature

## Recovering the PublicKey from a Signature + Transaction

```ts
import { Signature, Transaction } from "@wharfkit/antelope"

const chainId = "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d"

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

const recoveredKey = signature.recoverDigest(transaction.signingDigest(chainId))

console.log(String(recoveredKey))
```

## Recovering the PublicKey from a Signature + PackedTransaction

```ts
import { PackedTransaction, Signature } from "@wharfkit/antelope"

const chainId = "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d"

const packedTransaction = PackedTransaction.from({
  signatures: [
    "SIG_K1_KcgeV43BeK7cuCz4ywZGZGnnE21f7TAJaVfGFVG2KPNtH9yFwphvzbLchycFE4ryXTo1bu2ethLi2iFQR5aHUmjiVrTAM3",
  ],
  compression: 0,
  packed_context_free_data: "00",
  packed_trx:
    "e00300007b00c8010000000000000100a6823403ea3055000000572d3ccdcd01000000000000285d00000000a8ed3232280000000000855c340000000000000e3da40100000000000001474d5a0000000007666f7220796f7500",
})

const signature = Signature.from(
  "SIG_K1_KcgeV43BeK7cuCz4ywZGZGnnE21f7TAJaVfGFVG2KPNtH9yFwphvzbLchycFE4ryXTo1bu2ethLi2iFQR5aHUmjiVrTAM3"
)

const recoveredKey = signature.recoverDigest(
  packedTransaction.getTransaction().signingDigest(chainId)
)

console.log(String(recoveredKey))
```
