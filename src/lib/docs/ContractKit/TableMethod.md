---
title: Table (Method)
description: Returns a specific table instance.
category: ContractKit
published: true
order: 2
requiresReview: true
---

# Table

## Overview

The `table` method creates a specific [Table](/docs/contract-kit/table-class) instance from an existing [Contract](/docs/contract-kit/contract) object.

## Usage

The `table` method can be called and the only required argument that must be passed is the name of the table as defined in the [ABI](#).

```typescript
const table = contract.table("table_name")
// Returns a Table instance for the 'table_name' table.
```

## Arguments

The `table` method requires a single argument:

- `tableName`: The name of the contract table to retrieve.

## Options

In addition to the required argument, optional parameters may also be passed to dictate how the resulting Table class will behave.

- `scope`: The default scope to be used when fetching rows with the `Table` instance.
- `rowType`: The Typescript type of the rows that will be returned by the `Table` instance.

### Scope

A second optional parameter may also be passed to define the default scope for all subsequent calls against the resulting [Table](/docs/contract-kit/table-class) object.

```typescript
const table = contract.table("table_name", "scope_name")
// Returns a Table instance for the 'table_name' table with the default scope 'scope_name'.
```

### Row Type

A third optional parameter can also be passed that allows manually defining the data response type for all requests against this [Table](/docs/contract-kit/table-class) object.

```typescript
@Struct.type("name_bid")
class NameBid extends Struct {
  @Struct.field(Name) newname!: Name
  @Struct.field(Name) high_bidder!: Name
  @Struct.field(Int64) high_bid!: Int64
  @Struct.field(TimePoint) last_bid_time!: TimePoint
}

const table = contract.table("table_name", "scope_name", NameBid)
// Returns a Table instance for the 'table_name' table with the default scope 'scope_name'.
```

## Return Value

The `table` method returns a [Table](/docs/contract-kit/table-class) instance.
