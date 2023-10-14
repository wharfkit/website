---
title: Cursor
description: A utility class within the ContractKit that is used to efficiently fetch rows from a specific smart contract table
category: ContractKit
published: true
order: 4
---

# Cursor

The `Cursor` type an iterator that is returned from specific calls against a [Table](/docs/contract-kit/table-class) instance. A Cursor instance will be returned when using the [query](/docs/contract-kit/query-method), [first](/docs/contract-kit/first-method) and [scopes](/docs/contract-kit/scopes-method) methods of any [Table](/docs/contract-kit/table-class) instance.

## Usage

After calling one of the [Table](/docs/contract-kit/table-class) methods which returns a cursor, the cursor must be called and awaited to return data from the table.

### Next

The `next` method can be used to retrieve the next results based on the query provided and allows pagination through rows from the table.

```typescript
const cursor = contract.table("table_name").query()
const rows = await cursor.next() // fetches as many rows as can be fetched in a single API request
```

The cursor can be iterated upon and called multiple times to retrieve subsequent data further in the table.

```typescript
const cursor = contract.table("table_name").query()
const rows = await cursor.next() // returns rows 1 through 100
const more = await cursor.next() // returns rows 101 through 200
// etc...
```

Optionally a number may be passed as a parameter to the `next` call in order to request a specific number of results returned from the request.

```typescript
const cursor = contract.table("table_name").query()
const rows = await cursor.next(100) // attempts to fetch 100 rows
```

### All

The `.all()` method is also available on a given `Cursor` object, which will attempt to recursively call the table until it reaches the end.

```typescript
const cursor = contract.table("table_name").query()
const rows = await cursor.all() // attempts to fetch all rows
```

This call should be used with caution, as it may perform many requests against the API.

### Reset

A `.reset()` method is also available on a cursor to reset its position back to the start while iterating over table data.

```typescript
const cursor = contract.table("table_name").query()
const rows = await cursor.next() // returns rows 1 through 100
const more = await cursor.next() // returns rows 101 through 200

cursor.reset()

const start = await cursor.next() // returns rows 1 through 100
```

### Returns Value

Each method of a `Cursor` (except `.reset()`) returns an array of typed objects that represent the rows of the smart contract table.
