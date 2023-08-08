---
title: LoginResult
description: change_me
category: SessionKit
published: true
---

# LoginResult

Upon a successful call to the [Login](#) method of the [SessionKit](/docs/sessionkit/session-kit-factory), the response returned will be an object that matches the `LoginResult` interface.

## Properties

The `LoginResult` object contains the following properties.

```ts
interface LoginResult {
  context: LoginContext
  response: WalletPluginLoginResponse
  session: Session
}
```

### context

The [LoginContext](#) instance that was used by both the [SessionKit](/docs/sessionkit/session-kit-factory) and [LoginPlugins](#) during the [Login](#) process.

### response

The response data from the [WalletPlugin](/docs/sessionkit/wallet-plugin) used during the [Login](#) process.

### session

The [Session](/docs/sessionkit/session) created by the [SessionKit](/docs/sessionkit/session-kit-factory) based on the end user choices during the [Login](#) process.
