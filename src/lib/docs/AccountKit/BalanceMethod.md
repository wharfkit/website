---
title: Balance (Method)
description: Retrieve the balance of an account for a specific token.
category: ContractKit
published: true
order: 3
---

# Balance

The `balance` method allows you to retrieve the balance of an account for a specific token. It returns an [Asset](/docs/antelope/asset) instance with a value equal to the account balance for the queried token.

## Usage

The `balance` method is available on any [account](/docs/account-kit/balance) instance. Here's a basic example of how to use it:

```typescript
const balance = await testAccount.balance();
// Returns the balance of the system token for the account.
```

To retrieve the balance for a secondary token:

```typescript
const balance = await testAccount.balance('eosio.token', 'USDT');
// Returns the balance of the 'USDT' token for the account.
```

## Options

- `contract`: The contract of the token balance that is being retrieved. Defaults to the system token contract.
- `symbol`: The symbol of the token balance that is being retrieved. Defaults to the system token symbol.

## Return Value

The balance method returns an instance of the [Asset](/docs/antelope/asset) class.