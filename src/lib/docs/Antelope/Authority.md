---
title: Authority
description: The data representation of an account authority, which defines a collection of keys and accounts alongside a threshold to authorize actions.
category: Antelope
published: true
requiresReview: true
---

# Authority

An `Authority` is a named internal structure within an account that defines the requirements which must be met to authorize an action.

## Anatomy of an Authority

An `Authority` consists of 4 elements. The `keys`, `accounts`, and `waits` arrays contain different types of weighted entities which are valid for the `Authority`. The `threshold` indicates how many of the entities are required to satisfy this authority.

```ts
{
    // Threshold required to satisfy authority
    "threshold": 2,
    // Key-based requirements
    "keys": [
        {
            "key": "EOS6LPN8xGye86wme4PwqN8TSxAfGTQvqBcN5jGnURJPHyqnXqNAR",
            "weight": 1
        }
    ],
    // Account-based requirements
    "accounts": [
        {
            "permission": {
                "actor": "foo",
                "permission": "active"
            },
            "weight": 1
        }
    ],
    // Time-based requirements
    "waits": [
        {
            "wait_sec": 259200,
            "weight": 1
        }
    ]
}
```

Each of the array elements is optional to allow for flexible `Authority` creation.

## Usage

### Creating an Authority

An instance of `Authority` can be created using the static `.from()` method and passing a threshold and at least one type of authority that will satisfy the threshold requirement.

```ts
import { Authority } from "@wharfkit/antelope"

const auth = Authority.from({
  threshold: 1,
  keys: [
    {
      key: "EOS6RrvujLQN1x5Tacbep1KAk8zzKpSThAQXBCKYFfGUYeABhJRin",
      weight: 1,
    },
  ],
})
```

The most typical `Authority` is defined above which is satisfied simply by a signature from a single key. More advanced authorities can be defined by increasing the threshold and appending additional types of entities that can satisfy the threshold. Shown below is an example that requires a signature from a specific key as well as a signature provided that satisfies the `active` authority on the `foo` account.

```ts
import { Authority } from "@wharfkit/antelope"

const auth = Authority.from({
  threshold: 2,
  keys: [
    {
      key: "EOS6RrvujLQN1x5Tacbep1KAk8zzKpSThAQXBCKYFfGUYeABhJRin",
      weight: 1,
    },
  ],
  accounts: [
    {
      permission: {
        actor: "foo",
        permission: "active",
      },
      weight: 1,
    },
  ],
})
```

The `Authority` class will also handle formatting of the object, which has [requirements on sorting of the data](https://github.com/wharfkit/antelope/blob/master/src/chain/authority.ts#L94-L102) that may otherwise trip up developers manually assembling these arrays.

### Working with Authorities

Given an instance of an `Authority` a developer is given access to a number of helper methods to inspect the data.

#### hasPermission

Return a boolean value to indicate whether a specific key has permission to use this Authority.

```ts
import { Authority } from "@wharfkit/antelope"

const auth = Authority.from({
  threshold: 1,
  keys: [
    {
      key: "EOS6RrvujLQN1x5Tacbep1KAk8zzKpSThAQXBCKYFfGUYeABhJRin",
      weight: 1,
    },
  ],
})

authority.hasPermission(
  "EOS6RrvujLQN1x5Tacbep1KAk8zzKpSThAQXBCKYFfGUYeABhJRin"
)

// returns true, key exists and weight >= threshold
```
