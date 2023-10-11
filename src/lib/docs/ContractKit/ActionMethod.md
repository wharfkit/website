---
title: Action (Method)
description: Provides functionality for genereting an Antelope Action instance from a Contract instance.
category: ContractKit
published: true
order: 3
---

# Action

The `action` method is a convenient way to generate an Antelope [Action](/docs/antelope/action) instance from a [Contract](/docs/contract-kit/contract) instance. Actions can be created using this method and then be passed to the [SessionKit transact](/docs/session-kit/transact) method to be executed on chain.

## Usage

The `action` method is available on any [Contract](/docs/contract-kit/contract) instance. Here is a basic example of how to use it:
```typescript
const action = tokenContract.action(
    'transfer', // or Name.from('transfer')
    {
        from: 'foo',
        to: 'bar',
        quantity: '1.0000 EOS',
    }
)
```

The optional parameter can also be used to specify the authorization values for the action.

```typescript
const action = tokenContract.action(
    'transfer', // or Name.from('transfer')
    {
        from: 'foo',
        to: 'bar',
        quantity: '1.0000 EOS',
    },
    {
        authorization: [
            { actor: "foo", permission: "active" }
        ]
    }
)
```

## Arguments

The `action` method takes two arguments:

- `name`: The name of the action. Can be a string or an instance of [Name](/docs/antelope/name).
- `data`: The data to be used to execute that action. This will vary depending on the contract action that is used.

## Options

The third parameter is optional and can be used to specify the following option:

- `authorization`: An array of [Authorization](/docs/antelope/authorization) objects that will be used to authorize the action. When this option is not specified, placeholder values will be used.

## Return Value

The `action` method returns an instance of [Action](/docs/antelope/action).