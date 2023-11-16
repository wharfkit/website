---
title: Signing Request Library
description: A TypeScript library streamlined for creating and handling transaction signing requests.
category: Utilities
published: true
requiresReview: true
order: 5
---

# Signing Request

Signing Requests are a data type used in the Antelope ecosystem to facilitate the transferring transaction related data between applications. This is done using a compressed string format designed to encapsulate and make it easier to transport data, which can be communicated through various methods such as QR codes and hyperlinks.

The Wharfkit Signing Request library provides a convenient way to interact with this type of data through the `@wharfkit/signing-request` package. The `SigningRequest` class exported by this package offers methods to easily encode, decode, and resolve incomplete transaction data.

## Creation

Signing requests are used primarily for two purposes:

- Requesting a signature to authorize a transaction and perform smart contract actions.
- Requesting a signature to verify ownership of an account with an identity proof.

The `SigningRequest` class offers different methods in order to encode signing requests based on these different purposes. The `create` method is used when passing in smart contract actions or a full transaction to authorize a transaction, and the `identity` method is called to verify ownership of an account.

### The `create` method

The `SigningRequest` class can statically be called in order to create a signing request payload with the intention of authorizing a transaction. This can be done by passing one or more [Action](#) or action-like objects, or a full [Transaction](#). This is done by calling the `create` method and passing one of these data types alongside any metadata for the request.

The result of this call will be a `SigningRequest` instance which contains the request data, which can then be transported and interpreted by another application.

#### An Action

A single action may be passed to the `create` method by passing it as the `action` property of the object passed in as the first parameter.

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
  action, // A single action
})
```

#### Multiple Actions

Multiple actions can also be passed by passing by providing them as an array on the `actions` property.

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.create({
  actions: [action1, action2],
})
```

#### A Transaction

A complete transaction can also be utilized in the `create` method by passing it as the `transaction` property of the object.

```typescript
import { SigningRequest } from '@wharfkit/signing-request';
import { Transaction } from '@wharfkit/antelope';

const transaction = Transaction.from({ ... })

const request = SigningRequest.create({
    transaction,
});
```

#### Additional Parameters

A number of additional parameters can be specified when creating a signing request, both to append metadata to the request and to change how the request is encoded.

##### Callback

A callback can be specified which requests that any application handling this request perform a callback with information related to the transaction.

```typescript
// export type CallbackType = string | {url: string; background: boolean}
const request = SigningRequest.create({
  // ...
  callback: {
    url: "https://some.domain/endpoint",
    background: true,
  },
})
```

The `url` indicates an HTTP endpoint which should be called, with a `background` flag that indicates whether the request should be handled in the background (as a POST request) or in the foreground (as a GET request).

##### Broadcast

The broadcast flag can be set which informs the application handling the request whether or not they should broadcast the transaction to the blockchain after creating a signature for the request. This value defaults to `true`, telling the application to broadcast after signing, but can be set to `false` to request that they do not broadcast the transaction themselves, but instead forward the signature back through the callback service to allow the application itself to perform the broadcast action.

```typescript
const request = SigningRequest.create({
  // ...
  broadcast: false,
})
```

### The `identity` method

For application that wish to verify the ownership of an account through the verification of a signature, the static `identity` method on the `SigningRequest` class can be used directly in order to create a mock transaction which can be signed. This is used typically to authenticate application users without performing an on-chain transaction, but still verifying their on-chain credentials.

A parameter defining the `callback` is the only required data for this call, and is used to relay back the signature created for verification purposes.

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback,
})
```

The callback provided matches the same data type as used in the `create` request and can be [found here](#callback).

#### Scope

During the creation of an `identity` request, a `scope` value may be passed to define an arbitrary [Name](#) type value that defines the scope of the login.

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback,
  scope: "foo",
})
```

#### Permission

By default, when performing an `identity` request, no specific [PermissionLevel](#) is defined and the application responding to the request can allow the user to select any valid permission. To specify a specific account and permission that needs to be verified, it can be passed in as the `permission` property when creating the request.

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback,
  permission: "account@active",
})
```

## Usage

### Encoding a Request

Once a `SigningRequest` instance is created, it can be encoded as a string in URI format that allows it to easily be passed to other applications:

```typescript
import { SigningRequest } from "@wharfkit/signing-request"

const request = SigningRequest.identity({
  callback,
  permission: "account@active",
})

const uri = request.encode()

// alternatively:
// const uri = String(request)
```

The `encode` method accepts 3 optional parameters:

- 1st: A boolean to specify whether the URI should be compressed
- 2nd: A boolean to specify whether slashes should be included in the URI
- 3rd: A string indicating what URI scheme should be used

```typescript
const uri = request.encode(false)

console.log(uri) // esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA
```

The slashes can also be omitted and the scheme can be customized like this:

```typescript
const uri = request.encode(false, false, "custom-scheme")

console.log(uri) // custom-scheme:gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA
```

### Decoding a Request

A URI string can be decoded into a `SigningRequest` instance:

```typescript
const request = SigningRequest.from(
  "esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA"
)
```

### Resolving a Request

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

Additional metadata about how the signing request should be handled can also be appended to this object:

- `broadcast` - A boolean indicating whether a wallet processing this request should broadcast the transaction after signing. Defaults to `true`.
- `callback` - A string/object that specifies the URL and HTTP Method to be called after the transaction is signed or broadcasted.

#### Options

The `SigningRequest` constructor also accepts an optional second argument to control how the data is encoded:

- `abiProvider` - An [ABI provider](/docs/antelope/abi-provider) that will be used to fetch ABIs for the request.
- `zlib` - A [zlib](https://nodejs.org/api/zlib.html) provider that will be used to compress the request.
