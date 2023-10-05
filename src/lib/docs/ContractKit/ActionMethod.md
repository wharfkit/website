---
title: Action (Method)
description: Provides functionality for genereting an Antelope Action instance that can then be passed to a a session.transact() method.
category: ContractKit
published: true
order: 3
---

# Action

The `action` method assists in generating an Antelope [Action](/docs/antelope/action) instance. Actions can be created using this method and then be passed to the [SessionKit transact](/docs/session-kit/transact) method to be executed on chain.

## Usage

The `action` method is available on any [Contract](/docs/contract-kit/contract) instance. It can be used to generate an [action](/docs/antelope/action) instance.

```typescript
const action = tokenContract.action(
    'transfer', // or Name.from('transfer')
    {
        from: 'foo',
        to: 'bar',
        quantity: '1.0000 EOS',
    }
)
console.log(action)
// {"account":"eosio.token","name":"transfer","authorization":[{ "actor": "............1", "permission": "............2"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
session.transact({ action }) // executing the action on chain
```

The optional parameter can be used to specify the authorization value for the action.

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
            { actor: "foo", permission: "active" } // defaults to { actor: "............1", permission: "............2" } placeholder
        ]
    }
)
```

## Arguments

The `action` method takes three arguments:

- `name`: The name of the action. Can be a string or an instance of [Name](/docs/antelope/name).
- `data`: The data to be used to execute that action. This will vary depending on the contract action that is used.
- `options`: An optional object that can be used to specify the authorization for the action. Defaults to using placeholder values.

## Return Value

The `action` method returns an instance of [Action](/docs/antelope/action).