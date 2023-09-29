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

## Arguments

`queryParams`: An object with criteria to filter the table rows. Defined as:

```typescript
interface QueryParams {
    index?: string;                      // Specifies the field or index in the table for querying.
    index_position?: string;             // Designates the position of the index in multi-index tables.
    scope?: NameType | number;           // Defines the scope of the query to refine the search.
    key_type?: keyof API.v1.TableIndexTypes;  // Indicates the type of key for the queried index.
    json?: boolean;                      // If true, results will be returned in JSON format.
    from?: API.v1.TableIndexType | string | number;  // Denotes the start of the range for bounded queries.
    to?: API.v1.TableIndexType | string | number;    // Denotes the end of the range for bounded queries.
    maxRows?: number;                    // Specifies the maximum number of rows to fetch.
    rowsPerAPIRequest?: number;          // Determines the number of rows fetched per API request for pagination.
}
```

## Returns Value

A [cursor](/docs/contract-kit/table) is returned, which can be used to paginate through the table rows.