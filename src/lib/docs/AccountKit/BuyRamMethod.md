---
title: BuyRam (Method)
description: Used to generate an action to acquire RAM using a specific amount of tokens.
category: ContractKit
published: true
order: 5
---

# BuyRam

The `buyRam` method allows accounts to purchase RAM using a specific amount of tokens. It returns an [Action](/docs/antelope/action) object detailing the RAM purchase request.

## Usage

The `buyRam` method is available on any [account](/docs/account-kit/account) instance. Here is a basic example detailing how to purchase RAM using a specific amount of token:

```typescript
const action = testAccount.buyRam('1.0000 EOS');
```

Alternatively, an antelope [Asset](/docs/antelope/asset) instance can also be passed:

```typescript
const action = testAccount.buyRam(Asset.from(1.0000, '4,EOS'));
```

To specify a receiver for the RAM purchase, the `receiver` option can be specified:

```typescript
const action = testAccount.buyRam('1.0000 EOS', {
    receiver: 'wharfkit1112'
});
```

## Arguments

- `amount`: The amount of tokens to be used for purchasing RAM, it can be a string or an [Asset](/docs/antelope/asset) instance.

## Options

The `buyRam` method accepts an optional object with the following property:

- `receiver`: Specifies the account name of the Antelope account that should receive the RAM. Defaults to the payer.

## Return Value

The `buyRam` method returns an [Action](/docs/antelope/action) object detailing the RAM purchase request. This action can be passed to the [SessionKit Transact method](/docs/session-kit/transact) for execution.
