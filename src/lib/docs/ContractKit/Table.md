---
title: Table
description: change_me
category: ContractKit
---

```ts
const table = new Table({
  contract: "eosio",
  name: "namebids",
  client: mockClient,
})

// first row, default order
table.first()

// first 10 rows, default order
table.first(10)

// all rows (recursive fetching), default order
const cursor = table.all()
cursor.next()

// throw error, query not provided
table.where()

// throw error, query not provided
table.where({})

// throw error, query not provided
const table = new Table({
  contract: "delphioracle",
  name: "datapoints",
  client: mockClient,
})
table.where({ scope: "eosusd" })
```

```ts
// ------- FIND -------

// throws error
table.find()

// find by default index
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"table":"producers","limit":10,"code":"eosio","scope":"eosio","json":true,"lower_bound":"teamgreymass","upper_bound":"teamgreymass"}'
producersTable.find("teamgreymass")

// find by named index
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"code":"decentiumorg","scope":"decentiumorg","table":"trending","json":true,"lower_bound":5,"upper_bound":5}'
decentiumTable.find(5, {
  index: "id",
})

// find by default index in a scope
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"table":"datapoints","limit":10,"code":"delphioracle","scope":"eosusd","json":true,"lower_bound":"18446744073708221438","upper_bound":"18446744073708221438"}'
delphiTable.find("18446744073708221438", {
  scope: "eosusd",
})

// find by named index in a scope
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"code":"decentiumorg","scope":"decentiumorg","table":"trending","json":true,"scope":"decentiumorg","lower_bound":5,"upper_bound":5}'
decentiumTable.find(5, {
  index: "id",
  scope: "decentiumorg",
})
```

```ts
// ------- WHERE -------

// throws error
table.where()

// throws error
table.where({})

// where by default index
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"table":"producers","code":"eosio","scope":"eosio","json":true,"lower_bound":"eosnationftw","upper_bound":"teamgreymass"}'
producersTable.where({
    from: "eosnationftw",
    to: "teamgreymass"
})

// where using named index
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"table":"trending","code":"decentiumorg","scope":"decentiumorg","limit":10,"lower_bound":"101511","upper_bound":"105056","index_position":"secondary","key_type":"i64","json":true}'
decentiumTable.where({
    from: 101511,
    to: 105056,
    index: 'score'
})

// where using scope and default
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"code":"decentiumorg","scope":"decentiumorg","table":"trending","json":true,"lower_bound":5,"upper_bound":7}'
decentiumTable.where({
    from: 5,
    to: 7,
    scope: 'decentiumorg'
})

// where using scope and named index
// curl http://eos.greymass.com/v1/chain/get_table_rows -d '{"table":"trending","code":"decentiumorg","scope":"decentiumorg","limit":10,"lower_bound":"101511","upper_bound":"105056","index_position":"secondary","key_type":"i64","json":true}'
decentiumTable.where({
    from: 101511,
    to: 105056,
    scope: 'decentiumorg'
    index: 'score'
})
```
