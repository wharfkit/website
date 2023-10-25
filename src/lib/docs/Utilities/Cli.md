---
title: Command Line Tools
description: A Command Line Interface (CLI) tool designed to assist developers building on Antelope blockchains.
category: Utilities
published: true
---

# CLI Overview

A Command Line Interface (CLI) tool designed to assist developers building on Antelope blockchains.

It's primary features are:

- Generation of Contract Kit code for specified Antelope smart contracts.
- Creation of new Antelope blockchain testnet accounts using given or generated keys.
- Generation of Antelope blockchain key pairs.

## Commands

The CLI provides a range of commands tailored for different purposes. This section will introduce you to the major commands and their functionalities:

### [Generate Contract](/docs/utilities/generate-contract-command)

The `generate` command is employed to produce Contract Kit code tailored for a designated Antelope smart contract. The generated code can then be used to interact with the contract in a type-safe manner.

### [Create Account](/docs/utilities/create-account-command)

With the `account` command, users can easily create a new testnet account for development and testing. This command offers flexibility allowing developers to specify their public key and account name or let the tool itself randomly generate these values.

### [Generate Keys](/docs/utilities/generate-keys-command)

The `keys` command is designed to quickly create a fresh pair of public and private keys, crucial for Antelope blockchain interactions like account creation and transaction signing.
