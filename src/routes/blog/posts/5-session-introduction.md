---
title: "Wharf: An Introduction to Sessions"
date: 2023-01-03
tags: ["guide"]
---

> Please note that this article contains a "Technical Preview" using an early release of Wharf's [Session Kit](https://github.com/wharfkit/session). This article was written in early 2023 using `@wharfkit/session` version 0.1.1. Everything within this article is subject to change as the code matures. Please refer to the official documentation (when available) on [WharfKit.com](https://wharfkit.com) for up-to-date usage instructions and information.

[Wharf](https://wharfkit.com) is a collection of Software Development Kits (SDKs) for developers working on [Antelope](https://antelope.io) applications using JavaScript. This article gives a preview of the upcoming release of the [Session Kit](https://github.com/wharfkit/session), one of the major components in the Wharf product collection. This kit aims to provide the tools required for developers to interact with an Antelope-based blockchain.

## Session Kit

With the introduction of the Session Kit, our goal is to create a developer experience that feels similar to what they'd expect from other web technologies. A "session" is a technical concept in development that represents the connection between an authenticated device and a remote application server. When a user authenticates against an application server, a session is established which allows further actions to be performed by a specific device.

During the development of Wharf, we decided to adopt the concept of sessions and apply it to interactions with Antelope-based blockchains. This provides new developers with a sense of familiarity in order to ease the adoption curve.

The Session Kit does this by changing the mechanics under the hood, while still retaining similarities to what is expected in a Web 2.0 world. The authentication step is no longer always required, and instead each session is capable of providing the means to generate transaction signatures, whether that be directly by the Session Kit or by connecting with an external wallet.

## Kit Architecture

The kit at the time of writing is made up of 3 major components, each representing a different aspect of Antelope-based application development.

### `SessionKit` (Factory)

The core of the Session Kit is named after the component itself and offers itself as a [factory class](https://refactoring.guru/design-patterns/factory-method). This allows developers to easily produce `Session` objects of various types for different uses. The factory is triggered using the `login` method that utilizes authentication against external wallets. The result of this call returns an appropriate `Session` object that is ready to use within an application for a specific device.

### `Session` (Product)

Developers working with the Session Kit will primarily be working with individual `Session` objects in their apps, whether crafted by hand within an application or by the `SessionKit` factory methods. A `Session` represents the connection between a device and account on an Antelope-based blockchain. These objects offer a `transact` method that allows actions to be performed on the blockchain by the account it is associated with.

### `Plugin` (Add-ons)

Both the `SessionKit` factory and the `Session` instances are capable of accepting custom logic in the form of one or more `Plugin` packages.

- The `SessionKit` can optionally utilize `LoginPlugins`, which can modify the behavior of the factory during the `login` call.
- Each `Session` can optionally utilize `TransactPlugins`, which can modify the behavior of the object during the `transact` call.
- Each `Session` requires one `WalletPlugin`, which facilitates the creation of signatures and provides an opportunity for communication with external applications (like wallets), when required.

Additional types of plugins may be added in the future as additional needs are identified.

## Technical Preview

In an effort to highlight how these components work in these early versions, the rest of this article will show how they can be used as of version 0.1.1. Development of this early release has primarily focused on the `Session` instances and the various uses of the `TransactPlugin` architecture.

This article will also focus on manually creating a `Session` rather than using the `SessionKit` factory methods to create one. As of this writing, no external `WalletPlugin` packages have been released and no user interfaces have been made available within the `SessionKit` for user facing applications.

These usage examples showcase methods developers would typically see included in backend services, such as bots or scripts. It is anticipated that usage within user facing applications will be similar.

### Creating a `Session`

In order for an application to interact with the blockchain, it will first need to create a `Session`. To do so, the developer would first need the information to set it up, including:

- **The Blockchain**: Which blockchain this session is configured to interact with. This includes the Chain ID and an API endpoint.
- **The Account**: Which account on the configured blockchain this session is using. This includes both the actor and permission.
- **The Wallet**: A `WalletPlugin` for this session that is capable of returning a signature for any interaction.

As of version 0.1.1 of the `@wharfkit/session` library, in practice this would look like:

```js
import { Session } from "@wharfkit/session"

const session = new Session({
  // The Blockchain: Jungle 4's Chain ID and the API to access it.
  chain: {
    id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
    url: "https://jungle4.greymass.com",
  },
  // The Account: "wharfkit1131" using the "test" permission.
  permissionLevel: "wharfkit1131@test",
  // The Wallet: A default plugin that will return signatures with the given private key.
  walletPlugin: new WalletPluginPrivateKey({
    privateKey: "5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s",
  }),
})
```

The value returned by running this code is a new [Session](https://wharfkit.github.io/session/classes/Session.html) object which can now be persisted and used throughout an applications codebase. The session can be used to interact with the blockchain using its [transact](https://wharfkit.github.io/session/classes/Session.html#transact) method.

### The `transact` method

The `transact` method's goal is to take a smart contract action or full transaction and execute it. This method requires a single argument compatible with the [TransactArgs](https://wharfkit.github.io/session/interfaces/TransactArgs.html) type, which contains information about the action(s) that should be performed. This information can be passed as a single action, an array of actions, a full transaction, or an [EOSIO Signing Request](https://github.com/greymass/eosio-signing-request/) payload.

As of version 0.1.1 of the `@wharfkit/session` library, passing this parameter as a single action would be:

```js
const args = {
  action: {
    authorization: [
      {
        actor: "wharfkit1131",
        permission: "test",
      },
    ],
    account: "eosio.token",
    name: "transfer",
    data: {
      from: "wharfkit1131",
      to: "wharfkittest",
      quantity: "0.0001 EOS",
      memo: "",
    },
  },
}

const response = await session.transact(args)
```

In the above example, it defines a single action that executes the `transfer` action on the `eosio.token` contract. It specifies that the intent is to send `0.0001 EOS` to the `wharfkittest` account from the `wharfkit1131` account with an empty memo.

This action is being passed into the `transact` method call on the `Session` object on the last line, which facilitates the creation of the signature and sending the transaction to the blockchain.

The `response` value returned by the call is a [TransactResponse](https://wharfkit.github.io/session/interfaces/TransactResult.html) which contains all the relevant information related to the transaction, including:

- `chain`: The chain used during this transaction.
- `request`: The raw EOSIO Signing Request that was used at the start of the call.
- `resolved`: The resolved EOSIO Signing Request containing the resulting transaction.
- `response`: The response that the API endpoint returned after the transaction was broadcast.
- `signatures`: The signatures generated for the resulting transaction.
- `signer`: The account and permission that was used to sign the transaction.
- `transaction`: Quick access to the ResolvedTransaction object from the resolved EOSIO Signing Request.

If any errors occur during the `transact` call, an exception will be thrown containing information about the failure.

### Utilizing a `TransactPlugin` within a `transact` call

Any developer experienced in application development on Antelope-based blockchains will be very well versed with the design paradigms of the Session Kit that have been discussed so far. To highlight the additional benefits that the Session Kit brings, we must now shift our focus to the Plugin architecture.

This feature helps differentiate the Session Kit from previous solutions by providing additional flexibility and customization. Plugins offer an opportunity for developers to hook into many of the predefined processes within the Session and extend its capabilities. The Session makes use of the [TransactPlugin](https://wharfkit.github.io/session/interfaces/TransactPlugin.html) type. A TransactPlugin can register custom logic at 4 different points in the `transact` flow, before and after the sign and broadcast phases.

In this example, the script is now going to utilize a Resource Provider plugin, one which analyzes a transaction to determine if the authorizing account requires network resources to perform it. The source code for this plugin can be found here:

https://github.com/wharfkit/resource-provider-plugin

Using the same code example as above, the code just needs a slight modification to include a plugin. As of version 0.1.1 of the `@wharfkit/session` library, the plugin would be passed in during the creation of the `Session` as follows:

```js
import { Session } from '@wharfkit/session'
import { ResourceProviderPlugin } from '@wharfkit/resource-provider-plugin'

const session = new Session({
       // The Blockchain: Jungle 4's Chain ID and the API to access it.
   chain: {
       id: '73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d',
       url: 'https://jungle4.greymass.com',
   },
   // The Account: "wharfkit1131" using the "test" permission.
   permissionLevel: 'wharfkit1131@test',
   // The Plugins: Include a resource provider plugin.
   transactPlugins: [new ResourceProviderPlugin({
       url: 'https://jungle4.greymass.com/v1/resource_provider/request_transaction',
   }),
   // The Wallet: A default plugin that will return signatures with the given private key.
   walletPlugin: new WalletPluginPrivateKey({
       privateKey: '5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s',
   })
})
```

Each time the `transact` method of this session is called, the `ResourceProviderPlugin` would be able to act upon the requested transaction and perform its custom logic.

Under the hood, the `ResourceProviderPlugin` is analyzing the transaction itself before it's signed (using the `beforeSign` transaction hook) to ensure the account has the appropriate network resources to successfully execute. If the account does not have sufficient resources, it has the potential to modify the transaction to include additional actions to ensure it is accepted by the network.

This is just one example of how plugins can be used to ease the development burden on developers and enhance the user experience. Plugins can either be created exclusively for a specific application or by the community of open source developers for public use. The goal with this plugin architecture is to provide a framework for developers to create and share reusable code and prevent developers from having to [reinvent the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel).

## The state and future of the Session Kit

The Session Kit is available now as an early release and is available on [npmjs.com](https://www.npmjs.com/package/@wharfkit/session). If anyone would like to try it out in a backend project today, simply include it in your project using either `npm` or `yarn`.

```bash
npm install @wharfkit/session
# or
yarn add @wharfkit/session
```

Its capabilities at the time of this writing are very limited and subject to radical changes, we only advise using it for development and experimentation purposes.

Over the coming months, the Session Kit will continue to evolve based on our current plans and feedback collected from the developer community. It is anticipated that the following features will be added next:

Addition of a User Interface on top of the `SessionKit` which allows web applications to prompt for the information required to create `Session` objects.
The creation of multiple `WalletPlugin` packages to allow interactions with the most widely used wallets in the Antelope ecosystem.
A number of additional `LoginPlugin` and `TransactPlugin` will be created and released to test the capabilities of the plugin architecture.
Optimizations to the core capabilities of the `Session` to allow caching and better API call patterns.

While the Session Kit is still not ready for production applications, hopefully this article has outlined the benefits that it already provides. As development work continues, it will provide even greater benefits to developers building on Antelope-based blockchains.

## Feedback and Collaboration

Feedback and collaboration from the developer community is always welcome. If you’d like to adopt and start using the Session Kit to help guide its development, please give it a try.

To communicate with Greymass and other developers involved about this project, we encourage you to reach out on one of the platforms listed below:

- The [WharfKit.com website](https://wharfkit.com) contains recorded calls and (eventually) documentation.
- Issues for the Session Kit exist on [Github](https://github.com/wharfkit/session/issues).
- Realtime chat about Wharf and the Session Kit in [Telegram](https://t.me/wharfkit).
- A TransactPlugin template is available on [Github](https://github.com/wharfkit/transact-plugin-template)
