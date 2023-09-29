---
title: Cursor
description: A utility within ContractKit to efficiently navigate and fetch rows from blockchain tables with advanced pagination.
category: ContractKit
published: true
order: 4
---

The Cursor class is an extension of the [Table](/docs/contract-kit/table) class. It's purpose-built to fetch rows from a blockchain table efficiently, providing advanced pagination capabilities.

## **next()** method:

The `next` method is used to fetch rows from a blockchain table. It accepts a single parameter:

### Parameters:

**rowsPerAPIRequest**: The number of rows to fetch in a single API request. Defaults to 100.

### Returns:

**Row**: A promise that resolves to an array of rows.

### Usage

```typescript
const cursor = contract.table('table_name').get()
cursor.next(10) // fetches 10 rows
cursor.next() // fetches as many rows as can be fetched in a single API request
```
