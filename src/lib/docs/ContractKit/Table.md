---
title: Table
description: Represents a table within a blockchain smart contract and facilitates querying this table for data.
category: ContractKit
published: true
order: 4
---

# Table

The `Table` class acts as a primary interface to access and interact with tables within a smart contract. With its methods, one can fetch rows and scopes, making data retrieval streamlined and intuitive.

## Creation

To initialize a `Table` instance from a `Contract`, you'll typically use the [Contract](/docs/contract-kit/contract) [table() method](/docs/contract-kit/table-method). However, you can also create a `Table` instance directly using its constructor:

```typescript
import { Table } from "@wharfkit/contract";
import { APIClient } from "@wharfkit/antelope";
import type { TableRow } from "./types";

import abi from "./abi.json"; // ABI for the contract that hosts the table.

const table = new Table({
    abi,
    account: "contract_name",
    name: "table_name",
    client: new APIClient("https://jungle4.greymass.com"),
    rowType: TableRow,
    defaultRowLimit: 1000,
    defaultScope: 'scope_name'
});
```

### Arguments

The `Table` constructor accepts an object containing all the required configuration data:

- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `account`: The name of the account that the contract is deployed to.
- `name`: The name of the table to retrieve.
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to communicate with the blockchain.

### Options

The `Table` constructor also acceptssome  optional configuration data in the single parameter:

- `rowType`: The type of the rows returned by the table. This is used to cast the data returned by the blockchain into a specific type.
- `defaultRowLimit`: The default number of rows to fetch when using the `all` method.
- `defaultScope`: The default scope to use when fetching rows from the table.

## Usage

Once a `Table` instance is created, methods and read-only properties are available.

### Methods:

Here's a quick overview of the available methods. Click on each method for a detailed explanation and usage:

- [query](/docs/contract-kit/query-method) - Queries the table based on given parameters.
- [get](/docs/contract-kit/get-method) - Retrieves a specific row from the table.
- [first](/docs/contract-kit/first-method) - Fetches the initial set of rows from the table.
- [all](/docs/contract-kit/all-method) - Retrieves all rows from the table.
- [scopes](/docs/contract-kit/scopes-method) - Obtains the different scopes within the table.

### Properties:

Here are the read-only properties available on a `Table` instance:

- `account`: The name of the account that the contract is deployed to.
- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `name`: The name of the table.
- `rowType`: The type of the rows returned by the table.
- `tableAbi`: The ABI definition for the table.