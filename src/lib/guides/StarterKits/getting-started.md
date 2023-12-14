---
title: Getting Started with Wharfkit Starter Kits
category: StarterKits
published: true
requiresReview: true
---

# Introduction to Wharfkit Starter Kits

The Starter kits are a great way to start developing applications on Wharfkit. They offer a convenient way to install all the essential Wharfkit packages at once, while also providing `sessionKit` instances that can be used quickly instantiate sessions in your applications.

The available kits are `@wharfkit/starter`, `@wharfkit/starter-eos`, `@wharfkit/starter-telos`, `@wharfkit/starter-wax`, and `@wharfkit/starter-jungle`.

> **NOTE**: This guide is current as of December 2023 and reflects the latest versions of Wharfkit Starter Kits.

## Getting Started

Ensure [Node.js](https://nodejs.org/en/) is installed, as it is a prerequisite for using Wharfkit packages.

### Step 1: Installation

Select and install the Starter kit that best matches your blockchain project's needs:

For a version of the Starter kit that will work with all the main Antelope blockchains:
```bash
npm install --save @wharfkit/starter
# or
yarn add @wharfkit/starter
```

For a version of the Starter kit that is tailored to a specific blockchain:
```bash
npm install --save @wharfkit/starter-[blockchain]
# or
yarn add @wharfkit/starter-[blockchain]

# Replace [blockchain] with 'eos', 'telos', 'wax', or 'jungle'
```

### Step 2: Setting Up Your Project

After installation, import the `sessionKit` instance and other necessary modules from the necessary Wharf packages:

```js
import { ContractKit } from '@wharfkit/contract';
import { AccountKit } from '@wharfkit/account';
// Import other modules as needed
```

### Step 3: Using SessionKit

Use the `sessionKit` instance to log the user in and create a Wharf session:

```js
import { sessionKit } from '@wharfkit/starter';

const session = await sessionKit.login(); // Initiates a login request
```

### Step 4: Sending a Transaction

After logging in, utilize the `session` object for transaction operations. Here's a basic example of a transfer transaction:

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

This example showcases a transfer using the `eosio.token` contract, employing the `transact` method on the `session` object for signing and broadcasting.

## Next Steps

For more information on the different features and functionalities offered by Wharfkit, we recommend reading through it's extensive [documentation](/docs). A good starting point is the [SessionKit documentation](/docs/session-kit), which provides thorough explanations and examples of how to use and manage sessions in your application.
