---
title: PermissionLevel
description: change_me
category: Antelope
published: true
requiresReview: true
---

# PermissionLevel

A `PermissionLevel` is a named identifier linked to an [Authority](/docs/antelope/authority) structure on a specific account.

## Anatomy of a PermissionLevel

Each `PermissionLevel` is the combination of two individual [Name](/docs/antelope/name) type properties that together signify a specific account name and permission name.

A permission name can be represented as a string:

```ts
foo@active
```

or as an object:

```ts
{
    actor: "foo",
    permission: "bar",
}
```

Both contain:

1. `actor`: The name of the account
2. `permission`: The name of the permission on the specified account

These two elements combine allowing for the lookup of a specific account and then accessing the named [Authority](/docs/antelope/authority) of the account.

## Usage

Either of the two formats can be passed in to establish an instance of a `PermissionLevel`.

```ts
const test1 = PermissionLevel.from({
  actor: "foo",
  permission: "bar",
})

const test2 = PermissionLevel.from("foo@bar")

assert.equal(test1, test2) // true
```

Once a `PermissionLevel` is instantiated, it can be used to access the various data and output formats.

```ts
const perm = PermissionLevel.from({
  actor: "foo",
  permission: "owner",
})

console.log(String(perm))
// foo@owner

console.log(String(perm.actor))
// foo

console.log(String(perm.permission))
// owner

console.log(perm.actor)
// Name-typed actor object

console.log(perm.permission)
// Name-typed permission object
```

The `PermissionLevel` instance itself can be cast to a string in order to output the shorthand format, while both the `actor` and `permission` properties are available as instances of [Name](/docs/antelope/name) types.
