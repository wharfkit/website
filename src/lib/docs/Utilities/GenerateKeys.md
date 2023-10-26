---
title: CLI Keys
description: Generate a fresh pair of public and private keys for EOSIO blockchain interactions.
category: Utilities
published: true
order: 3
---

# Generate Keys

The `keys` command lets you produce a new set of public and private keys, which are essential for Antelope blockchain operations, such as account creation, transaction signing, and others.

## Usage

The command is called using the `keys` keyword. Here is a basic example of how to use it:

```bash
npx @wharfkit/cli keys
```

This command will output both the private key and its associated public key.

> **SECURITY WARNING**: Note that by using this command through `npx`, your computer will be automatically downloading and using the latest version of `@wharfkit/cli` and then generating the private key locally. This approach is the easiest, but could be vulnerable to situations that may compromise they keys. Building `@wharfkit/cli` from source, reviewing the dependencies, and running in an isolated/secure environment can improve the security. In most situations these keys will be fine for development purposes, but to securely generate keys that will be associated to anything of real value, please consider using other methods of key generation or an HSM.
