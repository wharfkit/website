---
title: Transact
description: change_me
category: SessionKit
published: true
order: 1
---

# Transact

The `transact` method is available on every [Session](/docs/sessionkit/session) instance and is used to perform one or more actions against smart contracts. Once completed it will return a [TransactResult](/docs/sessionkit/transact-result) object containing the results of the actions performed.

## Usage

With an existing [Session](/docs/sessionkit/session) instance, the async method `transact` can be called with the required arguments.

```ts
const arguments = {
  action: {
    account: "eosio.token",
    name: "transfer",
    authorization: [session.permissionLevel],
    data: {
      from: session.actor,
      to: "teamgreymass",
      quantity: "0.1337 EOS",
      memo: "wharfkit is the best <3",
    },
  },
}

const result = await session.transact(arguments)
```

## Arguments

The `transact` call takes an instance of [TransactArgs](https://wharfkit.github.io/session/interfaces/TransactArgs.html), which is an object that requires an object that represents a transaction specified in one of four variants.

```ts
interface TransactArgs {
  transaction?: AnyTransaction
  action?: AnyAction
  actions?: AnyAction[]
  request?: SigningRequest | string
}
```

Despite all values being optional, one must be specified to define the type of input.

- `action`: Provide a single [Action](#) without the [Transaction](#) data.
- `actions`: Provide an array of [Actions](#) without the [Transaction](#) data.
- `transaction`: Provide a complete [Transaction](#) containing [Action(s)](#).
- `request`: Provide a [SigningRequest](#) object.

Examples of each are provided below.

### Action

A single [Action](#) may be passed in to the `transact` call on the `action` property of the arguments. The `transact` flow will take the action and form a completed [Transaction](#) using this data.

```ts
const arguments = {
  action: Action.from(...),
}

const result = await session.transact(arguments)
```

### Action(s)

An array of [Actions](#) may be passed in to the `transact` call on the `actions` property of the arguments. The `transact` flow will take the action and form a completed [Transaction](#) using this data.

```ts
const arguments = {
  actions: [
    Action.from(...),
    Action.from(...),
    Action.from(...),
  ],
}

const result = await session.transact(arguments)
```

### Transaction

A complete [Transaction](#) may be passed in to the `transact` call on the `transaction` property of the arguments.

```ts
const arguments = {
  transaction: Transaction.from(...),
}

const result = await session.transact(arguments)
```

### Signing Request

A [SigningRequest](#) may be passed in to the `transact` call on the `request` property of the arguments. The `transact` flow will take the request and resolve any placeholder data it contains to form a [Transaction](#).

```ts
const arguments = {
  request: "esr://...",
}

const result = await session.transact(arguments)
```

## Options

Additional parameters may optionally be passed to the `transact` method. The option specified in this way will override the default values inherited from the [Session](/docs/sessionkit/session) for this call to `transact`.

```ts
interface TransactOptions {
  abis?: TransactABIDef[]
  abiCache?: ABICacheInterface
  allowModify?: boolean
  broadcast?: boolean
  chain?: Checksum256Type
  expireSeconds?: number
  transactPlugins?: AbstractTransactPlugin[]
  transactPluginsOptions?: TransactPluginsOptions
}
```

### abis

An array of [ABIs](#) can be passed to a specific `transact` call using the [TransactABIDef](https://wharfkit.github.io/session/interfaces/TransactABIDef.html) format.

```ts
interface TransactABIDef {
  account: NameType
  abi: ABIDef
}
```

This format allows associating an account name of a contract with the [ABI](#) for the contract. Each ABI passed in this way appends the data to the internal [ABICache](#) utilized to optimize API call patterns.

### abiCache

An instance of an [ABICache](#) to use for this `transact` call. This will override the built-in ABICache the [Session](#) already utilizes.

### allowModify

A boolean flag to indicate whether the [TransactPlugin](#) and [WalletPlugin](#) instances are allowed to modify the transaction the `transact` caller has provided. Set `allowModify: false` on the transaction if the transaction as submitted should be immutable during the call.

### broadcast

A boolean flag indicating whether or not the `transact` call should broadcast the signed transaction to the blockchain.

### chain

A [Checksum256](#) value representing the blockchain this transaction is specifically for. This option is only needed if calling `transact` with a [SigningRequest](#) type argument, where the request is `multichain: true`.

### expireSeconds

The number of seconds in the future to set the expiration of the transaction, defaulting to 120.

### transactPlugin

An array of [TransactPlugin](#) instances to utilize during this specific `transact` call.

### transactPluginOptions

Any options required by the [TransactPlugin](#) instances.
