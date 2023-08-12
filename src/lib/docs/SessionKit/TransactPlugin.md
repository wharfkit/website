---
title: "Plugin: Transact"
description: change_me
category: SessionKit
published: true
order: 999
---

# TransactPlugin

The `TransactPlugin` is a type of plugin for the [Session Kit](/docs/sessionkit) that allows custom logic to be performed while a transaction is being processed in a [Transact](/docs/sessionkit/transact) call. These plugins can be developed either for a specific applications needs or built generically and released publicly as packages any application can use.

## Usage

For application developers that wish to use a `TransactPlugin` in their application, the plugin code needs to be included in the project and then passed to either the [SessionKit](/docs/sessionkit/session-kit-factory) factory, directly to an individual [Session](/docs/sessionkit/session), or included as part of a [Transact](/docs/sessionkit/transact) call.

### SessionKit

Passing a `TransactPlugin` to the options parameter of the [SessionKit](/docs/sessionkit/session-kit-factory) during instantiation causes every [Session](/docs/sessionkit/session) it creates to automatically use the specified plugin. In the example below, each session that is the result of the [Login](/docs/sessionkit/login) call will automatically inherit and use the specified plugin.

```ts
import { TransactPluginResourceProvider } from "@wharfkit/transact-plugin-resource-provider"

const sessionKit = new SessionKit(
  {
    // ...arguments
  },
  {
    transactPlugins: [new TransactPluginResourceProvider()],
  }
)

// This Session returned will inherit and use the plugin
const result = await sessionKit.login()
```

### Session

A `TransactPlugin` instance can also be passed as an option to a [Session](/docs/sessionkit/session) during manual creation.

```ts
import { TransactPluginResourceProvider } from "@wharfkit/transact-plugin-resource-provider"

const session = new Session(
  {
    // ...arguments
  },
  {
    transactPlugins: [new TransactPluginResourceProvider()],
  }
)
```

### Transact

During an individual [Transact](/docs/sessionkit/transact) call, a `TransactPlugin` can also be passed to only execute during that call.

```ts
import { TransactPluginResourceProvider } from "@wharfkit/transact-plugin-resource-provider"

const result = await session.transact(
  {
    // ...arguments
  },
  {
    transactPlugins: [new TransactPluginResourceProvider()],
  }
)
```

## Development

The `TransactPlugin` interface and `AbstractTransactPlugin` abstract class are tools for developers to create plugins for the [SessionKit](/docs/sessionkit/session-kit-factory). These plugins register custom logic through the use of hooks which are performed at specific points during the [Transact](/docs/sessionkit/transact) call.

The [transact-plugin-template](https://github.com/wharfkit/transact-plugin-template) is available as a template on Github to help developers get started.

### Structure

When building a `TransactPlugin`, the shape of the plugin can either be a Javascript class or a simple object that conforms to the interface.

```ts
interface TransactPlugin {
  /** A URL friendly (lower case, no spaces, etc) ID for this plugin */
  get id(): string
  /** A function that registers hooks into the transaction flow */
  register: (context: TransactContext) => void
}
```

Examples implementing this pattern can be seen below as both a class and as an object.

#### Class

```ts
// Import the hook types
import { TransactHookTypes } from "@wharfkit/session"

// Create a class that extends AbstractTransactPlugin
export class TransactPluginTemplate extends AbstractTransactPlugin {
  id = "example-plugin"

  register(context) {
    context.addHook(TransactHookTypes.beforeSign, this.exampleHook)
  }

  // Establish the logic that needs to be performed as a hook
  async exampleHook(request) {
    console.log("Executing custom logic!")
    return {
      request,
    }
  }
}

// Perform a transaction and watch the hook execute
const result = session.transact(
  {
    // arguments
  },
  {
    transactPlugins: [new TransactPluginTemplate()],
  }
)
```

#### Object

```ts
// Import the hook types
import { TransactHookTypes } from "@wharfkit/session"

// Establish the logic that needs to be performed as a hook
const exampleHook = async (request) => {
  console.log("Executing custom logic!")
  return {
    request,
  }
}

// Create an object shaped like a TransactPlugin
const examplePlugin = {
  id: "example-plugin",
  register(context) {
    // Register the hook to the appropriate point in the transaction lifecycle
    context.addHook(TransactHookTypes.beforeSign, exampleHook)
  },
}

// Perform a transaction and watch the hook execute
const result = session.transact(
  {
    // arguments
  },
  {
    transactPlugins: [examplePlugin],
  }
)
```

### Register

At the core of a `TransactPlugin` is the `register` method, which is responsible for registering custom logic at specific points in the transaction lifecycle through the use of hooks. This `register` call is made available to the plugin through the [TransactContext](/docs/sessionkit/transact-context) provided as `context`.

```ts
register(context) {
  context.addHook(TransactHookTypes.beforeSign, exampleHook)
}
```

### Hooks

The transaction lifecycle currently has 3 points which hooks can be established.

- `beforeSign`: Occurs before the transaction is signed by the [WalletPlugin](/docs/sessionkit/plugin-wallet).
- `afterSign`: Occurs after the transaction is signed and before it is broadcast to the network.
- `afterBroadcast`: Occurs after the transaction is broadcast.

These types are provided by the exported `TransactHookTypes` enumeration. Each hook type is either a mutable hook or an immutable hook, based on where in the lifecycle the hook is executed.

```ts
interface TransactHooks {
  afterSign: TransactHookImmutable[]
  beforeSign: TransactHookMutable[]
  afterBroadcast: TransactHookImmutable[]
}
```

#### Mutable Hooks

The `beforeSign` hook is a `TransactHookMutable` and is able to modify the transaction during while it's processing its internal logic.

```ts
type TransactHookMutable = (
  request: SigningRequest,
  context: TransactContext
) => Promise<TransactHookResponse | void>
```

The first parameter of a `TransactHookMutable` is the `request` value, which is an instance of a [SigningRequest](#) and represents the transaction at that point in the transaction lifecycle. The second parameter is the `context` which is the [TransactContext](/docs/sessionkit/transact-context) instance that was established to represent the state of the current transaction and provide methods to assist in interpreting the request.

The hook function must either return nothing, or return an object that matches the [TransactHookResponse](https://wharfkit.github.io/session/interfaces/TransactHookResponse.html) interface. This requires that it pass back a `request` value, which can either be modified or simply pass back the `request` value it received. This response may also optionally pass back an array of signatures, if the plugin itself was responsible for appending signatures to this upcoming transaction.

An example of a mutable hook is as follows:

```ts
async function beforeSignHook(request, context) {
  // perform logic
  return {
    request,
    signatures: [], // optional
  }
}
```

#### Immutable Hooks

The `afterSign` and `afterBroadcast` hooks are the type of `TransactHookImmutable` and can no longer modify the request.

```ts
type TransactHookImmutable = (
  result: TransactResult,
  context: TransactContext
) => Promise<void>
```

The first parameter of a `TransactHookImmutable` is the `result` value and is an instance of [TransactResult](/docs/sessionkit/transact-result) that contains information about the results of a transaction up until that point in time. The second is the `context` which is the [TransactContext](/docs/sessionkit/transact-context) instance that was established to represent the state of the current transaction and provide methods to assist in interpreting the request.

These hooks do not need to return anything, and anything they return will be ignored.

An example of an immutable hook is as follows:

```ts
async function afterSignHook(result, context) {
  // perform logic
}
```

## Examples

Beyond the [transact-plugin-template](https://github.com/wharfkit/transact-plugin-template) template to serve as an example codebase, a number of [open source plugins](https://github.com/orgs/wharfkit/repositories?q=transact-plugin&type=all&language=&sort=) can also reviewed to observe how these plugins can be built.
