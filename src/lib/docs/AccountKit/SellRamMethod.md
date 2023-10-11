---
title: SellRam (Method)
description: Liquidate a specified amount of RAM for EOS tokens.
category: AccountKit
published: true
order: 6
---

# SellRam

The `sellRam` method allows EOS account holders to sell a specified amount of RAM in exchange for EOS tokens. This functionality is useful when you have excess RAM that you no longer require or when you want to liquidate some RAM to retrieve its market value in EOS tokens.

## Usage

To sell a specified amount of RAM, use the `sellRam` method on any [account](/docs/account-kit/account) instance:

```typescript
const action = testAccount.sellRam(1024);
```

In the above example, an action that sells `1024` bytes of RAM is generated.

## Arguments

- `bytes`: The number of bytes of RAM you intend to sell.

## Return Value

The sellRam method yields an [Action](/docs/account-kit/action) instance detailing the RAM sale. This action can then be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.