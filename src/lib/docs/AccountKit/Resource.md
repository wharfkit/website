---
title: Resource (Class)
description: A Resource instance is a wrapper for a specific account resource (CPU, NET, or RAM) on Antelope blockchains.
category: AccountKit
published: true
order: 16
---

# Resource Class

Each `Resource` instance represents a specific Antelope account resource (CPU, NET, or RAM). It provides a structured way to access various details related to that resource.

## Creation

The `Resource` class will generally be returned by the [resource](/docs/account-kit/resource-method) method which is available on any [Account](/docs/account-kit/account) instance. However, a new instance of the `Resource` class can also be constructed directly. Here is an example of how to do so:

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

The `Resource` class constructor accepts two parameters:

- `resourceType`: The type of resource that the `Resource` instance is wrapping. Can be either `cpu`, `net` or `ram`.
- `data`: The data object representing the Antelope blockchain account details. This can be obtained using the `data` property on any [Account](/docs/account-kit/account) instance.

## Usage

### Properties

Once initialized, a `Resource` instance provides the following properties:

- `available`: Amount of the resource that is currently available for use.
- `used`: Amount of the resource currently being used.
- `max`: Maximum amount of resource that can be used.
- `weight`: For `cpu` and `net` resources, the weight (or priority) of the resource will also be available.
