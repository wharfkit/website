---
title: Session
description: change_me
category: SessionKit
order: 1
---

# Session

A `Session` instance represents a specific blockchain account and an associated [WalletPlugin](#) it can use to perform transactions using the [Transact](#) method.

## Usage

### Generating a Session

For web applications using the [SessionKit](#), the [login](#) method will generate and return an already configured `Session` instance based on the decisions a user makes in the [UserInterface](#).

### Creating a Session

Sessions can also manually be created for use in scripted environments.

```ts
import { Session } from "@wharfkit/session"

const session = new Session({
  chain: {
    id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
    url: "https://jungle4.greymass.com",
  },
  actor: "wharfkit1111",
  permission: "active",
  walletPlugin: new WalletPluginPrivateKey("5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s"),
})
```

Once you have a session a number of utility methods are available:

## Anatomy

```ts
// APIClient configured for this account/chain
const client = session.client

// The account name
const actor = session.actor

// The account permission
const permission = session.permission

// Sign and broadcast transaction using WalletPlugin
session.transact(transaction)

// Create signature for a given transaction (no broadcast or plugins)
session.signTransaction(transaction)
```

## Purpose

Why

## Reference

- [APIClient](#)
- [Name](#)
- [PermissionLevel](#)
- [Transact](#)
