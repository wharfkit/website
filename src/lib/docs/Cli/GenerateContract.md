---
title: Generate Contract (Command)
description: Generates Contract code for a specified smart contract on the Antelope blockchain.
category: Cli
published: true
order: 2
---

# Generate Contract Kit

The `generate` command is employed to produce [Contract Kit](/docs/contract-kit) [Contract](/docs/contract-kit/contract) classes that are specific to a given Antelope blockchain smart contract. The generated code can then be used to interact with the contract in a type-safe manner.

## Usage

The command is called using the `generate` keyword, followed by the name of the contract to generate code for. At a minimum, the API node URL must be also provided using the `--url` (or `-u` for short) option. Here is a basic example of how to use the command:

```bash
wharfkit generate eosio -u https://jungle4.greymass.com
```

To specify the path where the generated file will be saved, use the `--file` (or `-f` for short) option:

```bash
wharfkit generate eosio -u https://jungle4.greymass.com -f ./eosio.ts
```

To specify a JSON file containing the contract ABI, use the `--json` (or `-j` for short) option:

```bash
wharfkit generate eosio -u https://jungle4.greymass.com -j ./eosio-abi.json
```

## Arguments

- `<account>`: The account name of the contract to generate code for.
- `-u, --url <url>`: The API URL to use to fetch contract data (e.g. https://jungle4.greymass.com).

## Options

- `-f, --file [filename]`: Specifies the path where the generated file will be saved. If not specified, the file will be logged to the console.
- `-j, --json [json]`: The path to a JSON file containing the contract ABI. If not specified, the ABI will be fetched using the provided API node URL.
