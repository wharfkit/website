---
title: LinkAuth (Method)
description: Used to generate an action that creates a dependency between a smart contract action and a permission level.
category: AccountKit
published: true
order: 9
---

# Linkauth

The `linkAuth` method provides a way for an Antelope account owner to require a specific account permission level when executing a specific action on a smart contract.
## Usage

The `linkAuth` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.linkAuth('eosio.token', 'transfer', 'active');
```

In the example above, an action creating a dependency between the `eosio.token` `transfer` action and the `active` permission level is generated. This makes it so the `active` permission level is required to execute the `transfer` action on the `eosio.token` smart contract.

## Arguments

- `contract`: The account name of the account that the permission level should be linked to.
- `actionName`: The name of the action that the permission level should be linked to.
- `permission`: The permission level that should be linked to the specified action (eg. `active`).

## Return Value

The `linkAuth` method returns an [Action](/docs/antelope/action) instance detailing the link request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
