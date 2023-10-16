---
title: First (Method)
description: Returns a cursor that can be used to fetch a limited number of rows from a smart contract table.
category: ContractKit
published: true
order: 5
requiresReview: true
---

# First

The `first` method makes it easy to retrieve a specific number of rows from a [Table](/docs/contract-kit/table-class) instance by returning a [Cursor](/docs/contract-kit/cursor). The rows returned will utilize the default ordering and scope of the table unless specified otherwise.

## Usage

The `first` method is available on a [Table](/docs/contract-kit/table-class) instance. It can be called with a single parameter to specify the number of rows to retrieve:

```typescript
const cursor = contract.table("table_name").first(1000)
// Returns a cursor that can be used to paginate through the first 1000 rows.
```

A `scope` can be specified to only retrieve rows from a specific scope:

```typescript
const cursor = contract.table("table_name").first(1000, {
  scope: "scope_name",
})
// Returns a cursor that can be used to paginate through the first 1000 rows of entries with the 'scope_name' scope.
```

Any of the options can be used in conjunction with each other to further refine the search:

```typescript
const cursor = contract.table("table_name").first(1000, {
  index_position: "secondary",
  scope: "scope_name",
  from: 17,
})
// Returns a cursor that can be used to paginate through the first 1000 rows of entries with the 'scope_name' scope, 'index_name' index, starting from index value 17.
```

## Arguments

- `limit`: The number of rows to retrieve.

## Options

The `first` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `index_position`: Designates the index to use in the API query. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.
- `scope`: Defines the scope of the rows that should be retrieved.
- `key_type`: Indicates the type of index key to be used. This is useful when using secondary indexes.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Return Value

The `first` method returns a [Cursor](/docs/contract-kit/cursor) instance which can be used to paginate through the table rows.
