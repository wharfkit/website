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

When using the `AccountKit` factory class within a web application, the developer will first need to instantiate it. Here is a basic example of how to do:

```typescript
import { AccountKit } from "@wharfkit/Account"
import { APIClient } from "@wharfkit/antelope"

const AccountKit = new AccountKit({
    client: new APIClient("https://jungle4.greymass.com"),
});
```

### Arguments

The only required parameter to initialize an `AccountKit` instance is an object containing a single property:

- `client`: The [API client](/docs/antelope/api-client) used to fetch the on-chain account data.

## Usage

### Load Method

Once an `AccountKit` instance is obtained, the `load` method can be used to obtain an [Account](/docs/account-kit/account) instance for a specific blockchain account. Here is an example of how to do so:

```typescript
const account = await AccountKit.load("teamgreymass");
```

### Arguments

The `load` method accepts a single parameter:

- `accountName`: The name of the account to load.

### Return Value

The `load` method returns an [Account](/docs/account-kit/account) instance.
