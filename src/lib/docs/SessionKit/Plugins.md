---
title: Plugins
description: change_me
category: SessionKit
order: 1
---

# Plugins

Wharf's Session Kit offers developers the opportunity to customize how a Session behaves through the use of the plugin architecture.

LoginPlugin, TransactPlugin, WalletPlugin

## Usage

How

## Purpose

Why

## Reference

- Links

The specification outlined below is targeting the two types of developers who will directly interact with the `UserInterface`, specifically those involved in building **Plugins** and **Custom User Interfaces**.

Based on the type of development being done, the following subsections may be most relevant:

### Plugin Development

A developer who is creating a [LoginPlugin](#), [TransactPlugin](#), or [WalletPlugin](#) will want to familiarize themselves with:

- The [prompt](#) method to interact with the user.
- The [status](#) method to provide logging and status updates.
- The [Translation](#) properties and methods to localize their plugin.

Many examples of plugins that have already been created and can be useful as reference material can be found in the [Plugins](#) section.

### Custom UI Development

A developer who is creating a custom `UserInterface` instance will need to implement:

- The lifecycle events for both the Login and Transact methods.
- The [Translation](#) interface to allow localization of the UI.
- The logging and error handling events.

An example of how a `UserInterface` can be implemented can be found in the [WebRenderer](#) package.

### Prompt

Outside of the event-driven life cycle methods above, one of the most important abilities a `UserInterface` provides is for [Plugins](#) to interact with users. This is done using the `prompt` call made available through the [context](#) given to every [plugin](#) to either display information or await some form of user interaction. Examples of instances where `prompt` may be called are:

- A [WalletPlugin](#) during the [login](#) and [transact](#) calls.
- A [LoginPlugin](#) during the [login](#) call.
- A [TransactPlugin](#) during the [transact](#) call.

Each [plugin](#) that makes the call needs to provide arguments that match the `PromptArgs` interface and await a response, which will come in the form of a [CancelablePromise](#). This special type of promise allows the prompt to either be accepted, rejected, or canceled from within the plugin itself.

The arguments accepted by the `prompt` call must match:

```ts
interface PromptArgs {
  title: string
  body?: string
  elements: PromptElement[]
}
```

- The `title` is provided as a header for the display that will be rendered to the user.
- A `body` may optionally be defined with a text-based description of what you are prompting for.
- The `elements` array consists of one or more `PromptElement` instances, which instruct the `UserInterface` how to present this prompt to the user.

The `PromptElement` array is populated by one or more objects that make up the desired layout presented to the user, and are defined as follows:

```ts
interface PromptElement {
  type: "accept" | "asset" | "button" | "close" | "countdown" | "link" | "qr" | "textarea"
  label?: string
  data?: unknown
}
```

- The `type` field must match on of the strings included. Each string represents a different type of prompt
- A `label` for the element, typically providing context to the element.
- A `data` object for the element, which is specific to the element itself and how its rendered.

The individual element types and required data are further outlined in the [PromptElement](#) document.

Once the promise resolves, one of three things will happen:

- Upon `resolve`, the plugin can treat this as an "accept" or "OK" message and proceed.
- Upon `reject`, the plugin can treat this as an "decline" or "Cancel" message and proceed.
- Upon `cancel`, the plugin and current life cycle method will be aborted.
