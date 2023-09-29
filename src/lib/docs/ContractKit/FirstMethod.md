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
const cursor = contract.table('table_name').first(1000, queryParams);  // Returns a cursor that can be used to paginate through the first 1000 rows.
```
## Arguments

`limit`: The number of rows to retrieve. It must be provided.
*queryParams*: An optional object that can be used to specify the query parameters. It can have the following properties:

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

## Return Value

It returns a [TableCursor](/docs/contract-kit/cursor) which you can then use to paginate through the rows.