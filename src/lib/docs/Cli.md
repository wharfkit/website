---
title: Cli Tools
description: wharfkit/cli is a Command Line Interface (CLI) tool designed to facilitate key operations on Antelope blockchains.
category: Cli
published: true
slug: index
---

# WharfKit CLI Overview

The wharfkit CLI is a Command Line Interface (CLI) tool designed to facilitate key operations on Antelope blockchains.

It's primary features are:

- Generation of Antelope blockchain key pairs.
- Creation of new Antelope blockchain testnet accounts using given or generated keys.
- Generation of Contract Kit code for specified Antelope smart contracts.

## Commands

The WharfKit CLI provides a range of commands tailored for different purposes. This section will introduce you to the major commands and their functionalities:

### [Generate Keys](/docs/cli/generate-keys-command)

The `keys` command is designed to produce a fresh pair of public and private keys, crucial for Antelope blockchain interactions like account creation and transaction signing.

### [Create Account](/docs/cli/create-account-command)

With the `account` command, users can easily create a new Antelope account. This command offers flexibility, allowing developers to specify their public key and account name or let the WharfKit CLI generate them.

### [Generate Contract](/docs/cli/generate-contract-command)

The `generate` command is employed to produce Contract Kit code tailored for a designated Antelope smart contract. The generated code can then be used to interact with the contract in a type-safe manner.
