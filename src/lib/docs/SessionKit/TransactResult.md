---
title: TransactResult
description: description
category: SessionKit
published: true
---

# TransactResult

Upon a successful call to the [Transact](/docs/sessionkit/transact) method of a [Session](/docs/sessionkit/session), the response returned will be an object that matches the `TransactResult` interface.

## Properties

The `TransactResult` object contains the following properties.

```ts
interface TransactResult {
  chain: ChainDefinition
  request: SigningRequest
  resolved: ResolvedSigningRequest | undefined
  response?: { [key: string]: any }
  revisions: TransactRevisions
  signatures: Signature[]
  signer: PermissionLevel
  transaction: ResolvedTransaction | undefined
}
```

### chain

The [ChainDefinition](/docs/utilities/common-library#chaindefinition) of the blockchain that was used in the [Transact](/docs/sessionkit/transact) call.

### request

A representation of the transaction performed in the [SigningRequest](#) format.

### resolved

The [ResolvedSigningRequest](#) that was used during the [Transact](/docs/sessionkit/transact) call which has been resolved to ensure proper tapos values and to template any placeholder values that may have existed in the [SigningRequest](#).

### response

The results returned from the [APIClient](/docs/antelope/api-client) after successfully submitting the transaction to the blockchain APIs.

### revisions

An instance of [TransactRevisions](https://wharfkit.github.io/session/classes/TransactRevisions.html) which contains a history of modifications made to the transaction through the execution of the included [TransactPlugins](/docs/sessionkit/transact-plugin).

### signatures

An array of [Signatures](#) that were used in authorizing the transaction.

### signer

The [PermissionLevel](#) representation of the account and permission used to authorize the transaction.

### transaction

A representation of the transaction performed in the [ResolvedTransaction](#) format.
