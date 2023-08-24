---
title: LoginContext
description: change_me
category: SessionKit
published: true
hidden: true
---

# LoginContext

What

## Usage

How

## Purpose

Why

## Reference

- Links

The `LoginContext` will provide information it knows about from the `SessionKit` configuration, including data relevant to:

- The name of the app as defined by [appName](#).
- A [ChainDefinition](/docs/utilities/common-library#chaindefinition) if the [SessionKit](/docs/sessionkit/session-kit-factory)'s `login` call was made for a specific blockchain.
- An array of [ChainDefinition](/docs/utilities/common-library#chaindefinition) objects as defined in the [SessionKit](/docs/sessionkit/session-kit-factory) configuration.
- A [PermissionLevel](#) if the [SessionKit](/docs/sessionkit/session-kit-factory)'s `login` call was made for a specific account.
- A list of predetermined [uiRequirements](#) indicating what type of prompting needs to be done.
- An array of [WalletPlugin](/docs/sessionkit/plugin-wallet) objects based on the [SessionKit](/docs/sessionkit/session-kit-factory) configuration to indicate which wallets can be used.

During this call, the `UserInterface` itself needs to use this information and return three pieces of information:

1. The Wallet that the user will attempt to login with. This is done by returning the zero-based index of the appropriate wallet plugin as `walletPluginIndex`.
2. Optionally, the `chainId` of the blockchain the user is trying to log in to, if required by the wallet.
3. Optionally, the `permissionLevel` of the account the user is trying to login with, if required by the wallet.

The end user themselves can be prompted for this information through custom UI elements or the `UserInterface` itself can make these decisions on behalf of the user.

Once this information is returned to the [SessionKit](/docs/sessionkit/session-kit-factory), the following will take place:

- Any registered [LoginPlugin](/docs/sessionkit/plugin-login) with `beforeLogin` hooks will be executed.
- The selected [WalletPlugin](/docs/sessionkit/plugin-wallet) will take over to perform the login operation.
- Any registered [LoginPlugin](/docs/sessionkit/plugin-login) with `afterLogin` hooks will be executed.
