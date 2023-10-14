---
title: ContractKit Overview
description: The ContractKit is a Software Development Kit that provides a simple interface for interacting with smart contracts on Antelope-based blockchains.
category: ContractKit
order: 2
published: true
slug: index
---

# Contract Kit Overview

Another of Wharf's major components is the Contract Kit, an SDK focused on managing and interacting with Antelope-based smart contracts.

It's primary responsibilities are:

- To facilitate the creation of actions to interact with smart contracts.
- To provide a simple interface for retrieving data from smart contract tables.

This section of the documentation offers a technical overview of all of the components surfaced by the Contract Kit. For step-by-step guides and tutorials, please visit the [Contract Kit Guides](/guides/contract-kit).

## Classes

The Contract Kit exports many classes for use in various types of applications. This page provides a brief overview of the major components, each of which link to their own individual documentation.

### [ContractKit](/docs/contract-kit/contract-kit)

The core component of Wharf's Contract Kit is named after the SDK itself and offers itself as a customizable [factory class](https://refactoring.guru/design-patterns/factory-method). The [ContractKit](/docs/contract-kit/contract-kit) gives developers methods to dynamically create [Contract](/docs/contract-kit/contract) instances.

### [Contract](/docs/contract-kit/contract)

Developers working with the Contract Kit will primarily be working with [Contract](/docs/contract-kit/contract) instances, whether created by the [ContractKit](/docs/contract-kit/contract-kit) factory `load` method or included through generated code from the command line interface. A [Contract](/docs/contract-kit/contract) instance is a wrapper for a specific smart contract on an Antelope-based blockchain. Each `Contract` instance offers a [table method](/docs/contract-kit/table-method) that allows [Table](/docs/contract-kit/table-class) to be created and an [action method](/docs/contract-kit/action-method) that allows [Action](#) instances to be created.

### [Table](/docs/contract-kit/table-class)

The [Table](/docs/contract-kit/table-class) class is a wrapper for Antelope smart contract tables. It offers several helper methods such as [get](#) and [query](#) to help retrieve table rows without needing to manually define every query for an API. Each response from a table method will either return a typed object that mirrors the structure defined in the [ABI](#) or a [TableCursor](#) that allows iteration through many rows.
