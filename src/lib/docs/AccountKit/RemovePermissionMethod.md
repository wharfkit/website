---
title: RemovePermission (Method)
description: Used to create an action that deletes a custom permission from an Antelope account.
category: AccountKit
published: true
order: 14
---

# RemovePermission

The `removePermission` method is used to delete custom permissions from an Antelope account. It returns an [Action](/docs/antelope/action) instance detailing the permission removal. The action can then be signed and executed on-chain using the `SessionKit` [Transact](/docs/session-kit/transact) method.

## Usage

The `removePermission` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.removePermission("claim")
```

In the example above, an action that deletes the `claim` permission is created.

## Arguments

- `permissionName`: The name of the permission that is to be removed.

## Return Value

The `removePermission` method returns an [Action](/docs/antelope/action) instance. This action can then be passed to the `SessionKit` [Transact](/docs/session-kit/transact) method for execution.
