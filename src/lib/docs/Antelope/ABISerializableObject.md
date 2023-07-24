---
category: Antelope
title: ABISerializableObject
description: change_me
published: false
---

ABISerializableObject

```ts
/** Interface that should be implemented by ABI serializable objects. */
export interface ABISerializableObject {
  /** Called when encoding to binary abi format. */
  toABI?(encoder: ABIEncoder): void
  /** Called when encoding to json abi format. */
  toJSON(): any
  /** Return true if the object equals the other object passed. */
  equals(other: any): boolean
}
```
