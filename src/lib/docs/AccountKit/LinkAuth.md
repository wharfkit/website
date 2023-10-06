---
title: Linkauth (Method)
description: Set a specific permission level for a smart contract action.
category: AccountKit
published: true
order: 9
---

# Linkauth

The linkauth method provides an interface for an EOS account to link a specific action of a smart contract to a permission level other than the default active or owner. By employing this, an account can specify unique permissions for certain actions, offering enhanced security and flexibility.

## Usage

To link a specific permission level to a smart contract action, you can use the linkauth method on any account instance:

```typescript
const action = testAccount.linkauth('eosio.token', 'transfer', 'active');
```

In the example above, the action transfer from the smart contract eosio.token has been linked to the active permission level.

## Arguments

- `contract`: The EOS account (smart contract) whose action you intend to link.
- `actionName`: The specific action you intend to link.
- `permission`: The permission level you want to link to the action.

## Return Value

The linkauth method returns an [Action](/docs/antelope/action) instance detailing the link request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
