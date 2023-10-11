---
title: UnlinkAuth (Method)
description: Removes the link between an action and a permission for EOS accounts.
category: AccountKit
published: true
order: 10
---

# UnlinkAuth

The `unlinkauth` method is used to disconnect a custom permission from a specific contract action for an EOS account. This is beneficial for users who want to revert to the default permissions for an action or replace a custom permission with a different one.

## Usage

To unlink a custom permission from a specific action:

```typescript
const action = testAccount.unlinkauth('eosio.token', 'transfer');
```

In the example above, an action that unlinks the `eosio.token` contract from the `transfer` action is generated.

## Arguments

- `contract`: The smart contract account whose action we intend to unlink.
- `actionName`: The name of the action that we intend to unlink.

## Return Value

The unlinkauth method returns an [Action](/docs/antelope/action) instance detailing the request to unlink the custom permission from the specified action. The action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
