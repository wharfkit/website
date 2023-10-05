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

The `scopes` method is available on the [Table](/docs/contract-kit/table) class. When no arguments are passed, the method will return a [cursor](/docs/contract-kit/cursor) that can be used to paginate through every single scope of the table:

```typescript
const scopeCursor = contract.table('table_name').scopes();
// Returns a cursor that can be used to paginate through every scope of the table.
```

To obtain a cursor that can be used to paginate through scopes of a table within a specific range, the `scopes` method can be called with `from` and `to` options:

```typescript
const scopeCursor = contract.table('table_name').scopes({
    from: 'scope_name_1',
    to: 'scope_name_10',
});
// Returns a cursor that can be used to paginate through scopes of the table between 'scope_name_1' and 'scope_name_10'.
```

The `maxRows` and `rowsPerAPIRequest` options are also available when using the `scopes` method:

```typescript
const scopeCursor = contract.table('table_name').scopes({
    maxRows: 100,
    rowsPerAPIRequest: 10
});
// Returns a cursor that can be used to paginate through the first 100 scopes of the table, with 10 scopes fetched per API request.
```

## Options

The `scopes` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `from`: Represents the start of the range for bounded queries.
- `to`: Represents the end of the range for bounded queries.
- `maxRows`: Limit for the number of scopes to retrieve. Helps in optimizing the fetch process.
- `rowsPerAPIRequest`: Dictates the number of scopes fetched in a single API request, useful for pagination and limiting API calls.

## Returns Value

A [cursor](/docs/contract-kit/cursor) is returned, which can be used to paginate through the scopes of the table.