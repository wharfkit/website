---
title: Table (Method)
description: Returns a specific table instance.
category: ContractKit
published: true
order: 3
---

# Table

## Overview

The `table` method generates a specific [Table](/docs/contract-kit/table) instance from a [Contract](/docs/contract-kit/contract) instance.

## Usage

The `table` method is available on any [Contract](/docs/contract-kit/contract) instance. Here is a basic example of how to use it:

```typescript
const table = contract.table('table_name');
// Returns a Table instance for the 'table_name' table.
```

To specify the default scope to be used when fetching rows with the resulting `table` instance, the `table` method can be called with an optional `scope` parameter:

```typescript
const table = contract.table('table_name', 'scope_name');
// Returns a Table instance for the 'table_name' table with the default scope 'scope_name'.
```

## Arguments

The `table` method accepts a single argument:

- `tableName`: The name of the contract table to retrieve.

## Options

- `scope`: The default scope to be used when fetching rows with the `Table` instance.
- `rowType`: The Typescript type of the rows that will be returned by the `Table` instance.

## Return Value

The `table` method returns a [Table](/docs/contract-kit/table) instance.