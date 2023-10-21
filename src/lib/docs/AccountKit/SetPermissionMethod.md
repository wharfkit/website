---
title: SetPermission (Method)
description: Used to create an action that updates or creates a permission on an Antelope blockchain account.
category: AccountKit
published: true
order: 13
requiresReview: true
---

# SetPermission

The `setPermission` method is used to update or establish a new permission on an Antelope account. It returns an [Action](/docs/antelope/action) instance that details the permission update. The action can then be signed and executed on-chain using the `SessionKit` [Transact](/docs/session-kit/transact) method.

## Usage

The `setPermission` method is available on any [Account](/docs/account-kit/account) instance. To create an action that will add a new permission to an account, a [Permission](/docs/account-kit/permission) instance can be passed to the `setPermission` method. Here is a basic example of how to do that:

```typescript
const permission = Permission.from({
  parent: "owner", // The name of the parent permission
  perm_name: "claim", // The name of the permission
  required_auth: {
    keys: [
      {
        key: "PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5", // The public key that can be used to prove authority
        weight: 1, // The weight of the key
      },
    ],
  },
})

const action = account.setPermission(permission) // Creates the action that will create the permission
```

To update an existing permission on an account, the [permission method](/docs/account-kit/permission-method) can be used to obtain a [Permission](/docs/account-kit/permission) instance which can then be modified and passed to the `setPermission` method. Here is a basic example of how to do so:

```typescript
const permission = account.permission("claim")

// Update the permission by adding a new key
permission.addKey(
  "PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT6",
  10
)

const action = setPermission(permission)
```

## Arguments

- `permission`: The [Permission](/docs/account-kit/permission) instance that represents the permission that is to be created or updated.

## Return Value

The `setPermission` method returns an [Action](/docs/antelope/action) instance. This action can then be passed to the `SessionKit` [Transact](/docs/session-kit/transact) method for execution.
