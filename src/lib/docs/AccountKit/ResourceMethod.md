---
title: Resource (Method)
description: Retrieve a specific resource instance from an account instance.
category: AccountKit
published: true
order: 15
---

# Resource (Method)

The resource method provides a way to obtain a specific [resource](/docs/account-kit/resource) instance from an [account](/docs/account-kit/account) instance. 

## Usage

The resource method is available on any [account](/docs/account-kit/account) instance. Here's an example of how to use it:

```typescript
const cpuDetails = myAccount.resource('cpu');
```

## Arguments

- `resourceType`: A string representing the type of resource. Supported types include 'cpu', 'net', and 'ram'.

## Return Value

The resource method returns a [resource](/docs/account-kit/resource) instance.


