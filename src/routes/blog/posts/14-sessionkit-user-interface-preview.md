---
title: "An early look integrating the Session Kit with a web app"
date: 2023-03-13
tags: ["article"]
image: "/images/content/session/image.png"
description: Integrating Antelope web applications with the Session Kit will help bring a better end user experience while also easing the burden on the application developer. Check out our 2nd technical preview where we show how a web application can integrate sessions to log in and interact with user accounts.
---

Integrating [Antelope](https://antelope.io) web applications with [Wharf](https://wharfkit.com) through the [Session Kit](https://github.com/wharfkit/session) will help bring a better end user experience while easing the burden on application developers. This is the second technical preview in a series targeted towards developers who want to become early adopters of this new development kit, provide feedback, and/or help shape the future path of the project.

> Please note this article is a "Technical Preview" using an early release of Wharf's [Session Kit](https://github.com/wharfkit/session). This article was written in March of 2023 using the `@wharfkit/session` package at version 0.3.x. Everything within this article is subject to change as the code matures. Please refer to the official documentation (when available later in 2023) on [WharfKit.com](https://wharfkit.com) for up-to-date usage instructions and information.

In this article we will provide a brief status update on the early development of the [Session Kit](https://github.com/wharfkit/session), followed by the technical preview of how to integrate the user interface into a web application. This will cover a small portion of what's now available to try out today. The focus will be the basics, starting with how the Session Kit allows users to authenticate against a web application with their wallet and perform a transaction.

## Status Update: Session Kit

The Session Kit itself has come a long way since [the first technical preview](https://wharfkit.com/blog/posts/a-technical-preview-of-the-session-kit-in-wharf) back in January. That preview covered how to perform transactions in any Javascript application and utilize plugins to create flexible solutions to common problems.

Since then, a significant [number of advancements](https://github.com/wharfkit/session/commits/dev) have been made, with a few high level items being:

- A placeholder graphical user interface providing the required interactive components to manage a session, and a customizable prompt system which plugins can leverage to interact with the user.
- Implementing functionality around `login`, `logout`, `restore` logic, as well as a number of other session management helpers.
- A localization engine to support multiple languages, changes to API access patterns, and a complete rework of the logic made available to plugins.
- The release of [7 plugins](https://github.com/orgs/wharfkit/repositories?q=plugin&type=all&language=&sort=) for developers to leverage while building their applications and templates to help them create their own.

This work and more is all now available in the [0.3.x release](https://www.npmjs.com/package/@wharfkit/session?activeTab=versions) across the entirety of the Session Kit, which now makes up 18 of the [20 Github repositories](https://github.com/orgs/wharfkit/repositories?q=&type=public&language=&sort=) under the Wharf project umbrella.

Work continues towards a version 0.4.x which will include a graphical overhaul, the addition of the missing `LoginPlugin`, and the incorporation of feedback from developers based on their experiences integrating it into apps.

## Preview: Integrating the Session Kit

This example will walk through the integration of Wharf's Session Kit in a brand new web application. These examples will reference one specific implementation performed while using Svelte, Vite, and Typescript - but feel free to try this with your own application or in any web framework you may be familiar with.

A completed version of the example in Svelte can be found at the repository below.

https://github.com/wharfkit/example-vite-svelte-ts

Many links throughout this post will reference specific lines of code from it. This example is also functional, so to see it in action just clone down the project and run `yarn` and `yarn dev` to start it up.

### Creating the base web app

This repository was created using:

```bash
yarn create vite example-wharf-app --template svelte-ts
```

This creates a new boilerplate application using Vite, Svelte, and Typescript. Alternatively, If you'd like to try following along using one of the [many other frameworks suported](https://vitejs.dev/guide/#scaffolding-your-first-vite-project), you can use the interactive interface to select a supported template:

```bash
yarn create vite
```

Follow the instructions provided by the scaffolded project to navigate into the folder, install the dependencies, and start development mode of the sample application.

```bash
cd example-wharf-app
yarn
yarn dev
```

You are also free to use any other bundler or boilerplate of your choice. While we have not tested them all, the entirety of Wharf is designed to be framework agnostic and they should all work. If it does not, [please file a bug report](https://github.com/wharfkit/session/issues)!

If you follow along this article and try this with your favorite app stack, we'd be interested to know your experiences and feedback. Please join us on the new Github discussion board hosted under the Wharf organization and feel free to share your open source code:

https://github.com/orgs/wharfkit/discussions

### Adding Wharf

With a sample application in place, next up we need to add a few Wharf components, namely the [Session Kit](https://github.com/wharfkit/session), the [Web UI Renderer](https://github.com/wharfkit/web-ui-renderer), and at least one [wallet plugin](https://github.com/orgs/wharfkit/repositories?q=wallet-plugin&type=all&language=&sort=) for users to authenticate with. The following command will do so utilizing the [Anchor Wallet Plugin](https://github.com/wharfkit/wallet-plugin-anchor) for authentication.

```bash
yarn add @wharfkit/session \
       @wharfkit/web-ui-renderer \
       @wharfkit/wallet-plugin-anchor
```

Additional plugins for wallets, transactions, and login can be added by installing and including additional packages in the project.

### Initializing the Session Kit

With the base dependencies installed, now is time to find a place in the application where it can initialize an instance of the [Session Kit](https://github.com/wharfkit/session). The Session Kit itself should only need to be set up once and then can create/access any number of individual Sessions for multiple blockchains and/or accounts.

For the purposes of this simple technical preview, all of the code is included in a [single component to help illustrate how they connect](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte). When developing more complex applications, this Session Kit instance will need to be set up somewhere in the application where all components related to session management will have access to it.

### The Web UI Renderer

When using the Session Kit to create sessions, the first thing that needs to be set up is a `UserInterface` instance that can be passed in to the Session Kit constructor. The [Web UI Renderer](https://github.com/wharfkit/web-ui-renderer) is an out of the box solution with a (soon to be) Wharf themed interface that provides all the base functionality required.

To set it up, simply include the dependency and [create an instance of it](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L9).

```ts
import { WebUIRenderer } from "@wharfkit/web-ui-renderer"

const ui = new WebUIRenderer()
```

This class will automatically inject a [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) element into the page and provide controls for the Session Kit to utilize it.

> **Note**: If you are establishing the Session Kit and Web UI Renderer after the DOMContentLoaded event has already fired, you may need to manually call `ui.appendDialogElement()` during the "on mount" event in the framework you are using.

### The Wallet Plugin(s)

The next piece of the puzzle required is at least one wallet plugin to provide to the Session Kit so it knows how to authenticate users when they attempt to log in to the application. For [this example we are using the Anchor Wallet Plugin](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L49-L52) and it can be setup using the following code:

```ts
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"

const anchor = new WalletPluginAnchor()
```

Multiple different wallet plugins can be set up in similar ways, each optionally providing parameters in their constructors to allow for customization.

### Setting up the SessionKit instance

Now with a [UserInterface](https://wharfkit.github.io/session/interfaces/UserInterface.html) and one [WalletPlugin](https://wharfkit.github.io/session/interfaces/WalletPlugin.html), the instance of the [SessionKit](https://wharfkit.github.io/session/classes/SessionKit.html) itself can be [constructed with those components](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L12-L53) being passed in as constructor arguments.

```ts
import { SessionKit } from "@wharfkit/session"

const sessionKit = new SessionKit({
  appName: "demo",
  chains: [
    {
      id: "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4",
      url: "https://wax.greymass.com",
    },
  ],
  ui,
  walletPlugins: [anchor],
})
```

A few additional parameters are being passed in, including:

- The `appName`, which represents an Antelope styled [Name](https://greymass.github.io/eosio-core/classes/Name.html) that will be presented to users within the Wharf User Interface and provide future connectivity with other systems.
- An array of `chains` that the application supports in the [ChainDefinition](https://wharfkit.github.io/session/classes/ChainDefinition.html) format, with each chain having a `id` for the Chain ID and a `url` specifying how to access one of its APIs.

This results in a variable called `sessionKit` that can now be used to create, restore, or retrieve sessions for this application.

### Creating a Session using the `login` method of the Session Kit

With an instance of the Session Kit now available in the app, it can now provide session management functionality through the default user interface provided by the Web UI Renderer. In order to initiate the user login process, the `.login()` method of the `sessionKit` needs to be called.

```ts
const loginResult = await sessionKit.login()
```

Once called, the Web UI Renderer will walk the user through selecting the decisions required to connect with the application. When complete this will return a [LoginResult](https://wharfkit.github.io/session/interfaces/LoginResult.html) that contains the resulting Session.

The `loginResult` will contain the [context](https://wharfkit.github.io/session/classes/LoginContext.html) that was used during the login, the [response](https://wharfkit.github.io/session/interfaces/WalletPluginLoginResponse.html) from the Wallet Plugin, and most importantly a [Session](https://wharfkit.github.io/session/classes/Session.html) that can be used to communicate with that user and their preferred wallet.

The Session returned in `loginResult` should be made available to any part of the application that needs to be able to perform transactions or perform session management functions. Depending on which JS frameworks you are using, how and where you store this session may vary. The most basic example of storing the session could be represented as:

```ts
let session

async function login() {
  const response = await sessionKit.login()
  session = response.session
}
```

In the [example Svelte application](https://github.com/wharfkit/example-vite-svelte-ts), we do this in the [login function](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L67-L70) and save the result to a writable store, which is triggered by the `on:click` [handler of a button](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L101) on the page.

### Utilizing the Session to perform a transaction

Now with a Session available and a user already being logged in, it's possible to request that user to sign transactions and perform actions on-chain. This is done using the `session.transact()` method, which was covered more extensively in the [first technical preview](https://wharfkit.com/blog/posts/a-technical-preview-of-the-session-kit-in-wharf) of the Session Kit.

This is done by defining the action data required for the transaction and passing it into the `transact` method on the Session object that was provided during the login.

An example of a simple token transfer would currently look similar to this:

```ts
const action = {
  account: "eosio.token",
  name: "transfer",
  authorization: [session.permissionLevel],
  data: {
    from: session.actor,
    to: "teamgreymass",
    quantity: "0.00000001 WAX",
    memo: "Yay WharfKit! Thank you <3",
  },
}
```

For the `authorization` of the action we can pass in the `session.permissionLevel`, which will automatically provide the information of the user which is currently logged in. The same goes for the `data.from` field which utilizes the `session.actor` to pass in the account name of the user.

> **Note:** In future versions of Wharf, the creation of actions like this will be much more simple when using the upcoming Contract and Account Kits. These actions will be

Now with the desired action defined, that action can be passed into the `transact` method of the Session.

```ts
const transactResult = await session.transact({ action })
```

The `transact` call above will request that the user sign the transaction using the wallet plugin they authenticated with, routing the request to their wallet and awaiting the response. When the user completes the request, the promise will resolve and your application can react accordingly.

### Logging out

With the above set up, users are now able to login to the application and perform transactions. Next you'll need a method for users who are logged in, to log out and remove their session. This can be done again utilizing the `sessionKit` instance you created earlier and can be done in two different ways.

The first way is by logging out an individual session, which can be done by calling the `logout` method and [passing in the Session](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L73) object itself.

```ts
async function logout() {
  await sessionKit.logout(session)
  session = null
}
```

You'll also want to remove any local copies of the session you have in your applications state, since that session will no longer be valid.

Alternatively, if you have a multi-user interface where the user can login with multiple accounts simultaneously, you can call the `logout` method without any parameters.

```ts
async function logoutAll() {
  await sessionKit.logout()
}
```

This approach will log out all Session instances in the application and remove any persisted data from LocalStorage. If your application also maintains a user state, you again will need to clear that state.

### Persisting a Session and automatically logging in

In order to persist user sessions over a longer period of time and between page loads, the `restore` method can be called on page load to automatically retrieve the last used session and inject it into your applications state.

```ts
async function autoLogin() {
  session = await sessionKit.restore()
}
```

The result of the `restore` call will be the last used Session instance, retrieved and recreated from the browsers LocalStorage.

This is done in the example application by leveraging the `onMount` function provided by Svelte, which is called [as the page is loaded](https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte#L55-L65).

## A basic user interface

With all this logic implemented, this basic application now allows users to login with their wallet, perform transactions, persist their sessions across page loads, and the ability to log out. The full example using this code in a single Svelte component can be found here:

https://github.com/wharfkit/example-vite-svelte-ts/blob/3fb8c99eb19030698929edc855f651331ac94f04/src/lib/Login.svelte

While this preview only scratches the surface of what's possible using Wharf's Session Kit, we hope it illustrates how exactly it can be leveraged to build awesome user experiences.

## Feedback and Collaboration

Do you have questions or want to engage with the growing community of developers that utilize Wharf to build applications? We'd welcome you to join the discussion boards on Github!

https://github.com/orgs/wharfkit/discussions

Questions, feedback, and collaboration from the developer community is always welcome. We'd also invite you to follow along with development on [WharfKit.com](https://wharfkit.com).
