---
title: Loading Contracts
category: Contract Kit
published: true
order: 10
---

# Dynamically Loading Antelope Smart Contracts

This guide will show one method for setting up the Contract Kit and using it to dynamically load `Contract` instances in web applications. A second guide will be added in the future to show how you can statically include pregenerated `Contract` instances using the upcoming `@wharfkit/cli` application.

> **NOTE**: This guide was originally written in August of 2023 and is based upon the `0.4.x` release of `@wharfkit/contract`. It will be updated once the Contract Kit is finalized, to reflect any potential changes that are made as we progress towards a 1.0.0 release.

## What is the Contract Kit?

The Contract Kit is a set of tools designed to help developers interact with smart contracts on [Antelope-based blockchains](https://antelope.io). It allows instantiation of `Contract` objects in frontend applications to assist with interactions against specific smart contracts. Its primary area of focus is around the easy create actions and the ability to read data from the contract.

## Adding the Contract Kit

In order to utilize the Contract Kit in a web application, the package simply needs to be added to the project using your preferred package manager:

```bash
yarn add @wharfkit/contract
```

or

```bash
npm install @wharfkit/contract
```

The [additional dependencies](https://github.com/wharfkit/contract/blob/dev/package.json#L21-L26) that the Contract Kit requires will automatically be installed.

## The `ContractKit` Factory Class

The `ContractKit` class offered by the Contract Kit package is a factory method that's capable of dynamically loading and producing `Contract` objects. Each `Contract` object represents an instance of a specific smart contract on the blockchain. With this object, an application can access data from the contract's tables, create actions to use with the [Session Kit](/docs/session-kit), and utilize other methods to help the application interact with the smart contract.

If dynamically loading contracts, an instance of the `ContractKit` must first be established within the application. The only argument required to create an instance will be an `APIClient` that allows the kit to communicate with the blockchain.

```ts
import { ContractKit } from "@wharfkit/contract"

const contractKit = new ContractKit({
  client: new APIClient("https://jungle4.greymass.com"),
})
```

The `ContractKit` variable is now a ready-to-use instance of the kit, and can be used to dynamically load contracts into the application.

## Loading a `Contract`

With the kit established, the application can now create an instance of a `Contract` using the `load` method of the `ContractKit`. In this example, the code will load the `eosio.token` contract from the Jungle 4 blockchain.

```ts
const contract = await contractKit.load("eosio.token")
```

The account name where the contract is deployed needs to be passed as a parameter to the call. The result of this call will be a `Contract` object that is ready to use within the host application.

## More...

With an instance of a `Contract` now loaded, the application can make use of it to either:

- [Create actions for use in transact](#)
- [Load data from the contract tables](#)

Stay tuned as more [guides](/guides), [documentation](/docs) and [example codebases](https://github.com/orgs/wharfkit/repositories?q=example&type=all&language=&sort=) are added, or ask questions in the [Github discussion board for WharfKit](https://github.com/orgs/wharfkit/discussions)!
