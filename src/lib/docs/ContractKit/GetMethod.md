---
title: Get (Method)
description: A method to retrieve a specific row from a smart contract table.
category: ContractKit
published: true
order: 5
---

# Get

The `get` method allows for the retrieval of a single row from a [Table](/docs/contract-kit/table-class) instance.

## Usage

The `get` method is available on any [Table](/docs/contract-kit/table-class) instance. It can be used without arguments to get the first row of a table:

```typescript
const row = await contract.table("table_name").get()
// This will retrieve the first row of the table.
```

To get a specific row, the `get` method can be called with a primary index value as its only parameter:

```typescript
const row = await contract.table("table_name").get(17)
// This will retrieve the first row where the primary index has a value of 17.
```

## Arguments

- `value` (Optional): It is an index value that is used to retrieve the desired row. It can be a [Name](/docs/antelope/name), [UInt64](/docs/antelope/uint64), [UInt128](/docs/antelope/uint128), [Float64](/docs/antelope/float64), [Checksum256](/docs/antelope/checksum256), [Checksum160](/docs/antelope/checksum160) or string.

## Options

The `get` method accepts an optional object that can be used to specify the query parameters.

### Scope

Define the scope from which the table query will retrieve data.

```typescript
const row = await contract.table("table_name").get("teamgreymass", {
  scope: "scope_name",
})
// This will retrieve the first row where the tertiary index has a value of 'teamgreymass' and the scope is 'scope_name'.
```

### Index Position

Designates the index to use in the API query. This will affect which `from` and `to` values can be used. In Antelope chains, the index positions follow the pattern of `primary`, `secondary`, `tertiary`, etc.

To get a specific row based on a secondary index, the `get` method can be called with a secondary index value and the `index_position` option set to the index that is used:

```typescript
const row = await contract
  .table("table_name")
  .get("teamgreymass", { index_position: "tertiary" })
// This will retrieve the first row where the secondary index has a value of 'teamgreymass'.
```

### Key Type

Specify the type of index key to be used. This is useful when using secondary indexes.

```typescript
const row = await contract.table("table_name").get("teamgreymass", {
  index_position: "tertiary",
  key_type: "name",
})
// This will retrieve the first row where the secondary index has a value of 'teamgreymass'.
```

## Return Value

The `get` method returns a single table row.
