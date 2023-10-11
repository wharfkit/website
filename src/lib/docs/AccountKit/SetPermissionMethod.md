---
title: setPermission Method
description: Update or set a permission level on an Antelope blockchain account.
category: AccountKit
published: true
order: 14
---

# SetPermission

The `setPermission` method is used to update or establish a new permission level on an [account](/docs/account-kit/account). This is crucial for account security management, allowing users to dictate specific permissions for different operations or actions.

## Usage
The `setPermission` method is available on any [account](/docs/account-kit/account) instance. To generate an action that will add a new permission level to an account, an instantiated [Permission](/docs/account-kit/permission) can be passed to the `setPermission` method:

```typescript
const permission = Permission.from({
    parent: 'owner',
    perm_name: 'claim',
    required_auth: {
        keys: [
            {
                key: 'PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5',
                weight: 1,
            },
        ],
    },
})

const action = account.setPermission(permission)
```

To update a permission level on an account, the [permission method](/docs/account-kit/permission-method) can be used to obtain a permission which can then be modified and passed to the `setPermission` method:


```typescript
const permission = account.permission('claim')

// Update the permission
permission.addKey('PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT6', 10)

const action = setPermission(permission: Permission)
```

## Arguments

- `permission`: The [Permission](/docs/account-kit/permission) instance that represents the permission level you want to set or update.

## Return Value

The `setPermission` method returns an [Action](/docs/antelope/action) instance detailing the request to set or update the permission level. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.