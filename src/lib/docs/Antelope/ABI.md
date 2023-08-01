---
title: ABI
description: A data type representing an application binary interface (ABI) which can be used to describe a smart contract and provide data serialization formats.
category: Antelope
published: true
---

# ABI

The `ABI` ([Application Binary Interface](https://en.wikipedia.org/wiki/Application_binary_interface)) in Antelope-based blockchains is a JSON data structure that defines the structure of a [Smart Contract](#) and instructs the [Serializer](#) on how to encode or decode data.

This document will focus on the retrieval and processing of existing ABIs for use in the Javascript context. For more information about ABIs, as well as how to create them while developing a smart contract, please refer to [docs.eosnetwork.com](https://docs.eosnetwork.com/docs/latest/advanced-topics/understanding-ABI-files).

## Retrieving an ABI Using an APIClient

An `ABI` can be loaded from the blockchain using an [APIClient](#). To do this we first need to establish the [APIClient](#) with the appropriate endpoint configured and then call the `get_abi` API endpoint.

```ts
// Establish APIClient instance with appropriate endpoint
const client = new APIClient({ url: "https://jungle4.greymass.com" })

// Call the `get_abi` API method specifying the account name
const response = await client.v1.chain.get_abi("eosio")

// Ensure the `abi` parameter is defined on the response
if (response.abi) {
  // Convert the `ABIDef` from the API response to an `ABI` instance
  const abi = ABI.from(response.abi)
}
```

The `response` value from the API call will return an `.abi` value typed as an `ABIDef`, if an ABI has been deployed to that account. If no ABI has been defined on that account, it will return empty.

## Manually Providing an ABI

An `ABI` can also be defined manually by providing an `ABIDef`.

```ts
import { ABI } from "@wharfkit/antelope"

// Pass an object representation
const abi = ABI.from({
  version: "eosio::abi/1.0",
  types: [],
  variants: [],
  structs: [],
  actions: [],
  tables: [],
  ricardian_clauses: [],
})

// Pass a JSON string representation
const abi = ABI.from(
  '{"version":"eosio::abi/1.0","types":[],"variants":[],"structs":[],"actions":[],"tables":[],"ricardian_clauses":[]}'
)
```

An `ABIDef` can be either a string, object representation, or actual `ABI` type from the Antelope library.

```
export interface ABI.Def {
    version: string
    types: TypeDef[]
    variants: Variant[]
    structs: Struct[]
    actions: Action[]
    tables: Table[]
    ricardian_clauses: Clause[]
}

export type ABIDef = string | Partial<ABI.Def> | ABI
```

This allows the creation of an ABI using `ABI.from()` using multiple formats that developers will typically have readily available.

## Usage

The `ABI` data type is typically used as a parameter when creating an [Action](#), using the [Serializer](#), or used internally when working with [Struct](#) data types.

### Creating an `Action`

When creating an [Action](#) based on untyped action data, the ABI itself must be passed as the 2nd parameter to `Action.from()` in order to serialize the action data.

```ts
const { abi } = await client.v1.chain.get_abi("eosio.token")

const data = {
  authorization: [
    {
      actor: "corecorecore",
      permission: "active",
    },
  ],
  account: "eosio.token",
  name: "transfer",
  data: {
    from: "corecorecore",
    to: "teamgreymass",
    quantity: "0.0042 EOS",
    memo: "antelope is the best <3",
  },
}

const action = Action.from(data, abi)

/**
{
    account: 'eosio.token',
    name: 'transfer',
    authorization: [ { actor: 'corecorecore', permission: 'active' } ],
    data: 'a02e45ea52a42e4580b1915e5d268dca2a0000000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33'
}
*/
```

### Decoding an `Action`

When decoding an [Action](#) in order to view its raw data, the `decodeData` method of the action requires the ABI in order to convert the hex data into a readable data format.

```ts
const { abi } = await client.v1.chain.get_abi("eosio.token")

const data = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "corecorecore", permission: "active" }],
  data: "a02e45ea52a42e4580b1915e5d268dca2a0000000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33",
}

const action = Action.from(data, abi)

const decoded = action.decodeData(abi)

/**
{
    from: Name { value: UInt64 { value: [BN] } },
    to: Name { value: UInt64 { value: [BN] } },
    quantity: Asset {
        units: Int64 { value: [BN] },
        symbol: Symbol { value: [UInt64] }
    },
    memo: 'antelope is the best <3'
}
*/
```

### Using the Serializer

An [Action](#) can also be decoded using the [Serializer](#), where you will pass:

- the `abi`
- the `type`, which is the name of the action as defined in the ABI
- the `data` as the raw hex value

```ts
const { abi } = await client.v1.chain.get_abi("eosio.token")

const data =
  "a02e45ea52a42e4580b1915e5d268dca2a0000000000000004454f530000000019656f73696f2d636f7265206973207468652062657374203c33"

const decoded = Serializer.decode({ data, abi, type: "transfer" })

/**
{
    from: Name { value: UInt64 { value: [BN] } },
    to: Name { value: UInt64 { value: [BN] } },
    quantity: Asset {
        units: Int64 { value: [BN] },
        symbol: Symbol { value: [UInt64] }
    },
    memo: 'antelope is the best <3'
}
*/
```
