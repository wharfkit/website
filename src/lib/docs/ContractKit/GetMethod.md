---
title: Get (Method)
description: A method to retrieve specific rows from a blockchain table based on certain query parameters.
category: ContractKit
published: true
order: 5
---

The `get` method allows for precise retrieval of rows from a [table](/docs/contract-kit/table). By specifying query parameters, users can pinpoint a particular row or a set of rows they want to fetch.

## Usage

```typescript
const row = await contract.table('table_name').get(value, queryParams);  
// This will retrieve a single table row based on the given parameters.
```

## Parameters:

- **value** (Optional): Can be a Name, UInt64, UInt128, Float64, Checksum256, Checksum160 or string. It helps to narrow down the search by setting the bounds of the query. If not provided, the first row will be returned.
  
- **queryParams**: An object to further refine the search. Defined as:

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

## Returns:

**Row**: A promise that resolves to a single table row. If the row cannot be found or if the specified index is not present in the ABI, an error will be thrown.
