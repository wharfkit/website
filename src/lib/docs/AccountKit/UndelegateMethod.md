---
title: Undelegate (Method)
description: Used to generate an action to undelegate CPU or NET resources from an Antelope account.
category: ContractKit
published: true
order: 8
---

# Undelegate

The `undelegate` method allows Antelope account owners to undelegate (unstake) CPU or NET resources from their account.

## Usage

The `undelegate` method is available on any [Account](/docs/account-kit/account) instance. Here is a basic example of how to use it:

```typescript
const action = testAccount.undelegate({cpu: '1.0000 EOS', net: '0.5000 EOS'});
// Initiates an undelegate action with the specified CPU and NET quantities.
```

The `receiver` option can also be specified to return the undelegated resources to another account:

```typescript
const action = testAccount.undelegate({
    cpu: '1.0000 EOS',
    net: '0.5000 EOS',
    receiver: 'wharfkit1112'
});
```

## Arguments

- `cpu`: The quantity of CPU resources to undelegate, specified as a string (e.g., `1.0000 EOS`).
- `net`: The quantity of NET resources to undelegate, specified as a string (e.g., `0.5000 EOS`).

## Options

- `receiver`: The Antelope account to which the undelegated tokens should be returned. If not provided, it defaults to the account initiating the `undelegate` action.

## Return Value

The `undelegate` method returns an [Action](/docs/antelope/action) instance detailing the resource undelegation. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
