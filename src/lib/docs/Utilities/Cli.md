---
title: CLI
description: A Command Line Interface (CLI) tool designed to assist developers building on Antelope blockchains.
category: Utilities
published: true
order: 1
---

# Command Line Tool Overview

A Command Line Interface (CLI) tool designed to assist developers building on Antelope blockchains.

Its primary features are:

- Generation of Contract Kit code for specified Antelope smart contracts.
- Creation of new Antelope blockchain testnet accounts using given or generated keys.
- Generation of Antelope blockchain key pairs.

This application runs using [Node.js](https://nodejs.org/en) and can either be quickly accessed with [npx](https://docs.npmjs.com/cli/v10/commands/npx), or built and installed locally.

This documentation will cover some of the CLI and its features. You can also refer to the `help` command for additional information.

```bash
npx @wharfkit/cli help                                                                                                                                                                                 ✔ 
```

This will outline all commands available for the release being used.

```bash
Usage: npx @wharfkit/cli [options] [command]

Wharf Command Line Utilities

Options:
  -V, --version                 output the version number
  -h, --help                    display help for command

Commands:
  keys                          Generate a new set of public and private keys
  account [options]             Create a new account with an optional public key
  generate [options] <account>  Generate Contract Kit code for the named smart contract
  help [command]                display help for command
```

## Commands

The CLI provides a range of commands tailored for different purposes. This section will introduce the major commands and their functionalities:

### [Generate ContractKit Code](/docs/utilities/generate-type-script-code-command)

The `generate` command is used to create TypeScript code for use in client applications, tailored to a designated Antelope smart contract. The generated code can then be used to interact with the contract in a type-safe manner, provide autocompletion hints for contract data, and serve as an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping).

### [Create Account](/docs/utilities/create-account-command)

With the `account` command, developers can easily create new testnet accounts for development and testing. This process will randomly generate account names and keys for quick access, but also allows additional parameters to be specified to select these values.

### [Generate Keys](/docs/utilities/generate-keys-command)

The `keys` command is designed to randomly create a new pair of public and private keys and output them to the console. These keys are generated locally using the Antelope SDK's [PrivateKey](/docs/antelope/private-key#creating-new-private-keys) generation capabilities.

## Installing Locally

To pull down the source, build, and run locally. You will need to clone down the project:

```bash
git clone git@github.com:wharfkit/cli.git
```

Navigate into the folder and install the dependencies:

```bash
cd cli && yarn
```

The application can now be run using:

```bash
node lib/cli.js
```

And if desired, you can install it globally on your system:

```bash
yarn global add $(pwd)

npm install -g .
```

This will make it so you can run the `wharfkit` command from your command prompt.

To remove this installation in the future, run one of the following:

```bash
yarn global remove @wharfkit/cli

npm uninstall -g @wharfkit/cli
```
