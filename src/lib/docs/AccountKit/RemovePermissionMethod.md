---
title: RemovePermission (Method)
description: Used to generate an action that deletes a custom permission level from an Antelope account.
category: AccountKit
published: true
order: 13
---

# RemovePermission

The `removePermission` method is used to delete custom permissions from an Antelope account. 

## Usage

The `removePermission` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.removePermission('claim');
```

In the example above, an action that deletes the `claim` permission level is generated.

## Arguments

- `permissionName`: The name of the permission level that is to be removed.

## Return Value

The `removePermission` method returns an [Action](/docs/antelope/action) instance.