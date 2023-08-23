---
title: Common Library
description: A library of common tools, types, and data made available throughout the entire Wharf SDK product suite.
category: Utilities
published: true
requiresReview: true
---

# Common

The `@wharfkit/common` is an open-source library that provides shared types and functionality across the Wharf project. It is published on [npmjs.org](https://npmjs.com/package/@wharfkit/common), and is available on [Github](https://github.com/wharfkit/common/). It is automatically included with many Wharf packages and made available as part of their distribution.

Listed below are the components found within this package.

## Chains

```ts
import { Chains } from "@wharfkit/common"
```

The `Chains` constant is a predefined list of known blockchains. Each blockchain stored here contains a completed [ChainDefinition](/docs/utilities/common-library#chaindefinition) that is ready for use in an application. These can be passed in during the initialization of the [Session Kit](/docs/sessionkit) or the Contract Kit.

```ts
const sessionKit = new SessionKit({
  // ...arguments
  chains: [Chains.Jungle4],
})
```

The current list of available blockchains within the `Chains` constant can be found on [Github](https://github.com/wharfkit/common/blob/master/src/common/chains.ts#L67).

## ChainDefinition

```ts
import { ChainDefinition } from "@wharfkit/common"
```

The `ChainDefinition` class is provided to define the information required to describe an Antelope blockchain. It contains identifying information about the network and connection information.

The most basic instantiation of a `ChainDefinition` requires passing the blockchain's ID and the URL of an API it can use to connect with.

```ts
const jungle = ChainDefinition.from({
  id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
  url: "https://jungle4.greymass.com",
})
```

This information will then be typed using [Antelope](/docs/antelope) types and helper functions made available to reference related information.
