---
title: CLI Generate
description: Generates ContractKit code in TypeScript for a specified smart contract on the Antelope blockchain.
category: Utilities
published: true
order: 3
---

# Generate ContractKit Code

The `generate` command is used to create ContractKit code in TypeScript for use in client applications, tailored to a specific Antelope smart contract. It does this by analyzing the [ABI](/docs/antelope/abi) of a contract and then outputs the resulting code either into the console or out to a file.

The resulting code contains:

- All the necessary imports from the [Antelope](/docs/antelope) and [Contract Kit](/docs/contract-kit) libraries.
- A namespace matching the contract exported to contain all of the generated code for use in an application.
- An instance of a [Contract](/docs/contract-kit/contract) that's aware of all the contract's tables and actions.
- Interfaces that define all of the contract [Action](/docs/antelope/action) parameters using [Antelope](/docs/antelope) types.
- An export named `abi` that contains a cached version of the contract's [ABI](/docs/antelope/abi).
- A `Types` export containing all of the [Struct](/docs/antelope/action) definitions for data serialization.

The generated code can then be used to interact with the contract in a type-safe manner, provide autocompletion hints for contract data, and serve as an [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping).

## Usage

The command is called using the `generate` keyword, followed by the name of the contract to generate code for. At a minimum, the API node URL must also be provided using the `--url` (or `-u` for short) option.

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com
```

The above example will generate the ContractKit code for the `eosio` account on the Jungle 4 network.

## Arguments

```bash
npx @wharfkit/cli generate <account> -u <url>
```

- `<account>`: The account name of the contract to generate code for (e.g. `eosio`).
- `-u, --url <url>`: The API URL to use to fetch contract data (e.g. https://jungle4.greymass.com).

## Options

Optional parameters may be passed to the command to control the input and output during code generation.

### Output as File

`-f, --file [filename]`

Specifies the path where the generated file will be saved. If not specified, the file will be logged to the console.

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com -f ./eosio.ts
```

### Use Local ABI

`-j, --json [json]`

The path to a JSON file containing the contract ABI. If not specified, the ABI will be fetched using the provided API node URL.

```bash
npx @wharfkit/cli generate eosio -u https://jungle4.greymass.com -j ./eosio-abi.json
```
