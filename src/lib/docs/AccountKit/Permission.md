---
title: Permission
description: A Permission instance is a wrapper for Antelope blockchain account permissions.
category: AccountKit
published: true
order: 12
---

# Permission

Each `Permission` instance represents a permission level on an Antelope blockchain account. It offers a convenient way to read the permission level's details, as well as modify it.

## Creation

In most cases, the [permission method](/docs/account-kit/permission-method) will be used to instantiate `Permission` instances. Additionally, the `Permission` class has a `from` method that can be used to create instances directly:

```typescript
const perm = Permission.from({
    parent: 'owner', // The parent permission
    perm_name: 'active', // The name of the permission
    required_auth: {
        keys: [
            {
                key: 'PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5',
                weight: 1,
            },
        ],
    },
})
```

### Arguments

- `parent`: The parent permission. This is the permission level that can modify or delete the permission that is represented by the `Permission` instance.
- `perm_name`: The name of the permission.
- `required_auth`: The [Authority](/docs/account-kit/authority) object defining how the permission should work.

### Options

- `linked_actions`: An array of actions that can be executed using the permission.

## Usage

Once a `Permission` instance is created, the following methods and read-only properties are available.

### Methods

- `addKey`: Adds a public key to the list of keys that can be used on the permission.

```typescript
permission.addKey('PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63', 10);
```

- `removeKey`: Removes a public key from the permission.

```typescript
permission.removeKey('PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5');
```

- `addAccount`: Adds an account-based permission.

```typescript
permission.addAccount('trust.gm@active');
// This allows the use of the permission by the `trust.gm` account.
```

- `removeAccount`: Removes an account-based permission.

```typescript
testPermission.removeAccount({actor: 'trust.gm', permission: 'active'});
// This will remove the above account-based permission.
```

- `addWait`: Adds a wait-based permission.

```typescript
testPermission.addWait({wait_sec: 100, weight: 1});
// This will add a delay to all transactions broadcasted using the permission level.
```

- `removeWait`: Removes a wait-based permission.

```typescript
testPermission.removeWait({wait_sec: 100, weight: 1});
// This will remove the wait value from the permission.
```

### Properties

- `perm_name`: Retrieves the name of the permission.
- `parent`: Retrieves the parent permission.
- `required_auth`: Retrieves the [Authority](/docs/account-kit/authority) object that defines how the permission should work.
- `linked_actions`: Retrieves the linked actions that can be called using the permission represented by the `Permission` instance.
