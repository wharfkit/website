---
title: Session
description: change_me
category: SessionKit
order: 1
published: true
---

# Session

Each `Session` class instance represents a specific blockchain account with an associated [WalletPlugin](#) that can be used to perform transactions using the [transact](#) method. It can also be used to access information about the account related to the session and to help automatically template API calls.

## Usage

### Creating a Session

Sessions can also manually be created for use in scripted environments.

```ts
import { Session } from "@wharfkit/session"

const args = {
  chain: {
    id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
    url: "https://jungle4.greymass.com",
  },
  actor: "wharfkit1111",
  permission: "active",
  walletPlugin: new WalletPluginPrivateKey("5Jtoxgny5tT7NiNFp1MLogviuPJ9NniWjnU4wKzaX4t7pL4kJ8s"),
}

const options = {
  // Additional options
}

const session = new Session(args, options)
```

### Generating a Session

For web applications using the [SessionKit](#), the [login](#) method will generate and return an already configured `Session` instance based on the decisions a user makes in the [UserInterface](#).

## Related Materials

### Guides

- [Getting started: Web Apps](/guides/sessionkit/getting-started-web-app)
- [Getting started: Node.js](/guides/sessionkit/getting-started-node-js)
