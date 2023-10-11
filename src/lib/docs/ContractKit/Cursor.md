---
title: Cursor
description: A utility class within the ContractKit that is used to efficiently fetch rows from a specific smart contract table
category: ContractKit
published: true
order: 4
---

# Cursor

The `Cursor` class is an extension of the [Table](/docs/contract-kit/table) class. It is used to efficiently paginate through rows of a specific smart contract table.

## Creation

A Cursor instance can be returned by the [query](/docs/contract-kit/query-method), [first](/docs/contract-kit/first-method) and [scopes](/docs/contract-kit/scopes-method) methods of any [Table](/docs/contract-kit/table) instance.
    
## Usage

### Next Method

Once a `Cursor` instance has been created, the `next` method can be used to paginate through rows from the table. Here is a basic example:

```typescript
const cursor = contract.table('table_name').query()
const rows = await cursor.next() // fetches as many rows as can be fetched in a single API request
```

A `rowsPerAPIRequest` can be specified when calling the `next` method to control the number of rows fetched:

```typescript 
const cursor = contract.table('table_name').query()
const rows = await cursor.next(100) // fetches 100 rows
```

### Options

- `rowsPerAPIRequest`: The number of rows to fetch. Defaults to whatever was passed when the cursor was created by either `query`, `first` or `scopes`.

### Returns Value

The `next` method returns a promise that resolves to an array of table rows.
