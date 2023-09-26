---
title: Action
description: Provides functionality for genereting an Antelope Action instance that can then be passed to a a session.transact() method.
category: ContractKit
published: true
order: 3
---

# Action

The `action` method assists in generating an Antelope [Action](/docs/antelope/action) instance. Actions can be created using this method then be passed to the [SessionKit transact](/docs/session-kit/transact) method to be executed on chain.

## Usage

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
console.log(action)
// {"account":"eosio.token","name":"transfer","authorization":[{"actor":"foo","permission":"active"}],"data":"80b1915e5d268dca00000092019ca65e010000000000000004454f5300000000185468616e6b7320666f7220616c6c20746865206669736821"}
```
