---
title: Permission
description: A title: Permission represents the connection between an application's code and an Antelope blockchain permission.
category: AccountKit
published: true
order: 2
---

# Permission

The `Permission` class in the AccountKit is a crucial building block that facilitates interaction between application code and [account](/docs/account-kit/account) permissions. It facilates interaction with smart contract permissions by offering different helper methods.

## Creation

A basic `Permission` instance can be constructed by using the `from` method:

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

The `from` method accepts a single parameter object with the following properties:

- `parent`: The parent permission. This is the permission that can modify or delete the permission represented by the `Permission` instance.
- `perm_name`: The name of the permission.
- `required_auth`: The [Authority](/docs/account-kit/authority) object that defines the permission.

### Options

The `from` method accepts an optional property:

- `linked_actions`: An array of linked actions that can be called using the permission represented by the `Permission` instance.

## Usage

Once a `Permission` instance is created, the following methods and read-only properties are available.

### Methods

- `addKey`: Adds a public key to the permission with.

```typescript
permission.addKey('PUB_K1_6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5BoDq63', 10);
```

This will add the above public key to the authority with a weight of 10.

- `removeKey`: Removes a public key from the permission.

```typescript
permission.removeKey('PUB_K1_6XXTaRpWhPwnb7CTV9zVsCBrvCpYMMPSk8E8hsJxhf6V9t8aT5');
```

This will remove the above public key from the authority.

- `addAccount`: Adds an account-based permission.

```typescript
permission.addAccount('trust.gm@active');
```

This will add the above account-based permission to the authority. Allowing the `active` permission on the account `trust.gm` to use this permission.

- `removeAccount`: Removes an account-based permission.

```typescript
testPermission.removeAccount({actor: 'trust.gm', permission: 'active'});
```

This will remove the above account-based permission from the authority.

- `addWait`: Adds a wait-based permission.

```typescript
testPermission.addWait({wait_sec: 100, weight: 1});
```

This will add the above wait-based permission to the authority. Allowing the permission to be used after 100 seconds after it is signed.

- `removeWait`: Removes a wait-based permission.

```typescript
testPermission.removeWait({wait_sec: 100, weight: 1});
```

This will remove the above wait-based permission from the permission's authority.

### Properties

- `perm_name`: Retrieves the name of the permission.
- `parent`: Retrieves the parent permission.
- `required_auth`: Retrieves the [Authority](/docs/account-kit/authority) object that defines the permission.
- `linked_actions`: Retrieves the linked actions that can be called using the permission represented by the `Permission` instance.
