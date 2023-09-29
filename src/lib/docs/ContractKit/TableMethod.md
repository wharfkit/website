---
title: Table (Method)
description: Retrieve a specific table instance from a blockchain contract.
category: ContractKit
published: true
order: 3
---

## Overview

The `table` method provided by the [Contract](/docs/contract-kit/contract) class within ContractKit is a convenient way to obtain a specific table instance of a smart contract.

## Usage

```typescript
// Retrieve a table instance using the `table` method
const myTable = contract.table('desired_table_name');
```

## Parameters

The `table` method accepts a single parameter:

- **tableName**: The name of the table you want to retrieve.

## Return Value

The `table` method returns a [Table](/docs/contract-kit/table) instance.