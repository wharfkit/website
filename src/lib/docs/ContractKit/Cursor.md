---
title: Cursor
description: change_me
category: ContractKit
published: true
order: 4
---

The Cursor class is an extension of the [Table](/docs/contract-kit/table) class. It's purpose-built to fetch rows from a blockchain table efficiently, providing advanced pagination capabilities.

## Usage

```typescript
const cursor = contract.table('table_name').get()
cursor.next(10) // fetches 10 rows
cursor.next() // fetches as many rows as can be fetched in a single API request
```
