---
title: Creating Actions
category: Contract Kit
published: true
order: 12
---

# Creating Actions for an Antelope Smart Contract

This guide covers how to use the Contract Kit to create an `Action` based on an existing smart contract, for use in a web application. The resulting `Action` returned from this process can then be passed into the [transact](/docs/session-kit/transact) method of a [Session](/docs/session-kit/session).

> **NOTE**: This guide was originally written in August of 2023 and is based upon the `0.4.x` release of `@wharfkit/contract`. It will be updated once the Contract Kit is finalized, to reflect any potential changes that are made as we progress towards a 1.0.0 release.

## Getting Started

Please review the [Dynamically Loading Antelope Smart Contracts](#) guide before proceeding to understand how to establish a `Contract` instance in an application.

## Creating an Action

The `Contract` instance loaded by the `ContractKit` offers a number of methods to help interact with the actions defined on the smart contract. When the application needs to create an `Action` based on the smart contract, the `action` method can be used on a `Contract` instance.

The basic syntax of this method is as follows:

```ts
contract.action("action_name", action_data_object, action_options)
```

The first parameter is a string that matches the name of the action as defined in the [ABI](/docs/antelope/abi).

The second parameter is an object that includes the required data to complete the transaction. In the example below, the `eosio.token` contract is loaded and the `transfer` method is specified, passing along the object containing the data for the transfer.

The third parameter is an optional object that allows you to pass additional data such as specific authorizations.

```ts
// The `contract` variable is a loaded instance of the eosio.token contract

const action = contract.action("transfer", {
  from: "foo",
  to: "bar",
  quantity: "1.0000 EOS",
  memo: "",
})
```

The resulting action of this call is serialized and ready to be passed into the [transact](/docs/session-kit/transact) method of a [Session](/docs/session-kit/session).

```ts
// Perform the transfer action using a Session
const result = session.transact({ action })
```

Each `Contract` instance is reusable, and can be used to create any number of actions or access table data. It also provides quick access to information about the contract itself, such as a list of all available actions on the `actionNames` property.

```ts
console.log(contract.actionNames)

/*
[ 'close', 'create', 'issue', 'open', 'retire', 'transfer' ]
*/
```

#### Manually Specifying the Authorization

While not required, the `authorization` may be passed in the options as a 3rd parameter. By default, the contract will create a placeholder authorization, which the [Session](/docs/session-kit/session) will automatically resolve to the current account and permission.

```ts
const action = contract.action(
  "transfer",
  {
    from: "foo",
    to: "bar",
    quantity: "1.0000 EOS",
    memo: "",
  },
  {
    authorization: [
      {
        actor: "foo",
        permission: "bar",
      },
    ],
  }
)
```

## Decoding Actions

The `Action` type returned by the `Contract` is **strongly typed** and **serialized** by default.

```ts
const action = contract.action("transfer", {
  from: "foo",
  to: "bar",
  quantity: "1.0000 EOS",
  memo: "",
})

console.log(action)

/*
Action {
  account: Name { value: UInt64 { value: [BN] } },
  name: Name { value: UInt64 { value: [BN] } },
  authorization: [ PermissionLevel { actor: [Name], permission: [Name] } ],
  data: Bytes {
    array: Uint8Array(48) [
        1,   0,   0,   0,   0,  0,   0,  0,  0,  0,   0,
        0,   0,   0,  40,  93, 16,  39,  0,  0,  0,   0,
        0,   0,   4,  69,  79, 83,   0,  0,  0,  0,  15,
      105, 110, 105, 116, 105, 97, 108, 32, 98, 97, 108,
       97, 110,  99, 101
    ]
  }
}
*/
```

We'd recommend getting familiar with these types and using them - you can find more information about them in the [Antelope documentation](/docs/antelope). If you do need to work with native Javascript data types in your application, there are a number of methods to convert this data to standard types.

To convert the entire action back to a plain JSON representation of the entire action object, the `Serializer.objectify()` method can be used against the `Action` itself.

```ts
console.log(Serializer.objectify(action))

/*{
  account: 'eosio.token',
  name: 'transfer',
  authorization: [ { actor: '............1', permission: '............2' } ],
  data: '0100000000000000000000000000285d102700000000000004454f53000000000f696e697469616c2062616c616e6365'
}*/
```

The action `data` can also be decoded from its serialized format into [Antelope](/docs/antelope) types using the `Serializer.decode()` method, while also passing the ABI and type of action:

```ts
const decoded = Serializer.decode({
  data: action.data,
  abi: contract.abi,
  type: "transfer",
})

console.log(decoded)

/*{
  from: Name { value: UInt64 { value: [BN] } },
  to: Name { value: UInt64 { value: [BN] } },
  quantity: Asset {
    units: Int64 { value: [BN] },
    symbol: Symbol { value: [UInt64] }
  },
  memo: ''
}*/
```

Both of these methods can also be combined to decode and untype the action `data` as well:

```ts
const decoded = Serializer.decode({
  data: action.data,
  abi: contract.abi,
  type: "transfer",
})

console.log(Serializer.objectify(decoded))

/*{
  from: 'foo',
  to: 'bar',
  quantity: '1.0000 EOS',
  memo: ''
}*/
```

## More...

Stay tuned as more [guides](/guides), [documentation](/docs) and [example codebases](https://github.com/orgs/wharfkit/repositories?q=example&type=all&language=&sort=) are added, or ask questions in the [Github discussion board for WharfKit](https://github.com/orgs/wharfkit/discussions)!
