---
category: SessionKit
published: true
order: 10
---

# Getting started: Web App

The Session Kit provided by Wharf is a suite of tools specifically created to help developers build web-based applications that perform transactions on [Antelope-based blockchains](https://antelope.io). It does this through the creation of sessions which are connected to a specific account on the blockchain through a designated wallet plugins.

## Overview

This guide will generically walk through adding the Session Kit to any existing web application. The goal is to allow an end user of the application to authenticate with their own wallet and use it to perform transactions with their account.

The example commands for package management will be using [yarn](https://yarnpkg.com/) but other package managers like [npm](https://npmjs.com/) will work as well. Additional example code using popular web frameworks can also be found [here](https://github.com/wharfkit/?q=example&type=all&language=&sort=) for further hands-on learning.

## Dependencies

In order to utilize the Session Kit in a web application, a couple packages will need to be added to the project.

- [@wharfkit/session](https://github.com/wharfkit/session): The Session Kit library itself.
- [@wharfkit/web-renderer](https://github.com/wharfkit/web-renderer): The default UI renderer.

The application will also need at least one [WalletPlugin](https://github.com/orgs/wharfkit/repositories?q=wallet-plugin&type=all&language=&sort=) to authenticate users and request transaction signatures. For the purpose of this guide we will utilize [@wharfkit/wallet-plugin-anchor](https://github.com/wharfkit/wallet-plugin-anchor).

```bash
yarn add @wharfkit/session @wharfkit/web-renderer @wharfkit/wallet-plugin-anchor
```

## Design Considerations

With the all the required packages added and before reviewing any code, now is time to consider where in the application a few different components will exist.

1. The `SessionKit` itself will need to be created and accessible from anywhere users need to manage their sessions. The `SessionKit` instance only needs to be instantiated once and then can be used to create/restore any number of individual sessions. A recommended location for this would be on some form of **global property** or in an **exported module** to be included in other files when needed.
2. Once a `Session` is created through calls to the `SessionKit`, it will need to be made accessible anywhere the user is expected to interact with the blockchain. An individual `Session` is reusable between page loads and in different components, and is persisted in local storage. A good candidate for storing of one or more `Session` instances is in the applications **state** or a **store** of some kind.

Pick locations in the project that makes sense for your application and the web framework its built upon.

## Initializing the `SessionKit`

An instance of the `SessionKit` must first be established within the application. The required arguments that will be passed to this instance include:

- `appName`: A string that represents the name of the application.
- `chains`: An array of `ChainDefinition` typed objects, one for each blockchain to support.
- `ui`: An instance of a `UserInterface` to render information to the user.
- `walletPlugins`: An array of `WalletPlugin` typed objects, one for each wallet to support.

The code below will instantiate the `SessionKit` for an app called "appname", and it will be configured to use the default renderer to connect with **Jungle 4 (Testnet)** and the **Anchor Wallet**. The [@wharfkit/web-renderer](https://github.com/wharfkit/web-renderer) is an out-of-the-box `UserInterface` which we recommend to get started with.

```ts
import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"

const webRenderer = new WebRenderer()

const sessionKit = new SessionKit({
  appName: "appname",
  chains: [
    {
      id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      url: "https://jungle4.greymass.com",
    },
  ],
  ui: webRenderer,
  walletPlugins: [new WalletPluginAnchor()],
})
```

The `sessionKit` variable is now a ready to use instance of the kit and the user interface has been injected as [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) in the app. From here the `sessionKit` variable should be made available to the rest of the application so that other elements, such as the "login" or "logout" buttons, can trigger methods on it.

> **Note**: If you are establishing the Session Kit and Web Renderer after the `DOMContentLoaded` event has already fired, you may need to manually call `webRenderer.appendDialogElement()` during the "on mount" event in the framework you are using.

## Creating a `Session`

The recommended next step in setting up the application is to add some sort of "login" or "sign-in" element to the application. The `SessionKit` instance created in the previous step provides a `login()` method which can be called to initiate the creation of a new `Session`.

```ts
const { session } = await sessionKit.login()
```

This method is an asynchronous call that requests the `UserInterface` to perform the login flow and return a `LoginResult` that contains an instance of a `Session`. The Session Kit itself with the plugins that were included will handle the interaction with the user and collect the information required to establish a session.

The most basic example of how the `login()` method can be used consists of 3 concepts:

- Calling and awaiting the `sessionKit.login()` method
- Getting the `session` from the `LoginResponse`
- Placing the `session` somewhere in the application state

Then bind this function to the login element in your application. This in a pure HTML context would be:

```html
<script>
  let session

  async function login() {
    const response = await sessionKit.login()
    session = response.session
  }
</script>

<button onClick="login">Login</button>
```

The application can now recognize a user has logged in by checking the existence of the `session` variable in the application state.

```js
if (session) {
  // user is logged in
} else {
  // user is not logged in
}
```

## Performing a Transaction

With the application now having access to an established `Session`, the application can now utilize it in order to request specific transactions from the user. Continuing with the example code above, the `session` instance in the application state provides a `transact()` that can be called to start this process.

```ts
const result = await session.transact(data)
```

This method similar to `login()` is an asynchronous call that triggers the `UserInterface` to start the flow for a user to sign the transaction. The `data` required for this call must be that of [TransactArgs](https://wharfkit.github.io/session/interfaces/TransactArgs.html). The simplest variant of this data is a single action, which the application can provide similar to the example below.

```ts
const data = {
  account: "eosio.token",
  name: "transfer",
  authorization: [session.permissionLevel],
  data: {
    from: session.actor,
    to: "foo",
    amount: "0.1234 EOS",
    memo: "",
  },
}

const result2 = await session.transact({ action: data })
```

This action is a call to the `transfer` action on the `eosio.token` contract. The `authorization` field is an array which is populated using the `session.permissionLevel` property to automatically template with. The `data` field on the action is the information required by the smart contract action, which is using the `session.actor` to specify the `from` field, and manually defining the rest of the required fields.

This `data` is passed into the `transact()` call as `{ action: data }` to indicate it is a single action being performed for this transaction. If successful, the response from this call is returned as a [TransactResult](https://wharfkit.github.io/session/interfaces/TransactResult.html). If the process fails an `Error` will be thrown.

## Persisting a Session

At this point the application allows a user to authenticate with the application and also allows them to perform a transaction on the blockchain. However, there's no persistence of the session when navigating between different pages or upon page refresh.

The `SessionKit` instance offers a method to `restore()` the last used `Session` which can be added to the page load event to solve this problem.

```ts
const session = await sessionKit.restore()
```

The call to `restore()` should occur in the pattern best suited for the web framework your project is using. To continue with the pure HTML format used for the login example, we can simply add a new call `restoreSession` that will trigger during the body `onload` event.

```html
<script>
  let session

  async function restoreSession() {
    session = await sessionKit.restore()
  }

  async function login() {
    const response = await sessionKit.login()
    session = response.session
  }
</script>

<body onload="restoreSession()">
  <button onClick="login">Login</button>
</body>
```

The `restore()` method when called will check local storage and restore the most recently used session for that specific user. If no sessions are found, it will return `undefined`.

With this code in place users will now remain authenticated with the app between page loads.

## Removing a Session

The final thing a user may want to do is delete their `Session` with your app. This can be accomplished using the `logout()` method of the `SessionKit` instance the application has access to.

```ts
await sessionKit.logout()
```

This call returns no data and without providing any additional parameters, it will remove all sessions the user has created and clear them from local storage. The only remaining piece is for your application to clean up its application state and remove any `Session` instances it may be storing.

To finish off the pure HTML example used throughout this guide, we just need to add a "logout" function to the script and a button to trigger it.

```html
<script>
  let session

  async function restoreSession() {
    session = await sessionKit.restore()
  }

  async function login() {
    const response = await sessionKit.login()
    session = response.session
  }

  async function logout() {
    await sessionKit.logout(session)
    session = undefined
  }
</script>

<body onload="restoreSession()">
  <button onClick="login">Login</button>
  <button onClick="logout">Logout</button>
</body>
```

This new function will call the `logout()` method against the `sessionKit` instance and then set the `session` instance in the application state to `undefined`.

## More...

With these basic concepts, the Session Kit can be integrated into any web application and allow the basic functionality that users would expect. This document only scratches the surface of what's possible though since it only covers the Session Kit and doesn't dive deeply into the additional parameters that can be provided to most of these calls.

Stay tuned as more [guides](/guides) and [documentation](/docs) are added, more [example codebases](https://github.com/orgs/wharfkit/repositories?q=example&type=all&language=&sort=) are created, or ask questions in the [Github discussion board for WharfKit](https://github.com/orgs/wharfkit/discussions)!
