---
title: SessionStorage
description: A storage adapter interface to persist Sessions within the SessionKit.
category: SessionKit
published: true
hidden: true
requiresReview: true
---

# SessionStorage

The `SessionStorage` interface is a design pattern that outlines how the [SessionKit](/docs/session-kit/session-kit-factory) will utilize storage. Developers may use this interface to define custom storage engines should the [BrowserLocalStorage](/docs/session-kit/browser-local-storage) included by default not meet the applications needs.

## Anatomy

```ts
/**
 * Interface storage adapters should implement.
 *
 * Storage adapters are responsible for persisting [[Session]]s and can optionally be
 * passed to the [[SessionKit]] constructor to auto-persist sessions.
 */
export interface SessionStorage {
  /**
   * Write string to storage at key.
   *
   * Should overwrite existing values without error.
   */
  write(key: string, data: string): Promise<void>

  /** Read key from storage.
   *
   * Should return `null` if key can not be found.
   */
  read(key: string): Promise<string | null>

  /** Delete key from storage.
   *
   * Should not error if deleting non-existing key.
   */
  remove(key: string): Promise<void>
}
```
