---
title: UnlinkAuth (Method)
description: Used to generate an action that removes the link between an action and a permission for EOS accounts.
category: AccountKit
published: true
order: 10
---

# UnlinkAuth

The `unlinkAuth` method is used to remove the requirement of a specific account permission level being used to execute a specific smart contract action.

## Usage

The `unlinkAuth` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.unlinkAuth('eosio.token', 'transfer');
```

In the example above, we generate an action that removes any permission level requirement from the `eosio.token` `transfer` action.

## Arguments

- `contract`: The smart contract account containing the action.
- `actionName`: The name of the action.

## Return Value

The `unlinkAuth` method returns an [Action](/docs/antelope/action) instance detailing the removal of a permission level requirement. The action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
