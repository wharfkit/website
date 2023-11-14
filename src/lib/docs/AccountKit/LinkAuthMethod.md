---
title: LinkAuth (Method)
description: Used to create an action that creates a dependency between a smart contract action and a permission.
category: AccountKit
published: true
order: 9
---

# Linkauth

The `linkAuth` method provides a way for an Antelope account owner to limit an account permission so that it's only able to execute specific smart contract actions. It returns an [Action](/docs/antelope/action) instance that can be signed and executed on-chain using the `SessionKit` [Transact](/docs/session-kit/transact) method.

## Usage

The `linkAuth` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.linkAuth(
  "eosio.token",
  "claimrewards",
  "claim"
)
```

In the example above, an action limiting the custom `claim` permission to the `eosio` `claimrewards` action is created. This makes it so the `claim` permission can only execute the `claimrewards` action on the `eosio` smart contract.

## Arguments

- `contract`: The name of the account that the permission should be linked to.
- `actionName`: The name of the action that the permission should be linked to.
- `permission`: The name of the permission that should be linked to the specified action (e.g. `claim`).

## Return Value

The `linkAuth` method returns an [Action](/docs/antelope/action) instance. This action can then be passed to the `SessionKit` [Transact](/docs/session-kit/transact) method for execution.
