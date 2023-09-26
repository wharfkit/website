---
title: First (Method)
description: change_me
category: ContractKit
published: true
order: 5
---

The first method provides a convenient way to retrieve a limited number of rows from a blockchain table, starting from the first row.

## Usage

```typescript
const cursor = contract.table('table_name').first(1000, queryParams);  // Returns a cursor that can be used to paginate through the first 1000 rows.
```
## Parameters:

*limit*: The number of rows to retrieve. It must be provided.
*queryParams*: An optional object that can be used to specify the query parameters. It can have the following properties:

```typescript
interface QueryParams {
    index?: string
    index_position?: string
    scope?: NameType | number
    key_type?: keyof API.v1.TableIndexTypes
    json?: boolean
    from?: API.v1.TableIndexType | string | number
    to?: API.v1.TableIndexType | string | number
    maxRows?: number
    rowsPerAPIRequest?: number
}
```

Returns
It returns a TableCursor<RowType> which you can then use to paginate through the rows.