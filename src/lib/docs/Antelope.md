---
title: Antelope
description: Antelope is a lightweight, modular, and extensible framework for building
category: Antelope
published: true
slug: index
requiresReview: true
---

# Antelope

The `@wharfkit/antelope` package is a lightweight, modular, and extensible core library that provides the building blocks for Antelope-based blockchains. It serves as the foundation for which all other Wharf SDKs are built upon and can be used independently of them.

The primary responsibilities of the Antelope library are to:

- Expose core data types that mirror the native Antelope blockchain platform
- Offer a serialization engine capable of converting all types to and from binary/hex formats
- Handle all cryptographic operations required to interact with Antelope-based blockchains
- Provide both API and P2P client interfaces to connect with and interact with the blockchain networks

This section of the documentation will provide an overview of all the major tools and types provided by the Antelope library.

## Tools

### [APIClient](https://localhost:5173/docs/antelope/api-client)

A utility that provides easy access to retrieve data from native Antelope API endpoints.

### [P2PClient](https://localhost:5173/docs/antelope/p2-p-client)

A utility that allows connectivity and message handling on an Antelope P2P network connection.

### [Serializer](https://localhost:5173/docs/antelope/serializer)

The tool used to encode and decode blockchain based data based on native types and ABIs.

## Types

### [ABI](https://localhost:5173/docs/antelope/abi)

A data format that defines the interface and data types used within a Smart Contract.

### [Action](https://localhost:5173/docs/antelope/action)

An object that defines a single call against a Smart Contract method.

### [Asset](https://localhost:5173/docs/antelope/asset)

A token value representation type which defines a specific amount and token symbol.

### [Authority](https://localhost:5173/docs/antelope/authority)

A property associated to a blockchain account that defines requirements to authorize a transaction.

### [Bytes](https://localhost:5173/docs/antelope/bytes)

The underlying binary representation of all Antelope-based blockchain data types.

### [Checksum](https://localhost:5173/docs/antelope/checksum)

A collection of different hashing algorithms commonly used in Antelope-based blockchains.

### [Int](https://localhost:5173/docs/antelope/int)

A family of different Integer types and mathematical operations that mirror the Antelope C++ patterns.

### [Name](https://localhost:5173/docs/antelope/name)

The data type for the human-readable account names used in Smart Contracts.

### [PermissionLevel](https://localhost:5173/docs/antelope/permission-level)

A named identifier used to reference and access the authorities of an account.

### [PrivateKey](https://localhost:5173/docs/antelope/private-key)

Data formats and tools for creating and utilizing Antelope style private keys.

### [PublicKey](https://localhost:5173/docs/antelope/public-key)

The public key formats and conversion tools for Antelope style private keys.

### [Signature](https://localhost:5173/docs/antelope/signature)

The cryptographic signature format used in Antelope-based transactions.

### [Struct](https://localhost:5173/docs/antelope/struct)

A format used to define additional Antelope data types for use in smart contracts.

### [Time](https://localhost:5173/docs/antelope/time)

A collection of data formats to represent different time metrics.

### [Transaction](https://localhost:5173/docs/antelope/transaction)

A family of data types that represent Antelope transactions through their lifecycle.
