---
title: Scopes (Method)
description: Extracts the different scopes within a given table, allowing users to understand the specific contexts in which the table data is organized.
category: ContractKit
published: true
order: 6
---

# Scopes Method

The `scopes` method provides a structured way to retrieve all the scopes of a particular [table](/docs/contract-kit/table). On Antelope chains, tables can have different sets of data, each stored under a unique scope. This method helps developers to fetch all scopes for a specific table.

### Usage

```typescript
const scopeCursor = contract.table('table_name').scopes(queryParams);
// Retrieves all scopes of the specified table based on the defined queryParams.
```

## Parameters:

**queryParams:** An object that offers filtering and pagination for scopes. Its properties include:

```typescript
interface QueryParams {
    // Represents the start of the range for bounded queries.
    from?: API.v1.TableIndexType | string | number;

    // Represents the end of the range for bounded queries.
    to?: API.v1.TableIndexType | string | number;

    // Limit for the number of scopes to retrieve. Helps in optimizing the fetch process.
    maxRows?: number;

    // Dictates the number of scopes fetched in a single API request, useful for pagination and limiting API calls.
    rowsPerAPIRequest?: number;
}
```

## Returns:

A [cursor](/docs/contract-kit/cursor) is returned, which acts as an iterator over the different scopes of the table. It aids in seamless navigation and extraction of the table scopes, giving developers a clearer perspective on the organization of table data.