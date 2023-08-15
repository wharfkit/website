---
title: Logout
description: The logout method of the Session Kit will log out a specific session and remove any persistent data
category: SessionKit
published: true
requiresReview: true
---

# Logout

The `logout` method is made available on the [SessionKit](/docs/sessionkit/session-kit-factory) instance. It is used to remove one or more [Sessions](/docs/sessionkit/session) from [SessionStorage](/docs/sessionkit/session-storage). If an application is also referencing or storing sessions in their own applications state, the removal of those sessions must be done by the application.

## Usage

Given an existing instance of the [SessionKit](/docs/sessionkit/session-kit-factory), the async method `logout` can be called and awaited without any additional parameters to remove all [Sessions](/docs/sessionkit/session).

```ts
await sessionKit.logout()
```

This method returns no data and will only throw errors if a problem occurs.

## Options

An instance of a [Session](/docs/sessionkit/session) may optionally be passed to `logout` in order to selectively remove one session.

```ts
await sessionKit.logout(session)
```
