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

The `all` method can be used to fetch all rows of a table. Here is a basic example:

```typescript
const rows = await contract.table('table_name').all();

console.log(rows) // logs all rows of the 'table_name' table
```

It can also be used to obtain all rows of a table within a specific scope:

```typescript
const rows = contract.table('table_name').all({ scope: 'scope_name' })

console.log(rows); // Logs all rows of the 'table_name' table with the 'scope_name' scope
```

It can also be used to obtain all rows of a table with index values within a specific range:

```typescript
const rows = contract.table('table_name').all({ from: 1, to: 10 })

console.log(rows); // Logs all rows of the 'table_name' table with index values between 1 and 10
```

Any query options can be used in conjunction with each other to further refine the search:

```typescript
const rows = contract.table('table_name').all({
    index: 'index_name',
    scope: 'scope_name',
    key_type: 'i64',
    from: 1,
    to: 10,
    maxRows: 1000,
    rowsPerAPIRequest: 100,
});

console.log(rows); // Logs all rows of the 'table_name' table with the defined query options
```

## Options

The `all` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `index`: Specifies the field or index in the table for querying.
- `index_position`: Designates the position of the index in multi-index tables.
- `scope`: Defines the scope of the query to refine the search.
- `key_type`: Indicates the type of key for the queried index.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Return Value

The `all` method returns a promise that resolves to an array of rows from the specified table.