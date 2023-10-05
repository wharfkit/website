---
title: First (Method)
description: change_me
category: ContractKit
published: true
order: 5
---

# First

The first method provides a convenient way to retrieve a limited number of rows from a [table](/docs/contract-kit/table), starting from the first row.

## Usage

```typescript
const cursor = contract.table('table_name').first(1000, {
    index: 'index_name',
    scope: 'scope_name',
    key_type: 'i64',
});  // Returns a cursor that can be used to paginate through the first 1000 rows.
```
## Arguments

- `limit`: The number of rows to retrieve. It must be provided.

## Options

The `first` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `index`: Specifies the field or index in the table for querying.
- `index_position`: Designates the position of the index in multi-index tables.
- `scope`: Defines the scope of the query to refine the search.
- `key_type`: Indicates the type of key for the queried index.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Return Value

It returns a [TableCursor](/docs/contract-kit/cursor) which you can then use to paginate through the rows.