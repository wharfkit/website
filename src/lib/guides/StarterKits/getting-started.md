---
title: Getting Started with Wharfkit Starter Kits
category: StarterKits
published: true
requiresReview: true
---

# Introduction to Wharfkit Starter Kits

The Starter Kits are a great way to start developing applications on Wharfkit. They offer a convenient way to install all the essential Wharfkit packages at once, while also providing `sessionKit` instances that can be used quickly instantiate sessions in your applications.

The available kits are `@wharfkit/starter`, `@wharfkit/starter-eos`, `@wharfkit/starter-telos`, `@wharfkit/starter-wax`, and `@wharfkit/starter-jungle`.

## Getting Started

### Step 1: Installation

Select and install the Starter Kit that best matches your blockchain project's needs:

For a version of the Starter Kit that will work with all the main Antelope blockchains:
```bash
npm install --save @wharfkit/starter
# or
yarn add @wharfkit/starter
```

For a version of the Starter Kit that is tailored to a specific blockchain:
```bash
npm install --save @wharfkit/starter-[blockchain]
# or
yarn add @wharfkit/starter-[blockchain]

# Replace [blockchain] with 'eos', 'telos', 'wax', or 'jungle'
```

### Step 2: Using SessionKit

Use the `createSessionKit` method to instantiate a `SessionKit` instance and start a Wharf session:

```js
import { createSessionKit } from '@wharfkit/starter';

const sessionKit = await createSessionKit();

const { session } = await sessionKit.login(); // Initiates a login request
```

Above, we are using a preconfigured instance of the `SessionKit` factory class. This instance comes bundled with a few essential Wharf plugins like the [Anchor Wallet plugin](https://www.npmjs.com/package/@wharfkit/wallet-plugin-anchor) and the [Web Renderer](https://www.npmjs.com/package/@wharfkit/web-renderer).

This allows us to easily call the [Login](/docs/session-kit/login) method and create a session. Because we are using the base `@wharfkit/starter` kit, the `Login` method will let the user connect his wallet to any of the main Antelope blockchains. If you are using a blockchain-specific kit, calling the `Login` method will only let the user connect his wallet to the specified blockchain.

### Step 3: Broadcasting a Transaction

After logging your users in, utilize the `session` object for transaction operations. Here's a basic example of a transfer transaction:

```ts
const transactionArguments = {
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
};

const transactionResult = await session.transact(transactionArguments);
```

This example showcases a transfer using the `eosio.token` contract, employing the `transact` method on the `session` object for signing and broadcasting. For more information on how to use the `transact` method, you can read the [Transact](/docs/session-kit/transact) documentation.

## Next Steps

For more information on the different features and functionalities offered by Wharfkit, we recommend reading through it's extensive [documentation](/docs). A good starting point is the [SessionKit documentation](/docs/session-kit), which provides thorough explanations and examples of how to use and manage sessions in your application.
