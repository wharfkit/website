---
title: Contract
description: The Contract class serves as a wrapper for Antelope smart contracts. It offers several helper methods that provide functionality, ranging from retrieving contract data to generating contract actions that can be executed using the Session Kit.
category: ContractKit
published: true
order: 1
---

# Contract

A `Contract` class instance represents a specific Antelope smart contract. It makes several methods available to retrieve contract data, as well as generating contract actions that can be executed using the SessionKit [transact](/docs/session-kit/transact) method.

## Creation

In most cases, `Contract` instances will be created by the [ContractKit](/docs/contract-kit/contract-kit) load method or accessed directly from code generated using the command line application. However, they can also be created manually:

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

The only parameter passed to the `Contract` class constructor is an object containing the following configuration data:

- `abi`: The [ABI](/docs/antelope/abi) definition for the smart contract.
- `account`: The name of the account that the contract is deployed to.
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to fetch blockchain data.

## Usage

Once a `Contract` instance is created, methods and read-only properties are available.

### Methods

- [`action`](/docs/contract-kit/action-method): Generates an [Action](/docs/antelope/action) instance that can be passed to the SessionKit [transact](/docs/session-kit/transact) method.
- [`table`](/docs/contract-kit/table-method): Generates a specific [Table](/docs/contract-kit/table-class) instance from the Contract.

### Properties

- `abi`: The [ABI](/docs/antelope/abi) of the contract.
- `account`: The name of the account that the contract is deployed to.
- `actionNames`: An array with the names of actions that exist on the contract.
- `tableNames`: An array with the names of tables that exist on the contract.
