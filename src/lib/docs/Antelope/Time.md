---
title: Time
description: change_me
category: Antelope
published: true
requiresReview: true
---

# Time

The `Time` type represents the date format used by the blockchain and contains a number of helpers to convert between Javascript Dates objects and Antelope Time formats.

## Variants

The `Time` set of types has 3 variants, all used at various points within the Antelope stack:

- `BlockTimestamp`: A measure of time from the blockchain genesis used in Antelope block timestamps
- `TimePoint`: A timestamp with millisecond accuracy, used on some API responses like `get_info`
- `TimePointSec`: A timestamp with second accuracy, used in places like a Transaction `expiration`

Each of these can be used in identical ways and will track time in different ways.

## Usage

For the purpose of these examples, the `TimePointSec` variant will be used to illustrate how these `Time` type objects can be used.

### From String

If given a string variant of a time from an API, that string may be passed in using the `.fromString` method.

```ts
import { TimePointSec } from "@wharfkit/antelope"

const time = TimePointSec.from("2023-10-04T00:35:46.000")
```

### From Milliseconds

A timestamp can also be used to establish any of the `Time` type objects.

```ts
import { TimePointSec } from "@wharfkit/antelope"

const time = TimePointSec.fromMilliseconds(Date.now())
```

### To Date

A `Time` object can also be used to automatically create and return a Javascript Date object.

```ts
import { TimePointSec } from "@wharfkit/antelope"

const time = TimePointSec.from("2023-10-04T00:35:46.000")

const date = time.toDate()
```

### Equality

Any `Time` objects can also be compared to one another using the `.equals()` helper [found on all Antelope types](/docs/antelope/getting-started#equality).
