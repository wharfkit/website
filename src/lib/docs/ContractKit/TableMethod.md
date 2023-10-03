---
title: Table (Method)
description: Retrieve a specific table instance from a blockchain contract.
category: ContractKit
published: true
order: 3
---

# Table

## Overview

The `table` method provided by the [Contract](/docs/contract-kit/contract) class within the ContractKit is a convenient way to obtain a specific table instance of a smart contract.

## Usage

To use the `table` method, one first needs to initialize a [Contract](/docs/contract-kit/contract) instance. The `table` method can then be used to retrieve a table instance for a specific contract table.

```typescript
// Retrieve a table instance using the `table` method
const table = contract.table('table_name');
```

## Arguments

The `table` method accepts a single parameter:

- `tableName`: The name of the contract table to retrieve.

## Return Value

The `table` method returns a [Table](/docs/contract-kit/table) instance.