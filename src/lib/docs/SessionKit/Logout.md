---
title: Logout
description: The logout method of the Session Kit will log out a specific session and remove any persistent data
category: SessionKit
published: true
requiresReview: true
---

# Logout

The `logout` method is made available on the [SessionKit](/docs/session-kit/session-kit-factory) instance. It is used to remove one or more [Sessions](/docs/session-kit/session) from [SessionStorage](/docs/session-kit/session-storage). If an application is also referencing or storing sessions in their own applications state, the removal of those sessions must be done by the application.

## Usage

Given an existing instance of the [SessionKit](/docs/session-kit/session-kit-factory), the async method `logout` can be called and awaited without any additional parameters to remove all [Sessions](/docs/session-kit/session).

```ts
await sessionKit.logout()
```

This method returns no data and will only throw errors if a problem occurs.

## Options

An instance of a [Session](/docs/session-kit/session) may optionally be passed to `logout` in order to selectively remove one session.

```ts
await sessionKit.logout(session)
```
