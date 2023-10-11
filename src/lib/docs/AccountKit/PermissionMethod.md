---
title: Permission (Method)
description: Used to retrieve a specific Permission instance from an Account instance.
category: AccountKit
published: true
order: 11
---

# Permission

The `permission` method allows you to obtain a specific [Permission](/docs/account-kit/permission) instance from an [Account](/docs/account-kit/account) instance.

## Usage

The `permission` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const permission = account.permission('owner');
// Fetches the 'owner' permission details for the specified account.
```

## Arguments

The `permission` method requires a single parameter:

- `permissionName`: The name of the permission to retrieve (eg. 'owner' or 'active').

## Return Value

The `permission` method returns a [Permission](/docs/account-kit/permission) instance.
