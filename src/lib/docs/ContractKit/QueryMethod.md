---
title: Query (Method)
description: Returns a cursor that can be used to fetch rows from a smart contract table following a set of query parameters.
category: ContractKit
published: true
order: 5
---

# Query Method

The `query` method retrieves rows from a smart contract table based on the provided query parameters. It returns a [Cursor](/docs/contract-kit/cursor) instance that can be used to paginate through the table rows.

### Usage

The `query` method is available on any [Table](/docs/contract-kit/table) instance. When no arguments are passed, it will return a [Cursor](/docs/contract-kit/cursor) instance that can be used to paginate through every single row of the the table:

```typescript
const tableCursor = contract.table('table_name').query();
// Returns a cursor that can be used to paginate through every row of the 'table_name' table.
```

To obtain a `Cursor` instance that can be used to paginate through rows that belong to a specific scope, the `query` method can be called with a `scope` option:

```typescript
const tableCursor = contract.table('table_name').query({
    scope: 'scope_name',
});
// Returns a cursor that can be used to paginate through rows of the table with the 'scope_name' scope.
```

The `maxRows` and `rowsPerAPIRequests` options are also available to specify the maximum number of rows that the `Cursor` instance should retrieve and the number of rows that should be fetched per API request:

```typescript
const tableCursor = contract.table('table_name').query({
    maxRows: 100,
    rowsPerAPIRequest: 10
});
// Returns a cursor that can be used to paginate through the first 100 rows of the table, with 10 rows fetched per API request.
```

Any query option can be used in conjunction with each other to specify exactly which rows the cursor should paginate over:

```typescript
const tableCursor = contract.table('table_name').query({
    index_position: 'secondary',
    scope: 'scope_name',
    from: 42,
    maxRows: 1000,
});
// Returns a cursor that can be used to paginate through the first 1000 rows of the table with the 'scope_name' scope, starting from secondary index value 42.
```

## Options

The `query` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `index_position`: Designates the position of the index in multi-index tables. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.
- `scope`: Defines the scope of the rows that should be retrieved.
- `key_type`: Indicates the type of index key to be used. This is useful when using secondary indexes.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Returns Value

A [Cursor](/docs/contract-kit/table) instance is returned, which can be used to paginate through the table rows.