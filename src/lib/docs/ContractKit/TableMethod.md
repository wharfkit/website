---
title: Table (Method)
description: Retrieve a specific table instance from a blockchain contract.
category: ContractKit
published: true
order: 3
---

# Table

## Overview

The `table` method allows for the retrieval of a specific [table](/docs/contract-kit/table) instance from a [Contract](/docs/contract-kit/contract) instance.

## Usage
The `table` method is available on any [Contract](/docs/contract-kit/contract) instance. Here is a basic example of how to use it:

```typescript
const table = contract.table('table_name');
// Returns a table instance for the 'table_name' table.
```

To specify the default scope to be used when fetching rows from the resulting `table` instance, the `table` method can be called with an optional `scope` parameter:

```typescript
const table = contract.table('table_name', 'scope_name');
// Returns a table instance for the 'table_name' table with the default scope 'scope_name'.
```

## Arguments

The `table` method accepts a single parameter:

- `tableName`: The name of the contract table to retrieve.

## Options

- `scope`: The default scope to be used when fetching rows from the table instance.

## Return Value

The `table` method returns a [Table](/docs/contract-kit/table) instance.