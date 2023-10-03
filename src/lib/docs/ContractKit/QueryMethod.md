---
title: Query (Method)
description: change_me
category: ContractKit
published: true
order: 5
---

# Query Method

The `query` method retrieves rows from a blockchain table based on the provided query parameters. This method allows for a fine-tuned search within the table, returning rows that match the specified criteria.

### Usage

A `query` method is available on the [Table](/docs/contract-kit/table) class. Here's an example of how to use it:

```typescript
const tableCursor = contract.table('table_name').query({
    index: 'index_name',
    scope: 'scope_name',
    key_type: 'i64',
    json: true,
    maxRows: 1000,
    rowsPerAPIRequest: 100,
});
```

## Options

The `query` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

-`index`: Specifies the field or index in the table for querying.
-`index_position`: Designates the position of the index in multi-index tables.
-`scope`: Defines the scope of the query to refine the search.
-`key_type`: Indicates the type of key for the queried index.
-`from`: Denotes the start of the range for bounded queries.
-`to`: Denotes the end of the range for bounded queries.
-`maxRows`: Specifies the maximum number of rows to fetch.
-`rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

## Returns Value

A [cursor](/docs/contract-kit/table) is returned, which can be used to paginate through the table rows.