---
title: WebRenderer
description: An out of the box interface for use with the Session Kit to facilitate interactions with users of an application
category: SessionKit
published: true
requiresReview: true
---

# WebRenderer

The `WebRenderer` is a prebuilt instance of a [UserInterface](/docs/sessionkit/plugin-user-interface) that is included in the Wharf product suite. It can be included in a project to provide a base user experience for processes in web applications that require user interactivity. The full source code for the `WebRenderer` can be found on [Github](https://github.com/wharfkit/web-renderer).

## Installing

```bash
yarn add @wharfkit/web-renderer
```

## Usage

When instantiating the [SessionKit](/docs/sessionkit/session-kit-factory), the `WebRenderer` can be passed in through the `ui` field.

```ts
import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"

const sessionKit = new SessionKit({
  // ...arguments
  ui: new WebRenderer(),
})
```
