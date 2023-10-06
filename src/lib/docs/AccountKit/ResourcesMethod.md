---
title: Resources (Method)
description: Initializes and returns a resource library configured for a specific blockchain account.
category: AccountKit
published: true
order: 11
---

# Resources

The `resources` method initializes and returns an instance of the [@wharfkit/resources](https://github.com/wharfkit/resources) library Resources class.

## Usage

The `resources` method is available on any [account](/docs/account-kit/account) instance. Here's an example of how to use it:

```typescript
const allResources = myAccount.resources();
```

## Options

- `sampleAccount`:  The name of a sample account. It's used to specify the account to use when sampling usage.

## Return Value

The `resources` method returns an instance of the Ressources class in the [@wharfkit/resources](https://github.com/wharfkit/resources) library.
