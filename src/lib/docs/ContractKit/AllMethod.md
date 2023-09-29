---
title: All (Method)
description: Retrieve all rows of a specific table within a blockchain contract using the `all` method.
category: ContractKit
published: true
order: 7
---

# All

The `all` method, provided by the [Table](/docs/contract-kit/table) class within the ContractKit, allows developers to fetch all rows of data present in a specified table within a smart contract.

## Usage

```typescript
// Retrieve a table instance using the `table` method
const table = contract.table('table_name');

// Use the `all` method to get all rows from the table
const rows = table.all()

// Logs all rows of the 'table_name' table
console.log(rows);
```

## Arguments

The `all` method accepts a single optional parameter:

- `queryParams`: An optional query object that can be used to filter the rows returned by the `all` method.

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

The `all` method returns a promise that resolves to an array of rows from the specified table.