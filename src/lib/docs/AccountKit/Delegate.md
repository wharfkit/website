---
title: Delegate (Method)
description: Delegate EOS resources for bandwidth and CPU.
category: AccountKit
published: true
order: 8
---

# Delegate

The delegate method is used to stake EOS tokens for bandwidth and CPU resources on Antelope blockchains. By staking, an account can allocate these resources either for its own benefit or for another account. The method provides flexibility in how resources are allocated, allowing for CPU, bandwidth, or both to be specified.

## Usage

The delegate method is available on any account instance. Here's a demonstration of its basic usage:

```typescript
const action = testAccount.delegate({cpu: '1.0000 EOS', net: '0.5000 EOS'});
```

You can also specify only one of the resources:

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

To delegate resources and transfer the ownership of the staked tokens:

```typescript
const action = testAccount.delegate({
    cpu: '1.0000 EOS',
    net: '0.5000 EOS',
    receiver: 'wharfkit1112',
    transfer: true
});
```

## Arguments

The delegate method requires an argument object with at least one of these properties:
- `cpu`: Amount of EOS to stake for CPU resources.
- `net`: Amount of EOS to stake for bandwidth (net) resources.

## Options

The delegate method accepts these options:
- `receiver`: Specifies an EOS account that will benefit from the delegated resources. Defaults to the staking account if not provided.
- `transfer`: A boolean indicating if the staked EOS tokens' ownership should be transferred to the receiver. Defaults to false.

## Return Value

The delegate method returns an [Action](/docs/antelope/action) instance detailing the resource delegation request. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.