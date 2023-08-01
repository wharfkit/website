---
title: Login
description: change_me
category: SessionKit
order: 1
published: true
---

# Login

The `login` method available on a [SessionKit](/docs/sessionkit/session-kit-factory) instance. It is used to authenticate a user with the application through the use of a [WalletPlugin](#). After the user completes this process and makes any required choices using the [UserInterface](#), the `login` method creates an instance of a [Session](#) and returns it to the application encapsulated in a [LoginResponse](#). The session is then also persisted in local storage for future use.

## Usage

### Default

Given an existing instance of the [SessionKit](/docs/sessionkit/session-kit-factory), the async method `login` can be called and awaited without any parameters.

```ts
const sessionKit = new SessionKit(args, options)

const result = await sessionKit.login()
```

The variable `result` in this example will return a [LoginResponse](#) that contains:

- The `session` that is now available for use to perform transactions.
- The `response` from the [WalletPlugin](#) that was used, indicating which blockchain and permission was returned.
- The `context` object (a [LoginContext](#)) that was used during the login process.

### Options

Additional optional parameters may be passed to the `login` method in order to further control the flow of this specific call. The option specified in this way override the defaults inherited from `options` passed to the [SessionKit](/docs/sessionkit/session-kit-factory) for this one call to `login`.

Given the following scenario, where the `SessionKit` is configured to use 5 available blockchains:

```ts
const sessionKit = new SessionKit(
  {
    ...args,
    chains: [Chains.Jungle4, Chains.EOS, Chains.Telos, Chains.UX, Chains.WAX],
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

By passing in the `chain` parameter on the options and setting it to `Chains.Jungle4.id`,

see: [LoginOptions](#)

```
export interface WalletPluginLoginResponse {
chain: Checksum256
permissionLevel: PermissionLevel
}

export interface LoginResult {
context: LoginContext
response: WalletPluginLoginResponse
session: Session
}

export interface LoginOptions {
chain?: Checksum256Type
chains?: Checksum256Type[]
loginPlugins?: LoginPlugin[]
transactPlugins?: TransactPlugin[]
transactPluginsOptions?: TransactPluginsOptions
permissionLevel?: PermissionLevelType | string
walletPlugin?: string
}
```

## Purpose

Why

## Reference

- Links
