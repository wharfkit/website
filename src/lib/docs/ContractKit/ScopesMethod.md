---
title: Scopes (Method)
description: Extracts the different scopes within a given table, allowing users to understand the specific contexts in which the table data is organized.
category: ContractKit
published: true
order: 6
---

# Scopes

The `scopes` method provides a structured way to retrieve all the scopes of a particular [table](/docs/contract-kit/table). On Antelope chains, tables can have different sets of data, each stored under a unique scope. This method helps developers to fetch all scopes for a specific table.

### Usage

To use this method, one first needs to obtain a [Table](/docs/contract-kit/table) instance. The `scopes` method can then be called to retrieve any and all the scopes of the contract table.

```typescript
const scopeCursor = contract.table('table_name').scopes({
    from: 'scope_name_1',
    to: 'scope_name_10',
    maxRows: 100,
    rowsPerAPIRequest: 10
});
```

## Options

The `scopes` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `from`: Represents the start of the range for bounded queries.
- `to`: Represents the end of the range for bounded queries.
- `maxRows`: Limit for the number of scopes to retrieve. Helps in optimizing the fetch process.
- `rowsPerAPIRequest`: Dictates the number of scopes fetched in a single API request, useful for pagination and limiting API calls.

## Returns Value

A [cursor](/docs/contract-kit/cursor) is returned, which can be used to paginate through the scopes of the table.