---
title: SellRam (Method)
description: Used to create an action to sell a specified amount of RAM.
category: AccountKit
published: true
order: 6
---

# SellRam

The `sellRam` method allows Antelope account owners to sell a specified amount of RAM. The method returns an [Action](/docs/antelope/action) detailing the RAM sale. The action can then be signed and executed on-chain using the `SessionKit` [Transact](/docs/session-kit/transact) method.

## Usage

The `sellRam` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.sellRam(1024)
```

In the above example, an action that sells `1024` bytes of RAM is created.

## Arguments

- `bytes`: The number of bytes of RAM to sell.

## Return Value

The `sellRam` method returns an [Action](/docs/account-kit/action) instance. This action can be passed to the `SessionKit` [Transact](/docs/session-kit/transact) method for execution.
