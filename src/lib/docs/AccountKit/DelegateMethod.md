---
title: Delegate (Method)
description: Used to create an action to delegate tokens for NET or CPU resources.
category: AccountKit
published: true
order: 7
---

# Delegate

The `delegate` method is used to stake tokens for NET and CPU resources on Antelope blockchains. By staking, an account can allocate resources either for its own benefit or for another account. The method provides flexibility in how resources are allocated, allowing for CPU, NET, or both to be specified.

## Usage

The `delegate` method is available on any [Account](/docs/account-kit/account) instance. Here is a basic example of how to use it:

```typescript
const action = testAccount.delegate({cpu: '1.0000 EOS', net: '0.5000 EOS'});
```

A single resource can also be specified:

```typescript
// Staking only for CPU
const cpuAction = testAccount.delegate({cpu: '1.0000 EOS'});
// Staking only for bandwidth (net)
const netAction = testAccount.delegate({net: '1.0000 EOS'});
```

To delegate resources to another account:

```typescript
const action = testAccount.delegate({
    cpu: '1.0000 EOS',
    net: '0.5000 EOS',
    receiver: 'wharfkit1112'
});
```

To delegate resources to another account and transfer the ownership of the staked tokens:

```typescript
const action = testAccount.delegate({
    cpu: '1.0000 EOS',
    net: '0.5000 EOS',
    receiver: 'wharfkit1112',
    transfer: true
});
```

## Arguments

- `cpu`: Amount of tokens to stake for CPU resources.
- `net`: Amount of tokens to stake for bandwidth (NET) resources.

## Options

- `receiver`: Specifies the account name of the Antelope account that should receive the RAM. Defaults to the payer.
- `transfer`: A boolean indicating if the staked tokens' ownership should be transferred to the receiver. Defaults to false.

## Return Value

The `delegate` method returns an [Action](/docs/antelope/action) instance detailing the resource delegation request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.