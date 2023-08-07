---
title: Session
description: change_me
category: SessionKit
order: 1
published: true
---

# Session

Each `Session` class instance represents a specific [blockchain account](https://docs.eosnetwork.com/docs/latest/core-concepts/accounts) with an associated [WalletPlugin](#) that can be used to perform transactions using the [transact](#) method. It can also be used to access information about the account related to the session and to help automatically template API calls.

## Creation

Sessions can be created manually for use in applications so long as all the relevant data is provided. Once created a `Session` will offer multiple read-only properties and a handful of methods.

The minimum required information to create a `Session` instance is as follows.

```ts
import { Session } from "@wharfkit/session"

const args = {
  chain: {
    id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
    url: "https://jungle4.greymass.com",
  },
  actor: "wharfkit1111",
  permission: "active",
  walletPlugin: new WalletPluginPrivateKey("5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s"),
}

const options = {
  // Additional options
}

const session = new Session(args, options)
```

### [Arguments](https://wharfkit.github.io/session/interfaces/SessionArgs.html)

The first parameter passed to the `Session` is an object containing all the required configuration data.

- `chain`: The [ChainDefinition](#) that defines which blockchain this session is for
- `actor`: The name of the account on the defined blockchain the session will utilize.
- `permission`: The name of the [Permission](#) associated to the account the session will use.
- `walletPlugin`: An instance of a [WalletPlugin](#) that allows signing transactions for this session.

### [Options](https://wharfkit.github.io/session/interfaces/SessionOptions.html)

The second parameter is an optional object, with every individual property of the object also being optional. This parameter allows passing additional data to further customize the `Session`.

- `abis`: An array of [ABI](#) definitions to preload for this session to optimize [transact](#) calls.
- `abiCache`: An instance of an [ABICache](#) that overrides the default one utilized by the session.
- `allowModify`: A boolean value indicating whether any [TransactPlugin](#) and [WalletPlugin](#) can modify transactions being processed.
- `appName`: A string to identify the app the session is used in.
- `broadcast`: A boolean value indicating whether the `transact` call should broadcast transactions by default.
- `expireSeconds`: An integer indicating the default number of seconds to specify for the expiration value during the [transact](#) call.
- `fetch`: An instance of fetch, if required in a server side application based on the Node.js version.
- `storage`: An instance of [SessionStorage](#) if the application needs to override the default storage mechanisms.
- `transactPlugins`: An array of [TransactPlugin](#) instances this session should use.
- `transactPluginsOptions`: An object containing key/value pairs of any options required by the [TransactPlugin](#) instances provided.
- `ui`: An instance of a [UserInterface](#) if this Session is being used in a environment where required.

## Usage

Once a `Session` instance is created, methods can be called to perform specific operations and read-only properties are available.

### Methods

- `transact`: The [transact](#) method is the most commonly used method on a `Session` instance and is used to sign and broadcast a transaction.
- `serialize`: A method which converts the `Session` into a plain JSON object for storage purposes.

A complete list of all methods found on can be found in the [class definition](https://wharfkit.github.io/session/classes/Session.html#abiCache).

### Properties

On any established instance of a `Session`, the following are common properties made available for the application to read:

- `chain`: The [ChainDefinition](#) of which blockchain this session is for.
- `actor`: The name of the account for this session.
- `permission`: The [Permission](#) name associated to the account being used.
- `permissionLevel`: The [PermissionLevel](#) that contains the account and permission for the session.
- `client`: An instance of an [APIClient](#) that can be used to access information from the blockchain related to this session.

## Related Materials

### Guides

- [Getting started: Web Apps](/guides/sessionkit/getting-started-web-app)
- [Getting started: Node.js](/guides/sessionkit/getting-started-node-js)

### TypeDocs

- [Session Documentation](https://wharfkit.github.io/session/classes/Session.html)
