---
title: Transact
description: change_me
category: SessionKit
published: true
---

# Transact

The `transact` method is available on every [Session](/docs/sessionkit/session) instance and is used to perform one or more actions against smart contracts. Once completed it will return a [TransactResult](#) object containing the results of the actions performed.

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

### Action

```ts
const arguments = {
  action: Action.from(...),
}

const result = await session.transact(arguments)
```

### Action(s)

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

```ts
const arguments = {
  transaction: Transaction.from(...),
}

const result = await session.transact(arguments)
```

### Signing Request

```ts
const arguments = {
  request: "esr://...",
}

const result = await session.transact(arguments)
```

## Options

```ts
/**
 * Options for the [[Session.transact]] method.
 */
export interface TransactOptions {
  /**
   * An array of ABIs to use when resolving the transaction.
   */
  abis?: TransactABIDef[]
  /**
   * An optional ABICacheInterface to control how ABIs are loaded.
   */
  abiCache?: ABICacheInterface
  /**
   * Whether to allow the signer to make modifications to the request
   * (e.g. applying a cosigner action to pay for resources).
   *
   * Defaults to true if [[broadcast]] is true or unspecified; otherwise false.
   */
  allowModify?: boolean
  /**
   * Whether to broadcast the transaction or just return the signature.
   * Defaults to true.
   */
  broadcast?: boolean
  /**
   * Chain to use when configured with multiple chains.
   */
  chain?: Checksum256Type
  /**
   * The number of seconds in the future this transaction will expire.
   */
  expireSeconds?: number
  /**
   * Specific transact plugins to use for this transaction.
   */
  transactPlugins?: AbstractTransactPlugin[]
  /**
   * Optional parameters passed in to the various transact plugins.
   */
  transactPluginsOptions?: TransactPluginsOptions
}
```

Additional parameters may optionally be passed to the `login` method in order to further control the flow of this specific call. The option specified in this way will override the defaults inherited the [SessionKit](/docs/sessionkit/session-kit-factory) for this specific call to `login`.

Commonly used parameters that can be passed this way include:

- `chain`: The blockchain ID to login against, preventing any user chain selection.
- `chains`: An array blockchain IDs to allow logging in against, overriding the defaults from the [SessionKit](/docs/sessionkit/session-kit-factory)
- `permissionLevel`: A specific [PermissionLevel](#) to login with, preventing any user account selection.
- `walletPlugin`: A specific [WalletPlugin](/docs/sessionkit/wallet-plugin) to authenticate with, preventing any user wallet selection.

A complete list of all parameters can be found in the [LoginOptions](https://wharfkit.github.io/session/interfaces/LoginOptions.html) documentation.

### Example Override

Given the following scenario, where the `SessionKit` is configured to use 5 available blockchains:

```ts
const sessionKit = new SessionKit(
  {
    ...args,
    chains: [
      Chains.Jungle4,
      Chains.EOS,
      Chains.Telos,
      Chains.UX,
      Chains.WAX,
    ],
  },
  options
)

const result = await sessionKit.login()
```

The call to `login` without any parameters will allow the user through various means to authenticate with any of those blockchains. However, if the application needs to be able to support all of those blockchains but wants to call `login` against a specific chain in one situation, they can then call the `login` method and specify that one blockchain.

```ts
const result = await sessionKit.login({
  chain: Chains.Jungle4,
})
```

Passing the `chain` parameter with the single blockchain will force that decision during the login process while inheriting all other possible options from the `SessionKit` itself.
