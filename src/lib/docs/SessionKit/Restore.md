---
title: Restore
description: The restore method of the Session Kit allows the retrieval and use of a persisted Session between uses of an application.
category: SessionKit
published: true
---

# Restore

The `restore` method is made available on the [SessionKit](/docs/session-kit/session-kit-factory) instance. When called, the `SessionKit` instance will access its own [SessionStorage](/docs/session-kit/session-storage) in an attempt to return a valid [Session](/docs/session-kit/session) for the application to use. This method is intended to be used on page load to restore any previous user sessions automatically, or when any form of account switcher that allows the end user to switch between accounts is being used in a multi-account environment.

## Usage

Given an existing instance of the [SessionKit](/docs/session-kit/session-kit-factory), the async method `restore` can be called and awaited without any additional parameters to automatically restore the last active session.

```ts
const session = await sessionKit.restore()
```

The value returned from the `restore` method will be an instance of the [Session](/docs/session-kit/session), ready to use. This usage of the restore method is commonly used on page load to automatically populate the previously active session.

If no session was found, a value of `undefined` will be returned.

## Options

The `restore` method can also optionally accept an object to specify which [Session](/docs/session-kit/session) should be restored.

### Example: Switch Accounts

The `restore` method can also be used in conjunction with the `getSessions()` method provided by the [SessionKit](/docs/session-kit/session-kit-factory) to restore a specific [Session](/docs/session-kit/session). This is a recommended approach in multi-account environments where the application allows the user to actively switch between accounts.

```ts
// Retrieve a list of all sessions that exist
const sessions = await sessionKit.getSessions()

// Use some form of logic or allow the user to pick one
// In this simple example, we just select the first in the array
const selected = sessions[0]

// Pass the selected session to the restore call
const session = await sessionKit.restore(selected)
```

### Example: Specific Chain

In situations where the application has a function to switch blockchains, and the application needs to `restore` for a specific blockchain, the `chain` parameter can be passed in.

```ts
const session = await sessionKit.restore({
  chain: Chains.Jungle4.id,
})
```

The result of this call will be the most recently used [Session](/docs/session-kit/session) for the Jungle 4 blockchain.
