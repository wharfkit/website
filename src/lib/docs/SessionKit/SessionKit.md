---
title: SessionKit (Factory)
description: The SessionKit is responsible for creating and managing end user Session instances for web applications through methods such as login and restore.
category: SessionKit
order: 2
published: true
requiresReview: true
---

# SessionKit (Factory)

The `SessionKit` class provided by the [Session Kit](/docs/sessionkit) is responsible for creating and managing end user [Session](/docs/sessionkit/session) instances specifically for **web applications** through actions such as [Login](/docs/sessionkit/login) and [Restore](/docs/sessionkit/restore). Only **one instance is required** for the entire application and should be made widely available.

## Creation

When using the `SessionKit` within a web application the developer will first establish an instance of the class with the required [SessionKitArgs](https://wharfkit.github.io/session/interfaces/SessionKitArgs.html).

A simple example for a web application using the [WebRenderer](/docs/sessionkit/web-renderer) and [WalletPluginAnchor](#) would be as follows:

```ts
import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"

const args = {
  appName: "myapp",
  chains: [
    {
      id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      url: "http://jungle4.greymass.com",
    },
  ],
  ui: new WebRenderer(),
  walletPlugins: [new WalletPluginAnchor()],
}

const options = {
  // Additional options
}

const sessionKit = new SessionKit(args, options)
```

### [Arguments](https://wharfkit.github.io/session/interfaces/SessionKitArgs.html)

The first parameter passed to the `SessionKit` is an object containing all the required configuration options.

- `appName`: The name of the application
- `chains`: An array of blockchains that the app supports
- `ui`: An instance of a [UserInterface](/docs/sessionkit/plugin-user-interface), like the [WebRenderer](/docs/sessionkit/web-renderer)
- `walletPlugins`: An array containing at least one [WalletPlugin](/docs/sessionkit/plugin-wallet)

### [Options](https://wharfkit.github.io/session/interfaces/SessionKitOptions.html)

The second parameter passed are all of the optional arguments.

- `allowModify`: A boolean flag indicating whether [plugins](#) are allowed to modify transaction data. This parameter is passed down to each [Session](/docs/sessionkit/session) this `SessionKit` generates.
- `expireSeconds`: The default number of seconds before a transaction expires. This parameter is passed down to each [Session](/docs/sessionkit/session) this `SessionKit` generates.
- `fetch`: Primarily for development purposes in nodejs v16 or lower, an instance of fetch which can be used by all components.
- `loginPlugins`: An array of [LoginPlugin](/docs/sessionkit/plugin-login) for use in all [Session](/docs/sessionkit/session) instances generated by this `SessionKit`.
- `storage`: An option to override the default instance of `SessionStorage`, which is used to persist data in the `SessionKit`, the [Sessions](/docs/sessionkit/session) it creates, and all [plugins](#).
- `transactPlugins`: An array of [TransactPlugin](/docs/sessionkit/plugin-transact) for use in all [Session](/docs/sessionkit/session) instances generated by this `SessionKit`.
- `transactPluginsOptions`: A key/value pair object from which plugins can read global configuration options. This will only need to be used if the plugin instructions require it.

## Usage

### Methods

A number of methods are available on an instance of the `SessionKit`.

- [Login](/docs/sessionkit/login): Initiate the login process for a user.
- [Logout](/docs/sessionkit/logout): Perform a logout of a given session, or logout all existing sessions.
- [Restore](/docs/sessionkit/restore): Restore and return the most recently used session, or a specific session based on the args provided.
- [restoreAll](#): Restore all sessions and return them in an array.
- [getSessions](#): Return an array of [SerializedSessions](#)

### Properties

## Related Materials

### Guides

- [Getting started: Web Apps](/guides/sessionkit/getting-started-web-app)

### TypeDocs

- [SessionKit Documentation](https://wharfkit.github.io/session/classes/SessionKit.html)