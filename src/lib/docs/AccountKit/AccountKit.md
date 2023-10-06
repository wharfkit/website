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

When using the `AccountKit` within a web application, the developer will first establish an instance of the class with the required AccountKit arguments.

A simple example would be as follows:

```typescript
import { AccountKit } from "@wharfkit/Account"
import { APIClient } from "@wharfkit/antelope"

const AccountKit = new AccountKit({
    client: new APIClient("https://jungle4.greymass.com"),
});
```

### Arguments

The only required parameter to initialize a `AccountKit` instance is an object containing containing a single value.

- `client`: The [API client](/docs/antelope/api-client) used to fetch smart Account data.

## Usage

### Load Method

The `load` method is used to load a specific Account.

```typescript
const Account = await AccountKit.load("teamgreymass");
```

### Arguments

The `load` method accepts a single parameter:

- `accountName`: The name of the account to load.
### Return Value

The `load` method returns an [Account](/docs/account-kit/account) instance.
