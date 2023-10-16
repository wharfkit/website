---
title: Reading Tables
category: Contract Kit
published: true
order: 11
---

# Accessing Data From an Antelope Smart Contract

This guide will show how the `Table` class provided by the Contract Kit can be used to access table data from an existing smart contract in a web application.

> **NOTE**: This guide was originally written in August of 2023 and is based upon the `0.4.x` release of `@wharfkit/contract`. It will be updated once the Contract Kit is finalized to reflect any potential changes being made as we work towards a 1.0.0 release.

## Getting Started

Please review the [Dynamically Loading Antelope Smart Contracts](/guides/contract-kit/loading-contracts) guide before proceeding, to understand how to establish a `Contract` instance in an application.

## The Table

Prior to the Contract Kit, developers would typically call the `get_table_rows` API endpoint directly and specify all the required parameters. This often proved difficult, due to its verbose syntax and various ways to accidentally provide incorrect parameters.

To make this process easier, Wharf now offers the `Table` class, which represents a specific table of a smart contract when instantiated. A `Table` instance can be manually created or loaded dynamically from a `Contract` instance by calling the `table` method on it and providing the table name.

```ts
const table = contract.table("table_name")
```

Additionally, a second parameter can be provided to specify a default scope to load the table by. This is useful on contracts where every account has its own scope, like the `eosio.token` contract.

```ts
const contract = await kit.load("eosio.token")
const table = contract.table("accounts", "teamgreymass")
```

With a `Table` instance created, it can be used to create table cursors and retrieve data from an API endpoint.

## Retrieving Data

The `Table` class offers a few methods to retrieve data based on different use cases.

### Get Single Row

The async `get` method on a `Table` instance will get a single row from the table as a typed object. If no parameters are passed, it will simply get and return the first table row.

```ts
const result = await table.get()
```

A string parameter can also optionally be passed, allowing the return of one table row where the primary key matches the provided value.

```ts
const result = await table.get("primary_key_value")
```

Finally, a second parameter can also optionally be passed to further refine the table row that will be returned. The example below passes in an alternative scope from the default:

```ts
const result = await table.get("key_value", {
  scope: "scope_name",
})
```

Additional options such as `key_type` and `index` may also be passed to alter which index is used to perform the lookup. Additional documentation for this will follow, but feel free to [view the source code](https://github.com/wharfkit/contract/blob/17a4b850978bad4ff77f6ad36597ff09c1f52471/src/contract/table.ts#L148-L166) for now to see how these options convert to raw `get_table_rows` parameters.

### Get Multiple Rows

Each table also offers a `query` method that will return a table cursor based on the provided query parameters. This cursor is a reusable object for the query provided, and can be used to iterate over large numbers of rows. The query parameters provided in the call will help to refine the range of rows being returned.

```ts
// Establish Table instance from the contract
const table = contract.table("voters")

// Return a cursor based on a query
const cursor = table.query({
  from: "bar",
  to: "baz",
})
```

The cursor returned here will be set to look for rows where the primary key is between `bar` and `baz`. Additional parameters can be defined to specify an alternative `index` instead of the primary key, as well as a [number of other parameters](https://github.com/wharfkit/contract/blob/17a4b850978bad4ff77f6ad36597ff09c1f52471/src/contract/table.ts#L7-L16) we'll outline in the documentation.

The table cursor being returned as the result of a `query` doesn't contain table rows, but provides an async `next` method to return the next set of rows from the cursor. The `voters` table on the system contract on many Antelope-based blockchains serve as an excellent example of a table requiring this, since it often contains hundreds of thousands of rows. Bulk data like this needs to be iterated over in the application code.

```ts
const cursor = contract.table("voters").query()

const rows = await cursor.next()
// rows 1 - 1000
```

This approach allows the developer to get the first subset of the data from the API and process it or present it to a user. When additional sets of data are required, additional calls to the same cursor can be made for the second, third, or fourth chunk of data.

```ts
const rows = await cursor.next()
// rows 1000 - 2000

const rows = await cursor.next()
// rows 2001 - 3000

const rows = await cursor.next()
// rows 3001 - 4000
```

The cursor will internally keep track of where it left off in the table and automatically request the next set of records. This position in the cursor can be `reset` to start again from the beginning.

```ts
const rows = await cursor.next()
// rows 1 - 1000

const rows = await cursor.next()
// rows 1001 - 2000

const rows = await cursor.reset().next()
// rows 1 - 1000
```

A specific number of rows per request may also be passed directly to each `next` call, to specify the number of rows to request.

```ts
const rows = await cursor.next(10)
// rows 1 - 10

const rows = await cursor.next(10)
// rows 11 - 20
```

And finally, the cursor also offers an `all` method that will return all of the table data based on the query parameters provided.

```ts
const rows = await cursor.all()
```

The cursor does this by recursively making API calls to the provided endpoint until it has reached the end of a table.

Cursors have a number of other methods and options to further tweak how they operate. We'll provide more information as the documentation for the Contract Kit comes online.

### Get Table Scopes

The `Table` class also offers a method to query the blockchain for the scopes in current table state.

The async `scopes` method acts much like `query`, in that it returns a cursor to facilitate loading large amounts of data. The cursor can then be called with either `next` or `all` to make a request to the blockchain to retrieve a subset of the scopes.

The `eosio.msig` contract will serve as our example here, which contains a large amount of scopes since every account using it is entered in their own scope.

```ts
const cursor = contract.table("proposal").scopes()

const scopes = await cursor.next(100)
```

This will return the first 100 scopes that exist in the table.

## More...

Stay tuned as more [guides](/guides), [documentation](/docs) and [example codebases](https://github.com/orgs/wharfkit/repositories?q=example&type=all&language=&sort=) are added, or ask questions in the [Github discussion board for WharfKit](https://github.com/orgs/wharfkit/discussions)!
