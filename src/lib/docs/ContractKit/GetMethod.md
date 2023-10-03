---
title: Get (Method)
description: A method to retrieve specific rows from a blockchain table based on certain query parameters.
category: ContractKit
published: true
order: 5
---

# Get

The `get` method allows for precise retrieval of rows from a [table](/docs/contract-kit/table). By specifying query parameters, users can pinpoint a particular row or a set of rows they want to fetch.

## Usage

```typescript
const row = await contract.table('table_name').get(index_value, queryParams);  
// This will retrieve a single table row based on the given parameters.
```

## Arguments

- `value` (Optional): Can be a [Name](/docs/antelope/name), [UInt64](/docs/antelope/uint64), [UInt128](/docs/antelope/uint128), [Float64](/docs/antelope/float64), [Checksum256](/docs/antelope/checksum256), [Checksum160](/docs/antelope/checksum160) or string. it is a search value that is used to fetch the desired row. The `index` by which the search value is used to fetch rows can be defined via the `index` or `index_position` options, but if those are provided than the primary table index will be used. If the `value` argument is not provided, the first row of the table will be returned.
  
## Options

The `get` method accepts an optional object that can be used to specify the query parameters. It can have the following properties:

-`index`: Specifies the field or index in the table for querying.
-`index_position`: Designates the position of the index in multi-index tables.
-`scope`: Defines the scope of the query to refine the search.
-`key_type`: Indicates the type of key for the queried index.

## Return Value

A single table row is returned.