---
title: Account
description: A Account represents the connection between an application's code and an Antelope blockchain contract. It facilates interaction with smart contracts by offering methods for data retrieval and action generation.
category: AccountKit
published: true
order: 2
---

# Account

The `Account` class instance represents a specific [blockchain smart contract](https://docs.eosnetwork.com/docs/latest/smart-contracts/). It offers a myriad of methods that provide functionality ranging from retrieving contract data to generating contract actions that can be executed using the [SessionKit](/docs/session-kit/transact).

## Creation

Accounts can be created manually for use in applications, so long as all the relevant data is provided. Once created, a `Account` will offer multiple read-only properties and a handful of methods.

The minimum required information to create a `Account` instance is as follows:

```ts
import { Account } from "@wharfkit/contract"
import { APIClient } from "@wharfkit/antelope"

import abi from "./eosio-abi.json" // ABI for the eosio.token contract

const contractArgs = {
    abi,
    account: "eosio.token",
    client: new APIClient("https://jungle4.greymass.com"),
}

const contract = new Account(contractArgs)
```

### Arguments

The only parameter passed to the `Account` class is an object containing all the required configuration data.

- `abi`: The [ABI](/docs/antelope/abi) definition for the contract.
- `account`: The name of the account that the contract is deployed to.
- `data`: The account's data.
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to communicate with the blockchain.

## Usage

Once a `Account` instance is created, methods and read-only properties are available.

### Methods

- [`balance`](/docs/account-kit/balance-method): Retrieves a specific balance for the account.
- [`permission`](/docs/account-kit/permission-method): Retrieves a specific [Permission](/docs/account-kit/permission) instance from the account.
- [`resource`](/docs/account-kit/resource-method): Retrieves a specific [Resource](/docs/account-kit/resource) instance from the account.
- [`resources`](/docs/account-kit/resources-method): Retrieves all [Resource](/docs/account-kit/resource) instances from the account.
- [`setPermission`](/docs/account-kit/set-permission): Generates an [Action](/docs/antelope/action) instance that can be used to set a permission on the account.
- [`removePermission`](/docs/account-kit/remove-permission): Generates an [Action](/docs/antelope/action) instance that can be used to remove a permission from the account.
- [`linkauth`](/docs/account-kit/linkauth): Generates an [Action](/docs/antelope/action) instance that can be used to link an authorization to an action on the account.
- [`unlinkauth`](/docs/account-kit/unlinkauth): Generates an [Action](/docs/antelope/action) instance that can be used to unlink an authorization from an action on the account.
- [`buyRam`](/docs/account-kit/buy-ram): Generates an [Action](/docs/antelope/action) instance that can be used to buy RAM for the account.
- [`buyRamBytes`](/docs/account-kit/buy-ram-bytes): Generates an [Action](/docs/antelope/action) instance that can be used to buy RAM for the account.
- [`sellRam`](/docs/account-kit/sell-ram): Generates an [Action](/docs/antelope/action) instance that can be used to sell RAM for the account.
- [`delegate`](/docs/account-kit/delegate): Generates an [Action](/docs/antelope/action) instance that can be used to delegate resources for the account.
- [`undelegate`](/docs/account-kit/undelegate): Generates an [Action](/docs/antelope/action) instance that can be used to undelegate resources for the account.

### Properties

- `accountName`: The account name.
- `client`: The [APIClient](/docs/antelope/api-client) instance used to communicate with the blockchain.
- `data`: The account's data.
- `systemContract`: A [contract](/docs/contract-kit/contract) instance of the system contract.
- `chain`: The chain ID of the blockchain the account is on.
- `systemToken`: The system token symbol of the blockchain the account is on.
