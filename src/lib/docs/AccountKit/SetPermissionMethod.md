---
title: SetPermission (Method)
description: Used to generate an action that updates or creates a permission level on an Antelope blockchain account.
category: AccountKit
published: true
order: 14
---

# SetPermission

The `setPermission` method is used to update or establish a new permission level on an Antelope account. 

## Usage
The `setPermission` method is available on any [Account](/docs/account-kit/account) instance. To generate an action that will add a new permission level to an account, a [Permission](/docs/account-kit/permission) instance can be passed to the `setPermission` method. Here is a basic example of how to do that:

```typescript
const permission = Permission.from({
    parent: 'owner', // The name of the parent permission level
    perm_name: 'claim', // The name of the permission level
    required_auth: {
        keys: [
            {
                key: 'PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5', // The public key that can be used to prove authority
                weight: 1, // The weight of the key
            },
        ],
    },
})

const action = account.setPermission(permission) // Generates the action that will create the permission level
```

To update a permission level on an account, the [permission method](/docs/account-kit/permission-method) can be used to obtain a [Permission](/docs/account-kit/permission) instance which can then be modified and passed to the `setPermission` method. Here is a basic example of how to do so:


```typescript
const permission = account.permission('claim')

// Update the permission by adding a new key
permission.addKey('PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT6', 10)

const action = setPermission(permission)
```

## Arguments

- `permission`: The [Permission](/docs/account-kit/permission) instance that represents the permission level that is to be created or updated.

## Return Value

The `setPermission` method returns an [Action](/docs/antelope/action) instance detailing the request to create or update the permission level. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.