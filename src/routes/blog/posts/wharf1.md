---
title: "Wharf 1.0 is here!"
date: 2023-11-14
tags: ["article"]
image: "/images/content/cakeday1.png"
description: "We’re proud to announce that Wharf 1.0 is now ready for use. We encourage developers to explore the Session Kit, Contract Kit, and Account Kit on our official website and Github. Listed below is everything included in this release, along with helpful links and details in case you’re new to Wharf."
---

Last November, Greymass introduced Wharf to the world: a project born out of the [Wallet+ bluepaper](https://eosnetwork.com/blog/wallet-blue-paper/) and funded by the Antelope Coalition, the idea was to create a series of modular SDKs that would make it easier to build on all Antelope blockchains.

Almost exactly a year later, Wharf is turning one. But age isn’t just a number, in this case – because with this release, we’re proud to announce that Wharf 1.0 is now ready for use! We encourage developers to explore the Session Kit, Contract Kit, and Account Kit on our official website, access all the tools on Github, and read Wharf’s documentation to answer any questions that may arise. (And if any of your questions aren’t answered there, then we invite you to join the official [Telegram chat](https://t.me/wharfkit).)

Listed below is everything included in this release, along with helpful links and details in case you’re new to Wharf. So let’s get this party going:

## Wharfkit

### Session Kit (v1.1.0)

With this release, the Session Kit is updating to v1.1.0, with new optimizations and support for the Contract and Account Kits. The Session Kit makes it easy to manage sessions that are linked to Antelope-based accounts, by facilitating the signing of transactions and allowing users to sign in to web apps with Antelope-based wallets. It also includes an out-of-the-box UI Renderer that covers a range of common user scenarios, to help save development time and provide users with a seamless experience.

[Website](https://localhost:5173/kits/session) | [Documentation](https://localhost:5173/docs/session-kit) | [Github](https://github.com/wharfkit/session)

### Contract Kit (v1.0.0)

The Contract Kit focuses primarily on smart contract interactivity, making it easy to read and write to the blockchain of your choice. Its standout feature is the Command Line tool, which helps developers to automatically generate code that can represent a smart contract in an application. The Contract Kit is also designed to optimize API access, helping developers to provide end users with faster response times.

[Website](https://localhost:5173/kits/contract) | [Documentation](https://localhost:5173/docs/contract-kit) | [Github](https://github.com/wharfkit/contract)

### Account Kit (v1.0.0)

The Account Kit makes it easy to manage Antelope user accounts, by providing custom APIs for each Antelope blockchain that can be used to easily gather any account information you need. It also gives developers the tools to help users manage their on-chain resources, or opt to abstract the complexity of the resource models away entirely if they prefer. Finally, it simplifies the process when users need to interact with token contracts, making in-app transactions more accessible.

[Website](https://localhost:5173/kits/account) | [Documentation](https://localhost:5173/docs/account-kit) | [Github](https://github.com/wharfkit/account)

### Resource Provider Specification (Rev. 1)

The Antelope blockchain resource model is a powerful and flexible tool that allows for granular billing of network resources, but is often too much of a burden for the average end user. The Resource Provider Specification was created to ease this problem and move the complexities away from most users. This specification is published alongside the release of Wharf to allow any service to provide resources for their users, and is made available for use in the Session Kit using the [Resource Provider Plugin](https://github.com/wharfkit/transact-plugin-resource-provider).

[Documentation](https://localhost:5173/docs/utilities/resource-provider-spec)

## Core Libraries

### Antelope Library (v1.0.0)

This library contains core types, client interfaces, and other tools for working with Antelope-based blockchains. Developers in the space should note that this was formerly the @greymass/eosio library, distributed on [npmjs](https://www.npmjs.com/package/@greymass/eosio). Future distributions will be made using the new organization and namespace, and distributed as @wharfkit/antelope, again on [npmjs](https://www.npmjs.com/package/@wharfkit/antelope).

[Documentation](https://localhost:5173/docs/antelope) | [Github](https://github.com/wharfkit/antelope)

## Account Libraries

### Token Library (v1.0.0)

This library assists with Antelope blockchain balance retrieval for the standard token contract. It can also be used to facilitate on-chain transactions, by making it easy to create transfer actions for users.

[Github](https://github.com/wharfkit/token)

### Resource Library (v1.0.0)

This library assists with Antelope blockchain resource calculations, since Antelope’s resource models can feel complex to the uninitiated user and discourage adoption. This library helps developers to resolve this issue by providing price information for CPU, NET, and RAM resources, and performing calculations for complex values used in transaction data for the Powerup resource model.

[Github](https://github.com/wharfkit/resources)

## Account Creation Plugins

All the below plugins are designed for use with the Session Kit.

### Anchor Account Creation (v1.0.0)

If any developers are familiar with AnchorLink, this plugin is at parity, simplifying the account creation process for new users on Antelope chains.

[Github](https://github.com/wharfkit/account-creation-plugin-anchor)

### Jungle 4 Account Creation (v1.0.0)

More useful for developers than the average user, this plugin makes it easy to create Jungle 4 accounts for testing purposes.

[Github](https://github.com/wharfkit/account-creation-plugin-jungle4)

### Account Creation Plugin Template (v1.0.0)

We have also released a plugin template which allows developers who have created their own account creation services to easily integrate it into apps using the Session Kit.

[Github](https://github.com/wharfkit/account-creation-plugin-template)

## API Libraries

### Roborovski History API (v1.0.0)

Roborovski (or Robo, for short) is a scalable blockchain history provider that can rebuild transaction indexes in record time. Robo is used in the backend of multiple Greymass products, and fuels the majority of Antelope block explorers through our history data APIs.

[Github](https://github.com/wharfkit/roborovski)

### Hyperion History API (v1.0.0)

Hyperion is a scalable blockchain history solution provided by the [EOSRIO](https://eosrio.io/) team that provides transaction history, actions, and new API endpoints to assist in the retrieval of history data. The API library provided by Wharf provides methods to help easily retrieve this data in a type safe manner. More information on Hyperion can be found [here](https://hyperion.docs.eosrio.io/).

[Github](https://github.com/wharfkit/hyperion)

## Utilities

### Web Renderer (v1.0.0)

The Web Renderer provides a base user interface for use in web applications with the Session Kit, and was created by a professional UX designer, making it simple to create a pleasant and intuitive experience for your users. It can also be paired with the Session Kit’s Localization Engine to support multiple languages.

[Documentation](https://wharfkit.com/docs/session-kit/web-renderer) | [Github](https://github.com/wharfkit/web-renderer)

### Wharfkit Command Line Tools (v2.0.0)

The Command Line Tool (CLI) can automatically generate code to represent a smart contract in a TypeScript application. This makes it easy to understand parameters for tables and actions while working with a contract. It also offers tools developers may need to use to generate keys and create new testnet accounts, and serves as a platform to expand additional functionality in the future.

[Documentation](https://wharfkit.com/docs/utilities/cli) | [Github](https://github.com/wharfkit/cli)

### ABI Cache (v1.0.0)

The ABI Cache is used in the Session and Contract Kits as a mechanism to automatically cache ABI data to reduce load times in applications. The ABI itself is a JSON data structure that defines the structure of a Smart Contract and instructs the Serializer on how to encode or decode data. This data only changes when contracts change, making them an ideal candidate for an intelligent caching layer.

[Documentation](https://wharfkit.com/docs/antelope/abi) | [Github](https://github.com/wharfkit/abicache)

### Signing Request (v3.1.0)

This library assists with the EOSIO Signing Request (ESR) protocol. The ESR protocol allows an application to generate signature requests (transactions), which can then be passed to signers (wallets) for signature creation. These signature requests can be used within URI links, QR Codes, or other transports between applications and signers.

[Github](https://github.com/wharfkit/signing-request)

### Common Library (v1.2.0)

This library provides shared types and functionality all across Wharf. It is published on npmjs.org, and is available on Github. It is automatically included with many Wharf packages and made available as part of their distribution.

[Documentation](https://wharfkit.com/docs/utilities/common-library) | [Github](https://github.com/wharfkit/common)

## Ok, time to wrap up the party.

We would like to thank everyone who’s participated in Wharf’s growth and development up to this point, including our team members, attendees of the weekly Wharf calls, developers who have tried Wharf in its various stages and contributed feedback, and the ENF and Antelope Coalition for their support. It takes a village, and we think Wharf makes a pretty cute one-year-old. 🥳

## But wait! What about party favors?!

Don’t worry, we’ll have more exciting Wharf goodies for you soon. The next month or two will see the release of several Starter Kits, which will bundle up various recommended packages so that new developers can easily start building on Antelope blockchains. We will also be releasing a plugin discovery system, a new video tutorial series, and additional documentation and guides. So stay tuned!
