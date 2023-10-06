---
title: RemovePermission (Method)
description: Delete a custom permission level from an account.
category: AccountKit
published: true
order: 10
---

# RemovePermission

The `removePermission` method is used to delete custom permissions from an EOS account. If a custom permission is no longer required, or if it poses a security risk, you can use this method to remove it.

## Usage

To delete a custom permission from an account, utilize the `removePermission` method on any [account](/docs/account-kit/account) instance:

```typescript
const action = testAccount.removePermission('claim');
```

In the example above, an action that deletes the `claim` permission is generated.

## Arguments

- `permissionName`: The name of the custom permission you intend to remove.

## Return Value

The removePermission method returns an [Action](/docs/antelope/action) instance detailing the deletion request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.