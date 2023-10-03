---
title: All (Method)
description: Retrieve all rows of a specific table within a blockchain contract using the `all` method.
category: ContractKit
published: true
order: 7
---

# All

The `all` method, provided by the [Table](/docs/contract-kit/table) class within the ContractKit, allows developers to fetch all rows of data present in a specified table within a smart contract.

## Usage

```typescript
// Retrieve a table instance using the `table` method
const table = contract.table('table_name');

// Use the `all` method to get all rows from the table
const rows = table.all({ scope: 'scope_name', from: 0, to: 1000 })

// Logs all rows of the 'table_name' table
console.log(rows);
```

## Options

The `all` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

-`index`: Specifies the field or index in the table for querying.
-`index_position`: Designates the position of the index in multi-index tables.
-`scope`: Defines the scope of the query to refine the search.
-`key_type`: Indicates the type of key for the queried index.
-`from`: Denotes the start of the range for bounded queries.
-`to`: Denotes the end of the range for bounded queries.
-`maxRows`: Specifies the maximum number of rows to fetch.
-`rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Return Value

The `all` method returns a promise that resolves to an array of rows from the specified table.