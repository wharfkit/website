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

When using the `SessionKit` within a web application, the developer will first establish an instance of the class with the required ContractKit arguments.

A simple example would be as follows:

```typescript
import { ContractKit } from "@wharfkit/contract-kit"
import { APIClient } from "@wharfkit/antelope"

const contractKit = new ContractKit({
    client: new APIClient("https://jungle3.greymass.com"),
});
```

### Arguments

The first parameter passed to the `ContractKit` is an object containing one required configuration.

- `client`: The [API client](/docs/antelope/api-client) used to fetch smart contract data.

### Options

The second parameter passed would be all of the optional arguments:

- `abiCache`: An instance of the [ABICache](/docs/antelope/abi-cache-interface) interface. Can be used to cache ABIs across multiple ContractKit `load` calls.
- `abis`: An array of [ABIDefinition](/docs/antelope/abi-definition) objects. Can be used to pass ABIs directly to the ContractKit instance (eliminating the need to fetch them from the blockchain.)

## Usage

### Load Method

The `load` method is used to load a specific contract.

```typescript
const contract = contractKit.load("eosio.token");
```

### Arguments

The `load` method accepts a single parameter:

- `contractName`: The name of the contract to load.
### Return Value

The `load` method returns a [Contract](/docs/contract-kit/contract) instance.
