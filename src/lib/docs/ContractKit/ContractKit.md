---
title: ContractKit (Factory)
description: The Contract Kit is responsible for facilitating the creation of Contract instances through the load method.
category: ContractKit
published: true
order: 3
requiresReview: true
---

# ContractKit Class

The `ContractKit` class provided by the [Contract Kit](/docs/contract-kit) is a factory class that facilitates the creation of [Contract](/docs/contract-kit/contract) instances. Only **one instance is required** for each blockchain in the application and should be made widely available in the application.

## Creation

When using the `ContractKit` within a web application, an instance of the class must first be created. The only required argument during the creation of the `ContractKit` is an instance of an [APIClient](/docs/antelope/api-client) to allow it to make requests to the specified blockchain.

```typescript
import { ContractKit } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"

const contractKit = new ContractKit({
  client: new APIClient("https://jungle4.greymass.com"),
})
```

This instance of the `ContractKit` can now be used to generate any number of [Contract] instances for the specified blockchain.

### Arguments

A single argument is required to initialize a `ContractKit` instance:

- `client`: The [APIClient](/docs/antelope/api-client) used to fetch data from the blockchain.

### Options

The `ContractKit` allows for additional optional parameters to be passed for more advanced use cases.

#### ABICache

An optional instance of the [ABICache](/docs/antelope/abi-cache-interface) interface to manually specify an alternative cache. By default every instance of the `ContractKit` comes with a built-in ABICache and this is only required for advanced use cases where overriding the default is required.

```typescript
import { ContractKit } from "@wharfkit/contract"
import { APIClient, ABICache } from "@wharfkit/antelope"

const client = new APIClient("https://jungle4.greymass.com")

const kit = const kit = new ContractKit({
    client,
}, {
    abiCache: new ABICache(client)
});
```

#### ABIs

An array of existing [ABI](/docs/antelope/abi) objects that have already been loaded in the application. This option can be used to pass ABIs directly to the ContractKit instance, eliminating the need for the ContractKit to fetch them using an [APIClient](/docs/antelope/api-client).

```typescript
import { ContractKit } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"

import abi from "./abi.json" // ABI for a contract that will be loaded

const kit = const kit = new ContractKit({
    client,
}, {
    abis: [abi]
});
```

## Usage

### Load

Once a `ContractKit` instance is created, the `load` method can be used to instantiate a specific [Contract](/docs/contract-kit/contract) instance.

```typescript
const contract = await contractKit.load("eosio.token")
```

The only parameter required is the name of the account where the contract is deployed on-chain.
