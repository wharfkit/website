---
title: CLI Generate
description: Generates Contract code for a specified smart contract on the Antelope blockchain.
category: Utilities
published: true
order: 3
---

# Generate TypeScript Code

The `generate` command is used to create TypeScript code for use in client applications tailored for a specific Antelope smart contract. It does this by analyzing the [ABI](/docs/antelope/abi) of a contract and then outputs the resulting code in either the console or out to a file.

The resulting code contains:

- All the necessary imports from the [Antelope](/docs/antelope) and [Contract Kit](/docs/contract-kit) libraries.
- A namespace matching the contract exported to contain all of the generated code for use in an application.
- An instance of a [Contract](/docs/contract-kit/contract) that's aware of all the contracts tables and actions.
- Interfaces that define all of the contract [Action](/docs/antelope/action) parameters using [Antelope](/docs/antelope) types.
- An export named `abi` that contains a cached version of the contract's [ABI](/docs/antelope/abi).
- A `Types` export containing all of the [Struct](/docs/antelope/action) definitions for data serialization.

The generated code can then be used to interact with the contract in a type-safe manner, provide autocompletion hints for contract data, and serve as an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping).

## Usage

The command is called using the `generate` keyword, followed by the name of the contract to generate code for. At a minimum, the API node URL must be also provided using the `--url` (or `-u` for short) option. Here is a basic example of how to use the command:

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com
```

To specify the path where the generated file will be saved, use the `--file` (or `-f` for short) option:

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com -f ./eosio.ts
```

To specify a JSON file containing the contract ABI, use the `--json` (or `-j` for short) option:

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com -j ./eosio-abi.json
```

## Arguments

- `<account>`: The account name of the contract to generate code for.
- `-u, --url <url>`: The API URL to use to fetch contract data (e.g. https://jungle4.greymass.com).

## Options

- `-f, --file [filename]`: Specifies the path where the generated file will be saved. If not specified, the file will be logged to the console.
- `-j, --json [json]`: The path to a JSON file containing the contract ABI. If not specified, the ABI will be fetched using the provided API node URL.
