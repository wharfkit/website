---
title: Account
description: An Account instance is a wrapper for Antelope blockchain accounts. It facilitates interaction with accounts by offering methods for account data retrieval and action generation.
category: AccountKit
published: true
order: 2
---

# Account

Each `Account` class instance represents a specific blockchain account. It offers several helper methods to facilitate interaction with that account.

## Creation

In most cases, the [AccountKit Factory](/docs/account-kit/account-kit-factory) will be used to generate `Account` instances. However, they can also be created manually if the relevant data is provided. Here is a basic example of how to do so:

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

The only parameter passed to the `Account` class constructor is an object containing the following configuration data:

- `abi`: The [ABI definition](/docs/antelope/abi) for the contract.
- `account`: The name of the account that the contract is deployed to.
- `data`: The account's data. Generally, this will be obtained using a [get_account API call](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/chain_api_plugin/api-reference/index#operation/get_account). <!-- TODO: Replace this with link from Antelope API docs. Maybe from the antelope docs?? -->
- `client`: An instance of an [APIClient](/docs/antelope/api-client) that will be used to retrieve blockchain data.

## Usage

Once an `Account` instance is created, the following methods and read-only properties are available.

### Methods

- [`balance`](/docs/account-kit/balance-method): Retrieves a specific balance for the account.
- [`permission`](/docs/account-kit/permission-method): Retrieves a specific account [Permission](/docs/account-kit/permission) instance.
- [`resource`](/docs/account-kit/resource-method): Retrieves a specific [Resource](/docs/account-kit/resource) instance that contains some information on the account's resources.
- [`resources`](/docs/account-kit/resources-method): Retrieves a `Resources` instance from the [@wharfkit/resources package](https://www.npmjs.com/package/@wharfkit/resources).
- [`setPermission`](/docs/account-kit/set-permission-method): Generates an [Action](/docs/antelope/action) instance that can be used to set a permission on the account.
- [`removePermission`](/docs/account-kit/remove-permission-method): Generates an [Action](/docs/antelope/action) instance that can be used to remove a permission from the account.
- [`linkauth`](/docs/account-kit/linkauth-method): Generates an [Action](/docs/antelope/action) instance that can be used to require an account authorization for a contract action.
- [`unlinkauth`](/docs/account-kit/unlinkauth-method): Generates an [Action](/docs/antelope/action) instance that can be used to remove the requirement of an account authorization for a contract action.
- [`buyRam`](/docs/account-kit/buy-ram-mmethod): Generates an [Action](/docs/antelope/action) instance that can be used to buy RAM for the account.
- [`buyRamBytes`](/docs/account-kit/buy-ram-bytes-method): Generates an [Action](/docs/antelope/action) instance that can be used to buy RAM in bytes for the account.
- [`sellRam`](/docs/account-kit/sell-ram-method): Generates an [Action](/docs/antelope/action) instance that can be used to sell RAM for the account.
- [`delegate`](/docs/account-kit/delegate-method): Generates an [Action](/docs/antelope/action) instance that can be used to have the account delegate resources.
- [`undelegate`](/docs/account-kit/undelegate-method): Generates an [Action](/docs/antelope/action) instance that can be used to have the account undelegate resources.

### Properties

- `accountName`: The account name.
- `client`: The [APIClient](/docs/antelope/api-client) instance used to communicate with the blockchain.
- `data`: The account's data.
- `systemContract`: A [contract](/docs/contract-kit/contract) instance of the system contract.
- `chain`: The chain ID of the blockchain the account is on.
- `systemToken`: The system token symbol of the blockchain the account is on.
