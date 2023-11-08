---
category: SessionKit
published: true
order: 11
---

# Getting Started: Node.js

This guide will cover using the Session Kit to create a simple Node.js script. The goal of the script is to establish a Session with the Jungle 4 Testnet and perform a simple token transfer to another account. Mastering these few concepts will open up the possibilities for a script to interact with any smart contract on any Antelope-based blockchain.

A completed version of the script this guide will create can be [found here](https://github.com/wharfkit/example-nodejs).

## What is the Session Kit?

The Session Kit provided by Wharf is a suite of tools specifically created to help developers build web-based applications that perform transactions on [Antelope-based blockchains](https://antelope.io). It does this through the creation of Sessions which are connected to a specific account on the blockchain through designated wallet plugins.

## Project Setup

To follow along with this guide and learn by writing out the code, create a new folder somewhere on your system and ensure that both Node.js and the dependencies listed below are available.

### Node.js

To run the code from this guide, the system must have [Node.js (v18+)](https://nodejs.org) installed along with `npm`. If running a version of Node.js which is less than version 18, [additional steps](https://github.com/wharfkit/example-nodejs#nodejs-and-fetch) must be taken to ensure `fetch` is available for the Session Kit.

### Dependencies

The example commands for package management will be using [yarn](https://yarnpkg.com/), but other package managers like [npm](https://npmjs.com/) will work as well.

In order to utilize the Session Kit in a Node.js, the script will need the [@wharfkit/session](https://github.com/wharfkit/session) library and one [WalletPlugin](https://github.com/orgs/wharfkit/repositories?q=wallet-plugin&type=all&language=&sort=). For the purposes of this guide, we will utilize the [@wharfkit/wallet-plugin-privatekey](https://github.com/wharfkit/wallet-plugin-privatekey) plugin, which allows the script to load a private key and sign locally.

```bash
yarn add @wharfkit/session @wharfkit/wallet-plugin-privatekey
```

## Creating the Script

In the project folder, create a single `index.js` file that will serve as the entry point to the script.

### Include the Required Classes

At the top of this file we need to include the two dependencies required to achieve our goal, the `Session` and the `WalletPluginPrivateKey`. The `Session` is a class that lets us instantiate new Sessions for specific blockchain accounts and the `WalletPluginPrivateKey` is an in-app wallet that lets the Session sign transactions locally using a [PrivateKey](/docs/antelope/private-key).

You can include these dependencies using the `require` syntax for a non-ESM script:

```js
const { Session } = require("@wharfkit/session")
const { WalletPluginPrivateKey } = require("@wharfkit/wallet-plugin-privatekey")
```

Or if the project supports ESM and the `import` syntax:

```js
import { Session } from "@wharfkit/session"
import { WalletPluginPrivateKey } from "@wharfkit/wallet-plugin-privatekey"
```

### Configuration

Next in the script we need to establish some configuration parameters that will be passed to the `Session` during instantiation. The Session needs 3 critical pieces of information in order to operate properly:

- **Where** to connect and what blockchain to use.
- **What** account the Session will use on that blockchain.
- **How** the Session can authorize transactions for the account.

#### Where: Blockchain

First up is the `ChainDefinition` interface of the blockchain we intend to connect with. This interface consists of the `id` to identify the blockchain and a `url` of an API endpoint the script can connect with. This part of the config informs the new Session how to connect with the blockchain, which in this example is going to be the **Jungle 4 (Testnet)**.

```js
const chain = {
  id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
  url: "https://jungle4.greymass.com",
}
```

If you are unsure of what the `id` parameter should be for a specific blockchain, you can simply access the `v1/chain/get_info` endpoint of any API for that network.The `chain_id` parameter it returns in the response indicates what this value should be ([example](https://jungle4.greymass.com/v1/chain/get_info)).

#### What: Account and Permission

The next bit of information the `Session` will need is the account name and permission to use. These can be defined as ordinary strings or be passed in as [Name](/docs/antelope/name) typed variables.

```js
const accountName = "wharfkit1111"
const permissionName = "test"
```

For the purpose of this guide we are using the existing [wharfkit1111](https://jungle4.eosq.eosnation.io/account/wharfkit1111) account and the `test` permission.

#### How: Wallet Plugin

The final piece of information the `Session` requires is how it will sign transactions, which in this example is with a [PrivateKey](/docs/antelope/private-key) embedded in the script, which is loaded into the [WalletPluginPrivateKey](https://github.com/wharfkit/wallet-plugin-privatekey) plugin.

```js
const privateKey = "5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s"
const walletPlugin = new WalletPluginPrivateKey(privateKey)
```

The plugin will accept either the standard or WIF format private key.

> **IMPORTANT**: Protect your private keys. Embedding private keys like this in scripts puts the account and all its tokens at risk. Never publish source code containing private keys in Github repositories or use this method of signing in applications where users can extract the private key information.

### Creating a Session

With all the required information on how to configure the `Session` defined in the variables above, this data can now be passed to establish a new useable Session.

```js
const session = new Session({
  actor: accountName,
  permission: permissionName,
  chain,
  walletPlugin,
})
```

This Session is a reusable instance for the **wharfkit1111** account on the **Jungle 4 (Testnet)** that can now be used throughout the script.

### Perform the Transfer

Now with an instance of a `Session` readily available to use, the script is capable of performing transactions. Next the script must define the smart contract action it wishes to perform and then call it.

#### Defining the Action

To perform a basic token transfer on Jungle 4, the script will need to define the action. The script can do this by defining a variable and utilizing the raw action data format.

```js
const transferAction = {
  account: "eosio.token",
  name: "transfer",
  authorization: [session.permissionLevel],
  data: {
    from: session.actor,
    to: "wharfkittest",
    quantity: "0.0001 EOS",
    memo: "Hello World!",
  },
}
```

In this example, the `transferAction` variable is being set to an object that defines:

- The `account` in which the smart contract is deployed, which is `eosio.token`.
- The `name` of the action to perform on the contract, being `transfer`.
- The `authorization` array which defines which accounts permit this action, which we pass in `session.permissionLevel`, so it matches the current Session.
- The `data` object, which defines the parameters required by the smart contract.

For the `eosio.token` contract and its `transfer` action, the required parameters consist of:

- `from`: Which account is sending the tokens, in this case the `session.actor`.
- `to`: Which account is receiving the tokens, which we set to `wharfkittest` (another test account).
- `quantity`: The amount of tokens to send using the [Asset](/docs/antelope/asset) format.
- `memo`: An optional memo to publicly provide additional information about the transfer.

Every smart contract will utilize different parameters for the `data` field to define the required parameters. Check the smart contract's source code or its ABI to determine what these fields are, or check out Wharf's Contract Kit for easier methods of generating this field in the near future.

#### Executing the Transaction

With an action defined, the script can now call the `transact()` method on the Session instance to automatically perform the transaction. This method is an asynchronous call, so for the purposes of this script, we will need to wrap it as an `async` function, which can just be named `main()` and called immediately.

```js
async function main() {
  const result = await session.transact({ action: transferAction })
  console.log(`Transaction was successfully broadcast!`)
  console.log(
    `Explorer Link: https://jungle4.eosq.eosnation.io/tx/${result.response.transaction_id}`
  )
}

main()
```

The `session.transact()` call will take in the `action` we defined, and using all of the configuration data it has, will assemble it into a full transaction and sign it using the local wallet plugin.

This example script will then log to the console that the transaction was successful and render out a link to a block explorer to verify the results.

## Run the Script

With all the code in place, give it a try! Run the following command from your terminal:

```bash
node index.js
```

Provided the testing account still has tokens at the time you're reading this guide, the transaction should be successfully executed on the Jungle 4 Testnet, and the link it provides will show you the results on the network. The output of the script will look like this:

```
Transaction was successfully broadcast!
Explorer Link: https://jungle4.eosq.eosnation.io/tx/277d15e831bcd2aff84e94cbcc98304ae7a8913407cb17e424c9ef55578c25e2
```

You've just successfully used the Session Kit in a Node.js application to perform a real transaction!

## More...

With these concepts you can create a Node.js application that's capable of performing any transaction on any Antelope-based blockchain. This document only scratches the surface of what's possible, since it only covers the Session Kit and doesn't dive deeply into the additional parameters that can be provided to most of these calls.

Stay tuned as more [guides](/guides), [documentation](/docs) and [example codebases](https://github.com/orgs/wharfkit/repositories?q=example&type=all&language=&sort=) are added, or ask questions in the [Github discussion board for WharfKit](https://github.com/orgs/wharfkit/discussions)!
