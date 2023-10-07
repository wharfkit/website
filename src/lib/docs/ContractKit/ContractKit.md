---
title: ContractKit (Factory)
description: The Contract Kit is responsible for facilitating the creation of Contract instances through the load method.
category: ContractKit
published: true
order: 1
---

# ContractKit Class

The `ContractKit` class provided by the [Contract Kit](/docs/contract-kit) is a factory class that facilitates the creation of [Contract](/docs/contract-kit/contract) instances.

## Creation

When using the `ContractKit` within a web application, an instance of the class must first be created:

```typescript
import { ContractKit } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"

const contractKit = new ContractKit({
    client: new APIClient("https://jungle4.greymass.com"),
});
```

In order to reuse the same abi definitions across multiple `ContractKit` instances, an [ABICache](/docs/antelope/abi-cache-interface) interface can be passed as an optional parameter:

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

To pass ABIs directly to the `ContractKit` instance, an array of [ABIDefinition](/docs/antelope/abi) objects can be passed as an optional parameter:

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

### Arguments

A single argument is required to initialize a `ContractKit` instance:

- `client`: The [API client](/docs/antelope/api-client) used to fetch smart contract data.

### Options

The following options can be passed in the second parameter of the `ContractKit` constructor:

- `abiCache`: An instance of the [ABICache](/docs/antelope/abi-cache-interface) interface. Can be used to cache ABIs across multiple ContractKit `load` calls.
- `abis`: An array of [ABIDefinition](/docs/antelope/abi-definition) objects. Can be used to pass ABIs directly to the ContractKit instance (eliminating the need to fetch them from the blockchain.)

## Usage

### Load Method

The `load` method is used to load a specific [contract](/docs/contract-kit/contract) instance.

```typescript
const contract = await contractKit.load("eosio.token");
```

### Arguments

The `load` method accepts a single parameter:

- `contractName`: The name of the contract to load.

### Return Value

The `load` method returns a [Contract](/docs/contract-kit/contract) instance.
