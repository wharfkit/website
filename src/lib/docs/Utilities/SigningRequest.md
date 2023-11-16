---
title: Signing Request Library
description: A TypeScript library streamlined for creating and handling transaction signing requests.
category: Utilities
published: true
requiresReview: true
order: 5
---

# Signing Request

Signing Requests are a data type used in the Antelope ecosystem to facilitate the transferring transaction related data between applications for the purposes of generating a signature. This is done using a compressed string format designed to encapsulate and make it easier to transport data, which can be communicated through various methods such as QR codes and hyperlinks.

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

#### Optional Parameters

A second parameter can optionally also be included to provide additional ways for the `SigningRequest` instance to retrieve and process request data.

```ts
import { APIClient } from "@wharfkit/antelope"
import { ABICache } from "@wharfkit/abicache"
import zlib from "pako"

const client = new APIClient({ url: "https://jungle4.greymass.com" })

const signingRequest = SigningRequest.create(
  {
    action,
  },
  {
    abiProvider: new ABICache(client),
    zlib,
  }
)
```

This object may contain options for both the `abiProvider` and `zlib`.

The `abiProvider` value is an object which understands how to efficiently retrieve ABI data from a given endpoint. In the example above, an instance of an `ABICache` from the `@wharfkit/abicache` package is provided, which can both load and cache ABIs from the API endpoint provided.

The `zlib` value allows passing in a library that supports the zlib compression algorithm, which we'd recommend using the `pako` package for.

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

```ts
request.encode(compress, slashes, scheme)
```

### Decoding a Request

A URI string can be decoded into a `SigningRequest` instance using the `from` static method.

```typescript
const request = SigningRequest.from(
  "esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA"
)
```

Once decoded, the `SigningRequest` instance will then be usable with any of the additional methods outlined below.

### Resolving a Request

A `SigningRequest` instance does not need always contain a transaction ready for signing or use on the blockchain. A signing request may be a single action, or an array of actions, or perhaps an action with placeholder values for the authorization or action data. For this reason, signing requests need to be resolved from this incomplete state into a resolved request.

Resolving a signing request requires 3 pieces of information:

- The `abis` related to the actions in the request, to serialize the required data.
- The `authorization` to use within the completed transaction.
- The `context` of the transaction, including transaction header details and optionally the chain ID.

It is also useful to provide both an `abiProvider` to fetch ABI data as well as a `zlib` library in order to handle compressed requests.

After a `SigningRequest` is resolved with the `resolve` method, a `ResolvedSigningRequest` object is created and returned.

```typescript
import { APIClient } from "@wharfkit/antelope"
import { ABICache } from "@wharfkit/abicache"
import zlib from "pako"

// Setup a new API Client for the designated chain
const client = new APIClient({ url: "https://jungle4.greymass.com" })

// Define the options used when decoding/resolving the request
const options = {
  abiProvider: new ABICache(client),
  zlib,
}

// Decode a signing request payload
const signingRequest = SigningRequest.from(
  "esr://gmNgZGRkAIFXBqEFopc6760yugsVYWBggtKCMIEFRnclpF9eTWUACgAA",
  options
)

// Utilize a built-in helper to retrieve the related ABIs from an API endpoint
const abis = await signingRequest.fetchAbis()

// Define which authorization should be used for any missing authorization data
const authorization = {
  actor: "teamgreymass",
  permission: "active",
}

// Generate a transaction header to resolve any missing transaction data
const info = await client.v1.chain.get_info()
const header = info.getTransactionHeader()

// Resolve the transaction using the supplied data
const resolvedSigningRequest = await signingRequest.resolve(
  abis,
  authorization,
  header
)
```

The `ResolvedSigningRequest` returned now represents a complete transaction, which can be used for creating a signature. This can be done using one of the methods listed below.

#### Signing Digest

Retrieve the [Checksum256](#) value of the transaction from the `signingDigest` property of the `ResolvedSigningRequest`.

```ts
resolvedSigningRequest.signingDigest // Checksum256
```

#### Serialized Transaction

Access the `serializedTransaction` property on the `ResolvedSigningRequest` to retrieve a `Uint8array` that represents the transaction.

```ts
resolvedSigningRequest.serializedTransaction // Uint8array
```
