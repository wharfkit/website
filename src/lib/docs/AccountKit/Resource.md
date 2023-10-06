---
title: Resource (Class)
description: Represents a specific resource type and provides details related to its usage in an Antelope blockchain account.
category: AccountKit
published: true
order: 9
---

# Resource Class

The Resource class represents a specific resource type (CPU, NET, or RAM) within the Antelope blockchain. It provides a structured way to access various details related to the resource, such as its available capacity, current usage, and maximum limit.

## Creation

The `Resource` class will generally be returned by the [resource](/docs/account-kit/resource-method) and [resources](/docs/account-kit/resources-method) methods on the [Account](/docs/account-kit/account) class. However, a new instance of the `Resource` class can be directly constructed by passing in the resource type and account data:

```typescript 
const cpuResource = new Resource('cpu', {
    account_name: 'teamgreymass',
    cpu_limit: {
        available: 100000,
        max: 100000,
        used: 0
    },
    net_limit: {
        available: 100000,
        max: 100000,
        used: 0
    },
    ram_quota: 100000,
    ram_usage: 0
});
```

### Arguments

The `Resource` class accepts two parameters:

- `resourceType`: The type of resource to create. Supported types include `cpu`, `net`, and `ram`.
- `data`: The data object representing the Antelope blockchain account details. This can be obtained from any [account](/docs/account-kit/account) instance using the `data` property.

## Usage

### Properties

Once initialized, a `Resource` instance provides the following properties:

- `available`: Amount of the resource that's currently free for use.
- `used`: Amount of the resource currently in use.
- `max`: Maximum capacity of the resource available to the account.
- `weight`: When applicable, the weight or priority of the resource will also be provided. This is primarily relevant for `cpu` and `net` resources.
