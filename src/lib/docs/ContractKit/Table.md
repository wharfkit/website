---
title: Table
description: The Table class serves as a wrapper for Antelope smart contract tables. It offers several helper methods to help retrieve table data.
category: ContractKit
published: true
order: 4
---

# Table

A `Table` class instances represents a specific `Antelope smart contract table`. It has several methods that simplify the process of retrieving table data.

## Creation

The [Contract](/docs/contract-kit/contract) [table() method](/docs/contract-kit/table-method) is usually used to obtain `Table` instances. However, it can also be instantiated directly using its constructor:

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

The `Table` constructor accepts an object containing the following configuration data:

- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `account`: The name of the account that the contract is deployed to.
- `name`: The name of the table to retrieve.
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to fetch blockchain data.

### Options

The `Table` constructor also accepts some options:

- `rowType`: The data type of the rows returned by the `Table` instance.
- `defaultRowLimit`: The default number of rows to fetch when using the `all` and `query` methods.
- `defaultScope`: The default scope to use when fetching table rows.

## Usage

Once a `Table` instance is created, methods and read-only properties are available.

### Methods:

- [all](/docs/contract-kit/all-method) - Retrieves all table rows.
- [first](/docs/contract-kit/first-method) - Returns a `Cursor` instance that can be used to paginate through a specified number of table rows.
- [get](/docs/contract-kit/get-method) - Retrieves a specific row from the table.
- [query](/docs/contract-kit/query-method) - Returns a `Cursor` instance that can be used to paginate through rows given specific query parameters.
- [scopes](/docs/contract-kit/scopes-method) - Returns a `Cursor` instance that can be used to fetch the different scopes available in the table.

### Properties:

- `abi`: The [ABI definition](/docs/antelope/abi) for the contract.
- `account`: The name of the account that the contract is deployed to.
- `name`: The name of the smart contract table.
- `rowType`: The Typescript type of the rows returned by the table.
- `tableAbi`: The part of the ABI definition that is specific to the table.