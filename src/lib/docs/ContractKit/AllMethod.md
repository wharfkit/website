---
title: All (Method)
description: Retrieves all rows of a specific smart contract table.
category: ContractKit
published: true
order: 7
---

# All

The `all` method allows developers to recursively fetch all rows from a specified smart contract [Table](/docs/contract-kit/table-class).

## Usage

To retrieve all results from a table, the `.all()` method can be passed without any parameters.

```typescript
const rows = await contract.table("table_name").all()

console.log(rows) // logs all rows of the 'table_name' table
```

## Options

The `all` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

- `index_position`: Designates the index to use in the API query. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.
- `scope`: Defines the scope of the rows that should be retrieved.
- `key_type`: Indicates the type of index key to be used. This is useful when using secondary indexes.
- `from`: Denotes the start of the range for bounded queries.
- `to`: Denotes the end of the range for bounded queries.
- `maxRows`: Specifies the maximum number of rows to fetch.
- `rowsPerAPIRequest`: Determines the number of rows fetched per API request for pagination.

### Scope

Providing a `scope` value will restrict the call to return all results from a specific scope.

```typescript
const rows = contract.table("table_name").all({ scope: "scope_name" })

console.log(rows) // Logs all rows of the 'table_name' table with the 'scope_name' scope
```

### Query

Providing a `from` and `to` values allows restricting the scope of all the results to a specific range.

```typescript
const rows = contract.table("table_name").all({ from: 1, to: 10 })

console.log(rows) // Logs all rows of the 'table_name' table with index values between 1 and 10
```

## Return Value

The `all` method returns a promise that resolves to an array of rows from the specified table.
