---
title: BrowserLocalStorage
description: The default SessionStorage adapter used by the Session Kit to persist data within applications.
category: SessionKit
published: true
hidden: true
---

# BrowserLocalStorage

The `BrowserLocalStorage` is the default [SessionStorage](/docs/session-kit/session-storage) adapter used by the [SessionKit](/docs/session-kit/session-kit-factory). It is used to persist [Session](/docs/session-kit/session) data in the application and utilizes `localStorage` as the storage medium.

## Usage

By default no action is needed to use `BrowserLocalStorage`, as it is included as the default `storage` value on the [SessionKit](/docs/sessionkit/session-kit-factory).

## Anatomy

The entire implementation for this storage adapter is shown below and can be found [here](https://github.com/wharfkit/session/blob/679d30cbd3fa9195673e25dd9c8f6194575ecdb5/src/storage.ts#L16-L30) in the source code.

```ts
export class BrowserLocalStorage implements SessionStorage {
  constructor(readonly keyPrefix: string = "") {}
  async write(key: string, data: string): Promise<void> {
    localStorage.setItem(this.storageKey(key), data)
  }
  async read(key: string): Promise<string | null> {
    return localStorage.getItem(this.storageKey(key))
  }
  async remove(key: string): Promise<void> {
    localStorage.removeItem(this.storageKey(key))
  }
  storageKey(key: string) {
    return `wharf-${this.keyPrefix}-${key}`
  }
}
```
