---
title: AccountKit (Factory)
description: The Account Kit is responsible for facilitating the creation of Account instances through the load method.
category: AccountKit
published: true
order: 1
---

# AccountKit Class

The `AccountKit` class provided by the [Account Kit](/docs/account-kit) is a factory class that facilitates the creation of [Account](/docs/account-kit/account) instances.

## Creation

When using the `AccountKit` factory class within a web application, the developer will first need to instantiate it. Here is a basic example of how to do so:

```typescript
import { AccountKit } from "@wharfkit/account"
import { Chains } from "@wharfkit/common"

const accountKit = new AccountKit(Chains.EOS);
```

Optionally, a [Contract](/docs/contract-kit/contract) and/or an [APIClient](/docs/antelope/api-client) instance can be passed to the `AccountKit` factory class constructor:

```typescript
import { AccountKit } from "@wharfkit/account"
import { APIClient } from "@wharfkit/antelope"
import { Chains } from "@wharfkit/common"
import { ContractKit } from "@wharfkit/contract"

const client = new APIClient({ url: "https://jungle4.greymass.com" })

const contractKit = new ContractKit({
    client,
})

const contract = await contractKit.load("contractname")

const accountKit = new AccountKit(Chains.EOS, {
    client,
    contract,
});
```


### Arguments

The `AccountKit` constructor expects one parameter:

- `chain`: A [Chain Definition](/docs/common/chain-definition) instance that can be obtained from the `@wharfkit/common` [Chains](/docs/common/chains) object.

### Options

A second optional parameter can be passed to the `AccountKit` constructor with the following options:

- `client`: An [API client](/docs/antelope/api-client) instance that will be used to fetch account data. If not provided, a client will be created using the default configuration for the specified chain.
- `contract`: A [Contract](/docs/contract-kit/contract) instance that will be used by all [Account](/docs/account-kit/account) instances created by the factory. If not provided, the system contract will be used.

## Usage

### Load Method

Once an `AccountKit` instance is obtained, the `load` method can be used to obtain an [Account](/docs/account-kit/account) instance for a specific Antelope blockchain account. Here is an example of how to do so:

```typescript
const account = await accountKit.load("teamgreymass");
```

### Arguments

The `load` method accepts a single parameter:

- `accountName`: The name of the account to load.

### Return Value

The `load` method returns an [Account](/docs/account-kit/account) instance.
