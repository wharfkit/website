---
title: All (Method)
description: Retrieve all rows of a specific table within a blockchain contract using the `all` method.
category: ContractKit
published: true
order: 7
---

# All Method

## Overview

The `all` method, provided by the [Table](/docs/contract-kit/table) class within the ContractKit, allows developers to fetch all rows of data present in a specified table within a smart contract.

## Usage

```typescript
// Retrieve a table instance using the `table` method
const table = contract.table('table_name');

// Use the `all` method to get all rows from the table
const rows = table.all()

// Logs all rows of the 'table_name' table
console.log(rows);
```