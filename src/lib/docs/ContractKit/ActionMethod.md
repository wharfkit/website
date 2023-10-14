---
title: Action (Method)
description: Provides functionality for generating an Antelope Action instance from a Contract instance.
category: ContractKit
published: true
order: 2
requiresReview: true
---

# Action

The `action` method is a convenient way to generate an Antelope [Action](/docs/antelope/action) instance from a [Contract](/docs/contract-kit/contract) instance. Actions can be created using this method and then be passed to the SessionKit [transact](/docs/session-kit/transact) method to be executed on chain.

## Usage

The `action` method is available on any [Contract](/docs/contract-kit/contract) instance. Calling this method will return a single action based on the arguments provided.

```typescript
const action = tokenContract.action(
  "transfer", // or Name.from('transfer')
  {
    from: "foo",
    to: "bar",
    quantity: "1.0000 EOS",
  }
)
```

## Arguments

The `action` method takes two arguments:

- `name`: The name of the action as defined in the [ABI](#). Can be a string or an instance of [Name](/docs/antelope/name).
- `data`: The data to be used within the action as an object. This will vary depending on the contract action that is used.

## Options

The third parameter is optional and can be used to specify the following option:

- `authorization`: An array of [PermissionLevel](docs/antelope/permission-level) objects that will be used to authorize the action. When this option is not specified, placeholder values will be used, which will be resolved to the the current signer of the transaction if the action is performed.

```typescript
const action = tokenContract.action(
  "transfer",
  {
    from: "foo",
    to: "bar",
    quantity: "1.0000 EOS",
  },
  {
    authorization: [{ actor: "foo", permission: "active" }],
  }
)
```

## Return Value

The `action` method returns an instance of [Action](/docs/antelope/action).
