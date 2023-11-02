---
title: Resource Provider Spec
description: A specification to allow 3rd party resource providers to cosign transactions and cover the resource cost of individual transactions.
category: Utilities
published: true
requiresReview: true
---

# Resource Provider Specification

This document contains revision 1 of the Resource Provider Specification. This specification can be adopted and applied by any Antelope blockchain which has enabled the [only bill first authorizer](/docs/utilities/resource-provider-spec#only-billing-the-first-authorizer) feature enabled, and is natively supported by Wharf's [Session Kit](/docs/session-kit) through the use of optional plugins for applications to adopt.

## Overview

### Abstract

A protocol to request an external service to cover the resource costs of an Antelope transaction.

### Summary

The Resource Provider specification provides a workflow, data types, and approaches which applications can use to pay for the network resource costs of a transaction. It introduces a new service provider role in Antelope blockchain ecosystems which allows both arbitrage of resources as well as new methods to improve the user experience. The specification will cover how these technologies and roles combine through the standard, but will not cover any internal business logic service providers may wish to implement.

### Motivation

The Antelope blockchain resource model is a powerful and flexible tool that allows for granular billing of network resources, but is often too much of a burden for the average end user. Users must manually manage their own CPU, NET, and RAM which introduces a complex learning curve. These users are also encouraged to commit more resources than they will typically use to avoid unexpected resource interruptions while using applications.

The Resource Provider specification defines a set processes which can be deployed to abstract away these complexities and automate the processes, either by providing resources for free or in exchange for a simple fee to cover these costs. This greatly improves the end user experience while still allowing more advanced users to utilize the more complex native resource management systems.

## Architecture

The functionality of a resource provider model depends on 4 independent systems:

- An application, typically using an SDK to automatically perform these requests
- A resource provider, running an API endpoint thats willing to service requests
- An end users wallet/signer, which will authorize the transactions for the user
- The blockchain which will ultimately accept and validate the transaction

An overview of the overall architecture is illustrated in the diagram below.

![logic-flow](https://assets.wharfkit.com/resource-provider.png)

The standard is designed to work with any combination of a supported SDK, a service provider, and optionally enhanced by adoption by the user's wallet/signer. The SDKs can gracefully fail continuing on with the transaction if the service provider fails to respond. The blockchain itself requires no support or knowledge of these processes in order to receive the transaction.

## Specification

The design of a resource provider API endpoint consists of a single endpoint which will respond with one of three types of responses. An application or its SDKs will understand how to perform these requests, a service provider will respond to these requests, and a end users wallet/signer will optionally understand how to best display the metadata around this request.

### API Request

The API listens for POST requests to a specific URL:

```
/v1/resource_provider/request_transaction
```

The POST body of this request will always contain a `signer` for use replacing any placeholder values, as well as one of three different representations of a transaction:

- A [Signing Request](https://github.com/greymass/eosio-signing-request/) payload
- A [PackedTransaction](/docs/antelope/transaction#packedtransaction)
- A [Transaction](/docs/antelope/transaction#transaction-1)

Each of these formats and their request payloads are outlined in the following sections.

#### Signing Request

A signing request payload may be passed as the `request` parameter. Any placeholder values within the request will be replaced with the values from the `signer` as the transaction is resolved.

```json
{
  "signer": {
    "actor": "foo",
    "permission": "active"
  },
  "request": "esr://gmNgZDr3ySrVN7a4ZYEJAxAwMixrMmF-ZRAKZIfr2pw9y6ggKRAp8k3jOkh2xVsjI2uYQMPGiXGxar2nGBkggMXVPxhES0UmViqEZyQWpXlnligqhGQk5mUrVOaXKtgYA41nAAA"
}
```

#### Packed Transaction

A [PackedTransaction](/docs/antelope/transaction#packedtransaction) may be passed as the `packedTransaction` value along with the `signer`. The `signatures` array within the transaction within the packed transaction will be empty since the resource provider will provide the first signature.

```json
{
  "signer": {
    "actor": "foo",
    "permission": "active"
  },
  "packedTransaction": {
    "compression": 0,
    "packed_context_free_data": "00",
    "packed_trx": "14f33a65dd5d82dcd35c000000000100a6823403ea3055000000572d3ccdcd01104208d9c1754de3000000000090b1ca3b104208d9c1754de380b1915e5d268dca010000000000000004454f53000000001a5961792057686172664b697421205468616e6b20796f75203c3300",
    "signatures": []
  }
}
```

#### Transaction

A raw [Transaction](/docs/antelope/transaction#transaction-1) object without signatures may also be passed alongside the `signer` value.

```json
{
  "signer": {
    "actor": "foo",
    "permission": "active"
  },
  "transaction": {
    "expiration": "2021-03-15T17:41:00.000",
    "ref_block_num": 10252,
    "ref_block_prefix": 2061542081,
    "max_net_usage_words": 0,
    "max_cpu_usage_ms": 0,
    "delay_sec": 0,
    "context_free_actions": [],
    "actions": [],
    "transaction_extensions": []
  }
}
```

### API Response

The resource provider API endpoint will respond with one of three potential response types based on business logic it internally defines. Each of these responses have different HTTP response status codes mirrored as both the `code` value in the JSON as well as in the API response headers.

Successful responses will also contain a `data` field which returns a modified transaction as the `request` value and an array of [Signature](/docs/antelope/signature) values as `signatures`. Additional information about any fees applied may also optionally be set in this `data`.

##### Code: 200

This response indicates that the request was successful and the resource provider returned a modified transaction with a valid [Signature](/docs/antelope/signature) without charging a fee. A client or SDK interpreting this response should check the array of actions returned in the `data` to ensure it matches the original transaction and only contains an additional [noop action](/docs/utilities/resource-provider-spec#the-noop-action) and no errant actions.

```json
{
  "code": 200,
  "data": {
    "request": ["transaction", "<transaction data>"],
    "signatures": ["<signature>"]
  }
}
```

##### Code: 400

The 400 response indicates the transaction was rejected by the resource provider and the client or SDK should proceed forward with the transaction as-is. This could occur for any reason, including that the account performing the transaction has sufficient resources of their own or the account has exceeded its usage quote. The `message` field on the response should explain the rationale for the rejection.

```json
{
  "code": 400,
  "message": "<a message about the rejection>",
  "data": {}
}
```

##### Code: 402

A response with the HTTP status code of 402 indicates that the request was successful, but the transaction now includes a transaction fee that must be paid to proceed. The resource provider has modified the transaction to include this fee and additional metadata has been set in the `data` field to explain these charges. The client or SDK should confirm that the costs match the new action(s) in the transaction and potentially prevent the transaction if the fee is too high.

```json
{
  "code": 402,
  "data": {
    "costs": {
      "cpu": "0.0001 TOKEN",
      "net": "0.0010 TOKEN",
      "ram": "0.0100 TOKEN"
    },
    "fee": "0.0111 TOKEN",
    "request": ["transaction", "<transaction data>"],
    "signatures": ["<signature>"]
  }
}
```

### Transaction Modifications

Each successful request to a resource provider API endpoint will modify the original transaction that was submitted. This modification could be for a number of reasons, including:

- A [noop action](/docs/utilities/resource-provider-spec#the-noop-action) was prepended to the actions array to make the resource providers account the [first authorizer](/docs/utilities/resource-provider-spec#only-billing-the-first-authorizer) to cover both CPU and NET resource costs of the transaction.
- A token transfer action using a separate contract was appended to the transaction for the resource provider to collect a fee for the service being provided to the end user.
- A RAM purchase action was appended to the transaction to purchase additional RAM resources from the network that will be allocated to the users account.

Additional transaction modifications not covered here may also be included based on the requirements of the resource provider. The SDKs and clients processing these modified requests can optionally validate these new actions on behalf of the user, to ensure the resource provider meets the standards set by the application developer.

## Use Cases

The Resource Provider specification offers use cases for a number of different types of entities that may which to provide network resources to users of specific applications and/or blockchains.

A few examples of potential use cases are:

- Applications which will cover costs of users performing actions with their smart contract.
- Infrastructure providers who wish to provide services to anyone using a for-profit model.
- Network operators who need to provide limited free resources for any transaction.
- Wallet software to improve UX for their users and create a revenue stream.

The methods defined in this specification have broad potential beyond these use cases defined above and may be implemented by any party in which resource management becomes a barrier to adoption.

## Implementations

The Resource Provider model has been in use now since 2020 utilizing this Revision 1 specification. As this list continues to grow, pull requests to this documentation are welcome to help expand and illustrate its usage throughout the Antelope ecosystem.

### Application/SDKs

A dedicated [TransactPlugin](/docs/session-kit/plugin-transact) has been released for the Wharf [Session Kit](/docs/session-kit) which can be used to automatically request resources for transactions on behalf of any user. This plugin utilizes the API specification outlined in this document to request that transactions be covered by a resource provider.

[https://github.com/wharfkit/transact-plugin-resource-provider](https://github.com/wharfkit/transact-plugin-resource-provider)

This plugin can be added to a project using Wharf by running:

```bash
yarn add @wharfkit/transact-plugin-resource-provider
```

And then including the plugin during the initialization of the Session Kit:

```ts
import { TransactPluginResourceProvider } from "@wharfkit/transact-plugin-resource-provider"

const args = {
  // SessionKit Arguments
}

const options = {
  transactPlugins: [new TransactPluginResourceProvider()],
}

const sessionKit = new SessionKit(args, options)
```

This plugin can be included in any application utilizing Wharf and configured to access a specific resource provider by providing its URL. By default this resource provider plugin defaults to the Fuel API endpoints provided by [Greymass](https://www.greymass.com/products).

### Resource Providers

A number of deployments of following this standard exist within the Antelope ecosystem, many of which are used only for specific applications and some of which are general purpose for any application to make use of.

The general purpose resource providers compatible with all applications are listed below:

- Fuel: Available for EOS, Telos, WAX

Additional service providers will be added as new services come online.

### Wallets

While any wallet/signer can sign these types of transactions, wallets who implement the metadata from the resource providers can display this data to end users to help inform them of the fees being paid and improve the user experience.

The wallets which currently fully support this standard are:

- [Anchor](https://www.greymass.com/anchor)

### Service Examples

An example resource provider service implementation for Revision 1 of the resource provider specification was released to serve illustrate how one might build a service to provide these types of resources.

[https://github.com/greymass/eosio-cosigner-example](https://github.com/greymass/eosio-cosigner-example)

This example contains no business logic, but illustrates how to receive the incoming request, generate a signature, and return an appropriate API response.

## Backwards Compatibility

From a wallet/signer perspective, these transactions are received like any other transaction that requires a signature. Additional metadata may optionally passed from the application to signer to improve UX, but this data is not required for the resource provider model to function.

## Appendix

### The noop action

The term [noop](<https://en.wikipedia.org/wiki/NOP_(code)>) is a computer science term which means "no operation", or an operation that does nothing. On Antelope-based blockchains this is a smart contract action which performs no operations. These actions are often defined in the ABI of a smart contract but no code is written or compiled into the WASM for it.

In the Resource Provider model these noop actions are used to create lightweight actions to prepend into transactions with the explicit purpose of adding a specific authorization for use with the `ONLY_BILL_FIRST_AUTHORIZER` protocol feature.

### Only billing the first authorizer

Antelope-based blockchains have a [protocol feature](https://github.com/EOSIO/eos/issues/6332) named `ONLY_BILL_FIRST_AUTHORIZER` which when enabled changes the network resource billing rules to charge the full cost of a transaction to the first authorizer of the first action. The majority of Antelope-based blockchains have enabled this feature.

The Resource Provider specification utilizes this feature to allow the one specific account to cover the resource costs of the entire transaction, regardless of the other parties involved in the other actions. This is done by prepending a [noop action](/docs/utilities/resource-provider-spec#the-noop-action) into the actions array of the transaction and providing a signature by the party assuming the cost of the resources.
