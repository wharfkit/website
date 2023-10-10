---
title: All (Method)
description: Retrieves all rows of a specific smart contract table.
category: ContractKit
published: true
order: 7
---

# All

The `all` method allows developers to fetch all rows of data present in a specified smart contract table.

## Usage

The `all` method is available on any [Table](/docs/contract-kit/table) instance. It can be used to fetch all rows of a table. Here is a basic example:

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
    index_position: 'secondary',
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

- `index_position`: Designates the index to use in the API query. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.
- `scope`: Defines the scope of the rows that should be retrieved.
- `key_type`: Indicates the type of index key to be used. This is useful when using secondary indexes.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Return Value

The `all` method returns a promise that resolves to an array of rows from the specified table.