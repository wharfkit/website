---
title: Balance (Method)
description: Retrieve the balance of an account for a specific token.
category: ContractKit
published: true
order: 5
---

# Balance

The balance method allows you to retrieve the balance of an account for a specific token.

## Usage

The balance method is available on any account instance. Here's a basic example of how to use it:

```typescript
const balance = await testAccount.balance();
// Returns the balance of the system token for the account.
```

To retrieve the balance for a secondary token:

```typescript
const balance = await testAccount.balance('eosio.token', 'EOS');
// Returns the balance of the 'EOS' token for the account.
```

## Arguments

The balance method can accept up to two parameters:

- `contract`: (optional) The contract of the token you wish to query. Defaults to the system token contract.
- `symbol`: (optional) The symbol of the token you wish to query.

## Return Value

The balance method returns an instance of the [Asset](/docs/antelope/asset) class, representing the balance of the queried token.
