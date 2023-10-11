---
title: Linkauth (Method)
description: Set a specific permission level.
category: AccountKit
published: true
order: 9
---

# Linkauth

The `linkauth` method provides a way for an Antelope account owner to link a specific action of a smart contract to a permission level. By using it, one can specify unique permissions for certain actions on specific smart contract actions.

## Usage

The `linkauth` method is available on any [Account](/docs/account-kit/account) instance. It can be used as follows:

```typescript
const action = testAccount.linkauth('eosio.token', 'transfer', 'active');
```

In the example above, an action linking the `eosio.token` `transfer` action to the `active` permission level is generated. This makes it so that the `active` permission level is required to execute the `transfer` action on the `eosio.token` contract.

## Arguments

- `contract`: The account name of the account that the permission level should be linked to.
- `actionName`: The action name that the permission level should be linked to.
- `permission`: The permission level that should be linked to the specified action (eg. `active`).

## Return Value

The `linkauth` method returns an [Action](/docs/antelope/action) instance detailing the link request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
