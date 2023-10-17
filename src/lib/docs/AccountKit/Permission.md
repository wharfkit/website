---
title: Permission
description: A Permission instance is a wrapper for an Antelope blockchain account permission level.
category: AccountKit
published: true
order: 12
---

# Permission

Each `Permission` instance represents a permission level on an Antelope blockchain account. It offers a convenient way to read the permission level's details, as well as modify it.

## Creation

In some cases, the [permission method](/docs/account-kit/permission-method) will be used to generate `Permission` instances. Additionally, the `Permission` class has a `from` method that can be used to create instances directly. Here is an example of how to use it:

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

- `parent`: The parent permission. This is the permission level that can modify or delete the permission level that is represented by the `Permission` instance.
- `perm_name`: The name of the permission level.
- `required_auth`: The [Authority](/docs/account-kit/authority) object defining how authority is proven for the permission level.
### Options

- `linked_actions`: An array of actions that can only be executed using the permission.

## Usage

Once a `Permission` instance is created, the following methods and read-only properties are available.

### Methods

- `addKey`: Adds a public key to the list of keys that can be used to prove authority on the permission level.

```typescript
permission.addKey('PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63', 10);
```

- `removeKey`: Removes a public key from the permission level.

```typescript
permission.removeKey('PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5');
```

- `addAccount`: Adds an account-based authority to the permission level.

```typescript
permission.addAccount('trust.gm@active');
// This allows the use of the permission by the `trust.gm` account.
```

- `removeAccount`: Removes an account-based authority from the permission level.

```typescript
testPermission.removeAccount({actor: 'trust.gm', permission: 'active'});
// This will remove the above account-based permission.
```

- `addWait`: Adds a wait period to the permission level. This will delay the execution of any actions that use the permission level.

```typescript
testPermission.addWait({wait_sec: 100, weight: 1});
// This will add a 100 seconds delay to all transactions broadcasted using the permission level.
```

- `removeWait`: Removes a wait period from a permission level.

```typescript
testPermission.removeWait({wait_sec: 100, weight: 1});
// This will remove the 100 seconds delay from the permission.
```

### Properties

- `perm_name`: Retrieves the name of the permission level.
- `parent`: Retrieves the name of the parent permission level.
- `required_auth`: Retrieves the [Authority](/docs/account-kit/authority) object that defines how authority is proven for the permission level.
- `linked_actions`: Retrieves the linked actions that can only be called using the permission level.
