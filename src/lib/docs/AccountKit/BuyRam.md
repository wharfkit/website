---
title: BuyRam (Method)
description: Acquire RAM using EOS tokens.
category: ContractKit
published: true
order: 6
---

# BuyRam

The `buyRam` method allows accounts to purchase RAM using a specific amount of tokens. It returns an [Action](/docs/antelope/action) object detailing the RAM purchase request.

## Usage

The `buyRam` method is available on any [account](/docs/account-kit/account) instance. Here is a basic example detailing how to purchase RAM using a specific amount of a token:

```typescript
const action = testAccount.buyRam('1.0000 EOS');
```

Alternatively, an antelope [Asset](/docs/antelope/asset) instance can also be passed instead of a string:

```typescript
const action = testAccount.buyRam(Asset.from(1.0000, '4,EOS'));
```

You can also override the receiver of the RAM purchase:

```typescript
const action = testAccount.buyRam('1.0000 EOS', {
    receiver: 'wharfkit1112'
});
```

## Arguments

- `amount`: The amount of EOS to be used for purchasing RAM, specified as a string (e.g., `'1.0000 EOS'`).

## Options

The `buyRam` method accepts an optional `options` object containing the following property:

- `receiver`: (optional) Specifies an EOS account to receive the RAM. Defaults to the payer if not provided.

## Return Value

The `buyRam` method returns an [Action](/docs/antelope/action) object detailing the RAM purchase request. This action can be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
