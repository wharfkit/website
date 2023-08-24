---
title: Action
description: A typed representation of a smart contract action and its data.
category: Antelope
published: false
---

# Action

The `Action` type represents a single action to be performed on an Antelope blockchain. An action on the blockchain is a call to execute a function on a [Smart Contract](#). One or more action objects are required for the creation of a [Transaction](#). Each action contains data for an individual call. This data is serialized using the `ABI` from the smart contract associated with the action, at the block height it was submitted.

While both the [SessionKit](/docs/session-kit/session-kit-factory) and [ContractKit](#) abstract away this complexity, assembling an action manually is oftentimes something applications may need to do in more advanced use cases.

This document will go over what an action is and how to create them.

## Anatomy of an Action

Every action on an Antelope blockchain consists of the following information:

```ts
{
    // The name of the account that the contract is deployed to
    account: 'eosio.token',
    // The name of the action to execute on the contract
    name: 'transfer',
    // An array of accounts and permissions authorizing this action
    authorization: [
        {
            actor: 'foo',
            permission: 'active'
        }
    ],
    // The data required by the smart contract to perform the action
    data: {
        from: 'teamgreymass',
        to: 'funds.gm',
        quantity: '0.0001 EOS',
        memo: 'Thanks for all the fish!'
    }
}
```

This structure includes the `account` the smart contract exists on, as well as the `name` of the action to perform.

The `authorization` array defines the account(s) that authorize the action to be performed on the smart contract.

Finally, the `data` object in the action defines the parameters passed to the smart contract call. This field on the action is serialized before it's submitted to the blockchain, which is what the `Action` Antelope data type helps achieve. This data type provides the methods needed in order to encode and decode the serialized data, depending on the developer's needs.

Once serialized, the actual anatomy of an `Action` at the system level looks more like this:

```ts
{
    // The account the contract is associated with on-chain
    account: 'eosio.token',
    // The name of the method to execute on the contract
    name: 'transfer',
    // An array of authorizations used to perform the transaction
    authorization: [
        {
            actor: 'foo',
            permission: 'active'
        }
    ],
    // The data required by the smart contract to perform the action
    data: '80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821'
}
```

The `Action` type provides the tools needed to both encode and decode this serialized data format.

## Usage

A smart contract `Action` can be created in multiple ways, depending on whether the data is serialized or not.

```ts
import { Action } from "@wharfkit/antelope"

// Passing in data which contains serialized data (either raw or using a Struct)
const action = Action.from(data)

// Passing in unserialized data alongside an ABI or Struct as the 2nd parameter
const action = Action.from(data, abi)
```

The resulting typed `Action` will be represented in the serialized format and be ready for inclusion in a [Transaction](#).

### Creating an Action

#### Using Serialized Data

Passing in raw serialized data does not require an ABI to assemble an `Action`.

```ts
const data = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data: "80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821",
}

const typedAction = Action.from(data)

// {"account":"eosio.token","name":"transfer","authorization":[{"actor":"foo","permission":"active"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
```

#### Using Unserialized Data With a Struct

A [Struct](#) can be used to wrap unserialized `Action` data for automatic serialization.

```ts
@Struct.type("transfer")
export class Transfer extends Struct {
  @Struct.field(Name) from!: Name
  @Struct.field(Name) to!: Name
  @Struct.field(Asset) quantity!: Asset
  @Struct.field("string") memo!: string
}

const data = Transfer.from({
  from: "teamgreymass",
  to: "funds.gm",
  quantity: "0.0001 EOS",
  memo: "Thanks for all the fish!",
})

const untypedAction = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data,
}

const typedAction = Action.from(untypedAction)

// {"account":"eosio.token","name":"transfer","authorization":[{"actor":"foo","permission":"active"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
```

#### Using Unserialized Data With an ABI

An [ABI](#) can also be passed as a 2nd parameter to the `.from` method to automatically convert unserialized data.

```ts
const data = {
  from: "teamgreymass",
  to: "funds.gm",
  quantity: "0.0001 EOS",
  memo: "Thanks for all the fish!",
}

const untypedAction = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data,
}

const { abi } = await client.v1.chain.get_abi("eosio.token")

const typedAction = Action.from(untypedAction, abi)

// {"account":"eosio.token","name":"transfer","authorization":[{"actor":"foo","permission":"active"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
```

#### Using Unserialized Data With a Predefined ABI

The [ABI](#) passed in as a 2nd parameter can also be manually defined or read from a cached version.

```ts
const data = {
  from: "teamgreymass",
  to: "funds.gm",
  quantity: "0.0001 EOS",
  memo: "Thanks for all the fish!",
}

const untypedAction = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data,
}

const abi = ABI.from({
  version: "eosio::abi/1.0",
  types: [],
  variants: [],
  structs: [
    {
      name: "transfer",
      base: "",
      fields: [
        {
          name: "from",
          type: "name",
        },
        {
          name: "to",
          type: "name",
        },
        {
          name: "quantity",
          type: "asset",
        },
        {
          name: "memo",
          type: "string",
        },
      ],
    },
  ],
  actions: [],
  tables: [],
  ricardian_clauses: [],
})

const typedAction = Action.from(untypedAction, abi)

// {"account":"eosio.token","name":"transfer","authorization":[{"actor":"foo","permission":"active"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
```

### Decoding Action data

Instances of the `Action` type can also be used to decode the action data and represent it in native Antelope core types. Each `Action` instance has a built-in `decodeData` method which utilizes the [Serializer](#) to convert the data.

#### Using decodeAction With a Struct

Any [Struct](#) types defined in-code can be passed to `decodeData` to decode the serialized data into an object.

```ts
@Struct.type("transfer")
class Transfer extends Struct {
  @Struct.field(Name) from!: Name
  @Struct.field(Name) to!: Name
  @Struct.field(Asset) quantity!: Asset
  @Struct.field("string") memo!: string
}

const typedAction = Action.from({
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data: "80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821",
})

const decoded = typedAction.decodeData(Transfer)

/**
{
  from: Name { value: UInt64 { value: [BN] } },
  to: Name { value: UInt64 { value: [BN] } },
  quantity: Asset {
    units: Int64 { value: [BN] },
    symbol: Symbol { value: [UInt64] }
  },
  memo: 'Thanks for all the fish!'
}
*/
```

#### Using decodeAction With an ABI

Any [ABI](#) either manually defined in-code or retrieved from an [APIClient](#) can be passed to `decodeData` to decode the serialized data into an object.

```ts
const data = {
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data: "80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821",
}

const typedAction = Action.from(data)

const { abi } = await client.v1.chain.get_abi("eosio.token")

const decoded = typedAction.decodeData(abi)

/**
{
  from: Name { value: UInt64 { value: [BN] } },
  to: Name { value: UInt64 { value: [BN] } },
  quantity: Asset {
    units: Int64 { value: [BN] },
    symbol: Symbol { value: [UInt64] }
  },
  memo: 'Thanks for all the fish!'
}
*/
```

#### Making Data Human Readable

The `decodeData` function returns all values in Antelope typed formats ([Name](#), [Asset](#), etc) for developers to work with in their applications. In order to display this data in a human readable format, the [Serializer](#) provides a helper function called [objectify](#) which will iterate over a data structure and convert all the Antelope types to human readable values.

```ts
@Struct.type("transfer")
class Transfer extends Struct {
  @Struct.field(Name) from!: Name
  @Struct.field(Name) to!: Name
  @Struct.field(Asset) quantity!: Asset
  @Struct.field("string") memo!: string
}

const typedAction = Action.from({
  account: "eosio.token",
  name: "transfer",
  authorization: [{ actor: "foo", permission: "active" }],
  data: "80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821",
})

const decoded = typedAction.decodeData(Transfer)

/**
{
  from: Name { value: UInt64 { value: [BN] } },
  to: Name { value: UInt64 { value: [BN] } },
  quantity: Asset {
    units: Int64 { value: [BN] },
    symbol: Symbol { value: [UInt64] }
  },
  memo: 'Thanks for all the fish!'
}
*/

const readable = Serializer.objectify(decoded)

/**
{
  from: 'teamgreymass',
  to: 'funds.gm',
  quantity: '0.0001 EOS',
  memo: 'Thanks for all the fish!'
}
*/
```
