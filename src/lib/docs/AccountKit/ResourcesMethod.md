---
title: Resources (Method)
description: Initializes and returns a @wharfkit/resources library instance configured for a specific blockchain account.
category: AccountKit
published: true
order: 17
---

# Resources

The `resources` method initializes and returns an instance of the [@wharfkit/resources](https://github.com/wharfkit/resources) library Resources class. This class can be used to obtain information about the resources available to a specific blockchain account.

## Usage

The `resources` method is available on any [Account](/docs/account-kit/account) instance. Here's an example of how to use it:

```typescript
const allResources = myAccount.resources();
```

## Options

- `sampleAccount`:  The name of a sample account. It is used to specify the account to use when sampling usage.

## Return Value

The `resources` method returns an instance of the `Resources` class in the [@wharfkit/resources](https://github.com/wharfkit/resources) library.
