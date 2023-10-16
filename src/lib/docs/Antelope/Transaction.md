---
title: Transaction
description: The Transaction type represents a complete transaction containing one or more actions for an Antelope blockchain.
category: Antelope
published: true
requiresReview: true
---

# Transaction

The `Transaction` type within the Antelope SDKs represents a fully formed transaction that could be used on an Antelope blockchain. It contains all the header information to secure and limit the transaction execution as well as an array containing one or more [Action](/docs/antelope/action) objects.

## Variants

There are currently 3 variants of a transaction, each used for specific states the transaction may be in during the transact flow.

- `Transaction`: Typically used when creating or reading transaction data.
- `SignedTransaction`: Also used when accessing transaction data, but includes signatures.
- `PackedTransaction`: The encoded version of a transaction used at the blockchain level.

### Transaction

The `Transaction` type is the decoded version of a `PackedTransaction` which developers will use to perform smart contract actions or use directly for access to transaction data in their applications. Once a signature is generated for a given `Transaction`, it can also be cast into a `SignedTransaction` type which will also then include signature information.

The core structure of an Antelope `Transaction` contains the following:

1. Transaction as Proof of Stake (TaPoS) values are embedded in every transaction as part of the consensus algorithm using the `ref_block_num` and `ref_block_prefix` fields.
2. Limitations about the execution of the transaction are also included in fields such as `expiration`, `max_net_usage_words`, `max_cpu_usage_mx`, and `delay_sec`.
3. An array of encoded smart contract actions to perform are placed within the `actions` field, along with advanced events like `context_free_actions` and `transaction_extensions`.

All combined, the representation of this data structure in a JSON format is as follows:

```ts
{
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [],
  transaction_extensions: [],
}
```

Each [Action](/docs/antelope/action) passed to a transaction must be encoded as either as raw hex data or passed in as a [Struct](/docs/antelope/struct).

### SignedTransaction

The `SignedTransaction` type extends a `Transaction` and contains additional fields for information such as `signatures` and `context_free_data`. This format retains the `Transaction` format itself in its decoded state, and can now be encoded into a `PackedTransaction` for submission to the blockchain.

The new JSON representation with these two additional fields is as follows:

```ts
{
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [],
  transaction_extensions: [],
  signatures: [], // New
  context_free_data: [] // New
}
```

### PackedTransaction

The `PackedTransaction` type is the encoded version of either a `Transaction` or a `SignedTransaction`, where the transaction is encoded using the [Serializer](/docs/antelope/serializer) as the `packed_trx` field and the signatures appended to the `signatures` array. The payload format also includes additional information about the transaction such as the `compression` flag to control compression on the encoded payload and the `packed_context_free_data` field for data outside of the transaction to include.

A simplistic look at the JSON representation of this data is as follows:

```ts
{
    compression: 0,
    packed_context_free_data: '',
    packed_trx: '',
    signatures: []
}
```

## Usage

### Creating a Transaction

In most cases while creating a transaction, the application can automatically generate current TaPoS headers using the [APIClient](/docs/antelope/api-client) and the `get_info` endpoint. The resulting response from this call contains a `getTransactionHeader` method which will automatically create all the appropriate fields based on the API call. The only remaining data that must be included is the `actions` containing an array of smart contract actions to perform.

```ts
import { Action, APIClient, Transaction } from "@wharfkit/antelope"

const client = new APIClient({ url: "https://jungle4.greymass.com" })

const info = await client.v1.chain.get_info()
const header = info.getTransactionHeader()

const transaction = Transaction.from({
  ...header,
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [
        { actor: "corecorecore", permission: "active" },
      ],
      data: "a02e45ea52a42e4580b1915e5d268dcaba0100000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
    },
  ],
})
```

### Initializing a Transaction

Given a completely formed transaction data with already encoded actions, the `Transaction` class works like all Antelope core types and can be loaded using the `.from()` static method.

```ts
import { Transaction } from "@wharfkit/antelope"

const transaction = Transaction.from({
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [
        { actor: "corecorecore", permission: "active" },
      ],
      data: "a02e45ea52a42e4580b1915e5d268dcaba0100000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
    },
  ],
  transaction_extensions: [],
})
```

The result stored as `transaction` will be an instance of `Transaction` and be ready to sign.

### Using ABIs

If while assembling a `Transaction` the `actions` array contains unserialized data, an [ABI](/docs/antelope/abi) is required as the second parameter to facilitate the encoding.

The example below shows the `actions[0].data` field as an unserialized version of an `eosio.token::transfer` action alongside an [ABI](/docs/antelope/abi) that defines the structure of that data. Both of these values are then passed in during the formation of the `Transaction` object.

```ts
import { Transaction } from "@wharfkit/antelope"

const tx = {
  delay_sec: 0,
  expiration: "2020-07-01T17:32:13",
  max_cpu_usage_ms: 0,
  max_net_usage_words: 0,
  ref_block_num: 55253,
  ref_block_prefix: 3306698594,
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [{ actor: "foo", permission: "active" }],
      data: {
        from: "foo",
        to: "bar",
        memo: "",
        quantity: "0.0001 EOS",
      },
    },
  ],
}

const abi = {
  structs: [
    {
      base: "",
      name: "transfer",
      fields: [
        { name: "from", type: "name" },
        { name: "to", type: "name" },
        { name: "quantity", type: "asset" },
        { name: "memo", type: "string" },
      ],
    },
  ],
  actions: [
    { name: "transfer", type: "transfer", ricardian_contract: "" },
  ],
}

const transaction = Transaction.from(tx, abi)
```

### Loading ABIs

To encode untyped data during the creation of a `Transaction`, an [ABI](/docs/antelope/abi) may be loaded from the blockchain using an [APIClient](/docs/antelope/api-client) and passed in.

```ts
import { Transaction } from "@wharfkit/antelope"

const tx = {
  delay_sec: 0,
  expiration: "2020-07-01T17:32:13",
  max_cpu_usage_ms: 0,
  max_net_usage_words: 0,
  ref_block_num: 55253,
  ref_block_prefix: 3306698594,
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [{ actor: "foo", permission: "active" }],
      data: {
        from: "foo",
        to: "bar",
        memo: "",
        quantity: "0.0001 EOS",
      },
    },
  ],
}

const client = new APIClient({ url: "https://jungle4.greymass.com " })
const { abi } = await client.v1.chain.get_abi("eosio.token")

const transaction = Transaction.from(tx, abi)
```

### Transaction IDs

Every transaction on an Antelope blockchain has an associated Transaction ID, which is a [Checksum256](/docs/antelope/checksum) hash of the contents of the transaction. Each `Transaction` typed object can automatically access this ID by accessing the `.id` property of the transaction. This property is a getter that automatically calculates and returns the value based on its state.

```ts
const transaction = Transaction.from({
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [
        { actor: "corecorecore", permission: "active" },
      ],
      data: "a02e45ea52a42e4580b1915e5d268dcaba0100000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
    },
  ],
  transaction_extensions: [],
})

console.log(transaction.id)
/*
Checksum256 {
    array: Uint8Array(32) [
        59,  68,  60, 217,  74, 207,  83, 157,
        104, 140, 205,  12, 253, 201,  33, 203,
        250, 249, 153,  25, 144,  65, 202, 131,
        170, 179,  37, 171, 250,  36, 105, 220
    ]
}
*/

console.log(String(transaction.id))
// 3b443cd94acf539d688ccd0cfdc921cbfaf999199041ca83aab325abfa2469dc
```

### Adding a Signature

After a `Transaction` has been signed a `SignedTransaction` type can then be created. The example below shows the most simple path to create the new signed instance, by passing in all the fields from the original transaction and then append the signature.

```ts
import { Transaction, SignedTransaction } from "@wharfkit/antelope"

const transaction = Transaction.from({
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [
        { actor: "corecorecore", permission: "active" },
      ],
      data: "a02e45ea52a42e4580b1915e5d268dcaba0100000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
    },
  ],
  transaction_extensions: [],
})

const signedTransaction = SignedTransaction.from({
  ...transaction,
  signatures: [
    "SIG_K1_KeQEThQJEk7fuQC1zLuFyXZBnVmeRJXq9SrmDJGcerq1RZbgCoH5tvt28xpM7xA1bp7tStVPw17gNMG6hFyYXuNHCU4Wpd",
  ],
})
```

This new `SignedTransaction` typed object now contains all the original data alongside the signature.

### Packing a Transaction

To encode the transaction data and prepare it for use on-chain, a `SignedTransaction` object must be converted to a `PackedTransaction`. This encodes all of the data and formats the object as a payload that the API endpoints for the blockchain will understand.

```ts
import { Transaction, SignedTransaction } from "@wharfkit/antelope"

const transaction = Transaction.from({
  expiration: "1970-01-01T00:00:00",
  ref_block_num: 0,
  ref_block_prefix: 0,
  max_net_usage_words: 0,
  max_cpu_usage_ms: 0,
  delay_sec: 0,
  context_free_actions: [],
  actions: [
    {
      account: "eosio.token",
      name: "transfer",
      authorization: [
        { actor: "corecorecore", permission: "active" },
      ],
      data: "a02e45ea52a42e4580b1915e5d268dcaba0100000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
    },
  ],
  transaction_extensions: [],
})

const signedTransaction = SignedTransaction.from({
  ...transaction,
  signatures: [
    "SIG_K1_KeQEThQJEk7fuQC1zLuFyXZBnVmeRJXq9SrmDJGcerq1RZbgCoH5tvt28xpM7xA1bp7tStVPw17gNMG6hFyYXuNHCU4Wpd",
  ],
})

const packedTransaction =
  PackedTransaction.fromSigned(signedTransaction)

console.log(packedTransaction)
/*
PackedTransaction {
  signatures: [ Signature { type: 'K1', data: [Bytes] } ],
  compression: UInt8 {
    value: BN { negative: 0, words: [Array], length: 1, red: null }
  },
  packed_context_free_data: Bytes {
    array: Uint8Array(9) [
      120, 156, 99, 0, 0,
        0,   1,  0, 1
    ]
  },
  packed_trx: Bytes {
    array: Uint8Array(91) [
      120, 156,  99,  96,  64,   6, 140,  12, 203, 154,  76, 152,
       95,  25, 132,   2, 217, 225, 186,  54, 103, 207,  50,  46,
      208, 115, 125,  21, 180,  68, 207,  21,  36, 187, 226, 173,
      145, 145,  21,  76, 160,  97, 227, 196, 184,  88, 181, 222,
       83, 187,  24,  33,  90,  89,  92, 253, 131,  65, 180, 100,
      106, 126, 113, 102, 190, 110, 114, 126,  81, 170,  66, 102,
      177,  66,  73,  70, 170,  66,  82, 106, 113, 137, 130, 141,
       49,   3,   0, 115,  52,  28, 146
    ]
  }
}
*/

console.log(Serializer.objectify(packedTransaction))
/*
{
  signatures: [
    'SIG_K1_KeQEThQJEk7fuQC1zLuFyXZBnVmeRJXq9SrmDJGcerq1RZbgCoH5tvt28xpM7xA1bp7tStVPw17gNMG6hFyYXuNHCU4Wpd'
  ],
  compression: 1,
  packed_context_free_data: '789c63000000010001',
  packed_trx: '789c636040068c0ccb9a4c985f198402d9e1ba3667cf322ed0737d15b444cf1524bbe2ad9191154ca061e3c4b858b5de53bb18215a595cfd8341b4646a7e7166be6e727e51aa4266b1424946aa42526a7189828d31030073341c92'
}
*/
```

### Unpacking a Transaction

Any instance of a `PackedTransaction` can be used to decode its own data and return either a `Transaction` using the `.getTransaction` method or a `SignedTransaction` using the `.getSignedTransaction` method.

```ts
const data = {
  signatures: [
    "SIG_K1_KeQEThQJEk7fuQC1zLuFyXZBnVmeRJXq9SrmDJGcerq1RZbgCoH5tvt28xpM7xA1bp7tStVPw17gNMG6hFyYXuNHCU4Wpd",
  ],
  compression: 1,
  packed_context_free_data: "789c63000000010001",
  packed_trx:
    "789c636040068c0ccb9a4c985f198402d9e1ba3667cf322ed0737d15b444cf1524bbe2ad9191154ca061e3c4b858b5de53bb18215a595cfd8341b4646a7e7166be6e727e51aa4266b1424946aa42526a7189828d31030073341c92",
}

const packedTransaction = PackedTransaction.from(data)

const signedTransaction = packedTransaction.getSignedTransaction()

const transaction = packedTransaction.getTransaction()
```
