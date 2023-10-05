---
title: Contract
description: A Contract represents the connection between an application's code and an Antelope blockchain contract. It facilates interaction with smart contracts by offering methods for data retrieval and action generation.
category: ContractKit
published: true
order: 2
---

# Contract

The `Contract` class instance represents a specific [blockchain smart contract](https://docs.eosnetwork.com/docs/latest/smart-contracts/). It offers a myriad of methods that provide functionality ranging from retrieving contract data to generating contract actions that can be executed using the [SessionKit](/docs/session-kit/transact).

## Creation

Contracts can be created manually for use in applications, so long as all the relevant data is provided. Once created, a `Contract` will offer multiple read-only properties and a handful of methods.

The minimum required information to create a `Contract` instance is as follows:

```ts
import { Contract } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"

import abi from "./eosio-abi.json" // ABI for the eosio.token contract

const contractArgs = {
    abi,
    account: "eosio.token",
    client: new APIClient("https://jungle4.greymass.com"),
}

const contract = new Contract(contractArgs)
```

### Arguments

The only parameter passed to the `Contract` class is an object containing all the required configuration data.

- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `account`: The name of the account that the contract is deployed to.
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to communicate with the blockchain.

## Usage

Once a `Contract` instance is created, methods and read-only properties are available.

### Methods

- [`table`](/docs/contract-kit/table-method): Retrieves a specific [Table](/docs/contract-kit/table) instance from the contract.
- [`action`](/docs/contract-kit/action-method): Generates an [Action](/docs/antelope/action) instance that can be passed to the [SessionKit transact](/docs/session-kit/transact) method.

### Properties

- `account`: The name of the account that the contract is deployed to.
- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `tableNames`: An array of the table names associated with the contract.
- `actionNames`: An array of the names of actions associated with the contract.
