---
title: CLI Account
description: Create a new Antelope testnet account, optionally providing a public key or account name.
category: Utilities
published: true
order: 3
---

# Create Account

The `account` command allows developers to easily create a new account on an Antelope testnet blockchain. This tool currently only supports the [Jungle 4 Testnet](https://jungletestnet.io/).

## Usage

The command is called using the `account` keyword:

```bash
npx @wharfkit/cli account
```

This will result in a Jungle 4 Testnet account being created with a randomly generated account name and new key pair. All the details of the account will be output in the console.

> **SECURITY WARNING**: Note that by using this command through `npx`, your computer will be automatically downloading and using the latest version of `@wharfkit/cli` and then generating the private key locally. This approach is the easiest, but could be vulnerable to situations that may compromise the keys. Building `@wharfkit/cli` from source, reviewing the dependencies, and running in an isolated/secure environment can improve the security. In most situations these keys will be fine for development purposes, but to securely generate keys that will be associated with anything of real value, please consider using other methods of key generation or an HSM.

> **IMPORTANT**: Save this private key, as it's the only way to access this account. Losing this key will prevent you from accessing this testnet account.

## Options

A number of options may also be specified to select specific values. Any values not provided will be randomly generated.

### Account Name

`-n, --name [accountName]`

The desired name for the new account. It must end with `.gm`.

```bash
npx @wharfkit/cli account -n something.gm
```

### Key

`-k, --key [publicKey]`

The public key for the new account. If omitted, a new pair of keys will be generated.

```bash
npx @wharfkit/cli account -k PUB_K1_6ihbTSzL8oS5YjzpD7pkB48SLLRChnecSz7s619RcPtnaiotci
```

### Chain

`-c, --chain [chain]`

Specifies the Antelope blockchain to create the account on. Defaults to "Jungle4".

```bash
npx @wharfkit/cli account -c Jungle4
```
