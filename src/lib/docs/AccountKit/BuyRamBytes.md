---
title: BuyRamBytes (Method)
description: Acquire a specific number of bytes of RAM.
category: AccountKit
published: true
order: 7
---

# BuyRamBytes

The `buyRamBytes` method facilitates the purchase of RAM by letting you specify the number of bytes directly. It returns an [Action](/docs/antelope/action) object detailing the RAM purchase request.

## Usage

The `buyRamBytes` method is available on any [account](/docs/account-kit/account) instance. Here's a basic example of how to use it:

```typescript
const action = testAccount.buyRamBytes(1024);
```

To override the receiver of the RAM purchase:

```typescript
const action = testAccount.buyRamBytes(1024, {
    receiver: 'wharfkit1112'
});
```

## Arguments

- `bytes`: The number of bytes of RAM to purchase.

## Options

The `buyRamBytes` method accepts an optional `options` object containing the following property:

- `receiver`: (optional) Specifies an EOS account to receive the RAM. Defaults to the payer if not provided.

## Return Value

The `buyRamBytes` method returns an [Action](/docs/antelope/action) object detailing the RAM purchase request. This action can be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
