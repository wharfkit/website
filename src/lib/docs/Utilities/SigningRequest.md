---
title: Signing Request Library
description: A TypeScript library streamlined for creating and handling transaction signing requests.
category: Utilities
published: true
requiresReview: true
order: 5
---

# Signing Request

Signing Requests are a data type used in the Antelope ecosystem to facilitate the seamless transfer of transaction details in a compressed string format between applications and signature providers. Designed to encapsulate and transport transaction data, they can be shared through various methods, such as QR codes and hyperlinks.

Two types of signing requests exist:

- **Transaction Signing Requests** - These requests are used to request a signature for a specific transaction or action meant to be broadcasted on-chain.
- **Identity Signing Requests** - These requests are used to request an identity proof from a wallet. This request is fulfilled by the wallet by signing an off-chain transaction that contains the identity information.

The Wharfkit Signing Request library provides a convenient way to interact with these signing requests through the `@wharfkit/signing-request` package. The `SigningRequest` wrapper which is exported by that package offers methods to easily create, parse and resolve signing requests.

## Creation

### Creating a Signing Request for a Transaction

Using the Signing Request functionality within the `@wharfkit/signing-request`, a `SigningRequest` instance can be used to request a signature for specific actions using the `create` method:

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const action = {
  account: "eosio.token",
  name: "transfer",
  authorization: [
    {
      actor: "alice",
      permission: "active",
    },
  ],
  data: {
    from: "alice",
    to: "bob",
    quantity: "1.0000 EOS",
    memo: "Thanks for the coffee!",
  },
}

const request = SigningRequest.create({
  action,
  // actions: [action], // Can also be an array of actions
})
```

Alternatively, a `SigningRequest` instance can also be created using a [Transaction](/docs/antelope/transaction) instance:

```typescript
import { SigningRequest } from '@wharfkit/signing-request';
import { Transaction } from '@wharfkit/antelope';

const transaction = Transaction.from({ ... })

const request = SigningRequest.create({
    transaction,
});
```

A callback URL can also be specified so it can be called after the transaction is signed or broadcasted:

```typescript
const request = SigningRequest.create({
  action,
  // callback with a random uuid
  callback: "https://anchor.link/callback/1234567890",
})
```

If the wallet is not expected to broadcast the transaction, the `broadcast` property can be set to `false`:

```typescript
const request = SigningRequest.create({
  action,
  broadcast: false,
})
```

#### Arguments

The `SigningRequest` constructor accepts an object with a minimum of one of these properties:

- `action` - A single Antelope [action](/docs/antelope/action) to be included in the transaction.
- `actions` - An array of Antelope [actions](/docs/antelope/action) to be included in the transaction.
- `transaction` - A full or partial Antelope [transaction](/docs/antelope/transaction) to be included in the request.
- `identity` - An object containing the `scope` and `permission` of the identity proof to be requested.
- `broadcast` - A boolean indicating whether the wallet should broadcast the transaction after signing. Defaults to `true`.
- `callback` - A string that specifies the URL to be called after the transaction is signed or broadcasted.

#### Options

The `SigningRequest` constructor also accepts an optional second argument with these properties:

- `zlib` - A [zlib](https://nodejs.org/api/zlib.html) provider that will be used to compress the request.
- `abiProvider` - An [ABI provider](/docs/antelope/abi-provider) that will be used to fetch ABIs for the request.
- `signatureProvider` - A [signature provider](/docs/antelope/signature-provider) that will be used to sign the request.

### Creating a Signing Request to identify and authenticate a user

Signing requests can also be created as a way to identify and/or authenticate users. This is done by using the `identity` method:

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback: "https://anchor.link/callback/1234567890",
})
```

In the above example, the `callback` property is used to specify the URL where the identity should be delivered. The `scope` and `permission` properties are omitted, which means that placeholder values will be used allowing the wallet to specify those values when resolving the request.

However, the `scope` and `permission` properties can be specified if the identity is known and the request is just being used to authenticate the user:

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback: "https://anchor.link/callback/1234567890",
  scope: "teamgreymass",
  permission: "active",
})
```

#### Arguments

- `callback` - A string that specifies the URL to be called after the identity is delivered.

#### Options

- `scope` - The account name of the identity to be requested. Defaults to a placeholder value.
- `permission` - The permission of the identity to be requested. Defaults to a placeholder value.

## Usage

### Serialize the request into a URI:

Once the request is created, it can be encoded as a URI string that can be passed onto wallets for signing:

```typescript
const uri = request.encode()
// alternatively:
// const uri = String(request)
```

A boolean can be passed to the `encode` method to specify whether the URI should be compressed:

```typescript
const uri = request.encode(false)

console.log(uri) // esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA
```

The slashes can also be omitted and the scheme can be customized like this:

```typescript
const uri = request.encode(undefined, false, "custom-scheme")

console.log(uri) // custom-scheme:gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA
```

### Decode a URI into a request:

A URI string can be decoded into a `SigningRequest` instance:

```typescript
const request = SigningRequest.from(uri)
```

### Resolving a Signing Request

For both identity and transaction signing requests, the `resolve` method can be used to generate a signing digest that can be signed by the wallet:

```typescript
// An encoded eosio:voteproducer transaction with placeholder authorization
const uri =
  "esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA"

// Decode the URI
const signingRequest = SigningRequest.from(uri)

// Fetch the relevant ABIs
const abis = await signingRequest.fetchAbis()

// An authorization to resolve the transaction to
const authorization = {
  actor: "teamgreymass",
  permission: "active",
}

// A recent block needs to be provided to resolve the transaction
const client = new APIClient({ url: "jungle4.greymass.com" })
const info = await client.v1.chain.get_info()
const block = await client.v1.chain.get_block(info.head_block_num)

// Resolve the transaction as a specific user
const resolvedSigningRequest = await signingRequest.resolve(
  abis,
  authorization,
  block
)

// The signing digest can then be obtained
const digest = resolvedSigningRequest.signingDigest
```

#### Arguments

The `resolve` method accepts the following arguments:

- `abis` - An array of [ABI](/docs/antelope/abi) definitions to be used to resolve the request. In the case of an identity request, this can be an empty array.
- `authorization` - An object containing the `actor` and `permission` to be used to resolve the request.
- `block` - A [block](/docs/antelope/block) object to be used to resolve the request. This is used as proof that the signing request was signed at a specific time.
