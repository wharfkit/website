---
title: Permission (Method)
description: Retrieve a specific permission level associated with an Antelope blockchain account.
category: AccountKit
published: true
order: 11
---

# Permission

The permission method allows you to fetch a specific [permission](/docs/account-kit/permission) instance tied to an [account](/docs/account-kit/account).

## Usage

The permission method is available on any [account](/docs/account-kit/account) instance. Here is an example:

```typescript
const permission = account.permission('owner');
// Fetches the 'owner' permission details for the specified account.
```

## Arguments

The permission method requires a single parameter:

- `permissionName`: The identifier of the permission level you're interested in. Commonly used permission names include "owner" and "active", but user-defined permissions can also be fetched.

## Return Value

The permission method returns an instance of the [Permission](/docs/account-kit/permission) class, which holds the intricate details of the specified permission level, such as associated keys, thresholds, and more.
