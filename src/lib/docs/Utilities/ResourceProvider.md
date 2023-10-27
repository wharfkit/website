---
title: Resource Provider Spec
description: A specification to allow 3rd party resource providers to cosign transactions and cover the resource cost of individual transactions.
category: Utilities
published: true
requiresReview: true
---

# Resource Provider Specification

## Overview

### Abstract

A protocol to request an external service to cover the resource costs of an Antelope transaction.

### Summary

The Resource Provider specification provides a workflow, data types, and approaches which applications can use to pay for the network resource costs of a transaction. It introduces a new service provider role in Antelope blockchain ecosystems which allows both arbitrage of resources as well as new methods to improve the user experience. The specification will cover how these technologies and roles combine through the standard, but will not cover any internal business logic service providers may wish to implement.

### Motivation

The Antelope blockchain resource model is a powerful and flexible tool that allows for granular billing of network resources, but is often too much of a burden for the average end user. Users must manually manage their own CPU, NET, and RAM which introduces a complex learning curve. These users are also encouraged to commit more resources than they will typically use to avoid unexpected resource interruptions while using applications.

The Resource Provider specification defines a set processes which can be deployed to abstract away these complexities and automate the processes, either by providing resources for free or in exchange for a simple fee to cover these costs.

## Architecture

The functionality of a resource provider depends on 4 independent systems:

- An application, typically using an SDK to automatically perform these requests
- A resource provider, running an API endpoint thats willing to service requests
- An end users wallet/signer, which will authorize the transactions
- The blockchain which will accept the transaction

An overview of the overall architecture is illustrated in the diagram below.

![logic-flow](https://assets.wharfkit.com/resource-provider.png)

The standard is designed to work with any combination of a supported SDK, a service provider, and optionally enhanced by adoption by the user's wallet/signer. The blockchain itself requires no support or knowledge of these processes in order to receive the transaction.

## Specification

The design of a resource provider API endpoint consists of a single endpoint which will respond with one of three types of responses. An application or its SDKs will understand how to perform these requests, a service provider will respond to these requests, and a end users wallet/signer will optionally understand how to best display the metadata around this request.

### API Request

The API listens for POST requests to a specific URL:

```
/v1/resource_provider/request_transaction
```

The POST body of this request will always contain a `signer` for use replacing any placeholder values, as well as one of three different variants of a transaction.

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

A [PackedTransaction](#) may be passed as the `packedTransaction` value along with the `signer`. The `signatures` array within the transaction will be empty since the resource provider will provide the first signature.

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

A raw [Transaction](#) object without signatures may also be passed alongside the `signer` value.

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

The resource provider API endpoint will respond with one of three potential types based on business logic it internally defines. Each of these responses have different HTTP response status codes mirrored as both the `code` value in the JSON as well as in the API response headers.

Successful responses will also contain a `data` field which returns a modified transaction as the `request` value and an array of [Signature](#) values as `signatures`. Additional information about any fees applied may also optionally be set in this `data`.

##### Code: 200

This response indicates that the request was successful and the resource provider returned a modified transaction with a valid [Signature](#) without charging a fee. A client or SDK interpreting this response should check the array of actions returned in the `data` to ensure it matches the original transaction and only contains an additional [noop action](#) and no errant actions.

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

The 400 response indicates the transaction was rejected by the resource provider and the client or SDK should proceed forward with the transaction as-is. This could occur for any reason, including that the account performing the transaction has sufficient resources of their own or the account has exceeded its usage quote. The `message` field on the response should explain the rationale.

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

## Use Cases

The standard offers use cases for a number of different types of entities that may which to provide network resources to users of specific applications and/or blockchains. A few examples of these potential use cases are:

- Applications which will cover costs of users performing actions with their smart contract.
- Infrastructure providers who wish to provide services to anyone using a for-profit model.
- Network operators who need to provide limited free resources for any transaction.
- Wallet software to improve UX for their users and create a revenue stream.

## Implementations

### Application/SDKs

A [TransactPlugin](#) has been released for the Wharf [Session Kit](#) which can be used to automatically request resources for transactions. This plugin utilizes the API specification outlined in this document to request that transactions be covered by a resource provider.

[https://github.com/wharfkit/transact-plugin-resource-provider](https://github.com/wharfkit/transact-plugin-resource-provider)

This plugin can be dropped in to any application utilizing Wharf, and configured to access a resource provider at a given URL. By default the resource provider plugin defaults to the Fuel API endpoints provided by [Greymass](https://www.greymass.com/products).

### Resource Providers

A number of deployments of following this standard exist within the Antelope ecosystem, many of which are used only for specific applications and some of which are general purpose for any application to make use of. The general purpose resource providers are listed below:

- Fuel: Available for EOS, Telos, WAX

Additional service providers will be added as new services come online.

### Wallets

Wallets who implement the metadata from the resource providers can display this data to end users to help inform them of the fees being paid and improve the user experience. The only wallet currently known that follows this standard and displays fees is [Anchor](https://www.greymass.com/anchor).

### Examples

An example resource provider implementation for Revision 1 of the resource provider specification was released to serve as an example of how one might build a service to provide these types of resources.

[https://github.com/greymass/eosio-cosigner-example](https://github.com/greymass/eosio-cosigner-example)

This example contains no business logic, but illustrates how to receive the incoming request, generate a signature, and return an appropriate API response.

## Backwards Compatibility

From a wallet/signer perspective, these transactions are received like any other transaction that requires a signature. Additional metadata may optionally passed from the application to signer to improve UX, but this data is not required for the resource provider model to function.

## Appendix

### The noop

### Billing First Authorizers

feature

ONLY_BILL_FIRST_AUTHORIZER

https://github.com/EOSIO/eos/issues/6332

### Antelope Transaction Flow

Antelope-based client applications (or dApps) programmatically call smart contract actions which need to be approved by the end users blockchain account.

During this flow between the developer and user can be intercepted

It can then be routed to a 3rd party service provider through an HTTP API endpoint

If this API request fails, the transaction processes as it would without a resource provider and is given to the user to sign, falling back to how Antelope bill transactions normally.

The service provider can interpret the transaction and make a business decision on whether it will cover the resource costs of the transaction.

If the service provider decides to cover these costs, a number of scenarios can unfold.

At the most basic level the service provider can decide to cover the CPU and NET costs of the transaction. It can do adding a [noop action](#) to the transaction and providing a signature for the transaction. This action must be the first action in the transaction to specify [which party in the transaction pays for the resources](#).

This modified transaction along with the signature are then returned in the API response, which can then be validated by the application and passed to the end user for final approval.

If the end user approves the transaction, their signature is combined with that of the resource provider, and the transaction is broadcast to the blockchain.

Using this flow either party, the end user or the resource provider, can refuse to perform the transaction.

The logic for both parties to come to an agreement on a transaction is all done off-chain and the end user gets the final approval.

## Old Intro

This is done by performing logic between when an application requests a transaction and when the user signs it with their preferred wallet/signer. This new logic takes the requested transaction and forwards it to an external service provider, where the provider evaluates the transaction and decides if it will return a new, modified transaction alongside a signature. The modified transaction is then relayed to the users preferred signing interface, where they can accept or reject the transaction.
