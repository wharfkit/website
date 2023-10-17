---
title: UnlinkAuth (Method)
description: Used to create an action that removes the dependency between a smart contract action and a permission.
category: AccountKit
published: true
order: 10
---

# UnlinkAuth

The `unlinkAuth` method is used to remove the requirement of a specific account permission being used to execute a specific smart contract action.

## Usage

The `unlinkAuth` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.unlinkAuth('eosio', 'claimrewards');
```

In the example above, we create an action that removes the link between the `eosio` `claimrewards` action and any account permission.

## Arguments

- `contract`: The smart contract account that the action is deployed to.
- `actionName`: The name of the action.

## Return Value

The `unlinkAuth` method returns an [Action](/docs/antelope/action) instance detailing the removal of the permission link. The action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
