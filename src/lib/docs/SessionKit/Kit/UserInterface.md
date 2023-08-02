---
title: UserInterface
description: change_me
category: SessionKit
order: 1
---

# UserInterface

An instance of a `UserInterface` is required for the [SessionKit](#) and is responsible for rendering out information to the end user and facilitating interaction when required. The [SessionKit](#) does this by exporting an interface named `UserInterface`, which defines the patterns used for interactions during the [login](#) and [transact](#) method calls.

## Usage

A typical developer will never make calls directly against the `UserInterface`, with the exception being developers who:

1. Create any type of [Plugin](#), such as [LoginPlugin](#), [TransactPlugin](#), or [WalletPlugin](#) packages
2. Create a custom `UserInterface` instance for inclusion in the [SessionKit](#)

All developers who are building interactive applications will however be required to include an instance of a `UserInterface` to the [SessionKit](#) during instantiation, an example of which is below:

```ts
import { SessionKit } from "@wharfkit/session"
import { WebRenderer } from "@wharfkit/web-renderer"
import { WalletPluginAnchor } from "@wharfkit/wallet-plugin-anchor"

const sessionKit = new SessionKit({
  appName: "myapp",
  chains: [
    {
      id: "73e4385a2708e6d7048834fbc1079f2fabb17b3c125b146af438971e90716c4d",
      url: "http://jungle4.greymass.com",
    },
  ],
  ui: new WebRenderer(), // <-- An instance of a `UserInterface`
  walletPlugins: [new WalletPluginAnchor()],
})
```

Wharf maintains and distributes a core package called the [WebRenderer](#) that acts as a default implementation of a `UserInterface`. More details about this implementation on the [WebRenderer](#) documentation or on the [Github](https://github.com/wharfkit/web-renderer) repository.

## Purpose

The `UserInterface` is primarily responsible for two major aspects of the [SessionKit](#), **communication** of information to the user and **prompting** of user interactions. These responsibilities are carried out through various other components, including:

- During calls to the [login](#) and [transact](#) methods of the [SessionKit](#)
- During interactions with the active [WalletPlugin](#)
- While processing [hooks](#) defined by [LoginPlugin](#) or [TransactPlugin](#) packages

**Communication**

During [SessionKit](#) operations, there is often benefit to providing the end user with status updates and information about transaction activity. The `UserInterface` defines multiple event-based methods in which external operations are able to call out to the user interface to provide relevant information to the user.

**Interactions**

The interaction between the end user and the [SessionKit](#) are facilitated by the `UserInterface` through a number of predefined events and method calls. During these interactions, the [SessionKit](#) will trigger asynchronous operations against the `UserInterface` while waiting for the user's response before proceeding.

## Specification

The remainder of this document will target advanced developers who wish to further customize the [SessionKit](#) through the creation of a custom `UserInterface` for use in applications. For developers looking for information about utilizing an existing `UserInterface` instance from within a [Plugin](#), please refer to the [Plugin Development](#) section of the documentation.

### Concepts

A developer who is creating a custom `UserInterface` instance will need to understand:

- The [Architecture](#) design to integrate with the [SessionKit](#) and various [Plugins](#)
- The [Life Cycle](#) events and methods for [Login](#) and [Transact](#)
- The [Prompt](#) method and how to facilitate interactivity
- The [Translation](#) interface to allow localization of the UI
- The [Logging](#) and [Error Handling](#) events

A full example of how a `UserInterface` can be implemented can be found in the [WebRenderer](#) package.

### Architecture

The `UserInterface` components of the [SessionKit](#) are designed with inheritance in mind to optionally allow developers to extend existing core code in order to more effectively build custom implementations. This inheritance structure can roughly be viewed as:

```
DefinedUserInterface (e.g. WebRenderer)
↳ extends AbstractUserInterface
 ↳ implements UserInterface
```

The `UserInterface` ([docs](https://wharfkit.github.io/session/interfaces/UserInterface.html)) is defined as an interface with the data structures that the [SessionKit](#) requires in order to function. One layer above this is an `AbstractUserInterface` ([docs](https://wharfkit.github.io/session/classes/AbstractUserInterface.html)) declared as an abstract class from which complete implementations may extend in order to inherit base functionality.

### Life Cycle

Wharf through the Session Kit currently has two major life cycle processes in which the `UserInterface` is utilized:

1. The [login](#) call on an instance of the [SessionKit](#)
2. The [transact](#) call on an individual [Session](#)

When developers make calls to these methods in their applications, a life cycle event is started and a [context](#) object is spawned for its duration. This [context](#) contains an instance of the `UserInterface`, which the [SessionKit](#) and various [Plugins](#) may call to interact with the user.

#### Login

When an application calls the [login](#) method of the [SessionKit](#) a series of events is triggered against an implemented `UserInterface` and its methods.

Listed below are all of the methods this sequence will call in chronological order.

##### onLogin

```ts
onLogin: () => Promise<void>
```

Immediately upon the developer's call to [login](#) against the [SessionKit](#), the `onLogin` call is made against the `UserInterface`. This call passes no data to the interface and expects no response, but gives the opportunity to the `UserInterface` to prepare itself for the incoming `login` call.

This time can be used to prepare UI elements (in DOM or other mediums) before any actual user interaction.

##### login

```ts
login(context: LoginContext): Promise<UserInterfaceLoginResponse>
```

After initial processing has been completed by the [SessionKit](#), the `login` method of the given `UserInterface` is called. The [SessionKit](#) will pass in an instance of a [LoginContext](#) to the `UserInterface` to provide information about the request and how to interact with the user. This information will include which [WalletPlugin](#) instances are available and any metadata values the application developer has defined.

This data will be used in order to facilitate a number of scenarios based on the various capabilities of the [WalletPlugin](#) instances in use:

1. Prompt the user to select a [WalletPlugin](#), if multiple are provided and it was not defined during the [login](#) call.
2. Prompt the user to select a blockchain, if multiple are provided and the selected [WalletPlugin](#) has [requiresChainSelect](https://wharfkit.github.io/session/interfaces/WalletPluginConfig.html#requiresChainSelect) set to `true`. If the [WalletPlugin](#) also has an array of `supportedChains` defined, the list of available chains must be filtered down to match this list.
3. Prompt the user to enter an account name manually, if the selected [WalletPlugin](#) has [requiresPermissionEntry](https://wharfkit.github.io/session/interfaces/WalletPluginConfig.html#requiresPermissionEntry) set to `true`.
4. Prompt the user to select a permission associated to a [PublicKey](#), if the selected [WalletPlugin](#) has [requiresPermissionSelect](https://wharfkit.github.io/session/interfaces/WalletPluginConfig.html#requiresPermissionSelect) set to `true`.

The [SessionKit](#) will await a response from the `UserInterface` conforming to the [UserInterfaceLoginResponse](#) pattern or until an `Error` is thrown.

##### onLoginComplete

```ts
onLoginComplete: () => Promise<void>
```

After the [WalletPlugin](#) successfully completes its login operations, the [SessionKit](#) will issue the `onLoginComplete` call against the `UserInterface`, which gives it the opportunity to reset itself and perform any clean-up required.

#### Transact

When an application calls the [transact](#) method on a [Session](#), a series of events is triggered against an implemented `UserInterface` and its methods.

Listed below are all of the methods this sequence will call in chronological order.

##### onTransact

```ts
onTransact: () => Promise<void>
```

Immediately upon the developer's call to [transact](#) against the [SessionKit](#), the `onTransact` call is made against the `UserInterface`. This call, similar to `onLogin`, passes no data and expects no specific response, but gives the implemented user interface time to prepare for the incoming request.

##### onSign

```ts
onSign: () => Promise<void>
```

After any included [TransactPlugin](#) instances have had their opportunity to process their [beforeSign](#) hooks, the `onSign` call is made to the user interface to indicate that the transaction is about to be signed by the [WalletPlugin](#).

##### onSignComplete

```ts
onSignComplete: () => Promise<void>
```

Following a successful call to the [WalletPlugin](#) to sign the transaction and all [TransactPlugin](#) instances have executed their [afterSign](#) hooks, the `onSignComplete` call is made to indicate a signature has been retrieved.

##### onBroadcast

```ts
onBroadcast: () => Promise<void>
```

If the [transact](#) call has the default flag of `broadcast: true`, the `onBroadcast` call is made to the user interface as it prepares to broadcast the transaction to the network.

Note that if the `broadcast: false` flag is set, this event will not be called.

##### onBroadcastComplete

```ts
onBroadcastComplete: () => Promise<void>
```

Following a successful call to broadcast the transaction and execution of the [TransactPlugin](#) instances [afterBroadcast](#) hooks, the `onBroadcastComplete` call is made to indicate that the transaction has been successfully broadcast to the designated blockchain.

Note that if the `broadcast: false` flag is set, this event will not be called.

##### onTransactComplete

```ts
onTransactComplete: () => Promise<void>
```

Upon success of the entire [transact](#) life cycle flow, the `onTransactComplete` call is made to indicate to the `UserInterface` that this transaction has now completed. Any cleanup operations required by the user interface itself can now be called.

### Prompt

Outside of the event-driven life cycle methods above, one of the most important abilities a `UserInterface` provides is for [Plugins](#) to interact with users. This is done using the `prompt` call made available through the [context](#) given to every [plugin](#) to either display information or await some form of user interaction.

Examples of instances where `prompt` may be called are:

- A [WalletPlugin](#) during the [login](#) and [transact](#) calls
- A [LoginPlugin](#) during the [login](#) call
- A [TransactPlugin](#) during the [transact](#) call

Each [plugin](#) that makes the call needs to provide arguments that match the `PromptArgs` interface and await a response, which will come in the form of a [CancelablePromise](#). This special type of promise allows the prompt to either be accepted, rejected, or canceled.

#### Rendering

It is the responsibility of the `UserInterface` to implement the `prompt` call, interpret its request, and render the appropriate elements to the end user.

The arguments passed to the `UserInterface` that are accepted by the `prompt` call will match:

```ts
interface PromptArgs {
  title: string
  body?: string
  elements: PromptElement[]
}
```

It's up to the renderer to decide the best use of this information, but in general the elements are meant for the following purposes:

- The `title` is provided as a header for the display that will be rendered to the user
- A `body` may optionally be defined with a text-based description of what you are prompting for
- The `elements` array consists of one or more `PromptElement` instances, which instruct the `UserInterface` how to present this prompt to the user

The `elements` array is populated by one or more `PromptElement` objects that make up the desired layout presented to the user.

```ts
interface PromptElement {
  type: "accept" | "asset" | "button" | "close" | "countdown" | "link" | "qr" | "textarea"
  label?: string
  data?: unknown
}
```

These should be pre-built elements internal to the `UserInterface` that can accommodate for certain types of interactive events.

- The `type` field must match one of the strings included. Each string represents a different type of prompt
- A `label` for the element, typically providing context to the element
- A `data` object for the element, which is specific to the element itself and how it's rendered

The individual element types and required data are further outlined in the [PromptElement](#) document.

#### Responding

The `prompt` call is asynchronous and the [SessionKit](#) or [Plugin](#) will await a response from the `UserInterface` before moving on. Based on how the user responds to the rendered elements, the `UserInterface` is responsible for responding to the promise by:

- Resolve the promise (which acts as an "accept and move on" response)
- Reject the promise (which acts as "reject and move on" response)
- Cancel the promise (which aborts the entire login/transact request)

This response contains no specific data but instead offers the three above logic paths using the [CancelablePromise](#) pattern.

### Logging

##### status

```
status: (message: string) => void
```

The `status` method is a generic string-based system on the user interface which allows any process or plugin to provide basic messages directly to the user interface. These can be included in the UI to update the user about details of what process is occurring or for the developer to output as logs for debugging.

### Translation

Part of the **Communication** responsibility of the `UserInterface` is also handling the translation of all the content being passed to the user. The `UserInterface` library should implement an i18n compatible translation library which allows the use of key-based translation strings, which can be provided by either the [SessionKit](#) or any type of [Plugin](#).

#### translate

```ts
translate: UserInterfaceTranslateFunction
```

This method must follow the [UserInterfaceTranslateFunction](#) interface and utilize whichever technologies are best suited to the task to facilitate content translation. The [WebRenderer](#) serves as [an example of how this can be done](https://github.com/wharfkit/web-renderer/blob/06cddd54ec78d8110747d4e5d67989a8cd1dce8f/src/index.ts#L244-L250), as it translates Wharf's expectation of a translation string into the i18n library it's using.

```ts
export type UserInterfaceTranslateFunction = (
  key: string,
  options?: UserInterfaceTranslateOptions,
  namespace?: string
) => string
```

#### getTranslate

```ts
getTranslate: (namespace?: string) => UserInterfaceTranslateFunction
```

This method defines how Wharf or [Plugins](#) should retrieve an instance of the `UserInterfaceTranslateFunction` of a given namespace. [Plugins](#) specifically will make use of this call to access and provide translations for their content within a given user interface.

By default the [AbstractUserInterface](#) class will [define this method](https://github.com/wharfkit/session/blob/20d64d6410effda124265cd94fabf0da8a08e0c8/src/ui.ts#L118-L120) for use in plugins.

#### addTranslations

```ts
addTranslations: (translations: LocaleDefinitions) => void
```

The final translation responsibility of the `UserInterface` is the ability for Wharf or a plugin to be able to dynamically add translation strings into the user interface. This method is added so that the [SessionKit](#) and various [Plugins](#) can programmatically add translation strings to the dictionary.

The [WebRenderer](#) again serves as [an example of how this can be done](https://github.com/wharfkit/web-renderer/blob/06cddd54ec78d8110747d4e5d67989a8cd1dce8f/src/index.ts#L252-L254).

### Error Handling

#### onError

```ts
onError: (error: Error) => Promise<void>
```

A `UserInterface` must define an `onError` method to define how the user interface handles errors thrown by the [SessionKit](#). These can be displayed directly to users, interpreted and handled based on their content, and logged externally to help troubleshoot issues.

## Reference

-
