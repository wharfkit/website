---
title: Query (Method)
description: change_me
category: ContractKit
published: true
order: 5
---

# Query Method

The `query` method retrieves rows from a smart contract table based on the provided query parameters. This method allows for a fine-tuned search within the table, returning rows that match the specified criteria.

### Usage

The `query` method is available on any [Table](/docs/contract-kit/table) instance. When no arguments are passed, it will return a [cursor](/docs/contract-kit/cursor) that can be used to paginate through every single row of the the table:

```typescript
const tableCursor = contract.table('table_name').query();
// Returns a cursor that can be used to paginate through every row of the table.
```

To obtain a cursor that can be used to paginate through rows of a table within a specific scope, the `query` method can be called with a `scope` option:

```typescript
const tableCursor = contract.table('table_name').query({
    scope: 'scope_name',
});
// Returns a cursor that can be used to paginate through rows of the table with the 'scope_name' scope.
```

The `maxRows` and `rowsPerAPIRequests` options are also available when using the `query` method:

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

- `index`: Specifies the field or index in the table for querying.
- `index_position`: Designates the position of the index in multi-index tables.
- `scope`: Defines the scope of the query to refine the search.
- `key_type`: Indicates the type of key for the queried index.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Returns Value

A [cursor](/docs/contract-kit/table) is returned, which can be used to paginate through the table rows.