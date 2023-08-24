---
title: LoginResult
description: The data returned from a call to the login method from the Session Kit.
category: SessionKit
published: true
hidden: true
---

# LoginResult

Upon a successful call to the [Login](/docs/session-kit/login) method of the [SessionKit](/docs/session-kit/session-kit-factory), the response returned will be an object that matches the `LoginResult` interface.

## Properties

The `LoginResult` object contains the following properties:

```ts
interface LoginResult {
  context: LoginContext
  response: WalletPluginLoginResponse
  session: Session
}
```

### context

The [LoginContext](/docs/session-kit/login-context) instance that was used by both the [SessionKit](/docs/session-kit/session-kit-factory) and [LoginPlugins](/docs/session-kit/plugin-login) during the [Login](/docs/session-kit/login) process.

### response

The response data from the [WalletPlugin](/docs/session-kit/plugin-wallet) used during the [Login](/docs/session-kit/login) process.

### session

The [Session](/docs/session-kit/session) created by the [SessionKit](/docs/session-kit/session-kit-factory), based on the end user's choices during the [Login](/docs/session-kit/login) process.
