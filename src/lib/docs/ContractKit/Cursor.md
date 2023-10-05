---
title: Cursor
description: A utility within the ContractKit to efficiently navigate and fetch rows from smart contract tables with pagination.
category: ContractKit
published: true
order: 4
---

# Cursor

The Cursor class is an extension of the [Table](/docs/contract-kit/table) class. It's purpose-built to fetch rows from smart contract tables efficiently, providing pagination capabilities.

## Creation

A Cursor instance is returned by the [query](/docs/contract-kit/query-method), [first](/docs/contract-kit/first-method) and [scopes](/docs/contract-kit/scopes-method) methods of the [Table](/docs/contract-kit/table) class.
    
## Usage

Once a `Cursor` instance has been created, the `next` method can be used to paginate through rows from the table. Here is a simple example:

```typescript
const cursor = contract.table('table_name').query()
cursor.next() // fetches as many rows as can be fetched in a single API request
```

A `rowsPerAPIRequest` can be specified when calling the next method to control the number of rows fetched:

```typescript 
const cursor = contract.table('table_name').query()
cursor.next(100) // fetches 100 rows
```

### Next Method

The `next` method is used to fetch rows from a blockchain table. It accepts a single parameter:

### Arguments

- `rowsPerAPIRequest`: The number of rows to fetch in a single API request. Defaults to whatever was passed when the cursor was created by either `query`, `first` or `scopes`.

### Returns Value

- `Row[]`: A promise that resolves to an array of rows.
