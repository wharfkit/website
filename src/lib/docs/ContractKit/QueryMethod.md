---
title: Query (Method)
description: Returns a cursor that can be used to fetch rows from a smart contract table following a set of query parameters.
category: ContractKit
published: true
order: 5
---

# Query

The `query` method retrieves rows from a smart contract [Table](/docs/contract-kit/table) instance based on the provided query parameters. It returns a [Cursor](/docs/contract-kit/cursor) instance that can be used to paginate through the table rows within the specified query range.

### Usage

When no arguments are passed, it will return a [Cursor](/docs/contract-kit/cursor) instance that can be used to paginate through the results.

```typescript
const tableCursor = contract.table("table_name").query()
// Returns a cursor that can be used to paginate through all rows of the 'table_name' table.
```

The `from` field can be used to designate a specific starting point from which to return results.

```typescript
const tableCursor = contract.table("table_name").query({
  from: 10,
})
// Returns a cursor that can be used to paginate through results starting at the result where the primary key is 10
```

In addition, a `to` field can be used to specify an end point to the results.

```typescript
const tableCursor = contract.table("table_name").query({
  from: 10,
  to: 20,
})
// Returns a cursor that can be used to paginate through results starting at the result where the primary key is 10 and ending at 20
```

## Options

The `query` method accepts many an additional parameters to further refine the query.

- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `index_position`: Designates the index to use in the API query. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.
- `scope`: Defines the scope of the rows that should be retrieved.
- `key_type`: Indicates the type of index key to be used. This is useful when utilizing secondary indexes.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

### Scope

To obtain a `Cursor` instance that can be used to paginate through rows that belong to a specific scope, the `query` method can be called with a `scope` option:

```typescript
const tableCursor = contract.table("table_name").query({
  scope: "scope_name",
})
// Returns a cursor that can be used to paginate through rows of the table with the 'scope_name' scope.
```

### Index Position

Any query option can be used in conjunction with another to specify exactly which rows the cursor should paginate over:

```typescript
const tableCursor = contract.table("table_name").query({
  index_position: "secondary",
  scope: "scope_name",
  from: 42,
  maxRows: 1000,
})
// Returns a cursor that can be used to paginate through the first 1000 rows of the table with the 'scope_name' scope, starting from secondary index value 42.
```

## Returns Value

A [Cursor](/docs/contract-kit/table-class) instance is returned, which can be used to paginate through the table rows.
