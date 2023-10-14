---
title: Table (Class)
description: The Table class serves as a wrapper for Antelope smart contract tables. It offers several helper methods to help retrieve table data.
category: ContractKit
published: true
order: 3
requiresReview: true
---

# Table

A `Table` class instances represents a specific table defined within an Antelope smart contract. Once instantiated, it offers several methods that simplify the process of retrieving table data.

## Creation

Generally with an existing [Contract](/docs/contract-kit/contract) instance, the [table() method](/docs/contract-kit/table-method) can be used to create `Table` instances. If the need arises to manually create a `Table` instance it can also be instantiated by providing the ABI, account name, table name, and an [APIClient](#).

```typescript
import { Table } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"
import type { TableRow } from "./types"

import abi from "./abi.json" // ABI for the contract that hosts the table.

const table = new Table({
  abi,
  account: "contract_name",
  name: "table_name",
  client: new APIClient("https://jungle4.greymass.com"),
})
```

### Arguments

The `Table` constructor accepts an object containing the following configuration data:

- `abi`: The complete [ABI](/docs/antelope/abi) of the smart contract.
- `account`: The name of the account that the contract is deployed to on-chain.
- `name`: The name of the table to retrieve as defined in the [ABI](#).
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to fetch blockchain data.

### Options

The `Table` constructor can also be used with additional optional parameters during construction:

- `rowType`: The data type of the rows returned by the `Table` instance.
- `defaultRowLimit`: The default number of rows to fetch when using the `all` and `query` methods.
- `defaultScope`: The default scope to use when fetching table rows.

## Usage

Given an existing `Table` instance, a number of methods and read-only properties are made available to utilize the table data.

### Methods:

- [get](/docs/contract-kit/get-method) - Retrieves a specific row from the table by a given key.
- [query](/docs/contract-kit/query-method) - Returns a [Cursor](#) to paginate through rows given specific query parameters.
- [first](/docs/contract-kit/first-method) - Returns a [Cursor](#) to paginate through the first X table rows using the default order.
- [all](/docs/contract-kit/all-method) - Recursively retrieve all table rows using multiple API calls.
- [scopes](/docs/contract-kit/scopes-method) - Returns a [Cursor](#) to fetch the different table scopes available in the table.

### Properties:

- `abi`: The [ABI definition](/docs/antelope/abi) for the contract.
- `account`: The name of the account that the contract is deployed to.
- `name`: The name of the smart contract table.
- `rowType`: The Typescript type of the rows returned by the table.
- `tableAbi`: The part of the ABI definition that is specific to the table.
