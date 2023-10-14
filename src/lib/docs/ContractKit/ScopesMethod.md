---
title: Scopes (Method)
description: Returns the scopes available within a given table.
category: ContractKit
published: true
order: 6
---

# Scopes

The `scopes` method provides a way to retrieve all the scopes on a particular smart contract [Table](/docs/contract-kit/table-class). On Antelope chains, tables can have different sets of data, each stored under a unique scope. This method helps developers to fetch all scopes available for a specific table.

### Usage

When no arguments are passed, the method will return a [Cursor](/docs/contract-kit/cursor) instance that can be used to paginate through every single scope of the table:

```typescript
const scopeCursor = contract.table("table_name").scopes()
// Returns a cursor that can be used to paginate through every scope of the table.
```

To obtain a cursor that can be used to paginate through scopes of a table within a specific range, the `scopes` method can be called with `from` and `to` options:

```typescript
const scopeCursor = contract.table("table_name").scopes({
  from: "scope_5",
  to: "scope_10",
})
// Returns a cursor that can be used to paginate through scopes of the table between 'scope_5' and 'scope_10'.
```

## Options

The `scopes` method accepts an object as an optional second parameter that can be used to specify the query parameters. It can have the following properties:

- `from`: Represents the start of the range for bounded queries.
- `to`: Represents the end of the range for bounded queries.
- `maxRows`: Limit for the number of scopes to retrieve. Helps in optimizing the fetch process.
- `rowsPerAPIRequest`: Dictates the number of scopes fetched in a single API request, useful for pagination and limiting API calls.

## Returns Value

The `scopes` method returns a [Cursor](/docs/contract-kit/cursor) instance, which can be used to paginate through the scopes of the table.
