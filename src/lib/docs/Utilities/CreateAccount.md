---
title: Create Account (Command)
description: Create a new Antelope testnet account, optionally providing a public key.
category: Utilities
hidden: true
published: true
order: 3
---

# Create Account

The `account` command allows developers to quickly create a new account on an Antelope testnet blockchain.

## Usage

The command is called using the `account` keyword. Here is a basic example that will create a new Jungle 4 account with a random name and a new key pair:

```bash
wharfkit account
```

To specify the name of the account to create, the `--name` (or `-n` for short) option can be used:

```bash
wharfkit account -n wharfkit1112
```

To specify the public key for the account, the `--key` (or `-k` for short) option can be used:

```bash
wharfkit account -k PUB_K1_6ihbTSzL8oS5YjzpD7pkB48SLLRChnecSz7s619RcPtnaiotci
```

To specify the chain to create the account on, the `--chain` (or `-c` for short) option can be used:

```bash
wharfkit account -c Jungle4
```

## Options

- `-n, --name [accountName]`: The desired name for the new account. It must end with `.gm`. If not provided, a random name is generated.
- `-k, --key [publicKey]`: The public key for the new account. If omitted, a new pair of keys will be generated.
- `-c, --chain [chain]`: Specifies the Antelope blockchain to create the account on. Defaults to "jungle4".
