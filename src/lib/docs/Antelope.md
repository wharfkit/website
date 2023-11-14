---
title: Antelope
description: Antelope is a lightweight, modular, and extensible framework for building on Antelope-based blockchains.
category: Antelope
published: true
slug: index
---

# Antelope

The `@wharfkit/antelope` package is a lightweight, modular, and extensible core library that provides the building blocks for Antelope-based blockchains. It serves as the foundation that all other Wharf SDKs are built upon and can be used independently of them.

The primary responsibilities of the Antelope library are to:

- Expose core data types that mirror the native Antelope blockchain platform.
- Offer a serialization engine capable of converting all types to and from binary/hex formats.
- Handle all cryptographic operations required to interact with Antelope-based blockchains.
- Provide both API and P2P client interfaces to connect with and interact with the blockchain networks.

This section of the documentation will provide an overview of all the major tools and types provided by the Antelope library.

## Tools

#### [APIClient](/docs/antelope/api-client)

A utility that provides easy access to retrieve data from native Antelope API endpoints. The APIClient defines the available endpoints, automatically types the response data returned, and in some cases handles serialization to ease the developer experience.

#### [P2PClient](/docs/antelope/p2-p-client)

A utility that allows connectivity and message handling on an Antelope P2P network connection. The P2PClient defines the message types used for communication and offers a wrapper for the native Socket type to automatically handle message serialization.

#### [Serializer](/docs/antelope/serializer)

The tool used to encode and decode blockchain based data based on native types and ABIs. The serializer facilitates the translation of blockchain-based data to and from types that are more easily accessible within Javascript applications.

## Types

#### [ABI](/docs/antelope/abi)

A data format that defines the interface and data types used within a Smart Contract. These ABI types often need to be loaded in order to encode and decode blockchain-based data within a client application using the Serializer.

#### [Action](/docs/antelope/action)

An object that defines a single call against a Smart Contract method. The Action data type used within client side applications typically is used either when creating a transaction with the intent to submit it on-chain, or when retrieving past actions from the blockchain and interpreting the data.

#### [Asset](/docs/antelope/asset)

A token value representation type which defines a specific amount and token symbol. Most account token balances, as well as the transfer actions found within transactions, use this data type to represent the value of the token being used.

#### [Authority](/docs/antelope/authority)

A property associated to a blockchain account that defines requirements to authorize a transaction. This data structure is used internally and is associated to a specific account, and is referenced when confirming the validity of a transaction.

#### [Bytes](/docs/antelope/bytes)

The underlying binary representation of all Antelope-based blockchain data types. This format mirrors the internal data structure used on the blockchain and is used throughout this library for the same purpose. It allows for easy conversion to other formats like UTF-8 or hex.

#### [Checksum](/docs/antelope/checksum)

A collection of different hashing algorithms commonly used in Antelope-based blockchains. These types assist in both the importing and generation of hash values based on the algorithm being used.

#### [Int](/docs/antelope/int)

A family of different Integer types that mirror the native Antelope blockchain C++ patterns. It also provides mathematical helpers to perform operations that mirror those of the blockchain and avoid any oddities typically found in Javascript floating point math.

#### [Name](/docs/antelope/name)

The data type for the human-readable account names used in Smart Contracts.

#### [PermissionLevel](/docs/antelope/permission-level)

A named identifier used to reference and access the authorities of an account.

#### [PrivateKey](/docs/antelope/private-key)

Data formats and tools for creating and utilizing Antelope style private keys.

#### [PublicKey](/docs/antelope/public-key)

The public key formats and conversion tools for Antelope style private keys.

#### [Signature](/docs/antelope/signature)

The cryptographic signature format used in Antelope-based transactions.

#### [Struct](/docs/antelope/struct)

A format used to define additional Antelope data types for use in smart contracts.

#### [Time](/docs/antelope/time)

A collection of data formats to represent different time metrics.

#### [Transaction](/docs/antelope/transaction)

A family of data types that represent Antelope transactions through their lifecycle.
