---
title: Login
description: The login method allows users to log in to web applications using the Session Kit with an Antelope blockchain based account.
category: SessionKit
published: true
requiresReview: true
---

# Login

The `login` method is made available on the [SessionKit](/docs/session-kit/session-kit-factory) instance. It is used to present the authentication process to the end user of the application. Upon completion this process it returns a [LoginResult](/docs/session-kit/login-result) to the application which contains a usable instance of the resulting [Session](/docs/session-kit/session).

## Usage

Given an existing instance of the [SessionKit](/docs/session-kit/session-kit-factory), the async method `login` can be called and awaited without any additional parameters.

```ts
const sessionKit = new SessionKit(args, options)

const result = await sessionKit.login()
```

While awaiting the result of this call, the [UserInterface](/docs/session-kit/plugin-user-interface) defined in the [SessionKit](/docs/session-kit/session-kit-factory) will present any required choices to the end user that allows them to select a [WalletPlugin](/docs/session-kit/plugin-wallet), a [ChainDefinition](/docs/utilities/common-library#chaindefinition), and a [PermissionLevel](#). The choices made by the end user will be used to create and configure a new [Session](/docs/session-kit/session) instance.

Upon completion the `login` method will return a [LoginResult](/docs/session-kit/login-result) that contains:

- The `session` that is now available for use to perform transactions.
- The `response` from the [WalletPlugin](/docs/session-kit/plugin-wallet) that was used, indicating which blockchain and permission was returned.
- The `context` object (a [LoginContext](/docs/session-kit/login-context)) that was used during the login process.

The [Session](/docs/session-kit/session) instance that was returned in the result will automatically be persisted in the application through use of the [SessionStorage](/docs/session-kit/session-storage) adapter and in the future can be retrieved with the [Restore](/docs/session-kit/restore) method.

## Options

Additional parameters may optionally be passed to the `login` method in order to further control the flow of this specific call. The option specified in this way will override the defaults inherited the [SessionKit](/docs/session-kit/session-kit-factory) for this specific call to `login`.

Commonly used parameters that can be passed this way include:

- `chain`: The blockchain ID to login against, preventing any user chain selection.
- `chains`: An array blockchain IDs to allow logging in against, overriding the defaults from the [SessionKit](/docs/session-kit/session-kit-factory)
- `permissionLevel`: A specific [PermissionLevel](#) to login with, preventing any user account selection.
- `walletPlugin`: A specific [WalletPlugin](/docs/session-kit/plugin-wallet) to authenticate with, preventing any user wallet selection.

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
