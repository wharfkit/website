---
title: BuyRamBytes (Method)
description: Used to generate an action to acquire a specific number of bytes of RAM.
category: AccountKit
published: true
order: 4
---

# BuyRamBytes

The `buyRamBytes` method facilitates the purchase of RAM by letting you specify a number of bytes to purchase. It returns an [Action](/docs/antelope/action) instance detailing the RAM purchase request.

## Usage

The `buyRamBytes` method is available on any [Account](/docs/account-kit/account) instance. Here is an example of how to use it:

```typescript
const action = testAccount.buyRamBytes(1024);
```

To override the receiver of the RAM purchase, the `receiver` option can be specified:

```typescript
const action = testAccount.buyRamBytes(1024, {
    receiver: 'wharfkit1112'
});
```

## Arguments

- `bytes`: The number of bytes of RAM to purchase.

## Options

The `buyRamBytes` method accepts an optional object with the following property:

- `receiver`: Specifies the account name of the Antelope account that should receive the RAM. Defaults to the payer.

## Return Value

The `buyRamBytes` method returns an [Action](/docs/antelope/action) instance detailing the RAM purchase request. This action can be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
