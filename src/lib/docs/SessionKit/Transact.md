---
title: Transact
description: A method on an established Session that will utilize the configured plugins to sign and broadcast a transaction on an Antelope blockchain.
category: SessionKit
published: true
order: 1
---

# Transact

The `transact` method is available on every [Session](/docs/session-kit/session) instance and is used to perform one or more actions against smart contracts. Once completed, it will return a [TransactResult](/docs/session-kit/transact-result) object containing the results of the actions performed.

## Usage

With an existing [Session](/docs/session-kit/session) instance, the async method `transact` can be called with the required arguments.

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

The `transact` call takes an instance of [TransactArgs](https://wharfkit.github.io/session/interfaces/TransactArgs.html), which requires an object that represents a transaction specified in one of four variants.

```ts
interface TransactArgs {
  transaction?: AnyTransaction
  action?: AnyAction
  actions?: AnyAction[]
  request?: SigningRequest | string
}
```

Despite all values being optional, one must be specified to define the type of input.

- `action`: Provide a single [Action](/docs/antelope/action) without the [Transaction](/docs/antelope/transaction) data.
- `actions`: Provide an array of [Actions](/docs/antelope/action) without the [Transaction](/docs/antelope/transaction) data.
- `transaction`: Provide a complete [Transaction](/docs/antelope/transaction) containing [Action(s)](/docs/antelope/action).
- `request`: Provide a [SigningRequest](https://github.com/greymass/eosio-signing-request/tree/master/src) object.

Examples of each are provided below.

### Action

A single [Action](/docs/antelope/action) may be passed into the `transact` call on the `action` property of the arguments. The `transact` flow will take the action and form a completed [Transaction](/docs/antelope/transaction) using this data.

```ts
const arguments = {
  action: Action.from(...),
}

const result = await session.transact(arguments)
```

### Action(s)

An array of [Actions](/docs/antelope/action) may be passed into the `transact` call on the `actions` property of the arguments. The `transact` flow will take the action and form a completed [Transaction](/docs/antelope/transaction) using this data.

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

A complete [Transaction](/docs/antelope/transaction) may be passed into the `transact` call on the `transaction` property of the arguments.

```ts
const arguments = {
  transaction: Transaction.from(...),
}

const result = await session.transact(arguments)
```

### Signing Request

A [SigningRequest](https://github.com/greymass/eosio-signing-request/tree/master/src) payload may be passed into the `transact` call on the `request` property of the arguments. The `transact` flow will take the request and resolve any placeholder data it contains to form a [Transaction](/docs/antelope/transaction).

```ts
const arguments = {
  request: "esr://...",
}

const result = await session.transact(arguments)
```

## Options

Additional parameters may be optionally passed to the `transact` method. The option specified in this way will override the default values inherited from the [Session](/docs/session-kit/session) for this call to `transact`.

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

### ABIs

An array of [ABIs](/docs/antelope/abi) can be passed to a specific `transact` call using the [TransactABIDef](https://wharfkit.github.io/session/interfaces/TransactABIDef.html) format.

```ts
interface TransactABIDef {
  account: NameType
  abi: ABIDef
}
```

This format allows you to associate an account name of a contract with the [ABI](/docs/antelope/abi) for the contract. Each ABI passed in this way appends the data to the internal `ABICache` utilized to optimize API call patterns.

### ABICache

An instance of an `ABICache` to use for this `transact` call. This will override the built-in ABICache the [Session](/docs/session-kit/session) already utilizes.

### AllowModify

A boolean flag to indicate whether the [TransactPlugin](/docs/session-kit/plugin-transact) and [WalletPlugin](/docs/session-kit/plugin-wallet) instances are allowed to modify the transaction that the `transact` caller has provided. Set `allowModify: false` on the transaction if the transaction as submitted should be immutable during the call.

### Broadcast

A boolean flag indicating whether or not the `transact` call should broadcast the signed transaction to the blockchain.

### Chain

A [Checksum256](/docs/antelope/checksum) value representing the blockchain this transaction is specifically for. This option is only needed if calling `transact` with a [SigningRequest](https://github.com/greymass/eosio-signing-request/tree/master/src) type argument, where the request is `multichain: true`.

### ExpireSeconds

The number of seconds in the future to set the expiration of the transaction, defaulting to 120.

### TransactPlugin

An array of [TransactPlugin](/docs/session-kit/plugin-transact) instances to utilize during this specific `transact` call.

### TransactPluginOptions

Any options required by the [TransactPlugin](/docs/session-kit/plugin-transact) instances.
